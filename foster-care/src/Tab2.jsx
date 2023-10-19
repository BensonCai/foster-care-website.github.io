import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { CustomTreeItem } from './CustomTreeItem';
import { useState } from 'react';
import ObjectiveForm from './FormObjective';
import InterventionForm from './FormIntervention';
import GoalForm from './FormGoal';
import {TreeItem} from "@mui/x-tree-view/TreeItem";


export default function CustomTreeView() {
    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);

    const handleToggle = (event, nodeIds) => {
        setExpanded(nodeIds);
    };

    const handleSelect = (event, nodeIds) => {
        setSelected(nodeIds);
    };

    const handleExpandClick = () => {
        // Collect all node IDs dynamically from your tree data
        const allNodeIds = collectNodeIds(data);

        setExpanded((oldExpanded) =>
            oldExpanded.length === 0 ? allNodeIds : []
        );
    };

    const collectNodeIds = (node) => {
        const nodeIds = [node.id];

        if (Array.isArray(node.children)) {
            node.children.forEach((child) => {
                nodeIds.push(...collectNodeIds(child));
            });
        }

        return nodeIds;
    };


    // Create a state to manage form visibility for each node
    const [formVisibility, setFormVisibility] = useState({});

    const toggleFormVisibility = (nodeId) => {
        // Create a new object to store form visibility
        const updatedFormVisibility = { ...formVisibility };
        updatedFormVisibility[nodeId] = !formVisibility[nodeId];

        // Close all other open forms
        for (const key in formVisibility) {
            if (key !== nodeId) {
                updatedFormVisibility[key] = false;
            }
        }

        setFormVisibility(updatedFormVisibility);
    };

    const [data, setData] = React.useState({
        id: 'root',
        name: ' ',
        expanded: true,
    });

    const CustomLabel = ({ node }) => {
        const [newNodeName, setNewNodeName] = React.useState('');

        const handleNameChange = (event) => {
            setNewNodeName(event.target.value);
        };

        const addNode = () => {
            let newNodeNameToUse = newNodeName || 'Objective ';

            if (node.name === ' ') {
                newNodeNameToUse = newNodeName || 'Goal ';
            }

            if (node.name === 'Objective ') {
                newNodeNameToUse = 'Intervention ';
            }

            const newNode = {
                id: `new-${Date.now()}`,
                name: newNodeNameToUse,
                expanded: true,
            };

            const updatedData = updateNode(data, node, newNode);

            setData(updatedData);
            handleExpandClick();
        };

        return (
            <div>
                {node.name}
                {node.name === ' ' && (
                    <input
                        style={{ width: '50%' }}
                        type="text"
                        placeholder="Goal"
                        value={newNodeName}
                        onChange={handleNameChange}
                    />
                )}
                {node.name !== 'Intervention ' && (
                    <button onClick={addNode}> + </button>
                )}
            </div>
        );
    };

    const updateNode = (currentNode, targetNode, newNode) => {
        if (currentNode.id === targetNode.id) {
            return {
                ...currentNode,
                children: [...(currentNode.children || []), newNode],
            };
        } else if (currentNode.children) {
            const updatedChildren = currentNode.children.map((childNode) =>
                updateNode(childNode, targetNode, newNode)
            );
            return { ...currentNode, children: updatedChildren };
        } else {
            return currentNode;
        }
    };

    const renderTree = (nodes) => (
        <CustomTreeItem
            key={nodes.id}
            nodeId={nodes.id}
            label={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CustomLabel node={nodes} />
                    {nodes.id !== 'root' && (
                        <button onClick={() => toggleFormVisibility(nodes.id)}>
                            {formVisibility[nodes.id] ? 'close' : 'open'}
                        </button>
                    )}
                </div>
            }
        >
            {formVisibility[nodes.id] && (
                nodes.name === 'Objective ' ? (
                    <ObjectiveForm />
                ) : nodes.name === 'Intervention ' ? (
                    <InterventionForm />
                ) : (
                    <GoalForm />
                )
            )}

            {Array.isArray(nodes.children)
                ? nodes.children.map((node) => renderTree(node))
                : null}
        </CustomTreeItem>
    );


return (
    <Box sx={{ minHeight: 270, flexGrow: 1, maxWidth: 300 }}>
        <Box sx={{ display: 'flex' }}>
            <Button onClick={handleExpandClick}>
                {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
            </Button>
        </Box>
        <TreeView
            aria-label="controlled"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            expanded={expanded}
            selected={selected}
            onNodeToggle={handleToggle}
            onNodeSelect={handleSelect}
        >
            {renderTree(data)}
        </TreeView>
    </Box>
);
}

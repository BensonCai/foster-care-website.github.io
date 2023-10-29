import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { CustomTreeItem } from './CustomTreeItem';
import {useEffect, useState} from 'react';
import ObjectiveForm from './FormObjective';
import InterventionForm from './FormIntervention';
import GoalForm from './FormGoal';

export default function CustomTreeView() {
    const [expanded, setExpanded] = React.useState([]);
    // const [isFirstNodeAdded, setIsFirstNodeAdded] = useState(false);
    const [selected, setSelected] = React.useState([]);
    const [goalCounter, setGoalCounter] = React.useState(1);
    const [objectiveCounter, setObjectiveCounter] = React.useState(1);
    const [interventionCounter, setInterventionCounter] = React.useState(1);

    const [data, setData] = React.useState({
        id: 'root',
        name: ' ',
        expanded: true,
    });

    useEffect(() => {
        const expandedNodes = JSON.parse(localStorage.getItem('expandedNodes'));
        if (expandedNodes) {
            // console.log("Retrieving: ", expandedNodes);
            setExpanded(expandedNodes); // Set expanded with the array directly
            // console.log("Expanded:", expanded);
        }
    }, []);


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            localStorage.setItem('expandedNodes', JSON.stringify(expanded));
            localStorage.setItem('treeData', JSON.stringify(data));
            // console.log("treeData being stored: ", JSON.stringify(data));
        }, 500); // 500 milliseconds

        return () => clearTimeout(timeoutId);
    }, [expanded, data]);


    useEffect(() => {
        // Retrieve the data from local storage
        const localStorageData = JSON.parse(localStorage.getItem('treeData'));
        // console.log("treeData stored: ", localStorageData)
        if (localStorageData) {
            setData(localStorageData);
        }
    }, []);



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

    // Create a state to track the open and close timestamps for each form
    const [formTimeSpent, setFormTimeSpent] = useState({});

    useEffect(() => {
        // Retrieve form time spent from local storage
        const storedFormTimeSpent = JSON.parse(localStorage.getItem('formTimeSpent'));
        if (storedFormTimeSpent) {
            setFormTimeSpent(storedFormTimeSpent);
        }
    }, []);

    const toggleFormVisibility = (nodeId) => {
        const updatedFormVisibility = { ...formVisibility };

        // Toggle the form visibility
        updatedFormVisibility[nodeId] = !formVisibility[nodeId];

        // Update the open and close timestamps
        const updatedFormTimeSpent = { ...formTimeSpent };
        const now = Date.now();

        if (updatedFormVisibility[nodeId]) {
            // Form is opening
            updatedFormTimeSpent[nodeId] = updatedFormTimeSpent[nodeId] || 0; // Initialize if not set
            updatedFormTimeSpent[nodeId] -= now; // Negative timestamp indicates the form is open
        } else {
            // Form is closing
            const openTimestamp = formTimeSpent[nodeId];
            if (openTimestamp) {
                const elapsedTime = openTimestamp + now;
                console.log(`Form ${nodeId} was open for ${elapsedTime} milliseconds`);
                updatedFormTimeSpent[nodeId] = elapsedTime;

                // Store the total time spent in local storage
                localStorage.setItem('formTimeSpent', JSON.stringify(updatedFormTimeSpent));
            }
        }

        // Close all other open forms
        for (const key in updatedFormVisibility) {
            if (key !== nodeId) {
                updatedFormVisibility[key] = false;
            }
        }

        setFormVisibility(updatedFormVisibility);
        setFormTimeSpent(updatedFormTimeSpent);
    };


    const CustomLabel = ({ node }) => {
        const [newNodeName, setNewNodeName] = React.useState('');
        // Initialize counters for each node type

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

            // Create a new ID based on the node type and counter
            let newId = '';
            if (newNodeNameToUse === 'Goal ') {
                newId = `goal ${goalCounter}`;
                setGoalCounter(goalCounter + 1);
                console.log(goalCounter)
            } else if (newNodeNameToUse === 'Objective ') {
                newId = `objective ${objectiveCounter}`;
                setObjectiveCounter(objectiveCounter + 1);
            } else if (newNodeNameToUse === 'Intervention ') {
                newId = `Intervention: ${interventionCounter}`;
                setInterventionCounter(interventionCounter + 1);
            }

            const newNode = {
                // id: `new-${Date.now()}`,
                id: newId,
                name: newNodeNameToUse,
                expanded: true,
            };
            // Preserve the expanded state of existing nodes
            const updatedDataWithNewNode = updateNode(data, node, newNode);

            if (!expanded.includes('root')) {
                setExpanded([...expanded, 'root', newNode.id]);
            } else {
                setExpanded([...expanded, newNode.id]);
            }

            setData(updatedDataWithNewNode);
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
                    <InterventionForm interventionCounter={nodes.id}/>
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

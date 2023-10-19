import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem, useTreeItem } from '@mui/x-tree-view/TreeItem';

const CustomContent = React.forwardRef(function CustomContent(props, ref) {
    const {
        classes,
        className,
        label,
        nodeId,
        icon: iconProp,
        expansionIcon,
        displayIcon,
    } = props;

    const {
        disabled,
        expanded,
        selected,
        focused,
        handleExpansion,
        handleSelection,
        preventSelection,
    } = useTreeItem(nodeId);

    const icon = iconProp || expansionIcon || displayIcon;

    const handleMouseDown = (event) => {
        preventSelection(event);
    };

    const handleExpansionClick = (event) => {
        handleExpansion(event);
    };

    const handleSelectionClick = (event) => {
        handleSelection(event);
    };

    return (
        <div
            className={classes.root}
            onMouseDown={handleMouseDown}
            ref={ref}
        >
            <div onClick={handleExpansionClick} className={classes.iconContainer}>
                {icon}
            </div>
            <div onClick={handleSelectionClick} className={classes.label}>
                {label}
            </div>
        </div>
    );
});

const CustomTreeItem = React.forwardRef(function CustomTreeItem(props, ref) {
    return <TreeItem ContentComponent={CustomContent} {...props} ref={ref} />;
});

const treeData = [
    {
        id: '1',
        label: 'Applications',
        children: [
            {
                id: '2',
                label: 'Calendar',
            },
            {
                id: '3',
                label: 'Chrome',
            },
            {
                id: '4',
                label: 'Webstorm',
            },
        ],
    },
    {
        id: '5',
        label: 'Documents',
        children: [
            {
                id: '6',
                label: 'MUI',
                children: [
                    {
                        id: '7',
                        label: 'src',
                        children: [
                            {
                                id: '8',
                                label: 'index.js',
                            },
                            {
                                id: '9',
                                label: 'tree-view.js',
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

const mapTreeDataToComponents = (data) => {
    return data.map((item) => (
        <CustomTreeItem nodeId={item.id} label={item.label}>
            {item.children && mapTreeDataToComponents(item.children)}
        </CustomTreeItem>
    ));
};

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
        setExpanded((oldExpanded) =>
            oldExpanded.length === 0 ? ['1', '5', '6', '7'] : [],
        );
    };

    return (
        <Box sx={{ minHeight: 270, flexGrow: 1, maxWidth: 300 }}>
            <Box sx={{ mb: 1 }}>
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
                {mapTreeDataToComponents(treeData)}
            </TreeView>
        </Box>
    );
}

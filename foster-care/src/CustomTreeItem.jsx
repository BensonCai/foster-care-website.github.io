import * as React from "react";
import { TreeItem, useTreeItem } from "@mui/x-tree-view/TreeItem";
import clsx from "clsx";
import Typography from "@mui/material/Typography";

export const CustomContent = React.forwardRef(function CustomContent(props, ref) {
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
        console.log("Expansion clicked");
    };
    const handleSelectionClick = (event) => {
        handleSelection(event);
        console.log("Selection clicked");
    };

    const hideIcon = true; // Change this condition as per your requirements

    const isRootNode = nodeId === 'root';

    return (
        <div
            className={clsx(className, classes.root, {
                [classes.expanded]: expanded,
                [classes.selected]: selected,
                [classes.focused]: focused,
                [classes.disabled]: disabled,
            })}
            onMouseDown={handleMouseDown}
            ref={ref}
        >
            {/* Conditionally render the icon for the root node */}
            {isRootNode && (
                <div
                    onClick={handleExpansionClick}
                    className={classes.iconContainer}
                >
                    {icon}
                </div>
            )}

            <Typography
                onClick={handleSelectionClick}
                component="div"
                className={classes.label}
            >
                {label}
            </Typography>
        </div>
    );
});

export const CustomTreeItem = React.forwardRef(function CustomTreeItem(props, ref) {
    return <TreeItem ContentComponent={CustomContent} {...props} ref={ref} />;
});
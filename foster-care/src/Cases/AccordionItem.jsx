import React from 'react';
import View from "../view";
import "../App.css";
import usePageTimer from "./pagetimer";

function AccordionItem({ item, isOpen, onToggle }) {
    // const uniqueTabKey = `accordion_${item.id}`

    // const elapsedTime = usePageTimer(uniqueTabKey)

    return (
        // open the accordion
        <div>
            <div className={`container accordion-item ${isOpen ? 'open' : ''}`}>
                <div className="accordion-title" onClick={onToggle}>
                    {item.title}
                </div>
                <div className="container2 content">
                    {isOpen && <View url={item.pdfUrl}></View>}
                    {/*<div>Time spent: {elapsedTime} seconds</div>*/}

                </div>
            </div>
        </div>


    );
}

export default AccordionItem;

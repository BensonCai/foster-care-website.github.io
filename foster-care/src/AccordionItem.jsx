import React from 'react';
import View from "./view";
import "./App.css";

function AccordionItem({ item, isOpen, onToggle }) {
    return (
        // open the accordion
        <div>
            <div className={`container accordion-item ${isOpen ? 'open' : ''}`}>
                <div className="accordion-title" onClick={onToggle}>
                    {item.title}
                </div>
                <div className="container2 content">
                    {isOpen && <View url={item.pdfUrl}></View>}
                </div>
            </div>
        </div>

    );
}

export default AccordionItem;

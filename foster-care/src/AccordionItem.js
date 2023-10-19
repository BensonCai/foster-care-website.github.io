import React, { useState, useEffect } from 'react';
import View from "./view";

function AccordionItem({ item, isOpen, onToggle }) {
    // const [timer, setTimer] = useState(0);
    // console.log(item)

    // useEffect(() => {
    //     let interval;
    //     if (isOpen) {
    //         interval = setInterval(() => {
    //             setTimer((prevTimer) => prevTimer + 1);
    //         }, 1000);
    //     } else {
    //         clearInterval(interval);
    //     }
    //
    //     return () => clearInterval(interval);
    // }, [isOpen]);

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

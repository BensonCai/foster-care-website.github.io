import React, { useState, useEffect } from 'react';
import AccordionItem from './AccordionItem';

function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const [totalTime, setTotalTime] = useState(0);

    // active = open/ not-active = not open
    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        let interval;
        if (activeIndex !== null) {
            interval = setInterval(() => {
                setTotalTime((prevTotalTime) => prevTotalTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="accordion">
            {/*TIMER*/}
            {/*<div className="total-time">Total time spent: {totalTime} seconds</div>*/}
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    item={item}
                    isOpen={activeIndex === index}
                    onToggle={() => handleItemClick(index)}
                />
            ))}
        </div>
    );
}

export default Accordion;

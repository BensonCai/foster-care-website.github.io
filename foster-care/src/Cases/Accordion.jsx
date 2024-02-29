import React, {useEffect, useRef, useState} from 'react';
import AccordionItem from './AccordionItem';

function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [timer, setTimer] = useState(null); // State to hold the timer reference
    const startTimeRef = useRef(null);


    // active = open | not-active = not open
    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);

    };

    useEffect(() => {
        // Clear the previous timer if it exists
        if (activeIndex !== null) {
            // if (timer) {
                clearInterval(timer);
            // }

            // Start a new timer for the current tab
            const startTime = Date.now(); // Record the start time when the tab is focused
            startTimeRef.current = startTime; // Store the start time
            const newTimer = setInterval(() => {
                const currentTime = Date.now();
                const elapsedTimeSeconds = Math.floor((currentTime - startTime) / 1000); // Calculate elapsed time in seconds
                setElapsedTime(elapsedTimeSeconds);
            }, 1000); // Update elapsed time every second

            // Save the timer reference to state
            setTimer(newTimer);

            return () => {
                // Clean up the timer when the component unmounts or when the tab switches
                clearInterval(newTimer);
            };
        }
    }, [activeIndex]);

    useEffect(() => {
        // Retrieve existing elapsed times array from local storage
        const storedTimes = JSON.parse(localStorage.getItem('elapsedTimes')) || [];

        // Check if there is a start time stored for the current tab visit
        if (startTimeRef.current !== null && activeIndex !== null) {
            const uniqueKey = `${activeIndex}_${startTimeRef.current}`

            // searches for the uniqueKey of current visit session
            const index = storedTimes.findIndex(item => item.uniqueKey === uniqueKey);
            console.log(index)

            // If the tabKey exists in the storedTimes array, update its elapsedTime
            if (index !== -1) {
                storedTimes[index].elapsedTime = elapsedTime;
            } else {
                // If the tabKey does not exist, add a new object to the array
                // Aka. new tab visit
                storedTimes.push({ uniqueKey, elapsedTime });
            }

            // Save the updated elapsed times array to local storage
            //TODO insert a filter function to get rid of entries with 0 elapsed time

            localStorage.setItem('elapsedTimes', JSON.stringify(storedTimes));

        }
    }, [elapsedTime, activeIndex]);



    // Store the totalTime in localStorage whenever it changes
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            localStorage.setItem('totalTime', totalTime.toString());
        }, 1);

        return () => clearTimeout(timeoutId);

    }, [totalTime]);

    useEffect(() => {
        let interval;
        if (activeIndex !== null) {
            console.log("not null");
            // increases total time by a second
            interval = setInterval(() => {
                setTotalTime((prevTotalTime) => prevTotalTime + 1);
            }, 1000);
        } else {
            const savedTotalTime = localStorage.getItem('totalTime');
            // console.log("saved time: ", savedTotalTime);
            if (savedTotalTime) {
                setTotalTime(parseInt(savedTotalTime));
            }
        }

        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="accordion">
            {/* TIMER */}
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

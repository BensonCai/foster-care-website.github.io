import { useState, useEffect, useRef } from 'react';

const usePageTimer = (tabKey) => {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [timer, setTimer] = useState(null); // State to hold the timer reference

    // Reference to store the start time of the current tab visit
    const startTimeRef = useRef(null);
    const previousTabKeyRef = useRef(null); // Reference to store the previous tabKey

    useEffect(() => {
        // Start a new timer for the current tab if tabKey has changed or if it's the first render
        if (tabKey !== previousTabKeyRef.current || previousTabKeyRef.current === null) {
            startTimeRef.current = Date.now(); // Record the start time when the tab is focused
            previousTabKeyRef.current = tabKey; // Update the previousTabKeyRef
        }

        const newTimer = setInterval(() => {
            const currentTime = Date.now();
            const elapsedSeconds = Math.floor((currentTime - startTimeRef.current) / 1000); // Calculate elapsed time in seconds

            // Update the elapsed time only if it has changed
            if (elapsedSeconds !== elapsedTime) {
                setElapsedTime(elapsedSeconds);
                localStorage.setItem('elapsedTime', JSON.stringify(elapsedSeconds)); // Store the elapsed time in localStorage

                // Check if there is a start time stored for the current tab visit
                if (startTimeRef.current !== null) {
                    const uniqueKey = `${tabKey}_${startTimeRef.current}`;

                    // Retrieve existing elapsed times array from local storage
                    const storedTimes = JSON.parse(localStorage.getItem('elapsedTimes')) || [];

                    // Searches for the uniqueKey of current visit session
                    const index = storedTimes.findIndex(item => item.uniqueKey === uniqueKey);

                    // If the tabKey exists in the storedTimes array, update its elapsedTime
                    if (index !== -1) {
                        storedTimes[index].elapsedTime = elapsedSeconds;
                    } else {
                        // If the tabKey does not exist, add a new object to the array
                        // Aka. new tab visit
                        storedTimes.push({ uniqueKey, elapsedTime: elapsedSeconds });
                    }
                    // Save the updated elapsed times array to local storage
                    // TODO: Insert a filter function to get rid of entries with 0 elapsed time
                    localStorage.setItem('elapsedTimes', JSON.stringify(storedTimes));
                }
            }
        }, 1000); // Update elapsed time every second

        // Save the timer reference to state
        setTimer(newTimer);

        return () => {
            // Clean up the timer when the component unmounts or when the tab switches
            clearInterval(newTimer);
        };
    }, []);

    return elapsedTime;
};

export default usePageTimer;

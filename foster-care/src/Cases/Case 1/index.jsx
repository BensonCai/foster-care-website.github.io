import React, { useEffect } from 'react';
import usePageTimer from "../pagetimer";

function Index() {
    const elapsedTime = usePageTimer('Home')

    useEffect(() => {
        const storedCase = localStorage.getItem('case');
        if (!storedCase) {
            console.log("no key")
            try {
                localStorage.setItem('case', '0');
                console.log("New 'case' key set in localStorage");
                console.log('Result of setting item:', localStorage.getItem('case'));
                window.location.reload();
            } catch (error) {
                console.error('Error while setting item:', error);
            }
        } else {
            // console.log('Existing case key found:', storedCase);
        }
    }, []);

    return (
        <div>
            <h1>Foster Care Website</h1>
            <h5>This website is a simulation of your typical treatment planning process.
                You will have 30 minutes for each case, please use this time to review case documentation as you see fit and develop a treatment plan
                including a clinical summary/narrative, goals, objectives, and interventions. Your progress through the site will be collected for study purposes.
                As you go through this process, please continually verbalize your thought process as explained during the introduction.
            </h5>
            {/*<p>{elapsedTime} sec</p>*/}
        </div>
    );
}

export default Index;

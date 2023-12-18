import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    const [caseValue, setCaseValue] = useState('');

    useEffect(() => {
        // Retrieve the value of 'case' from localStorage
        const storedCase = localStorage.getItem('case');
        if (storedCase) {
            setCaseValue(storedCase);
        }
        // console.log("stored case", caseValue)
    }, [caseValue]);

    if (caseValue && parseInt(caseValue) >= 4) {
        return null; // Return null to hide the navigation
    }

    return (
        <div className="nav">
            <nav>
                <ul className="align-items">
                    <li><Link to="/home">Home</Link></li>
                    {/* Conditionally render based on the state value */}
                    {caseValue === '1' && <li><Link to="/case1pdfs">PDFs</Link></li>}
                    {caseValue === '2' && <li><Link to="/case2pdfs">PDFs</Link></li>}
                    {caseValue === '3' && <li><Link to="/case3pdfs">PDFs</Link></li>}
                    {/*  */}
                    <li><Link to="/forms">Forms</Link></li>
                    <li><Link to="/narrative">Narrative</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;

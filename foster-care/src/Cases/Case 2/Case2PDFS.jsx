import React from 'react';
import Accordion from '../Accordion';
import View from "../../view";
import usePageTimer from "../pagetimer";

export default function Case2PDFS() {
    const elapsedTime = usePageTimer('Referral Information2')

    const accordionItems = [
        {
            title: 'YCS',
            // title: 'Youth Connection Scale',
            pdfUrl: 'https://buffalo.box.com/s/fyq5fcmhu13z4hsnulyow2vze4tx9kmf',
        },
        {
            title: 'HCRS',
            // title: 'Hillside Clinical Risk Screen',
            pdfUrl: 'https://buffalo.box.com/s/wtwbeziq3yyencj5ayialh74ywx92qs1',
        },
        {
            title: 'DAP',
            pdfUrl: 'https://buffalo.box.com/s/ci8rw04c1prmq1ujunf7y9tqsqjjizuk',
        },
        {
            // title: 'CANS',
            title: 'CANS',
            pdfUrl: 'https://buffalo.box.com/s/ake6oy7pcsntecd9p9w1btriiovi3oge',
        },
        {
            // title: 'PDF 12',
            title: 'Biopsychosocial V2',
            pdfUrl: 'https://buffalo.box.com/s/ttb436bawnxtekf0iczyc6gmxgatlxdb',
        },
        {
            // title: 'PDF 13',
            title: 'ACE',
            pdfUrl: 'https://buffalo.box.com/s/zl231zmy1f1jamd2kelukd9q0qfhq9b9',
        },
    ];

    return (
        // <div className="maincontainer">
        //     <h1>PDFs</h1>
        //     <div className="accordion-container">
        //         <Accordion items={accordionItems}></Accordion>
        //     </div>
        // </div>
        <div>
            {/*<h1>PDFs</h1>*/}
            {/* Comment Out Deploying*/}
            {/*<div>Total Duration: {totalDuration} Seconds</div>*/}

            <div className="maincontainer">
                <Accordion items={accordionItems}></Accordion>
            </div>
            <p>{elapsedTime} sec</p>
        </div>
    );
}

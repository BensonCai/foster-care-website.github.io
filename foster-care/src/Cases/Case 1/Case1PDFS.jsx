import React from 'react';
import Accordion from '../Accordion';
import View from "../../view";
import usePageTimer from "../pagetimer";

export default function Case1PDFS() {
    const elapsedTime = usePageTimer('Referral Information')

    const accordionItems = [
        {
            // title: 'PDF1',
            title: 'Youth Connection Scale',
            pdfUrl: 'https://buffalo.box.com/s/vko1e8gl6layql0swvmz12q4cfqlv8ht',
        },
        {
            // title: 'PDF 2',
            title: 'Hillside Clinical Risk Screen',
            pdfUrl: 'https://buffalo.box.com/s/8n1pl3vdckvgg9e3d1f7f980qh4iucr0',
        },
        {
            // title: 'PDF 3',
            title: 'DAP',
            pdfUrl: 'https://buffalo.box.com/s/w9347kyvyt98q2igx8sx6i2fsopipwt6',
        },
        {
            // title: 'PDF 4',
            title: 'CANS',
            pdfUrl: 'https://buffalo.box.com/s/tk3d650xo2cthnobgqd612euv8et6ee7',
        },
        {
            // title: 'PDF 5',
            title: 'Biopsychosocial V2',
            pdfUrl: 'https://buffalo.box.com/s/ul5uzkjlxw2h6hgap56k84x2yme1dhxi',
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

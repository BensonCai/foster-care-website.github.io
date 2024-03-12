import React from 'react';
import Accordion from '../Accordion';
import View from "../../view";
import usePageTimer from "../pagetimer";

export default function Case3PDFS() {
    const elapsedTime = usePageTimer('Referral Information3')


    const accordionItems = [
        {
            title: 'YCS',
            // title: 'Youth Connection Scale',
            pdfUrl: 'https://buffalo.box.com/s/twm85xow2uj6p20aqjumh9eqo4nobt6a',
        },
        {
            title: 'PDF 7',
            // title: 'Hillside Clinical Risk Screen',
            pdfUrl: 'https://buffalo.box.com/s/8csfii3pjp3b5bc92xk2yggzhi054qb2',
        },
        {
            title: 'DAP',
            pdfUrl: 'https://buffalo.box.com/s/9c2zwg2rke0ap1ts1hf9awrso9qka7pt',
        },
        {
            // title: 'PDF 12',
            title: 'Biopsychosocial V2',
            pdfUrl: 'https://buffalo.box.com/s/adncw3x0pa1xkwnsn4be2uitokhej1qz',
        },
        {
            // title: 'PDF 13',
            title: 'ACE',
            pdfUrl: 'https://buffalo.box.com/s/c0ym8oowqbpq4qaask61679bd415l9pv',
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
            {/*<p>{elapsedTime} sec</p>*/}

        </div>
    );
}

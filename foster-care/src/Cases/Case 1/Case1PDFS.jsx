import React from 'react';
import Accordion from '../Accordion';
import View from "../../view";
import usePageTimer from "../pagetimer";

export default function Case1PDFS() {
    const elapsedTime = usePageTimer('Referral Information')

    const accordionItems = [
        {
            // title: 'PDF1',
            title: 'Youth Connection Scale for DD',
            pdfUrl: 'https://drive.google.com/file/d/16r7uGATJwvzjfEiCua-krCP8P4YUEv7j/preview',
        },
        {
            // title: 'PDF 2',
            title: 'Youth Connection Scale Ages 15 - 21',
            pdfUrl: 'https://drive.google.com/file/d/1UGr1-EbdwH-Dnr7j8OSL7k7qG5BDY-ba/preview',
        },
        {
            // title: 'PDF 3',
            title: 'Youth Connection Scale Ages 9 - 14',
            pdfUrl: 'https://drive.google.com/file/d/1gVuLh8t6Uz7LsseRXH54La5tdFgGIa15/preview',
        },
        {
            // title: 'PDF 4',
            title:'UCLA PTSD Reaction Index',
            pdfUrl: 'https://drive.google.com/file/d/1E-YnQaxh_3nskDDgeaIj33FpOXT3hmTM/preview',
        },
        {
            // title: 'PDF 5',
            title: 'Suicide Risk Assessment',
            pdfUrl: 'https://drive.google.com/file/d/1XYzBrTgZPfiRYptUNQo1U9_Lp0i-bq3V/preview',
        },
        {
            // title: 'PDF 6',
            title: 'HSA-1101-1103',
            pdfUrl: 'https://drive.google.com/file/d/1mLlxYzLAZ2HozgwbRg4KmclxyggZ8Igo/preview',
        },
        {
            // title: 'PDF 7',
            title: 'Hillside Clinical Risk Screen',
            pdfUrl: 'https://drive.google.com/file/d/1Ophg8Yf3xtB4EhkZs1q08-XvbEv0Vl5s/preview',
        },
        {
            title: 'DAP Ages 9 to 11',
            pdfUrl: 'https://drive.google.com/file/d/170eE3Ipksg6qOGGU3z449JlyvAn8OyjV/preview',
        },
        {
            // title: 'PDF 9',
            title: 'DAP Ages 11 to 18',
            pdfUrl: 'https://drive.google.com/file/d/1UaTOqWbs4ebuHvHQWCG-Uv-SKg5azMcD/preview',
        },
        {
            // title: 'PDF 10',
            title: 'CANS Ages 6 to 21',
            pdfUrl: 'https://drive.google.com/file/d/1mMyw8TQkJ_45olINs7NOkgcdLvjgS2_L/preview',
        },
        {
            // title: 'PDF 11',
            title: 'CANS Ages 0 to 5',
            pdfUrl: 'https://drive.google.com/file/d/1IlElfTsB7OeTkelsiYkhaOAod_A_8zNP/preview',
        },
        {
            // title: 'PDF 12',
            title: 'Biopsychosocial V2',
            pdfUrl: 'https://drive.google.com/file/d/10OmhtMjfhusSBIEz7Q4CdgJM12TEaGjO/preview',
        },
        {
            // title: 'PDF 13',
            title: 'ACE Calculator',
            pdfUrl: 'https://drive.google.com/file/d/1smFjufnQzwzQ6scs7dyAKV6bE48xkETs/preview',
        },
        {
            // title: 'PDF 14',
            title: 'ACE-Teen Self-Report',
            pdfUrl: 'https://drive.google.com/file/d/11j8CiBpc8bAlqs8W8yDaNfYcthj3qMGo/preview',
        },
        {
            // title: 'PDF 15',
            title: 'ACE-Child',
            pdfUrl: 'https://drive.google.com/file/d/1AnVFhVt3jeqpwL9IrdyaWX1xhwv9LIiB/preview',
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
            <div className="maincontainer">
                <Accordion items={accordionItems}></Accordion>
            </div>
            {/*<div>Total Duration: {totalDuration} Seconds</div>*/}
            <p>{elapsedTime} sec</p>
        </div>
    );
}

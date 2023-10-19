import React from 'react';
import Accordion from './Accordion';
import View from "./view";

export default function Tab1() {
    const accordionItems = [
        {
            title: 'PDF 1',
            pdfUrl: 'https://drive.google.com/file/d/16r7uGATJwvzjfEiCua-krCP8P4YUEv7j/preview',
        },
        {
            title: 'PDF 2',
            pdfUrl: 'https://drive.google.com/file/d/1UGr1-EbdwH-Dnr7j8OSL7k7qG5BDY-ba/preview',
        },
        {
            title: 'PDF 3',
            pdfUrl: 'https://drive.google.com/file/d/1gVuLh8t6Uz7LsseRXH54La5tdFgGIa15/preview',
        },
        {
            title: 'PDF 4',
            pdfUrl: 'https://drive.google.com/file/d/1E-YnQaxh_3nskDDgeaIj33FpOXT3hmTM/preview',
        },
        {
            title: 'PDF 5',
            pdfUrl: 'https://drive.google.com/file/d/1XYzBrTgZPfiRYptUNQo1U9_Lp0i-bq3V/preview',
        },
        {
            title: 'PDF 6',
            pdfUrl: 'https://drive.google.com/file/d/1mLlxYzLAZ2HozgwbRg4KmclxyggZ8Igo/preview',
        },
        {
            title: 'PDF 7',
            pdfUrl: 'https://drive.google.com/file/d/1Ophg8Yf3xtB4EhkZs1q08-XvbEv0Vl5s/preview',
        },
        {
            title: 'PDF 8',
            pdfUrl: 'https://drive.google.com/file/d/170eE3Ipksg6qOGGU3z449JlyvAn8OyjV/preview',
        },
        {
            title: 'PDF 9',
            pdfUrl: 'https://drive.google.com/file/d/1UaTOqWbs4ebuHvHQWCG-Uv-SKg5azMcD/preview',
        },
        {
            title: 'PDF 10',
            pdfUrl: 'https://drive.google.com/file/d/1mMyw8TQkJ_45olINs7NOkgcdLvjgS2_L/preview',
        },
        {
            title: 'PDF 11',
            pdfUrl: 'https://drive.google.com/file/d/1IlElfTsB7OeTkelsiYkhaOAod_A_8zNP/preview',
        },
        {
            title: 'PDF 12',
            pdfUrl: 'https://drive.google.com/file/d/10OmhtMjfhusSBIEz7Q4CdgJM12TEaGjO/preview',
        },
        {
            title: 'PDF 13',
            pdfUrl: 'https://drive.google.com/file/d/1smFjufnQzwzQ6scs7dyAKV6bE48xkETs/preview',
        },
        {
            title: 'PDF 14',
            pdfUrl: 'https://drive.google.com/file/d/11j8CiBpc8bAlqs8W8yDaNfYcthj3qMGo/preview',
        },
        {
            title: 'PDF 15',
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
            <h1>PDFs</h1>
            {/*<div>Total Duration: {totalDuration} Seconds</div>*/}
            <div className="maincontainer">
                <Accordion items={accordionItems}></Accordion>
            </div>
        </div>
    );
}

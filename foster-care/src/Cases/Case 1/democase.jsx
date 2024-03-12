import React from 'react';
import Accordion from '../Accordion';
import View from "../../view";
import usePageTimer from "../pagetimer";

export default function Democase() {
    const elapsedTime = usePageTimer('Referral Information')

    const accordionItems = [
        {
            title: 'Case 2 Youth Scale for DD',
            // title: 'Youth Connection Scale for DD',
            pdfUrl: 'https://drive.google.com/file/d/1Zzz6973lIPscnEtbTQNx9854esXTYJMT/preview',
        },
        {
            title: 'PDF 2',
            // title: 'Youth Connection Scale Ages 15 - 21',
            pdfUrl: 'https://drive.google.com/file/d/1Zzz6973lIPscnEtbTQNx9854esXTYJMT/preview',
        },
        {
            title: 'PDF 3',
            // title: 'Youth Connection Scale Ages 9 - 14',
            pdfUrl: 'https://drive.google.com/file/d/1Zzz6973lIPscnEtbTQNx9854esXTYJMT/preview',
        },
        {
            title: 'PDF 4',
            // title:'UCLA PTSD Reaction Index',
            pdfUrl: 'https://drive.google.com/file/d/1Zzz6973lIPscnEtbTQNx9854esXTYJMT/preview',
        },
        {
            title: 'PDF 5',
            // title: 'Suicide Risk Assessment',
            pdfUrl: 'https://drive.google.com/file/d/1Zzz6973lIPscnEtbTQNx9854esXTYJMT/preview',
        }
    ];

    return (
        <div>
            <div className="maincontainer">
                <Accordion items={accordionItems}></Accordion>
            </div>
            {/*<p>{elapsedTime} seconds</p>*/}
        </div>
    );
}

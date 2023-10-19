import React from 'react';

function View({ url }) {
    return (
        <div className="iframe-container">
            <iframe
                src={url}
                title="External Website"
                style={{width: "80%"}}
                // width={500}
                height={500}
            />
        </div>
    );
}

export default View;

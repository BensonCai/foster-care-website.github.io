import React from 'react';

function View({ url }) {
    return (
        <div className="iframe-container">
            <iframe
                src={url}
                title="External Website"
                style={{width: "100%", height: "100%"}}
            />
        </div>
    );
}

export default View;

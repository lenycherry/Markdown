import React from 'react';
import marked from 'marked';

function Result(props) {


    const text = props.markdownText;

    const renderText = (text) => {
        const renderMarkdownText = marked(text, { sanitize: true });
        return { __html: renderMarkdownText };
    }

    return (

        <div className="col-sm-6">
            <div dangerouslySetInnerHTML={renderText(text)} />
        </div>
    )
}

export default Result

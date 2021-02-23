import React, { useState } from 'react';
import './App.css';
import Mardown from '../Markdown';
import Result from '../Result';
import { sampleText } from '../../sampleText';



function App() {

    const [markdownText, setMarkdownText] = useState(sampleText);

    const editText = (e) => {
        const text = e.target.value;
        setMarkdownText(text);
    };



    return (

        <div className='App container'>
            <div className="row">

            <Mardown markdownText={markdownText} editText={editText} />
            <Result markdownText={markdownText} />
            </div>
        </div>
    )
}

export default App;

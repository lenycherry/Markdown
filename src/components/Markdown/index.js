import React from 'react';
import { sampleText } from '../../sampleText';

function Mardown() {
    return (

        
            <div className="col-sm-6">
           <textarea value={ sampleText } rows='35' className="form-control">
           </textarea>
           </div>
        
    )
}

export default Mardown

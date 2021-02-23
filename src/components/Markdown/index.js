import React from 'react';


function Mardown(props) {

    return (


        <div className="col-sm-6">
            <textarea
                value={props.markdownText}
                rows='35'
                className="form-control"
                onChange={props.editText}>
            </textarea>
        </div>

    )
}

export default Mardown

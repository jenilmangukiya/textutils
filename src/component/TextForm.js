import React, { useState } from 'react';
// import Alert from './Alert';


export default function TextForm(props) {
    const handelUpClick = () => {
        var newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("success","Connverted to uppercase ");
    }

    const handelLowClick = () => {
        var newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("success","Connverted to lowercase ");
    }
    const handelExtraSpace = () => {
        var newtext  = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("success","Removed Extra Spaces");
    }
    
    const handelCopyClick = () => {
        var newtext  = document.getElementById("mytext");
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
        props.showAlert("success","Copied to clipboard");
    }

    const handelClearClick = () => {
        var newtext = "";
        setText(newtext);
        props.showAlert("success","Text Cleard!");
    }
    const onTextChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
       
            <div className="container">
                <div className="my-3">
                    <h4 style={{color:props.mode === "dark" ? 'white' : 'black'}}>Enter some text here...</h4>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={onTextChange} id="mytext" rows="8" style={{backgroundColor:props.mode === "dark" ? 'gray' : 'white',color:props.mode === "dark" ? 'white' : 'black'}}></textarea>
                    </div>
                </div>
                <div className="my-1">
                    <button className="btn btn-primary mx-1" onClick={handelUpClick}>Upper Case</button>
                    <button className="btn btn-primary mx-1" onClick={handelLowClick}>Lower Case</button>
                    <button className="btn btn-primary mx-1" onClick={handelExtraSpace}>Remove Extra Space</button>
                    <button className="btn btn-primary mx-1" onClick={handelCopyClick}>Copy Text</button>
                    <button className="btn btn-secondary mx-1" onClick={handelClearClick}>Clear Text</button>
                </div>
            </div>
            <div className="container my-3" style={{color:props.mode === "dark" ? 'white' : 'black'}}>
                <h3>Your text summary</h3>
                <p>Your word is {text.length === 0?0:(text.split(/[ ]+/)).join(" ").split(" ").length} And CHaracter is {text.length}</p>
            </div>
            <div className="container my-3" style={{color:props.mode === "dark" ? 'white' : 'black'}}>
                <h3>Preview</h3>
                <pre>{text}</pre>
            </div>
        </>
    );
}

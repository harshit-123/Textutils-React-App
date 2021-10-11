import React, {useState} from 'react'
export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Btn Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowerClick = ()=>{
        // console.log("Btn Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearClick = ()=>{
        // console.log("Btn Clicked");
        let newText = '';
        setText(newText);
    }
    const handleCapClick = ()=>{
        // console.log("Btn Clicked");
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const copyText = (event)=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }
    const handleToRmvExSpace = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const [text, setText] = useState('');
    // text = "fsdfdsf"; wrong way to set the state
    // setText("fsdfkd");
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'? 'white': '#17294a'}}>
            <div className="mt-5">
            <h2 className="mt-3">{props.heading}</h2>
                <textarea value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey': 'white',color: props.mode === 'dark'? 'white': '#17294a'}} className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mt-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-success mt-2 ml-3" onClick={handleLowerClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mt-2 ml-3" onClick={copyText}>Copy Text</button>
            <button className="btn btn-danger mt-2 ml-3" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-secondary mt-2 ml-3" onClick={handleCapClick}>Capatalized</button>
            <button className="btn btn-info mt-2 ml-3" onClick={handleToRmvExSpace}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white': '#17294a'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words , {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text: "Enter Something to Preview it Here"}</p>
        </div>
        </>
    )
}

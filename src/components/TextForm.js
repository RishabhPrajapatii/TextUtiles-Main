import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE", "success");
  }
  const handelLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");

  }
  const handelClearClick = () => {
    let newText = ('');
    setText(newText);
    props.showAlert("All text cleared ", "danger");
  }

  const handelCopy = () => {
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text copied to clipboard ", "success");
    // alert("Copied the text: " + copyText.value);
  }

  const handelExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed ", "success");

  }

  // const [mystyle, setMystyle] = useState({
  //   color: '#010922',
  //   backgroundColor: 'white'
  // })

  // const [btnText, setBtnText] = useState("Enable Dark Mode")

  // const togStyle = () => {
  //   if (mystyle.color === '#010922') {
  //     setMystyle({
  //       color: 'grey',
  //       backgroundColor: '#010922',
  //       border: "1px solid white",
  //     })
  //     setBtnText("Enable Light Mode")
  //   }
  //   else {
  //     setMystyle({
  //       color: '#010922',
  //       backgroundColor: 'white'
  //     })
  //     setBtnText("Enable Dark Mode")
  //   }
  // }

  const handelOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
      
        <div className="container"  style={{color:props.mode==='light'?'#010922':'White'}} >
          <h1>{props.heading} </h1>
          <div className="mb-3">
            <textarea className="form-control" placeholder="Enter Your Text Here" value={text} onChange={handelOnChange} style={{background:props.mode==='light'?'white':'grey',color:props.mode==='light'?'#010922':'White'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-outline-primary mx-2" onClick={handelUpClick}>Convert to Uppercase</button>
          <button className="btn btn-outline-primary mx-2" onClick={handelLoClick}>Convert to Lowerercase</button>
          <button className="btn btn-outline-danger mx-2" onClick={handelClearClick}>Clear All</button>
          <button className="btn btn-outline-success mx-2" onClick={handelCopy}>Copy Text</button>
          <button className="btn btn-outline-warning mx-2" onClick={handelExtraSpaces}>Remove Extra Sapaces</button>


          {/* <div className="form-check form-switch">
            <input className="form-check-input"  onClick={togStyle} type="checkbox" role="switch" />
            <label className="form-check-label"  >{btnText}</label>
          </div> */}
        </div>

        <div className="container my-3" style={{color:props.mode==='light'?'#010922':'White'}} >
          <h1>Your text Summary</h1>
          <p> {text.split(' ').length-1} words and {text.length} characters</p>
          <p> {0.008 * text.split(" ").length} Minutes to read your Summary </p>
          <h2>Preview</h2>
          <p> {text.length>0?text:"Enter Your Text above to Preview Here"}</p>
        </div>
    

    </>
  );
}

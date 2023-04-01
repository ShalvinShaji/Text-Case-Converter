import React, {useState} from 'react'

export default function Textarea(props) {
    const convertUppercase = () =>{
        console.log("convert button clicked");
        let newText=text.toUpperCase(); //text in the area converted to uppercase.
        setText(newText);
    }
    const convertLowercase = () =>{
        console.log("convert button clicked");
        let newText=text.toLowerCase(); //text in the area converted to uppercase.
        setText(newText);
    }

    const clearTextarea =()=>{
      if (text==="Enter the text here."){
        setText("")
      }
    }
    
    const changeUp = (event) =>{
        setText(event.target.value) //allow us to wite content in the text area.
        // console.log("onchange clicked");


    }

  const [text, setText] = useState("Enter the text here.");

  return (
<>
<div>
  <h3 className='mt-5'>Enter the {props.type} for conversion:</h3>
  <textarea value={text} className="form-control" onClick={clearTextarea} onChange={changeUp} id="exampleFormControlTextarea1" rows="5"></textarea>
  <div className="d-flex justify-content-start">
  <button className='btn btn-danger me-3 mt-3' onClick={convertUppercase} >Convert to Uppercase</button>
  <button className='btn btn-danger me-3 mt-3' onClick={convertLowercase} >Convert to Lowercase</button>

  </div>
</div>
</>
    )
}

import React, {useState} from 'react'

export default function Textarea(props) {
    const convertUp = () =>{
        console.log("convert button clicked");
        let newText=text.toUpperCase(); //text in the area converted to uppercase.
        setText(newText);
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
  <textarea value={text} className="form-control" onChange={changeUp} id="exampleFormControlTextarea1" rows="5"></textarea>
  <button className='btn btn-danger mt-3' onClick={convertUp} >Convert</button>
</div>
</>
    )
}

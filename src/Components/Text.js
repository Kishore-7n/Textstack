import React ,{useState} from 'react'

export default function Text(props) {
    const handleupper = ()=>{
        console.log("clicked");
        let newtext = text.toUpperCase()
        settext(newtext);
        props.showalert("Converted to uppercase","success");
    }
    const handlelower = ()=>{
        let newtext = text.toLowerCase()
        settext(newtext);
        props.showalert("Converted to lowercase","success");
    }
    const handlefirst = ()=>{
        let  arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        let newtext = arr.join(" ");
        settext(newtext);
    }
    const handlesfirst = ()=>{
        let  arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toLowerCase() + arr[i].slice(1);
        }
        let newtext = arr.join(" ");
        settext(newtext);
    }
    const handlecopy= () =>
    {
        let text = document.getElementById('mybox')
        navigator.clipboard.writeText(text.value);
        document.getSelection.removeAllRanges();

    }
    const handleExtraSpaces = () =>
    {
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "))
    }
    const handleclear = ()=>{
        let newtext = '';
        settext(newtext);
    }
    const handleonchange = (event)=>
    {
        settext(event.target.value)
    }
    const[text,settext]=useState("");
    
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>  
            <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handleupper}>Convert to uppercase</button>
            <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handlelower}>Convert to lowercase</button>
            <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handlefirst}>Convert firstletter to uppercase</button>
            <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handlesfirst}>Convert firstletter to lowercase</button>
            <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handleExtraSpaces}>ClearExtraSpaces</button>
            <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handlecopy}>Copy</button>
            <button className='btn btn-primary mx-1 my-1' disabled={text.length===0} onClick={handleclear}>Clear</button>
        </div>
        <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your summary</h1>
            <p>{text.split(" ").filter((element)=>{
                return element.length!==0
            }).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{
                return element.length!==0
            }).length} Minutes read </p>
            <h2 >Preview</h2>
            <p>{text.length>0?text:"Enter text in text box to preview"}</p>
        </div>
        </>
    )
    
}

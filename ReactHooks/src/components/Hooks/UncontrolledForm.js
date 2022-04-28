import React,{useRef, useState} from "react";

const UncontrolledForm = () => {
    //its like useState only and its preserve the value.No rerender
    const luckyname=useRef(null)
    const [show,setShow]=useState(false)
    var Name;
    const submit=(e)=>{
 e.preventDefault();
 console.log(luckyname.current.value)
  Name=luckyname.current.value;
 Name===""?alert("please enter something"):setShow(true)
Name="";
    }
  return (
    <>
      <div style={{width:500 ,"marginTop":10, "textAlign":"center"}}>
        <form action=" " onSubmit={submit}>
          <div>
            <label htmlFor="luckyName">Enter Your Luckyname</label>
            <br/>
            <input type="text" ref={luckyname} id="luckyname" />
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
        <p>{show? `your lucky name is ${luckyname.current.value}`:""}</p>
      </div>
    </>
  );
};

export default UncontrolledForm;

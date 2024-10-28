import React,{useState} from 'react';


const LOGIN=()=>{

    const[email,setEmail]=useState("")
    const[password,setpassword]=useState("")

    const handlesubmit=(e)=>{
        e.preventDefault();

        if (!email || !password){
            alert("please enter your email and password  !!");
            return
        }

        if (email==="ibne" && password==="111"){
            alert("login successfully")
        }
        else{
            alert("login failed")
        }
    }

    return(
        <>
        <div className='box'>
            <h1> LOGIN  FORM</h1><br/>
            <br/>   
            <input type='email' placeholder='enter your email id ' onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
            <input type='password' placeholder='enter your password' onChange={(e)=>setpassword(e.target.value)}/><br/><br/>

            <button onClick={handlesubmit}>logins</button>
        </div>
        
        </>
    )


}
export default LOGIN ;                       
import React, { useState } from "react";

const MultipleInputs = () => {
    const [userRegistration,setUserRegistration]=useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });
    const handleInput = (e) => {
            
        const name=e.target.name;
        const value=e.target.value;
        setUserRegistration({...userRegistration, [name] : value});
            
        }
        
    const [records,setRecords]=useState([]);
    const handleSubmit =(e) =>{
    e.preventDefault();
    const phoneNumberRegex =/^\d{10}$/;

    if (!phoneNumberRegex.test(userRegistration.phone)) {
      alert("Please enter a valid phone number");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userRegistration.email)) {
        alert("Please enter a valid email address");
        return;
      }
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if(!passwordRegex.test(userRegistration.password)){
        alert("Please enter a valid password")
        return;
      }
    const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
    setRecords([...records, newRecord]);
    setUserRegistration({ username: "", email: "", phone: "", password: "" });
        
        
        
          /* const newRecord = {...userRegistration, id:new Date().getTime().toString()}
            setRecords([...records,newRecord]);
            setUserRegistration({username:"",email:"",phone:"",password:""})*/
            
             
        
    }

    return(
        <>
           <form className="myForm" action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Fullname</label>
                    <input type="text" autoComplete="off"
                    value={userRegistration.username}
                    onChange={handleInput}
                    name="username" id="username" required/>
                </div>

                <div>
                    <label htmlFor="email"> email</label>
                    <input type="text" autoComplete="off" 
                    value={userRegistration.email}
                    onChange={handleInput}
                    name="email" id="email" required/>
                </div>

                <div>
                    <label htmlFor="phone"> phone</label>
                    <input type="tel" autoComplete="off"
                    value={userRegistration.phone}
                    onChange={handleInput}
                    name="phone" id="phone" required/>
                </div>

                <div>
                    <label htmlFor="password"> password</label>
                    <input type="password" autoComplete="off" 
                    value={userRegistration.password}
                    onChange={handleInput}
                    name="password" id="password" required/>
                </div>
                <button type="submit">Registration</button>
           </form>
           <div>
            {
                records.map((curEle)=>{
                    return(
                        <div className="showDataStyle">
                            <p>{curEle.username}</p>
                            <p>{curEle.email}</p>
                            <p>{curEle.phone}</p>
                        </div>
                    )
                })
            }
           </div>
        </>
    );
}

export default MultipleInputs
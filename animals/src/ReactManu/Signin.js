import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signin = () => {
  const histroy = useHistory()
  const [user, setdata] = useState({
    email: "",
    password: "",
  })


  const inputEvent = (event) => {
    const { name, value } = event.target
    setdata( {
        ...user,
        [name]: value
      })
    }
  const postdata = async (e) => {
    e.preventDefault();

    const {email,password } = user
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
       email,password
      })
    })
    const data = await res.json()
    console.log(data);

    if (data) {
      toast.success("Login...",{position:"top-center"})
      console.log("save");
      // histroy.push("/")
    }
    else {
     toast("data not save")
      console.log("not Login");
    }
  }
  // const fromsubmit = (e) => {
  //   e.preventDefault();
  //   alert("save data")
  // }

  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Login</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
           <form method="POST" id="frmcontact">
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={user.email} onChange={inputEvent} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1" name="password" value={user.password} onChange={inputEvent} placeholder="Enter Password" />
              </div>
            
              <div className='mb-3'>
                <button type="submit" className="btn btn-outline-primary" onClick={postdata}>Login</button>
              </div>
              </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    
    </>
  );
};

export default Signin

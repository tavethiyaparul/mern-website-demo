import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [user, setdata] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
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

    const { fullname, phone, email, msg } = user
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullname, phone, email, msg
      })
    })
    const data = await res.json()

    if (data) {
      window.alert("data save")
      console.log("save");
    }
    else {
      window.alert("data not save")
      console.log("not save");
    }
  }
  // const fromsubmit = (e) => {
  //   e.preventDefault();
  //   alert("save data")
  // }

  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
           <form method="POST" id="frmcontact">
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={user.fullname} onChange={inputEvent} placeholder="Enter Name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={user.phone} onChange={inputEvent} placeholder="Enter Mobile Number" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={user.email} onChange={inputEvent} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label  className="form-label">Example Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" value={user.msg} onChange={inputEvent} rows="3"></textarea>
              </div>

              <div className='mb-3'>
                <button type="submit" className="btn btn-outline-primary" onClick={postdata}>Confirm identity</button>
              </div>
              </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact

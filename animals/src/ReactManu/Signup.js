import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

const Signup = () => {
    const [user, setdata] = useState({
        name: "",
        email: "",
        password: "",
        conpassword: "",
    })

    const histroy = useHistory()
    const inputEvent = (event) => {
        const { name, value } = event.target
        setdata({
            ...user,
            [name]: value
        })
    }
    const postdata = async (e) => {
        e.preventDefault();

        const { name, email, password, conpassword } = user

        if (password === conpassword) {
            const res = await fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password, conpassword
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
                histroy.push("/")
            }
        }
        else {
            window.alert("Password not matched")
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
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="name" value={user.name} onChange={inputEvent} placeholder="Enter Name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={user.email} onChange={inputEvent} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">password</label>
                                <input type="password" className="form-control" id="exampleFormControlInput1" name="password" value={user.password} onChange={inputEvent} placeholder="Enter Password" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Confirme Password</label>
                                <input type="password" className="form-control" id="exampleFormControlInput1" name="conpassword" value={user.conpassword} onChange={inputEvent} placeholder="Enter Confirm Password" />
                            </div>

                            <div className='mb-3'>
                                <button type="submit" className="btn btn-outline-primary" onClick={postdata}>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup

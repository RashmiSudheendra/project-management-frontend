import React from 'react'
import Button from 'react-bootstrap/Button';
import { redirect } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import Task from './Task'
// import AppLayout from './AppLayout';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='w-100'>
            <h1 className="h3 mt-5 text-800 font-weight-bold d-flex align-items-center justify-content-center">Log In</h1>
            <div className='container-fluid' style={{ display: 'flex', flexDirection: "row", justifyContent: 'center' }}>
                <Form className='w-50'>
                    <Form.Group className="text-md mb-3 mx-5">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" className='focus-ring focus-ring-light' placeholder="Enter Name" onChange={(e) => { "" }} />
                    </Form.Group>
                    <Form.Group className="text-md mb-3 mx-5">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" className='focus-ring focus-ring-light' placeholder="Enter Password" onChange={(e) => { "" }} />
                    </Form.Group>
                    <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                        {/* <Link to={<AppLayout />}> */}
                        <Button variant='primary' className='m-2'>
                            Login
                        </Button>
                        {/* </Link> */}
                        <Link to={'/signup'}>
                            <Button variant='primary' className='m-2'>
                                New user
                            </Button>
                        </Link>
                    </div>
                </Form>
            </div >
        </div >
    )
}

export default Login

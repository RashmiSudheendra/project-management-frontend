import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Signup() {

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()

    let handleSignup = async () => {
        try {
            let res = await axios.post(`http://localhost:9000/signup`, {
                name,
                email,
                password
            })
            if (res.status === 200) {
                alert(res.data.message)
                navigate('/login')
            }
            else if (res.status === 400) {
                alert(res.data.message)
            }
            else {
                alert(res.data.message)
            }
        }
        catch (error) {
            console.log(error.response.message)
        }
    }

    return (
        <div className='w-100'>
            <h1 className="h3 mt-5 text-800 font-weight-bold d-flex align-items-center justify-content-center">Sign Up</h1>
            <div className='container-fluid' style={{ display: 'flex', flexDirection: "row", justifyContent: 'center' }}>
                <Form className='w-50'>
                    <Form.Group className="text-md mb-3 mx-5">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" className='focus-ring focus-ring-light' placeholder="Enter Email" onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="text-md mb-3 mx-5">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" className='focus-ring focus-ring-light' placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="text-md mb-3 mx-5">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="email" className='focus-ring focus-ring-light' placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                        <Button variant='primary' onClick={() => handleSignup()}>
                            Signup
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Signup

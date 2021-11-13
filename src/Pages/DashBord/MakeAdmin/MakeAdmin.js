import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email,setEmail] = useState('')

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdmin = e => {
        const user = {email}
        fetch('https://quiet-retreat-22689.herokuapp.com/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }).then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                alert('made admin')
            }
        })
        e.preventDefault()
    }
    return (
        <Container>
            <h2 className="fs-2 fw-bold">Make admin</h2>
            <div className="">
                <div className="">
                    <input  onBlur={handleOnBlur} type="text" /><br /><br/>
                    <button onClick={handleAdmin}>Make admin</button>
                </div>
            </div>
        </Container>
    );
};

export default MakeAdmin;
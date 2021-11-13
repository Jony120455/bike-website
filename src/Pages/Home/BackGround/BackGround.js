import React from 'react';
import { Container } from 'react-bootstrap';
import './Background.css'

const BackGround = () => {
    return (
        <div className="w-100">
            <Container>
                <div className="d-flex align-items-center justify-content-center" style={{height:'60vh',width:'100%'}}>
                    <div className="w-100">
                        <div className="row align-items-center">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/yVU1xoaNTKw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <img className="w-100 mb-5 size" src="https://images.unsplash.com/photo-1598209279122-8541213a0387?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
            </Container>
            
        </div>
    );
};

export default BackGround;
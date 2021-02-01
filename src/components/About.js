// import blogData from "../data/blog";
import React from 'react';

function About({ about, image='https://via.placeholder.com/215' }) {
    return (
    <aside className="about-container">
        <img src={image} alt="blog logo" />
        <p>{about}</p>
    </aside>
    );
}




export default About;
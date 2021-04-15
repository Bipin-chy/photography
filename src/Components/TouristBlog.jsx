import React from 'react'
import './TouristBlog.css';

import blog1 from './blogImages/blog1.webp';
import blog2 from './blogImages/blog2.webp';
import blog3 from './blogImages/blog3.webp';



function TouristBlog() {

    const blogImage = [
        {
            name:"blog1",
            image: blog1,
        },
        {
            name:"blog2",
            image: blog2,
        },
        {
            name:"blog3",
            image: blog3,
        }
    ]

    return (
        <section id="tourist-blog">
        <div className="container" style={{textAlign:"center"}}>
            <h1>TOURIST BLOG</h1>
            <p>Our Recent Photos</p>
            <div className="row" style={{marginTop: "30px"}}>

            {blogImage.map(blog => (

                <div className="col">
                    <div className="tourist-blog-card">
                        <img src={blog.image} alt={blog.name} />
                        <div className="tourist-blog-card-text">
                            <span>12 March 2021</span>
                            <p>Addiction When Gambling Becomes</p>
                        </div>
                    </div>
                </div>
                ))}
               
            </div>
        </div>
    </section>
    )
}

export default TouristBlog;

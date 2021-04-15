import React from 'react';
import './Blog.css';

function Blog() {
    return (
        <div className="blog01">
            <div className="container">
            <div className="row">
                <div className="col">
                    <div className="blog-card">
                        <img className="blog01-img" src="./img/blog01.webp" alt="blog01" />
                        <div className="blog-card-text">
                            <h3>creative photography</h3>
                            <p>Duis aute irure dolor in reprehenderit in <br /> voluptate velit.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col">
                    <div className="blog-card">
                    <img src="./img/blog02.webp" alt="blog02" />
                    <div className="blog-card-text">
                        <h3>creative photography</h3>
                        <p>Duis aute irure dolor in reprehenderit in <br/> voluptate velit.</p>
                    </div>
                </div>
            </div>
                <div className="col"><div className="blog-card">
                    <img src="./img/blog03.webp" alt="blog03" />
                    <div className="blog-card-text">
                        <h3>creative photography</h3>
                        <p>Duis aute irure dolor in reprehenderit in <br/> voluptate velit.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Blog;

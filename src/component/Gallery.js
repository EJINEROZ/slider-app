import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Gallery extends React.Component {
    render() {
        return (
            <div>
                <h2>My Photo Gallery</h2>
                <Carousel autoPlay interval="5000" transitionTime="5000" infiniteLoop>
                    <div>
                        <img src="https://images.unsplash.com/photo-1655847001912-20a783d10888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="" />
                        <p className="legend">My Photo 1</p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1655826526409-6dd68d56cd78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="" />
                        <p className="legend">My Photo 2</p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1605944615719-7a446e385fd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
                        <p className="legend">My Photo 3</p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=60" alt="" />
                        <p className="legend">My Classic Still 3</p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1655365225165-8d727fe3a091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=80" alt="" />
                        <p className="legend">My Photo 3</p>
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default Gallery
import React from 'react';
import { Tile } from '../tile/Tile';
import '../../App.scss';

const Contact = (props) => (
    <div className="page_container">
        <h1 className="page_title">contact</h1>
        <div className="montage_container">
            <Tile 
                type = "heading"
                title = "nico.galin@gmail.com"
                externalUrl = "mailto:nico.galin@gmail.com"
            />
            <Tile 
                type = "image"
                image = "linkedin_logo.png"
                title = "<li>this website</li>"
                externalUrl = "https://www.linkedin.com/in/nicholas-galin/"
            />
            <Tile 
                type = "image"
                image = "handshake_logo.png"
                title = "<li>this website</li>"
                externalUrl = "https://berkeley.joinhandshake.com/users/20653606"
            />
            <Tile 
                type = "image"
                image = "insta_logo.png"
                externalUrl = "https://www.instagram.com/nicogalin/"
            />
        </div>
    </div>
);

export default Contact;
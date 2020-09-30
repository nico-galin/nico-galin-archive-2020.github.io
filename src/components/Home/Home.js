import React from 'react';
import { Tile } from '../tile/Tile';
import '../../App.scss';

const Home = (props) => (
    <div className="page_container">
        <h1 className="page_title">[site is still in progress] featured</h1>
        <div className="montage_container">
        <Tile 
            type = "image"
            image = "fox.png"
            underContent = "fox."
            externalUrl="https://www.instagram.com/p/CDUd-nnAW9C/"
        />
        <Tile 
            type = "image"
            image = "berry.png"
            underContent = "berry."
            externalUrl="https://www.instagram.com/noir.graphics/"
        />
        <Tile 
            type = "heading"
            title = "<li>this website</li>"
            underContent = "ReactJS | GitHub | Redux | SCSS"
            externalUrl = "https://www.instagram.com/noir.graphics/"
        />
        <Tile 
            type = "image"
            image = "gem.png"
            underContent = "gem."
            externalUrl="https://www.instagram.com/noir.graphics/"
        />
        <Tile 
            type = "heading"
            title = "<li>sentiment analysis</li>"
            underContent = "TensorFlow | Python | ReactJS | CSS"
            externalUrl = "https://www.instagram.com/noir.graphics/"
        />
        <Tile 
            type = "image"
            image = "range.png"
            underContent = "range."
            externalUrl="https://www.instagram.com/noir.graphics/"
        />
        <Tile 
            type = "image"
            image = "croissant.png"
            underContent = "croissant."
            externalUrl="https://www.instagram.com/noir.graphics/"
        />
        <Tile 
            type = "image"
            image = "pin.png"
            underContent = "pin."
            externalUrl="https://www.instagram.com/noir.graphics/"
        />
        <Tile 
            type = "image"
            image = "weight.png"
            underContent = "weight."
            externalUrl="https://www.instagram.com/noir.graphics/"
        />
        <Tile 
            type = "heading"
            title = "<li>sentiment analysis</li>"
            underContent = "TensorFlow | Python | ReactJS | CSS"
            externalUrl = "https://www.instagram.com/noir.graphics/"
        />
        <Tile 
            type = "image"
            image = "blaze.png"
            underContent = "blaze."
            externalUrl="https://www.instagram.com/noir.graphics/"
        />
        <Tile 
            type = "image"
            image = "aperture.png"
            underContent = "aperture."
            externalUrl="https://www.instagram.com/noir.graphics/"
        />
        <Tile 
            type = "image"
            image = "cubes.png"
            underContent = "cubes."
            externalUrl="https://www.instagram.com/noir.graphics/"
        />
        <Tile 
            type = "image"
            image = "target.png"
            underContent = "target."
            externalUrl="https://www.instagram.com/noir.graphics/"
        />
        <Tile 
            type = "image"
            image = "screens.png"
            underContent = "screens."
            externalUrl="https://www.instagram.com/noir.graphics/"
        />
        <Tile 
            type = "content"
            image = "jobylogo.png"
            title = "Software Engineering Intern"
            subTitle = "Joby Aviation"
            description = "Developing front and back end for a mobile application using the
            Cordova and React Native frameworks with database access using
            RESTful APIs, NodeJS, and GraphQL. Worked under SCRUM/AGILE
            development environment."
            underContent = "June 2018 - May 2020 (2yr)"
            externalUrl = "https://www.instagram.com/noir.graphics/"
        />
        </div>
    </div>
);

export default Home;
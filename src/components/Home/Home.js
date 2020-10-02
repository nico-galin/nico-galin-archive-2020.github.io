import React from 'react';
import { Tile } from '../tile/Tile';
import '../../App.scss';

const Home = (props) => (
    <div className="page_container">
        <h1 className="page_title">featured work</h1>
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
                externalUrl="https://www.instagram.com/p/CDEviw-g14Q/"
            />
            <Tile 
                type = "heading"
                title = "<li>this website</li>"
                underContent = "ReactJS | GitHub | Redux | SCSS"
            />
            <Tile 
                type = "image"
                image = "gem.png"
                underContent = "gem."
                externalUrl="https://www.instagram.com/p/CDC6P9sAKwp/"
            />
            <Tile 
                type = "heading"
                title = "<li>Conway's game of life</li>"
                underContent = "C"
                internalUrl = "/work"
            />
            <Tile 
                type = "image"
                image = "range.png"
                underContent = "range."
                externalUrl="https://www.instagram.com/p/CC94KaIgzpM/"
            />
            <Tile 
                type = "image"
                image = "croissant.png"
                underContent = "croissant."
                externalUrl="https://www.instagram.com/p/CDJ28KCAjFC/"
            />
            <Tile 
                type = "image"
                image = "pin.png"
                underContent = "pin."
                externalUrl="https://www.instagram.com/p/CDHTko4gkMw/"
            />
            <Tile 
                type = "image"
                image = "weight.png"
                underContent = "weight."
                externalUrl="https://www.instagram.com/p/CDCqOKGAUCg/"
            />
            <Tile 
                type = "heading"
                title = "<li>sentiment analysis</li>"
                underContent = "TensorFlow | Python | ReactJS | CSS"
                internalUrl = "/work"
            />
            <Tile 
                type = "image"
                image = "blaze.png"
                underContent = "blaze."
                externalUrl="https://www.instagram.com/p/CDHThjdgcXP/"
            />
            <Tile 
                type = "image"
                image = "aperture.png"
                underContent = "aperture."
                externalUrl="https://www.instagram.com/p/CDUd8bygkiF/"
            />
            <Tile 
                type = "image"
                image = "cubes.png"
                underContent = "cubes."
                externalUrl="https://www.instagram.com/p/CDSSl5eA0UZ/"
            />
            <Tile 
                type = "image"
                image = "target.png"
                underContent = "target."
                externalUrl="https://www.instagram.com/p/CDPXk1_Aw6p/"
            />
            <Tile 
                type = "image"
                image = "screens.png"
                underContent = "screens."
                externalUrl="https://www.instagram.com/p/CDEvbpUAKsd/"
            />
        </div>
    </div>
);

export default Home;
import { Component } from 'react';
import './AboutMe.css'
import tile_background from './tile_background.png';

export default class AboutMe extends Component {
    render() {
        return (
            <div className='AboutMe'>
                <img alt='' src={tile_background}></img>
                <p>heidi about me placeholder</p>
            </div>
        )
    };
}
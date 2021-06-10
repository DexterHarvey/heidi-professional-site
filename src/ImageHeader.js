import { Image } from 'react-bootstrap';
import heidiTrees from './heidiTrees.JPG';
import './ImageHeader.css';

function ImageHeader() {
    return (
        <div className='imageHeader'>
            <Image src={heidiTrees} id='headerImage' />
        </div>
    );
}

export default ImageHeader;
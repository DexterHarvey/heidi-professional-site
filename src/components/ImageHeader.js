import { Image } from 'react-bootstrap';
import '../styles/ImageHeader.scss';
import heidiTrees from '../assets/heidiTrees.jpg';

function ImageHeader() {
    return (
        <div className='imageHeader'>
            <Image src={heidiTrees} id='headerImage' />
        </div>
    );
}

export default ImageHeader;
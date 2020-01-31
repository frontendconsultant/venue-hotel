import React from 'react';
import defaultImg from "../assets/images/room-1.jpeg";
import { Link } from 'react-router-dom';
import { HotelObject } from '../models/models';
import Banner from './Banner';

interface IHotelProps {
    hotel: HotelObject;
}

const Hotel: React.FC<IHotelProps> = React.memo((props) => {
    const { name, hotelId, images, price } = props.hotel;
    // console.log(props);
    return (
        <Banner 
            title = {name}
            subtitle=""><span>Price starts from ${price}</span>
            <Link to={`/hotel/${hotelId}`} className="btn-primary">our rooms</Link>
        </Banner>
    )
})

export default Hotel;

// React.memo
// Class components can bail out from rendering when their input props are 
// the same using PureComponent or shouldComponentUpdate. Now you can do the 
// same with function components by wrapping them in React.memo.

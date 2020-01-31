import React, { Component } from 'react';
import defaultImg from "../assets/images/room-1.jpeg";
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { HotelContext } from '../store/hotelContext';
import Room from '../components/Room';


interface IPropsSingleHotel {
    match: any;
    getRoom: (hotelId: string) => any;
}

interface IStateSingleHotel {
    hotelId: string;
    defaultbcg: string;
}

export default class SingleHotel extends Component<IPropsSingleHotel, IStateSingleHotel> {

    constructor(props: IPropsSingleHotel) {
        super(props)
    
        this.state = {
            hotelId: this.props.match.params.hotelId,
            defaultbcg: defaultImg
        }
    }

    // Providing Context
    static contextType = HotelContext;
    
    public render() {
        const { getHotelRooms } = this.context;
        const hotel:any[] = getHotelRooms(this.state.hotelId);
        console.log(hotel,'------hotel')

        if (!hotel) {
            return (
                <div className="error">
                    <h3>no such room could be found...</h3>
                    <Link to="/rooms" className="btn-primary">back to rooms</Link>
                </div>
            );
        }

       // const {name, description, capacity, size, price, extras, breakfast, pets, images} = hotels;
       // const [mainImg, ...defaultImg] = images;
        return (
            <React.Fragment>
                <section className="roomslist">
            <div className="roomslist-center">
                { hotel.map(item => {
                    return <Room room={item.room} />
                }) }
            </div>
        </section>
            </React.Fragment>
        )
    }
}

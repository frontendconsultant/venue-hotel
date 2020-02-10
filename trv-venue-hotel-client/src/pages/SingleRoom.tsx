import React, { Component } from 'react';
import defaultImg from "../assets/images/room-1.jpeg";
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { HotelContext } from '../store/hotelContext';
import StyledCover from '../components/StyledCover';

interface IPropsSingleRoom {
    match: any;
    getRoom: (slug: string) => any;
}

interface IStateSingleRoom {
    slug: string;
    defaultbcg: string;
}

export default class SingleRoom extends Component<IPropsSingleRoom, IStateSingleRoom> {

    constructor(props: IPropsSingleRoom) {
        super(props)
    
        this.state = {
            slug: this.props.match.params.roomId,
            defaultbcg: defaultImg
        }
    }

    // Providing Context
    static contextType = HotelContext;
    
    public render() {
         console.log("props", this.context);
        const getSelectedHotelId:any = localStorage.getItem('selectedhotelId'); 
        const { getRoom } = this.context;
        const room: any = getRoom(this.state.slug);
       // const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
        if (!room) {
            return (
                <div className="error">
                    <h3>no such room could be found...</h3>
                    <Link to={`/hotel/${getSelectedHotelId}`} className="btn-primary">back to rooms</Link>
                </div>
            );
        }

        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
        const [mainImg, ...defaultImg] = images;
        return (
            <React.Fragment>
               <StyledCover img={mainImg || this.state.defaultbcg}>
                   <Banner title={`${name} room`} >
                       <Link to={`/hotel/${getSelectedHotelId}`} className="btn-primary">back to rooms</Link>
                   </Banner>
               </StyledCover>
               <section className="single-room">
                   <div className="single-room-images">
                       {defaultImg.map((item: any, index: number) => {
                           console.log(item)
                          return <img key={index} src={item.url} alt={name} />
                       })}
                   </div>
                   <div className="single-room-info">
                       <article className="desc">
                           <h3>details</h3>
                           <p>{description}</p>
                       </article>
                       <article className="info">
                           <h3>info</h3>
                           <h6>price : ${price}</h6>
                           <h6>size : {size} SQFT</h6>
                           <h6>max capacity: { capacity > 1 ? `${capacity} people` : `${capacity} person` }</h6>
                           <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                           <h6>{breakfast && "free breakfast included"}</h6>
                       </article>
                   </div>
               </section>
               <section className="room-extras">
                   <h6>extras</h6>
                   <ul className="extras">
                       {extras.map((item: string, index: number) => {
                           return <li key={index}>- {item}</li>
                       })}
                   </ul>
               </section>
            </React.Fragment>
        )
    }
}

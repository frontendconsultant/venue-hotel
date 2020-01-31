import React from 'react';
import RoomsFilter from '../components/RoomsFilter';
import HotelsList from '../components/HotelList';
import { withHotelConsumer } from '../store/hotelContext';
import Loading from '../components/Loading';
import { HotelsObject } from '../models/models';

interface IPropsHotelsContainer {
    context: HotelsObject
}

// Use Context in functional component with HOC
const HotelsContainer: React.FC<IPropsHotelsContainer> = ({context}) => {

    console.log("context", context);
    const {loading, hotels} = context;
    

    if (loading) {
        return <Loading />
    }
    return (
        <React.Fragment>
            <HotelsList hotels={hotels}/> 
        </React.Fragment>
    );
}

export default withHotelConsumer(HotelsContainer);


// // Use Context in functional component without HOC (Normal)

// import { RoomConsumer } from '../store/context';

// const RoomsContainer: React.FC = () => {


// return (
// <RoomConsumer>
//     {(value: IRoomContext | null) => {
//     if (value) {
//         const {loading, rooms, sortedRooms} = value;

//         if (loading) {
//             return <Loading />
//         }
//         return (
//             <div>
//                 Hello from rooms cont
//                 <RoomsFilter rooms={rooms} />
//                 <RoomsList rooms={sortedRooms}/> 
//             </div>
//         );
//     } else {
//         return <Loading />
//     }
// }}
// </RoomConsumer>
// )
// }

// export default RoomsContainer;

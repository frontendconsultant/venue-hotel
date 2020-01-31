import React from 'react';
import Hotel from './Hotel';

interface IPropsHotelsFilter {
    hotels: any[];
}


const RoomsList: React.FC<IPropsHotelsFilter> = ({hotels}) => {
    if (hotels.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search parameters</h3>
            </div>
        )
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                { hotels.map(item => {
                    console.log(item,"here")
                    return <Hotel key={item.id} hotel={item} />
                }) }
            </div>
        </section>
    )
}

export default RoomsList;

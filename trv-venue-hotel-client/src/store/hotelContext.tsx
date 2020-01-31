import React, { Component } from 'react';
import { IStateHotelContext, HotelsObject } from '../models/models';
import items from './hotel';


const HotelContext = React.createContext<HotelsObject | null>(null);

class HotelProvider extends Component<{}, IStateHotelContext> {

    public readonly state: Readonly<IStateHotelContext> = {
        hotels: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0
    }

    // Get Data when component mount
    public componentDidMount() {
        let hotels = this.formatData(items);
        console.log("hotels-----");
        console.log(hotels);

        this.setState({
            hotels,
            loading: false,
            type: "all",
            capacity: 1,
            price: 0
        })

    }

    public render() {
        console.log(this.props.children)
        return (
            <HotelContext.Provider value={{...this.state, getHotelRooms: this.getHotelRooms, getRoom: this.getRoom, handleChange: this.handleChange, }}>
                {this.props.children}
            </HotelContext.Provider>
        )
    }
    private getRoom = (slug: string) => {
        const tempRooms = this.formatData(items);
        const room = tempRooms.find((room: any) => room.slug === slug);
        return room;
    }

    private formatData = (items: any) => {
        const tempItems = items.map((item: any) => {
            let id = item.Hotels.hotelId
           // let images = item.hotels.images.map((image: any) => image.fields.file.url)
            const room = {...item.Hotels,  id} // Reformating the array
            return room;
        })

        return tempItems;
    }

    private getHotelRooms = (hotelId: string) => {
        
        const tempRooms = this.formatData(items);//[...this.state.hotels];
        const room = tempRooms.find((room: any) => room.hotelId === hotelId);
        const hotelRooms = room.rooms;
        return hotelRooms;
    }
    

    private handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const value = event.target.value;
        const name = event.target.name;

        const obj: any = {};
        obj[name] = value;

       // this.setState(obj, this.filterRooms);
    }

    private handleChecked = (event: any) => {
        
        const value = event.target.checked;
        const name = event.target.name;

        const obj: any = {};
        obj[name] = value;

       // this.setState(obj, this.filterRooms);
    }

    private filterRooms = () => {
        let { hotels, type, capacity, price } = this.state;
        // all the rooms
        let tempRooms = [...hotels];
        // transform value
        capacity = Number(capacity);
        price = Number(price);

        // filter by type
        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type)
        }

        // filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }

        // filter by price
        tempRooms = tempRooms.filter(room => room.price <= price)

        // filter by size
        

        // filter by breakfast
        
        // change state
    }
}

const HotelConsumer = HotelContext.Consumer;


//type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// For Using Context with Functional Component (Stateless) with HOC


export const withHotelConsumer = <P extends {}>(Component: React.ComponentClass<P> | React.StatelessComponent<P>): React.FC<any> => props => {
   
    return <HotelConsumer>
            { value => <Component {...props} context={value} />}
           
        </HotelConsumer>;
       
};

// Exporting all contexts

export {HotelProvider, HotelConsumer, HotelContext};


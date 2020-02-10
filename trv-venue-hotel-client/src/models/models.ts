export interface IStateContext {
    rooms: any[];
    sortedRooms: any[];
    featuredRooms: any[];
    loading: boolean;
    type: string;
    capacity: number;
    price: number;
    minPrice: number;
    maxPrice: number;
    minSize: number;
    maxSize: number,
    breakfast: boolean;
    pets: boolean;
};

export interface IStateHotelContext {
    hotels:any[];
    loading:boolean;
    type: string;
    capacity: number;
    price: number;
};

export interface RoomObject {
    name: string;
    roomId: string;
    img:string,
    images: any[];
    price: number;
}
export interface HotelObject {
    name: string;
    slug: string;
    hotelId: string;
    images: string[];
    price: number;
}

export interface RoomsObject {
    rooms: any[];
    sortedRooms: any[];
    featuredRooms: any[];
    loading: boolean;
    type: string;
    capacity: number;
    price: number;
    minPrice: number;
    maxPrice: number;
    minSize: number;
    maxSize: number,
    breakfast: boolean;
    pets: boolean;
    getRoom: (slug: string) => any;
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => any;
    handleChecked: (event: any) => any;
}

export interface HotelsObject {
        
        hotels:any[];
        loading:boolean;
        type: string;
        capacity: number;
        price: number;
        getHotelRooms: (slug: string) => any;
        getRoom:(slug: string) => any,
        handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => any;
}
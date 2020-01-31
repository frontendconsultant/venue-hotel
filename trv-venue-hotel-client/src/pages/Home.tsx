import React from 'react';
import Cover from '../components/Cover';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import HotelsContainer from '../containers/HotelsContainer';

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Cover>
                
                <HotelsContainer></HotelsContainer>
            </Cover>
           
        </React.Fragment>
    )
}

export default Home

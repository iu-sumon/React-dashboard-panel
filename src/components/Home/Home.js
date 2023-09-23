import React from 'react';
import './Home.css'
import SideBar from '../SideBar/SideBar';
import Content from '../Content/Content';

const Home = () => {
    return (
        <div className='grid_container'>
           <SideBar></SideBar> 
           <Content></Content>
        </div>
    );
};

export default Home;
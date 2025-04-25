import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Tabs from '../Components/Tabs';
import ProductList from '../features/product/ProductList';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div >
            
            <Banner></Banner>
            <Tabs></Tabs>
            <ProductList></ProductList>
            <div className="min-h-[600px]">
        <Outlet></Outlet>,
      </div>
        </div>
    );
};

export default Home;
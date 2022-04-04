import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Dashboard from '../Dashboards/Dashboards';
import Blogs from '../Blogs/Blogs';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';

const Home = () => {
    return (
        <div>
            <h1>Best Calculator in the world!</h1>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/review' element={<Reviews />}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='/blogs' element={<Blogs />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </div>
    );
};

export default Home;
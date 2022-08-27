import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css'
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homePage/Homepage';
import Cryptocurrencies from './components/cryptocurrencies/Cryptocurrencies';
import News from './components/news/News';
import Cryptodetails from './components/cryptodetails/Cryptodetails';


export default function App() {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route path='/' element={<Homepage />} />
                            <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
                            <Route path='crypto' element={<Cryptodetails />} >
                                <Route path=':coinId' element={<Cryptodetails />} />

                            </Route>
                            <Route path='/news' element={<News />} />

                            
                            <Route path='*' element={<Homepage />} />
                        </Routes>
                    </div>
                </Layout>

                <div className='footer'>
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Cryptoverse <br />
                        All Rights Reserverd
                    </Typography.Title>

                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>
            </div>

        </div>
    )
}

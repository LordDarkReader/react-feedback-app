import React from 'react';
import Card from '../component/shared/card';
import { Link } from 'react-router-dom';

function AboutPage() {
    return (<Card>
        <div className='about'>
            <h1>About this Page</h1>
            <p>This is a Ract app</p>
            <p>version 1.0.0</p>
            <p>
                <Link to='/'>Back To Home</Link>
            </p>
        </div>
    </Card>)
}

export default AboutPage

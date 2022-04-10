import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const Deshbord = () => {
    const [months, setMonths] = useState([]);

    useEffect(() => {
        axios.get('chart.json')
            .then(data => setMonths(data.data))
    }, []);


    return (
        <div className='container'>
            <div className='aboutContainer'>
                {/* <h1>Deshbord</h1> */}

                <div className='deshbordContainer'>
                    <LineChart width={800} height={400} data={months}>
                        <Line dataKey="sell" stroke="#fbcf38"></Line>
                        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                        <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                        <XAxis></XAxis>
                        <YAxis></YAxis>
                    </LineChart>
                </div>
            </div>

        </div>
    );
}

export default Deshbord;
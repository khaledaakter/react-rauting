// import axios from 'axios';
import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, BarChart, CartesianGrid, Bar } from 'recharts';


const Deshbord = () => {
    // const [months, setMonths] = useState([]);

    // useEffect(() => {
    //     axios.get('chart.json')
    //         .then(data => setMonths(data.data))
    // }, []);

    const months = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401,
            "slag": "slag-0-10401"
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500,
            "slag": "slag-0-24500"
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010,
            "slag": "slag-0-67010"
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405,
            "slag": "slag-0-40405"
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900,
            "slag": "slag-0-50900"
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000,
            "slag": "slag-0-61000"
        }
    ]


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


                {/* <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={500} height={300} data={months}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={20}
                    >
                        <XAxis dataKey="month" scale="point" padding={{ left: 10, right: 10 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="revenue" fill="#8884d8" background={{ fill: '#eee' }} />
                    </BarChart>
                </ResponsiveContainer> */}

                <div>
                    <h1>asdfsd zsdfsd sdfsdf</h1>

                    <BarChart width={800} height={400} data={months}>
                        <Bar dataKey="sell" stroke="#7f44f8"></Bar>
                        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                        <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                        <XAxis></XAxis>
                        <YAxis></YAxis>
                    </BarChart>
                </div>
            </div>

        </div>
    );
}

export default Deshbord;
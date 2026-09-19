import React from 'react';

const fetchDishData = async() => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods');
    const data = await res.json();
    const food = data.data;
    return food;
}

export default fetchDishData;
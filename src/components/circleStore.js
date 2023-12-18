import {createEffect, createStore} from 'effector';

export const fetchData = createEffect(async () => {
    const response = await fetch('https://myfailemtions.npkn.net/b944ff/');
    return response.json();
});

export const dataStore = createStore([]).on(fetchData.doneData, (_, data) => data);


const fetchCirclesFx = createEffect(async (activeCircles) => {

    const response = await fetch('https://myfailemtions.npkn.net/b944ff/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({activeCircles}),
    });

    try {
        const data = await response.json();
        return data || [];
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return [];
    }
});

export {fetchCirclesFx};

import {useState} from 'react'
import './App.css'
import {useEffect} from 'react';
import Circle from "./components/Circle.jsx";
import Button from './components/Button.jsx';
import {useUnit} from 'effector-react';
import {fetchCirclesFx, fetchData, dataStore} from './components/circleStore';

function App() {
    const circlesData = [
        {id: 'A1', label: 'A1', name: 'A1'},
        {id: 'A2', label: 'A2', name: 'A2'},
        {id: 'A3', label: 'A3', name: 'A3'},
        {id: 'A4', label: 'A4', name: 'A4'},
        {id: 'B1', label: 'B1', name: 'B1'},
        {id: 'B2', label: 'B2', name: 'B2'},
        {id: 'B3', label: 'B3', name: 'B3'},
        {id: 'B4', label: 'B4', name: 'B4'},
        {id: 'B5', label: 'B5', name: 'B5'},
        {id: 'C1', label: 'C1', name: 'C1'},
        {id: 'C2', label: 'C2', name: 'C2'},
        {id: 'C3', label: 'C3', name: 'C3'},
        {id: 'C4', label: 'C4', name: 'C4'},
    ];

    // TODO: I've hardcoded the list of active circles, as the API doesn't return consistent results.
    const activeCirclesData = ['A1', 'B3'] //useUnit(dataStore);

    const [activeCircles, setActiveCircles] = useState(activeCirclesData);


    useEffect(() => {
        fetchData();
    }, []);

    const onPositionChange = (circleId) => {
        const isActive = activeCircles.includes(circleId);

        if (isActive) {
            setActiveCircles(activeCircles.filter((id) => id !== circleId));
        } else {
            setActiveCircles([...activeCircles, circleId]);
        }
    };
    const onComplete = () => {
        fetchCirclesFx(activeCircles);
    };


    return (
        <>
            <div className='app'>
                <div className='auto-banner'>
                    <div className='circles'>

                        {circlesData.map((circle) => (
                            <Circle
                                key={circle.id}
                                id={circle.id}
                                label={circle.label}
                                active={activeCircles.includes(circle.id)}
                                onClick={() => onPositionChange(circle.id)}
                            ></Circle>
                        ))}
                    </div>
                </div>
                <Button onClick={onComplete} label="Send Request"/>
            </div>
        </>
    )
}

export default App
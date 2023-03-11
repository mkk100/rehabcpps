import React, { useState } from 'react';
import Button from '@mui/material/Button';

export default function KegelCounter() {
    const [count, setCount] = useState(0)
    function decrement() {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    function increment() {
        setCount(count + 1)
    }
    return (
            <div className="flex justify-center items-center h-screen">
                <div className = "">Target Count: </div>
                <div className="flex">
                    <Button variant="outlined" onClick={increment}>+</Button>
                    <span className="px-10">{count}</span>
                    <Button variant="outlined" onClick={decrement}>-</Button>
                </div>
                <Button variant="outlined" onClick={() => setCount(0)} className="">Reset</Button>
            </div>
    )
}
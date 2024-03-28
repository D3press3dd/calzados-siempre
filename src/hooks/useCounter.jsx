import { useState } from "react";

export const useCounter = (minValue = 0, maxValue = 1, step = 1) => {
    const [count, setCount] = useState(minValue)

    const increment = () => {
        if(count + setp <= maxValue)
            setCount(count + step)
    }

    const decrement = () => {
        if(count - setp >= minValue)
            setCount(count + step)
    }

    const reset = () => {
        setCount(minValue)
    }

    return { count, increment, decrement, reset}
}

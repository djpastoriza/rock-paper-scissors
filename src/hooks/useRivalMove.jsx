import { useEffect, useState } from "react";
import { OPTIONS } from "../constants/OPTIONS"

export const useRivalMove = () => {

    const [rivalOption, setRivalOption] = useState(null)

    useEffect(() => {
        if (rivalOption) return;
        generateRandomMove();
    }, [rivalOption])

    const generateRandomMove = () => {
        const options = OPTIONS;
        const keys = Object.keys(options);
        const rival = options[keys[keys.length * Math.random() << 0]]
        setRivalOption(rival);
    }

    const resetRival = () => {
        setRivalOption(null);
    }

    return { rivalOption, resetRival }
}
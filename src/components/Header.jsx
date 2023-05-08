import { useEffect, useState } from "react"
import { RESULT_TEXT } from "../constants/RESULT_TEXT"


const Header = ({ winnerText }) => {

    const [score, setScore] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (winnerText === RESULT_TEXT.WIN) {
                setScore(score + 1)
            }
        }, 1500);
        return () => clearTimeout(timer);
    }, [winnerText])

    return (
        <header className='border-[rgba(255,255,255,0.5)] border-[2px] border-solid rounded-lg h-[100px] py-2 px-4 w-full lg:max-w-[600px]'>
            <div className='flex justify-between items-center h-full'>
                <div className='d-block bg-logo bg-no-repeat bg-contain h-[60px] flex-1'></div>
                <div className='d-block bg-white w-[80px] h-[70px] rounded-md flex flex-col items-center justify-center'>
                    <span className='text-xs text-[#434777] font-bold'>SCORE</span>
                    <b className='text-4xl text-[#58546b]'>{score}</b>
                </div>
            </div>
        </header>
    )
}

export default Header
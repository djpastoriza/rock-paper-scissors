
import { useEffect, useState } from 'react'
import SelectedOption from './SelectedOption'
import { RESULT_TEXT } from '../constants/RESULT_TEXT';



const PickedBoard = ({ selectedOption, rivalOption, handleReset, winnerText }) => {
    const [haveWinner, setHaveWinner] = useState(false)


    useEffect(() => {
        const timer = setTimeout(() => {
            setHaveWinner(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, [])


    return (
        <div className='w-full flex flex-wrap items-center justify-between lg:justify-center lg:gap-[60px]'>
            <div className='text-center w-[45%] flex flex-col items-center lg:w-auto order-1'>
                <span className='mb-20 block text-4xl h-2'>YOU PICKED</span>
                <SelectedOption selectedOption={selectedOption} shiny={haveWinner && winnerText === RESULT_TEXT.WIN} />
            </div>

            <div className={`${!haveWinner ? 'h-0 opacity-0 w-0' : 'h-auto w-full opacity-100 lg:w-auto'} transition ease-in duration-1000 text-center order-3 lg:order-2 mt-10 lg:mt-0`}>
                <h2 className='text-7xl font-black mb-5'>{winnerText}</h2>
                <button onClick={handleReset} className='text-[#192344] text-2xl rounded-lg bg-white w-full p-3'>PLAY AGAIN</button>
            </div>

            <div className='text-center w-[45%] flex flex-col items-center order-2 lg:order-3 lg:w-auto'>
                <span className='mb-20 block text-4xl h-2'>THE HOUSE PICKED</span>
                {
                    haveWinner ?
                        <SelectedOption selectedOption={rivalOption} shiny={winnerText === RESULT_TEXT.LOSE} />
                        : <SelectedOption />
                }
            </div>
        </div>
    )
}

export default PickedBoard
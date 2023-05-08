import { OPTIONS } from '../constants/OPTIONS'
import PaperIcon from '../icons/PaperIcon'
import RockIcon from '../icons/RockIcon'
import ScissorsIcon from '../icons/ScissorsIcon'

const GameBody = ({ handleSelectOption }) => {

    const handleClick = (option) => {
        handleSelectOption(option)
    }

    return (
        <div className='bg-triangule w-[313px] h-[278px] m-auto  relative'>
            <div onClick={() => handleClick(OPTIONS.PAPER)} className='absolute w-[180px] h-[180px] top-[-50px] left-[-50px] block rounded-full cursor-pointer'><PaperIcon /></div>
            <div onClick={() => handleClick(OPTIONS.SCISSORS)} className='absolute w-[180px] h-[180px]  top-[-50px] right-[-50px] block rounded-full cursor-pointer'><ScissorsIcon /></div>
            <div onClick={() => handleClick(OPTIONS.ROCK)} className='absolute w-[180px] h-[180px]  bottom-[-50px] left-[60px] block rounded-full cursor-pointer'><RockIcon /></div>
        </div>
    )
}

export default GameBody
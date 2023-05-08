import { OPTIONS } from "../constants/OPTIONS"
import BlackIcon from "../icons/BlackIcon";
import PaperIcon from "../icons/PaperIcon"
import RockIcon from "../icons/RockIcon"
import ScissorsIcon from "../icons/ScissorsIcon"
import useWindowDimensions from './../hooks/useWindowsDimentions';

const SelectedOption = ({ selectedOption = null, shiny = false }) => {

    const { width } = useWindowDimensions();

    return (
        <div className="relative">
            {selectedOption === OPTIONS.PAPER && <PaperIcon big={width > 1024} />}
            {selectedOption === OPTIONS.SCISSORS && <ScissorsIcon big={width > 1024} />}
            {selectedOption === OPTIONS.ROCK && <RockIcon big={width > 1024} />}
            {!selectedOption && <BlackIcon big={width > 1024} />}
            {shiny &&
                <>
                    <span className={'bg-gradient-to-br from-white to-transparent opacity-20 top-[-30px] left-[-30px] z-[-1] absolute rounded-full w-60 h-60 lg:w-96 lg:h-96 lg:top-[-50px] lg:left-[-50px]'}></span>
                    <span className={'bg-gradient-to-br from-white to-transparent opacity-10 top-[-30px] left-[-30px] z-[-1] absolute rounded-full scale-150 w-60 h-60 lg:w-96 lg:h-96 lg:top-[-50px] lg:left-[-50px]'}></span>
                    <span className={'bg-gradient-to-br from-white to-transparent opacity-[0.05] top-[-30px] left-[-30px] z-[-1] absolute rounded-full scale-[2] w-60 h-60 lg:w-96 lg:h-96 lg:top-[-50px] lg:left-[-50px]'}></span>
                </>
            }

        </div>


    )
}

export default SelectedOption
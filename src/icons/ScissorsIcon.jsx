
const ScissorsIcon = ({ big = false }) => {

    return (
        <div className={`${!big ? 'w-44 h-44' : 'w-72 h-72'} bg-gradient-to-t from-[#ec9e0e] to-[#eca922] iconGame`}>
            <span className={`${!big ? 'w-32 h-32' : 'w-56 h-56'} bg-scissors`}>
            </span>
        </div>
    )
}

export default ScissorsIcon
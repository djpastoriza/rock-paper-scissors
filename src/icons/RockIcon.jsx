
const RockIcon = ({ big = false }) => {
    return (
        <div className={`${!big ? 'w-44 h-44' : 'w-72 h-72'} bg-gradient-to-t from-[#dc2e4e] to-[#dd405d] iconGame`}>
            <span className={`${!big ? 'w-32 h-32' : 'w-56 h-56'} bg-rock`}>
            </span>
        </div>
    )
}

export default RockIcon
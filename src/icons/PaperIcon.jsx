
const PaperIcon = ({ big = false }) => {

    return (
        <div className={`${!big ? 'w-44 h-44' : 'w-72 h-72'} bg-gradient-to-t from-[#4865f4] to-[#5671f5] iconGame`}>
            <span className={`${!big ? 'w-32 h-32' : 'w-56 h-56'} bg-paper`}>
            </span>
        </div>
    )
}

export default PaperIcon
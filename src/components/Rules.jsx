
const Rules = ({ handleOpenRules }) => {

    const rules = 'assets/image-rules.svg';

    const handleCloseModal = () => {
        handleOpenRules(false)
    }

    return (
        <div className="bg-white rounded-lg p-5 h-[500px] w-[450px] absolute top-[50%] left-[50%] ml-[-225px] mt-[-250px]">
            <header className="flex justify-between mb-5">
                <h4 className="text-[28px] font-extrabold">RULES</h4>
                <button onClick={handleCloseModal}><i className="w-[20px] h-[20px] bg-cross block"></i></button>
            </header>
            <main>
                <img className="object-cover w-full" src={rules} alt="Rules" />
            </main>
        </div>
    )
}

export default Rules
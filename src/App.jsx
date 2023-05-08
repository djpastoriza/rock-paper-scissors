import { useRef, useState } from 'react'
import './App.css'
import GameBody from './components/GameBody'
import Header from './components/Header'
import PickedBoard from './components/PickedBoard'
import { useRivalMove } from './hooks/UseRivalMove'
import { useWinner } from './hooks/UseWinner'
import Rules from './components/Rules'



function App() {

  const [openRules, setOpenRules] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const { rivalOption, resetRival } = useRivalMove();
  const { winnerText } = useWinner({ selectedOption, rivalOption });

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  }

  const handleReset = () => {
    setSelectedOption(null);
    resetRival();
  }

  const handleOpenRules = (conditional) => {
    console.log(conditional)
    setOpenRules(conditional);
  }

  return (
    <>
      <main className='flex justify-center items-center min-h-[500px]'>
        <div className='text-white w-full m-auto p-4 flex flex-col justify-between items-center h-[100vh]'>
          <Header winnerText={winnerText} />
          {
            selectedOption ?
              <PickedBoard rivalOption={rivalOption} selectedOption={selectedOption} handleReset={handleReset} winnerText={winnerText} />
              : <GameBody handleSelectOption={handleSelectOption} />
          }
          <footer className='flex justify-center lg:self-end'>
            <button onClick={handleOpenRules} className='p-3 w-[150px] border-white border-[1px] border-solid rounded-lg tracking-widest'>RULES</button>
          </footer>
        </div>
      </main>
      {openRules && <Rules handleOpenRules={handleOpenRules} />}
    </>
  )
}

export default App

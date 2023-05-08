import { OPTIONS } from "../constants/OPTIONS";
import { RESULT_TEXT } from "../constants/RESULT_TEXT";


export const useWinner = ({ selectedOption, rivalOption }) => {
    let winnerText = '';
    if ((selectedOption === OPTIONS.PAPER && rivalOption === OPTIONS.ROCK)
        || (selectedOption === OPTIONS.ROCK && rivalOption === OPTIONS.SCISSORS)
        || (selectedOption === OPTIONS.SCISSORS && rivalOption === OPTIONS.PAPER)) {
        winnerText = RESULT_TEXT.WIN;
    } else if ((selectedOption === OPTIONS.PAPER && rivalOption === OPTIONS.SCISSORS)
        || (selectedOption === OPTIONS.ROCK && rivalOption === OPTIONS.PAPER)
        || (selectedOption === OPTIONS.SCISSORS && rivalOption === OPTIONS.ROCK)) {
        winnerText = RESULT_TEXT.LOSE
    } else {
        winnerText = RESULT_TEXT.DRAW
    }
    return { winnerText }
}
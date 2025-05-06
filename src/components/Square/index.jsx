import { useDispatch, useSelector } from "react-redux";
import { playMove, selectCurrentSquares, selectXIsNext } from "../../store/gameSlice";
import { calculateWinner } from '../../helpers';

function Square({ idx }) {
  const dispatch = useDispatch();
  const isNext = useSelector(selectXIsNext);
  const squares = useSelector(selectCurrentSquares);
  const xIsNext = isNext;
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    dispatch(playMove(nextSquares));
  }
  return (
    <button 
      className="bg-white border border-gray-600 float-left text-2xl font-bold leading-[34px] h-[34px] -mr-px -mt-px p-0 text-center w-[34px]" 
      onClick={() => handleClick(idx)}>
      {squares[idx]}
    </button>
  );
}

export default Square;
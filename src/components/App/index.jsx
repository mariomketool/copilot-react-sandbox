import { useSelector, useDispatch } from 'react-redux';
import { selectHistory, selectXIsNext, selectCurrentSquares, playMove, jumpToMove } from '../../store/gameSlice';
import Board from '../Board';
import Introduction from '../Introduction';

const App = () => {
  const history = useSelector(selectHistory);
  const xIsNext = useSelector(selectXIsNext);
  const currentSquares = useSelector(selectCurrentSquares);
  const dispatch = useDispatch();

  function handlePlay(nextSquares) {
    dispatch(playMove(nextSquares));
  }

  function jumpTo(nextMove) {
    dispatch(jumpToMove(nextMove));
  }

  const moves = history.map((_, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button className='px-4 py-2 border cursor-pointer rounded mb-2 bg-gray-500 text-white' onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-white text-gray-700">
      <Introduction />
      <div className="flex mt-5">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info ml-8 text-left pt-8">
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
};

export default App;
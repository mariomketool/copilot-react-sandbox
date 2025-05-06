import { useSelector, useDispatch } from 'react-redux';
import { selectHistory, jumpToMove } from '../../store/gameSlice';

const History = () => {
  const history = useSelector(selectHistory);
  const dispatch = useDispatch();

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
    <ol>{moves}</ol>
  );
};

export default History;
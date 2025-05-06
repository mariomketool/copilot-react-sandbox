import React from 'react';
import { calculateWinner } from '../../helpers';
import { useSelector } from 'react-redux';
import { selectCurrentSquares, selectXIsNext } from '../../store/gameSlice';

function Status() {
  const xIsNext = useSelector(selectXIsNext);
  const squares = useSelector(selectCurrentSquares);
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
        <h4 className='text-2xl font-bold text-center'>
          {status}
        </h4>
    </>
  );
}

export default Status;
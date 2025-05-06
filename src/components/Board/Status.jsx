import React from 'react';
import { useSelector } from 'react-redux';
import { selectXIsNext } from '../../store/gameSlice';

function Status() {
  const xIsNext = useSelector(selectXIsNext);
  const winner = useSelector(s=>s.game.winner);

  return (
    <>
        <h4 className='text-2xl font-bold text-center'>
          {winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`}
        </h4>
    </>
  );
}

export default Status;
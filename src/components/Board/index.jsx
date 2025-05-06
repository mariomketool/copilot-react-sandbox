import React from 'react';
import Square from '../Square';
import Status from './Status';

function Board() {

  return (
    <>
      <div className="mb-2">
        <Status />
      </div>
      
      <div className="board-row clearfix">
        <Square idx={0} />
        <Square idx={1} />
        <Square idx={2} />
      </div>
      <div className="board-row clearfix">
        <Square idx={3} />
        <Square idx={4} />
        <Square idx={5} />
      </div>
      <div className="board-row clearfix">
        <Square idx={6} />
        <Square idx={7} />
        <Square idx={8} />
      </div>
    </>
  );
}

export default Board;
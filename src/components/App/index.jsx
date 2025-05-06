import Board from '../Board';
import Introduction from '../Introduction';
import History from '../History';

const App = () => {

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-white text-gray-700">
      <Introduction />
      <div className="flex mt-5">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info ml-8 text-left pt-8">
          <History />
        </div>
      </div>
    </div>
  );
};

export default App;
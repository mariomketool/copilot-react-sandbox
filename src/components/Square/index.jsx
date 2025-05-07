function Square({ value, onSquareClick }) {
  return (
    <button className="bg-white border border-gray-600 float-left text-2xl font-bold leading-[34px] h-[34px] -mr-px -mt-px p-0 text-center w-[34px]" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
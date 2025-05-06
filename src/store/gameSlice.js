import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  history: [Array(9).fill(null)],
  currentMove: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    playMove: (state, action) => {
      const nextSquares = action.payload;
      const history = state.history.slice(0, state.currentMove + 1);
      state.history = [...history, nextSquares];
      state.currentMove = history.length;
    },
    jumpToMove: (state, action) => {
      state.currentMove = action.payload;
    },
  },
});

export const { playMove, jumpToMove } = gameSlice.actions;

export const selectHistory = (state) => state.game.history;
export const selectCurrentMove = (state) => state.game.currentMove;
export const selectXIsNext = (state) => (state.game.currentMove % 2 === 0);
export const selectCurrentSquares = (state) => state.game.history[state.game.currentMove];

export default gameSlice.reducer;

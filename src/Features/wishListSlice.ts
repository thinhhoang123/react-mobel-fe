import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface IWishListState {
  value: number;
}

// Define the initial state using that type
const initialState: IWishListState = {
  value: 0,
};

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addWishList: (state) => {
      console.log(state);
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { addWishList, decrement, incrementByAmount } =
  wishListSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.wishList.value;

export default wishListSlice.reducer;

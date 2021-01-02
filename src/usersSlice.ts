import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from './store';
import User from './user'

export interface UsersState {
  nextId: number,
  count: number,
  users: User[],
}

const initialState: UsersState = {
  nextId: 1,
  count: 0,
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      action.payload.id = state.nextId;
      state.users = [...state.users, action.payload];
      state.nextId = state.nextId+1;
      state.count = state.users.length;
    },
  },
});

export const { addUser } = usersSlice.actions;

export const addUserAsync = (user: User): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(addUser(user));
  }, 1000);
};

export const getUsers = (state: RootState) => state.users.users;
export const getCount = (state: RootState) => state.users.count;

export default usersSlice.reducer;

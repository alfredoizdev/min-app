import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ICurrentUser {
	email: string;
}

const initialState: ICurrentUser = {
	email: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setCurrentUser: (state, action: PayloadAction<ICurrentUser>) => {
			state.email = action.payload.email;
		},
		removeCurrentUser: (state) => {
			state.email = "";
		},
	},
});

export const { setCurrentUser, removeCurrentUser } = userSlice.actions;

export default userSlice.reducer;

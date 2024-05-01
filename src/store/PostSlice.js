import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = createAsyncThunk(
    "getPosts",
    async (info, { dispatch }) => {
        try {
            dispatch(preloaderOn());
            const response = await fetch(`${BASE_URL}/posts`);
            if (response.status >= 200 || response.status <= 204) {
                const data = await response.json();
                dispatch(getUsers(data));
            }
        } catch (e) {
            throw e;
        } finally {
            dispatch(preloaderOff());
        }
    }
);

export const postSlice = createSlice({
    name: "postSlice",
    initialState: {
        posts: [],
        preloader: false,
    },
    reducers: {
        getUsers: (state, action) => {
            state.posts = action.payload;
        },
        preloaderOff: (state, action) => {
            state.preloader = false;
        },
        preloaderOn: (state, action) => {
            state.preloader = true;
        },
    },
});
export const { getUsers,  preloaderOff, preloaderOn } =
    postSlice.actions;
export default postSlice.reducer;
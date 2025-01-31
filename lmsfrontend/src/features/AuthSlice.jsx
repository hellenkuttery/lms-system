import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
    name: "Auth",
    initialState: {
        loading: false,
        error: false,
        currentUser: null,
        token: null
    },
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchFail: (state) => {
            state.loading = false;
            state.error = true;
        }
    }
});

// ✅ Reducer fonksiyonlarını dışa aktarma
export const { fetchStart, fetchFail } = AuthSlice.actions;

// ✅ Reducer'ı dışa aktarma
export default AuthSlice.reducer;

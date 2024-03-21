import { createSlice } from '@reduxjs/toolkit';

const list = () => Promise.resolve([
    {
        username: "jhone doe",
        age: 40,
        job: 'programmer'
    },
    {
        username: "jenny doe",
        age: 29,
        job: 'programmer'
    },
    {
        username: "borneo",
        age: 28,
        job: 'programmer'
    }
]);

export const requestedAsynchronous = () => (dispatch) => {
    dispatch(storeisprogress());
    list().then(result => {
        setTimeout(() => {
            dispatch(storeissuccess({
                data: result
            }))
        }, 5000);
    })
    // setTimeout(() => {
    //     dispatch(storeisfailed())
    // }, 5000);
}


const initialState = {
    data: [],
    loading: 'idle'
};

const toolkitasync = createSlice({
    name: 'toolkit-controllers',
    initialState,
    reducers: {
        storeisprogress(state) {
            state.loading = 'in_progress'
        },
        storeissuccess(state, action) {
            state.loading = 'success'
            state.data = action.payload.data
        },
        storeisfailed(state) {
            state.loading = 'failed'
        },
    }
});

export default toolkitasync.reducer;

export const { storeisprogress, storeissuccess, storeisfailed } = toolkitasync.actions;
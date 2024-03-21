
export const CONST_NUMBER = 'COUNTERS_NUMBER';
export const USER_LIST = 'USER_LIST';


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

export const requestListUsers = () => dispatch => {
    dispatch({
        type: "REQUEST_IN_PROGRESS"
    });
    setTimeout(() => {
        dispatch({
            type: "REQUEST_FAILED"
        });
    }, 5000)
    // list().then(result => {
    //     setTimeout(() => {
    //         dispatch({
    //             type: "USER_LIST",
    //             payload: result
    //         });
    //     }, 10000);
    // });
}

export const requestedCount = ({ count }) => {
    return {
        type: CONST_NUMBER,
        payload: {
            number: count
        }
    }
};
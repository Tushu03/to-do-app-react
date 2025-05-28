import { useReducer } from "react";

let initialState = {
    initialCount: 0
}

function reducer(state, action) {

    switch (action.type) {
        case 'INCREMENT':
            return { initialCount: state.initialCount + 1 };
        case 'DECREMENT':
            return { initialCount: state.initialCount - 1 };
        case 'RESET':
            return { initialCount: state.initialCount = 0 };
        default:
            return state;
    }
}

export function ReducerDemo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleIncrement() {
        if (state.initialCount >= 10) {
            alert('You Reached Max Limit!');
            return;
        }
        dispatch({ type: 'INCREMENT' });
    }
    function handleDecrement() {
        if (state.initialCount === 0) {
            alert('Count cannot be negative');
            return;
        }
        dispatch({ type: 'DECREMENT' });
    }
    function handleReset() {

        dispatch({ type: 'RESET' });
    }

    return (
        <div className="container-fluid">
            <div className="d-flex flex-column justify-content-center align-items-center border border-1 bg-dark text-white text-center w-50 mx-auto">
                <h1>Count: {state.initialCount}</h1>
                <div className="d-flex mt-30">
                    <button className="rounded rounded-1 btn btn-success mx-2" onClick={handleIncrement}>Increment</button>
                    <button className="rounded rounded-1 btn btn-warning mx-2" onClick={handleDecrement}>Decrement</button>
                    <button className="rounded rounded-1 btn btn-danger mx-2" onClick={handleReset}>Reset</button>

                </div>

            </div>

        </div>
    )

}
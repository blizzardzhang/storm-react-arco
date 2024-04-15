import counterState from '../state/counter'


export default function counter(state={...counterState}, action={type: '', payload: 0}){
    const {type, payload} = action
    switch (type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + payload
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - payload
            }
        default:
            return state
    }
}
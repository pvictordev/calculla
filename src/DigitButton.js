import { ACTIONS } from "./CalculatorApp";

export default function DigitButton({dispatch, digit}) {
    return (
        <button
        onClick={() => {
        dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {digit}})
        }}>
            {digit}
        </button>
    )
}



import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function task_3(value) {
    try {
        const consoleValue = renderEvalResult(value)
        if (typeof consoleValue === 'number') {
            return {
                valid: true, validText: resultTextValid, result: consoleValue.toString()
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue.toString()}
    } catch (e) {
        return ({valid: false, validText: 'ошибка', result: e.toString()});
    }
}

export default task_3;

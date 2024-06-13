import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function task_12(value) {
    const consoleValue = renderEvalResult(value)
        if (typeof consoleValue === 'number' && value.indexOf('getFullYear()') !== -1) {
            return {
                valid: true, validText: resultTextValid, result: consoleValue.toString()
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue.toString()}

}

export default task_12;

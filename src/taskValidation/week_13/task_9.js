import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function task_9(value) {
    const consoleValue = renderEvalResult(value)
        if (typeof consoleValue === 'string' &&  value.indexOf('new Date') !== -1) {
            return {
                valid: true, validText: resultTextValid, result: consoleValue.toString()
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue.toString()}

}

export default task_9;

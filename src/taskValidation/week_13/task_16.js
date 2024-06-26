import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function task_16(value) {
    const consoleValue = renderEvalResult(value)
        if (typeof consoleValue === 'number' && value.indexOf('Date.parse') !== -1)  {
            return {
                valid: true, validText: resultTextValid, result: consoleValue.toString()
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue.toString()}

}

export default task_16;

import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function task_18(value) {

    const consoleValue = renderEvalResult(value)
        if (consoleValue === 'true') {
            return {
                valid: true, validText: resultTextValid, result: consoleValue.toString()
            }
        }
        if (consoleValue === 'false') {
            return {
                valid: true, validText: resultTextValid, result: consoleValue.toString()
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue.toString()}

}

export default task_18;

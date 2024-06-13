import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function task_27(value) {
    const consoleValue = renderEvalResult(value)
        if (consoleValue === 'Среда' && value.indexOf('switch') !== -1 && value.indexOf('case') !==-1) {
            return {
                valid: true, validText: resultTextValid, result: consoleValue.toString()
            }
        }
        return {valid: false, validText: resultTextErrValid, result: consoleValue.toString()}

}

export default task_27;

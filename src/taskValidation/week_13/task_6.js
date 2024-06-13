import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function task_6(value) {
    const consoleValue = renderEvalResult(value)
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() + 1
    const date = currentDate.getDate() + 10
    const futureDate = new Date(year, month, date)
    if ( consoleValue.toString() === futureDate.toString()) {
        return {
            valid: true, validText: resultTextValid, result: consoleValue.toString()
        }
    }
    return {valid: false, validText: resultTextErrValid, result: consoleValue.toString()}

}
export default task_6;

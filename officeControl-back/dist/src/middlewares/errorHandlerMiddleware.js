import { errorTypeToStatusCode, isAppError } from "../../utils/errorUtils.js";
export function errorHandlerMiddleware(err, req, res, next) {
    console.log(err);
    if (isAppError(err)) {
        return res.status(errorTypeToStatusCode(err.type)).send(err.message);
    }
    return res.sendStatus(500);
}

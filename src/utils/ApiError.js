class ApiError extends Error {
    constructor(statusCode, message = "something went wrong", error = [], status = "") {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = error

        if (status) {
            this.status = status
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
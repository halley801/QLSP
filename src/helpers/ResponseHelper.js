import HttpStatus from 'http-status-codes'

const BasicResponse = {
  success: false
}

class ResponseHelper {
  static get HTTP_STATUS () {
    return HttpStatus
  }

  static middlewareResponse (req, res, next) {
    res.onSuccess = ResponseHelper.getDefaultResponseHandler(res).onSuccess
    res.onError = ResponseHelper.getDefaultResponseHandler(res).onError
    return next()
  }

  static getDefaultResponseHandler (res) {
    return {
      onSuccess (data, meta, message, code) {
        ResponseHelper.respondWithSuccess(
          res,
          code || ResponseHelper.HTTP_STATUS.OK,
          data,
          meta,
          message
        )
      },
      onError (error) {
        ResponseHelper.respondWithError(
          res,
          error.status || 500,
          error.message || 'Unknown error'
        )
      }
    }
  }

  static respondWithSuccess (res, code, result, meta, message) {
    const rs = {
      success: true,
      message,
      result,
      meta
    }
    return res.status(code).json({ ...BasicResponse, ...rs })
  }

  static respondWithError (res, errorCode, message) {
    const rs = {
      success: false,
      message
    }
    res.status(errorCode).json({ ...BasicResponse, ...rs })
  }
}
export default ResponseHelper

export const LOGIN_VALIDATION_SCHEMA = {
  username: {
    notEmpty: true,
    errorMessage: 'USERNAME_NOT_EMPTY'
  },
  password: {
    notEmpty: true,
    isLength: {
      options: [{ min: 6, max: 35 }],
      errorMessage: 'INVAILD_PASSWORD_PROVIDED'
    },
    errorMessage: 'PASSWORD_NOT_EMPTY'
  }
}

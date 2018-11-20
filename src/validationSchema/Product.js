export const CREATE_PRODUCT = {
  name: {
    notEmpty: {
      errorMessage: 'NAME_NOT_EMPTY'
    }
  },
  type: {
    notEmpty: {
      errorMessage: 'TYPE_NOT_EMPTY'
    },
    matches: {
      options: [/\b(?:FOOD|DRINK|OTHER)\b/],
      errorMessage: 'INVALID_COIN_ASSET'
    }
  },
  price: {
    notEmpty: {
      errorMessage: 'PRICE_NOT_EMPTY'
    }
  },
  amount: {
    notEmpty: {
      errorMessage: 'AMOUNT_NOT_EMPTY'
    }
  },
  img: {
    notEmpty: {
      errorMessage: 'AMOUNT_NOT_EMPTY'
    }
  }
}
export const VALIDATE_TYPE_PRODUCT = {
  type: {
    notEmpty: {
      errorMessage: 'TYPE_NOT_EMPTY'
    },
    matches: {
      options: [/\b(?:FOOD|DRINK|OTHER)\b/],
      errorMessage: 'INVALID_COIN_ASSET'
    }
  }
}

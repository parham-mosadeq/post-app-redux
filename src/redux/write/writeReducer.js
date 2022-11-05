const initState = {
  isSending: false,
  txtArea: '',
  txtTitle: '',
  userId: '',
  error: '',
};

const writeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST':
      return {
        ...state,
        isSending: true,
      };

    case 'SUCCESS':
      return {
        ...state,
        isSending: false,
      };

    case 'FAILED':
      return {
        ...state,
        isSending: false,
        error: action.payload,
      };

    case 'TXT_TITLE':
      return {
        ...state,
        txtTitle: action.payload,
      };
    case 'TXT_BODY':
      return {
        ...state,
        txtArea: action.payload,
      };

    case 'CLEAR_FILED':
      return {
        ...initState,
      };

    default:
      return state;
  }
};

export default writeReducer;

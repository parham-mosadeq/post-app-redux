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
        txtArea: action.payload.txtArea,
        txtTitle: action.payload.txtTitle,
      };

    case 'FAILED':
      return {
        ...state,
        error: action.payload,
      };

    case 'POST':
      return {
        ...state,
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

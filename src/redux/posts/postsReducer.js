const initState = {
  isLoading: false,
  posts: [],
  error: '',
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST':
      return {
        ...state,
        isLoading: true,
      };

    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };

    case 'FAIL':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return {
        ...initState,
      };
  }
};

export default postReducer;

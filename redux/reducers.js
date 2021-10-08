import {
  INIT_METADATA
} from './actions';

const INITIAL_STATE = {
  metadata: {}
};

const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INIT_METADATA:
      return {
        ...state,
        metadata: action.metadata
      };
    default:
      return state;
  }
};

export default app;

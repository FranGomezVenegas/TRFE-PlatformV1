import {
  INIT_METADATA,
  INIT_CONFIG
} from './actions';

const INITIAL_STATE = {
  metadata: {},
  config: {}
};

const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INIT_METADATA:
      return {
        ...state,
        metadata: action.metadata
      };
    case INIT_CONFIG:
      return {
        ...state,
        config: action.config
      };
    default:
      return state;
  }
};

export default app;

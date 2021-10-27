import {
  INIT_METADATA,
  INIT_CONFIG,
  SET_LANG,
  SET_ACTIVITY
} from './actions';

const INITIAL_STATE = {
  metadata: {},
  config: {},
  lang: "en",
  activity: false
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
    case SET_LANG:
      return {
        ...state,
        lang: action.lang
      };
    case SET_ACTIVITY:
      return {
        ...state,
        activity: action.activity
      };
    default:
      return state;
  }
};

export default app;

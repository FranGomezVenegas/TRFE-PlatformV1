import {
  INIT_METADATA,
  INIT_CONFIG,
  SET_LANG,
  SET_ACTIVITY,
  SET_USER_SESSION
} from './actions';

const INITIAL_STATE = {
  metadata: {},
  config: {},
  lang: "en",
  activity: false,
  userSession: null,          // Agregamos el estado para la sesión del usuario
  proceduresList: [] 
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
    case SET_USER_SESSION:
      return {
        ...state,
        userSession: action.userSession,
        proceduresList: action.userSession?.procedures_list || []  // Actualizamos también procedures_list si está presente
      };      
    default:
      return state;
  }
};

export default app;

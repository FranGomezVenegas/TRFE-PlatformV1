export const INIT_METADATA = 'INIT_METADATA';
export const INIT_CONFIG = 'INIT_CONFIG';
export const SET_LANG = 'SET_LANG';

export const initMetadata = (metadata) => {
  return {
    type: INIT_METADATA,
    metadata
  };
}

export const initConfig = (config) => {
  return {
    type: INIT_CONFIG,
    config
  };
}

export const setLang = (lang) => {
  return {
    type: SET_LANG,
    lang
  };
}
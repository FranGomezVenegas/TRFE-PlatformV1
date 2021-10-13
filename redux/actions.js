export const INIT_METADATA = 'INIT_METADATA';
export const INIT_CONFIG = 'INIT_CONFIG';

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
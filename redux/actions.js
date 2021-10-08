export const INIT_METADATA = 'INIT_METADATA';

export const initMetadata = (metadata) => {
  return {
    type: INIT_METADATA,
    metadata
  };
}
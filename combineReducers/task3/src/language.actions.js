export const SET_LANGUAGE = 'LANG/SET_LANGUAGE';

export const setLanguage = lang => {
  return {
    type: SET_LANGUAGE,
    payload: {
      lang,
    },
  };
};

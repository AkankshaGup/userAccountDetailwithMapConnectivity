export const setState = (payload) => {
    return {
      type: "SET_DATA",
      payload
    };
  }
  export const showHide = () => {
    return {
      type: "SHOW_HIDE",
    };
  }
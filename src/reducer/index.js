// task Reducer

const Istate ={
    allUserData:{},
    CurrentUserData:{},
    hide_show:false
};
  
  export default (state = Istate, action) => {
    const {type, payload} = action;
    switch (type) {
      case 'SET_DATA':
        return {allUserData:payload,CurrentUserData:state.CurrentUserData,hide_show:state.hide_show};
        case 'SHOW_HIDE':
        return {allUserData:payload,CurrentUserData:state.CurrentUserData,hide_show:!state.hide_show};
      default:
        return state;
    }
  };
  
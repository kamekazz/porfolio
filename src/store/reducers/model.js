const INITIAL_STATE = {

    dialog:false,
    
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'Dialog':
      return { ...state, dialog: action.payload };
        case 'DialogColest':
      return { ...state,dialog:false};
      default:
         return state;
    }
}
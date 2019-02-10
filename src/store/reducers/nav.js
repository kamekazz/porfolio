const INITIAL_STATE = {
    offView:false,
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ONVIEW':
        console.log('2')
      return {state, offView: action.payload};
      default:
         return state;
    }
}
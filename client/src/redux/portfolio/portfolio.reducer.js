const INITIAL_STATE = {
    porttfolio: null
}

const portfolioReducer = ({ state = INITIAL_STATE, action }) =>{
    switch (action.types) {
        case 'SET_PORTFOLIO' :
            return {
                ...state,
                porttfolio: action.payload
            }

        default:
            return state
    };
};

export default portfolioReducer
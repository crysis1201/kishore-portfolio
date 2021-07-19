import { combineReducers } from 'redux'
import menuReducer from './menu/menu.reducer'
import portfolioReducer from './portfolio/portfolio.reducer'

const rootReducer = combineReducers({
    portfolio: portfolioReducer,
    menu: menuReducer

})

export default rootReducer
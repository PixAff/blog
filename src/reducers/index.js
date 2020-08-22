import { combineReducers } from 'redux'
import assetsReducer from './assetsReducer'
import assetReducer from './assetReducer'

export default combineReducers({
  assets: assetsReducer,
  asset: assetReducer
})


import coingecko from '../apis/coingecko'

export const fetchAssets = () => async dispatch => {
  const response = await coingecko.get('markets?vs_currency=eur&ids=bitcoin')

  dispatch({ type: 'FETCH_ASSETS', payload: response})
}

import coingecko from '../apis/coingecko'

export const fetchAssets = () => async dispatch => {
  // const response = await coingecko.get('markets?vs_currency=eur&ids=bitcoin')
  const response = await coingecko.get('/coins/?per_page=10')

  dispatch({ type: 'FETCH_ASSETS', payload: response.data })
}

export const fetchAsset = (id) => async dispatch => {
  const response = await coingecko.get(`/coins/${id}`)

  dispatch({ type: 'FETCH_ASSET', payload: response.data })
}

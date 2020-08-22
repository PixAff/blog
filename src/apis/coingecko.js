import axios from 'axios'

export default axios.create({
  baseURL1: 'https://api.coingecko.com/api/v3/exchange_rates',
  baseURL: 'https://api.coingecko.com/api/v3/coins'
})

import React from 'react'
import { connect } from 'react-redux'
import { fetchAssets } from '../actions'

class CryptoList extends React.Component {
  componentDidMount() {
    this.props.fetchAssets();
  }
  render() {
    return(<div>CryptoList</div>
      )
  }
}

export default connect(null, { fetchAssets })(CryptoList)

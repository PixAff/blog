import React from 'react'
import { connect } from 'react-redux'
import { fetchAsset } from '../actions'

class AssetDescription extends React.Component {
  componentDidMount() {
    this.props.fetchAsset(this.props.assetId)
  }
  render() {
    console.log(this.props)
    const { asset } = this.props

    if (!asset) {
      return null;
    }

    return(
      <div>{asset.description.en}</div>)
  }
}

const mapStateToProps = (state, ownProps) => {
  return { asset: state.asset.find(ass => ass.id === ownProps.assetId) }
}

export default connect(mapStateToProps, { fetchAsset })(AssetDescription)

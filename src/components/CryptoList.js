import React from 'react'
import { connect } from 'react-redux'
import { fetchAssets } from '../actions'

class CryptoList extends React.Component {
  componentDidMount() {
    this.props.fetchAssets();
  }

  renderList() {
    return this.props.assets.map(asset => {
      return(
        <div className="item" key={asset.id}>
          <div className="content">
            <div className="description">
              <img src={asset.image.thumb} alt={asset.id}></img>
              <p>{asset.symbol}</p>
            </div>
          </div>
        </div>)

    })
  }

  render() {
    console.log(this.props.assets)
    return(
      <div className="ui relaxed divided list">
        {this.renderList()}
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return { assets: state.assets }
}

export default connect(mapStateToProps, { fetchAssets })(CryptoList)

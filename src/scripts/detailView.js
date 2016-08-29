import React from 'react'
import ReactDOM from 'react-dom'

var DetailView = React.createClass({

	render: function() {
		return (
			<div className="detailListing">
				<img src = {this.props.listing.models[0].get('Images')[0].url_570xN} />
				<h2>{this.props.listing.models[0].get('description')}</h2>
				<h3>${this.props.listing.models[0].get('price')}</h3>

			</div>
			)
	}
})

export default DetailView
import React from 'react'
import ReactDOM from 'react-dom'

var DetailView = React.createClass({

	render: function() {
		return (
			<div className="listing">
				<img src = {this.props.listing.models[0].get('Images')[0].url_170x135} />
				<p>{this.props.listing.models[0].get('description')}</p>
				<p>{this.props.listing.models[0].get('price')}</p>
			</div>
			)
	}
})
export default DetailView
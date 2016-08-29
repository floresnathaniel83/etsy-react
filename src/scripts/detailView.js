import React from 'react'
import ReactDOM from 'react-dom'

var DetailView = React.createClass({

	render: function() {
		return (
			<div className="detailContainer">
				<Header />

				<div className="detailListing">
					<img src = {this.props.listing.models[0].get('Images')[0].url_570xN} />
					<h2>{this.props.listing.models[0].get('description')}</h2>
					<h3>${this.props.listing.models[0].get('price')}</h3>

				</div>
			</div>
			)
	}
})

var Header = React.createClass({

	_doSearch: function (eventObj) {
			if (eventObj.keyCode === 13) {
			location.hash = "search/" + eventObj.target.value
		}

	},

	render: function() {
		return (
			<div className="headerContainer">
					<h1>ETSY</h1>
					<a href="#home"><span>Home</span></a>
					<span>Clothing & Accessories</span>
					<span>Jewelry</span>
					<span>Weddings</span>
					<span>Entertainment</span>
					<span>Craft Supplies</span>
					<span>Tools</span>

				<div id="searchBar">
					<input placeholder = "Search for items or shops" onKeyDown = {this._doSearch} />

				</div>
			</div>
			)
	}
})

export default DetailView
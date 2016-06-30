import React from 'react'
import ReactDOM from 'react-dom'

var ListingsView = React.createClass ({
	render: function() {
		return (

			<div className="listingsView">

				<Header listingColl = {this.props.listingColl} />
				<ListingsContainer listingColl = {this.props.listingColl} />

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
				<h4>ETSY</h4>
				<input placeholder = "What are you shopping for?" onKeyDown = {this._doSearch} />
			</div>
			)
	}
})

var ListingsContainer = React.createClass({
	_getJsxArray: function(articlesArray) {
		var jsxArray = []

		articlesArray.forEach(function(model){
			jsxArray.push(<Listing listingModel = {model} />)
		})
		return jsxArray
	},

	render: function() {
		return (
			<div id="listingsContainer">

				{this._getJsxArray(this.props.listingColl.models)}

			</div>

			)


		}
})

var Listing = React.createClass ({
	render: function() {
		return (
			<div className="listing">
				<h4>{this.props.listingModel.get('title')}</h4>
				<img src = {this.props.listingModel.get('Images')[0].url_170x135} />
				<p class = "price">{this.props.listingModel.get('price')}</p>
				<div id = "button"><a href = {`#details/${this.props.listingModel.get('listing_id')}`}>full page</a></div>
			</div>

			)
		}
})



export default ListingsView
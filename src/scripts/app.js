//import React from 'react'
//import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import ListingsView from './listingsView'
import DetailView from './detailView'

// var qSelect = function(input) {
	// return document.querySelector(input)
// }

const React = require('react'),
	  ReactDOM = require('react-dom')

const app = function() {

	var ListingsCollection = Backbone.Collection.extend ({
		url: "https://openapi.etsy.com/v2/listings/active.js",
		_key: "y8nv4y2sxrcn4gz139phzteh",
		parse: function(rawJSON) {
			return rawJSON.results
			
		}
})

	var ListingModel = Backbone.Collection.extend({
		url: function () {
			return "https://openapi.etsy.com/v2/listings/" + this.id + ".js"
		},

		_key: "y8nv4y2sxrcn4gz139phzteh",

		parse: function(rawJSON) {
			return rawJSON.results
		},

		initialize: function (id) {
			this.id = id
		}

})
	

	var EtsyRouter = Backbone.Router.extend ({

	routes: {
		"search/:keywords" : "doListingsSearch",
		"details/:listing_id" : "doDetailView", 
		"*catchall" : "showHomePage"

	},

	doListingsSearch: function(searchKeyword) {
		var searchCollection = new ListingsCollection()
		searchCollection.fetch({
			dataType:"jsonp",
			data: {
				includes: "Images, Shop",
				api_key: searchCollection._key,
				keywords: searchKeyword
			}

		}).then(function(){
			ReactDOM.render(<ListingsView listingColl = {searchCollection} />, document.querySelector('.container'))
		})

	},

	doDetailView: function(id) {
		var singleListing = new ListingModel(id)
		singleListing.fetch({
			
			dataType:"jsonp",
			data: {
				includes: "Images, Shop",
				api_key: singleListing._key
			}
		}).then(function(){
			ReactDOM.render(<DetailView listing = {singleListing} />, document.querySelector('.container'))
		})
		
	},

	showHomePage: function() {
		var homeCollection = new ListingsCollection()
		homeCollection.fetch({

			dataType: "jsonp",
			processData: true,	
			data: {
				includes: "Images,Shop",
				api_key: homeCollection._key
				
			}

		}).then(function(){
			ReactDOM.render(<ListingsView listingColl = {homeCollection} />, document.querySelector('.container'))
		})
	},

	initialize: function() {

		Backbone.history.start()
	 }
 })

	new EtsyRouter()

}

app()
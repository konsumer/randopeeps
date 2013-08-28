'use strict';

/**
 * Help make the api more friendly & handle multiples
 */

module.exports = function(randopeep){
	function wrapFunc(n, func){
		var args = Array.prototype.slice.call(arguments,2);
		n = n || 1;
		var out = [];
		for(var i=0;i<n;i++){
			out.push(func.apply(randopeep, args));
		}
		return (n===1) ? out.pop() : out;
	}

	var api = {};

	api.data = randopeep.data;
	api.get = randopeep.getCount; // (n, list)
	api.ipsum = randopeep.ipsum; // (n, list)

	api.name = function (params,n){ return wrapFunc(n, randopeep.name, params); };
	api.job = function(n) { return api.get(n,'jobs'); };
	api.cc = function(type, charCount, n){ return wrapFunc(n, randopeep.cc, type, charCount); };
	api.invention = function(n){ return wrapFunc(n, randopeep.invention); };

	api.address = {};
	api.address.state = function(n) { return api.get(n,'us/state'); };
	api.address.state.a = function(n) { return api.get(n,'us/state/abbr'); };
	api.address.zip = function(n){ return wrapFunc(n, randopeep.address.zip); };
	api.address.city = function(n){ return wrapFunc(n, randopeep.address.city); };
	api.address.geo = function(n){ return wrapFunc(n, randopeep.address.geo); };
	api.address.streetName = function(n){ return wrapFunc(n, randopeep.address.streetName); };
	api.address.streetAddress = function(useFullAddress,n){ return wrapFunc(n, randopeep.address.streetAddress, useFullAddress); };
	api.address.phone = function(n){ return wrapFunc(n, randopeep.address.phone); };
	api.address.uk = {};
	api.address.uk.country = function(n) { return api.get(n,'uk/country'); };
	api.address.uk.county = function(n) { return api.get(n,'uk/county'); };
	
	api.corporate = {};
	api.corporate.name = function (type,n){ return wrapFunc(n, randopeep.corporate.name, type); };
	api.corporate.catchPhrase = function (n){ return wrapFunc(n, randopeep.corporate.catchPhrase); };
	api.corporate.bs = function (n){ return wrapFunc(n, randopeep.corporate.bs); };
	
	api.internet = {};
	api.internet.ip = function (n){ return wrapFunc(n, randopeep.internet.ip); };
	api.internet.domain = function (derived,n){ return wrapFunc(n, randopeep.internet.domain, derived); };
	api.internet.email = function (derived,n){ return wrapFunc(n, randopeep.internet.email, derived); };
	api.internet.username = function (derived,n){ return wrapFunc(n, randopeep.internet.username, derived); };
	
	return api;
};
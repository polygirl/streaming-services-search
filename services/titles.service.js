"use strict";

const DbService = require("moleculer-db");

module.exports = {
	name: "titles",
	mixins: [DbService]
};
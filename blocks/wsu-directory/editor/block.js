const { registerBlockType } = wp.blocks;

import Edit from "./edit";

registerBlockType("wsuwp/wsu-directory", {
  	title: "WSU Directory",
  	icon: "menu",
  	apiVersion: 2,
  	category: "text",
  	attributes: {
		peopleIDs: {
	  		type: "array",
	  		default: [],
		},
  	},
  	edit: Edit, 
});
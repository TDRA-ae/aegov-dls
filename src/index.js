import pc from "picocolors"

const postcssJs = require("postcss-js")

const aegovInfo = require("../package.json");
const aegovColors = require("./color/index");

const aegovBase = require("../dist/base");
const aegovComponents = require("../dist/components");
const aegovBlocks = require("../dist/blocks");
const aegovUtil = require("../dist/utilities");


const mainFunction = ({ addBase, addComponents, addUtilities, config, postcss }) => {
	let aegovIncludedItems = [];
	console.group();
	console.log("\n" + pc.bold(pc.magenta("AE Gov Design Language System,")));
	console.log(pc.bold("version:" + aegovInfo.version));
	console.log(pc.gray("Powered by " + aegovInfo.author) + "\n");
	console.group();

	// Include the base style
	addBase(aegovBase);
	aegovIncludedItems.push("aegov-Base");

	// Include the components style
	addComponents(aegovComponents);
	aegovIncludedItems.push("aegov-Components");

	// Include the blocks style
	addComponents(aegovBlocks);
	aegovIncludedItems.push("aegov-Blocks");

	// Include the utilities
	addComponents(aegovUtil, { variants: ["responsive"] });
	aegovIncludedItems.push("aegov-Util");

	console.log(pc.green("✔︎ Including: ") + aegovIncludedItems.join(", "));
	console.groupEnd();
	console.groupEnd();
};

module.exports = require("tailwindcss/plugin")(mainFunction, {
	safelist: [
		'aegov-backdrop',
		{
			pattern: /(?:^|\s)(justify|items)-(start|center|end)(?:\s|$)/,
		},
	  ],
	future: {
	hoverOnlyWhenSupported: true,
	},
	theme: { 
		screens:{
			'sm':'640px',
			'md':'768px',
			'lg':'1024px',
			'xl':'1280px',
			'2xl':'1536px'
		},
		container: {
			padding: {
				DEFAULT: '0.625rem',
				md:'0.875rem',
				lg:'1.375rem',
				xl:'1.25rem'
			},
			center: true
		},
		fontFamily: {
			'roboto': ['\'Roboto\'','ui-sans-serif','system-ui','-apple-system','BlinkMacSystemFont','\'Segoe UI\'','\'Helvetica Neue\'','sans-serif'],
			'inter':['\'Inter\'','\'Helvetica Neue\'','ui-sans-serif','system-ui','sans-serif'],
			'notokufi': ['\'Noto Kufi Arabic\'','ui-sans-serif','\'Helvetica Neue\'','sans-serif'],
			'alexandria': ['\'Alexandria\'','\'Helvetica Neue\'','ui-sans-serif','system-ui','sans-serif']
		},
		fontSize: {
			'xs':'0.75rem',
			'sm':'0.875rem',
			'base':'1rem',
			'lg':'1.125rem',
			'xl':'1.25rem',
			'2xl':'1.5rem',
			'3xl':'1.875rem',
			'h5':'1.375rem',
			'h4':'1.75rem',
			'h3':'2.375rem',
			'h2':'3.125rem',
			'h1':'4.25rem',
			'display':'5.625rem'
		},
		colors: {
			...aegovColors,
			primary:aegovColors.aegold,
			secondary:aegovColors.aeblack
		},
		extend: {
			boxShadow: {
		    	'button': `0px 0px 0px 5px`
		    },
		    height: {
		    	'4.5': '1.125rem',
		    	'13': '3.25rem'
		    },
		    width : {
		    	'4.5': '1.125rem',
		    	'13': '3.25rem'
		    }
		}
	},
	plugins: [
		require('@tailwindcss/forms')
	]
});
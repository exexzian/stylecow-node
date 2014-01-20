var plugins = {};

[
	'calc',
	'color',
	'ffBorderRadius',
	'ieBackgroundAlpha',
	'ieClip',
	'ieFloat',
	'ieInlineBlock',
	'ieLinearGradient',
	'ieMinHeight',
	'ieOpacity',
	'ieTransform',
	'import',
	'initial',
	'linearGradient',
	'matches',
	'nestedRules',
	//'overflowWrap', http://caniuse.com/#feat=wordwrap
	'rem',
	'removeComments',
	'variables',
	'vendorPrefixes'
].forEach(function (pluginName) {
	plugins[pluginName] = require('./plugins/' + pluginName);
});

module.exports = plugins;

/*
- zoom: http://pastebin.com/gaVxatxh (https://github.com/pbakaus/transformie/blob/master/transformie.js)
- http://caniuse.com/#feat=viewport-units
- http://caniuse.com/#feat=multicolumn
- http://caniuse.com/#feat=intrinsic-width
*/
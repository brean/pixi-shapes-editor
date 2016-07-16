// full version
if (typeof PIXI === 'undefined') {
    if (window.console) {
        window.console.warn('pixi.js has to be loaded before loading gown.js');
    }
} else {
    PIXI.shapes = require('../external/pixi-shapes/src');
    PIXI.layout = require('../external/pixi-layout/src');


    module.exports = PIXI.editor = {
        Editor:     require('./Editor')
    };
}

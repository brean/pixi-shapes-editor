var MultipleTool = require('./MultipleTool');

/**
 * Select a shape that can then be drawn on the canvas
 *
 * @class MultipleShapeTool
 * @extends PIXI.editor.MultipleTool
 * @memberof PIXI.editor
 * @constructor
 */
function MultipleShapeTool() {
    MultipleTool.call(this);
}

MultipleShapeTool.prototype = Object.create( MultipleTool.prototype );
MultipleShapeTool.prototype.constructor = MultipleShapeTool;
module.exports = MultipleShapeTool;


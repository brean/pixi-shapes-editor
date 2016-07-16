var MultipleShapeTool = require('./MultipleShapeTool');

/**
 * ToolBar containing tools
 *
 * @class ToolBar
 * @extends PIXI.Container
 * @memberof PIXI.editor
 * @constructor
 */
function ToolBar() {
    PIXI.Container.call(this);
    this.width = 30;
    this.height = 60;
    this.x = 20;
    this.y = 20;
    
    this.createUI();
}

ToolBar.prototype = Object.create( PIXI.Container.prototype );
ToolBar.prototype.constructor = ToolBar;
module.exports = ToolBar;

ToolBar.prototype.createUI = function() {
    this.background = new PIXI.shapes.Rect(
        0xf0f0f0, 1.0, this._width, this._height, 5);
    this.addChild(this.background);
    
    this.addChild(new MultipleShapeTool());
};

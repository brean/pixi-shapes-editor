/**
 * show a selection of multiple Tools
 *
 * @class MultipleTool
 * @extends PIXI.Container
 * @memberof PIXI.editor
 * @constructor
 */

function MultipleTool() {
    PIXI.Container.call(this);
    this.width = 30;
    this.height = 30;
    this.optionsShown = false;
    
    this.createUI();
    
    this.interactive = true;
    
    this.on('click', this.onClick);
    this.on('touchstart', this.onClick);
}

MultipleTool.prototype = Object.create( PIXI.Container.prototype );
MultipleTool.prototype.constructor = MultipleTool;
module.exports = MultipleTool;

MultipleTool.prototype.createUI = function() {
    this.background = new PIXI.shapes.Rect(
        0x000000, 1.0, this._width-10, this._height-10);
    this.background.x = this.background.y = 5;
    this.addChild(this.background);
};

MultipleTool.prototype.toggleShowOptions = function() {
    this.optionsShown = !this.optionsShown;
};

MultipleTool.prototype.onClick = function() {
    this.toggleShowOptions();
};

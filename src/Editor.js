var ToolBar = require('./tools/ToolBar');

/**
 * Editor main class
 *
 * @class Editor
 * @extends PIXI.Container
 * @memberof PIXI.editor
 * @constructor
 */
function Editor() {
    PIXI.Container.call(this);
    
    this.createUI();
}

Editor.prototype = Object.create( PIXI.Container.prototype );
Editor.prototype.constructor = Editor;
module.exports = Editor;

Editor.prototype.createUI = function() {
    this.toolbar = new ToolBar();
    this.addChild(this.toolbar);
/*
    this.toolbar.addTool(new ShapeTool(this));
    this.toolbar.addTool(new SelectTool(this));
*/
};

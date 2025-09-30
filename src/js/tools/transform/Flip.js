(function () {
  var ns = $.namespace('pskl.tools.transform');

  ns.Flip = function () {
    this.toolId = 'tool-flip';
    this.helpText = '水平翻转'; //Flip horizontally
    this.tooltipDescriptors = [
      {key : 'alt', description : '垂直翻转'},//Flip vertically
      {key : 'ctrl', description : '应用于所有图层'}, //Apply to all layers
      {key : 'shift', description : '应用于所有帧'} //Apply to all frames
    ];
  };

  pskl.utils.inherit(ns.Flip, ns.AbstractTransformTool);

  ns.Flip.prototype.applyToolOnFrame_ = function (frame, altKey) {
    var axis;

    if (altKey) {
      axis = ns.TransformUtils.HORIZONTAL;
    } else {
      axis = ns.TransformUtils.VERTICAL;
    }

    ns.TransformUtils.flip(frame, axis);
  };

})();

(function () {
  var ns = $.namespace('pskl.tools.transform');

  ns.Rotate = function () {
    this.toolId = 'tool-rotate';
    this.helpText = '逆时针旋转'; //逆时针旋转
    this.tooltipDescriptors = [
      {key : 'alt', description : '顺时针旋转'}, //Clockwise rotation
      {key : 'ctrl', description : '应用于所有图层'}, //Apply to all layers
      {key : 'shift', description : '应用于所有帧'}]; //Apply to all frames
  };

  pskl.utils.inherit(ns.Rotate, ns.AbstractTransformTool);

  ns.Rotate.prototype.applyToolOnFrame_ = function (frame, altKey) {
    var direction;

    if (altKey) {
      direction = ns.TransformUtils.CLOCKWISE;
    } else {
      direction = ns.TransformUtils.COUNTERCLOCKWISE;
    }

    ns.TransformUtils.rotate(frame, direction);
  };

})();

(function () {
  var ns = $.namespace('pskl.tools.transform');

  ns.Center = function () {
    this.toolId = 'tool-center';
    this.helpText = '将图像居中对齐'; //Align image to the center
    this.tooltipDescriptors = [
      {key : 'ctrl', description : '应用于所有图层'}, //Apply to all layers
      {key : 'shift', description : '应用于所有帧'} //Apply to all frames
    ];
  };

  pskl.utils.inherit(ns.Center, ns.AbstractTransformTool);

  ns.Center.prototype.applyToolOnFrame_ = function (frame) {
    ns.TransformUtils.center(frame);
  };

})();

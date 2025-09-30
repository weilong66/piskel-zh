(function () {
  var ns = $.namespace('pskl.service.keyboard');

  var createShortcut = function (id, description, defaultKey, displayKey) {
    return new ns.Shortcut(id, description, defaultKey, displayKey);
  };

  /* ns.Shortcuts = {

    // List of keys that cannot be remapped. Either alternate keys, which are not displayed.
    // Or really custom shortcuts such as the 1-9 for color palette shorctus
    FORBIDDEN_KEYS : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '?', 'shift+?',
      'DEL', 'BACK', 'ENTER', 'ctrl+Y', 'ctrl+shift+Z'],

    // 语法 : createShortcut(id, <描述>, <默认快捷键>)
    TOOL : {
      PEN : createShortcut('tool-pen', 'Pen tool', 'P'),
      MIRROR_PEN : createShortcut('tool-vertical-mirror-pen', 'Vertical mirror pen tool', 'V'),
      PAINT_BUCKET : createShortcut('tool-paint-bucket', 'Paint bucket tool', 'B'),
      COLORSWAP : createShortcut('tool-colorswap', 'Magic bucket tool', 'A'),
      ERASER : createShortcut('tool-eraser', 'Eraser pen tool', 'E'),
      STROKE : createShortcut('tool-stroke', 'Stroke tool', 'L'),
      RECTANGLE : createShortcut('tool-rectangle', 'Rectangle tool', 'R'),
      CIRCLE : createShortcut('tool-circle', 'Circle tool', 'C'),
      MOVE : createShortcut('tool-move', 'Move tool', 'M'),
      SHAPE_SELECT : createShortcut('tool-shape-select', 'Shape selection', 'Z'),
      RECTANGLE_SELECT : createShortcut('tool-rectangle-select', 'Rectangle selection', 'S'),
      LASSO_SELECT : createShortcut('tool-lasso-select', 'Lasso selection', 'H'),
      LIGHTEN : createShortcut('tool-lighten', 'Lighten tool', 'U'),
      DITHERING : createShortcut('tool-dithering', 'Dithering tool', 'T'),
      COLORPICKER : createShortcut('tool-colorpicker', 'Color picker', 'O')
    },

    SELECTION : {
      CUT : createShortcut('selection-cut', 'Cut selection', 'ctrl+X'),
      COPY : createShortcut('selection-copy', 'Copy selection', 'ctrl+C'),
      PASTE : createShortcut('selection-paste', 'Paste selection', 'ctrl+V'),
      DELETE : createShortcut('selection-delete', 'Delete selection', ['DEL', 'BACK']),
      COMMIT : createShortcut('selection-commit', 'Commit selection', ['ENTER'])
    },

    MISC : {
      RESET_ZOOM : createShortcut('reset-zoom', 'Reset zoom level', '0'),
      INCREASE_ZOOM : createShortcut('increase-zoom', 'Increase zoom level', '+'),
      DECREASE_ZOOM : createShortcut('decrease-zoom', 'Decrease zoom level', '-'),
      INCREASE_PENSIZE : createShortcut('increase-pensize', 'Increase pen size', ']'),
      DECREASE_PENSIZE : createShortcut('decrease-pensize', 'Decrease pen size', '['),
      UNDO : createShortcut('undo', 'Undo', 'ctrl+Z'),
      REDO : createShortcut('redo', 'Redo', ['ctrl+Y', 'ctrl+shift+Z']),
      PREVIOUS_FRAME : createShortcut('previous-frame', 'Select previous frame', 'up'),
      NEXT_FRAME : createShortcut('next-frame', 'Select next frame', 'down'),
      NEW_FRAME : createShortcut('new-frame', 'Create new empty frame', 'N'),
      DUPLICATE_FRAME : createShortcut('duplicate-frame', 'Duplicate selected frame', 'shift+N'),
      CHEATSHEET : createShortcut('cheatsheet', 'Open the keyboard shortcut cheatsheet', ['?', 'shift+?']),
      X1_PREVIEW : createShortcut('x1-preview', 'Select original size preview', 'alt+1'),
      BEST_PREVIEW : createShortcut('best-preview', 'Select best size preview', 'alt+2'),
      FULL_PREVIEW : createShortcut('full-preview', 'Select full size preview', 'alt+3'),
      ONION_SKIN : createShortcut('onion-skin', 'Toggle onion skin', 'alt+O'),
      TOGGLE_GRID : createShortcut('toggle-grid', 'Show/Hide grid', 'alt+G'),
      LAYER_PREVIEW : createShortcut('layer-preview', 'Toggle layer preview', 'alt+L'),
      MERGE_ANIMATION : createShortcut('import-animation', 'Open merge animation popup', 'ctrl+shift+M'),
      CLOSE_POPUP : createShortcut('close-popup', 'Close an opened popup', 'ESC'),
      OFFSET_UP : createShortcut('move-up', 'Move viewport up', 'shift+up'),
      OFFSET_RIGHT : createShortcut('move-right', 'Move viewport right', 'shift+right'),
      OFFSET_DOWN : createShortcut('move-down', 'Move viewport down', 'shift+down'),
      OFFSET_LEFT : createShortcut('move-left', 'Move viewport left', 'shift+left'),
    },

    STORAGE : {
      SAVE : createShortcut('save', 'Save the current sprite', 'ctrl+S'),
      OPEN : createShortcut('open', '(desktop) Open a .piskel file', 'ctrl+O'),
      SAVE_AS : createShortcut('save-as', '(desktop) Save as new', 'ctrl+shift+S')
    },

    COLOR : {
      SWAP : createShortcut('swap-colors', 'Swap primary/secondary colors', 'X'),
      RESET : createShortcut('reset-colors', 'Reset default colors', 'D'),
      CREATE_PALETTE : createShortcut('create-palette', 'Open the palette creation popup', 'alt+P'),
      PREVIOUS_COLOR : createShortcut('previous-color', 'Select the previous color in the current palette', '<'),
      NEXT_COLOR : createShortcut('next-color', 'Select the next color in the current palette', '>'),
      SELECT_COLOR : createShortcut('select-color', 'Select a palette color in the current palette',
        '123456789'.split(''), '1 to 9')
    },

    DEBUG : {
      RELOAD_STYLES : createShortcut('move-left', 'Move viewport left', 'ctrl+alt+R'),
    },

    CATEGORIES : ['TOOL', 'SELECTION', 'MISC', 'STORAGE', 'COLOR']
  }; */

  ns.Shortcuts = {
    /**
     * List of keys that cannot be remapped. Either alternate keys, which are not displayed.
     * Or really custom shortcuts such as the 1-9 for color palette shorctus
     */
    FORBIDDEN_KEYS : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '?', 'shift+?',
      'DEL', 'BACK', 'ENTER', 'ctrl+Y', 'ctrl+shift+Z'],

    /**
     * Syntax : createShortcut(id, description, default key(s))
     */
    TOOL : {
      PEN : createShortcut('tool-pen', '画笔工具', 'P'),
      MIRROR_PEN : createShortcut('tool-vertical-mirror-pen', '垂直镜像画笔工具', 'V'),
      PAINT_BUCKET : createShortcut('tool-paint-bucket', '油漆桶工具', 'B'),
      COLORSWAP : createShortcut('tool-colorswap', '魔术桶工具', 'A'),
      ERASER : createShortcut('tool-eraser', '橡皮擦工具', 'E'),
      STROKE : createShortcut('tool-stroke', '画线工具', 'L'),
      RECTANGLE : createShortcut('tool-rectangle', '矩形工具', 'R'),
      CIRCLE : createShortcut('tool-circle', '圆形工具', 'C'),
      MOVE : createShortcut('tool-move', '移动工具', 'M'),
      SHAPE_SELECT : createShortcut('tool-shape-select', '魔棒工具', 'Z'),
      RECTANGLE_SELECT : createShortcut('tool-rectangle-select', '矩形选框工具', 'S'),
      LASSO_SELECT : createShortcut('tool-lasso-select', '套索工具', 'H'),
      LIGHTEN : createShortcut('tool-lighten', '减淡工具', 'U'),
      DITHERING : createShortcut('tool-dithering', '抖动工具', 'T'),
      COLORPICKER : createShortcut('tool-colorpicker', '颜色拾取器', 'O')
    },

    SELECTION : {
      CUT : createShortcut('selection-cut', '剪切选区', 'ctrl+X'),
      COPY : createShortcut('selection-copy', '复制选区', 'ctrl+C'),
      PASTE : createShortcut('selection-paste', '粘贴选区', 'ctrl+V'),
      DELETE : createShortcut('selection-delete', '删除选区', ['DEL', 'BACK']),
      COMMIT : createShortcut('selection-commit', '确认选区操作', ['ENTER'])
    },

    MISC : {
      RESET_ZOOM : createShortcut('reset-zoom', '重置缩放级别', '0'),
      INCREASE_ZOOM : createShortcut('increase-zoom', '放大视图', '+'),
      DECREASE_ZOOM : createShortcut('decrease-zoom', '缩小视图', '-'),
      INCREASE_PENSIZE : createShortcut('increase-pensize', '增大画笔大小', ']'),
      DECREASE_PENSIZE : createShortcut('decrease-pensize', '减小画笔大小', '['),
      UNDO : createShortcut('undo', '撤销', 'ctrl+Z'),
      REDO : createShortcut('redo', '重做', ['ctrl+Y', 'ctrl+shift+Z']),
      PREVIOUS_FRAME : createShortcut('previous-frame', '选择上一帧', 'up'),
      NEXT_FRAME : createShortcut('next-frame', '选择下一帧', 'down'),
      NEW_FRAME : createShortcut('new-frame', '创建新的空白帧', 'N'),
      DUPLICATE_FRAME : createShortcut('duplicate-frame', '复制当前帧', 'shift+N'),
      CHEATSHEET : createShortcut('cheatsheet', '打开键盘快捷键速查表', ['?', 'shift+?']),
      X1_PREVIEW : createShortcut('x1-preview', '选择原始尺寸预览', 'alt+1'),
      BEST_PREVIEW : createShortcut('best-preview', '选择最佳尺寸预览', 'alt+2'),
      FULL_PREVIEW : createShortcut('full-preview', '选择全尺寸预览', 'alt+3'),
      ONION_SKIN : createShortcut('onion-skin', '切换洋葱皮模式', 'alt+O'),
      TOGGLE_GRID : createShortcut('toggle-grid', '显示/隐藏网格', 'alt+G'),
      LAYER_PREVIEW : createShortcut('layer-preview', '切换图层预览', 'alt+L'),
      MERGE_ANIMATION : createShortcut('import-animation', '打开合并动画弹窗', 'ctrl+shift+M'),
      CLOSE_POPUP : createShortcut('close-popup', '关闭已打开的弹窗', 'ESC'),
      OFFSET_UP : createShortcut('move-up', '向上移动窗口', 'shift+up'),
      OFFSET_RIGHT : createShortcut('move-right', '向右移动窗口', 'shift+right'),
      OFFSET_DOWN : createShortcut('move-down', '向下移动窗口', 'shift+down'),
      OFFSET_LEFT : createShortcut('move-left', '向左移动窗口', 'shift+left'),
    },

    STORAGE : {
      SAVE : createShortcut('save', '保存当前精灵图', 'ctrl+S'),
      OPEN : createShortcut('open', '(桌面端) 打开 .piskel 文件', 'ctrl+O'),
      SAVE_AS : createShortcut('save-as', '(桌面端) 另存为新文件', 'ctrl+shift+S')
    },

    COLOR : {
      SWAP : createShortcut('swap-colors', '交换主/次颜色', 'X'),
      RESET : createShortcut('reset-colors', '重置默认颜色', 'D'),
      CREATE_PALETTE : createShortcut('create-palette', '打开调色板创建弹窗', 'alt+P'),
      PREVIOUS_COLOR : createShortcut('previous-color', '选择当前调色板中的上一个颜色', '<'),
      NEXT_COLOR : createShortcut('next-color', '选择当前调色板中的下一个颜色', '>'),
      SELECT_COLOR : createShortcut('select-color', '在当前调色板中选择一个调色板颜色',
        '123456789'.split(''), '1 到 9')
    },

    DEBUG : {
      RELOAD_STYLES : createShortcut('move-left', '向左移动视口', 'ctrl+alt+R'),
    },

    CATEGORIES : ['TOOL', 'SELECTION', 'MISC', 'STORAGE', 'COLOR']
  };
})();

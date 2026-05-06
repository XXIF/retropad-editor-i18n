/**
 * i18n - Multi-language support for RetroPad Editor
 * Supports English (en) and Chinese (zh)
 */

(function () {
	'use strict';

	const LANG_KEY = 'retropad-editor-lang';
	const DEFAULT_LANG = 'en';

	// Translation dictionary
	const translations = {
		en: {
			// HTML Meta
			'page-title': 'RetroPad Editor',
			'page-description': 'Edit onscreen gamepads for RetroArch',

			// Header
			'import-export': 'Import • Export',
			'reset': 'Reset',
			'header-caption': 'RetroPad Editor',
			'language': 'Language',
			'language-en': 'English',
			'language-zh': '中文',

			// Toolbar Groups
			'group-tools': 'TOOLS',
			'group-overlay': 'OVERLAY',
			'group-button': 'BUTTON',

			// TOOLS
			'set-screen-size': 'Set screen size',
			'color-theme': 'Color theme',
			'show-shapes': 'Show shapes',
			'show-names': 'Show names',
			'portrait': 'Portrait',
			'show-offscreen': 'Show offscreen',

			// OVERLAY
			'create-edit-overlay': 'Create • Edit',
			'delete-overlay': 'Delete overlay',
			'fix-aspect-ratio': 'Fix aspect ratio',

			// BUTTON
			'new-button': 'New button',
			'delete-button': 'Delete button',
			'edit-button': 'Edit button',

			// Editor
			'editor-x': 'X',
			'editor-y': 'Y',
			'editor-w': 'W',
			'editor-h': 'H',
			'editor-flip': 'Flip',
			'editor-quad': 'Quad',

			// Footer
			'footer-github': 'GitHub',
			'footer-forum': 'Forum',
			'footer-retroarch': 'RetroArch',
			'footer-i18n': 'I18n',
			'version': 'v0.9.9',

			// Button properties dialog
			'button-properties': 'Button properties',
			'command': 'Command',
			'image': 'Image',
			'shape': 'Shape',
			'insert-after': 'Insert after',
			'additional': 'Additional',
			'raw-data': 'Raw data:',
			'edit-carefully': 'Edit carefully!',
			'create-button': 'Create button',
			'edit-button-title': 'Edit button',
			'cancel': 'Cancel',

			// Shape options
			'shape-rect': 'rect',
			'shape-radial': 'radial',

			// Overlay dialog
			'create-edit-overlay-title': 'Create/Edit overlay',
			'overlay-name': 'Overlay name',
			'overlay-bg-image': 'Background image',
			'edit-current-overlay': 'Edit current overlay',
			'duplicate-current-overlay': 'Duplicate current overlay',
			'overlay-portrait': 'Portrait',
			'overlay-additional': 'Additional',
			'warning-edit-carefully': 'WARNING! Edit carefully!',
			'create-overlay': 'Create overlay',
			'edit-overlay-title': 'Edit overlay',

			// Aspect fixer
			'fix-aspect-ratio-title': 'Fix aspect ratio',
			'portrait-hint': 'portrait',
			'initial-aspect-ratio': 'Initial aspect ratio',
			'target-screen-dimensions': 'Target screen dimensions',
			'keep-relative-positions': 'Keep relative positions',
			'help-btn': '?',
			'fix': 'Fix',

			// Screen size
			'set-screen-size-title': 'Set screen size',
			'screen-dimensions': 'Screen dimensions',
			'rescale-to-fit': 'Rescale to fit editor window',
			'screenshot-area': 'Screenshot area',
			'fit-screen': 'Fit screen',
			'exact-size': 'Exact size',
			'screenshot-image-size': 'Screenshot image size',
			'set-size': 'Set size',

			// Files dialog
			'files-title': 'Files',
			'import-config': 'Import config',
			'import-images': 'Import images',
			'game-screenshot': 'Game screenshot',
			'file-hint': 'Config file and image files must be stored in same folder.',
			'export-config': 'Export config',
			'image-pack': 'Image pack',
			'close': 'Close',

			// Export hint
			'config-hint-title': 'Config hint',
			'config-hint-p1': 'RetroArch overlays are built from a collection of images and a text configuration file.',
			'config-hint-p2': 'The config file (.cfg) describes:',
			'config-hint-li1': 'The hitbox for each input event, i.e. "size" of the button.',
			'config-hint-li2': 'Which images (.png) should be shown over the input elements.',
			'more-info': 'More information:',
			'libretro-docs': 'Libretro docs',
			'use-flat-images': 'To use default "flat" image set:',
			'download': 'download',

			// Reset dialog
			'reset-question': 'Do you want to reset?<br>All unsaved editions will be lost!',
			'reset-to-default': 'Factory default',
			'reset-to-imported': 'Reset to imported',

			// Delete overlay
			'delete-overlay-question': 'Delete current overlay?',
			'delete-btn': 'Delete',

			// Delete button
			'delete-button-question': 'Delete selected button?',

			// Name exist
			'name-exist': 'Overlay with this name already exist.',

			// Name empty
			'name-empty': 'Enter overlay name.',

			// Aspect hint dialog
			'aspect-hint-title': 'Aspect ratio hint',
			'aspect-hint-default': 'Default aspect ratio fix',
			'aspect-hint-keep': 'Keep relative positions',

			// Color theme
			'color-theme-title': 'Color theme',
			'color-theme-0': 'Color theme 0',
			'color-theme-1': 'Color theme 1',
			'color-theme-2': 'Color theme 2',

			// JS alerts
			'file-parsing-error': 'FILE PARSING ERROR!',
			'reload-page': 'Reload page and try again.',
			'command-no-spaces': 'Button command should not contain spaces',
			'no-selection': 'No selection!',
			'cannot-delete-last-overlay': 'Can not delete last overlay',
			'cannot-delete-last-button': 'Can not delete last button!',
			'missing-images': 'Images are required for loading gamepad config:\n\n{{files}}\n\nImport these files and click "Reset".',
			'error-in-line': 'Error in line "{{line}}"\nProperty removed',
			'browse': 'Browse',
			'browse-dots': 'Browse...',
			'files-count': ' files',

			// Additional properties
			'next-target': 'next_target',
			'range-mod': 'range_mod',
			'alpha-mod': 'alpha_mod',
			'saturate-pct': 'saturate_pct',
			'movable': 'movable',

			// Separators
			'dim-sep': 'x',
			'aspect-sep': ':',

			// Unnamed overlay
			'unnamed': '[unnamed]',
		},

		zh: {
			// HTML Meta
			'page-title': 'RetroPad 编辑器',
			'page-description': '为 RetroArch 编辑屏幕手柄布局',

			// Header
			'import-export': '导入 • 导出',
			'reset': '重置',
			'header-caption': 'RetroPad 编辑器',
			'language': '语言',
			'language-en': 'English',
			'language-zh': '中文',

			// Toolbar Groups
			'group-tools': '工具',
			'group-overlay': '叠加层',
			'group-button': '按钮',

			// TOOLS
			'set-screen-size': '设置屏幕尺寸',
			'color-theme': '颜色主题',
			'show-shapes': '显示形状',
			'show-names': '显示名称',
			'portrait': '竖屏',
			'show-offscreen': '显示屏幕外区域',

			// OVERLAY
			'create-edit-overlay': '创建 • 编辑',
			'delete-overlay': '删除叠加层',
			'fix-aspect-ratio': '修复宽高比',

			// BUTTON
			'new-button': '新建按钮',
			'delete-button': '删除按钮',
			'edit-button': '编辑按钮',

			// Editor
			'editor-x': 'X',
			'editor-y': 'Y',
			'editor-w': '宽',
			'editor-h': '高',
			'editor-flip': '翻转',
			'editor-quad': '等比',

			// Footer
			'footer-github': 'GitHub',
			'footer-forum': '论坛',
			'footer-retroarch': 'RetroArch',
			'footer-i18n': '多语言',
			'version': 'v0.9.9',

			// Button properties dialog
			'button-properties': '按钮属性',
			'command': '命令',
			'image': '图片',
			'shape': '形状',
			'insert-after': '插入到之后',
			'additional': '附加属性',
			'raw-data': '原始数据：',
			'edit-carefully': '请谨慎编辑！',
			'create-button': '创建按钮',
			'edit-button-title': '编辑按钮',
			'cancel': '取消',

			// Shape options
			'shape-rect': '矩形',
			'shape-radial': '圆形',

			// Overlay dialog
			'create-edit-overlay-title': '创建/编辑叠加层',
			'overlay-name': '叠加层名称',
			'overlay-bg-image': '背景图片',
			'edit-current-overlay': '编辑当前叠加层',
			'duplicate-current-overlay': '复制当前叠加层',
			'overlay-portrait': '竖屏',
			'overlay-additional': '附加属性',
			'warning-edit-carefully': '警告！请谨慎编辑！',
			'create-overlay': '创建叠加层',
			'edit-overlay-title': '编辑叠加层',

			// Aspect fixer
			'fix-aspect-ratio-title': '修复宽高比',
			'portrait-hint': '竖屏',
			'initial-aspect-ratio': '初始宽高比',
			'target-screen-dimensions': '目标屏幕尺寸',
			'keep-relative-positions': '保持相对位置',
			'help-btn': '？',
			'fix': '修复',

			// Screen size
			'set-screen-size-title': '设置屏幕尺寸',
			'screen-dimensions': '屏幕尺寸',
			'rescale-to-fit': '缩放以适配编辑器窗口',
			'screenshot-area': '截图区域',
			'fit-screen': '适应屏幕',
			'exact-size': '精确尺寸',
			'screenshot-image-size': '截图图像尺寸',
			'set-size': '设置尺寸',

			// Files dialog
			'files-title': '文件',
			'import-config': '导入配置',
			'import-images': '导入图片',
			'game-screenshot': '游戏截图',
			'file-hint': '配置文件与图片文件必须存放在同一文件夹中。',
			'export-config': '导出配置',
			'image-pack': '图片包',
			'close': '关闭',

			// Export hint
			'config-hint-title': '配置提示',
			'config-hint-p1': 'RetroArch 叠加层由图片集合和一个文本配置文件构成。',
			'config-hint-p2': '配置文件 (.cfg) 描述了：',
			'config-hint-li1': '每个输入事件的碰撞区域，即按钮的"大小"。',
			'config-hint-li2': '哪些图片 (.png) 应显示在输入元素之上。',
			'more-info': '更多信息：',
			'libretro-docs': 'Libretro 文档',
			'use-flat-images': '使用默认"扁平"图片集：',
			'download': '下载',

			// Reset dialog
			'reset-question': '确定要重置吗？<br>所有未保存的修改将丢失！',
			'reset-to-default': '重置为默认',
			'reset-to-imported': '重置为已导入',

			// Delete overlay
			'delete-overlay-question': '删除当前叠加层？',
			'delete-btn': '删除',

			// Delete button
			'delete-button-question': '删除选中的按钮？',

			// Name exist
			'name-exist': '此名称的叠加层已存在。',

			// Name empty
			'name-empty': '请输入叠加层名称。',

			// Aspect hint dialog
			'aspect-hint-title': '宽高比提示',
			'aspect-hint-default': '默认宽高比修复',
			'aspect-hint-keep': '保持相对位置',

			// Color theme
			'color-theme-title': '颜色主题',
			'color-theme-0': '颜色主题 0',
			'color-theme-1': '颜色主题 1',
			'color-theme-2': '颜色主题 2',

			// JS alerts
			'file-parsing-error': '文件解析错误！',
			'reload-page': '请重新加载页面并重试。',
			'command-no-spaces': '按钮命令不能包含空格',
			'no-selection': '未选择任何按钮！',
			'cannot-delete-last-overlay': '无法删除最后一个叠加层',
			'cannot-delete-last-button': '无法删除最后一个按钮！',
			'missing-images': '加载手柄配置需要以下图片：\n\n{{files}}\n\n请导入这些文件后点击"重置"。',
			'error-in-line': '第 "{{line}}" 行出错\n已移除该属性',
			'browse': '浏览',
			'browse-dots': '浏览...',
			'files-count': ' 个文件',

			// Additional properties (keep as-is, technical terms)
			'next-target': 'next_target',
			'range-mod': 'range_mod',
			'alpha-mod': 'alpha_mod',
			'saturate-pct': 'saturate_pct',
			'movable': 'movable',

			// Separators
			'dim-sep': 'x',
			'aspect-sep': '：',

			// Unnamed overlay
			'unnamed': '[未命名]',
		}
	};

	// Store current language
	let currentLang = localStorage.getItem(LANG_KEY) || DEFAULT_LANG;

	// Fallback to browser language if available
	if (!localStorage.getItem(LANG_KEY)) {
		const browserLang = navigator.language || navigator.userLanguage || '';
		if (browserLang.startsWith('zh')) {
			currentLang = 'zh';
		}
	}

	/**
	 * Global translation function
	 * Usage: __('key') or __('key', { variable: 'value' })
	 */
	window.__ = function (key, params) {
		let lang = currentLang;
		let dict = translations[lang] || translations[DEFAULT_LANG];
		let text = dict[key];

		// Fallback to English
		if (text === undefined) {
			text = translations[DEFAULT_LANG][key];
		}

		// If still not found, return the key itself
		if (text === undefined) {
			return key;
		}

		// Replace {{variable}} placeholders
		if (params) {
			for (let p in params) {
				text = text.replace('{{' + p + '}}', params[p]);
			}
		}

		return text;
	};

	/**
	 * Get current language code
	 */
	window.__getLang = function () {
		return currentLang;
	};

	/**
	 * Set language and apply translations
	 */
	window.__setLang = function (lang) {
		if (!translations[lang]) return;
		currentLang = lang;
		localStorage.setItem(LANG_KEY, lang);
		__applyTranslations();
	};

	/**
	 * Apply translations to all elements with data-i18n attribute
	 */
	function __applyTranslations() {
		// Update document title
		let title = document.querySelector('title');
		if (title) title.textContent = __('page-title');

		// Update meta description
		let metaDesc = document.querySelector('meta[name="description"]');
		if (metaDesc) metaDesc.content = __('page-description');

		// Update all elements with data-i18n attribute
		let elements = document.querySelectorAll('[data-i18n]');
		elements.forEach(function (el) {
			let key = el.getAttribute('data-i18n');
			let placeholder = el.getAttribute('data-i18n-placeholder');
			let html = el.getAttribute('data-i18n-html');

			if (html === 'true') {
				el.innerHTML = __(key);
			} else if (placeholder === 'true') {
				el.placeholder = __(key);
			} else {
				el.textContent = __(key);
			}
		});

		// Update elements with data-i18n-title attribute
		let titledElements = document.querySelectorAll('[data-i18n-title]');
		titledElements.forEach(function (el) {
			let key = el.getAttribute('data-i18n-title');
			el.title = __(key);
		});

		// Update language selector
		let langSel = document.getElementById('lang-select');
		if (langSel) {
			langSel.value = currentLang;
		}

		// Update file input labels (Browse...)
		let browseLabels = document.querySelectorAll('.input_file label:empty');
		browseLabels.forEach(function (el) {
			el.textContent = __('browse-dots');
		});

		// Dispatch event for other scripts to react
		document.dispatchEvent(new CustomEvent('i18n-change', { detail: { lang: currentLang } }));
	}

	// Export the apply function
	window.__applyTranslations = __applyTranslations;

	// Apply translations on DOM ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', __applyTranslations);
	} else {
		__applyTranslations();
	}
})();

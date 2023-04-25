// ==UserScript==
// @name         好看的字体样式
// @namespace    https://github.com/SinguJ
// @version      0.1
// @description  修改所有页面的默认字体
// @author       Singu
// @match        http://*/*
// @match        https://*/*
// @match        file://*/*
// @icon         https://avatars.githubusercontent.com/u/23053545?v=4
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 样式表
    const cssText = 'html, body {font-family: "HarmonyOS Sans SC" !important; } pre, pre code, pre code * {font-family: "Söhne", "Inconsolata", "HarmonyOS Sans SC" !important; }';
    // 注入样式
    let injectPoint = document.head || document.getElementsByTagName('head')[0];
    let styleEl = document.createElement('style');
    styleEl.type = 'text/css';
    styleEl.appendChild(document.createTextNode(cssText));
    injectPoint.appendChild(styleEl);
})();
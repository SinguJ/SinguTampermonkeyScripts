// ==UserScript==
// @name         代码块复制解禁
// @namespace    https://github.com/SinguJ
// @version      0.1
// @description  现在你可以自由的复制代码块的内容了
// @author       Singu
// @match        http://*/*
// @match        https://*/*
// @icon         https://avatars.githubusercontent.com/u/23053545?v=4
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let counter = 0;
    let max_exec_times = 30;
    let intervalId = undefined;
    // 阻止任何 Copy 事件监听器的执行
    document.addEventListener('copy', e => e.stopImmediatePropagation(), true);
    // 定期对页面元素进行检查
    intervalId = setInterval(function () {
        // 更新计数器
        counter++;
        // 当重复执行到第 N 次时，停止定时器
        if (counter >= max_exec_times) {
            clearInterval(intervalId);
        }
        // 遍历所有页面元素
        document.querySelectorAll('*').forEach(el => {
            // 解除对 copy 功能的限制
            el.style.userSelect = 'unset';
            el.style.webkitUserSelect = 'unset';
        });
    }, 500);
})();

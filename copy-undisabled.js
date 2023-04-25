// ==UserScript==
// @name         代码块复制解禁
// @namespace    https://github.com/SinguJ
// @version      0.1
// @description  现在你可以自由的复制代码块的内容了
// @author       Singu
// @match        https://*
// @icon         https://avatars.githubusercontent.com/u/23053545?v=4
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let counter = 0;
    let max_exec_times = 30;
    let intervalId = undefined;
    intervalId = setInterval(function () {
        let els = document.querySelectorAll('*');
        for (let el of els) {
            el.style.userSelect = 'unset';
            el.style.webkitUserSelect = 'unset';
        }
        counter++;
        if (counter >= max_exec_times) {
           clearInterval(intervalId);
       }
    }, 500);
})();
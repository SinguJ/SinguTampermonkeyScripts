// ==UserScript==
// @name         CSDN 广告终结者
// @namespace    https://github.com/SinguJ
// @version      0.2
// @description  自动关闭 CSDN 那些烦人的广告
// @author       Singu
// @match        https://*.csdn.net/*
// @icon         https://g.csdnimg.cn/static/logo/favicon32.ico
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  console.log('CSDN 广告终结者正在运行...');
  // setInterval 的加强版
  // 指定脚本 code 每隔 interval 毫秒执行一次，在执行 times 次之后停止
  function setIntervalEx (code, interval, times) {
      // 若传入的执行次数为 0，则跳出
      if (times === 0) {
          return;
      }
      // 已执行次数
      let count = 0;
      // 若间隔为 0，则直接循环调用 code 脚本 times 次
      if (interval === 0) {
          while (count++ < times) {
              code();
          }
          return;
      }
      // 执行处理函数
      function action () {
          // 执行传入的脚本
          code();
          // 累加已执行次数，
          // 同时判断当前是否为最后一次执行，
          // 若不是，则发起下一次执行
          if (count++ < times) {
              setTimeout(action, interval);
          }
      }
      // 开启第一次执行
      setTimeout(action, interval);
  }
  // setTimeout 的加强版
  // 指定脚本 code 在 millisec 时间内执行 times 次
  function setTimeoutEx (code, millisec, times) {
      // 若传入的执行次数为 0，则跳出
      if (times === 0) {
          return;
      }
      // 已执行次数
      let count = 0;
      // 若总时长为 0，则直接循环调用 code 脚本 times 次
      if (millisec === 0) {
          while (count++ < times) {
              code();
          }
          return;
      }
      // 计算在 millisec 毫秒中执行 times 次的平均间隔
      let interval = Math.round(millisec / times);
      // 执行处理函数
      function action () {
          // 执行传入的脚本
          code();
          // 累加已执行次数，
          // 同时判断当前是否为最后一次执行，
          // 若不是，则发起下一次执行
          if (count++ < times) {
              setTimeout(action, interval);
          }
      }
      // 开启第一次执行
      setTimeout(action, interval);
  }

  // 寻找指定元素，若找到，则执行给定的函数
  function execIfFound (selector, func) {
      let els = document.querySelectorAll(selector);
      if (els.length > 0) {
          for (let el of els) {
              func(el);
          }
      }
  }
  // 寻找指定的元素，若找到，则点击
  function clickIfFound (selector) {
      execIfFound(selector, el => el.click());
  }
  // 寻找指定的元素，若找到，则删除
  function removeIfFound (selector) {
      execIfFound(selector, el => el.remove());
  }


  // 在 5 秒内执行 50 次
  setTimeoutEx(function () {
      // 寻找 Banner 广告的关闭按钮
      clickIfFound('div.toolbar-advert > span');
      // 寻找红包的关闭按钮
      clickIfFound('#syno-nsc-ext-gen3 > div.redpack-select-noluck > div.redpack-select-noluck-area > em');

      // 寻找广告的关闭按钮
      clickIfFound('img.logo-advert-close');

      // 寻找悬浮广告的关闭按钮
      clickIfFound('div.redpack-select-return');
      clickIfFound('span.close-icon');

      // 寻找弹出登录框
      removeIfFound('#passportbox');
  }, 5000, 50);
})();
// ==UserScript==
// @name         Auto Accept Telegram Group Requests
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Autoaddgroup
// @author       xardlinep
// @match        https://web.telegram.org/k/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let lastCloseClickTime = 0;
    function acceptRequests() {
        const buttons = document.querySelectorAll('button.btn-primary.btn-control-small.btn-color-primary.rp');
        buttons.forEach(button => {
            if (button.innerText.includes('Add to Group')) {
                button.click();
            }
        });
        const rippleElement = document.querySelector('.pinned-requests .c-ripple');
        if (rippleElement) {
            rippleElement.click();
        }
        const closeButton = document.querySelector('.chat-requests-container .btn-icon.sidebar-close-button');
        const currentTime = Date.now();
        if (closeButton && (currentTime - lastCloseClickTime) >= 2000) {
            closeButton.click();
            lastCloseClickTime = currentTime;
        }
    }
    setInterval(acceptRequests, 2000);
})();

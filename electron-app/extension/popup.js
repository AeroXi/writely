document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('settings');
    // onClick's logic below:
    link.addEventListener('click', function () {
        chrome.runtime.sendMessage({type: "openSettings"});
    });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === "shortcutTriggered") {
        window.open();
    }
});
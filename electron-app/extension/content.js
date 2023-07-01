// electron-app/extension/content.js

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "open_settings") {
      chrome.runtime.sendMessage({message: "open_settings"});
    }
  }
);
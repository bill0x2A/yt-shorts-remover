chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
      if (tab.url.includes("youtube.com")) {
        chrome.scripting.executeScript({
          target: { tabId: activeInfo.tabId },
          function: () => {
            window.addEventListener('yt-navigate-finish', removeShorts);
            removeShorts();
          },
        });
      }
    });
  });
  
  function removeShorts() {
    let shorts = document.querySelectorAll('[href^="/shorts/"]');
    for (let short of shorts) {
      short.parentElement.parentElement.parentElement.style.display = 'none';
    }
  }
  
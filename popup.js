document.getElementById('remove-shorts').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: removeShorts
  });
});

function removeShorts() {
  let shorts = document.querySelectorAll('[href^="/shorts/"]');
  for (let short of shorts) {
    short.parentElement.parentElement.parentElement.style.display = 'none';
  }
}

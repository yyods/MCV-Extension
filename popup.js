// Collect Data Button
document.getElementById("collect").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["contentScript.js"],
      });
    } else {
      console.error("No active tab found.");
    }
  });
});

// Export to CSV Button
document.getElementById("export").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["exportToCSV.js"],
      });
    } else {
      console.error("No active tab found.");
    }
  });
});

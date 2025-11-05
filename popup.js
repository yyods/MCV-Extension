// Collect Data and Export to CSV Button
document.getElementById("collectAndExport").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      // First, execute the content script to collect data
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["contentScript.js"],
      }, () => {
        // After data collection is complete, export to CSV
        setTimeout(() => {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ["exportToCSV.js"],
          });
        }, 500); // Small delay to ensure data is stored
      });
    } else {
      console.error("No active tab found.");
    }
  });
});

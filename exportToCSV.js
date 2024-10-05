console.log("Export to CSV script running");

function exportToCsv(data) {
  const csvRows = [];

  // Determine the format of the data
  if (data.length > 0 && data[0].studentID) {
    // Handle Student ID table format
    const headers = [
      "Student ID",
      "Name",
      "Submission",
      "Autograded",
      "Submission score",
      "Score",
    ];
    csvRows.push(headers.join(","));

    // Map through the data and add rows in the correct order
    data.forEach((row) => {
      const scoreValue = row.submissionScore
        ? row.submissionScore.split("/")[0]
        : "";
      const values = [
        row.studentID || "",
        row.name || "",
        row.submission || "",
        row.autogradedQS || "",
        row.submissionScore || "",
        scoreValue,
      ];
      csvRows.push(values.join(","));
    });
  } else {
    // Handle Group Name table format
    const headers = [
      "Group Name",
      "Submission",
      "Autograded",
      "Submission score",
      "Score",
    ];
    csvRows.push(headers.join(","));

    // Map through the data and add rows in the correct order
    data.forEach((row) => {
      const scoreValue = row.submissionScore
        ? row.submissionScore.split("/")[0]
        : "";
      const values = [
        row.groupName || "",
        row.submission || "",
        row.autogradedQS || "",
        row.submissionScore || "",
        scoreValue,
      ];
      csvRows.push(values.join(","));
    });
  }

  const csvContent = csvRows.join("\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", "collectedData.csv");
  a.click();
}

chrome.storage.local.get("collectedData", function (result) {
  console.log("Retrieved data for CSV:", result.collectedData);
  exportToCsv(result.collectedData);
});

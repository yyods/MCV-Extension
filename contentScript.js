(() => {
  console.log("Collecting data from the table...");

  const rows = document.querySelectorAll(
    "#courseville-submission-list-table tbody tr"
  );
  const data = [];

  rows.forEach((row, index) => {
    console.log(`Processing row ${index + 1}`);

    // Identify the type of table by checking for specific column elements
    const studentIdElem = row.querySelector("td:nth-child(1)");
    const groupNameElem = row.querySelector("td[data-col='group-name'] strong");

    // Determine if this is the "Student ID" or "Group Name" type table
    if (studentIdElem && studentIdElem.innerText.trim().match(/^\d+$/)) {
      // Handle Student ID table format
      const studentID = studentIdElem.innerText.trim();
      const nameElem = row.querySelector("td:nth-child(2)");
      const submissionDateElem = row.querySelector(
        "td:nth-child(3) span[data-sub]"
      );
      const submissionRefElem = row.querySelector(
        "td:nth-child(3) div[data-part='ref']"
      );
      const autogradedQSElem = row.querySelector(
        ".courseville-autograded-score div span[data-part='qspoint-of-this-sub']"
      );
      const submissionScoreElem = row.querySelector(
        "td[data-col='assignment-score'] span[data-part='subscore']"
      );

      // Use empty strings for missing values or "-" placeholders
      const name = nameElem
        ? nameElem.innerText.replace(/\n/g, " ").trim()
        : ""; // Remove newlines from name
      const submissionDate = submissionDateElem
        ? submissionDateElem.innerText.replace(/\n/g, " ").trim()
        : "";
      const submissionRef = submissionRefElem
        ? submissionRefElem.innerText.replace(/\n/g, " ").trim()
        : "";
      const submission = `${submissionDate} ${submissionRef}`.trim();
      const autogradedQS = autogradedQSElem
        ? autogradedQSElem.innerText.trim()
        : "";
      const submissionScore = submissionScoreElem
        ? submissionScoreElem.innerText.trim()
        : "";

      data.push({
        studentID,
        name,
        submission,
        autogradedQS,
        submissionScore,
      });
    } else if (groupNameElem) {
      // Handle Group Name table format
      const groupName = groupNameElem.innerText.trim();
      const submissionDateElem = row.querySelector(
        "td:nth-child(3) span[data-sub]"
      );
      const submissionRefElem = row.querySelector(
        "td:nth-child(3) div[data-part='ref']"
      );
      const autogradedQSElem = row.querySelector(
        ".courseville-autograded-score div span[data-part='qspoint-of-this-sub']"
      );
      const submissionScoreElem = row.querySelector(
        "td[data-col='assignment-score'] span[data-part='subscore']"
      );

      // Use empty strings for missing values or "-" placeholders
      const submissionDate = submissionDateElem
        ? submissionDateElem.innerText.replace(/\n/g, " ").trim()
        : "";
      const submissionRef = submissionRefElem
        ? submissionRefElem.innerText.replace(/\n/g, " ").trim()
        : "";
      const submission = `${submissionDate} ${submissionRef}`.trim();
      const autogradedQS = autogradedQSElem
        ? autogradedQSElem.innerText.trim()
        : "";
      const submissionScore = submissionScoreElem
        ? submissionScoreElem.innerText.trim()
        : "";

      data.push({
        groupName,
        submission,
        autogradedQS,
        submissionScore,
      });
    }
  });

  // Store the collected data
  chrome.storage.local.set({ collectedData: data }, function () {
    console.log("Data collected and stored:", data);
  });
})();

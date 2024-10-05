# MCV Extension

## Overview

The **MCV Extension** is a Chrome extension that allows users to collect data from tables on specific web pages of assignments from [www.mycourseville.com](https://www.mycourseville.com) and export it as a CSV file. This extension was developed to help educators, researchers, and anyone working with data-heavy tables, such as those found in educational platforms, easily collect and analyze data.

## Features

- Collect data from HTML tables on assignment pages of [www.mycourseville.com](https://www.mycourseville.com).
- Export collected data to a CSV file for further analysis.
- Supports multiple table formats, including tables with "Group Name" or "Student ID".
- Cleans and formats data to remove unnecessary line breaks and ensures consistency in output.

## Installation

1. **Clone or Download** this repository to your local machine.
2. Open **Chrome** and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top-right corner.
4. Click on **Load unpacked** and select the folder where you have downloaded/cloned this extension.
5. The extension will now appear in your list of extensions.

## Usage

1. Navigate to an assignment page on [www.mycourseville.com](https://www.mycourseville.com) that contains a table with student or group data.
2. Click on the extension icon to open the extension popup.
3. Click **"Collect Data"** to collect the table data from the current page.
4. Once data is collected, click **"Export to CSV"** to download the collected data as a CSV file.

## Supported Table Formats

The extension supports two different table formats:

- **Group Table Format**: Tables with a "Group Name" column.
- **Student Table Format**: Tables with a "Student ID" column.

The extension automatically detects the table type and collects relevant data, such as:

- **Group Name/Student ID**
- **Submission Details**
- **Autograded Score**
- **Submission Score**
- **Calculated Score**

## CSV Output Format

The CSV output is formatted with the following columns:

- **Group Name / Student ID**
- **Name** (if applicable)
- **Submission** (e.g., date and reference number)
- **Autograded** (e.g., score/total score)
- **Submission Score** (e.g., score/total score)
- **Score** (e.g., numerical score extracted from the total score)

## Example CSV Output

```
Student ID,Name,Submission,Autograded,Submission score,Score
6700000001,Student A,08 Aug 15:32 Ref # 11530487,2/5,2/5,2
6700000002,Student B,15 Aug 23:51 Ref # 11598557,5/5,5/5,5
...
```

## Troubleshooting

- If you encounter issues where data is not being collected correctly, make sure you are on a supported page with the correct table format.
- If the extension doesn’t seem to work, check the **Console** under Developer Tools (`F12`) for any errors or warnings.

## Contributing

Contributions are welcome! If you have suggestions for improvement or would like to report an issue, please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- Thanks to [Chrome Developers Documentation](https://developer.chrome.com/docs/extensions/) for providing detailed guides on building Chrome extensions.
- Special thanks to educators and researchers who provided input on features to include.

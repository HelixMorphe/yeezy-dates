# Yeezy-Dates

Yeezy-Dates is a simple date parser that helps you quickly interpret human-friendly date related input strings. It provides suggestions for potential interpretations of the input, making it ideal for applications requiring flexible date handling and natural language processing.

## Features

- Parses natural language date strings into meaningful suggestions.
- Returns an array of suggestions, where each suggestion includes a descriptive label and the corresponding JavaScript `Date` object.

## Installation

To install yeezy-dates, use npm or yarn:

```bash
npm install yeezy-dates
```

or

```bash
yarn add yeezy-dates
```

## Usage

Yeezy-Dates exposes a single function `parseDate()`, which takes an input string and returns an array of suggestions.

### Example

```javascript
const { parseDate } = require('yeezy-dates');

const input = "tomo";
const suggestions = parseDate(input);

console.log(suggestions);
```

#### Output:

```json
[
    {
        "label": "tomorrow",
        "date": "2025-01-23T15:59:25.525Z"
    },
    {
        "label": "tomorrow at midnight",
        "date": "2025-01-22T18:30:00.000Z"
    },
    {
        "label": "tomorrow at noon",
        "date": "2025-01-23T06:30:00.000Z"
    },
    {
        "label": "tomorrow at 8am",
        "date": "2025-01-23T02:30:00.000Z"
    },
    {
        "label": "tomorrow at 9am",
        "date": "2025-01-23T03:30:00.000Z"
    }
]
```

### API

#### `parseDate(input: string): Array<{ label: string, date: Date }>`

- **input**: A natural language date string (e.g., "tomo", "next Monday", "5 minutes ago").
- **Returns**: An array of suggestions. Each suggestion is an object with:
  - **label**: A string describing the interpretation of the input.
  - **date**: A JavaScript `Date` object representing the corresponding date and time.

### Use Cases

- Enhancing user experience in scheduling or planning applications.
- Building smart input fields for dates.
- Natural language date interpretation for chatbots or virtual assistants.


## Contributing Guidelines

### Code Style

- Follow the existing code style and conventions.
- Use meaningful variable and function names.
- Write comments where necessary, especially for complex logic.

### Commit Messages

- Use clear and concise commit messages in imperative form.
- Use `npm run commit` to create a commit message following the conventional commit format.

### Pull Requests

1. Ensure your branch is up to date with the `main` branch before creating a pull request:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b your-branch-name
   ```
2. Add meaningful changes and commit them.
3. Push your branch and create a pull request:
   ```bash
   git push origin your-branch-name
   ```
4. Include a detailed description of your changes in the pull request.
5. Link any related issues in your pull request description.

---
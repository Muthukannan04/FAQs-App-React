# React FAQ Accordion

A simple and responsive FAQ Accordion application built using React and CSS. The application displays a list of frequently asked questions and allows users to expand or collapse each item to view its answer.

## Features

* Dynamic FAQ data rendering
* Expand and collapse FAQ items
* React Hooks (`useState`)
* Reusable components
* Responsive design
* Smooth accordion animation
* Clean and modern user interface

## Technologies Used

* React.js
* JavaScript (ES6+)
* CSS3

## Project Structure

```text
src/
├── App.jsx
├── App.css
└── main.jsx
```

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/react-faq-accordion.git
```

### Navigate to the Project Folder

```bash
cd react-faq-accordion
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## How It Works

1. FAQ data is stored in an array of objects.
2. The `FaqAccordion` component maps through the data and renders individual `FaqItem` components.
3. Each `FaqItem` manages its own open/close state using the `useState` hook.
4. Clicking a question toggles the visibility of its answer.

## Sample FAQ Data

```javascript
{
  id: 1,
  question: "What is React?",
  answer: "React is a JavaScript library for building user interfaces."
}
```

## Future Improvements

* Open only one FAQ at a time
* Search functionality
* Dark mode support
* Custom icons and animations
* API-based FAQ loading

## License

This project is open-source and available under the MIT License.

## Author

**Muthukannan**

GitHub: https://github.com/Muthukannan04

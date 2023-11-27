# Product Widgets

## A fully functional front-end service written with React to build interactive product widgets

This project displays several widgets on a page, each representing a different product for a given user. These widgets are interactive and allow users change their settings as well as update their profile

Users can do the following:

- Activate a widget
- Select widget theme colour
- Link a widget to their public profile

<br>

![Project screenshot](./src/assets/projectScreenshot.jpg)

<br>

## Pre-requisites

- Node.js and npm installed

## Getting started

1. Clone this project

```
git clone [repo path]
```

2. Install dependencies

```
npm install
```

3. Run the app

```
npm run dev
```

## Tools

This project was scaffolded with Vite and uses the following tools:

- React
- TypeScript
- Tailwind
- React Icons
- Mock Service Worker (msw)
- Vitest
- React Testing Library
- ESLint

## Considerations

**Architectural Decisions:**

For state management, the useState hook was sufficient as props only needed to be sent a couple levels deep. No need for context or redux.

Chose to set the project up with Vite to provide me with a much faster and better development experience than using create-react-app. Used TypeScript for type safety - pretty standard

For styling, Tailwind was the main tool as I find it helps style a site quickly but I did have to use vanilla CSS for the more advanced styles like the toggle switch and animations. Built for mobile first, and made it responsive to larger screens

For testing, I followed TDD and iterated on it as I went along to ensure code was simple and effective

Included linting to make sure I'm following a consistent coding standard

**Challenges Faced:**

I faced a problem trying to style the widget headers dynamically using the bg-[color] utility class like so: `bg-${selectedColor}`
The solution I found was to just create an object lookup for the styles assosciated with each different badge colour.

The scores on lighthouse were pretty good, i.e all in the green, apart from SEO so I included an extra meta tag in the index.html file to describe the page's content a bit more. Made a few more adjustments which resulted in perfect scores for performance, SEO, accessibility, and best practices.

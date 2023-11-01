# Simple React CMS (Content Management System)

This is a simple client-side application built with React, React Router, and Webpack. It functions as a basic CMS (Content Management System) that loads tab data from a JSON file and displays content associated with each tab.

## Features

- Tab switching with corresponding URL updates (e.g., "localhost/dummyTable" or "localhost/dummyChart").
- The first tab is opened by default.
- If a tab identifier is present in the URL when the app loads, that tab will be opened by default.
- Content for each tab (identified by the 'path' property) is loaded only when needed (lazy loading).

## Usage

1. Clone this repository to your local machine.

2. Install dependencies using npm or yarn:
   npm install

Start the development server:
npm start

Open your web browser and navigate to http://localhost:3000.

You can now switch between tabs, and the content will be loaded on-demand.

# Photo Gallery App

This is a Photo Gallery application built with React, TypeScript, and Tailwind CSS. The application allows users to search for photos using the Unsplash API, view the results in a gallery format, and navigate through the results using pagination.

## Features

- **Search Photos**: Users can search for photos using a search bar.
- **Debounced Search**: The search input is debounced to reduce the number of API calls.
- **Gallery View**: Photos are displayed in a responsive grid layout.
- **Loading State**: A loading spinner is displayed while fetching data.
- **Error Handling**: An error message is displayed if there is an issue fetching data.
- **Pagination**: Users can navigate through pages of search results.
- **Caching**: Request are being cached.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TanStackQuery v4**: A library for data fetching.
- **React Icons**: A library of popular icons for React applications.
- **React Loader Spinner**: A library for loading spinners in React applications.
- **Jest**: A JavaScript testing framework.
- **React Testing Library**: A library for testing React components.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/primea-gallery-app.git
   cd primea
   ```
2. Install the dependencies:
   ```sh
   yarn install
   ```
3. Create a `.env` file in the root directory and add your Unsplash API access key:
   ```sh
   REACT_APP_UNSPLASH_ACCESS_KEY=your_access_key
   ```
4. Start the development server:
   ```sh
   yarn start
   ```
5. Open [http://localhost:3000](http://localhost:3000) in the browser.

## Testing

To run the tests, use the following command:

```sh
yarn test
```

## Components

### `App.tsx`

The main component that renders the `PhotoGallery` component.

### `PhotoGallery.tsx`

The main gallery component that handles the search functionality, data fetching, and pagination.

### `SearchBar.tsx`

A component that renders the search bar and handles user input and debouncing.

### `Gallery.tsx`

A component that renders the photo gallery, loading spinner, error message, and "No images found" message.

### `ImageCard.tsx`

A component that renders individual photo cards.

### `Pagination.tsx`

A component that renders pagination controls.

### `Mesaage.tsx`

A component that renders an message with a icon and text.

## Custom Hooks

### `useDebounce.tsx`

A custom hook that debounces a value.

### `usePhotos.tsx`

A custom hook that fetches photos from the Unsplash API.

## Types

### `unsplash.ts`

Type definitions for the Unsplash API response.

## Utils

### `stringOperations.ts`

Utility functions for string operations.

### `api.ts`

Utility functions for making axios API requests.

## License

This project is licensed under the MIT License.

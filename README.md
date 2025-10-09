# Companies Directory

A modern frontend React application for a Companies Directory, styled with Tailwind CSS and Material UI to provide a clean and responsive user interface.
It allows users to browse and filter company data effectively

---

## Overview

The webpage is designed for an efficient and user-friendly experience. It includes:

- A **header**
- A **filter section** where users can filter companies by:
  - Company name
  - Industry type
  - Location
  - Number of employees
  - Company size
  - Founded year
- A **toggle** between card and table views for displaying company data
- A **hover effect** on company cards
- Clickable links to companies' websites
- **Pagination** at the bottom with customization for the number of items per page
- Responsiveness for various device sizes

---

## Features

- **Filter Section**  
  Multiple filters to allow users to narrow down company listings. A "Clear all filters" button resets all selections.
  
- **Toggle View**  
  Users can switch between card layout and table layout for viewing companies.

- **Company Cards / Table**  
  Both layouts dynamically render company data by looping through the dataset.

- **Pagination**  
  Users can choose the number of companies displayed per page for improved performance and usability.

- **Responsive Design**  
  The app adapts smoothly to different screen sizes, ensuring usability on all devices.

- **Debouncing**  
  Incorporates debouncing for the company name search input to reduce performance overhead by limiting data fetch frequency.

---

## Implementation Details

- **Build Tool:**  
  The project is bootstrapped with [Vite](https://vitejs.dev/) for fast and efficient development.

- **Project Structure:**  
  The project is organized into modular folders:  
  - `components/` for reusable components such as company details renderers, filters, and pagination controls  
  - `contexts/` for managing global state with React Context API  
  - `hooks/` containing custom React hooks  
  - `utils/` for utility functions including filtering helpers  

- **Data Handling:**  
  - A static data file to simulate company data.  
  - Implemented loading and error handling states while fetching or processing data.

- **State Management:**  
  - Useing React Context API as a centralized store to avoid prop drilling and improve performance.  
  - Initial filter states are set in a context through an `initialState` object.  
  - React hooks such as `useState`, `useEffect`, `useCallback`, and `useMemo` are used to manage filtered data, side effects, and memoization to prevent unnecessary re-renders.  
  - A custom hook is created for easy access and update of the context data.

- **Filtering Logic:**  
  - Dropdowns are used for other filters to select industry, location, size, etc.

- **UI Rendering:**  
  - Card layout and table layout rendering follow a similar pattern: looping through data and dynamically populating Cards or Table rows.  

- **Pagination:**  
  Data is rendered in smaller chunks based on pagination settings for optimal initial rendering speed and user experience.

---

## How to Use

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the app locally using `npm run dev`.
4. Use the filter panel to search and filter companies.
5. Toggle between card and table views.
6. Customize items per page using pagination controls.
7. Click company links to open their websites in new tabs.

---

## Technologies Used

- React
- Tailwind CSS
- Material UI
- Vite
- React Context API
- Custom React hooks

---


## Challenges Faced

- **State Management Complexity**  
  Initially, lifting state up for sharing data between components caused prop drilling, making the code harder to maintain . To overcome this, Context API was implemented as a centralized store, improving state management and simplifying data sharing across components also helpful for a growing Application.

- **Styling Constraints**  
  Building the UI with Tailwind CSS and Material UI was challenging within the limited time frame. Balancing custom designs and responsiveness while adhering to deadlines required careful planning.

- **Performance Optimization**  
  Implementing debouncing for search inputs and memoization with `useMemo` and `useCallback` hooks was necessary to reduce unnecessary re-renders and improve app responsiveness, which added complexity to the development process.

- **Pagination Implementation**  
  Efficiently paginating large datasets and allowing customization of items per page required careful logic to maintain fast initial rendering and a good user experience.


---


## Lessons Learned

- **Effective State Management**  
  Using React Context API proved essential for managing complex state across multiple components, reducing prop drilling, and improving maintainability and scalability of the application.

- **Importance of Performance Optimization**  
  Applying techniques like debouncing and memoization with `useMemo` and `useCallback` helped enhance application performance by limiting unnecessary renders, which is crucial for delivering a smooth user experience.

- **Styling Efficiency**  
  Combining Tailwind CSS with Material UI required balancing speed and customization, teaching the importance of leveraging utility-first frameworks alongside component libraries for rapid yet flexible styling.

- **Designing for Flexibility**  
  Supporting multiple layout views (card and table) improved adaptability and user preference accommodation, highlighting the need for modular and reusable component design.

- **Pagination Best Practices**  
  Breaking down large datasets into paginated chunks improved initial page load times and usability, emphasizing thoughtful data rendering strategies in frontend applications.

- **Robustness Through Error Handling**  
  Implementing loading indicators and error states enhanced user feedback and app reliability, underscoring the need for comprehensive UX considerations even in data-fetching scenarios.

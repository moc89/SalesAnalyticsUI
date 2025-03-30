# Sales Analytics Dashboard

The **Sales Analytics Dashboard** is a web application designed to visualize sales data using interactive charts and tables. Built with React and Material-UI, it provides a clean and responsive interface for analyzing sales performance.

---

## Features

- **Interactive Charts**: Visualize sales data with dynamic bar charts powered by `react-chartjs-2`.
- **Data Table**: View detailed sales data in a sortable and paginated table.
- **Responsive Design**: Fully responsive layout using Material-UI's Grid and Flexbox.
- **Top Bar**: Stylish header with a title and menu toggle.
- **Loading Spinner**: Displays a spinner while fetching data.
- **Error Handling**: Displays error messages if the API call fails.
- **Footer**: A soft footer with copyright information.

---

## Technologies Used

- **Frontend**:
  - [React](https://reactjs.org/) - JavaScript library for building user interfaces.
  - [Material-UI](https://mui.com/) - React components for faster and easier web development.
  - [Chart.js](https://www.chartjs.org/) with [react-chartjs-2](https://react-chartjs-2.js.org/) - For interactive charts.
  - [Axios](https://axios-http.com/) - For making API requests.

- **Backend**:
  - .NET Web Application project should be running locally in order to see UI screen.
  - The project assumes a backend API that provides sales data. Replace the `API_URL` in the `.env` file with your backend endpoint.

---

## Installation

1. Open UI/sales-analysis-ui folder in a editor then type:
    cd sales-analytics-dashboard
2. npm install
3. npm run dev 
4. Open the app in your browser:
    http://localhost:5173/

## Project Structure

    sales-analytics-dashboard/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components (e.g. SalesChart, SalesSummaryTable)
│   ├── pages/              # Page components (e.g., SalesDashboard)
│   ├── types/              # TypeScript types (e.g., SaleRecord.ts)
│   ├── utils/              # Utility functions (e.g., formatDate.ts)
│   ├── App.tsx             # Main app component
│
├── .env                    # Environment variables
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
└── tsconfig.json           # Typescript config


## Available Scripts
In the project directory, you can run:

- npm run dev: Runs the app in development mode.
- npm run build: Builds the app for production.
- npm test: Launches the test runner.

## Future Development/Enhancements
Add more chart types (e.g., line charts, pie charts).
Implement advanced filtering (e.g., by date range, product category).
Add user authentication and role-based access control.
Export data as CSV or Excel.
Integrate a map visualization for geographic sales data.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
Material-UI for the UI components.
Chart.js for the charting library.
Axios for API requests.
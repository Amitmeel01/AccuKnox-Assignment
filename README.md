# CNAPP Dashboard

## Overview

The **CNAPP Dashboard** is a web application that provides a comprehensive interface for managing and monitoring cloud-native applications. It includes various widgets for monitoring different aspects like CSPM (Cloud Security Posture Management), CWPP (Cloud Workload Protection Platform), Registry Scans, and Ticket Management.

## Features

- **CSPM**: Cloud Security Posture Management
- **CWPP**: Cloud Workload Protection Platform
- **Registry Scan**: Manage and monitor registry scans
- **Ticket Scan**: Manage and monitor tickets
- **Search**: Easily search for widgets within the dashboard
- **Dynamic Widget Management**: Add or remove widgets dynamically

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Routing**: React Router
- **Icons**: React Icons
- **State Management**: React Hooks (useState)

## Installation

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v14 or above)
- npm (v6 or above)

### Clone the Repository

```bash
git clone https://github.com/your-username/cnapp-dashboard.git
cd cnapp-dashboard
```

### Install Dependencies

```bash
npm install
```

## Running the Application

To start the development server, run:

```bash
npm start
```

This will start the app on `http://localhost:3000`. Open this URL in your browser to view the dashboard.

## Folder Structure

- `src/`
  - `components/`: Contains all the React components like `Header`, `Sidebar`, `Cspm`, `Cwpp`, `RegistryScan`, `TicketScan`, and `Body`.
  - `App.js`: Main entry point of the application.
  - `index.js`: Renders the app into the DOM.
- `public/`: Public assets like HTML, images, and other static files.

## How to Use

1. **Search Widgets**: Use the search bar in the header to find specific widgets.
2. **Add Widgets**: Click on "Add Widget +" to open the sidebar and add new widgets to the dashboard.
3. **Reload**: Use the reload button to refresh the data displayed by the widgets.
4. **Time Filter**: Adjust the time filter using the button in the header to view data for different time ranges.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or issues, please submit them via GitHub Issues or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or concerns, please contact:

- Name: Amit Meel



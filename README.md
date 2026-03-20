# Expense Tracker
Keep a track of your own income and expenses and have a clear picture of where your money is going.

## Features
- 📊 **Real-time Statistics Dashboard** - View total income, expenses, balance, and transaction count at a glance
- ✏️ **Edit Transactions** - Modify existing transactions with an easy-to-use dialog
- 🔍 **Search & Filter** - Quickly find transactions by category, amount, or date
- 📤 **Export to CSV** - Download your transaction data for external analysis
- 🗑️ **Bulk Delete** - Clear all transactions with confirmation dialog
- 📈 **Visual Analytics** - Interactive doughnut charts for income and expense breakdown
- ✅ **Form Validation** - Prevent invalid entries with real-time validation
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

## Use of this project
- The project aims to help keep a track of money inflow and outflow. Many people live on a fixed income, and they find that towards the end of the month they don't have sufficient money to meet their needs. 

- While this problem can arise due to low income, invariably it is due to poor money management skills. People tend to overspend without realizing, which can prove to be disastrous. 

- Using a daily expense manager can help them keep track of how much they spend every day and on what. 

- Using an expense tracker is one of the best ways to get their expenses under control and bring some semblance of order to their finances.

## Tech Stack Used

<p>
<img src="https://img.shields.io/badge/-React%2018-61DAFB?logo=react&logoColor=white&style=for-the-badge" alt="React 18">
<img src="https://img.shields.io/badge/-Material%20UI%20v5-007FFF?logo=mui&logoColor=white&style=for-the-badge" alt="Material-UI v5">
<img src="https://img.shields.io/badge/-Chart.js-FF6384?logo=chartdotjs&logoColor=white&style=for-the-badge" alt="Chart.js">
<img src="https://img.shields.io/badge/-Context%20API-61DAFB?logo=react&logoColor=white&style=for-the-badge" alt="Context API">
</p>

## Technologies & Libraries
- **React 18.2.0** - Modern UI library with Concurrent Features
- **Material-UI v5** (@mui/material, @mui/icons-material, @mui/styles)
- **Chart.js v4** - Beautiful data visualization
- **React Chart.js 2** - React wrapper for Chart.js
- **UUID** - Unique transaction IDs
- **LocalStorage** - Persistent data storage

## Project Structure
```
Expense_Tracker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Details/          # Income/Expense chart cards
│   │   ├── Main/             # Main transaction form & list
│   │   │   ├── Form/         # Transaction input form
│   │   │   ├── List/         # Transaction list with edit/delete
│   │   │   └── Toolbar/      # Search, filter, export controls
│   │   ├── Statistics/       # Summary stat cards
│   │   ├── InfoCard.jsx      # Feature highlights
│   │   └── Snackbar/         # Notification component
│   ├── constants/
│   │   └── categories.js     # Income/Expense categories
│   ├── context/
│   │   ├── context.js        # Global state management
│   │   └── contextReducer.js # State reducer logic
│   ├── utils/
│   │   └── formatDate.js     # Date formatting utility
│   ├── App.js                # Main app layout
│   └── index.js              # React 18 entry point
└── package.json
```

## Cloning and Running the Application Locally

**Clone the project:**
```bash
git clone <repository-url>
cd Expense_Tracker
```

**Install dependencies:**
```bash
npm install
```

**Start the development server:**
```bash
npm start
```

The application runs on **http://localhost:3000**

**Build for production:**
```bash
npm run build
```

## Key Features Breakdown

### 📊 Statistics Dashboard
- Total Income, Total Expense, Net Balance, Transaction Count
- Color-coded cards with hover effects
- Real-time updates

### ✏️ Transaction Management
- Add new income/expense transactions
- Edit existing transactions via dialog
- Delete individual transactions
- Bulk clear all transactions

### 🔍 Search & Filter
- Search by category, amount, or date
- Filter by type (All/Income/Expense)
- Real-time filtering

### 📤 Data Export
- Export transactions to CSV
- Date-stamped filenames
- Full transaction history included

### 📈 Visual Charts
- Doughnut charts for income/expense breakdown
- Category-wise distribution
- Color-coded by category

## Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Future Enhancements
- Voice recognition for transaction entry (currently disabled due to React 18 compatibility)
- Budget planning and alerts
- Recurring transactions
- Multi-currency support
- Cloud sync

## Happy Coding!

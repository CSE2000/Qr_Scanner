import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scanner from "./views/Scanner";
import QRCodeScanner from "./views/QRLocationScanner";
import AttendanceDetails from "./views/AttendanceDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRCodeScanner />} />
        <Route path="/attendance-details" element={<AttendanceDetails />} />
      </Routes>
    </Router>
    // <QRCodeScanner/>
    // <Scanner />
  );
};

export default App;

import React from "react"
import * as ReactDOM from "react-dom/client"
import ListUsers from "./components/ListUsers"
import SimpleLoginComponent from "./components/SimpleLoginComponent"
import { NavLink, Routes, Route, BrowserRouter } from "react-router-dom"
import HomeGuest from "./components/HomeGuest"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import PrivateRoutes from "./utils/PrivateRoutes"
import ChangeUserStatus from "./components/ChangeUserStatus"
import AdminBar from "./components/AdminBar"
import ChangeUserRole from "./components/ChangeUserRole"
import SuspiciosIP from "./components/AddSuspiciousIP"
import ListSuspiciousIP from "./components/ListSuspiciousIP"
import DeleteIp from "./components/DeleteIp"
import Transaction from "./components/Transaction"
import TransactionFeedback from "./components/TransactionFeedback"
import TransactionHistory from "./components/TransactionHistory"
import TransactionHistoryByCard from "./components/TransactionHistoryByCard"

function ExampleComponent() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/users" element={<ListUsers />}></Route>
          <Route path="/change-user-status" element={<ChangeUserStatus />}></Route>
          <Route path="/change-user-role" element={<ChangeUserRole />}></Route>
          <Route path="/admin" element={<AdminBar />}></Route>
          <Route path="/transaction" element={<Transaction />}></Route>
          <Route path="/transaction-feedback" element={<TransactionFeedback />}></Route>
          <Route path="/transaction-history" element={<TransactionHistory />}></Route>
          <Route path="/transaction-history-by-card" element={<TransactionHistoryByCard />}></Route>
          <Route path="/add-ip" element={<SuspiciosIP />}></Route>
          <Route path="/list-ip" element={<ListSuspiciousIP />}></Route>
          <Route path="/delete-ip" element={<DeleteIp />}></Route>
        </Route>

        <Route path="" element={<HomeGuest />}></Route>
        <Route path="/login" element={<SimpleLoginComponent />}></Route>
        <Route path="about-us" element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ExampleComponent />
    </BrowserRouter>
  </React.StrictMode>
)
if (module.hot) {
  module.hot.accept()
}

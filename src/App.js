import DashboardPage from './DashboardPage'
import FormDashboard from './FormDashboard';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./GlobalContext";



function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>

        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path="/form/create" element={<FormDashboard />} />
          <Route path="/form/edit/:IdData" element={<FormDashboard />} />
        </Routes>

      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;

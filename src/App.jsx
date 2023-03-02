import Home from "./pages/Home";
import Dashboard from "./pages/DashboardPage";
import PageContent from "./layouts/PageContent";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./layouts/RequireAuth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <PageContent>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route element={<RequireAuth />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PageContent>
      </AuthProvider>
    </div>
  );
}

export default App;

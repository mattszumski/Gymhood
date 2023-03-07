import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/DashboardPage";
import PageContent from "./layouts/PageContent";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./layouts/RequireAuth";
import EditProfile from "./features/profile/EditProfile";
import EditSettings from "./features/profile/EditSettings";
import Profile from "./features/profile/Profile";
import Search from "./pages/Search";
import FriendRequests from "./features/friends/FriendRequests";
import UploadPicture from "./features/fileHandling/UploadPicture";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <PageContent>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route element={<RequireAuth />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile">
                  <Route path="/profile/edit" element={<EditProfile />} />
                  <Route path="/profile/:id" element={<Profile />} />
                </Route>
                <Route path="/settings" element={<EditSettings />} />
                <Route path="/search" element={<Search />} />
                <Route path="/friendRequests" element={<FriendRequests />} />
                <Route path="/upload" element={<UploadPicture />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PageContent>
      </AuthProvider>
    </div>
  );
}

export default App;

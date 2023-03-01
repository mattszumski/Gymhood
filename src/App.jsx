import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import PageContent from "./layouts/PageContent";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <PageContent>
          <Home />
        </PageContent>
      </AuthProvider>
    </div>
  );
}

export default App;

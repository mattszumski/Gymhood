import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import PageContent from "./layouts/PageContent";

function App() {
  return (
    <div className="App">
      <PageContent>
        <Home />
      </PageContent>
    </div>
  );
}

export default App;

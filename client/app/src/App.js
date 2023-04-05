import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { StoryProvider } from "./context/StoryContext";
import { ErrorContextProvider } from "./context/ErrorContext";

import { About } from "./components/About/About";
import { Create } from "./components/Create/Create";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Publications } from "./components/Publications/Publications";
import { Register } from "./components/Register/Register";
import { Details } from "./components/Details/Details";
import { StoryContent } from "./components/StoryContent/StoryContent";
import { Logout } from "./components/Logout/Logout";
import { Edit } from "./components/Edit/Edit";
import { Profile } from "./components/Profile/Profile";



function App() {
  return (
    <ErrorContextProvider>
      <AuthProvider>
        <StoryProvider>
          <div id="App">
            <Header />
            <main id="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/create" element={<Create />} />
                <Route path="/publication/edit/:storyId" element={<Edit />} />
                <Route path="/publication" element={<Publications />} />
                <Route path="/publication/:storyId" element={<Details />} />
                <Route
                  path="/publication/read/:storyId"
                  element={<StoryContent />}
                />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </StoryProvider>
      </AuthProvider>
    </ErrorContextProvider>
  );
}

export default App;

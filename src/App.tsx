import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import { TodoProvider } from "./components/todoContext/TodoContext";
import Statistics from "./pages/Statistics";
function App() {
  return (
    <TodoProvider>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Statistics />} />
        </Routes>
      </div>
    </TodoProvider>
  );
}

export default App;

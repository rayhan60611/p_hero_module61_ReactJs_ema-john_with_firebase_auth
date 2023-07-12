import { Outlet, useNavigation } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

function App() {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      {navigation.state === "loading" && (
        <div className="flex items-center justify-center fixed h-screen w-screen z-50 bg-slate-500/50">
          <ArrowPathIcon className={`animate-spin h-36 w-36  `}></ArrowPathIcon>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default App;

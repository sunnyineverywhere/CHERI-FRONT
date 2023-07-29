import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import OptionsPage from "./pages/OptionsPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import DestinationPage from "./pages/DestinationPage";
import ThemePage from "./pages/ThemePage";
import PeriodPage from "./pages/PeriodPage";
import PartyPage from "./pages/PartyPage";
import ThemePage2 from "./pages/ThemePage2";
import PeriodPage2 from "./pages/PeriodPage2";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/options" element={<OptionsPage />} />
      <Route path="/destination" element={<DestinationPage />} />
      <Route path="/themes" element={<ThemePage />} />
      <Route path="/period" element={<PeriodPage />} />
      <Route path="/themes2" element={<ThemePage2 />} />
      <Route path="/party" element={<PartyPage />} />
      <Route path="/period2" element={<PeriodPage2 />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;

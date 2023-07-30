import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DestinationPage from "./pages/DestinationPage";
import ThemePage from "./pages/ThemePage";
import PeriodPage from "./pages/PeriodPage";
import PartyPage from "./pages/PartyPage";
import ThemePage2 from "./pages/ThemePage2";
import PeriodPage2 from "./pages/PeriodPage2";
import ResultPage from "./pages/ResultPage";
import ChatPage from "./pages/ChatPage";
import ItineraryPage from "./pages/ItineraryPage";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/destination" element={<DestinationPage />} />
      <Route path="/themes" element={<ThemePage />} />
      <Route path="/period" element={<PeriodPage />} />
      <Route path="/themes2" element={<ThemePage2 />} />
      <Route path="/party" element={<PartyPage />} />
      <Route path="/period2" element={<PeriodPage2 />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/itinerary" element={<ItineraryPage />} />
      <Route path="/map" element={<MapPage />} />
    </Routes>
  );
}

export default App;

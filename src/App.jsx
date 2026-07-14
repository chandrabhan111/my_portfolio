import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StockAlertDemo from './pages/StockAlertDemo';

export default function App() {
  return (
    <div className="bg-[#030712] text-gray-100 min-h-screen relative font-sans antialiased overflow-x-hidden">
      {/* Dynamic Background Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
      
      {/* Application Routes wrapped in HashRouter for GitHub pages compatibility */}
      <HashRouter>
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo/stock-alert" element={<StockAlertDemo />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

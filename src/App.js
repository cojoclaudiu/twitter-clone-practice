import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { useMediaQuery } from 'react-responsive';

function App() {
  const hideWidgetsMenu = useMediaQuery({
    query: '(min-device-width: 1000px)'
  });

  const mobileWithoutSidebar = useMediaQuery({
    query: '(min-device-width: 550px)'
  });

  return (
    <div className="app">
      {/* Sidebar */}
      {mobileWithoutSidebar && <Sidebar />}
      {/* Feed */}
      <Feed />

      {/* Widgets */}

      {hideWidgetsMenu && <Widgets />}
    </div>
  );
}

export default App;

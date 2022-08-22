import './App.css';
import { Dashboard } from './Components/dashboard/Dashboard';
import { Sidebar } from './Components/sidebar/Sidebar';

interface IApp { }

export const App: React.FC<IApp> = () => {
  return (
    <>
      <div className="container-main">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;

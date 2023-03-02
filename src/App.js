import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes >
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

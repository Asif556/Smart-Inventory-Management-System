import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landingpage from './components/LandingPage/Landingpage';
import Predictprice from './components/PredictPrice/Predictprice';
import Display from './components/Display/Display';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landingpage/>,
    },
    {
      path: '/predict',
      element: <Predictprice/>,
    },
    {
      path:'/display',
      element:<Display/>
    },
  ]);

  return (
    <div className='Main'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { CouchPage } from './components/CouchPage/CouchPage';
import { AddProgram } from './components/AddProgram/AddProgram';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ShowPrograms } from './components/ShowProgram/ShowPrograms';
import {ProgramDetails} from './components/ShowProgram/ProgramDetails';

function App() {
  const router= createBrowserRouter([
    {path:"/",element:<CouchPage/>,
    },{path:"add-program",element:<AddProgram/>},
    {path:"show-program",element:<ShowPrograms/>},
    {path:"/show-program/:id", element:<ProgramDetails/>}
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

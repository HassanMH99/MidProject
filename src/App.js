import './App.css';
import { CouchPage } from './components/CouchPage/CouchPage';
import { AddProgram } from './components/AddProgram/AddProgram';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ShowPrograms } from './components/ShowProgram/ShowPrograms';
import {ProgramDetails} from './components/ShowProgram/ProgramDetails';
import { DeleteProgram } from './components/DeleteProgram/DeleteProgram';
import { EditProgram } from './components/EditProgram/EditProgram';
import { EditShowProgram } from './components/EditProgram/EditShowProgram';
import { Login } from './Login/Login';
import { Register } from './Register/Register';

function App() {
  const router= createBrowserRouter([
    {path:"/register",element:<Register/>,
    },
    {path:"/login",element:<Login/>,
  },
    {path:"/coach",element:<CouchPage/>,
    },{path:"add-program",element:<AddProgram/>},
    {path:"show-program",element:<ShowPrograms/>},
    {path:"/show-program/:id", element:<ProgramDetails/>},
    {path:"/delete-program", element:<DeleteProgram/>},
    {path:"/edit-program", element:<EditProgram/>},
    {path:"/edit-program/:id", element:<EditShowProgram/>},
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

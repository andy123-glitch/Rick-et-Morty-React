import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Acceuil from './route/Accueil'
import Episode from './route/Episode'
import Favoris from './route/Favoris'
import Personnage from './route/Personnage'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Acceuil/>
  },
  {
    path:"Episode",
    element:<Episode/>
  },
  {
    path:"Favoris",
    element:<Favoris/>
  },
  {
    path:"Personnage",
    element:<Personnage/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

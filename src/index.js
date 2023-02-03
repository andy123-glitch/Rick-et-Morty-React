import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Acceuil from './route/Accueil.js'
import Episode from './route/Episode'
import Favoris from './route/Favoris'
import Personnage from './route/Personnage'
import Inscription from "./route/Inscription";
import Connexion from './route/Connexion'
import { Provider } from 'react-redux';
import store from './redux/store';


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
  },
  {
    path:"Inscription",
    element:<Inscription/>
  },
  {
    path:"Connexion",
    element:<Connexion/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

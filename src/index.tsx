import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {About} from "./features/About/About";
import {Provider} from "react-redux";
import store from "./store";
import {MoviesPage} from "./features/Movies/MoviesPage";
import 'semantic-ui-css/semantic.min.css'
import Movies from "./features/Movies/Movies";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Provider store={store}> <App /> </Provider> ,
        children: [
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/movies",
                element: <Movies />
            },
            {
                path: "/movies/:id",
                element: <MoviesPage />
            }
        ]
    }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import { GameContainer } from './Game/GameContainer';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route path='' element={<GameContainer/>}/>


  ))
  return (
    <RouterProvider router={router}/>
    
  
  );
}

export default App;

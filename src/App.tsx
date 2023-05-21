import React from 'react';
import { GameContainer } from './Game/GameContainer';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import { AppHeader } from './components/AppHeader';


function App() {

  const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<AppHeader/>}>
    
      <Route index element={<GameContainer/>}/>

    </Route>


  ))
  return (
    <RouterProvider router={router}/>
    
  
  );
}

export default App;

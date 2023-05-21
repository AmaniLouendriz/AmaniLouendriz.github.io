import { GameContainer } from './Game/GameContainer';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import { AppShell } from './components/AppShell';


function App() {

  const router = createBrowserRouter(createRoutesFromElements(

    <Route path='' element={<AppShell/>}>

    {/* <Route path='/' element={<AppHeader/>}> */}
    
      <Route index element={<GameContainer/>}/>

    {/* </Route> */}

    </Route>



  ))
  return (
    <RouterProvider router={router}/>
    
  
  );
}

export default App;

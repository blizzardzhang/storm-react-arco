import {createHashRouter, RouterProvider} from "react-router-dom";
//import RouterView from "./route";
import baseRoute from "./route/baseRoute.tsx";

const routers = createHashRouter(baseRoute)
function App() {
  return (
      // <Router>
      //     <RouterView></RouterView>
      // </Router>
      <RouterProvider router={routers}/>
  )
}

export default App;
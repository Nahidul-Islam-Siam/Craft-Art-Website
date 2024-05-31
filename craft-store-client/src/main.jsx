
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProblemPage from './components/ProblemPage.jsx';
import Home from './Pages/Home.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import AddCraftItem from './Pages/AddCraftItem.jsx';
import MyArtList from './Pages/MyArtList.jsx';
import ProductsDetails from './components/ProductsDetails.jsx';
import PrivateRoutes from './Routes/PrivateRoutes.jsx';
import AllPost from './Pages/AllPost.jsx';
import AllCard from './components/AllCard.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ProblemPage></ProblemPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
       path: "/addCraftItem",
       element: <PrivateRoutes>
        <AddCraftItem></AddCraftItem>
       </PrivateRoutes>
      },
      {
        path:'/myartlist',
        element:<PrivateRoutes>
          <MyArtList></MyArtList>
        </PrivateRoutes>
      },
      {
path: '/products/:id',
element:<PrivateRoutes> 
  <ProductsDetails></ProductsDetails>
  </PrivateRoutes>
      },
      {
      path: '/viewDetails/:id',
      element:
        <ProductsDetails></ProductsDetails>
       
            },
{
path: '/allpost',
element: <AllPost></AllPost>,
loader: () => fetch('https://craft-store-server-self.vercel.app/allpost')
},

{
path: '/allcard',
element: <AllCard></AllCard>,
// loader: () => fetch('http://localhost:5000/allcard')
},
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
     <AuthProviders>
     <RouterProvider router={router} />
     </AuthProviders>
  </>,
)

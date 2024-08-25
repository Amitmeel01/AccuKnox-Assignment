import React from 'react'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Body from './components/Body'
import Ticket from './components/Ticket'
import Image from './components/Image'
import CwppSidebar from './components/CwppSidebar'
import CspmSidebar from './components/CspmSidebar'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Body/>,
          children:[
            {
              path:'/image',
              element:<Image/>
            },
            {
              path:'/ticket',
              element:<Ticket/>
            },
            {
              path:'/cspm',
              element:<CspmSidebar/>
            },
            {
              path:'/cwpp',
              element:<CwppSidebar/>
            },
          ]
        },
        
      ],
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App



//m-2

// import React from 'react'
// import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
// import Layout from './components/Layout'

// function App() {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path='/' element={<Layout/>}>
        

//       </Route>
//     )
//   )

//   return (
//     <RouterProvider router={router} />
//   )
// }

// export default App


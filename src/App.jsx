import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ButtonList from "./components/Feeds/ButtonList";
import VideoContainer from "./components/Feeds/VideoContainer";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from "./pages/Watch";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
        index: true, // 👈 default route (/)
        element: (
          <>
            <ButtonList />
            <VideoContainer />
          </>
        ),
      },
        {
          path: "/watch/:videoId",
          element: <Watch />,
        },
      ],
    },
  ]);

  return (
    <>
      <Navbar />

      <div className="flex px-5  ">
        <Sidebar />

        <RouterProvider router={appRouter} />
      </div>
    </>
  );
};

export default App;

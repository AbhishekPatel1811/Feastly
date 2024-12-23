import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import About from "./components/About";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Error from "./components/Error";
import BodyComponent from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import FooterComponent from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import "./index.css";

// Lazy load Instamart component
const Instamart = lazy(() => import("./components/Instamart"));

// Main App Layout with Tailwind CSS classes for styling
const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HeaderComponent />
      <main className="mt-10 flex flex-col min-h-[calc(100vh-3.5rem-1px)] w-full">
        {/* Outlet is used to render child components in nested routes */}
        <div className="flex-1 flex flex-col h-full">
          <Outlet />
        </div>
        <FooterComponent />
      </main>
    </div>
  );
};

// Defining routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

// Rendering the root component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

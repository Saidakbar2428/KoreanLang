import React from "react";
import { RouterProvider, createBrowserRouter, Link } from "react-router-dom";
import Colors from "./pages/Colors";
import Family from "./pages/Family";
import Fellar from "./pages/Fellar";
import KunlikIboralar from "./pages/KunlikIboralar";
import Time from "./pages/Time";
import Places from "./pages/Places";
import Directions from "./pages/Directions";
import Weekdays from "./pages/Weekdays";
import Months from "./pages/Months";
import SinoNumbers from "./pages/SinoNumbers";
import NativeNumbers from "./pages/NativeNumbers";
import SinoConverter from "./pages/SinoConverter";
import Qoshimchalar from "./pages/Qoshimchalar";
import Savollar from "./pages/Savollar";
import Qoidalar from "./pages/Qoidalar";

const Layout = ({ children }) => {
  return (
    <div className="p-4">
      <nav className="flex gap-4 mb-6">
        <Link to="/colors">
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 hover:shadow-2xl shadow-xl transition-all">
            Colors (색깔)
          </button>
        </Link>
        <Link to="/family">
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 hover:shadow-2xl shadow-xl transition-all">
            Family (가족)
          </button>
        </Link>
        <Link to="/fellar">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 hover:shadow-2xl shadow-xl transition-all">
            Verbs (동사)
          </button>
        </Link>
        <Link to="/kunlikiboralar">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 hover:shadow-2xl shadow-xl transition-all">
            Daily Phrases (일상 표현)
          </button>
        </Link>
        <Link to="/time">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:shadow-2xl shadow-xl transition-all">
            Time (시간)
          </button>
        </Link>
        <Link to="/places">
          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 hover:shadow-2xl shadow-xl transition-all">
            Places (장소)
          </button>
        </Link>
        <Link to="/directions">
          <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 hover:shadow-2xl shadow-xl transition-all">
            Directions (길 묻기)
          </button>
        </Link>
        <Link to="/weekdays">
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 hover:shadow-2xl shadow-xl transition-all">
            Days of Weeks
          </button>
        </Link>
        <Link to="/months">
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 hover:shadow-2xl shadow-xl transition-all">
            Months (월)
          </button>
        </Link>
        <Link to="/sino">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 hover:shadow-2xl shadow-xl transition-all">
            Sino Numbers
          </button>
        </Link>
        <Link to="/native">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 hover:shadow-2xl shadow-xl transition-all">
            Native Numbers
          </button>
        </Link>
        <Link to="/sinoconverter">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:shadow-2xl shadow-xl transition-all">
            🔢 Convertor
          </button>
        </Link>
        <Link to="/qoshimchalar">
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 hover:shadow-2xl shadow-xl transition-all">
            Suffix (조사)
          </button>
        </Link>
        <Link to="/savollar">
          <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 hover:shadow-2xl shadow-xl transition-all">
            Questions (의문사)
          </button>
        </Link>
        <Link to="/qoidalar">
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 hover:shadow-2xl shadow-xl transition-all">
            Rules for Verbs
          </button>
        </Link>
      </nav>
      {children}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Colors />
      </Layout>
    ),
  },
  {
    path: "/colors",
    element: (
      <Layout>
        <Colors />
      </Layout>
    ),
  },
  {
    path: "/family",
    element: (
      <Layout>
        <Family />
      </Layout>
    ),
  },
  {
    path: "/fellar",
    element: (
      <Layout>
        <Fellar />
      </Layout>
    ),
  },
  {
    path: "/kunlikiboralar",
    element: (
      <Layout>
        <KunlikIboralar />
      </Layout>
    ),
  },
  {
    path: "/time",
    element: (
      <Layout>
        <Time />
      </Layout>
    ),
  },
  {
    path: "/places",
    element: (
      <Layout>
        <Places />
      </Layout>
    ),
  },
  {
    path: "/directions",
    element: (
      <Layout>
        <Directions />
      </Layout>
    ),
  },
  {
    path: "/weekdays",
    element: (
      <Layout>
        <Weekdays />
      </Layout>
    ),
  },
  {
    path: "/months",
    element: (
      <Layout>
        <Months />
      </Layout>
    ),
  },
  {
    path: "/sino",
    element: (
      <Layout>
        <SinoNumbers />
      </Layout>
    ),
  },
  {
    path: "/native",
    element: (
      <Layout>
        <NativeNumbers />
      </Layout>
    ),
  },
  {
    path: "/sinoconverter",
    element: (
      <Layout>
        <SinoConverter />
      </Layout>
    ),
  },
  {
    path: "/qoshimchalar",
    element: (
      <Layout>
        <Qoshimchalar />
      </Layout>
    ),
  },
  {
    path: "/savollar",
    element: (
      <Layout>
        <Savollar />
      </Layout>
    ),
  },
  {
    path: "/qoidalar",
    element: (
      <Layout>
        <Qoidalar />
      </Layout>
    ),
  },
]);

const Table = () => {
  return <RouterProvider router={router} />;
};

export default Table;

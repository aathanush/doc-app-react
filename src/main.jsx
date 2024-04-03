import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import PatientNavigation from "./patient/patient-navigation";
import ErrorPage from "./error-page";
import PatientHome from "./patient/patient-home";
import PatientDoctorView from "./patient/patient-doctor-view";
import PatientAppointmentView from "./patient/patient-appointment-view";
import PatientLogin from "./patient/patient-login";
import Logout from "./patient/logout";
import PatientRegistration from "./patient/patient-registration";
import HomeComponent from "./home/home";
import Admin from "./admin/admin";
import DocNavigation from "./doctor/doc-navi";
import DoctorHome from "./doctor/doc-home";
import DocAppointment from "./doctor/doc-app";
import DocLogin from "./doctor/doc-login";
import DoctorReviews from "./patient/docreview";
import PostReview from "./patient/post-review";
import DoctorDetails from "./patient/doctordetails";
const router = createBrowserRouter([
  {
    path:"/",
    element:<Outlet/>,
    errorElement:<ErrorPage/>,
    children:[
      {path:"",
    element:<HomeComponent/>}
    ]
  },
  {
    path:"/",
    element:<Outlet/>,
    errorElement:<ErrorPage/>,
    children:[
      {path:"admin",
    element:<Admin/>}
    ]
  },
  {
    path: "/",
    element: <Outlet/>,
    errorElement: <ErrorPage/>,
    children: [
      {path:"doctor",
    element: <DocNavigation/>,
      children:[
        {
          path:"",
          element:<DoctorHome/>,

        },
        {
          path:"appointments",
          element:<DocAppointment/>
        },
        {
          path:"login",
          element:<DocLogin/>
        }
      ]
    }
    ]
  },
  {
    path: "/",
    element: <Outlet/>,
    errorElement: <ErrorPage/>,
    children: [
      {path:"patient",
    element: <PatientNavigation/>,
      children:[
        {
          path:"",
          element:<PatientHome/>,

        }
        ,
        {
          path:"doctors",
          element:<PatientDoctorView/>
        },
        {
          path: "docdetails/:id",
          element: <DoctorDetails />
        },
        {
          path:"appointments",
          element:<PatientAppointmentView/>
        },
        {
          path:"reviews",
          element:<DoctorReviews/>
        },
        {
          path:"login",
          element:<PatientLogin/>
        },
        {
          path:"review/:id",
          element:< PostReview/>
        },
        {
          path:"logout",
          element:<Logout/>
        },
        {
          path:"register",
          element:<PatientRegistration/>
        }
      ]
    },
    {path: "doctor",
  element: <div>Doctor home</div>
  }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
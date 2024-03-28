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
const router = createBrowserRouter([
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
          path:"appointments",
          element:<PatientAppointmentView/>
        },
        {
          path:"login",
          element:<PatientLogin/>
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
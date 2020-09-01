import joblyHomeMd from "./images/jobly-collection/home-800.png";
import joblyLoginMd from "./images/jobly-collection/login-signup-800.png";
import joblyCompaniesMd from "./images/jobly-collection/companies-800.png";
import joblyJobsMd from "./images/jobly-collection/jobs-800.png";
import joblyProfileMd from "./images/jobly-collection/profile-800.png";

import joblyHomeLg from "./images/jobly-collection/home-1280.png";
import joblyLoginLg from "./images/jobly-collection/login-signup-1280.png";
import joblyCompaniesLg from "./images/jobly-collection/companies-1280.png";
import joblyJobsLg from "./images/jobly-collection/jobs-1280.png";
import joblyProfileLg from "./images/jobly-collection/profile-1280.png";

/** Each project's description and image collection for use in Project Component*/

export const project1 = "Jobly is an online job board, built as a mobile first responsive single page React application, complete with authentication and search functionality. Once a user has registered and/or logged in, they gain access to the private routes only accessible by authenticating and they’re greeted with a personalized welcome message when on the home page. Users have the ability to browse all jobs and all companies, as well as search jobs by title and search companies by name. Users can also apply to jobs and edit information in their user profile. Backend note: I wrote my own version of the backend; however, this deployed application uses a backend written by Rithm School so everyone would have the same code when building the frontend."

export const project1Images = [{
    srcMd: joblyHomeMd,
    srcLg: joblyHomeLg,
    alt: "jobly home page",
    caption: "Home"
  },
  {
    srcMd: joblyLoginMd,
    srcLg: joblyLoginLg,
    alt: "jobly login/signup page",
    caption: "Login/ Sign Up"
  },
  {
    srcMd: joblyCompaniesMd,
    srcLg: joblyCompaniesLg,
    alt: "jobly companies page",
    caption: "Companies"
  },
  {
    srcMd: joblyJobsMd,
    srcLg: joblyJobsLg,
    alt: "jobly jobs page",
    caption: "Jobs"
  },
  {
    srcMd: joblyProfileMd,
    srcLg: joblyProfileLg,
    alt: "jobly profile page",
    caption: "User Profile"
  },
];
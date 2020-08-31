import joblyHome from "./images/jobly-collection/home.png";
import joblyLogin from "./images/jobly-collection/login-signup.png";
import joblyCompanies from "./images/jobly-collection/companies.png";
import joblyJobs from "./images/jobly-collection/jobs.png";
import joblyProfile from "./images/jobly-collection/profile.png";

/** Each project's description and image collection for use in Project Component*/

export const project1 = "Jobly is an online job board, built as a mobile first responsive single page React application, complete with authentication and search functionality. Once a user has registered and/or logged in, they gain access to the private routes only accessible by authenticating and they’re greeted with a personalized welcome message when on the home page. Users have the ability to browse all jobs and all companies, as well as search jobs by title and search companies by name. Users can also apply to jobs and edit information in their user profile. Backend note: I wrote my own version of the backend; however, this deployed application uses a backend written by Rithm School so everyone would have the same code when building the frontend."

export const project1Images = [{
    src: joblyHome,
    alt: "jobly home page",
    caption: "Home"
  },
  {
    src: joblyLogin,
    alt: "jobly login/signup page",
    caption: "Login/ Sign Up"
  },
  {
    src: joblyCompanies,
    alt: "jobly companies page",
    caption: "Companies"
  },
  {
    src: joblyJobs,
    alt: "jobly jobs page",
    caption: "Jobs"
  },
  {
    src: joblyProfile,
    alt: "jobly profile page",
    caption: "User Profile"
  },
];
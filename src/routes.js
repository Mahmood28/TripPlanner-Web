// Components
import MainMap from "views/MainMap";
import Itinerary from "views/Itinerary";
import Calendar from "views/Calendar";
import Profile from "views/Profile";
import ProfileEdit from "views/Profile/ProfileEdit";
import TripHistory from "views/TripHistory";
import Routes from "views/Routes";
import ActivityDetail from "views/ActivityDetail";

// @material-ui/icons
import {
  DateRange,
  Place,
  Timeline,
  GridOn,
  Map,
  ArtTrack,
} from "@material-ui/icons/";
import TripSummary from "views/TripSummary";

const routes = [
  {
    path: "explore",
    name: "Explore",
    icon: Place,
    component: MainMap,
    layout: "/",
  },
  // {
  //   path: "timeline",
  //   name: "Timeline",
  //   icon: Timeline,
  //   // component: ,
  //   layout: "/",
  // },
  {
    path: "itinerary",
    name: "Itinerary",
    icon: GridOn,
    component: Itinerary,
    layout: "/",
  },
  {
    path: "routes",
    name: "Routes",
    icon: Timeline,
    component: Routes,
    layout: "/",
  },
  {
    path: "summary",
    name: "Summary",
    icon: Map,
    component: TripSummary,
    layout: "/",
  },
  {
    path: "calendar",
    name: "Calendar",
    icon: DateRange,
    component: Calendar,
    layout: "/",
  },
  {
    path: "profile/edit",
    name: "Edit Profile",
    component: ProfileEdit,
    layout: "/",
    redirect: true,
  },
  {
    path: "profile",
    name: "Profile",
    component: Profile,
    layout: "/",
    redirect: true,
  },
  {
    path: "history",
    name: "Trips History",
    component: TripHistory,
    layout: "/",
    redirect: true,
  },
  // {
  //   path: "activity",
  //   name: "Activity Detail",
  //   component: ActivityDetail,
  //   layout: "/",
  //   redirect: true,
  // },
];
export default routes;

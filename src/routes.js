// Components
import MainMap from "views/MainMap";
import Test from "views/Test";
// @material-ui/icons
import { DateRange, Place } from "@material-ui/icons/";
import Profile from "./views/Profile";
import ProfileEdit from "./views/Profile/ProfileEdit";

const routes = [
  {
    path: "explore",
    name: "Explore",
    icon: Place,
    component: MainMap,
    layout: "/",
  },
  {
    path: "itinerary",
    name: "Itinerary",
    icon: DateRange,
    component: Test,
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
];
export default routes;

// Components
import MainMap from "views/MainMap";
import Itinerary from "views/Itinerary";
import UserProfile from "views/Profile/UserProfile";
import ReviewList from "views/Profile/ReviewList";
import FavouriteList from "views/Profile/FavouriteList";
import TripHistory from "views/TripHistory";
import TripSummary from "views/TripSummary";
import PublicProfile from "views/PublicProfile";
import Search from "views/PublicProfile/Search";
// Styling
import { Place, Map, DateRange, Group } from "@material-ui/icons";

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
    component: Itinerary,
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
    path: "history/trips/:tripSlug",
    name: "Trip Summary",
    component: TripSummary,
    layout: "/",
    redirect: true,
  },
  {
    path: "connect",
    name: "Connect",
    icon: Group,
    component: Search,
    layout: "/",
  },
  {
    path: "profile/:username",
    name: "Profiles",
    component: PublicProfile,
    layout: "/",
    redirect: true,
  },
  {
    path: "profile",
    name: "Profile",
    component: UserProfile,
    layout: "/",
    redirect: true,
  },
  {
    path: "trips-history",
    name: "Trips",
    component: TripHistory,
    layout: "/",
    redirect: true,
  },
  {
    path: "reviews",
    name: "Reviews",
    component: ReviewList,
    layout: "/",
    redirect: true,
  },
  {
    path: "favorites",
    name: "Favorites",
    component: FavouriteList,
    layout: "/",
    redirect: true,
  },
];
export default routes;

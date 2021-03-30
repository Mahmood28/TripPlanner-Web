// Components
import MainMap from "views/MainMap";
import Itinerary from "views/Itinerary";
import Calendar from "views/Calendar";
// @material-ui/icons
import Place from "@material-ui/icons/Place";
import Timeline from "@material-ui/icons/Timeline";
import GridOn from "@material-ui/icons/GridOn";
import Map from "@material-ui/icons/Map";
import DateRange from "@material-ui/icons/DateRange";

const routes = [
  {
    path: "explore",
    name: "Explore",
    icon: Place,
    component: MainMap,
    layout: "/",
  },
  {
    path: "timeline",
    name: "Timeline",
    icon: Timeline,
    // component: ,
    layout: "/",
  },
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
    icon: Map,
    // component: ,
    layout: "/",
  },
  {
    path: "calendar",
    name: "Calendar",
    icon: DateRange,
    component: Calendar,
    layout: "/",
  },
];
export default routes;

// Components
import MainMap from "views/MainMap";
import FullScreenMap from "views/Template/Maps/FullScreenMap";
import Test from "views/Test";
// @material-ui/icons
import DateRange from "@material-ui/icons/DateRange";
import Place from "@material-ui/icons/Place";

var dashRoutes = [
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
];
export default dashRoutes;

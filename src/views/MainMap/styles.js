import styled from "styled-components";
import {
  Card,
  Typography,
  CardActions,
  Button,
  CardHeader,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { withStyles } from "@material-ui/core/styles";

export const selectedIcon = {
  path:
    "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
  fillColor: "green",
  fillOpacity: 0.6,
  strokeWeight: 0,
  rotation: 0,
  scale: 2,
  anchor: {
    x: 15,
    y: 30,
  },
};
export const customIcon = {
  ...selectedIcon,
  fillColor: "#000089 ",
  path:
    "M 10 13 l 4 0 l 1 -3 l -1 -3 l -4 0 l -1 3 z M 12 2.016 q 2.906 0 4.945 2.039 t 2.039 4.945 q 0 1.453 -0.727 3.328 t -1.758 3.516 t -2.039 3.07 t -1.711 2.273 l -0.75 0.797 q -0.281 -0.328 -0.75 -0.867 t -1.688 -2.156 t -2.133 -3.141 t -1.664 -3.445 t -0.75 -3.375 q 0 -2.906 2.039 -4.945 t 4.945 -2.039 z",
};

export const StyledMapContainer = styled.div`
  position: relative;
  height: 90vh;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
`;

export const StyledMapElement = styled.div`
  height: 100%;
`;

export const InfoCard = styled(Card)`
  && {
    border-radius: 12px;
    text-align: center;
  }
`;

export const StyledCard = styled(Card)`
  && {
    border-radius: 10px;
    justify-content: center;
    width: 250px;
    padding: 20px;
    padding-bottom: 20px;
  }
`;

export const StyledHeader = styled(CardHeader)`
  && {
    text-align: center;
    spacing: 10;
    font-size: 16px;
  }
`;

export const ButtonContainer = styled(CardActions)`
  && {
    display: flex;
    justify-content: center;
  }
`;

export const StyledButton = styled(Button)`
  && {
    padding: 5px;
    margin-right: 20px;
    margin-left: 20px;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
`;

export const StarContainer = styled(StyledContainer)`
  justify-content: center;
  flex: 1;
  margin-bottom: 10px;
`;

export const DialogContainer = styled(StyledContainer)`
  justify-content: space-between;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

export const styledMap = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#dadada",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#c9c9c9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
];

export const StyledDescription = styled(Typography)`
  && {
    margin-top: 10px;
  }
`;

export const FilterContainer = styled(StyledContainer)`
  justify-content: flex-end;
  flex: 1;
  margin-bottom: 10px;
`;

export const StyledRating = withStyles({
  iconFilled: {
    color: "#ff9800",
  },
  iconHover: {
    color: "#ff9800",
  },
  root: {
    marginLeft: "30px",
    marginRight: "30px",
  },
})(Rating);

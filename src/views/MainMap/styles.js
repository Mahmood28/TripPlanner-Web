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

export const StyledMapContainer = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
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
    color: "#daa520",
  },
  iconHover: {
    color: "#daa520",
  },
  root: {
    marginLeft: "30px",
    marginRight: "30px",
  },
})(Rating);

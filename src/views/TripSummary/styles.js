import styled from "styled-components";
import { TimelineDot } from "@material-ui/lab";
import { Typography } from "@material-ui/core";
import { DirectionsCar } from "@material-ui/icons";

export const StyledContainer = styled.div`
  display: flex;
`;

export const ButtonContainer = styled(StyledContainer)`
  justify-content: center;
`;

export const StyledMapContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  over-flow: hidden;
`;

export const StyledMapElement = styled.div`
  height: 100%;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const StyledTimeline = styled(TimelineDot)`
  && {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const StyledCarIcon = styled(DirectionsCar)`
  && {
    margin-top: 15px;
    margin-right: 5px;
  }
`;

export const StyledDurationText = styled(Typography)`
  && {
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

export const styledMap = [
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
    featureType: "poi",
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
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

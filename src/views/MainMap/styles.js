import styled from "styled-components";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
  CardHeader,
} from "@material-ui/core";

export const StyledMapContainer = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
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

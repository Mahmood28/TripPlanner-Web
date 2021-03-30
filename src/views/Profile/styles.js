import styled from "styled-components";
import { Avatar, Button, Card } from "@material-ui/core";

export const ProfilePicture = styled(Avatar)`
  && {
    height: 125px;
    width: 125px;
  }
`;

export const TabButton = styled(Button)`
  && {
    background-color: ${(props) => (props.shown ? "#d3d3d3" : "null")};
  }
`;

export const StyledContainer = styled.div`
  padding-right: 10%;
  padding-left: 10%;
`;

export const CardContainer = styled(Card)`
  && {
    width: 100%;
    padding: 20px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const TabContainer = styled(FlexContainer)`
  justify-content: space-around;
`;

export const NameContainer = styled.div`
  margin-left: 30px;
`;

export const ItemContainer = styled.div`
  margin-top: 15px;
`;

export const EditButton = styled(Button)`
  align-self: flex-start;
`;

export const EditPicture = styled(ProfilePicture)`
  &:hover {
    opacity: 0;
    .add {
      opacity: 1;
    }
  }
  .add {
    opacity: 0;
  }
`;

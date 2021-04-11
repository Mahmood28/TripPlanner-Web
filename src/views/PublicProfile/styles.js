import styled from "styled-components";
import { Avatar, Card, FormControl } from "@material-ui/core";
import Button from "components/CustomButtons/Button";

export const ProfilePicture = styled(Avatar)`
  && {
    height: 125px;
    width: 125px;
  }
`;

export const StyledContainer = styled.div`
  padding-right: 10%;
  padding-left: 10%;
  margin-bottom: 30px;
`;

export const CardContainer = styled(Card)`
  && {
    width: 100%;
    padding: 20px;
    border-radius: 16px;
    background-color: #ffffff;
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

export const StyledButton = styled(Button)`
  && {
    align-self: center;
    margin: 0 5px 0 5px;
  }
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

export const DisplayMessage = styled.h5`
  display: flex;
  justify-content: center;
`;

export const StyledFormControl = styled(FormControl)`
  && {
    margin-bottom: 5%;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flexwrap: wrap;
  justify-content: center;
`;

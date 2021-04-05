import styled from "styled-components";
import { MenuList, MenuItem } from "@material-ui/core";

export const StyledMenueItem = styled(MenuItem)`
  &:hover {
    background-color: #ff9800;
    color: white;
  }
`;
export const StyledMenuList = styled(MenuList)`
  width: 120%;
`;

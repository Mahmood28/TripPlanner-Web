import {
  container,
  defaultFont,
  cardTitle,
  roseColor,
  whiteColor,
  blackColor,
  grayColor,
  hexToRgb,
  tooltip,
} from "assets/jss/material-dashboard-pro-react.js";

const pricingPageStyle = (theme) => ({
  wrapper: {
    height: "auto",
    minHeight: "100vh",
    position: "relative",
    top: "0",
  },
  fullPage: {
    padding: "120px 0",
    position: "relative",
    minHeight: "100vh",
    display: "flex!important",
    margin: "0",
    border: "0",
    color: whiteColor,
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      minHeight: "700px!important",
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%",
      border: "none !important",
    },
    "&:before": {
      backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.65)",
    },
    "&:before,&:after": {
      display: "block",
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      zIndex: "2",
    },
  },
  tooltip,
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px",
    },
  },
  title: {
    ...defaultFont,
    color: whiteColor,
    marginTop: "5vh",
    marginBottom: "30px",
    textAlign: "center",
  },
  description: {
    fontSize: "18px",
    color: whiteColor,
    textAlign: "center",
  },
  cardTitleWhite: {
    ...cardTitle,
    color: whiteColor + " !important",
  },
  cardCategory: {
    color: grayColor[0],
    marginTop: "10px",
  },
  cardCategoryWhite: {
    color: whiteColor,
    marginTop: "10px",
  },
  icon: {
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.76)",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid " + grayColor[11],
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px",
    },
  },
  iconWhite: {
    color: whiteColor,
  },
  iconRose: {
    color: roseColor[0],
  },
  marginTop30: {
    marginTop: "30px",
  },
  links: {
    width: "20px",
    height: "20px",
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      width: "30px",
      height: "30px",
      color: "inherit",
      opacity: "0.8",
      marginRight: "16px",
      marginLeft: "-5px",
    },
  },
  headerLinksSvg: {
    width: "22px !important",
    height: "22px !important",
  },
  managerClasses: {
    [theme.breakpoints.up("md")]: {
      display: "inline-block",
    },
  },
});

export default pricingPageStyle;

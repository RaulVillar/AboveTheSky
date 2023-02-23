import * as React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import La_Caixa_amarillo2 from "../../Assest/La_Caixa_amarillo2.png";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 0),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 50,
  color: "#ffef57",
}));

const YellowSearchIcon = styled(SearchIcon)(({ theme }) => ({
  color: "#ffef57",
}));

const YellowMenuIcon = styled(MenuIcon)(({ theme }) => ({
  color: "#ffef57",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(0.5em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  borderBottom: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
}));
const TransparentBox = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  borderBottom: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
}));

const TransparentNav = ({search, setSearch, cards, setStars, setConstellations}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));



  const handleChange = (e) => {
    setSearch(e.target.value);
    filter(e.target.value);
  };

  const filter = (inputSearch) => {
    var resultsSearch = cards.filter((element) => {
      if (
          element.name.toString().toLowerCase().includes(inputSearch.toLowerCase()) ||
          element.seller.toString().toLowerCase().includes(inputSearch.toLowerCase())
        ) {
          return element;
      }
    });
    setStars(resultsSearch);
    setConstellations(resultsSearch);
  };
  

  return (
    <>
      <TransparentAppBar sx={{ backgroundColor: "transparent" }} position="static">
        <TransparentBox>
          <Toolbar
            sx={{ ml: isSmallScreen ? 2 : 25, mx: isSmallScreen ? 2 : 25 }}
          >
            <Box
              sx={{ display: "flex", flexGrow: 1, my: 2, alignItems: "center" }}
            >
              <Link to="/"><img 
                src={La_Caixa_amarillo2}
                alt="La_Caixa_amarillo2"
                height={isSmallScreen ? 50 : 75} /></Link>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <span
                  style={{
                    fontSize: isSmallScreen ? "2rem" : "2rem",
                    padding: 5,
                  }}
                >
                  Above
                </span>
                <span
                  style={{
                    fontSize: isSmallScreen ? "1rem" : "1.5rem",
                    HorizontalAlign: "super",
                    padding: 5,
                  }}
                >
                  the
                </span>
                <span
                  style={{
                    fontSize: isSmallScreen ? "2rem" : "2rem",
                    color: "#ffef57",
                    padding: 5,
                  }}
                >
                  Stars
                </span>
              </Typography>
            </Box>
            <Search sx={{ ml: isSmallScreen ? 1 : 2 }}>
              <SearchIconWrapper
                sx={{ ml: isSmallScreen ? 1 : 2 }}
              ></SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for your star"
                onChange={handleChange}
                value={search}
                inputProps={{ "aria-label": "search" }} />
            </Search>
            <YellowSearchIcon />
            <YellowMenuIcon />
          </Toolbar>
        </TransparentBox>
      </TransparentAppBar>
    </>
  );
}
export default TransparentNav;

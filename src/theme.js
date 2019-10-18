import backgroundImage from "./backgroundImage.jpg";

export default {
  
  palette: {
    primary: {
      light: "#9b9245",
      main: "#827717",
      dark: "#5b5310",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff6333",
      main: "#ff3d00",
      dark: "#b22a00",
      contrastText: "#fff"
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage:
            "url("+ backgroundImage +")"
        }
      }
    }
  },
  spreadThis: {
    typography: {
      useNextVariants: true
    },
    
  }
};

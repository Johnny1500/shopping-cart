import backgroundImage from "./images/BackgroundImage.jpg";

// Main theme
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
    
    card: {
      position: "relative",
      display: "flex",
      marginBottom: 20,
      maxWidth: 500,
      minWidth: 150,
      minHeight: 550,
      flexDirection: "column"
    },

    cardContent: {
      padding: 25,
      objectFit: "cover",
      maxWidth: 700,
      flexGrow: 1
    },

    cardImage: {
      minWidth: 200,
      minHeight: 200
    },
    
    fab: {
      margin: 10
    },
    
  }
};

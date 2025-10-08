import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {fontFamily:'Lato'},
    palette: {
        primary: {
            light:"#6dccd6",
            main:"#0c5761",
            dark:"#005184",
            contrastText:"#fff",
            error:"#f44336",
            warning:"#ff9800",
            info:"#2196f3",
            success:"#4caf50",
        },
        text:{
            primary:"#000",
            secondary:"#fff",
        }
    }

})

export default theme;
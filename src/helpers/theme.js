import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily:"'Rubik', sans-serif",
    },
    palette: {
        primary: { main: '#031B4D' }, // Purple and green play nicely together.
    },
    overrides: {
        MuiButton: {
            flatPrimary: {
                // boxShadow:'none',
                '&:hover': {
                    color: 'grey',
                    background:'inherit'
                }
            },

        },
    }
});

export default theme;

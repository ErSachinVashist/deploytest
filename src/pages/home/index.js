import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider,Grid} from '@material-ui/core'
import withStyles from "@material-ui/core/styles/withStyles";
import theme from '../../helpers/theme'
import Header from './header'
import Parallax from '../../helpers/customComponent/Parallax'
import homeStyle from '../../helpers/componentStyle/home'
class App extends Component {
    render() {
        const {classes}=this.props
        return (
            <BrowserRouter>
                <MuiThemeProvider theme={theme}>
                    <Header
                        color="transparent"
                        brand="Hey! Wassup"
                        fixed
                        changeColorOnScroll={{
                            height: 200,
                            color: "white"
                        }}
                    />
                    <Parallax filter image='./images/profile-bg.jpg'>
                        <div className={classes.container}>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6}>
                                    <h2 className={classes.title}>It’s not what you achieve, it’s what you overcome. That’s what defines your career.</h2>
                                </Grid>
                            </Grid>
                        </div>
                    </Parallax>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default withStyles(homeStyle)(App);

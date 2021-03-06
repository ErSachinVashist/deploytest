import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import headerCss from "../../../helpers/componentStyle/header"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Menu from "@material-ui/icons/Menu";
import HeaderLinks from "./headerLink";
import { Link } from "react-router-dom";

class Index extends React.Component {
    state = {
        mobileOpen: false
    };

    handleDrawerToggle=()=>{
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    componentDidMount=()=>{
        if (this.props.changeColorOnScroll) {
            window.addEventListener("scroll", this.headerColorChange);
        }
    }

    headerColorChange() {
        const { classes, color, changeColorOnScroll } = this.props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > changeColorOnScroll.height) {
            document.body
                .getElementsByTagName("header")[0]
                .classList.remove(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.add(classes[changeColorOnScroll.color]);
        } else {
            document.body
                .getElementsByTagName("header")[0]
                .classList.add(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.remove(classes[changeColorOnScroll.color]);
        }
    }

    componentWillUnmount() {
        if (this.props.changeColorOnScroll) {
            window.removeEventListener("scroll", this.headerColorChange);
        }
    }

    render() {
        const {
            classes,
            color,
            leftLinks,
            brand,
            fixed,
            absolute
        } = this.props;

        const appBarClasses = classNames({
            [classes.appBar]: true,
            [classes[color]]: color,
            [classes.absolute]: absolute,
            [classes.fixed]: fixed
        });

        const brandComponent = <Link className={classes.title} to="/">{brand}</Link>

        return (
            <AppBar className={appBarClasses}>
                <Toolbar className={classes.container}>
                    {leftLinks !== undefined ? brandComponent : null}
                    <div className={classes.flex}>
                        {leftLinks !== undefined ? (
                            <Hidden smDown implementation="css">
                                {leftLinks}
                            </Hidden>
                        ) : (
                            brandComponent
                        )}
                    </div>
                    <Hidden smDown implementation="css">
                        <HeaderLinks/>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}
                        >
                            <Menu />
                        </IconButton>
                    </Hidden>
                </Toolbar>
                <Hidden mdUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={"right"}
                        open={this.state.mobileOpen}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        onClose={this.handleDrawerToggle}
                    >
                        <div className={classes.appResponsive}>
                            {leftLinks}
                            <HeaderLinks/>
                        </div>
                    </Drawer>
                </Hidden>
            </AppBar>
        );
    }
}

Index.defaultProp = {
    color: "white"
};

Index.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "transparent",
        "white",
        "rose",
        "dark"
    ]),
    rightLinks: PropTypes.node,
    leftLinks: PropTypes.node,
    brand: PropTypes.string,
    fixed: PropTypes.bool,
    absolute: PropTypes.bool,
    changeColorOnScroll: PropTypes.shape({
        height: PropTypes.number.isRequired,
        color: PropTypes.oneOf([
            "primary",
            "info",
            "success",
            "warning",
            "danger",
            "transparent",
            "white",
            "rose",
            "dark"
        ]).isRequired
    })
};

export default withStyles(headerCss)(Index);

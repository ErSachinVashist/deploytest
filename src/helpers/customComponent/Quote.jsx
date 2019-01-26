import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import typographyStyle from "assets/jss/material-kit-react/components/typographyStyle.jsx";

function Quote({ ...props }) {
  const { classes, text, author,style} = props;
  return (
    <blockquote className={classes.defaultFontStyle + " " + classes.quote}>
      <p className={style.text?style.text:classes.quoteText}>{text}</p>
      <small className={style.author?style.author:classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
}

Quote.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.node,
  author: PropTypes.node
};

export default withStyles(typographyStyle)(Quote);

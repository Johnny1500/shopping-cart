// React stuff
import React from 'react'
import PropTypes from 'prop-types'

// Redux stuff
import { connect } from "react-redux";

// MUI stuff
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
    ...theme.spreadThis,
    
    picture: {
      margin: "0 5px 0 5px"
    },
      
  });

// Cart page
const Cart = props => {
    
    const { classes } = props;

    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    
  });

Cart.propTypes = {
    classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(withStyles(styles)(Cart));

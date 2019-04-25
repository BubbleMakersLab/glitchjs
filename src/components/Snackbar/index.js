import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import AppContext from "../../AppContext"

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
})

class CopySnackbar extends React.Component {

  static contextType = AppContext

  handleClick = () => {
    this.context.fireSnackBar(true)
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    this.context.fireSnackBar(false)
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.context.isSnackOpen}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Ton message a été copié, tu peux maintenant le coller dans Slack !</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    )
  }
}

export default withStyles(styles)(CopySnackbar)
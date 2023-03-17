import React from 'react'
import { withStyles } from '@material-ui/styles'
import { CircularProgress } from '@material-ui/core'
import { styles } from '../styles/LoaderStyles'

const Loader = ({ classes }) => {
  return (
    <div className={classes.loaderRoot}>
      <div className={classes.loaderWrapper}>
        <CircularProgress />
        <div>Loading...</div>
      </div>
    </div>
  )
}

export default withStyles(styles)(Loader);

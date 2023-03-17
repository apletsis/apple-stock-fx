import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from '../../../styles/TimeFrameSelectorsStyles';
import { TIME_DATA } from '../../../helpers/constants';

const TimeFrameSelectors = ({ setTimeFrame, timeFrame, classes }) => {
  const handleButtonClick = ({ currentTarget }) => {
    const clickedButtonLabel = currentTarget.innerHTML
    const clickedButton = TIME_DATA.find(
      ({ label }) => label === clickedButtonLabel
    )
    if (clickedButton && clickedButton.label !== timeFrame.label)
    setTimeFrame(clickedButton)
  }

  return (
    <div className={classes.timeFrameSelectorsContainer}>
      {TIME_DATA.map(({ label }) => {
        const isButtonSelected = timeFrame.label === label;
        return (
          <button
            className={isButtonSelected ? classes.timeSelectorButtonSelected : classes.timeSelectorButton}
            key={label}
            onClick={handleButtonClick}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

export default withStyles(styles)(TimeFrameSelectors);

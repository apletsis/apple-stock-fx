import React, { useState, useCallback } from 'react';
import Header from './Header/Header';
import Tabs from './Tabs/Tabs';
import { withStyles } from '@material-ui/core';
import { styles } from '../styles/AppleStockPriceStyles';
import Loader from './Loader';

const AppleStockPrice = ({ classes }) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoading = useCallback(
    (headerState) => {
      setIsLoading(headerState)
    },
    [],
  )
  
  return (
    <div className={classes.mainWrapper}>
      <Header handleLoading={handleLoading} />
      <Tabs />
      {isLoading && <Loader />} 
    </div>
  );
};

export default withStyles(styles)(AppleStockPrice);

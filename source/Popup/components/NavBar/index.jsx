import React from 'react';
import WalletInfo from './WalletInfo';
import useStyles from './styles';

const NavBar = () => {
  const walletName = 'Main IC Wallet';
  const walletAddress = 'rwlgt-iiaaa{{THIS SHOULDNT BE VISIBLE DIRECTLY}}aaaaa-cai';

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        Plug icon
      </div>
      <div className={classes.walletContainer}>
        <WalletInfo name={walletName} address={walletAddress} />
      </div>
      <div className={classes.flex}>
        Profile
      </div>
    </div>
  );
};

export default NavBar;

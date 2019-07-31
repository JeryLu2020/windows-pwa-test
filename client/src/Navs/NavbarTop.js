import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    boxShadow: "none",
    fontSize: 17,
    textTransform: "none",
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing(1),
  },
}));

export default function NavbarTop() {
  const classes = useStyles();

  // add modal of login button
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title} aria-label="menu">
            <Button component={Link} to="/home" variant="contained" color="primary" className={classes.button}>Home</Button>
            <Button component={Link} to="/users" variant="contained" color="primary" className={classes.button}>Users</Button>
          </Typography>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleClickOpen}>Sign In</Button>
          <Button variant="contained" color="primary" className={classes.button} aria-hidden="true">Sign Out</Button>
        </Toolbar>
      </AppBar>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth = {'xs'}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Sign In"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className={classes.container}>
              <Input
                // defaultValue="username"
                placeholder="Username"
                className={classes.input}
                fullWidth={true}
                inputProps={{
                  'aria-label': 'description',
                }}
              />
            </div>
            <div className={classes.container}>
              <Input
                placeholder="Password"
                type="password"
                className={classes.input}
                fullWidth={true}
                inputProps={{
                  'aria-label': 'description',
                }}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Go
          </Button>
          {/* <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button> */}
          
        </DialogActions>
      </Dialog>

    </div>
  );
}
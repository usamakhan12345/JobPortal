import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from '../../Components/Components.module.css'
import { useNavigate } from 'react-router-dom';



const drawerWidth = 240;

export default function DrawerAppBar(props) {
  const navItems = [ props.postjob , props.myjob , props.profile , props.postJob];

  const redirect = useNavigate()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const UserLogOut = ()=>{
      redirect("/")
  }

  const navbarOptions = (item)=>{
      console.log(item)
      if(item === 'All Jobs'){
        redirect('/myjobs')
      }
      if(item === 'Post Job'){
        redirect('/postjob')
      }
      if(item === 'Profile'){
        redirect('/profile')
      }
  }
    {console.log(props.head)}
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography  variant="h6" sx={{ my: 2 }}>
          {props.head ? props.head : 'Job Portal'}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item,i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton key={i} sx={{ textAlign: 'center' }}>
              <ListItemText key={i} primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box  sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar className={styles.box}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box className={styles.navbarBox} sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item , i) => (
              <Button  className={ `fw-bold fs-5`} onClick={()=> navbarOptions(item)} key={i} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
          {/* <Typography
            variant="h5"
            component="div"
            className= {styles}
            sx={{  display: { xs: 'none', sm: 'block' }}}
            
            >
            Post Job 
          </Typography> */}
          <Typography
            variant="h6"
            component="div"
            className= {styles.logo}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'}}}
            
            >
                      {props.head ? props.head : 'Job Portal'}

          </Typography>
          <Typography
            variant="h5"
            component="div"
            className= {styles}
            sx={{  display: { xs: 'none', sm: 'block' }}}
            
            >
              <button onClick={()=>UserLogOut()}>{props.login}</button>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />

      </Box>
    </Box>
  );
}

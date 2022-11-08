import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';


function Header() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h5" color="inherit" component="div">
          Virtual Store
        </Typography>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Badge >
            <HomeIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
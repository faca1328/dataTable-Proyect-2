import { AppBar, Button, Toolbar, Typography } from "@mui/material";


export const NavBar = () => {
  return (
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
  )
}

export default NavBar; 

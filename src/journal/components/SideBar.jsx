import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({drawerWidth}) => {
  return (
    <Box
        component='nav'
        sx={{ width: {sm: drawerWidth}, flexShrink: { sm: 0}}}
    >
        <Drawer variant='permanent' open sx={{ display: { sx: 'block'}, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}}}>

            <Toolbar>
                <Typography variant="h6" noWrap component='div'>Kenny O</Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary= { text }/>
                                    <ListItemText secondary= { 'Exercitation cillum irure elitsectetur.'} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>

    </Box>
  )
}

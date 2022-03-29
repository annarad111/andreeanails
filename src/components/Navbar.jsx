
import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography, Box } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import '../components/Navbar.css'

const midLinks=[
    {title: 'servicii', path: '/servicii'},
    {title: 'despre ', path: '/despre'},
    { title: 'contact', path: '/contact' },
    {title: 'galerie', path: '/galerie'},
]


export default function Navbar(){
    return(
        <>
            <AppBar position="static" sx={{mb: 4}}>
            <Toolbar sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>

            <Box display='flex' alignItems='center'>
                <Typography variant="h6" component={NavLink} to='/' exact
                 sx={{color: 'black', textDecoration:'none',fontFamily: 'Raleway',fontWeight: 700}}>
                   Andreea Nails
                </Typography>

            </Box>

                <List sx={{display:'flex'}} className="nav">
                    {midLinks.map(({title, path})=> (
                        <ListItem className="links border"
                        component={NavLink}
                        to={path}
                        key={path}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

            </Toolbar>
        </AppBar>
        </>
    );
}
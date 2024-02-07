import React, {useState} from 'react'
import {Drawer, IconButton,List,ListItemIcon,ListItemButton,ListItemText,Button} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
const DrawerComp = () => {
  const [open,setOpen]=useState(false);
  return (
    <>
      <Drawer anchor='left' open={open} onClose={()=>setOpen(false)}>
      <List>
        <ListItemButton>
          <ListItemIcon sx={{display: 'flex', flexDirection: 'column', gap: '10px', justifyContent:'center', alignItems:'center'}}>
            <ListItemText>Home</ListItemText>
            <ListItemText>About Us</ListItemText>
            <ListItemText>Services</ListItemText>
            <ListItemText>Download</ListItemText>
            <ListItemText>Contact</ListItemText>
{/* <Button sx={{ borderRadius: '25px', padding: '0.8em', backgroundColor: '#FF6C22'}} variant="contained">Register User </Button> */}
<button className='xl:w-40  h-12 bg-[#51087E] hover:bg-purple-700	 my-3 w-full rounded-full font-bold text-white p-1.5'>
        Register User
        </button>
          </ListItemIcon>
        </ListItemButton>
      </List>
      </Drawer>
      <IconButton sx={{marginLeft: "auto"}} onClick={()=>setOpen(!open)}>
        <MenuRoundedIcon/>
      </IconButton>
    </>
  )
}

export default DrawerComp; 

import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Check from '@mui/icons-material/Check'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'

function Profiles() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding: 0 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 30, height: 30 }} src='https://scontent.fsgn21-1.fna.fbcdn.net/v/t39.30808-1/416319108_1873840526381220_645168995406809792_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeFopY4YzmoP44HVeNIwp4SIx9yh8_Am1xnH3KHz8CbXGWdmqtrJHKJSGpomkXJB_nvdMmSJu8Gp7X2LebogbWkd&_nc_ohc=frS7CCwuFl8AX_3r9Xy&_nc_ht=scontent.fsgn21-1.fna&oh=00_AfCRJBvhDn02DFvoDb7gNrJ7LshWvyPe4yWbYfuiG3mPKA&oe=65DC5B4A' />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-workspaces"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={
          {
            'aria-labelledby': 'basic-button-workspaces'
          }
        }
      >
        <MenuItem>
          <Avatar sx={{ width: '30px', height: '30px', mr: 2 }} /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar sx={{ width: '30px', height: '30px', mr: 2 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profiles
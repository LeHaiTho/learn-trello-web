import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'

const MENU_STYLES = {
  color: 'primary.main',
  border: 'none',
  borderRadius: '5px',
  bgcolor: 'white',
  paddingX: '5px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      paddingX: 2,
      backgroundColor: 'white',
      width: '100%',
      height: (theme) => theme.trelloCustom.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      borderTop: '1px solid blue'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />} label="LeHaiTho MERN Stack Board" clickable />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />} label="Public/Private workspace" clickable />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />} label="Add To Google Drive" clickable />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />} label="Automation" clickable />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />} label="Filter" clickable />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}></Box>
    </Box>
  )
}

export default BoardBar
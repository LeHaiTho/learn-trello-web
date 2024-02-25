import ModeSelect from '../ModeSelect'
import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import Typography from '@mui/material/Typography'
import Workspaces from './Menu/Workspaces'
import Recent from './Menu/Recent'
import Templates from './Menu/Templates'
import Starred from './Menu/Starred'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menu/Profiles'

function AppBar() {
  return (
    <Box px={2} sx={
      {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto'
      }
    }
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox fontSize='small' sx={{ color: 'primary.main' }} />

          <Typography variant='spans' sx={{ fontSize: '1.2rem', color: 'primary.main', fontWeight: 'bold' }}>
            Trello
          </Typography>
          {/* variant='span' cho Typography nằm cùng hàng với SvgIcon */}
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined">Create</Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField id="outlined-search" label="Search..." type="search" size='small' sx={{ minWidth: '120px' }} />

        <ModeSelect />

        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" >
            <NotificationsNoneIcon sx={{ color: 'primary.main', cursor: 'pointer' }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Notification" >
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'primary.main' }} />
        </Tooltip>

        <Profiles />
      </Box>
    </Box >
  )
}

// Custom components trong Mui ở mục Customize (Component)

export default AppBar
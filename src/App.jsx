import './App.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { useColorScheme } from '@mui/material'
// import useMediaQuery from '@mui/material/useMediaQuery'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
    // setAge(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}><LightModeIcon fontSize='small' /> Light </div>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}><DarkModeIcon fontSize='small' /> Dark </Box>
        </MenuItem>
        <MenuItem value="system">
          {/* <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }} */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}><SettingsBrightnessIcon fontSize='small' /> System </Box>
          {/* sx prop là 1 dạng custom nhanh 1 css */}
          {/* box là một component khác với <div></div> ở chỗ là khi custom ví dụ: spacing, ... có thể custom ở theme.js sẽ ăn toàn bộ dự án. Còn với div thì phải thay đổi từng chỗ  */}
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh', backgroundColor: 'primary.main' }}>
      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        <ModeSelect />
      </Box>
      <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: (theme) => theme.trelloCustom.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        Board Bar
      </Box>
      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => `calc(100% - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight} )`,
        display: 'flex',
        alignItems: 'center'
      }}>
        Board Content
      </Box>

    </Container >
  )
}

export default App

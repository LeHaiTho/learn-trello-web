import './App.css'
import { Box, Button } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'
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
  );
}
function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  // const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
  // console.log('prefersDarkMode: ', prefersDarkMode)
  // console.log('prefersLightMode: ', prefersLightMode)
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeSelect />
      <hr />
      <ModeToggle />
      <div>Lê Hải </div>
    </>
  )
}

export default App

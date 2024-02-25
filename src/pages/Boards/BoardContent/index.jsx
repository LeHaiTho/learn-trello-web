import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{
      backgroundColor: 'primary.light',
      width: '100%',
      height: (theme) => `calc(100% - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight} )`,
      display: 'flex',
      alignItems: 'center'
    }}>

    </Box>
  )
}

export default BoardContent
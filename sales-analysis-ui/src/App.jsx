import './App.css'
import SalesDashboard from './pages/SalesDashboard';
import { AppBar, Toolbar, Typography, Box, Card, CardContent, Stack, styled, Drawer } from "@mui/material";

// Styled AppBar for a gradient background
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "linear-gradient(90deg, #3f51b5, #1a237e)", // Gradient background
  boxShadow: theme.shadows[4],
}));

{/*  TODO: Add a Drawer to the left for navigation */ }

function App() {
  return (
    <>
      {/* Header */}
      <StyledAppBar position="static" sx={{ width: "100vw" }}>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              textAlign: "center",
              letterSpacing: 1.5,
            }}
          >
            Sales Analytics Dashboard
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <SalesDashboard />
      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          textAlign: "center",
          padding: 2,
          marginTop: "auto", // Pushes the footer to the bottom
          width: "100vw",
          position: "fixed",
          bottom: 0,
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Sales Analytics. All rights reserved.
        </Typography>
      </Box>
    </>
  )
}

export default App

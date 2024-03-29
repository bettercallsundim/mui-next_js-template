import { Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
export default function Home() {
  return (
    <div className="bg-rose-400">
      <Container>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
        <Typography variant="h1" component="div" gutterBottom>
          THIS IS A HEADING
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="secondary">Secondary</Button>
          <Button
            sx={{
              backgroundColor: "red",
              "&:hover": {
                backgroundColor: "green",
              },
            }}
            variant="contained"
            className=""
          >
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </Stack>
      </Container>
    </div>
  );
}

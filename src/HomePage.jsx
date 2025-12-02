import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: {
          xs: "2rem",
          sm: "2.5rem",
          md: "3.5rem",
          lg: "60px",
        },
        lineHeight: 1.1,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        px: { xs: 2, sm: 4 },
        maxWidth: "100%",
        background: `radial-gradient(circle at center, #ffffff33, #000000dd),
                     linear-gradient(135deg, #ff00cc, #3333ff)`,
        backgroundBlendMode: "overlay",
        textShadow: {
          xs: "none",
          sm: "0 0 8px rgba(255,255,255,0.6)",
          md: "0 0 20px rgba(255,255,255,0.8)",
        },
      }}
    >
      Hi Upcoming Doctor Ayusha Nasrin
    </Box>
  );
}
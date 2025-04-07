"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

type Props = {
  children?: React.ReactNode;
};

export default function CContainer({ children }: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Box
          sx={{
            bgcolor: "#171622",
            height: "100vh",
            width: "100%",
            position: "relative", // optional, useful for absolute children
          }}
        >
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}

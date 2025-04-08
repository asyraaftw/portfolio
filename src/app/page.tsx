import AppAppBar from "@/components/AppAppBar";
import CContainer from "@/components/CContainer";
import CImageList from "@/components/CImageList";
import CTimeline from "@/components/CTimeline";
import { Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <AppAppBar color="#171622" />
      <CContainer>
        <Grid container marginLeft={20} marginRight={20}>
          <Grid
            size={7}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid size={8} color={"#ffffff"}>
              <Typography variant="subtitle2" marginTop={4}>
                Im a passionate Full Stack Developer with experience in building
                scalable and maintainable applications using Node.js, .NET,
                React, and PostgreSQL. I thrive in dynamic environments where I
                can solve real-world problems through clean, efficient code and
                intuitive UI/UX.
              </Typography>
              <Typography variant="subtitle2" marginTop={4}>
                With a solid background in backend development, DevOps, and
                cloud deployment on Azure, I enjoy owning projects from concept
                to deployment. Im comfortable working across the stack — from
                designing RESTful APIs and managing databases to crafting
                responsive, interactive frontends.
              </Typography>
              <Typography variant="subtitle2" marginTop={4} marginBottom={10}>
                Outside of code, Im an active runner training for marathons,
                balancing the same discipline and consistency I bring to
                software development.
              </Typography>
            </Grid>
            <Grid size={8}>
              <CTimeline />
            </Grid>
          </Grid>
          <Grid size={5}>
            <Typography
              variant="h1"
              sx={{ fontFamily: "Inconsolata,sans-serif" }}
            >
              Amirul Asyraaf
            </Typography>
            {/* <Link
              href="/cv.pdf"
              download="CV_Amirul_Asyraaf.pdf"
              sx={{ textDecoration: "none", color: "white" }}
            >
              Download My CV
            </Link> */}
            <CImageList />
          </Grid>
        </Grid>
      </CContainer>
    </>
  );
}

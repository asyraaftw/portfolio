import Image from "next/image";
import styles from "./page.module.css";
import AppAppBar from "@/components/AppAppBar";
import CTimeline from "@/components/CTimeline";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  ListItem,
  Paper,
  Skeleton,
  styled,
  Typography,
} from "@mui/material";
import CContainer from "@/components/CContainer";

export default function Home() {
  return (
    <>
      <AppAppBar color="#171622" />
      <CContainer>
        <Grid container marginLeft={10}>
          <Grid size={8}>
            <CTimeline />
          </Grid>
          <Grid size={4}>
            <ListItem>2</ListItem>
          </Grid>
        </Grid>
      </CContainer>
    </>
  );
}

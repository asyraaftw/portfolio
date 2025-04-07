"use client";

import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { Box } from "@mui/material";

export default function CTimeline() {
  // const a = 1;

  return (
    <React.Fragment>
      <Box>
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
              color: "#ffffff",
            },
          }}
          style={{ color: "#ffffff" }}
        >
          {/* Item */}
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="button"></Typography>
              2025 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1">
                Software Engineer // Datamicron
              </Typography>
              <Typography variant="subtitle2">Keje la bab1</Typography>
            </TimelineContent>
          </TimelineItem>
          {/* Item */}
          <TimelineItem>
            <TimelineOppositeContent>2023 - 2025</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1">Software Engineer // IFCA</Typography>
              <Typography variant="subtitle2">Keje la bab1</Typography>
            </TimelineContent>
          </TimelineItem>
          {/* Item */}
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="button"></Typography>
              2025 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1">
                Software Engineer // Datamicron
              </Typography>
              <Typography variant="subtitle2">Keje la bab1</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </React.Fragment>
  );
}

"use client";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Box, Chip, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function CTimeline() {
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
          {/* Item 1*/}
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" textAlign="left">
                2025 - Present
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                variant="filled"
                sx={{ backgroundColor: "#50C878" }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1">
                <Link
                  href="https://datamicron.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Software Engineer // Datamicron
                  <ArrowOutwardIcon fontSize="inherit" />
                </Link>
              </Typography>
              <Typography variant="subtitle2" textAlign="left">
                TBD
              </Typography>
              <Typography variant="subtitle2" textAlign="left" marginTop={2}>
                <Chip
                  label=".NET"
                  size="small"
                  sx={{
                    color: "#68BA7F",
                    backgroundColor: "#253D2C",
                    marginX: 0.2,
                  }}
                />
                <Chip
                  label="React"
                  size="small"
                  sx={{
                    color: "#68BA7F",
                    backgroundColor: "#253D2C",
                    marginX: 0.2,
                  }}
                />
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Item 2*/}
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" textAlign="left">
                2023 - 2025
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="filled" sx={{ bgcolor: "#FA5053" }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1">
                <Link
                  href="https://ifca.asia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Software Engineer // IFCA
                  <ArrowOutwardIcon fontSize="inherit" />
                </Link>
              </Typography>
              <Typography variant="caption" color="#546373">
                Permanent
              </Typography>
              <Typography variant="subtitle2" textAlign="left">
                Worked on full-stack solutions for enterprise applications like
                ContractX and E-Invoice using React, .NET, GraphQL, and
                PostgreSQL. Involved in building scalable features, managing
                cloud deployments on Azure, and contributing to a streamlined
                CI/CD process. Collaborated in an Agile team to deliver clean,
                efficient code across backend APIs and frontend interfaces.
              </Typography>
              <Typography variant="caption" color="#546373">
                Intern
              </Typography>
              <Typography variant="subtitle2" textAlign="left">
                Developed internal tools such as a CRM and CMS using .NET Core
                and Angular. Gained hands-on experience with API development,
                testing, and debugging, laying the foundation for a professional
                software engineering career.
              </Typography>
              <Typography variant="subtitle2" textAlign="left" marginTop={2}>
                <Chip
                  label="Nodejs"
                  size="small"
                  sx={{
                    color: "#68BA7F",
                    backgroundColor: "#253D2C",
                    marginX: 0.2,
                  }}
                />
                <Chip
                  label="React"
                  size="small"
                  sx={{
                    color: "#68BA7F",
                    backgroundColor: "#253D2C",
                    marginX: 0.2,
                  }}
                />
                <Chip
                  label="Azure"
                  size="small"
                  sx={{
                    color: "#68BA7F",
                    backgroundColor: "#253D2C",
                    marginX: 0.2,
                  }}
                />
                <Chip
                  label="GraphQL"
                  size="small"
                  sx={{
                    color: "#68BA7F",
                    backgroundColor: "#253D2C",
                    marginX: 0.2,
                  }}
                />
                <Chip
                  label="Postman"
                  size="small"
                  sx={{
                    color: "#68BA7F",
                    backgroundColor: "#253D2C",
                    marginX: 0.2,
                  }}
                />
                <Chip
                  label="Git"
                  size="small"
                  sx={{
                    color: "#68BA7F",
                    backgroundColor: "#253D2C",
                    marginX: 0.2,
                  }}
                />
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Item 3*/}
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" textAlign="left">
                2020 - 2020
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="filled" sx={{ bgcolor: "#FA5053" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1">
                <Link
                  href="http://www.prismakhas.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Software Engineer // Prisma Khas
                  <ArrowOutwardIcon fontSize="inherit" />
                </Link>
              </Typography>
              <Typography variant="caption" color="#546373">
                Intern
              </Typography>
              <Typography variant="subtitle2" textAlign="left">
                Mastered the Laravel framework within a week, demonstrating
                expertise in setup, controller logic, routing, and MVC
                architecture to build scalable applications. Engineered advanced
                modules for the KASTAM system, enhancing UI/UX, integrating
                real-time data, and automating processes to improve
                functionality. Led the implementation of Digital Forensics
                Solutions, optimizing code and database performance, while
                guiding a team to deliver secure, high-performance solutions.
              </Typography>
              <Typography variant="subtitle2" textAlign="left" marginTop={2}>
                <Chip
                  label="Laravel"
                  size="small"
                  sx={{ color: "#68BA7F", backgroundColor: "#253D2C" }}
                />
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>

      <Box marginLeft={4}>
        <Typography variant="body1">
          <Link
            href="/CV_Amirul_Asyraaf.pdf"
            download="CV_Amirul_Asyraaf.pdf"
            sx={{
              textDecoration: "none",
              color: "#C9C8C7",
              "&:hover": {
                textDecoration: "underline",
              },
              flex: 0.2,
            }}
          >
            View Full Resumé
          </Link>
        </Typography>
      </Box>
    </React.Fragment>
  );
}

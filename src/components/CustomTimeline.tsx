"use client";

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

export default function CustomTimeline() {
  return (
    <React.Fragment>
      <Box>
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.4,
              color: "#ffffff",
            },
          }}
          style={{ color: "#ffffff" }}
        >
          {/* Item 1 */}
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
              <Typography variant="body2">
                <a
                  className="text-shadow-white after:content-['↗'] hover:underline"
                  href="https://datamicron.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Software Engineer // Datamicron
                </a>
              </Typography>
              <Typography variant="caption" textAlign="left">
                TBD
              </Typography>
              <br />
              <Typography variant="caption" textAlign="left" marginTop={2}>
                <Chip label=".NET" size="small" sx={chipStyle} />
                <Chip label="React" size="small" sx={chipStyle} />
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Item 2 */}
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
              <Typography variant="body2">
                <a
                  className="text-shadow-white after:content-['↗'] hover:underline"
                  href="https://ifca.asia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Software Engineer // IFCA
                </a>
              </Typography>
              <Typography variant="caption" textAlign="left">
                Developed full-stack solutions for enterprise apps like{" "}
                <a
                  className="text-blue-600 after:content-['↗'] hover:underline lg:hover:underline"
                  // href="https://home.contractx.asia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ContractX
                </a>{" "}
                and E-Invoice using React, .NET, GraphQL, and PostgreSQL.
                Spearheaded scalable feature development, Azure cloud
                deployments, and CI/CD pipelines in an Agile environment. Built
                internal tools (CRM, CMS) with .NET Core and Angular, gaining
                expertise in API development, testing, and debugging, laying the
                foundation for a software engineering career.
              </Typography>
              <Typography variant="caption" textAlign="left" marginTop={2}>
                <Chip label="Nodejs" size="small" sx={chipStyle} />
                <Chip label="React" size="small" sx={chipStyle} />
                <Chip label="Azure" size="small" sx={chipStyle} />
                <Chip label="GraphQL" size="small" sx={chipStyle} />
                <Chip label="Postman" size="small" sx={chipStyle} />
                <Chip label="Git" size="small" sx={chipStyle} />
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Item 3 */}
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
              <Typography variant="body2">
                <a
                  className="text-shadow-white after:content-['↗'] hover:underline lg:hover:underline"
                  href="http://www.prismakhas.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Software Engineer // Prisma Khas
                </a>
              </Typography>
              <Typography variant="caption" textAlign="left">
                Mastered Laravel in a week, excelling in setup, controller
                logic, routing, and MVC architecture to build scalable apps.
                Developed advanced KASTAM system modules, enhancing UI/UX,
                real-time data integration, and automation. Led Digital
                Forensics Solutions implementation, optimizing code and database
                performance, while guiding the team to deliver secure,
                high-performance results.
              </Typography>
              <br />
              <Typography variant="caption" textAlign="left" marginTop={2}>
                <Chip label="Laravel" size="small" sx={chipStyle} />
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>

      <Box marginLeft={4}>
        <Typography variant="body2">
          <Link
            href="/CV_Amirul_Asyraaf.pdf"
            download="CV_Amirul_Asyraaf.pdf"
            sx={{
              textDecoration: "none",
              color: "#C9C8C7",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            View Full Resumé
          </Link>
        </Typography>
      </Box>
    </React.Fragment>
  );
}

const chipStyle = {
  color: "#68BA7F",
  backgroundColor: "#253D2C",
  marginX: 0.2,
};

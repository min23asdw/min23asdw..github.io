import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ProjectData from "../model/project";
import "../styles/card.css";
import Badge from "./Badge";
import { Link } from "react-router-dom";
interface DataProp {
  data: ProjectData;
}

const ProjectCard = (prop: DataProp) => {
  const data = prop.data;

  return (
    <Link style={{ textDecoration: "none" }} to={data.detailsLink}>
      <Card
        variant="outlined"
        sx={{
          minHeight: "550px",
          height: "100%",
          // width: { xs: "80vh", md: "20vh" },
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
        }}
        className="custom-card"
      >
        <CardMedia
          component="img"
          height="200"
          image={data.imgSrc+"?w=359&h=200"}
          alt={data.alt}
          sx={{ padding: "1em 1em 0 0em", objectFit: "contain" }}
          loading="lazy"
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <h3
            className="inline  text-lg font-bold"
            style={{ minHeight: "50px" }}
          >
            {data.title}
          </h3>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <b>{data.start}</b>
            <Box sx={{ display: "flex", gap: "5px" }}>
              {data.tech.map((type, index) => (
                <React.Fragment key={index}>
                  <Badge type={type} />
                </React.Fragment>
              ))}
            </Box>
          </Box>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ paddingLeft: "10px", paddingTop: "10px" }}
          >
            {data.description}
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {data.techstack}
          <Box>
            <Link to={data.detailsLink}>Details</Link>
          </Box>
        </CardActions>
      </Card>
    </Link>
  );
};

export default ProjectCard;

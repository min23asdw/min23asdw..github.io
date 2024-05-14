import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
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
    <Card
      variant="outlined"
      sx={{
        minHeight: "600px",
        height: "100%",
        // width: { xs: "80vh", md: "20vh" },
        borderRadius: "10px",
      }}
      className="custom-card"
    >
      <CardMedia
        component="img"
        height="200"
        image={data.imgSrc}
        alt={data.alt}
        sx={{ padding: "1em 1em 0 0em", objectFit: "contain" }}
      />

      <CardContent>
        <h3 className="inline  text-lg font-bold" style={{ minHeight: "50px" }}>
          {data.title}
        </h3>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {data.interval}
          <Box sx={{ display: "flex", gap: "5px" }}>
            {data.tech.map((type, index) => (
              <React.Fragment key={index}>
                <Badge type={type} />
              </React.Fragment>
            ))}
          </Box>
        </Box>

        <Typography variant="body1" color="text.secondary">
          {data.description}
        </Typography>

        <Typography variant="body1" color="text.secondary">
          {data.techstack}
        </Typography>
        <Link to={data.detailsLink}>Details</Link>
      </CardContent>
      {/* <CardActions disableSpacing></CardActions> */}
    </Card>
  );
};

export default ProjectCard;

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import "./Card.css";

export default function ActionAreaCard() {
  return (
    <Card
      sx={{
        maxWidth: 250,
        boxShadow: 5,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e72f9a48-7068-4583-a509-b4580a4011ab/custom-nike-air-max-95-unlocked-by-you.png"
          alt="green iguana"
        />
        <CardContent id="CardBox">
          <div className="Elem">
            <Typography gutterBottom variant="h6" component="div">
              Lizard
            </Typography>
            <Typography gutterBottom variant="h6" component="div" align="right">
              Lizard2
            </Typography>
          </div>
          <Typography variant="body3" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="Elem">
          <Button size="small" color="primary" variant="contained">
            Buy
          </Button>
          <div id="SubElem">
            <EditIcon color="action" />
            <DeleteIcon color="action" />
          </div>
        </div>
      </CardActions>
    </Card>
  );
}

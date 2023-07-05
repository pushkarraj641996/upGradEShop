import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";

import "./Card.css";

const ProductCardView = (props) => {
  const isAdminLoggedIn = useSelector(
    (state) => state.userAuth.isAdminLoggedIn
  );
  return (
    <Card
      sx={{
        maxWidth: 280,
        maxHeight: 450,
        boxShadow: 5,
        margin: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        overflow: "scroll",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.data.imageURL}
          alt="green iguana"
          sx={{ height: 200 }}
        />
        <CardContent id="CardItems">
          <div className="Elem">
            <Typography gutterBottom variant="h6" component="div" fontSize={17}>
              {props.data.name}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              align="right"
              fontSize={20}
              marginLeft={5}
              marginRight={3}
            >
              &#8377;{props.data.price}
            </Typography>
          </div>
          <Typography variant="body3" color="text.secondary">
            {props.data.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="Elem">
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() => props.clickHandler(props.id)}
          >
            Buy
          </Button>
          {isAdminLoggedIn ? (
            <div id="SubElem">
              <EditIcon color="action" sx={{ cursor: "pointer" }} />
              <DeleteIcon
                onClick={() => props.delete(props.id)}
                color="action"
                sx={{ cursor: "pointer" }}
              />
            </div>
          ) : null}
        </div>
      </CardActions>
    </Card>
  );
};

export default ProductCardView;

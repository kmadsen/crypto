import React from 'react';

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)", "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: theme.spacing.unit * 3
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
});

function FundCard({ classes }) {
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
        }
      />
      <CardContent className={classes.content}>
        <Typography
          className={"MuiTypography--heading"}
          variant={"h6"}
          gutterBottom
        >
          Kyle is learning
        </Typography>
        <Typography
          className={"MuiTypography--subheading"}
          variant={"caption"}
        >
          How neat is that.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(FundCard);

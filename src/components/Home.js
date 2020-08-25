import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const style = {
  root: {
    minWidth: 275,
    backgroundColor: "#212121",
    marginTop: 20,
    height: 200,
    color: "#fafafa"
  },
  root1: {
    minWidth: 267,
    backgroundColor: "#424242",
    margin: 18,
    height: 165,
    color: "#fafafa"
  },
  title: {
    fontSize: 30,
    textAlign: "left"
  }
};

function Home(props) {
  return (
    <>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Paper>
            <Card style={style.root} variant="outlined">
              <Grid item xs={3} />
              <Card style={style.root1} variant="outlined">
                <CardContent>
                  <Typography display="block" style={style.title} gutterBottom>
                    Welcome to book Shop
                  </Typography>
                  <Typography variant="h6" gutterBottom align="left">
                    Good friends, good books, and a sleepy conscience: this is the ideal life.
                  </Typography>
                  <Typography variant="caption" display="block" align="left" gutterBottom>
                    - Mark Twain
                  </Typography>
                </CardContent>
              </Card>
              <Grid item xs={3} />
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </>
  );
}

export default Home;

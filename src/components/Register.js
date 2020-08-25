import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

const style = {
  root: {
    Width: 350,
    backgroundColor: "#212121",
    marginTop: 20,
    height: 545
  },
  bgCardColor: {
    Width: 271,
    backgroundColor: "#fafafa",
    marginTop: 20,
    height: 520,
    color: "#e0f7fa"
  },
  title: {
    color: "#01579b"
  }
};

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1)
//   }
// }));

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      message: "",
      successful: false
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  };

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  handleRegister = (e) => {
    e.preventDefault();

    if (this.state.username && this.state.email && this.state.password) {
      console.log(this.state.username + " " + this.state.password + " " + this.state.email);
      this.setState({
        successful: true,
        message: "Registered successfully"
      });
    } else {
      this.setState({
        successful: false,
        message: "username/password/email is empty"
      });
    }
  };

  render() {
    // const classes = useStyles();
    return (
      <>
        <Grid container>
          <Grid item xs={4} />
          <Grid item xs={4}>
            {/* <Paper style={style.root}> */}
            <Card style={style.root} variant="outlined">
              <Paper>
                <Card style={style.bgCardColor} variant="outlined">
                  <CardContent>
                    <form onSubmit={this.handleRegister}>
                      {!this.state.successful && (
                        <Grid container spacing={1}>
                          <Typography variant="h3" gutterBottom align="left" style={style.title}>
                            Register Account at Books Shop
                          </Typography>

                          <Grid item xs={12}>
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="username"
                                label="username"
                                name="username"
                                defaultValue="Default Value"
                                helperText="Plese enter username"
                                variant="outlined"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12}>
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="username"
                                label="username"
                                type="email"
                                name="email"
                                defaultValue="Default Value"
                                helperText="Plese enter email"
                                variant="outlined"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12}>
                            <FormControl fullWidth>
                              <TextField
                                required
                                id="outlined-password-input"
                                label="Password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                helperText="Plese enter password"
                                variant="outlined"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={12}>
                            <FormControl>
                              {/* <Button
                                  variant="contained"
                                  color="primary"
                                  size="large"
                                  className={classes.button}
                                >
                                  Sign Up
                                </Button> */}
                              <Button href="/login" variant="contained" color="primary" align="left">
                                SIGN UP
                              </Button>
                            </FormControl>
                          </Grid>
                        </Grid>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </Paper>
            </Card>
            {/* </Paper> */}
          </Grid>
          <Grid item xs={4} />
        </Grid>
      </>
    );
  }
}

export default Register;

import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

import { Button, Card, CardContent, Grid, TextField } from "@mui/material";

import Logo from "./Logo";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [modeSignUp, setModeSignUp] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    Meteor.loginWithPassword(email, password, (err, res) => {
      if (err) toast.error(err.reason);
      else navigate("/");
    });
  };

  const handleSignup = () => {
    Accounts.createUser(
      {
        email,
        password,
        profile: {
          theme: "automatic",
        },
      },
      (err, res) => {
        if (err) toast.error(err.reason);
        else handleLogin();
      }
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Logo />

      <br />

      <Card style={{ maxWidth: 400 }}>
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                label={
                  <FormattedMessage
                    id={"Login.Email"}
                    defaultMessage={"Email"}
                  />
                }
                value={email}
                fullWidth
                onChange={({ target: { value } }) => setEmail(value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                type={"password"}
                label={
                  <FormattedMessage
                    id={"Login.Password"}
                    defaultMessage={"Password"}
                  />
                }
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
                fullWidth
              />
            </Grid>

            {modeSignUp && (
              <Grid item xs={12}>
                <TextField
                  type={"password"}
                  label={
                    <FormattedMessage
                      id={"Login.PasswordConfirm"}
                      defaultMessage={"Confirm password"}
                    />
                  }
                  value={confirmPassword}
                  onChange={({ target: { value } }) =>
                    setConfirmPassword(value)
                  }
                  error={confirmPassword !== password}
                  fullWidth
                />
              </Grid>
            )}

            {!modeSignUp && (
              <>
                <Grid item xs={12}>
                  <Button
                    variant={"contained"}
                    fullWidth
                    onClick={() => handleLogin()}
                  >
                    <FormattedMessage
                      id={"Login.Login"}
                      defaultMessage={"Login"}
                    />
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Button variant={"text"} onClick={() => setModeSignUp(true)}>
                    <FormattedMessage
                      id={"Login.SwitchSignup"}
                      defaultMessage={"Create a new account"}
                    />
                  </Button>
                </Grid>
              </>
            )}

            {!!modeSignUp && (
              <>
                <Grid item xs={12}>
                  <Button
                    variant={"contained"}
                    fullWidth
                    onClick={() => handleSignup()}
                  >
                    <FormattedMessage
                      id={"Login.Signup"}
                      defaultMessage={"Signup"}
                    />
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Button variant={"text"} onClick={() => setModeSignUp(false)}>
                    <FormattedMessage
                      id={"Login.SwitchLogin"}
                      defaultMessage={"I have already an account"}
                    />
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

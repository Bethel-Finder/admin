import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid, Paper, TextField, Button } from "@mui/material";
import Menu from "../components/Menu";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import {HomeWork,OtherHouses,House,Home, VpnKey,HouseSiding} from "@mui/icons-material";
import ChatIcon from "@mui/icons-material/Chat";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import { makeStyles } from "@mui/styles";

function Dashboard() {
  return (
    <div style={{ width:"100%", height:"100vh", backgroundColor:"#e9f7f7" }}>
      <Box style={{ display: "flex"}}>
        <Menu />
        <Box
          component="main"
          style={{ flexGrow: 1, backgroundColor: "#e9f7f7", height: "auto" }}
        >
          <Container>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h4" style={{ paddingTop: "20px",color:"crimson" }}>
                  BCS BETHEL FINDER
                </Typography>
                <Typography
                  variant="body1"
                  style={{ color: "#888795", paddingTop: "10px" }}
                >
                 Super Admin panel for BCS Bethel Finder
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Paper
                  elevation={3}
                  style={{
                    padding: "15px 10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CalendarTodayIcon
                    style={{ fontSize: "30px", color: "08086b" }}
                  />
                  <Typography
                    variant="body1"
                    style={{ color: "#8887a6", paddingLeft: "7px" }}
                  >
                     {new Date().toDateString()}
                  </Typography>
                </Paper>
              </Grid>
            </Grid> <br/><br/>
            <Grid container style={{ marginTop: "40px" }}>
              <Grid item xs={6} md={3}>
                <Paper
                  square
                  style={{
                    borderRight: "1px solid #888795",
                    width: "100%",
                    padding: "30px 0",
                    borderRadius: "7px 0 0 7px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "auto",
                      height: "auto",
                      //   backgroundColor: "blue",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        backgroundColor: "#FEDA97",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <HomeWork
                        style={{ color: "#ECAF16", fontSize: "40px" }}
                      />
                    </div>
                    <div style={{ marginLeft: "8px" }}>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        States
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        20
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={6} md={3}>
                <Paper
                  square
                  style={{
                    borderRight: "1px solid #888795",
                    width: "100%",
                    padding: "30px 0",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "auto",
                      height: "auto",
                      //   backgroundColor: "blue",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        backgroundColor: "#BFC1DF",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <OtherHouses
                        style={{ color: "#4866A4", fontSize: "35px" }}
                      />
                    </div>
                    <div style={{ marginLeft: "8px" }}>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        Districts
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        78
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={6} md={3}>
                <Paper
                  square
                  style={{
                    // borderRight: "1px solid #888795",
                    width: "100%",
                    padding: "30px 0",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "auto",
                      height: "auto",
                      //   backgroundColor: "blue",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        backgroundColor: "#B3F6EF",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <House
                        style={{ color: "#13CEBD", fontSize: "35px" }}
                      />
                    </div>
                    <div style={{ marginLeft: "8px" }}>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        Areas
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        110
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={6} md={3}>
                <Paper
                  square
                  style={{
                    width: "100%",
                    padding: "30px 0",
                    borderRadius: "0 7px 7px 0",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "auto",
                      height: "auto",
                      //   backgroundColor: "blue",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        backgroundColor: "#F6C9C9",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Home
                        style={{ color: "#E64949", fontSize: "35px" }}
                      />
                    </div>
                    <div style={{ marginLeft: "8px" }}>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        Zones
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        30
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
            </Grid>
            
            

            <Grid container style={{ marginTop: "40px" }}>
              <Grid item xs={6} md={3}>
                <Paper
                  square
                  style={{
                    borderRight: "1px solid #888795",
                    width: "100%",
                    padding: "30px 0",
                    borderRadius: "7px 0 0 7px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "auto",
                      height: "auto",
                      //   backgroundColor: "blue",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        backgroundColor: "#FEDA97",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <HouseSiding
                        style={{ color: "#ECAF16", fontSize: "40px" }}
                      />
                    </div>
                    <div style={{ marginLeft: "8px" }}>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        Bethels
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        1000
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={6} md={3}>
                <Paper
                  square
                  style={{
                    borderRight: "1px solid #888795",
                    width: "100%",
                    padding: "30px 0",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "auto",
                      height: "auto",
                      //   backgroundColor: "blue",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        backgroundColor: "#BFC1DF",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ChatIcon
                        style={{ color: "#4866A4", fontSize: "35px" }}
                      />
                    </div>
                    <div style={{ marginLeft: "8px" }}>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        Fellowships
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        64
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={6} md={3}>
                <Paper
                  square
                  style={{
                    // borderRight: "1px solid #888795",
                    width: "100%",
                    padding: "30px 0",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "auto",
                      height: "auto",
                      //   backgroundColor: "blue",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        backgroundColor: "#B3F6EF",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PeopleAltIcon
                        style={{ color: "#13CEBD", fontSize: "35px" }}
                      />
                    </div>
                    <div style={{ marginLeft: "8px" }}>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        Members
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        3000
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={6} md={3}>
                <Paper
                  square
                  style={{
                    width: "100%",
                    padding: "30px 0",
                    borderRadius: "0 7px 7px 0",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "auto",
                      height: "auto",
                      //   backgroundColor: "blue",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        backgroundColor: "#F6C9C9",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <VpnKey
                        style={{ color: "#E64949", fontSize: "35px" }}
                      />
                    </div>
                    <div style={{ marginLeft: "8px" }}>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        Admin Access
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{ paddingBotom: "7px", fontWeight: 400 }}
                      >
                        10
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
            </Grid>



          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default Dashboard;

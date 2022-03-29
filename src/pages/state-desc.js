import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import Menu from "../components/Menu";
import "../static/css/index.css";
import { Cancel, AddCircleOutline } from "@mui/icons-material";
import Geocode from "react-geocode";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import { connect } from "react-redux";
import { disp_states } from "../redux";
import { useHistory, useParams } from "react-router-dom";
import { add_dist } from "../functions/controllers/add-district";
const formInput = {
  border: "none",
  borderRadius: "6px",
  padding: "10px",
  width: "90%",
  margin: "10px",
  outline: "none",
};

const formInputSubmit = {
  border: "none",
  borderRadius: "6px",
  padding: "10px",
  width: "90%",
  margin: "10px",
  background: "black",
  color: "white",
  outline: "none",
};

const which = {
  border: "none",
  borderRadius: "6px",
  padding: "10px",
  width: "27%",
  marginRight: "10px",
  marginBottom: "10px",
  outline: "none",
};

function Description({ appState, dispStates }) {
  const history = useHistory();
  const reduxState = appState;
  const { state } = useParams();
  const [compState, setCompState] = useState({
    add: false,
  });

  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const [location, setLocation] = useState({
    loaded: false,
    coordinate: {
      lat: "",
      lng: "",
      address: "",
    },
  });

  const [currentAddress, setCurrentAddress] = useState("");

  const fetch = () => {};

  const allCategories = () => {
    let newData = [2, 1, 3, 4];
    return newData.map((tks) => {
      return (
        <>
          <div
            style={{
              display: "flex",
              flexFlow: "row nowrap",
              width: "100%",
              height: "100px",
              // backgroundColor: "#78a7a6",
              borderBottom: "1px solid #ccc",
              color: "white",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ paddingLeft: "20px" }}>
                <Typography
                  variant="h5"
                  style={{ paddingBottom: "15px", color: "gray" }}
                >
                  District IV
                </Typography>
                <Typography variant="body1" style={{ color: "black" }}>
                  4 Areas || 9 Zones || 24 Bethels
                </Typography>
              </div>
            </div>
          </div>
        </>
      );
    });
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    fetch();

    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Goelocation not supported",
      });
      alert("Not supported");
    }

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

    let actuallState = reduxState.states.filter((e) => e.state == state);
    setCompState({
      ...compState,
      state: actuallState[0],
    });
    console.log(actuallState[0]);
  }, []);

  const setAccuracy = () => {
    return { enableHighAccuracy: true, maximumAge: 2000, timeout: 5000 };
  };

  const onSuccess = (location) => {
    if (location.coords.accuracy > 90000000) {
      console.log("The GPS accuracy isn't good enough");
    } else {
      setCoordinates({
        ...coordinates,
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
      decodeLatLng(location.coords.latitude, location.coords.longitude);
    }
    console.log(location.coords.accuracy);
  };

  const onError = (error) => {
    setLocation({
      loaded: false,
      error,
    });
  };

  const decodeLatLng = (lat, lng) => {
    Geocode.setApiKey("AIzaSyBkftTfDieylFtl9C10ybibBLP6TEyMNSQ");
    Geocode.setLanguage("en");
    Geocode.setRegion("es");
    Geocode.setLocationType("ROOFTOP");

    // Enable or disable logs. Its optional.
    Geocode.enableDebug();

    // Get address from latitude & longitude.
    Geocode.fromLatLng(lat, lng).then(
      (response) => {
        const address = response.results[0].formatted_address;

        // setCurrentAddress(address);
        setAddress(address);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const products = [
    {
      states: "Rivers State",
      districts: "125 Aggrrey road port harcourt, River State",
      areas: 12,
      zones: 25,
      bethels: 50,
    },
    {
      states: "Rivers State",
      districts: "125 Aggrrey road port harcourt, River State",
      areas: 12,
      zones: 25,
      bethels: 50,
    },
    {
      states: "Rivers State",
      districts: "125 Aggrrey road port harcourt, River State",
      areas: 12,
      zones: 25,
      bethels: 50,
    },
    {
      states: "Rivers State",
      districts: "125 Aggrrey road port harcourt, River State",
      areas: 12,
      zones: 25,
      bethels: 50,
    },
    {
      states: "Rivers State",
      districts: "125 Aggrrey road port harcourt, River State",
      areas: 12,
      zones: 25,
      bethels: 50,
    },
    { states: "Rivers State", districts: 4, areas: 12, zones: 25, bethels: 50 },
    { states: "Rivers State", districts: 4, areas: 12, zones: 25, bethels: 50 },
    { states: "Rivers State", districts: 4, areas: 12, zones: 25, bethels: 50 },
    { states: "Rivers State", districts: 4, areas: 12, zones: 25, bethels: 50 },
    { states: "Rivers State", districts: 4, areas: 12, zones: 25, bethels: 50 },
    { states: "Rivers State", districts: 4, areas: 12, zones: 25, bethels: 50 },
    { states: "Rivers State", districts: 4, areas: 12, zones: 25, bethels: 50 },
    { states: "Rivers State", districts: 4, areas: 12, zones: 25, bethels: 50 },
    {
      states: "Bayelsa State",
      districts: 4,
      areas: 12,
      zones: 25,
      bethels: 50,
    },
  ];

  const columns = [
    { dataField: "states", text: "Bethels", sort: true },
    { dataField: "districts", text: "Address", sort: true },
    { dataField: "areas", text: "Admin", sort: true },
    { dataField: "zones", text: "Admin Phone", sort: true },
    { dataField: "bethels", text: "Priest", sort: true },
  ];

  const defaultSorted = [
    {
      dataField: "states",
      order: "desc",
    },
  ];

  const pagination = paginationFactory({
    page: 2,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  const { SearchBar, ClearSearchButton } = Search;

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      //  console.log(alert(row.states));
      // history.push('/state-desc')
    },
  };

  const close = () => {
    setCompState({
      ...compState,
      add: false,
    });
  };
  const triggerAdd = (type) => {
    setCompState({
      ...compState,
      add: true,
      addType: type,
    });
  };

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);

    let mapData = {
      lat: coordinates.lat,
      lng: coordinates.lng,
      address,
    };
    console.log(mapData);
  };

  const [districtname, setDist] = useState("");
  const [distExtre, setDistExt] = useState("");
  const createDistrict = () => {
    const newObj = {
      name: districtname,
      desc: distExtre,
      state,
    };
    add_dist(newObj).then((res) => {
      dispStates(res)
      console.log(res);
      setCompState({
        ...compState,
        add:false
      })
      setDist("")
      setDistExt("")
    });
  };

  const addComp = () => {
    if (compState.addType == "BETHEL") {
      return (
        <>
          <div className="addModal">
            <div className="addModalFirstChild">
              <div
                style={{
                  position: "relative",
                  top: "20%",
                  left: "20%",
                  width: "60%",
                  background: "",
                }}
              >
                <form className="addModalForm">
                  <span
                    onClick={() => {
                      close();
                    }}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      fontSize: "",
                      color: "crimson",
                      cursor: "pointer",
                    }}
                  >
                    <Cancel />
                  </span>
                  <b>Add new Bethel</b>
                  <input
                    style={formInput}
                    placeholder="Bethel name"
                    type="text"
                  />{" "}
                  <br />
                  <PlacesAutocomplete
                    value={address}
                    onChange={setAddress}
                    onSelect={handleSelect}
                  >
                    {({
                      getInputProps,
                      suggestions,
                      getSuggestionItemProps,
                      loading,
                    }) => (
                      <div>
                        <input
                          style={formInput}
                          {...getInputProps({ placeholder: "Type address" })}
                        />
                        {/* {console.log(suggestions)} */}

                        <div className="autocomplete-dropdown-container">
                          {loading && <div>Loading...</div>}
                          {suggestions.map((suggestion) => {
                            // console.log(suggestion.description);
                            const className = suggestion.active
                              ? "suggestion-item--active"
                              : "suggestion-item";
                            // inline style for demonstration purpose
                            const style = suggestion.active
                              ? {
                                  // backgroundColor: "#fafafa",
                                  cursor: "pointer",
                                }
                              : {
                                  // backgroundColor: "black",
                                  cursor: "pointer",
                                  textAlign: "left",
                                  padding: "2px 15px",
                                };
                            return (
                              <div
                                {...getSuggestionItemProps(suggestion, {
                                  className,
                                  style,
                                })}
                              >
                                <span>{suggestion.description}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </PlacesAutocomplete>
                  {/* <p>Latitude: {coordinates.lat}</p>
                  <p>Longitude: {coordinates.lng}</p>
                  <p>Address: {address}</p> */}
                  <input
                    style={formInput}
                    placeholder="Admin / Caretaker's phone"
                    type="text"
                  />{" "}
                  <br />
                  <select style={which}>
                    <option>DISTRICT</option>
                  </select>
                  <select style={which}>
                    <option>AREA</option>
                  </select>
                  <select style={which}>
                    <option>ZONE</option>
                  </select>
                  <textarea
                    style={{
                      width: "90%",
                      height: "100px",
                      padding: "10px",
                      borderRadius: "6px",
                      border: "none",
                      outline: "none",
                    }}
                    placeholder="Add extra information about the bethel"
                  ></textarea>
                  <input
                    style={formInputSubmit}
                    value="Add Bethel"
                    type="submit"
                  />{" "}
                  <br />
                </form>
              </div>
            </div>
          </div>
        </>
      );
    } else if (compState.addType == "ZONE") {
      return (
        <>
          <div className="addModal">
            <div className="addModalFirstChild">
              <div
                style={{
                  position: "relative",
                  top: "20%",
                  left: "20%",
                  width: "60%",
                  background: "",
                }}
              >
                <form className="addModalForm">
                  <span
                    onClick={() => {
                      close();
                    }}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      fontSize: "",
                      color: "crimson",
                      cursor: "pointer",
                    }}
                  >
                    <Cancel />
                  </span>
                  <b>Add new Zone</b>
                  <input
                    style={formInput}
                    placeholder="Zonal name"
                    type="text"
                  />{" "}
                  <br />
                  <select style={formInput}>
                    <option>DISTRICT</option>
                  </select>
                  <select style={formInput}>
                    <option>AREA</option>
                  </select>
                  <textarea
                    style={{
                      width: "90%",
                      height: "100px",
                      padding: "10px",
                      borderRadius: "6px",
                      border: "none",
                      outline: "none",
                    }}
                    placeholder="Add extra information about the zone"
                  ></textarea>
                  <input
                    style={formInputSubmit}
                    value="Add Zone"
                    type="submit"
                  />{" "}
                </form>
              </div>
            </div>
          </div>
        </>
      );
    } else if (compState.addType == "AREA") {
      return (
        <>
          <div className="addModal">
            <div className="addModalFirstChild">
              <div
                style={{
                  position: "relative",
                  top: "20%",
                  left: "20%",
                  width: "60%",
                  background: "",
                }}
              >
                <form className="addModalForm">
                  <span
                    onClick={() => {
                      close();
                    }}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      fontSize: "",
                      color: "crimson",
                      cursor: "pointer",
                    }}
                  >
                    <Cancel />
                  </span>
                  <b>Add new Area</b>
                  <input
                    style={formInput}
                    placeholder="Area name"
                    type="text"
                  />{" "}
                  <select style={formInput}>
                    <option>DISTRICT</option>
                  </select>
                  <textarea
                    style={{
                      width: "90%",
                      height: "100px",
                      padding: "10px",
                      borderRadius: "6px",
                      border: "none",
                      outline: "none",
                    }}
                    placeholder="Add extra information about the Area"
                  ></textarea>
                  <input
                    style={formInputSubmit}
                    value="Add Area"
                    type="submit"
                  />{" "}
                </form>
              </div>
            </div>
          </div>
        </>
      );
    } else if (compState.addType == "DISTRICT") {
      return (
        <>
          <div className="addModal">
            <div className="addModalFirstChild">
              <div
                style={{
                  position: "relative",
                  top: "20%",
                  left: "20%",
                  width: "60%",
                  background: "",
                }}
              >
                <form
                  className="addModalForm"
                  onSubmit={(e) => {
                    e.preventDefault();
                    createDistrict();
                  }}
                >
                  <span
                    onClick={() => {
                      close();
                    }}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      fontSize: "",
                      color: "crimson",
                      cursor: "pointer",
                    }}
                  >
                    <Cancel />
                  </span>
                  <b>Add new District</b>
                  <input
                    style={formInput}
                    placeholder="District name"
                    type="text"
                    value={districtname}
                    onChange={(e) => {
                      setDist(e.target.value);
                    }}
                  />{" "}
                  <br />
                  <textarea
                    style={{
                      width: "90%",
                      height: "100px",
                      padding: "10px",
                      borderRadius: "6px",
                      border: "none",
                      outline: "none",
                    }}
                    value={distExtre}
                    onChange={(e) => {
                      setDistExt(e.target.value);
                    }}
                    placeholder="Add extra information about the District"
                  ></textarea>
                  <input
                    style={formInputSubmit}
                    value="Add District"
                    type="submit"
                  />{" "}
                </form>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div style={{ width: "100%", height: " ", backgroundColor: "#0d0c10" }}>
      {compState.loading == true && (
        <div
          style={{
            backgroundColor: "rgb(0,0,0,0.8)",
            position: "fixed",
            width: "100%",
            height: "100%",
            top: "0px",
            zIndex: "3000",
            paddingTop: "20%",
            textAlign: "center",
            color: "white",
          }}
        >
          Loading......
        </div>
      )}

      {compState.add == true && addComp()}

      <Box sx={{ display: "flex" }}>
        {console.log(compState)}
        <Menu />
        <Box
          component="main"
          style={{ flexGrow: 1, backgroundColor: "#e9f7f7", height: "auto" }}
        >
          <div
            style={{
              width: "100%",
              height: "",
              backgroundColor: "",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "",
              }}
            >
              <Container>
                <Typography
                  variant="h5"
                  style={{ color: "black", padding: "20px 0" }}
                >
                  <span>BROTHERHOOD OF THE CROSS AND STAR</span>
                </Typography>
              </Container>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  backgroundColor: "#78a7a6",
                }}
              >
                <Container style={{ background: "#78a7a6" }}>
                  <Typography
                    style={{ padding: "10px 0", color: "crimson" }}
                    variant="h5"
                  >
                    Rivers State
                  </Typography>
                </Container>
              </div>
              <Container>
                <Grid container spacing={5}>
                  <Grid item md={6} sm={12} xs={12}>
                    {" "}
                    <br />
                    <div
                      className="addBethelZones"
                      onClick={() => {
                        triggerAdd("DISTRICT");
                      }}
                    >
                      <AddCircleOutline /> ADD DISTRICT
                    </div>
                    <div
                      className="addBethelZones"
                      onClick={() => {
                        triggerAdd("AREA");
                      }}
                    >
                      <AddCircleOutline /> ADD AREA
                    </div>
                    <div
                      className="addBethelZones"
                      onClick={() => {
                        triggerAdd("ZONE");
                      }}
                    >
                      <AddCircleOutline /> ADD ZONE
                    </div>
                    <div
                      className="addBethelZones"
                      onClick={() => {
                        triggerAdd("BETHEL");
                      }}
                    >
                      <AddCircleOutline /> ADD BETHEL
                    </div>
                    <Typography
                      variant="body1"
                      style={{
                        paddingTop: "40px",
                        color: "black",
                        paddingBottom: "30px",
                      }}
                    >
                      <span>
                        {compState.state ? (
                          <> {compState.state.meta.statedesc}</>
                        ) : (
                          "Loading...."
                        )}
                      </span>
                    </Typography>
                    <Typography
                      variant="h5"
                      style={{ color: "gray", paddingBottom: "20px" }}
                    >
                      ADMINISTRATION
                    </Typography>
                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        flexFlow: "row wrap",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <Typography
                          variant="h6"
                          style={{ color: "gray", paddingBottom: "10px" }}
                        >
                          Admin
                        </Typography>
                        <Typography
                          variant="body1"
                          style={{
                            color: "black",
                            paddingBottom: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          <span>
                            {compState.state ? (
                              <> {compState.state.meta.admin}</>
                            ) : (
                              "Loading...."
                            )}
                          </span>
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          variant="h6"
                          style={{ color: "gray", paddingBottom: "10px" }}
                        >
                          Admin's phone
                        </Typography>
                        <Typography
                          variant="body1"
                          style={{
                            color: "black",
                            paddingBottom: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          <span>
                            {compState.state ? (
                              <>{compState.state.meta.admincontact}</>
                            ) : (
                              "Loading...."
                            )}
                          </span>
                        </Typography>
                      </div>
                    </div>
                    {/* <Typography
                      variant="body1"
                      style={{ color: "#ccc", paddingBottom: "30px" }}
                    >
                      Time:  {compState.event ? <span>{compState.event.meta.startTime}</span>:"--/--"}
                    </Typography> */}
                    <Typography
                      variant="h6"
                      style={{ color: "gray", paddingBottom: "10px" }}
                    >
                      HQR. Address
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        color: "black",
                        paddingBottom: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      <span>
                        {compState.state ? (
                          <>{compState.state.meta.hqr}</>
                        ) : (
                          "Loading...."
                        )}
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <div
                      style={{
                        width: "100%",
                        height: "auto",
                        border: "1px solid #78a7a6",
                        borderRadius: 10,
                        boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)",
                        padding: "20px 0",
                        margin: "40px 0",
                      }}
                    >
                      {/* <Typography
                        variant="p"
                        style={{
                          color: "crimson",
                          paddingBottom: "20px",
                          textAlign: "center",
                        }}
                      >
                        Basic Details
                      </Typography> */}

                      {allCategories()}

                      <br />

                      <div style={{ textAlign: "center" }}>
                        <div
                          className="addBethelZones"
                          onClick={() => {
                            triggerAdd("DISTRICT");
                          }}
                        >
                          All DISTRICT
                        </div>
                        <div
                          className="addBethelZones"
                          onClick={() => {
                            triggerAdd("AREA");
                          }}
                        >
                          ALL AREA
                        </div>
                        <div
                          className="addBethelZones"
                          onClick={() => {
                            triggerAdd("ZONE");
                          }}
                        >
                          ALL ZONE
                        </div>
                      </div>
                      {/* <a  onClick={()=>{ triggerAdd("BETHEL") } } style={{ float: " ", fontSize:"15px",padding:"2px 5px", background:"lightblue",borderRadius:"6px",margin:"5px",color:"white",cursor:"pointer" }}>VIEW ALL BETHEL</a> */}
                    </div>
                  </Grid>
                  <Container>
                    <Typography
                      style={{ padding: "20px", color: "gray" }}
                      variant="h5"
                    >
                      List Of Bethels
                    </Typography>
                  </Container>
                  <div
                    className="App"
                    style={{
                      border: "1px solid #78a7a6",
                      background: " #f3f3f3",
                      marginLeft: "0px",
                      padding: "20px",
                      width: "100%",
                      marginLeft: "3%",
                    }}
                  >
                    <ToolkitProvider
                      bootstrap4
                      keyField="id"
                      data={products}
                      columns={columns}
                      search
                    >
                      {(props) => (
                        <div>
                          <SearchBar {...props.searchProps} />
                          <ClearSearchButton {...props.searchProps} />
                          <hr />
                          <BootstrapTable
                            rowEvents={rowEvents}
                            defaultSorted={defaultSorted}
                            pagination={pagination}
                            {...props.baseProps}
                          />
                        </div>
                      )}
                    </ToolkitProvider>
                  </div>{" "}
                  <br />
                  <br />
                  <br />
                </Grid>
              </Container>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    appState: state.user,
  };
};

const mapDispatchToProps = (dispatch, encoded) => {
  return {
    dispStates: (payload) => dispatch(disp_states(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Description);

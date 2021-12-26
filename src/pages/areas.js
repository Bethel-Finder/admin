import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid, Paper, TextField, Button } from "@mui/material";
import Menu from "../components/Menu";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Link, useHistory } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';


function Dashboard() {
   const history = useHistory()


   const products = [
      { states:"Rivers State", districts:4, areas:12, zones:25, bethels:50 },
      { states: "Rivers State", districts: 4, areas: 12, zones: 25, bethels: 50 },
      { states: "Rivers State", districts: 4, areas: 12, zones: 25, bethels: 50 },
      { states: "Rivers State", districts: 4, areas: 12, zones: 25, bethels: 50 },
      { states:"Rivers State", districts:4, areas:12, zones:25, bethels:50 },
      { states:"Rivers State", districts:4, areas:12, zones:25, bethels:50 },
      { states:"Rivers State", districts:4, areas:12, zones:25, bethels:50 },
      { states:"Rivers State", districts:4, areas:12, zones:25, bethels:50 },
      { states:"Rivers State", districts:4, areas:12, zones:25, bethels:50 },
      { states:"Rivers State", districts:4, areas:12, zones:25, bethels:50 },
      { states:"Rivers State", districts:4, areas:12, zones:25, bethels:50 },
      { states:"Rivers State", districts:4, areas:12, zones:25, bethels:50 },
      { states: "Rivers State", districts: 4, areas: 12, zones: 25, bethels: 50 },
      { states:"Bayelsa State", districts:4, areas:12, zones:25, bethels:50 },
  ];

  const columns = [
    { dataField: 'states', text: 'States', sort: true },
    { dataField: 'districts', text: 'Districts', sort: true },
     { dataField: 'areas', text: 'Areas', sort: true },
     { dataField: 'zones', text: 'Zones', sort: true },
    { dataField: 'bethels', text: 'Bethels', sort: true }
  ];

  const defaultSorted = [{
    dataField: 'states',
    order: 'desc'
  }];

  const pagination = paginationFactory({
    page: 2,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    }
  });

   const { SearchBar, ClearSearchButton } = Search;
   

   const rowEvents = {
      onClick: (e, row, rowIndex) => {
         //  console.log(alert(row.states));
         history.push(`/state-desc/${row.states}`)
      }, 
   };
   



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
                 <b> BCS BETHEL FINDER</b>
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

            
                 
                 <div className="App"  style={{ background: "#78a7a6",marginLeft:"0px",padding:" ",width:"100%", marginLeft:" " }}> 
                     <ToolkitProvider
                     bootstrap4
                     keyField='states'
                     data={products}
                     columns={columns}
                     
                     search
                     >
                     {
                        props => (
                           <div> 
                           <SearchBar { ...props.searchProps } />
                              <ClearSearchButton {...props.searchProps} />
                              <br /><br /><br />
                              
                           <h3>List of all registered states</h3>
                              <BootstrapTable 
                              rowEvents={ rowEvents }
                              defaultSorted={defaultSorted}
                              pagination={pagination} 
                              {...props.baseProps}
                           />
                           </div>
                        )
                     }
                     </ToolkitProvider>

                  </div> <br /><br />
                 
            
          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default Dashboard;

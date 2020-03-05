import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
// import './Style.css';
//import '../App.css';

export default class Dashboard extends Component {
  render() {
    var rows = []
    var keys =[
      'All Interns',
      'Available',
      'Shortlisted',
      'Offered',
      'Placed',
      'InProgress',
      'Completed',
    ]
    for (var i = 0; i < 7; i++) {
      rows.push(
        <Grid key={i} className='dashboard-stats'>
          <Cell col={11}>{keys[i]}</Cell>
          <Cell col={1}>{Math.floor(Math.random() * 100)}</Cell>
          <hr />
        </Grid>
      );
    }
    return (
      <div className='Dashboard'>
        <Grid> 
          <Cell col={12} style={{textAlign:'center', fontWeight:600}}><h4>Interns</h4></Cell>
        </Grid>
        {rows}
        <hr />
        <Grid> 
          <Cell col={12} style={{textAlign:'center', fontWeight:600}}><h4>Internships</h4></Cell>
        </Grid>
        {rows}
      </div>
    );
  }
}

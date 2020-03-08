import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";
import {Typography} from '@material-ui/core'
import FRM_TABLE from "../components/FRM_TABLE";
import FRM_PROCESS_VIEW from "../components/FRM_PROCESS_VIEW";
import FRM_DETAIL_VIEW from "../components/FRM_DETAIL_VIEW";
import { companies } from "../data/companies";


const styles ={
  tabBarStyles: {"justifyContent": "left"}
}

const columns=[
  { title: "Company Name", field: "name" },
  { title: "Email", field: "email" },
  { title: "Phone", field: "phone" },
  { title: "Address", field: "address" },
  { title: "Status", field: "status" }
];

export default class Companies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      title: "Companies",
      entity: null,
      columns: columns
    };
  }

  handleRowClick = (row) => {
    this.setState({
      entity: row,
      activeTab: 2,
    }, 
    () => {
      console.log(this.state.entity, 'after setting entity')
    });
  }

  toggleSection() {
    switch (this.state.activeTab) {
      case 0:
      default:
      return <FRM_TABLE 
      title='Companies'
      onRowClick={this.handleRowClick} 
      columns={this.state.columns}
      data={companies}
    />;
      case 1:
        return <FRM_PROCESS_VIEW />;
      case 2:
        return <FRM_DETAIL_VIEW entity = {this.state.entity}/>;
    }
  }

  render() {
    const {activeTab, entity, title} = this.state;
    return (
      <React.Fragment>
        <Typography variant="h4">{entity == null ? title : entity.name}</Typography>
        <div>
          <Tabs
            activeTab={activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
            tabBarProps= {
              {style: styles.tabBarStyles}
            }
          >
            <Tab>Table View</Tab>
            <Tab>Process View</Tab>
            <Tab>Detail View</Tab>
          </Tabs>
          <section>
            <div className="content">{this.toggleSection()}</div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

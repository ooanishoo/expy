import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";
import {Typography} from '@material-ui/core'
import FRM_TABLE from "../components/FRM_TABLE";
import FRM_PROCESS_VIEW from "../components/FRM_PROCESS_VIEW";
import FRM_DETAIL_VIEW from "../components/FRM_DETAIL_VIEW";
import { contacts } from "../data/contacts";


const styles ={
  tabBarStyles: {"justifyContent": "left"}
}

const columns=[
  { title: "Name", field: "name" },
  { title: "Email", field: "email" },
  { title: "Phone", field: "phone" },
  { title: "University", field: "university" },
  { title: "Status", field: "status" }
];

export default class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      title: "Contacts",
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
      title='Contacts'
      onRowClick={this.handleRowClick} 
      columns={this.state.columns}
      data={contacts}
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

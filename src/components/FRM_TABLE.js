import React, { Component } from "react";
import MaterialTable from "material-table";


export default class FRM_TABLE extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
      title: props.title,
      columns: props.columns,
      data: props.data
    };
  }

  handleRowClick = (evt, selectedRow) => {
    this.setState({ selected: selectedRow }, () => {
      console.log('callback', this.state.selected);
      if(this.props.onRowClick){
        this.props.onRowClick(this.state.selected);
      }

    });
  }

  render() {
    const {title, columns, data} = this.state;
    console.log(this.props);
    return (
      <div>
        <MaterialTable
          title={title}
          columns={columns}
          data={data}
          actions={[
            {
              icon: "add",
              tooltip: "Add " + title,
              isFreeAction: true,
              onClick: event => alert("You want to add a new " + title)
            },
            {
              icon: "remove_red_eye",
              tooltip: "View Details",
              onClick: this.handleRowClick
            },
            {
              icon: "delete",
              tooltip: "Delete Internship",
              onClick: (event, rowData) =>
                alert("You want to delete " + rowData.name)
            }
          ]}
          options={{
            selection: false,
            columnsButton: false,
            rowStyle: rowData => ({
                backgroundColor: (this.state.selected && this.state.selected.tableData.id === rowData.tableData.id) ? '#EEE' : '#FFF'
              })
          }}
          onRowClick={this.handleRowClick}
        ></MaterialTable>
      </div>
    );
  }
}

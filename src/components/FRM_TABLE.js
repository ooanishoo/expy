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
      console.log("callback", this.state.selected);
      if (this.props.onRowClick) {
        this.props.onRowClick(this.state.selected);
      }
    });
  };

  render() {
    const { title, columns, data } = this.state;
    console.log(this.props);
    return (
      <div>
        <MaterialTable
          title={title}
          columns={columns}
          data={data}
          options={{
            selection: false,
            columnsButton: false,
            rowStyle: rowData => ({
              backgroundColor:
                this.state.selected &&
                this.state.selected.tableData.id === rowData.tableData.id
                  ? "#EEE"
                  : "#FFF"
            })
          }}
          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    const data = this.state.data;
                    data.push(newData);
                    this.setState({ data }, () => resolve());
                  }
                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    const data = this.state.data;
                    const index = data.indexOf(oldData);
                    data[index] = newData;
                    this.setState({ data }, () => resolve());
                  }
                  resolve();
                }, 1000);
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    let data = this.state.data;
                    const index = data.indexOf(oldData);
                    data.splice(index, 1);
                    this.setState({ data }, () => resolve());
                  }
                  resolve();
                }, 1000);
              })
          }}
          onRowClick={this.handleRowClick}
        ></MaterialTable>
      </div>
    );
  }
}

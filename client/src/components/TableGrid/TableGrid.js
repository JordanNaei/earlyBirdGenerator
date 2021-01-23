import React, {Component} from "react";

import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-theme-balham.css'


class TableGrid extends Component {
    constructor(props){
        super(props);
        this.state = {
          columnDefs: [
            { headerName: "Make", field: "make", sortable: true, filter: true },
            {
              headerName: "Model",
              field: "model",
              sortable: true,
              filter: true,
            },
            {
              headerName: "Price",
              field: "price",
              sortable: true,
              filter: true,
            },
          ],

          rowData: null,
        };
    }

    render() {
        return(
            <div
             className="ag-theme-balham"
             style={{width: 500, height: 600}}
            >
                <AgGridReact
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}/>
            </div>
        )
    }
}
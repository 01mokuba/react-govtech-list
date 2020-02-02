import React, { Component } from "react";
import Company from "./company";

class Companies extends Component {
  render() {
    return (
      <div>
        {this.props.companies.map(company => (
          <Company key={company.id} company={company} />
        ))}
      </div>
    );
  }
}

export default Companies;

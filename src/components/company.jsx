import React, { Component } from "react";

class Company extends Component {
  render() {
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <a href={this.props.company.official_url}>
            {this.props.company.company_name}
          </a>
          （{this.props.company.founded_year}）
        </div>
        <div className="card-body text-secondary">
          <p className="card-text">{this.props.company.description}</p>
        </div>
      </div>
    );
  }
}

export default Company;

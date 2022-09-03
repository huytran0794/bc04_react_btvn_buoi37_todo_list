import React, { Component } from "react";
import FilterSearch from "./FilterSearch";
import { StyledFilterGroup } from "./styles/FilterGroup";
// import { StyledSelect } from "./styles/SimpleSelect.styled";
export default class FilterGroup extends Component {
  render() {
    console.log("Render filter group");
    return (
      <StyledFilterGroup className="filter-group">
        <FilterSearch />
        {/* <div className="filter-wrapper">
          <StyledSelect name="filter-priority" id="filter-priority">
            <option value="0">All</option>
            <option value="1">Priority 1</option>
            <option value="2">Priority 2</option>
            <option value="2">Priority 3</option>
          </StyledSelect>
        </div> */}
      </StyledFilterGroup>
    );
  }
}

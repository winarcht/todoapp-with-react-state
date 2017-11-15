import React, { Component } from 'react';


import FilterList from './FilterList';

class Footer extends Component {

	render() {
		const { filters, selectedFilter, _onClick } = this.props;

		return (
			<div id="footer">
				
				<FilterList filters={filters} selectedFilter={selectedFilter} _onClick={_onClick} />
			</div>
		);
	}

}

export default Footer;
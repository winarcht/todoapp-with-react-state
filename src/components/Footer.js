import React, { Component } from 'react';

import StatusBar from './StatusBar';
import FilterList from './FilterList';

class Footer extends Component {

	render() {
		const { filters, selectedFilter, _onClick, tasks } = this.props;

		return (
			<div id="footer">
				<StatusBar tasks={tasks} selectedFilter={selectedFilter} />
				<FilterList filters={filters} selectedFilter={selectedFilter} _onClick={_onClick} />
			</div>
		);
	}

}

export default Footer;
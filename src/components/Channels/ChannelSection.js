import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ChannelList from './ChannelList';
import ChannelForm from './ChannelForm';

export class ChannelSection extends Component {
	static propTypes = {
		channels: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
		setChannel: PropTypes.func.isRequired,
		createChannel: PropTypes.func.isRequired,
		activeChannel: PropTypes.shape({}).isRequired,
	};

	render() {
		const { setChannel, channels, createChannel, activeChannel } = this.props;

		return (
			<div className="support card bg-dark text-light">
				<div className="card-header">
					<strong>Channels</strong>
				</div>
				<div className="card-body channels">
					<ChannelList
						activeChannel={activeChannel}
						channels={channels}
						setChannel={setChannel}
					/>
					<ChannelForm createChannel={createChannel} />
				</div>
			</div>
		);
	}
}

export default ChannelSection;

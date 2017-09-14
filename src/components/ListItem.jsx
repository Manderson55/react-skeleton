const React = require("react");
const ListItem = React.createClass({
	render : function(	) {
		return (
			<li>
				<h4>{this.props.ingredient}</h4>
			</li>
		);
	}
});

module.exports = ListItem;
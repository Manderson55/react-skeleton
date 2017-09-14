const React = require("react");
const ListItem = require("./ListItem.jsx");

const ingredients = [{"id":1, "text": "ham"},{"id":2, "text": "cheese"},{"id":3, "text": "potatoes"}];

const List = React.createClass ({
	render: function() {

			const listItems = ingredients.map(function(item){
				return <ListItem key={item.id} ingredient={item.text} />;
			});

			return (<ul>{listItems}</ul>);
	}

});



module.exports = List;
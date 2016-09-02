/*

var app = document.getElementById('app');
app.innerHTML = 'Hello';
*/

var React = required('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
	render:function () {
		return (
			<div> Hello World </div>
		)
	}
});

ReactDOM.render(
	<HelloWorld />,
	document.getElementById('app')
);

var USER_DATA = {
  name: 'Steven Wu',
  username: 'shadeven'
};

var React = require('react');
var ReactDOM = require('react-dom');

var Link = React.createClass({
  render: function() {
    return (
      <span>{this.props.children}</span>
    );
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <Link href={'https://github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    )
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA}/>,
  document.getElementById('app')
);

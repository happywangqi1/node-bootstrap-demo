
import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from './AppBar';

import Next from'./Next.js'

let styles={
  palette: {
  primary1Color: 'pink',
  }
}
class Add extends React.Component {
  getChildContext() {
   return {muiTheme: getMuiTheme(styles)};
 }
  render () {

    return(
      <div>
       <RaisedButton label="Default" />
       <CircularProgress />
       <Next />
       <AppBar />
      </div>
    )

  }
}
Add.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Add;

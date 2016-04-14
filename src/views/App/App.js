import React, { PropTypes } from 'react'
import '../../styles/core.scss'

import AppBar from "material-ui/lib/app-bar"

const App = React.createClass({
  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        {this.props.children}
      </div>
    )
  }
})

export default App

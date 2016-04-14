/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classes from './TwitterLoginComponent.scss'

import { loginWithTwitter } from '../../redux/modules/auth'


type Props = {
  loginWithTwitter: Function,
};

export class TwitterLoginComponent extends React.Component < void, Props, void > {
  static propTypes = {
    loginWithTwitter: PropTypes.func.isRequired,
  };

  render() {
      return ( <button onClick={ this.props.loginWithTwitter }>Login with Twitter</button>)
    }
}

export default connect(undefined, {
  loginWithTwitter
})(TwitterLoginComponent)

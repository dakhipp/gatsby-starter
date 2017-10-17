import React, { Component } from 'react'
import { navigateTo } from "gatsby-link"
import { Menu, Container } from 'semantic-ui-react'

import { isLoggedIn, isAdmin } from '../../utils/validation'

import LoginContainer from '../../containers/loginContainer'
import RegisterContainer from '../../containers/registerContainer'

import { store } from '../../store';

import styles from "./nav.module.css"

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: '',
    }

    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleItemClick(e, { name, to }) {
    this.setState({ activeItem: name });
    navigateTo(to);
  }

  handleLogout(e) {
    e.preventDefault();
    localStorage.clear();
    console.log(this.props);
    this.props.logout();
  }

  componentDidMount() {
    const path = window.location.pathname.split('/');
    let item = '';

    // if root (/), set state to home. else set it to the path name.
    if(path.length === 2) {
      item = 'home';
    } else {
      item = path[1] || ''
    }
    
    this.setState({
      activeItem: item,
    });
  }

  render() {
    const { activeItem } = this.state
    console.log('s ', this.props);
    return (
      <div>
          <Menu pointing secondary className={styles.menu}>
            <Container>
              <Menu.Item 
                name='home'
                to='/'
                active={activeItem === 'home'} 
                onClick={this.handleItemClick} 
              />
              <Menu.Item 
                name='public'
                to='/public/'
                active={activeItem === 'public'} 
                onClick={this.handleItemClick} 
              />
              {
                isLoggedIn(this.props.iam) ?
                  <Menu.Item 
                    name='user'
                    to='/user/'
                    active={activeItem === 'user'} 
                    onClick={this.handleItemClick} 
                  /> : null
              }
              {
                isAdmin(this.props.iam) ? 
                  <Menu.Item 
                    name='admin'
                    to='/admin/'
                    active={activeItem === 'admin'} 
                    onClick={this.handleItemClick} 
                  /> : null
              }
              {
                isLoggedIn(this.props.iam) ?
                  <Menu.Menu position='right'>
                    <Menu.Item 
                      name='logout' 
                      active={activeItem === 'logout'} 
                      onClick={this.handleLogout} 
                    />
                  </Menu.Menu> :
                  <Menu.Menu position='right'>
                    <LoginContainer
                      trigger={
                        <Menu.Item 
                          name='login' 
                          link={false}
                        />
                      }
                    />
                    <RegisterContainer
                      trigger={
                        <Menu.Item 
                          name='register'
                          link={false}
                        />
                      } 
                    />
                  </Menu.Menu>
              }
            </Container>
          </Menu>
      </div>
    )
  }
}
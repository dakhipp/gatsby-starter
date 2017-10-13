import React, { Component } from 'react'
import Link from "gatsby-link"
import { Menu, Container } from 'semantic-ui-react'

import { store } from '../../store';

import styles from "./nav.module.css"

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: location.pathname.split('/')[1] || '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
          <Menu pointing secondary className={styles.menu}>
            <Container>
              <Link to="/">
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
              </Link>
              <Link to="/public/">
                <Menu.Item name='public' active={activeItem === 'public'} onClick={this.handleItemClick} />
              </Link>
              <Link to="/user/">
                <Menu.Item name='user' active={activeItem === 'user'} onClick={this.handleItemClick} />
              </Link>
              <Link to="/admin/">
                <Menu.Item name='admin' active={activeItem === 'admin'} onClick={this.handleItemClick} />
              </Link>
              <Menu.Menu position='right'>
                  { true ?
                      <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} /> :
                      <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
                  }
              </Menu.Menu>
            </Container>
          </Menu>
      </div>
    )
  }
}
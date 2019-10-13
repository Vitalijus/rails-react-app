import React, {Component} from 'react'

class Header extends Component {

render() {
  const header = {
    width: '100%',
    background: '#051830',
    height: '60px',
    display: 'table',
  };

  const logo = {
    padding: '20px',
    display: 'table-cell',
    verticalAlign: 'middle',
    display: 'inline-block',
  };

    return(
      <header style={header}>
        <div className="logo" style={logo}>
          <img src="https://res.cloudinary.com/dhgsrpwf7/image/upload/v1570987839/logo_2x_uarhkg.png" width={"100"} alt={"website logo"} />
        </div>
      </header>
    )
  }
}

export default Header

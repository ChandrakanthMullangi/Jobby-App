import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {BsFillBriefcaseFill} from 'react-icons/bs'

import {AiFillHome} from 'react-icons/ai'

import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="navbar">
      <div className="navbar-sm">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="navbar-logo-sm"
          />
        </Link>
        <ul className="nav-items-sm">
          <Link to="/" className="nav-link">
            <li>
              <AiFillHome className="nav-item-icon" />
            </li>
          </Link>
          <Link to="/jobs" className="nav-link">
            <li>
              <BsFillBriefcaseFill className="nav-item-icon" />
            </li>
          </Link>
        </ul>
        <button
          type="button"
          className="logout-button-sm"
          onClick={onClickLogout}
        >
          <FiLogOut className="nav-item-icon" />
        </button>
      </div>
      <div className="navbar-lg">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="navbar-logo-lg"
          />
        </Link>

        <ul className="nav-items-lg">
          <Link to="/" className="nav-link">
            <li>
              <p className="nav-item"> Home </p>
            </li>
          </Link>
          <Link to="/jobs" className="nav-link">
            <li>
              <p className="nav-item"> Jobs </p>
            </li>
          </Link>
        </ul>

        <button
          type="button"
          className="logout-button-lg"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)

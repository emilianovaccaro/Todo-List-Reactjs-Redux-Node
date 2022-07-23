import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ( props ) => {
  const renderContent = () => {
    switch (props.users) {
      case null:
        return;
      case false:
        return (
            <a href="/auth/google">
              <button className="ui green button">
                <i className="google icon"></i>
                Google Login
              </button>
            </a>
        )

      default:
        return (
            <a href="/api/logout">
              <button className="ui red button">
                <i className="google icon"></i>
                Logout
              </button>
            </a>
        )
    }
  }

  return (
    <nav className=".App-header">
      <div>
          {renderContent()}
      </div>
    </nav>
  );
}


const mapStateToProps = ( state ) => {
  return{
    users: state.users
  };
}

export default connect(mapStateToProps)(Header);

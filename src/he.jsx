import React from 'react';

const App = () => {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <div className="app-header header-shadow">
        <div className="app-header__logo">
          <div className="logo-src"> vg</div>
          <div className="header__pane ml-auto">
            <div>
              <button
                type="button"
                className="hamburger close-sidebar-btn hamburger--elastic"
                data-class="closed-sidebar"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="app-header__mobile-menu">
          <div>
            <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <div className="app-header__menu">
          <span>
            <button
              type="button"
              className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
            >
              <span className="btn-icon-wrapper">
                <i className="fa fa-ellipsis-v fa-w-6"></i>
              </span>
            </button>
          </span>
        </div>
        <div className="app-header__content">
          <div className="app-header-left">
            <div className="search-wrapper">
              <div className="input-holder">
                <input type="text" className="search-input" placeholder="Type to search" />
                <button className="search-icon">
                  <span></span>
                </button>
              </div>
              <button className="close"></button>
            </div>
            <ul className="header-menu nav">
              <li className="nav-item">
                <a href="javascript:void(0);" className="nav-link">
                  <i className="nav-link-icon fa fa-database"></i>
                  Statistics
                </a>
              </li>
              <li className="btn-group nav-item">
                <a href="javascript:void(0);" className="nav-link">
                  <i className="nav-link-icon fa fa-edit"></i>
                  Projects
                </a>
              </li>
              <li className="dropdown nav-item">
                <a href="javascript:void(0);" className="nav-link">
                  <i className="nav-link-icon fa fa-cog"></i>
                  Settings
                </a>
              </li>
            </ul>
          </div>
          <div className="app-header-right">
            <div className="header-btn-lg pr-0">
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left">
                    <div className="btn-group">
                      <a
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="p-0 btn"
                      >
                        <img
                          width="42"
                          className="rounded-circle"
                          src="assets/images/avatars/1.jpg"
                          alt=""
                        />
                        <i className="fa fa-angle-down ml-2 opacity-8"></i>
                      </a>
                      <div
                        tabIndex="-1"
                        role="menu"
                        aria-hidden="true"
                        className="dropdown-menu dropdown-menu-right"
                      >
                        <button type="button" tabIndex="0" className="dropdown-item">
                          User Account
                        </button>
                        <button type="button" tabIndex="0" className="dropdown-item">
                          Settings
                        </button>
                        <h6 tabIndex="-1" className="dropdown-header">
                          Header
                        </h6>
                        <button type="button" tabIndex="0" className="dropdown-item">
                          Actions
                        </button>
                        <div tabIndex="-1" className="dropdown-divider"></div>
                        <button type="button" tabIndex="0" className="dropdown-item">
                          Dividers
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="widget-content-left  ml-3 header-user-info">
                    <div className="widget-heading">User</div>
                    <div className="widget-subheading">VP Product Management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ui-theme-settings">
        <button type="button" id="TooltipDemo" className="btn-open-options btn btn-warning">
          <i className="fa fa-cog fa-w-16"></i>
        </button>
        <div className="theme-settings__inner">
          <div className="scrollbar-container">
            <div className="theme-settings__options-wrapper">
              <h3 className="themeoptions-heading">Layout Options</h3>
              <div className="p-3">
                <ul className="list-group">
                  <li className="list-group-item">
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-3">
                          <div className="switch has-switch switch-container-class" data-class="fixed-header">
                            <div className="switch-animate switch-on">
                              <input type="checkbox" defaultChecked className="switch-input" />
                              <span className="switch-slider"></span>
                            </div>
                          </div>
                        </div>
                        <div className="widget-content-left">
                          <div className="widget-heading">Fixed Header</div>
                          <div className="widget-subheading">Makes the header top fixed, always visible!</div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-3">
                          <div className="switch has-switch switch-container-class" data-class="fixed-sidebar">
                            <div className="switch-animate switch-on">
                              <input type="checkbox" defaultChecked className="switch-input" />
                              <span className="switch-slider"></span>
                            </div>
                          </div>
                        </div>
                        <div className="widget-content-left">
                          <div className="widget-heading">Fixed Sidebar</div>
                          <div className="widget-subheading">Makes the sidebar left fixed, always visible!</div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-3">
                          <div className="switch has-switch switch-container-class" data-class="fixed-footer">
                            <div className="switch-animate switch-off">
                              <input type="checkbox" className="switch-input" />
                              <span className="switch-slider"></span>
                            </div>
                          </div>
                        </div>
                        <div className="widget-content-left">
                          <div className="widget-heading">Fixed Footer</div>
                          <div className="widget-subheading">Makes the app footer bottom fixed, always visible!</div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default App;

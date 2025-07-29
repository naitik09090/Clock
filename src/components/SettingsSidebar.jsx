import React from 'react';

const SettingsSidebar = () => {
  return (
    <div
      className="offcanvas offcanvas-end text-bg-dark"
      tabIndex="-1"
      id="settingsSidebar"
      aria-labelledby="settingsSidebarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="settingsSidebarLabel">Settings</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <p>Theme Settings</p>
        <hr />
        <p>Clock Format</p>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="clockFormat" id="format12" />
          <label className="form-check-label" htmlFor="format12">12-Hour</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="clockFormat" id="format24" />
          <label className="form-check-label" htmlFor="format24">24-Hour</label>
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;

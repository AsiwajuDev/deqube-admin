import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import {
  GeneralSettings,
  AdminSettings,
  EmailNotification,
  PaymentSettings,
  PostSettings,
  RegistrationSettings,
  SecuritySettings,
  SystemSettings,
  UploadSettings,
} from "./settings/Index";
import {
  ListAdmin,
  ListUsers,
  ListAgency,
  ListBanned,
  ListGroups,
  ListOnline,
  ListPages,
} from "./users/Index.js";

const RouterPage = () => {
  return (
    <div>
      {/* <Redirect from="/" to="/dashboard" component={Dashboard} /> */}
      <Route path="/dashboard" name="dashboard" component={Dashboard} />

      {/* Settings Route */}
      <Route path="/settings" name="settings" component={GeneralSettings} />
      <Route
        path="/admin-settings"
        name="admin-settings"
        component={AdminSettings}
      />
      <Route
        path="/notification-settings"
        name="notification-settings"
        component={EmailNotification}
      />
      <Route
        path="/payment-settings"
        name="payment-settings"
        component={PaymentSettings}
      />
      <Route
        path="/post-settings"
        name="post-settings"
        component={PostSettings}
      />
      <Route
        path="/registration-settings"
        name="registration-settings"
        component={RegistrationSettings}
      />
      <Route
        path="/security-settings"
        name="security-settings"
        component={SecuritySettings}
      />
      <Route
        path="/system-settings"
        name="system-settings"
        component={SystemSettings}
      />
      <Route
        path="/upload-settings"
        name="upload-settings"
        component={UploadSettings}
      />

      {/* Users Route */}
      <Route path="/list-admin" name="list-admin" component={ListAdmin} />
      <Route path="/list-agency" name="list-agency" component={ListAgency} />
      <Route path="/list-banned" name="list-banned" component={ListBanned} />
      <Route path="/list-group" name="list-group" component={ListGroups} />
      <Route path="/list-online" name="list-online" component={ListOnline} />
      <Route path="/list-page" name="list-page" component={ListPages} />
      <Route path="/list-user" name="list-user" component={ListUsers} />
    </div>
  );
};

export default RouterPage;
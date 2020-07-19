import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

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
  ListUser,
  ListAgency,
  ListBanned,
  ListGroups,
  ListOnline,
  ListPages,
} from "./users/Index.js";

import {
  UserAds,
  SystemAds,
  AdSettings,
  CreateSystemAds,
} from "./adContent/Index";
import Posts from "./posts/Posts";
import { Reaction, AddReaction } from "./reaction/Index";
import { Emojis, AddEmojis } from "./emojis/Index";
import FollowSuggest from "./followSuggest/FollowSuggest";
import Directory from "./directory/Directory";
import GarbageCollector from "./garbageCollector/GarbageCollector";

const RouterPage = () => {
  return (
    <div>
      {/* Dashboard Route */}
      <Route path="/dashboard" name="dashboard" component={Dashboard} />

      {/* Direcotry Route */}
      <Route path="/directory" name="directory" component={Directory} />

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
      <Route path="/user" name="user" component={ListUser} />
      <Route path="/list-admin" name="list-admin" component={ListAdmin} />
      <Route path="/list-agency" name="list-agency" component={ListAgency} />
      <Route path="/list-banned" name="list-banned" component={ListBanned} />
      <Route path="/list-group" name="list-group" component={ListGroups} />
      <Route path="/list-online" name="list-online" component={ListOnline} />
      <Route path="/list-page" name="list-page" component={ListPages} />
      <Route path="/list-users" name="list-users" component={ListUsers} />

      {/* Posts */}
      <Route path="/posts" name="posts" component={Posts} />

      {/*Ads Route  */}
      <Route path="/ads-settings" name="ads-settings" component={AdSettings} />
      <Route path="/system-ads" name="system-ads" component={SystemAds} />
      <Route path="/user-ads" name="user-ads" component={UserAds} />
      <Route
        path="/create-system-ads"
        name="create-system-ads"
        component={CreateSystemAds}
      />

      {/* Reaction */}
      <Route path="/reaction" name="reaction" component={Reaction} />
      <Route path="/add-reaction" name="add-reaction" component={AddReaction} />

      {/* Emojis */}
      <Route path="/emojis" name="emojis" component={Emojis} />
      <Route path="/add-emojis" name="add-emojis" component={AddEmojis} />

      {/* Follow Suggest */}
      <Route
        path="/follow-suggest"
        name="follow-suggest"
        component={FollowSuggest}
      />

      {/* Garbage Collector */}
      <Route path="/gabbage" name="gabbage" component={GarbageCollector} />
    </div>
  );
};

export default RouterPage;

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
  EditUserAds,
} from "./adContent/Index";
import Posts from "./posts/Posts";
import { Reaction, AddReaction } from "./reaction/Index";
import { Emojis, AddEmojis } from "./emojis/Index";
import FollowSuggest from "./followSuggest/FollowSuggest";
import Directory from "./directory/Directory";
import GarbageCollector from "./garbageCollector/GarbageCollector";
import ListPage from "./users/listPage/ListPage";
import ListGroup from "./users/listGroupPages/ListGroup";
import ListAdminPage from "./users/listAdminPage/ListAdminPage";
import ListAgencyPage from "./users/listAgencyPage/ListAgencyPage";

import { ListEvents, EventCategory, EventDetails } from "./events/Index";
import { CoDEarnings, CoDSettings, UserCoD } from "./contentOnDemand/Index";
import { Points, Payments } from "./qubes/Index";
import Reports from "./reports/Reports";
import Verification from "./verification/Verification";
import MassNotification from "./massNotification/MassNotification";
import AggregateData from "./aggregateData/AggregateData";
import { Earnings, ListSubscribers, Settings } from "./proPackages/Index";

const RouterPage = () => {
  return (
    <div>
      {/* Dashboard Route */}
      <Route path="/dashboard" name="dashboard" component={Dashboard} />

      {/* Direcotry Route */}
      <Route path="/directory" name="directory" component={Directory} />

      {/* Settings Route */}
      <Route
        exact
        path="/settings"
        render={() => <Redirect to="/settings/general-settings" />}
      />

      <Route
        path="/settings"
        render={({ match: { url } }) => (
          <>
            <Route
              path={`${url}/general-settings`}
              component={GeneralSettings}
              exact
            />
            <Route
              path={`${url}/admin-settings`}
              name="admin-settings"
              component={AdminSettings}
            />
            <Route
              path={`${url}/notification-settings`}
              name="notification-settings"
              component={EmailNotification}
            />
            <Route
              path={`${url}/payment-settings`}
              name="payment-settings"
              component={PaymentSettings}
            />
            <Route
              path={`${url}/post-settings`}
              name="post-settings"
              component={PostSettings}
            />
            <Route
              path={`${url}/registration-settings`}
              name="registration-settings"
              component={RegistrationSettings}
            />
            <Route
              path={`${url}/security-settings`}
              name="security-settings"
              component={SecuritySettings}
            />
            <Route
              path={`${url}/system-settings`}
              name="system-settings"
              component={SystemSettings}
            />
            <Route
              path={`${url}/upload-settings`}
              name="upload-settings"
              component={UploadSettings}
            />
          </>
        )}
      />

      {/* Users Route */}
      <Route path="/user" name="user" component={ListUser} />
      <Route path="/page" name="page" component={ListPage} />
      <Route path="/group" name="group" component={ListGroup} />
      <Route path="/agency" name="agency" component={ListAgencyPage} />
      <Route path="/admin" name="admin" component={ListAdminPage} />

      <Route
        exact
        path="/users"
        render={() => <Redirect to="/users/list-users" />}
      />
      <Route
        path="/users"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/list-users`} component={ListUsers} exact />
            <Route
              path={`${url}/list-admin`}
              name="list-admin"
              component={ListAdmin}
            />
            <Route
              path={`${url}/list-agency`}
              name="list-agency"
              component={ListAgency}
            />
            <Route
              path={`${url}/list-banned`}
              name="list-banned"
              component={ListBanned}
            />
            <Route
              path={`${url}/list-group`}
              name="list-group"
              component={ListGroups}
            />
            <Route
              path={`${url}/list-online`}
              name="list-online"
              component={ListOnline}
            />
            <Route
              path={`${url}/list-page`}
              name="list-page"
              component={ListPages}
            />
          </>
        )}
      />

      {/* Posts */}
      <Route path="/posts" name="posts" component={Posts} />
      {/* Events */}
      <Route
        exact
        path="/events"
        render={() => <Redirect to="/events/list-events" />}
      />
      <Route
        path="/event-details"
        name="event-details"
        component={EventDetails}
      />
      <Route
        path="/events"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/list-events`} component={ListEvents} exact />
            <Route path={`${url}/event-category`} component={EventCategory} />
          </>
        )}
      />

      {/*Ads Route  */}
      <Route
        exact
        path="/ads"
        render={() => <Redirect to="/ads/ads-settings" />}
      />
      <Route
        path="/ads"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/ads-settings`} component={AdSettings} exact />
            <Route path={`${url}/system-ads`} component={SystemAds} />
            <Route path={`${url}/user-ads`} component={UserAds} />
          </>
        )}
      />

      <Route
        path="/ads/create-system-ads"
        name="create-system-ads"
        component={CreateSystemAds}
      />
      <Route
        path="/ads/edit-user-ads"
        name="edit-user-ads"
        component={EditUserAds}
      />
      {/*CoD Route  */}
      <Route
        exact
        path="/cod"
        render={() => <Redirect to="/cod/cod-settings" />}
      />
      <Route
        path="/cod"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/cod-settings`} component={CoDSettings} exact />
            <Route path={`${url}/user-cod`} component={UserCoD} />
            <Route path={`${url}/cod-earnings`} component={CoDEarnings} />
          </>
        )}
      />
      {/*Qubes Route  */}
      <Route
        exact
        path="/qubes"
        render={() => <Redirect to="/qubes/points" />}
      />
      <Route
        path="/qubes"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/points`} component={Points} exact />
            <Route path={`${url}/qube-payments`} component={Payments} />
          </>
        )}
      />

      {/*Qubes Route  */}
      <Route
        exact
        path="/package"
        render={() => <Redirect to="/package/settings" />}
      />
      <Route
        path="/package"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/settings`} component={Settings} exact />
            <Route path={`${url}/subscribers`} component={ListSubscribers} />
            <Route path={`${url}/earnings`} component={Earnings} />
          </>
        )}
      />

      {/* Report */}
      <Route path="/reports" component={Reports} />
      {/* Verification */}
      <Route path="/verification" component={Verification} />
      {/* Verification */}
      <Route path="/mass-notification" component={MassNotification} />
      {/* Reaction */}
      <Route path="/reactions/reaction" component={Reaction} />
      <Route
        path="/reactions/add-reaction"
        name="add-reaction"
        component={AddReaction}
      />

      {/* Emojis */}
      <Route path="/emojis/emojis" name="emojis" component={Emojis} />
      <Route
        path="/emojis/add-emojis"
        name="add-emojis"
        component={AddEmojis}
      />

      {/* Follow Suggest */}
      <Route
        path="/follow-suggest"
        name="follow-suggest"
        component={FollowSuggest}
      />
      {/* Aggregate Data */}
      <Route path="/aggregate-data" component={AggregateData} />
      {/* Garbage Collector */}
      <Route path="/gabbage" name="gabbage" component={GarbageCollector} />
    </div>
  );
};

export default RouterPage;

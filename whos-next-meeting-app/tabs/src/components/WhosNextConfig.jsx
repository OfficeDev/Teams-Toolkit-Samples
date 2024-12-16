import React from "react";
import "./App.css";
import { app, pages } from "@microsoft/teams-js";

// Tab configuration page
class WhosNextConfig extends React.Component {
  componentDidMount() {
    app.initialize().then(async () => {
      //  When the user clicks "Save", save the updated configuration
      pages.config.registerOnSaveHandler(async (saveEvent) => {
        const port = window.location.port ? `:${window.location.port}` : '';
        const baseUrl = `https://${window.location.hostname}${port}`;
        await pages.config.setConfig({
          suggestedDisplayName: "Who's next?",
          entityId: "WhosNext",
          contentUrl: baseUrl + "/index.html#/tab",
          websiteUrl: baseUrl + "/index.html#/tab",
        });
        saveEvent.notifySuccess();
      });

      // OK all set up, enable the "save" button
      pages.config.setValidityState(true);
    });
  }

  render() {
    return (
      <div>
        <h1>Tab Configuration</h1>
        <div>
          <br />
          There are no configuration options for the Who's Next tab. Please
          click "Save" to set up your tab.
          <br />
          <br />
          Nothing to see here folks!
        </div>
      </div>
    );
  }
}

export default WhosNextConfig;

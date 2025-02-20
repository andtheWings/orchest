import * as React from "react";

import { MDCButtonReact } from "@orchest/lib-mdc";
import { Layout, useLayout } from "@/components/Layout";
import { useOrchest } from "@/hooks/orchest";
import { useSendAnalyticEvent } from "@/hooks/useSendAnalyticEvent";
import { siteMap } from "@/routingConfig";

const HelpView: React.FC = () => {
  const { state } = useOrchest();

  useSendAnalyticEvent("view load", { name: siteMap.help.path });
  const { setIsOnboardingDialogOpen } = useLayout();

  return (
    <Layout>
      <div className="view-page help-list">
        <h2>Looking for help, or want to know more?</h2>
        <p className="push-down">
          The documentation should get you up to speed, but feel free to get in
          touch through Slack or GitHub for any questions or suggestions.
        </p>

        <div className="mdc-list">
          <a
            className="mdc-list-item"
            href={
              state.config.ORCHEST_WEB_URLS.readthedocs +
              "/getting_started/quickstart.html"
            }
            target="_blank"
            rel="noreferrer"
          >
            <i className="mdc-list-item__graphic" aria-hidden="true">
              <img src="/image/readthedocs.png" width="100%" />
            </i>
            <span className="mdc-list-item__text">Quickstart</span>
          </a>
          <a
            className="mdc-list-item"
            href={state.config.ORCHEST_WEB_URLS.readthedocs}
            target="_blank"
            rel="noreferrer"
          >
            <i className="mdc-list-item__graphic" aria-hidden="true">
              <img src="/image/readthedocs.png" width="100%" />
            </i>
            <span className="mdc-list-item__text">Documentation</span>
          </a>
          <a
            className="mdc-list-item"
            href={state.config.ORCHEST_WEB_URLS.website + "/video-tutorials"}
            target="_blank"
            rel="noreferrer"
          >
            <i className="mdc-list-item__graphic" aria-hidden="true">
              <img src="/image/favicon.png" width="100%" />
            </i>
            <span className="mdc-list-item__text">Video tutorials</span>
          </a>
          <a
            className="mdc-list-item"
            href={state.config.ORCHEST_WEB_URLS.slack}
            target="_blank"
            rel="noreferrer"
          >
            <i className="mdc-list-item__graphic" aria-hidden="true">
              <img src="/image/slack.png" width="100%" />
            </i>
            <span className="mdc-list-item__text">Slack</span>
          </a>
          <a
            className="mdc-list-item"
            href={state.config.ORCHEST_WEB_URLS.github}
            target="_blank"
            rel="noreferrer"
          >
            <i className="mdc-list-item__graphic" aria-hidden="true">
              <img src="/image/github.png" width="100%" />
            </i>
            <span className="mdc-list-item__text">GitHub</span>
          </a>
          <a
            className="mdc-list-item"
            href={state.config.ORCHEST_WEB_URLS.website}
            target="_blank"
            rel="noreferrer"
          >
            <i className="mdc-list-item__graphic" aria-hidden="true">
              <img src="/image/favicon.png" width="100%" />
            </i>
            <span className="mdc-list-item__text">Website</span>
          </a>
        </div>
        <h2 className="push-up">Introduction</h2>
        <MDCButtonReact
          data-test-id="onboarding-open"
          onClick={() => {
            setIsOnboardingDialogOpen(true);
          }}
          label="Show onboarding"
          icon="play_arrow"
        />
      </div>
    </Layout>
  );
};

export default HelpView;

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return {
    title: "Events - NYC Community Photowalk",
    description: "Find future NYC community photowalks.",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Events() {
  return (
    <div id="wrap">
      <h2>next event</h2>
      <div className="poster">
        <a href="/images/pw-22-09-11-1.jpeg">
          <img
            src="/images/pw-22-09-11-1.jpeg"
            alt="Community Photowalk poster #1"
          />
        </a>
      </div>
      <p className="caption">
        Poster design by{" "}
        <a href="https://www.instagram.com/phaseoff/">@phaseoff</a>.
      </p>

      <h2>future events</h2>

      <iframe
        title="Calendar"
        src="https://calendar.google.com/calendar/embed?height=200&amp;wkst=1&amp;bgcolor=%23bdd630&amp;ctz=America%2FNew_York&amp;mode=AGENDA&amp;showTitle=0&amp;showNav=0&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=1&amp;showTz=1&amp;src=OW5qcnFlbXM0N2F1Nzhsa2M0dWw5Y2l2b2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23EF6C00"
        style={{ border: "0px", width: "100%" }}
        height="300"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}

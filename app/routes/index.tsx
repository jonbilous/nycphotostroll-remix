import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return {
    title: "NYC Community Photowalk",
    description: "A meetup for and by the NYC-area photography community.",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <div id="wrap">
      <h1>- NYC Community Photowalk</h1>
      <div className="row" style={{ margin: "2em 0" }}>
        <img
          src="/images/group-1.jpg"
          alt="Group photo from photowalk number 1"
          className="featured"
        />
      </div>

      <p className="next">Next photowalk:</p>
      <p className="next">Governors Island</p>
      <p className="next">September 11, 2022 at 3pm</p>
      <p className="next">–</p>
      <p className="next">Meeting at:</p>
      <p className="next">
        <a
          target="psmap"
          href="https://www.google.com/maps?hl=en&amp;q=Battery+Maritime+Building+Slip+5,+10+South+St,+New+York,+NY+10005,+USA"
        >
          Battery Maritime Building
        </a>{" "}
        in Manhattan.
      </p>
    </div>
  );
}

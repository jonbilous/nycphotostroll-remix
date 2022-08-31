import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return {
    title: "About - NYC Community Photowalk",
    description: "Find future NYC community photowalks.",
  };
};

// https://remix.run/guides/routing#index-routes
export default function About() {
  return (
    <div id="wrap">
      <h2>About</h2>
      <p>
        <strong>NYC Community Photowalk</strong> (
        <a href="https://www.instagram.com/nycphotostroll/">@nycphotostroll</a>)
        is a meetup for New York City-area photographers. We organize our own
        photowalks around NYC, support each other's work, and stay in touch via
        group chat.
      </p>
      <p>
        This meetup was formed in June 2022, by and for NYC-area photographers.
        We're open and inclusive to all. Feel free to attend one of{" "}
        <a href="/events">our events</a>, and bring your friends!
      </p>

      <h2>How it works</h2>
      <p>
        The focus of our group is a <a href="/events">bi-weekly photowalk</a>{" "}
        that usually happens on a weekend, somewhere in the city. Here, we get
        to meet each other, have a casual walk with photos along the way, and
        grab a drink at the end.
      </p>
      <p>
        Anyone who attends a photowalk is welcome to join our WhatsApp group
        chat. This is a place for us all to hang out between events, as well as
        coordinate real-life hang outs, such as critique nights, gallery visits,
        etc.
      </p>
      <p>
        Our Instagram account,{" "}
        <a href="https://www.instagram.com/nycphotostroll/">@nycphotostroll</a>,
        is where you'll find a shareable poster for our next event, plus photos
        from our walks and members of the group.
      </p>
    </div>
  );
}

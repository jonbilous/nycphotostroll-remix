import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return {
    title: "Archive - NYC Community Photowalk",
    description: "Find future NYC community photowalks.",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Archive() {
  return (
    <div id="wrap" className="wide">
      <h3>№ 5. Governors Island, September 11, 2022</h3>
      <div className="row single">
        <div className="dropboxes">
          <a href="/images/pw-22-09-11-1.jpeg">
            <img
              src="/images/pw-22-09-11-1.jpeg"
              alt="Community Photowalk poster #1"
            />
          </a>
        </div>
      </div>
      <p className="caption">
        Poster design by{" "}
        <a href="https://www.instagram.com/phaseoff/">@phaseoff</a>.
      </p>

      <h3>№ 4. Tribeca Park, August 28, 2022</h3>
      <div className="row single">
        <div className="dropboxes">
          <a href="/images/pw-22-08-28-1.jpg">
            <img
              src="/images/pw-22-08-28-1.jpg"
              alt="Community Photowalk poster #1"
            />
          </a>
        </div>
      </div>
      <p className="caption">
        Poster design by{" "}
        <a href="https://www.instagram.com/alamtahmid_/">@alamtahmid_</a>.
      </p>

      <h3>№ 3. Nathan's Coney Island, August 14, 2022</h3>
      <div className="row single">
        <div className="dropboxes">
          <a href="/images/pw-22-08-14-1.jpg">
            <img
              src="/images/pw-22-08-14-1.jpg"
              alt="Community Photowalk poster #1"
            />
          </a>
        </div>
      </div>
      <p className="caption">
        Poster design by{" "}
        <a href="https://www.instagram.com/maylukstudio/">@maylukstudio</a>.
      </p>

      <h3>№ 2. Grand Army Plaza, July 31, 2022</h3>
      <div className="row thirds">
        <div className="dropboxes">
          <a href="/images/pw-22-07-31-3.jpg">
            <img
              src="/images/pw-22-07-31-3.jpg"
              alt="Community Photowalk poster #1"
            />
          </a>
        </div>
        <div className="dropboxes">
          <a href="/images/pw-22-07-31-4.jpg">
            <img
              src="/images/pw-22-07-31-4.jpg"
              alt="Community Photowalk poster #2"
            />
          </a>
        </div>
        <div className="dropboxes">
          <a href="/images/pw-22-07-31-5.jpg">
            <img
              src="/images/pw-22-07-31-5.jpg"
              alt="Community Photowalk poster #3"
            />
          </a>
        </div>
      </div>
      <p className="caption">
        Poster design by{" "}
        <a href="https://www.instagram.com/35mmfilmroll/">@35mmfilmroll</a>.
      </p>
      <p className="caption">
        Poster designs by{" "}
        <a href="https://www.instagram.com/oscar.furtado/">@oscar.furtado</a>.
      </p>

      <h3>№ 1. Kimlau Square, July 17, 2022</h3>
      <div className="row fifths">
        <a href="/images/pw-22-07-17-1.jpg">
          <img
            src="/images/pw-22-07-17-1.jpg"
            alt="Community Photowalk poster #1"
          />
        </a>
        <a href="/images/pw-22-07-17-2.jpg">
          <img
            src="/images/pw-22-07-17-2.jpg"
            alt="Community Photowalk poster #2"
          />
        </a>
        <a href="/images/pw-22-07-17-3.jpg">
          <img
            src="/images/pw-22-07-17-3.jpg"
            alt="Community Photowalk poster #3"
          />
        </a>
        <a href="/images/pw-22-07-17-4.jpg">
          <img
            src="/images/pw-22-07-17-4.jpg"
            alt="Community Photowalk poster #4"
          />
        </a>
        <a href="/images/pw-22-07-17-5.jpg">
          <img
            src="/images/pw-22-07-17-5.jpg"
            alt="Community Photowalk poster #5"
          />
        </a>
      </div>
      <p className="caption">
        Poster designs by{" "}
        <a href="https://www.instagram.com/oscar.furtado/">@oscar.furtado</a>.
      </p>
    </div>
  );
}

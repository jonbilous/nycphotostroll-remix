import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import GlobalCss from "./styles/global.css";
import { useQuery, QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({ defaultOptions: {} });

export const loader: LoaderFunction = async () => {
  const viewCount = await fetch(
    "https://count.baer.works/hit?p=photostroll.nyc"
  ).then((res) => res.text());

  return { viewCount };
};

// https://remix.run/api/conventions#links
export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://cdn.writeas.net/css/fonts.4ce1882.css",
    },
    { rel: "stylesheet", href: GlobalCss },
  ];
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <Document>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Outlet />
        </Layout>
      </QueryClientProvider>
    </Document>
  );
}

// https://remix.run/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <Document title="Error!">
      <QueryClientProvider client={queryClient}>
        <Layout>
          <div>
            <h1>There was an error</h1>
            <p>{error.message}</p>
            <hr />
            <p>
              Hey, developer, you should replace this with what you want your
              users to see.
            </p>
          </div>
        </Layout>
      </QueryClientProvider>
    </Document>
  );
}

// https://remix.run/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <h1>
            {caught.status}: {caught.statusText}
          </h1>
          {message}
        </Layout>
      </QueryClientProvider>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const viewCountQuery = useQuery("viewCount", () =>
    fetch("https://count.baer.works/hit?p=photostroll.nyc").then((res) =>
      res.text()
    )
  );

  return (
    <div>
      <Navigation />
      {children}
      <Footer viewCount={viewCountQuery.data ?? "0"} />
    </div>
  );
}

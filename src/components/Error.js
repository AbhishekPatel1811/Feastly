import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-6xl font-bold tracking-tight text-zinc-800/95 sm:text-7xl">
          404
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Oops, it looks like the page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 shadow-sm transition-colors hover:bg-zinc-700/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}>
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;

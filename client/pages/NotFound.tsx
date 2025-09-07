import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-foreground/70">Oops! Page not found</p>
        <a href="/" className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

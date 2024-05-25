import { useRoute, Link } from "react-router5";
import { BackButton } from "@twa-dev/sdk/react";

export default function App() {
  const { route } = useRoute();
  return (
    <>
      <nav>
        <Link routeName="home">Home</Link> |{" "}
        <Link routeName="settings">Settings</Link> |{" "}
        <Link routeName="about">About</Link>
      </nav>
      <main>
        {route.name === "home" && <h1>Home</h1>}
        {route.name === "settings" && (
          <>
            <BackButton />
            <h1>Settings</h1>
          </>
        )}
        {route.name === "about" && (
          <>
            <BackButton />
            <h1>About</h1>
          </>
        )}
      </main>
    </>
  );
}


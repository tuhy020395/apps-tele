import React, { useEffect, useState } from 'react';
import { useRoute, Link } from "react-router5";
import { BackButton } from "@twa-dev/sdk/react";
import { TonConnectUIProvider, useTonConnectUI } from '@tonconnect/ui-react';
import Main from './components/main/Main';
import IdoHome from './pages/ido';
import DetailsIdo from './pages/ido/details';

export default function App() {
  const { route } = useRoute();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, []);

  return (
    <>
          {loading ?
              <>
                  <div className="main-loading">
                      <div className="container">
                          <div className="loading-ani">
                              <span className="loader"></span>
                          </div>
                      </div>
                  </div>
              </>
              :
              <>
                  <TonConnectUIProvider manifestUrl="https://dev.bscstation.finance/manifestTon.json">
                      <div className="App">
                          <Main>
                              {/* <Routes>
                                    <Route path="/" element={<IdoHome />} />
                                    <Route path="/details" element={
                                        <>
                                            <BackButton />
                                            <DetailsIdo />
                                        </>
                                    }
                                    />
                                </Routes> */}
                                {/* <nav>
                                    <Link routeName="home">Home</Link> |{" "}
                                    <Link routeName="settings">Settings</Link> |{" "}
                                    <Link routeName="about">About</Link>
                                </nav> */}
                                <main>
                                    {route.name === "home" && <IdoHome />}
                                    {route.name === "details" && (
                                        <>
                                            <BackButton />
                                            <DetailsIdo />
                                        </>
                                    )}
                                </main>
                          </Main>
                      </div>
                  </TonConnectUIProvider>
              </>
          }
    </>
  );
}


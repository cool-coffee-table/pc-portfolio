import React, { Suspense } from "react";
import "./App.css";
import LockScreen from "./components/LockScreen";
import { showLockScreenAtom } from "./atoms/LockScreenAtom";
import { useRecoilState } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = React.lazy(() => import("./components/Home"));

export default function App() {
  const [showLockScreen, setShowLockScreen] =
    useRecoilState(showLockScreenAtom);

  return (
    <>
      <ToastContainer />
      <LockScreen />
      <Suspense
        fallback={<div className="h-screen w-screen bg-[#242424]"></div>}
      >
        <Home />
      </Suspense>{" "}
    </>
  );
}

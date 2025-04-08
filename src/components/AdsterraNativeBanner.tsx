import { useEffect } from "react";

const AdsterraNativeBanner = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl26324472.profitableratecpm.com/5b23aa2ecceb784acac247b10e3ebb7d/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    document.getElementById("adsterra-container")?.appendChild(script);
  }, []);

  return (
    <div id="adsterra-container" className="my-6">
      <div id="container-5b23aa2ecceb784acac247b10e3ebb7d" />
    </div>
  );
};

export default AdsterraNativeBanner;
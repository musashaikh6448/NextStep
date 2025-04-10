import { useEffect } from "react";

const AdsterraNativeBanner = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl26324472.profitableratecpm.com/5b23aa2ecceb784acac247b10e3ebb7d/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    const container = document.getElementById("adsterra-script-container");
    if (container) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 my-10">
      <div className="bg-gradient-to-r from-pink-100 via-yellow-100 to-purple-100 p-6 rounded-2xl shadow-xl border border-yellow-400">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-extrabold text-gray-800">
            🧃 We don’t like ads either…
          </h2>
          <p className="text-sm mt-2 text-gray-600">
            …but this one feeds our interns 🍜 (and keeps the lights on 💡)
          </p>
        </div>
        <div
          id="adsterra-script-container"
          className="flex justify-center items-center"
        >
          <div id="container-5b23aa2ecceb784acac247b10e3ebb7d" />
        </div>
      </div>
    </div>
  );
};

export default AdsterraNativeBanner;

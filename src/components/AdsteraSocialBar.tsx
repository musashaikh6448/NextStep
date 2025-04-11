import { useEffect, useState } from "react";

const AdsteraSocialBar = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl26348105.profitableratecpm.com/60/f2/9c/60f29ccd206750ed70a4a4fd6f77bddc.js";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      setIsLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]">
      {isLoaded && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-2 rounded-xl shadow-lg text-sm animate-bounce">
          🪄 Magic Ads Activated — help us buy more coffee ☕
        </div>
      )}
    </div>
  );
};

export default AdsteraSocialBar;

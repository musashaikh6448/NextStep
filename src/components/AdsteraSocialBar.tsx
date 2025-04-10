import { useEffect } from "react";

const AdsteraSocialBar = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl26348105.profitableratecpm.com/60/f2/9c/60f29ccd206750ed70a4a4fd6f77bddc.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; 
};

export default AdsteraSocialBar;

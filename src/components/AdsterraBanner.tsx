import { useEffect } from "react";

const AdsterraBanner = () => {
  useEffect(() => {
    // 1. Create config script tag with atOptions
    const configScript = document.createElement("script");
    configScript.type = "text/javascript";
    configScript.innerHTML = `
      atOptions = {
        'key' : '2729d19a68371ae7bfdeb38ae2a2f0aa',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;

    // 2. Create the external invoke.js script
    const adScript = document.createElement("script");
    adScript.type = "text/javascript";
    adScript.src = "//www.highperformanceformat.com/2729d19a68371ae7bfdeb38ae2a2f0aa/invoke.js";
    adScript.async = true;

    const container = document.getElementById("ad-container-300x250");
    if (container) {
      container.appendChild(configScript);
      container.appendChild(adScript);
    }

    return () => {
      container?.removeChild(configScript);
      container?.removeChild(adScript);
    };
  }, []);

  return (
    <div className="my-8 p-4 bg-gray-100 dark:bg-gray-800 border border-dashed border-gray-300 rounded-2xl shadow-md text-center">
      <div className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
        👀 Ad zone! We need pizza money 🍕💸
      </div>
      <div
        id="ad-container-300x250"
        className="w-[300px] h-[250px] mx-auto"
      />
    </div>
  );
};

export default AdsterraBanner;

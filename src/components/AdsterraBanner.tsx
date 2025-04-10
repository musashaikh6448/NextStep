import { useEffect } from "react";

const AdsterraBanner = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//www.highperformanceformat.com/2729d19a68371ae7bfdeb38ae2a2f0aa/invoke.js";
        script.async = true;

        const container = document.getElementById("ad-container-300x250");
        if (container) {
            container.appendChild(script);
        }
    }, []);

    return (
        <div className="my-8 p-4 bg-gray-100 dark:bg-gray-800 border border-dashed border-gray-300 rounded-2xl shadow-md text-center">
            <div className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
                👀 Ad zone! We need pizza money 🍕💸
            </div>
            <div
                id="ad-container-300x250"
                className="w-[300px] h-[250px] mx-auto"
            >
                {/* Script will render ad here */}
            </div>
        </div>
    );
};

export default AdsterraBanner;

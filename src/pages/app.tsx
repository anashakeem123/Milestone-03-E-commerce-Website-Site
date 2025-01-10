import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Check if window.dataLayer is defined, else initialize it
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    // Function to push data to the dataLayer
    function gtag() {
      window.dataLayer.push(arguments);
    }

    // Load the Google Analytics script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-VSJZDJMCMY";
    document.head.appendChild(script1);

    script1.onload = () => {
      // Initialize Google Analytics after the script is loaded
      gtag("js", new Date());
      gtag("config", "G-VSJZDJMCMY");
    };

    return () => {
      // Clean up: Remove the script from the DOM
      document.head.removeChild(script1);
    };
  }, []);

  return <div>Your App</div>;
}

export default App;

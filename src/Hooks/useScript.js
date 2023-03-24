import { useEffect } from "react";

export const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    document.body.appendChild(script);
    console.log(document.body);
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

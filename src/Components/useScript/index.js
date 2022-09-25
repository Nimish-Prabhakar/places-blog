import { useEffect } from 'react';

const useScript = (url, reference) => {
  useEffect(() => {
    const script = document.createElement('script');

    const parentDiv = document.getElementById(`${reference}`).parentNode;

    const sp2 = document.getElementById(`${reference}`);

    script.src = url;
    script.async = true;

    parentDiv.insertBefore(script, sp2);

    return () => {
      parentDiv.removeChild(script);
    };
  }, [url]);
};

export default useScript;

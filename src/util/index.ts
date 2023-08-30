import { useEffect, useState } from "react";

export const useClientType = () => {
  const [isWX, setIsWX] = useState(false);
  const [isPC, setIsPC] = useState(false);
  const [isH5, setIsH5] = useState(false);
  useEffect(() => {
    const ua = window.navigator.userAgent;
    if (/(micromessenger)/i.test(ua)) {
      setIsWX(true);
    } else {
      const H5clientRegular =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      if (H5clientRegular.test(ua)) {
        setIsH5(true);
      } else {
        setIsPC(true);
      }
    }
  }, []);
  return { isWX, isPC, isH5 };
};

export const useMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  return mounted;
};

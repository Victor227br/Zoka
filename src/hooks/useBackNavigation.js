import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useBackNavigation = (fallbackPath = "/") => {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    if (location.key === "default") {
      navigate(fallbackPath, { replace: true });
      return;
    }

    navigate(-1);
  }, [fallbackPath, location.key, navigate]);

  return goBack;
};

import React, { createContext, useCallback, useState } from "react";
import { Snackbar } from "./Snackbar";

type SnackbarOptions = {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  actionLabel?: string;
  onActionPress?: () => void;
  duration?: number;
  position?: "top" | "bottom";
};

type SnackbarContextType = {
  showSnackbar: (options: SnackbarOptions) => void;
};

export const SnackbarContext = createContext<SnackbarContextType>({
  showSnackbar: () => {},
});

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [snackbar, setSnackbar] = useState<SnackbarOptions | null>(null);

  const showSnackbar = useCallback((options: SnackbarOptions) => {
    setSnackbar({ ...options });
  }, []);

  const handleClose = () => {
    setSnackbar(null);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {snackbar && <Snackbar {...snackbar} onClose={handleClose} />}
    </SnackbarContext.Provider>
  );
};

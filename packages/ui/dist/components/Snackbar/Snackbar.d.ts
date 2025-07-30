import React from "react";
type SnackbarProps = {
    message: string;
    type?: "success" | "error" | "info" | "warning";
    actionLabel?: string;
    onActionPress?: () => void;
    duration?: number;
    onClose?: () => void;
    position?: "top" | "bottom";
};
export declare const Snackbar: React.FC<SnackbarProps>;
export {};

import React from "react";
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
export declare const SnackbarContext: React.Context<SnackbarContextType>;
export declare const SnackbarProvider: React.FC<{
    children: React.ReactNode;
}>;
export {};

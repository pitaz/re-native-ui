export declare const useSnackbar: () => {
    showSnackbar: (options: {
        message: string;
        type?: "success" | "error" | "info" | "warning";
        actionLabel?: string;
        onActionPress?: () => void;
        duration?: number;
        position?: "top" | "bottom";
    }) => void;
};

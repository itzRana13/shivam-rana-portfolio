import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
    size?: "sm" | "md" | "lg";
    text?: string;
}

const LoadingSpinner = ({ size = "md", text }: LoadingSpinnerProps) => {
    const sizeClasses = {
        sm: "h-4 w-4",
        md: "h-8 w-8",
        lg: "h-12 w-12"
    };

    return (
        <div className="flex flex-col items-center justify-center gap-2 p-4">
            <Loader2 className={`${sizeClasses[size]} animate-spin text-primary`} />
            {text && (
                <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
            )}
        </div>
    );
};

export default LoadingSpinner;

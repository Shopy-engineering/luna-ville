
import React from "react";
import { cn } from "@/lib/utils";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "link";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth = false, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
          {
            "bg-luna-ville-600 text-white hover:bg-luna-ville-700": variant === "primary",
            "border border-luna-ville-600 text-luna-ville-600 hover:bg-luna-ville-50": variant === "outline",
            "underline-offset-4 hover:underline text-luna-ville-600": variant === "link",
            "h-9 px-4 py-2 text-sm": size === "sm",
            "h-10 px-6 py-2": size === "md",
            "h-12 px-8 py-3 text-lg": size === "lg",
            "w-full": fullWidth,
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };

import { cn } from "@/lib/utils";
import * as React from "react";

export function TypographyH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export function TypographyH4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}

export function TypographyP({ children }: { children: React.ReactNode }) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}
export interface TypographyH2Props
  extends React.HTMLAttributes<HTMLDivElement> {}

export const TypographyH2 = React.forwardRef<HTMLDivElement, TypographyH2Props>(
  ({ className, ...props }, ref) => {
    return (
      <h2
        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
        ref={ref}
        {...props}
      />
    );
  }
);
TypographyH2.displayName = "TypographyH2";

export interface TypographyH1Props
  extends React.HTMLAttributes<HTMLDivElement> {}

export const TypographyH1 = React.forwardRef<HTMLDivElement, TypographyH1Props>(
  ({ className, ...props }, ref) => {
    return (
      <h1
        className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
        ref={ref}
        {...props}
      />
    );
  }
);
TypographyH1.displayName = "TypographyH1";

export interface TypographyLargeProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const TypographyLarge = React.forwardRef<
  HTMLDivElement,
  TypographyLargeProps
>(({ className, ...props }, ref) => {
  return <div className={cn("text-lg font-semibold", className)} ref={ref} {...props} />;
});

TypographyLarge.displayName = "TypographyLarge";

export interface TypographySmallProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export const TypographySmall = React.forwardRef<
  HTMLDivElement,
  TypographySmallProps
>(({ className, ...props }, ref) => {
  return (
    <div className="text-sm font-medium leading-none" ref={ref} {...props} />
  );
});
TypographySmall.displayName = "TypographySmall";

export interface TypographyMutedProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export const TypographyMuted = React.forwardRef<
  HTMLDivElement,
  TypographyMutedProps
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn("text-muted-foreground", className)}
      ref={ref}
      {...props}
    />
  );
});
TypographyMuted.displayName = "TypographyMuted";

export interface TypographyListProps
  extends React.HTMLAttributes<HTMLUListElement> {}
export const TypographyList = React.forwardRef<
  HTMLUListElement,
  TypographyListProps
>(({ className, ...props }, ref) => {
  return (
    <ul
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
      ref={ref}
      {...props}
    />
  );
});
TypographyList.displayName = "TypographyList";

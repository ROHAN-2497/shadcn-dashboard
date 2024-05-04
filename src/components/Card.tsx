import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React, { ReactElement } from "react";

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  description: string;
};

export default function Card(props: CardProps): ReactElement {
  return (
    <CardContent>
      <section>
        {/* label */}
        <p>{props.label}</p>
        {/*  icon */}
        <props.icon />
      </section>
      <section>
        <h2>{props.amount}</h2>
      </section>
      <section>
        <h2>{props.description}</h2>
      </section>
    </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
        props.className
      )}
    />
  );
}

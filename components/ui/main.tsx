import { log } from "console";
import { Session } from "next-auth";
import { ReactNode } from "react";

export default function Main({
  session,
  children,
}: {
  session: Session | null;
  children: ReactNode;
}) {
  return <main className="pt-10">{children}</main>;
}

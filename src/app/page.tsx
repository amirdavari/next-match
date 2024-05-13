'use client'
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-red-500 font-semibold">Hello App!</h1>
      <Button variant="bordered" color="primary" as={Link} href="/members">Go to member page</Button>
    </div>
  );
}

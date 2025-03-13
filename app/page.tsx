import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Next.js + TypeScript</h1>
      <Button>Click me!</Button>
      <Link href="/editor">editor</Link>
    </div>
  );
}

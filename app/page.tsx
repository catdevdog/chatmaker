import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Next.js + TypeScript</h1>
      <Image src="/nextjs.png" alt="Next.js" width={200} height={200} />
    </div>
  );
}

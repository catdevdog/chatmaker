export default function EditorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="text-black h-full">{children}</div>;
}

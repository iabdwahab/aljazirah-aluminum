// This root layout exists only to provide the required html/body shell.
// All actual content is rendered under app/[locale]/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

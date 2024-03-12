export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen justify-center items-center max-w-md  m-auto">
      {children}
    </main>
  );
}

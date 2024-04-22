export default function PeopleDetailsLayout({
  preview,
  children,
}: React.PropsWithChildren<{ preview: React.ReactNode }>) {
  return (
    <>
      {preview}
      {children}
    </>
  );
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div className="flex-1 w-full flex flex-col mwx-w-6xl mx-auto">
            {children}
        </div>
    )
  }
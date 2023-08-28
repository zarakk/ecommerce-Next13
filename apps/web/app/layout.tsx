import "ui/styles.css";
import StoreContextProvider from "./context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreContextProvider>{children}</StoreContextProvider>
      </body>
    </html>
  );
}

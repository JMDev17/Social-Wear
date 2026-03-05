import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { CartProvider } from "@/context/CartContext";
import ThemeProvider from "@/providers/ThemeProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Social Wear | Elegância Redefinida",
  description: "Alfaiataria de luxo e roupas sociais masculinas de alta qualidade. Experiência de moda sofisticada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${cormorant.variable} ${outfit.variable}`}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

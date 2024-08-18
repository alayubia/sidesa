import { Inter } from "next/font/google";
import { MantineProvider } from '@mantine/core';

import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/tiptap/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import "mantine-react-table/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/charts/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Desa Sitimerto",
  description: "Sistem Informasi Desa Sitimerto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

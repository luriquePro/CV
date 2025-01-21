import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { title: "Luiz Henrique - Curriculo", description: "Curriculo de Luiz Henrique, um desenvolvedor Backend" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br">
			<body className={inter.className}>{children}</body>
		</html>
	);
}

import { Geist } from "next/font/google";
import FrontMenuLayout from "./layout/frontmenu";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // 新しいレイアウトを利用する
  return <FrontMenuLayout>{children}</FrontMenuLayout>;
}
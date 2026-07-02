/**
 * 演習 5-5 ナビゲーションメニューで新しい共通ページを作成する
 * メニューのレイアウト
 */
import "@/app/globals.css"; // CSSを読み込む
import Header from "./header";
import Footer from "./footer";
// 💡 レイアウトコンポーネント
export default function FrontMenuLayout({ children }: { children: React.ReactNode }) {
  return (
    // 💡 <html>タグから記述します
    <html lang="ja">
      {/* 💡 画面全体を縦並び（flex-col）にし、最低でも画面の高さ（min-h-screen）を確保する */}
      <body className="flex flex-col min-h-screen bg-slate-50 font-sans">

        {/* === ここからヘッダー === */}
        {/* このHeaderコンポーネントの中で bg-green-100 を使用しています */}
        <Header />
        {/* === ここまで：ヘッダー === */}

        {/* === ここに各ページのコンテンツ (page.tsx) が入る === */}
        {/* 💡 flex-1 をつけることで、メイン画面が「余った空間をすべて埋める」ように伸びる */}
        {/* これにより、中身が少なくてもフッターが強制的に一番下まで押し出されます */}
        <main className="flex-1 container mx-auto p-4 md:p-8">
          {children}
        </main>

        {/* === ここからフッター === */}
        {/* ヘッダーと同じ明るいグリーン（bg-green-100）で統一感を出しています */}
        <Footer />
        {/* === ここまで：フッター === */}
      </body>
    </html>
  );
}
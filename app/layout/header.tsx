/**
 * 演習 5-5 ナビゲーションメニューで新しい共通ページを作成する
 * メニューのヘッダー
 */
"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <header className="border-b border-green-200 bg-green-100 p-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">

        <h1 className="text-xl font-bold text-green-900">
          <Link href="/">図書管理システム</Link>
        </h1>

        <NavigationMenu>
          {/* 💡 項目が増えたため、スマホなどの狭い画面でも綺麗に折り返せるよう flex-wrap を付けておくと安全です */}
          <NavigationMenuList className="flex flex-wrap justify-end">



            {/* メニュー4：図書キーワード検索 */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-green-900 bg-transparent hover:bg-green-200`}>
                <Link href="/books">図書検索</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* メニュー5：図書登録 */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-green-900 bg-transparent hover:bg-green-200`}>
                <Link href="/books/new">図書登録</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* メニュー6：商品変更 */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-green-900 bg-transparent hover:bg-green-200`}>
                <Link href="/api/products/update">図書変更</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* メニュー6：商品変更 */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} text-green-900 bg-transparent hover:bg-green-200`}>
                <Link href="/api/products/delete">図書削除</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
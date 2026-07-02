import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function MenuPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">

      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">トップメニュー</h1>
        <p className="text-gray-500">操作したいメニューを選択してください</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">



        {/* メニュー4：商品キーワード検索 */}
        <Link href="/books">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>図書検索</CardTitle>
            <CardDescription>登録されている図書をキーワードで検索します</CardDescription>
          </CardHeader>
        </Card>
        </Link>

        {/* メニュー5：商品登録 */}
        <Link href="/books/new">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>図書の登録</CardTitle>
            <CardDescription>新しい図書をシステムに登録します</CardDescription>
          </CardHeader>
        </Card>
        </Link>

        {/* メニュー6：商品変更 */}
        <Link href="/api/products/update">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>図書の変更</CardTitle>
            <CardDescription>登録済みの図書情報を変更・更新します</CardDescription>
          </CardHeader>
        </Card>
        </Link>

        {/* メニュー6：商品変更 */}
        <Link href="/api/products/update">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>
              図書の削除
              </CardTitle>
            <CardDescription>登録済みの図書情報を削除します</CardDescription>
          </CardHeader>
        </Card>
        </Link>

            {/* <Image
            src="/trashbox.jpeg"
            alt="trashbox"
            width={30}
            height={30}
            // className="text-right" 
            /> */}


      </div>
    </div>
  );
}
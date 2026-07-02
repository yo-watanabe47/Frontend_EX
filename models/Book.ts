import { BookCategory } from "./BookCategory";
import { BookStock } from "./BookStock";
/**
 * 演習 6-2 データアクセスとサービスを実装する
 * 商品インターフェイス
 */
export interface Book {
    bookUuid: string;        // 商品Id(UUID)
    title: string;               // 商品名
    author: string;              // 著者
    category: BookCategory;  // 商品カテゴリ
    stock: BookStock;        // 商品在庫数
}
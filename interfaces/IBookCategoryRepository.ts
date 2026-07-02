import { BookCategory } from "@/models/BookCategory";
/**
 * 演習 8-8 リポジトリとDTOインターフェイスを実装する
 * 商品カテゴリリポジトリインターフェース
 */
export interface IBookCategoryRepository {
    /**
     * すべての商品カテゴリを取得する
     * @returns すべての商品カテゴリのリスト（非同期）
     */
    findAll(): Promise<BookCategory[]>;
    /**
     * 指定したIDの商品カテゴリを取得する
     * @param id 商品カテゴリId(UUID)
     * @returns 商品カテゴリ（非同期）
     */
    findById(id: string): Promise<BookCategory>;
}
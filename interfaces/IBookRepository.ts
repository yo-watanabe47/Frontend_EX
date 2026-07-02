import { Book } from "../models/Book";
import { BookRegistration } from "@/models/BookRegistration";

/**
 * 演習 6-2 データアクセスとサービスを実装する
 * 商品リポジトリインターフェース
 */
export interface IBookRepository {
    /**
     * 指定したキーワードで商品を検索して取得する
     * @param keyword 検索キーワード
     * @returns 検索にヒットした商品のリスト（非同期）
     */
    searchKeyword(keyword: string): Promise<Book[]>;
        /**
     * 演習 8-8 リポジトリとDTOインターフェイスを実装する
     * 商品の重複を検証する
     * @param name 検証する商品名
     */
    existsByName(name: string): Promise<void>;
    /**
     * 演習 8-8 リポジトリとDTOインターフェイスを実装する
     * 商品を登録する
     * @param book 登録する商品
     * @returns 登録された商品（非同期）
     */
    register(book: BookRegistration): Promise<Book>;
}
import { Book } from "@/models/Book";
import { BookCategory } from "@/models/BookCategory";
import { BookRegistration } from "@/models/BookRegistration";

/**
 * 演習 8-10 商品登録サービスを実装してDIコンテナに登録する
 * 商品登録画面におけるUIイベントに対応するサービスのインターフェース
 */
export interface IRegisterBookService {
    /**
     * 画面初期表示時: すべての商品カテゴリを取得する
     * @return すべての商品カテゴリのリスト（非同期）
     */
    getCategories(): Promise<BookCategory[]>;

    // /**
    //  * カテゴリ選択時: 指定したIDの商品カテゴリ詳細を取得する
    //  * @param id 商品カテゴリId(UUID)
    //  * @return 商品カテゴリ（非同期）
    //  */
    // getCategoryById(id: string): Promise<BookCategory>;

    /**
     * 入力終了時: 商品名の重複を検証する
     * @param name 入力された商品名
     * @throws 商品名が重複している場合はエラーをスローする
     */
    validateBookName(name: string): Promise<void>;

    /**
     * 登録実行時: 商品データを永続化する
     * @param book 登録する商品データ
     * @return 登録された商品（非同期）
     */
    execute(book: BookRegistration): Promise<Book>;
}
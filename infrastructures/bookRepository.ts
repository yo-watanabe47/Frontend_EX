import { IBookRepository } from "@/interfaces/IBookRepository";
import { Book } from "@/models/Book";
import { injectable } from "inversify";
import { BookRegistration } from "@/models/BookRegistration";

// import { getSession } from "next-auth/react";

/**
 * 演習 8-7 バックエンドにアクセスするリポジトリを実装して切り替える
 * バックエンドAPIと通信を行い、商品データを取得する
 */
@injectable()
export class BookRepository implements IBookRepository {
    /**
     * 指定したキーワードで商品を検索する
     * @param keyword 検索キーワード
     * @returns 検索結果の商品リスト
     */
    public async searchKeyword(keyword: string): Promise<Book[]> {
        // // NextAuthのセッションからアクセストークンを取得する
        // const session = await getSession();
        // const token = (session as any)?.user?.token;

        // 検索クエリパラメータの構築
        const params = new URLSearchParams({ keyword: keyword });

        // API呼び出し(next.config.tsで設定したプロキシ経由)
        const response = await fetch(`/library/api/books?${params.toString()}`, {
            method: "GET",
            headers: {
                // "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        // ステータスコードに応じたエラーハンドリング
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            // バックエンドで設定した "message" (検索キーワードを入力してください。等) があればそれを投げる
            if (errorData.message) {
                throw new Error(errorData.message);
            }
            // それ以外のエラーへの対応
            if (errorData.errors) {
                const messages = Object.values(errorData.errors).flat().join("\n");
                throw new Error(messages);
            }
            throw new Error(`検索に失敗しました (Status: ${response.status})`);
        }

        // 成功時は商品リスト(JSON)をパースして返却する
        const books: Book[] = await response.json();
        return books;
    }
    /**
     * 演習 8-9 リポジトリの実装を作成する
     * 商品の重複を検証する
     * @param name 検証する商品名
     */
    /**
     * 演習 8-9 リポジトリの実装を作成する
     * 商品の重複を検証する
     * @param name 検証する商品名
     */
    async existsByName(name: string): Promise<void> {
        // const session = await getSession();
        // const token = (session as any)?.user?.token;
        const params = new URLSearchParams({ bookName: name });
        const response = await fetch(`//library/api/books/validate?${params.toString()}`, {
            method: "GET",
            headers: {
                // "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            if (errorData.message) {
                throw new Error(errorData.message);
            }
            if (errorData.errors) {
                const messages = Object.values(errorData.errors).flat().join("\n");
                throw new Error(messages);
            }
            throw new Error("商品名の検証に失敗しました。");
        }
    }

    /**
     * 演習 8-9 リポジトリの実装を作成する
     * 商品を登録する
     * @param book 登録する商品
     * @returns 登録された商品（非同期）
     */
    async register(book: BookRegistration): Promise<Book> {
        // const session = await getSession();
        // const token = (session as any)?.user?.token;
        const response = await fetch("/proxy-api/books/register", {
            method: "POST",
            headers: {
                // "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book) // DTOをJSON文字列に変換して送信する
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            if (errorData.message) {
                throw new Error(errorData.message);
            }
            if (errorData.errors) {
                const messages = Object.values(errorData.errors).flat().join("\n");
                throw new Error(messages);
            }
            throw new Error(`商品の登録に失敗しました (Status: ${response.status})`);
        }
        // 登録完了後、バックエンドから返却された完全な商品データ(UUID含む)を返す
        return await response.json();
    }
}

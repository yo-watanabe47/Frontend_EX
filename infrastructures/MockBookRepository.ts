// import { injectable } from "inversify";
// import { IBookRepository } from "../interfaces/IBookRepository";
// import { Book } from "../models/Book";
// /**
//  * 演習 6-2 データアクセスとサービスを実装する
//  * 商品リポジトリの実装(モック)
//  */
// @injectable()
// export class MockBookRepository implements IBookRepository {

//     // テスト用のダミーデータ（モックデータ）を準備
//     private readonly mockBooks: Book[] = [
//         {
//             bookUuid: "p-001",
//             title: "プログラミング基礎",
//             author: "渡邉",
//             category: { categoryUuid: "c-001", name: "参考書" },
//             stock: { stockUuid: "s-001", stock: 5 }
//         },
//         {
//             bookUuid: "p-002",
//             title: "PC基礎",
//             author: "高木",
//             category: { categoryUuid: "c-002", name: "参考書" },
//             stock: { stockUuid: "s-002", stock: 10 }
//         },
//         {
//             bookUuid: "p-003",
//             title: "雨にも負けず",
//             author: "山田",
//             category: { categoryUuid: "c-002", name: "文学" },
//             stock: { stockUuid: "s-003", stock: 8 }
//         }
//     ];

//     /**
//      * 指定したキーワードで商品を検索して取得する
//      * @param keyword 検索キーワード
//      * @returns 検索にヒットした商品のリスト(非同期)
//      */
//     public async searchKeyword(keyword: string): Promise<Book[]> {
//         // キーワードが空の場合は、全件を返す
//         if (!keyword) {
//             return this.mockBooks;
//         }
//         // キーワードが商品名(name)に含まれているものをフィルタリングする
//         const filteredBooks = this.mockBooks.filter(book =>
//             book.title.includes(keyword)
//         );
//         // asyncメソッドなので、自動的にPromiseでラップされて返却される
//         return filteredBooks;
//     }
// }
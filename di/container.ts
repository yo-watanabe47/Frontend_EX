import { IBookRepository } from "@/interfaces/IBookRepository";
import { ISearchBookService } from "@/interfaces/ISearchBookService";
import { Container } from "inversify";
import { TYPES } from "./types";
import { SearchBookService } from "@/services/SearchBookService";
import { BookRepository } from "@/infrastructures/bookRepository";
import { IBookCategoryRepository } from "@/interfaces/IBookCategoryRepository";
import { BookCategoryRepository } from "@/infrastructures/BookCategoryRepository";
import { IRegisterBookService } from "@/interfaces/IRegisterBookService";
import { RegisterBookService } from "@/services/RegisterBookService";

/**
 * 演習 6-2 データアクセスとサービスを実装する
 * DIコンテナの初期化と依存関係の登録
 */
const container = new Container();
// ---------------------------------------------------------
// バインディング（登録）設定
// ---------------------------------------------------------
// リポジトリの登録(モック版を紐付ける)
// container.bind<IBookRepository>(TYPES.IBookRepository).to(MockBookRepository);

/**
 * 演習 8-7 バックエンドにアクセスするリポジトリを実装して切り替える
 * モック版からバックエンドAPI版(BookRepository)へ切り替える
 */
container.bind<IBookRepository>(TYPES.IBookRepository).to(BookRepository);
// サービス(ユースケース)の登録
container.bind<ISearchBookService>(TYPES.ISearchBookService).to(SearchBookService);

container.bind<IBookCategoryRepository>(TYPES.IBookCategoryRepository).to(BookCategoryRepository);

container.bind<IRegisterBookService>(TYPES.IRegisterBookService).to(RegisterBookService);


export { container };
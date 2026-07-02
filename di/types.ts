/**
 * 演習 6-2 データアクセスとサービスを実装する
 * DIコンテナ用の識別子(Symbol)定義
 */
export const TYPES = {
    // インフラストラクチャ層
    IBookRepository: Symbol.for("IBookRepository"),
    // サービス(ユースケース)層
    ISearchBookService: Symbol.for("ISearchBookService"),
    /**
     * 演習 8-4 Serviceの実装とDIコンテナへの登録
     */
    // IUserRepository: Symbol.for("IUserRepository"),
    // IRegisterUserService: Symbol.for("IRegisterUserService"),
    /**
     * 演習 8-9 リポジトリの実装を作成する
     */
    IBookCategoryRepository: Symbol.for("IBookCategoryRepository"),

    IRegisterBookService: Symbol.for("IRegisterBookService")

};
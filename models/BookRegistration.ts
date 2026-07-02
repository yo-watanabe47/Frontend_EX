/**
 * 演習 8-8 リポジトリとDTOインターフェイスを実装する
 * 商品登録のためのDTO(インターフェイス)
 */
export interface BookRegistration {
    title: string;          // 商品名
    author: string;         // 価格
    stock: number;         // 在庫数
    categoryId: string;    // 商品カテゴリId(UUID)
    categoryName: string;  // 商品カテゴリ名
}
import type { NextConfig } from "next";
/**
 * 演習 8-1 APIプロキシ(BFF)の設定を追加する
 * Next.js プロジェクトの設定ファイル
 * ブラウザのセキュリティ制限（CORS）を回避し、フロントエンドから
 * 安全にバックエンドAPIを呼び出すための中継ルールを定義
 */
const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      // {
      //   /**
      //    * ユーザー管理API用のプロキシ設定
      //    * source: フロントエンド側で呼び出すURL（相対パス）
      //    * destination: 実際にデータを取得しに行くバックエンドURL
      //    * ※画面（/api/users/register）とのURL衝突を避けるため、
      //    *   API専用の入り口として「/proxy-api/」を冠しています。
      //    */
      //   source: '/proxy-api/users/:path*',
      //   destination: 'http://20.78.35.126/api/users/:path*',
      // },
      {
        /**
         * 商品管理API用のプロキシ設定
         * source: フロントエンド側で呼び出すURL
         * destination: 商品管理APIエンドポイント
         */
        source: '/library/api/:path*',
        destination: 'http://20.78.35.126/app2/library/api/:path*',
      },
    ]
  },
};
export default nextConfig;
// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // site: 'https://<你的github帳號>.github.io', // 替換為你的 GitHub 帳號
  // base: '/<你的儲存庫名稱>', // 如果此專案不是發布在根目錄 (例如它是 yourname.github.io/RaytronFutureWeb)，請取消註解並替換為 Repo 名稱
  vite: {
    plugins: [tailwindcss()]
  }
});

// scripts/download-site.cjs
const ws = require('website-scraper');
// default と名前付きの両対応（環境によって違うことがあるため）
const scrape = ws.default || ws;

(async () => {
  try {
    console.log('Start scrape...');

    await scrape({
      urls: ['https://online-counseling-site.vercel.app/'],
      directory: 'dump',         // 出力先フォルダ（なければ作られる）
      recursive: true,           // 下層リンクも保存
      maxDepth: 2,               // どこまで潜るか
      subdirectories: [
        { directory: 'img',   extensions: ['.png', '.jpg', '.jpeg', '.svg', '.webp'] },
        { directory: 'css',   extensions: ['.css'] },
        { directory: 'js',    extensions: ['.js'] },
        { directory: 'fonts', extensions: ['.woff', '.woff2', '.ttf', '.otf'] },
      ],
      request: {
        headers: { 'user-agent': 'Mozilla/5.0 (Macintosh)' },
      },
    });

    console.log('Done. Files saved in ./dump');
  } catch (e) {
    console.error('ERROR:', e);
    process.exit(1);
  }
})();

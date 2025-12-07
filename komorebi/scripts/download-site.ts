// scripts/download-site.ts
// website-scraper を動的 import して default / CJS の両方に対応
const mod = await import('website-scraper');
const scrape: any = (mod as any).default ?? (mod as any);

(async () => {
  console.log('Start scrape...');
  try {
    const result = await scrape({
      urls: ['https://online-counseling-site.vercel.app/'],
      directory: 'dump',
      recursive: true,
      maxDepth: 2,
      subdirectories: [
        { directory: 'img',   extensions: ['.png', '.jpg', '.jpeg', '.svg', '.webp'] },
        { directory: 'css',   extensions: ['.css'] },
        { directory: 'js',    extensions: ['.js'] },
        { directory: 'fonts', extensions: ['.woff', '.woff2', '.ttf', '.otf'] },
      ],
    });
    console.log('Done:', result?.length ?? 0, 'files. Output => ./dump');
  } catch (e) {
    console.error('ERROR:', e);
    process.exit(1);
  }
})();

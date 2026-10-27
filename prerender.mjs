// Copy dist/index.html to every app route (real 200s on GitHub Pages) and to 404.html (SPA fallback).
import fs from 'node:fs';
const routes = ['layanan','layanan/hair','layanan/silky-keratin','layanan/smoothing-perm','layanan/beauty-bar','layanan/wellness-spa','layanan/wedding','harga','cabang/gandaria','cabang/kemang','cabang/tebet','tentang','kontak','reservasi','faq','kebijakan-privasi','syarat-ketentuan'];
const html = fs.readFileSync('dist/index.html','utf8');
for (const r of routes) { fs.mkdirSync('dist/'+r,{recursive:true}); fs.writeFileSync('dist/'+r+'/index.html', html); }
fs.writeFileSync('dist/404.html', html);
console.log('prerendered', routes.length, 'routes + 404.html');

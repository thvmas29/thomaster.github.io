// Test resolveImagePath function
const BASE_URL = '/thomaster.github.io/';

function resolveImagePath(path) {
  if (!path) return '';
  
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  let base = BASE_URL || '/';
  
  if (!base.endsWith('/')) {
    base += '/';
  }
  
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${base}${cleanPath}`;
}

console.log('CakePHP:', resolveImagePath('cakephp.png'));
console.log('MySQL:', resolveImagePath('MySQL_(1).png'));
console.log('Unsplash:', resolveImagePath('https://images.unsplash.com/photo-test'));

import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Plugin pour résoudre les assets exportés de Figma
function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        // Vérifie que tes assets sont bien dans src/assets
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  /**
   * IMPORTANT: 'base' doit correspondre au nom de ton dépôt GitHub.
   * C'est ce qui permet d'éviter la page blanche et les erreurs 404.
   */
  base: '/thomaster.github.io/',

  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      /**
       * Permet d'utiliser '@' pour importer des fichiers depuis le dossier src
       * Exemple: import Button from '@/components/Button'
       */
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Types de fichiers supportés pour les imports bruts
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    // Dossier de sortie (utilisé par ton fichier deploy.yml)
    outDir: 'dist',
    // Nettoie le dossier dist avant chaque build
    emptyOutDir: true,
  },

  server: {
    // Configuration pour le développement local
    port: 3000,
    open: true,
  }
})

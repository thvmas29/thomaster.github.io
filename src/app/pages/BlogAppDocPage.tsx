import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ArrowLeft, ChevronLeft, ChevronRight, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export function BlogAppDocPage() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Construct PDF URL - import.meta.env.BASE_URL already includes trailing slash
  const pdfUrl = `${import.meta.env.BASE_URL}Documentation_BLOG_APP_TERRAL_Thomas_v4-3.pdf`;

  console.log('Base URL:', import.meta.env.BASE_URL);
  console.log('PDF URL:', pdfUrl);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setIsLoading(false);
  }

  function onDocumentLoadError(error: Error): void {
    console.error('Error loading PDF:', error);
    console.error('PDF URL attempted:', pdfUrl);
    setError(error.message);
    setIsLoading(false);
  }

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link
            to="/projets/blog-app-cakephp"
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Retour au projet Blog App</span>
          </Link>

          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-primary rounded-lg">
              <FileText size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Documentation Blog App CakePHP
              </h1>
              <p className="text-muted-foreground mt-2">
                Documentation technique complète du projet Blog App développé avec CakePHP
              </p>
            </div>
          </div>

          <a
            href={pdfUrl}
            download="Documentation_BLOG_APP_TERRAL_Thomas_v4-3.pdf"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Download size={18} />
            <span>Télécharger le PDF</span>
          </a>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white border border-border rounded-lg shadow-lg overflow-hidden">
          {/* Controls */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-slate-50">
            <button
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-border rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
              <span className="hidden sm:inline">Précédent</span>
            </button>

            <div className="flex items-center space-x-2 text-sm">
              <span className="font-medium text-foreground">Page</span>
              <input
                type="number"
                min={1}
                max={numPages}
                value={pageNumber}
                onChange={(e) => {
                  const page = parseInt(e.target.value);
                  if (page >= 1 && page <= numPages) {
                    setPageNumber(page);
                  }
                }}
                className="w-16 px-2 py-1 border border-border rounded text-center"
              />
              <span className="text-muted-foreground">sur {numPages}</span>
            </div>

            <button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-border rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="hidden sm:inline">Suivant</span>
              <ChevronRight size={18} />
            </button>
          </div>

          {/* PDF Display */}
          <div className="flex justify-center p-8 bg-slate-100 min-h-[600px]">
            {isLoading && (
              <div className="flex items-center justify-center">
                <div className="text-muted-foreground">Chargement du document...</div>
              </div>
            )}
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={<div className="text-muted-foreground">Chargement...</div>}
              error={
                <div className="p-8 bg-white rounded-lg border border-red-200 max-w-2xl">
                  <p className="font-semibold mb-2 text-red-700">Erreur lors du chargement du PDF</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Le visualiseur PDF ne peut pas charger le document. Vous pouvez télécharger le fichier pour le consulter.
                  </p>
                  {error && (
                    <p className="text-xs text-red-600 mb-2 font-mono bg-red-50 p-2 rounded">
                      Erreur: {error}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground mb-4 font-mono bg-slate-50 p-2 rounded break-all">
                    URL: {pdfUrl}
                  </p>
                  <a
                    href={pdfUrl}
                    download="Documentation_BLOG_APP_TERRAL_Thomas_v4-3.pdf"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Download size={18} />
                    <span>Télécharger le PDF</span>
                  </a>
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                className="shadow-lg"
                width={Math.min(window.innerWidth - 100, 900)}
              />
            </Document>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-white border border-border rounded-lg p-6">
          <h2 className="text-xl font-bold text-foreground mb-3">À propos de ce document</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Cette documentation présente de manière détaillée le projet Blog App CakePHP, incluant
            l'architecture technique, les fonctionnalités implémentées, le modèle de données,
            et les procédures de déploiement.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold text-foreground">Projet:</span>
              <span className="text-muted-foreground ml-2">Blog App CakePHP</span>
            </div>
            <div>
              <span className="font-semibold text-foreground">Framework:</span>
              <span className="text-muted-foreground ml-2">CakePHP 5.x</span>
            </div>
            <div>
              <span className="font-semibold text-foreground">Auteur:</span>
              <span className="text-muted-foreground ml-2">Thomas TERRAL</span>
            </div>
            <div>
              <span className="font-semibold text-foreground">Formation:</span>
              <span className="text-muted-foreground ml-2">BTS SIO SLAM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

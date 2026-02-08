import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const HIOXX_URL =
  import.meta.env.VITE_HIOXX_URL;

export function HioxxViewPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative w-full h-screen">
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-white z-10"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                <Loader2 className="w-12 h-12 text-gold" />
              </motion.div>
              <p className="mt-4 text-gray-600">Cargando HIOXX...</p>
            </div>
          </motion.div>
        )}

        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="text-center p-8">
              <p className="text-red-200 mb-4">
                Error al cargar HIOXX. Por favor, verifica que el servicio esté
                ejecutándose.
              </p>
              <p className="text-sm text-gray-500">
                URL: {HIOXX_URL}
              </p>
            </div>
          </div>
        ) : (
          <iframe
            src={HIOXX_URL}
            className="w-full h-full border-0"
            title="HIOXX Application"
            onLoad={handleLoad}
            onError={handleError}
            allow="fullscreen"
          />
        )}
      </div>
    </div>
  );
}

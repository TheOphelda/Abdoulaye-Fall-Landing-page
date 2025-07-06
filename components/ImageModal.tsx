import React from "react";

interface ImageModalProps {
  src: string;
  alt?: string;
  open: boolean;
  onClose: () => void;
}

export default function ImageModal({ src, alt, open, onClose }: ImageModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fadein">
      <button
        className="absolute top-6 right-6 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition"
        onClick={onClose}
        aria-label="Fermer l'aperçu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <img
        src={src}
        alt={alt || "Aperçu"}
        className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-white object-contain animate-fadein"
      />
    </div>
  );
}

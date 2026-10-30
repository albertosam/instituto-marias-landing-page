// src/components/FrenteDetalhe.tsx
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Frente } from "@/content/site";

interface FrenteDetalheProps {
  frente: Frente | null;
  onFechar: () => void;
}

// Usa <dialog>::showModal() para herdar de graça: Esc fecha, foco preso
// dentro do painel, e um ::backdrop clicável. O componente que abre o
// drawer (front-card) já cuida de devolver o foco a si mesmo ao fechar,
// porque é o próprio elemento que disparou a abertura.
export function FrenteDetalhe({ frente, onFechar }: FrenteDetalheProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialogEl = dialogRef.current;
    if (!dialogEl) return;

    if (frente) {
      if (!dialogEl.open) dialogEl.showModal();
    } else if (dialogEl.open) {
      dialogEl.close();
    }
  }, [frente]);

  return (
    <dialog
      ref={dialogRef}
      className={`front-detail-drawer ${frente ? `front-detail-drawer--${frente.tone}` : ""}`}
      aria-labelledby="front-detail-title"
      onClose={onFechar}
      onCancel={onFechar}
    >
      {frente && (
        <div className="front-detail-inner">
          <button
            type="button"
            className="front-detail-close"
            onClick={() => dialogRef.current?.close()}
            aria-label="Fechar detalhe"
          >
            <X aria-hidden="true" />
          </button>

          {frente.detalhe.foto && frente.detalhe.foto !== "[preencher]" ? (
            <img src={frente.detalhe.foto} alt="" className="front-detail-photo" />
          ) : (
            <div className="front-detail-photo front-detail-photo--placeholder" aria-hidden="true" />
          )}

          <p className="eyebrow">{frente.label}</p>
          <h3 id="front-detail-title">{frente.nome}</h3>
          <p className="front-detail-description">{frente.descricao}</p>

          <dl className="front-detail-facts">
            <div>
              <dt>O que acontece</dt>
              <dd>{frente.detalhe.oQueAcontece}</dd>
            </div>
            <div>
              <dt>Quem participa</dt>
              <dd>{frente.detalhe.quemParticipa}</dd>
            </div>
            <div>
              <dt>Onde e quando</dt>
              <dd>{frente.detalhe.ondeEQuando}</dd>
            </div>
            <div>
              <dt>Resultado em 2025</dt>
              <dd>{frente.detalhe.resultadoEm2025}</dd>
            </div>
          </dl>
        </div>
      )}
    </dialog>
  );
}
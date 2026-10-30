// src/components/BlocoPix.tsx
import { useState } from "react";
import { pix, organizacao } from "@/content/site";
import { Button } from "@/components/ui/button";

export function BlocoPix() {
  const [copiado, setCopiado] = useState(false);

  async function copiarChave() {
    try {
      await navigator.clipboard.writeText(pix.chaveCnpj);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {
      // Clipboard indisponível (ex.: contexto sem HTTPS) — sem tela de erro,
      // a pessoa ainda pode selecionar e copiar a chave manualmente.
    }
  }

  return (
    <article className="support-feature support-feature--pix">
      {pix.qrCode ? (
        <img src={pix.qrCode} alt="QR Code Pix do Instituto Marias" className="pix-qrcode" />
      ) : (
        <div className="pix-qrcode pix-qrcode--placeholder" aria-hidden="true">
          [preencher: QR Code]
        </div>
      )}

      <p className="card-kicker">Pix</p>
      <h3>Chave Pix (CNPJ): {pix.chaveCnpj}</h3>
      <p>
        Antes de confirmar, veja se o nome do recebedor no seu banco aparece como{" "}
        {pix.nomeRecebedorEsperado}.
      </p>

      <Button type="button" variant="warm" size="xl" onClick={copiarChave}>
        {copiado ? "Chave copiada" : "Copiar chave Pix"}
      </Button>
      <span className="sr-only" role="status" aria-live="polite">
        {copiado ? "Chave Pix copiada para a área de transferência" : ""}
      </span>

      <p className="pix-followup">
        Depois de doar, entre na lista de apoiadores para receber as notícias do mês.
      </p>

      <p className="hero-fineprint">CNPJ {organizacao.cnpj}.</p>
    </article>
  );
}
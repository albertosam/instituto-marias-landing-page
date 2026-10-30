// src/content/site.ts
//
// Conteúdo editável do site do Instituto Marias.
// Edite os valores aqui — os componentes só leem deste arquivo, então
// alterar um dado não exige mexer em layout ou JSX.
//
// Campos marcados "[preencher: ...]" ainda não têm informação real e
// devem ser substituídos assim que o dado existir.

export type StatusDocumento = "publicado" | "em_preparacao";
export type GrupoDocumento = "juridico" | "atividades" | "recursos";

export interface Documento {
  grupo: GrupoDocumento;
  titulo: string;
  referencia: string; // ex.: "Atualizado em 03/2026"
  url?: string; // preencha para publicar (junto com status: "publicado")
  status: StatusDocumento;
  previsao?: string; // ex.: "[preencher: mês/ano]" — usado quando status é "em_preparacao"
}

export interface MembroDiretoria {
  nome: string;
  cargo: string;
  desde: string;
  foto?: string;
}

export interface EmpresaApoiadora {
  nome: string;
  logo: string;
  url?: string;
}

export interface DetalheFrente {
  foto: string; // caminho da imagem — "[preencher]" enquanto não houver
  oQueAcontece: string;
  quemParticipa: string;
  ondeEQuando: string;
  resultadoEm2025: string;
}

export interface Frente {
  id: string;
  nome: string;
  label: string;
  descricao: string;
  tone: string;
  detalhe: DetalheFrente;
}

// ---------------------------------------------------------------------------
// 1. Organização
// ---------------------------------------------------------------------------

export const organizacao = {
  razaoSocial: "[preencher: razão social]",
  cnpj: "[preencher: CNPJ]",
  anoFundacao: 2019,
  cidadeSede: "[preencher: cidade, CE]",
  endereco: "[preencher: endereço completo]",
  email: "[preencher: e-mail]",
  whatsapp: "[preencher: WhatsApp com DDD]",
  instagram: "https://instagram.com/institutomarias",
  atualizadoEm: "[preencher: data]",
};

// ---------------------------------------------------------------------------
// 2. Indicadores (seção Impacto)
// ---------------------------------------------------------------------------

export const indicadores = {
  criancasEJovensAtendidos2025: 87,
  mulheresAtendidas2025: null as number | null, // [preencher]
  comunidadesAtendidas: {
    quantidade: 4,
    nomes: [] as string[], // [preencher: nomes das 4 comunidades]
  },
  frentesDeAtuacao: 5,
  ondeConferir: {
    criancasEJovens: "Relatório de atividades 2025 [preencher: link]",
    mulheres: "[preencher: fonte]",
    comunidades: "[preencher: fonte]",
    frentes: "[preencher: fonte]",
  },
  // Deixe texto vazio para o bloco de depoimento não ser renderizado.
  depoimento: {
    texto: "", // "[preencher: depoimento curto]"
    autor: "", // "[preencher: nome, comunidade]"
  },
};

// ---------------------------------------------------------------------------
// 3. Frentes de atuação
// ---------------------------------------------------------------------------

export const frentes: Frente[] = [
  {
    id: "marias-na-luta",
    nome: "Marias na luta",
    label: "Esporte",
    descricao: "Corpo em movimento, disciplina e confiança para ocupar novos espaços.",
    tone: "front-purple",
    detalhe: {
      foto: "[preencher]",
      oQueAcontece: "[preencher]",
      quemParticipa: "[preencher]",
      ondeEQuando: "[preencher]",
      resultadoEm2025: "[preencher]",
    },
  },
  {
    id: "marias-da-cultura",
    nome: "Marias da cultura",
    label: "Cultura",
    descricao: "Expressão, memória e encontros que fortalecem os talentos do território.",
    tone: "front-orange",
    detalhe: {
      foto: "[preencher]",
      oQueAcontece: "[preencher]",
      quemParticipa: "[preencher]",
      ondeEQuando: "[preencher]",
      resultadoEm2025: "[preencher]",
    },
  },
  {
    id: "marias-que-aprendem",
    nome: "Marias que aprendem",
    label: "Educação",
    descricao: "Aprendizagem que amplia repertórios e abre caminhos para o futuro.",
    tone: "front-green",
    detalhe: {
      foto: "[preencher]",
      oQueAcontece: "[preencher]",
      quemParticipa: "[preencher]",
      ondeEQuando: "[preencher]",
      resultadoEm2025: "[preencher]",
    },
  },
  {
    id: "marias-do-futuro",
    nome: "Marias do futuro",
    label: "Inclusão",
    descricao: "Acesso, autonomia e oportunidades construídas com cada comunidade.",
    tone: "front-blue",
    detalhe: {
      foto: "[preencher]",
      oQueAcontece: "[preencher]",
      quemParticipa: "[preencher]",
      ondeEQuando: "[preencher]",
      resultadoEm2025: "[preencher]",
    },
  },
  {
    id: "marias-do-cuidado",
    nome: "Marias do cuidado",
    label: "Cuidado",
    descricao: "Escuta, acolhimento e uma rede presente em todas as fases da vida.",
    tone: "front-rose",
    detalhe: {
      foto: "[preencher]",
      oQueAcontece: "[preencher]",
      quemParticipa: "[preencher]",
      ondeEQuando: "[preencher]",
      resultadoEm2025: "[preencher]",
    },
  },
];

// ---------------------------------------------------------------------------
// 4. Quem somos — gestão e diretoria
// ---------------------------------------------------------------------------

export const comoTudoComecou = "[preencher: como tudo começou]";

export const gestaoCompartilhada =
  "[preencher: como as decisões são tomadas — diretoria, conselho, assembleia, participação das comunidades]";

export const mandatoDiretoria = "[preencher: período]";

export const diretoria: MembroDiretoria[] = [
  { nome: "[preencher]", cargo: "[preencher]", desde: "[preencher]" },
  { nome: "[preencher]", cargo: "[preencher]", desde: "[preencher]" },
  { nome: "[preencher]", cargo: "[preencher]", desde: "[preencher]" },
];

// ---------------------------------------------------------------------------
// 5. Transparência — documentos e uso dos recursos
// ---------------------------------------------------------------------------

export const documentos: Documento[] = [
  { grupo: "juridico", titulo: "Estatuto social", referencia: "[preencher]", status: "em_preparacao", previsao: "[preencher: mês/ano]" },
  { grupo: "juridico", titulo: "Ata de eleição da diretoria", referencia: "[preencher]", status: "em_preparacao", previsao: "[preencher: mês/ano]" },
  { grupo: "juridico", titulo: "Cartão CNPJ", referencia: "[preencher]", status: "em_preparacao", previsao: "[preencher: mês/ano]" },
  { grupo: "juridico", titulo: "Certidões negativas", referencia: "[preencher]", status: "em_preparacao", previsao: "[preencher: mês/ano]" },
  { grupo: "atividades", titulo: "Relatório de atividades 2025", referencia: "[preencher]", status: "em_preparacao", previsao: "[preencher: mês/ano]" },
  { grupo: "atividades", titulo: "Relatório de atividades 2026", referencia: "[preencher]", status: "em_preparacao", previsao: "[preencher: mês/ano]" },
  { grupo: "recursos", titulo: "Demonstrações contábeis 2025", referencia: "[preencher]", status: "em_preparacao", previsao: "[preencher: mês/ano]" },
];

export const gruposDocumentos: Record<GrupoDocumento, string> = {
  juridico: "Quem somos, juridicamente",
  atividades: "O que fizemos",
  recursos: "Como usamos os recursos",
};

export const usoDosRecursos = {
  // Preencha com números (0–100). Deixe null para mostrar "[__%]".
  atividadesNasComunidades: null as number | null,
  equipeEEstrutura: null as number | null,
  captacaoEComunicacao: null as number | null,
  fonte: "[preencher: link das demonstrações contábeis]",
};

// ---------------------------------------------------------------------------
// 6. Como ajudar — Pix, Nota Tem Valor, parcerias
// ---------------------------------------------------------------------------

export const pix = {
  chaveCnpj: "[preencher]",
  qrCode: "", // [preencher: caminho/import da imagem do QR Code]
  nomeRecebedorEsperado: "[preencher: razão social]",
};

export const notaTemValor = {
  url: "https://suanotatemvalor.sefaz.ce.gov.br/",
  cnpj: "[preencher]",
};

export const empresasApoiadoras: EmpresaApoiadora[] = [];

export const parcerias = {
  emailParcerias: "[preencher: e-mail de parcerias]",
};
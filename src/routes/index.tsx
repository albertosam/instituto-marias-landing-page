import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Download,
  FileText,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Instagram,
  Mail,
  MessageCircle,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FrenteDetalhe } from "@/components/FrenteDetalhe";
import { BlocoPix } from "@/components/BlocoPix";
import { StructuredData } from "@/components/StructuredData";
import {
  organizacao,
  indicadores,
  frentes as frentesConteudo,
  comoTudoComecou,
  gestaoCompartilhada,
  mandatoDiretoria,
  diretoria,
  documentos,
  gruposDocumentos,
  usoDosRecursos,
  notaTemValor,
  empresasApoiadoras,
  parcerias,
  type Frente,
  type GrupoDocumento,
} from "@/content/site";
import heroImage from "@/assets/marias-comunidade.jpg";
import logoImage from "@/assets/marias_logo_horizontal_2048px.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instituto Marias | Oportunidades no sertão" },
      {
        name: "description",
        content:
          "Conheça o Instituto Marias e apoie ações de esporte, cultura, educação, inclusão e cuidado no sertão do Ceará.",
      },
      { property: "og:title", content: "Instituto Marias | Oportunidades no sertão" },
      {
        property: "og:description",
        content: "Toda Maria é talento. Todo talento tem casa aqui.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: Index,
});

const frontIcons: Record<string, typeof HandHeart> = {
  "marias-na-luta": HandHeart,
  "marias-da-cultura": Sparkles,
  "marias-que-aprendem": GraduationCap,
  "marias-do-futuro": Users,
  "marias-do-cuidado": HeartHandshake,
};

const navItems = [
  ["Impacto", "#impacto"],
  ["Nossas frentes", "#frentes"],
  ["Quem somos", "#quem-somos"],
  ["Transparência", "#transparencia"],
  ["Como ajudar", "#apoie"],
] as const;

const gruposOrdenados: GrupoDocumento[] = ["juridico", "atividades", "recursos"];

function BrandMark({ className = "h-10 md:h-12" }: { className?: string }) {
  return (
    <a href="#inicio" className="brand focus:outline-none" aria-label="Instituto Marias — início">
      <img
        src={logoImage}
        alt="Instituto Marias"
        className={`w-auto max-w-[200px] md:max-w-[240px] object-contain ${className}`}
      />
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [frenteAberta, setFrenteAberta] = useState<Frente | null>(null);

  const temDepoimento = indicadores.depoimento.texto.trim().length > 0;
  const temEmpresas = empresasApoiadoras.length > 0;

  return (
    <div className="site-shell">
      {<StructuredData />}

      <header className="site-header">
        <div className="page-container header-inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <Button asChild variant="warm" size="lg" className="header-cta">
            <a href="#apoie">Doar via Pix</a>
          </Button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Navegação para celular">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
                <ChevronRight />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* 1. Hero ------------------------------------------------------ */}
        <section id="inicio" className="hero">
          <img
            src={heroImage}
            alt="Mulheres e crianças reunidas em uma comunidade do sertão"
            width={1700}
            height={1204}
          />
          <div className="hero-shade" />
          <div className="page-container hero-content">
            <p className="eyebrow hero-eyebrow">Desde 2019, no sertão do Ceará</p>
            <h1>
              Fazendo florescer
              <br />
              oportunidades <em>no sertão.</em>
            </h1>
            <p className="hero-copy">
              Cultivamos talentos e fortalecemos o protagonismo de crianças, adolescentes, jovens
              e mulheres.
            </p>
            <div className="hero-actions">
              <Button asChild variant="warm" size="xl">
                <a href="#apoie">
                  Doar via Pix
                  <ArrowDown />
                </a>
              </Button>
              <Button asChild variant="inverse" size="xl">
                <a href="#transparencia">Ver prestação de contas</a>
              </Button>
            </div>
            <p className="hero-fineprint">
              CNPJ {organizacao.cnpj}. Estatuto, relatórios e certidões abertos para consulta.
            </p>
          </div>
          <div className="hero-promise">
            <span>“</span>Toda Maria é talento.
            <br />
            Todo talento tem casa aqui.
          </div>
        </section>

        {/* 2. Faixa de identidade ---------------------------------------- */}
        <section className="identity-band" aria-label="Identificação institucional">
          <div className="page-container identity-grid">
            <div className="identity-item">
              <span>Atuando desde</span>
              <strong>{organizacao.anoFundacao}</strong>
            </div>
            <div className="identity-item">
              <span>CNPJ</span>
              <strong>{organizacao.cnpj}</strong>
            </div>
            <div className="identity-item">
              <span>Sede</span>
              <strong>{organizacao.cidadeSede}</strong>
            </div>
            <div className="identity-item">
              <span>Documentos atualizados em</span>
              <strong>{organizacao.atualizadoEm}</strong>
            </div>
          </div>
        </section>

        {/* 3. Impacto ------------------------------------------------- */}
        <section id="impacto" className="impact-band" aria-labelledby="impact-title">
          <div className="page-container impact-grid">
            <div className="impact-heading">
              <p className="eyebrow">A rede em números</p>
              <h2 id="impact-title">
                Presença que
                <br />
                vira caminho.
              </h2>
            </div>

            <div className="metric">
              <strong>{indicadores.criancasEJovensAtendidos2025}</strong>
              <span>
                crianças e jovens
                <br />
                atendidos em 2025
              </span>
              <small className="metric-source">
                Onde conferir: {indicadores.ondeConferir.criancasEJovens}
              </small>
            </div>

            <div className="metric">
              <strong>{indicadores.mulheresAtendidas2025 ?? "[preencher]"}</strong>
              <span>
                mulheres
                <br />
                atendidas em 2025
              </span>
              <small className="metric-source">Onde conferir: {indicadores.ondeConferir.mulheres}</small>
            </div>

            <div className="metric">
              <strong>{indicadores.comunidadesAtendidas.quantidade}</strong>
              <span>
                comunidades
                <br />
                atendidas no Ceará
              </span>
              <small className="metric-source">
                {indicadores.comunidadesAtendidas.nomes.length > 0
                  ? indicadores.comunidadesAtendidas.nomes.join(", ")
                  : "[preencher: nomes]"}
              </small>
            </div>

            <div className="metric">
              <strong>{indicadores.frentesDeAtuacao}</strong>
              <span>
                frentes integradas
                <br />
                de atuação
              </span>
              <small className="metric-source">Onde conferir: {indicadores.ondeConferir.frentes}</small>
            </div>
          </div>

          {temDepoimento && (
            <div className="page-container">
              <blockquote className="impact-testimonial">
                <p>“{indicadores.depoimento.texto}”</p>
                <cite>{indicadores.depoimento.autor}</cite>
              </blockquote>
            </div>
          )}
        </section>

        {/* 4. Nossas frentes ------------------------------------------- */}
        <section id="frentes" className="fronts-section">
          <div className="page-container">
            <div className="section-intro">
              <div>
                <p className="eyebrow">Nossas frentes</p>
                <h2>
                  Cinco frentes.
                  <br />
                  <em>Uma só rede.</em>
                </h2>
              </div>
              <p>
                Cada frente cuida de uma dimensão da vida. Juntas, criam uma rede que acompanha,
                reconhece e faz florescer talentos locais.
              </p>
            </div>
            <div className="front-grid">
              {frentesConteudo.map((frente, index) => {
                const Icon = frontIcons[frente.id] ?? Sparkles;
                return (
                  <button
                    type="button"
                    key={frente.id}
                    className={`front-card ${frente.tone}`}
                    onClick={() => setFrenteAberta(frente)}
                    aria-haspopup="dialog"
                  >
                    <div className="front-top">
                      <span>0{index + 1}</span>
                      <Icon aria-hidden="true" />
                    </div>
                    <p>{frente.label}</p>
                    <h3>{frente.nome}</h3>
                    <p className="front-description">{frente.descricao}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <FrenteDetalhe frente={frenteAberta} onFechar={() => setFrenteAberta(null)} />

        {/* 5. Quem somos ------------------------------------------------ */}
        <section id="quem-somos" className="about-section">
          <div className="page-container about-grid">
            <div className="about-statement">
              <p className="eyebrow">Quem somos</p>
              <h2>
                Não levamos cultura ao sertão. <em>Cultivamos junto com ele.</em>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                Somos uma organização da sociedade civil que atua no sertão do Ceará, reconhecendo
                a potência que já existe em cada pessoa e em cada comunidade.
              </p>
              <p>
                Nossa missão é identificar e potencializar talentos locais, incentivando o
                protagonismo para reduzir desigualdades sociais e territoriais. Atuamos desde{" "}
                {organizacao.anoFundacao}. {comoTudoComecou}
              </p>
              <div className="values">
                <span>Inclusão</span>
                <span>Valorização</span>
                <span>Transformação</span>
                <span>Respeito</span>
                <span>Gestão compartilhada</span>
              </div>

              <h3 className="about-subheading">Gestão compartilhada, na prática</h3>
              <p>{gestaoCompartilhada}</p>

              <h3 className="about-subheading">Quem está por trás</h3>
              <p>Diretoria eleita para o mandato {mandatoDiretoria}.</p>
              <div className="board-grid">
                {diretoria.map((membro, index) => (
                  <article className="board-card" key={`${membro.nome}-${index}`}>
                    {membro.foto ? (
                      <img src={membro.foto} alt="" className="board-photo" />
                    ) : (
                      <div className="board-photo board-photo--placeholder" aria-hidden="true" />
                    )}
                    <strong>{membro.nome}</strong>
                    <span>{membro.cargo}</span>
                    <small>desde {membro.desde}</small>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Transparência ---------------------------------------------- */}
        <section id="transparencia" className="transparency-section">
          <div className="page-container">
            <div className="transparency-grid">
              <div>
                <p className="eyebrow">Transparência</p>
                <h2>
                  Cuidar da rede também é <em>prestar contas.</em>
                </h2>
                <p className="transparency-copy">
                  Publicamos o que já está pronto e avisamos quando o resto chega.
                </p>
              </div>

              <div className="org-data-card">
                <h3>Dados da organização</h3>
                <dl>
                  <div>
                    <dt>Razão social</dt>
                    <dd>{organizacao.razaoSocial}</dd>
                  </div>
                  <div>
                    <dt>CNPJ</dt>
                    <dd>{organizacao.cnpj}</dd>
                  </div>
                  <div>
                    <dt>Endereço</dt>
                    <dd>{organizacao.endereco}</dd>
                  </div>
                  <div>
                    <dt>E-mail</dt>
                    <dd>{organizacao.email}</dd>
                  </div>
                  <div>
                    <dt>WhatsApp</dt>
                    <dd>{organizacao.whatsapp}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="document-groups">
              {gruposOrdenados.map((grupo) => (
                <div className="document-group" key={grupo}>
                  <h3>{gruposDocumentos[grupo]}</h3>
                  <div className="document-list">
                    {documentos
                      .filter((documento) => documento.grupo === grupo)
                      .map((documento) => (
                        <div key={documento.titulo}>
                          <span>
                            <FileText aria-hidden="true" />
                            <b>{documento.titulo}</b>
                          </span>
                          <small>{documento.referencia}</small>
                          {documento.status === "publicado" && documento.url ? (
                            <Button asChild variant="outline" size="sm">
                              <a href={documento.url} target="_blank" rel="noreferrer">
                                <Download aria-hidden="true" />
                                Baixar PDF
                              </a>
                            </Button>
                          ) : (
                            <span className="badge-preparacao">
                              Em preparação. Previsão: {documento.previsao ?? "[preencher]"}
                            </span>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="resource-usage">
              <h3>Como usamos cada R$ 100</h3>
              <div className="resource-bar" role="img" aria-label="Distribuição do uso de recursos">
                <span
                  className="resource-bar__segment resource-bar__segment--activities"
                  style={{ width: `${usoDosRecursos.atividadesNasComunidades ?? 33}%` }}
                />
                <span
                  className="resource-bar__segment resource-bar__segment--team"
                  style={{ width: `${usoDosRecursos.equipeEEstrutura ?? 33}%` }}
                />
                <span
                  className="resource-bar__segment resource-bar__segment--fundraising"
                  style={{ width: `${usoDosRecursos.captacaoEComunicacao ?? 34}%` }}
                />
              </div>
              <ul className="resource-legend">
                <li>
                  Atividades nas comunidades —{" "}
                  {usoDosRecursos.atividadesNasComunidades !== null
                    ? `${usoDosRecursos.atividadesNasComunidades}%`
                    : "[__%]"}
                </li>
                <li>
                  Equipe e estrutura —{" "}
                  {usoDosRecursos.equipeEEstrutura !== null ? `${usoDosRecursos.equipeEEstrutura}%` : "[__%]"}
                </li>
                <li>
                  Captação e comunicação —{" "}
                  {usoDosRecursos.captacaoEComunicacao !== null
                    ? `${usoDosRecursos.captacaoEComunicacao}%`
                    : "[__%]"}
                </li>
              </ul>
              <a className="resource-source" href={usoDosRecursos.fonte}>
                Fonte: demonstrações contábeis
              </a>
            </div>
          </div>
        </section>

        {/* 7. Como ajudar -------------------------------------------------- */}
        <section id="apoie" className="support-section">
          <div className="page-container">
            <div className="support-heading">
              <p className="eyebrow">Como ajudar</p>
              <h2>
                Há mais de um jeito de
                <br />
                <em>fazer a rede crescer.</em>
              </h2>
            </div>

            <div className="support-grid">
              {<BlocoPix />}

              <article className="support-feature">
                <ReceiptText aria-hidden="true" />
                <p className="card-kicker">Sua Nota Tem Valor</p>
                <h3>Sua nota fiscal pode virar oportunidade.</h3>
                <p>
                  Ao participar do programa do Governo do Estado do Ceará, você pode indicar o
                  Instituto Marias como instituição beneficiária.
                </p>
                <ol className="numbered-steps">
                  <li>Entre no portal do programa.</li>
                  <li>Indique o Instituto Marias como instituição beneficiária.</li>
                  <li>Se pedir, informe o CNPJ {notaTemValor.cnpj}.</li>
                </ol>
                <Button asChild variant="warm" size="xl">
                  <a href={notaTemValor.url} target="_blank" rel="noreferrer">
                    Conheça o programa <ArrowRight />
                  </a>
                </Button>
              </article>
            </div>
          </div>
        </section>

        <section className="partners-section">
          <div className="page-container partner-layout">
            <div>
              <p className="eyebrow">Empresas apoiadoras</p>
              <h2>
                Quem acredita,
                <br />
                <em>floresce junto.</em>
              </h2>
            </div>

            {temEmpresas && (
              <div className="partner-logos" aria-label="Empresas apoiadoras">
                {empresasApoiadoras.map((empresa) => (
                  <a
                    key={empresa.nome}
                    href={empresa.url ?? "#"}
                    target={empresa.url ? "_blank" : undefined}
                    rel={empresa.url ? "noreferrer" : undefined}
                  >
                    <img src={empresa.logo} alt={empresa.nome} />
                  </a>
                ))}
              </div>
            )}

            <div className="partner-callout">
              <HeartHandshake />
              <p>Sua empresa pode fazer parte desta rede e ter seu apoio reconhecido aqui.</p>
              <a href={`mailto:${parcerias.emailParcerias}`}>
                Falar sobre parceria <Mail aria-hidden="true" />
              </a>
              <small>Escreva para {parcerias.emailParcerias}</small>
            </div>
          </div>
        </section>

        {/* 8. Fechamento --------------------------------------------------- */}
        <section className="closing-section">
          <div className="page-container closing-inner">
            <p className="script-line">Toda Maria é talento.</p>
            <h2>
              Todo talento
              <br />
              tem casa aqui.
            </h2>
            <Button asChild variant="light" size="xl">
              <a href="#apoie">
                Quero apoiar esta rede <HeartHandshake />
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* 9. Rodapé -------------------------------------------------------- */}
      <footer>
        <div className="page-container footer-main">
          <div>
            <BrandMark className="h-9 brightness-0 invert" />
            <p>Fazendo florescer oportunidades no sertão.</p>
          </div>

          <div>
            <p className="footer-label">Identificação</p>
            <span>{organizacao.razaoSocial}</span>
            <span>CNPJ {organizacao.cnpj}</span>
            <span>{organizacao.endereco}</span>
          </div>

          <div>
            <p className="footer-label">Contato</p>
            <a href={`mailto:${organizacao.email}`}>{organizacao.email}</a>
            <span>{organizacao.whatsapp}</span>
            <a href={organizacao.instagram} target="_blank" rel="noreferrer">
              <Instagram /> Instagram
            </a>
          </div>

          <div>
            <p className="footer-label">Navegue</p>
            <a href="#transparencia">Prestação de contas</a>
            <a href="#apoie">Como ajudar</a>
            <a href="/privacidade">Política de privacidade</a>
          </div>
        </div>
        <div className="page-container footer-bottom">
          <span>© 2026 Instituto Marias.</span>
          <span>Documentos atualizados em {organizacao.atualizadoEm}.</span>
        </div>
      </footer>
    </div>
  );
}
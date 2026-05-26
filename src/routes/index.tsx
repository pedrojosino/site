import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pedro Josino Advogados — LPs" },
      { name: "description", content: "Landing pages de captação: Regularização de Imóveis e Leilão de Imóveis." },
    ],
  }),
});

function Index() {
  const cards = [
    {
      href: "/regularizacao-de-imoveis/",
      eyebrow: "LP 1",
      title: "Regularização de Imóveis",
      desc: "Usucapião e adjudicação compulsória por via extrajudicial. Persona: Proprietário Bloqueado.",
    },
    {
      href: "/leilao-de-imoveis/",
      eyebrow: "LP 2",
      title: "Leilão de Imóveis",
      desc: "Análise de risco antes do arremate e imissão na posse. Persona: Arrematante de Leilão.",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg,#0a1a2f 0%,#061322 100%)", color: "#f4f1ea", fontFamily: "Inter, system-ui, sans-serif", padding: "80px 24px" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <p style={{ textTransform: "uppercase", letterSpacing: ".22em", fontSize: 12, color: "#c9a45c", margin: 0 }}>Pedro Josino Advogados</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem,4vw,3.2rem)", margin: "10px 0 8px", color: "#fff", fontWeight: 600 }}>Landing pages prontas para revisão</h1>
        <p style={{ color: "#cdd3df", maxWidth: 640 }}>
          As duas LPs seguem a estrutura testada (10 seções, SEO técnico, JSON-LD, sticky mobile, gtag). Os campos <code style={{ background: "rgba(201,164,92,.15)", padding: "2px 6px", borderRadius: 4, color: "#e7c989" }}>{`{{...}}`}</code> dentro do HTML precisam ser trocados antes do deploy: WhatsApp, telefone, OAB, CNPJ, razão social, e-mail, ID do gtag e domínio final.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 20, marginTop: 40 }}>
          {cards.map((c) => (
            <a key={c.href} href={c.href} style={{ textDecoration: "none", color: "inherit", background: "rgba(255,255,255,.04)", border: "1px solid rgba(201,164,92,.25)", borderRadius: 16, padding: 28, transition: "transform .15s ease, border-color .2s" }}>
              <p style={{ textTransform: "uppercase", letterSpacing: ".2em", fontSize: 11, color: "#c9a45c", margin: 0 }}>{c.eyebrow}</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", margin: "10px 0 8px", color: "#fff", fontWeight: 600 }}>{c.title}</h2>
              <p style={{ color: "#cdd3df", fontSize: ".96rem", margin: 0 }}>{c.desc}</p>
              <span style={{ display: "inline-block", marginTop: 16, color: "#e7c989", fontWeight: 600, fontSize: ".9rem" }}>Abrir LP →</span>
            </a>
          ))}
        </div>

        <div style={{ marginTop: 48, padding: 24, borderRadius: 12, background: "rgba(201,164,92,.08)", border: "1px dashed rgba(201,164,92,.3)", fontSize: ".92rem", color: "#cdd3df" }}>
          <strong style={{ color: "#e7c989" }}>Placeholders a trocar</strong>
          <ul style={{ margin: "10px 0 0", paddingLeft: 18, lineHeight: 1.8 }}>
            <li><code>{`{{WHATSAPP}}`}</code> — número E.164 sem +, ex: 5511999999999</li>
            <li><code>{`{{TELEFONE_E164}}`}</code> — telefone para JSON-LD, ex: +5511999999999</li>
            <li><code>{`{{DOMINIO}}`}</code> — domínio final, ex: pedrojosino.adv.br</li>
            <li><code>{`{{GTAG_ID}}`}</code> — ID do Google Tag, ex: G-XXXXXXX</li>
            <li><code>{`{{OAB}}`}</code> · <code>{`{{CNPJ}}`}</code> · <code>{`{{RAZAO_SOCIAL}}`}</code> · <code>{`{{EMAIL}}`}</code> · <code>{`{{NUM_REVIEWS}}`}</code></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

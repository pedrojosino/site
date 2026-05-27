import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pedro Josino Advogados — Landing Pages" },
      {
        name: "description",
        content:
          "Landing pages de captação: Regularização de Imóveis e Leilão de Imóveis.",
      },
    ],
  }),
});

function Index() {
  const cards = [
    {
      href: "/regularizacao-de-imoveis",
      eyebrow: "LP 01",
      title: "Regularização de Imóveis",
      desc: "Usucapião e adjudicação compulsória por via extrajudicial. Para o Proprietário Bloqueado.",
      tag: "Direito Imobiliário",
    },
    {
      href: "/leilao-de-imoveis",
      eyebrow: "LP 02",
      title: "Leilão de Imóveis",
      desc: "Análise de risco antes do arremate e imissão na posse. Para o Arrematante de Leilão.",
      tag: "Risco & Posse",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1100px 600px at 88% 8%, rgba(201,164,92,.22), transparent 60%), radial-gradient(700px 500px at 0% 100%, rgba(16,42,74,.55), transparent 60%), linear-gradient(180deg,#091627 0%,#040d18 100%)",
        color: "#f1f3f8",
        fontFamily:
          "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        padding: "96px 28px",
      }}
    >
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600;700&display=swap"
      />

      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 16px",
            borderRadius: 999,
            border: "1px solid rgba(201,164,92,.3)",
            background: "rgba(201,164,92,.06)",
            color: "#ecd6a4",
            fontSize: 12,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#c9a45c",
            }}
          />
          Pedro Josino Advogados
        </div>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            margin: "20px 0 14px",
            color: "#fff",
            fontWeight: 500,
            letterSpacing: "-.02em",
            lineHeight: 1.05,
            maxWidth: 820,
          }}
        >
          Duas landing pages, <em style={{ color: "#ecd6a4", fontStyle: "italic" }}>uma marca</em> só.
        </h1>
        <p
          style={{
            color: "#c2cad8",
            maxWidth: 680,
            fontSize: "1.08rem",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          Estrutura testada: 10 seções, SEO técnico, JSON-LD, sticky mobile e
          gtag em ambas. Antes do deploy, troque os campos{" "}
          <code
            style={{
              background: "rgba(201,164,92,.14)",
              padding: "3px 8px",
              borderRadius: 6,
              color: "#ecd6a4",
              fontSize: ".88em",
            }}
          >{`{{...}}`}</code>{" "}
          (WhatsApp, telefone, OAB, CNPJ, domínio, gtag).
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 22,
            marginTop: 56,
          }}
        >
          {cards.map((c) => (
            <a
              key={c.href}
              href={c.href}
              style={{
                textDecoration: "none",
                color: "inherit",
                background:
                  "linear-gradient(160deg, rgba(255,255,255,.06), rgba(255,255,255,.02))",
                border: "1px solid rgba(201,164,92,.22)",
                borderRadius: 20,
                padding: "32px 30px",
                display: "block",
                position: "relative",
                overflow: "hidden",
                transition: "transform .25s ease, border-color .25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(201,164,92,.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(201,164,92,.22)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: ".24em",
                    fontSize: 10.5,
                    color: "#c9a45c",
                    fontWeight: 700,
                  }}
                >
                  {c.eyebrow}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    padding: "4px 10px",
                    borderRadius: 999,
                    background: "rgba(201,164,92,.1)",
                    color: "#ecd6a4",
                    border: "1px solid rgba(201,164,92,.22)",
                  }}
                >
                  {c.tag}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.85rem",
                  margin: "0 0 10px",
                  color: "#fff",
                  fontWeight: 500,
                  letterSpacing: "-.01em",
                  lineHeight: 1.15,
                }}
              >
                {c.title}
              </h2>
              <p
                style={{
                  color: "#bcc4d2",
                  fontSize: ".97rem",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {c.desc}
              </p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 22,
                  color: "#ecd6a4",
                  fontWeight: 600,
                  fontSize: ".92rem",
                }}
              >
                Abrir landing page
                <span aria-hidden>→</span>
              </span>
            </a>
          ))}
        </div>

        <div
          style={{
            marginTop: 56,
            padding: "26px 28px",
            borderRadius: 16,
            background: "rgba(201,164,92,.06)",
            border: "1px dashed rgba(201,164,92,.28)",
            fontSize: ".93rem",
            color: "#c2cad8",
          }}
        >
          <strong
            style={{
              color: "#ecd6a4",
              display: "block",
              marginBottom: 10,
              fontSize: ".82rem",
              textTransform: "uppercase",
              letterSpacing: ".18em",
            }}
          >
            Placeholders a trocar
          </strong>
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.9 }}>
            <li>
              <code>{`{{WHATSAPP}}`}</code> — E.164 sem +, ex.{" "}
              <code>5511999999999</code>
            </li>
            <li>
              <code>{`{{TELEFONE_E164}}`}</code> — JSON-LD, ex.{" "}
              <code>+5511999999999</code>
            </li>
            <li>
              <code>{`{{DOMINIO}}`}</code> — domínio final
            </li>
            <li>
              <code>{`{{GTAG_ID}}`}</code> — Google Tag, ex. <code>G-XXXXXXX</code>
            </li>
            <li>
              <code>{`{{OAB}}`}</code> · <code>{`{{CNPJ}}`}</code> ·{" "}
              <code>{`{{RAZAO_SOCIAL}}`}</code> · <code>{`{{EMAIL}}`}</code> ·{" "}
              <code>{`{{NUM_REVIEWS}}`}</code>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

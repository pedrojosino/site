import { createFileRoute } from "@tanstack/react-router";

// 301 redirect — URL antiga preservada para SEO/inbound links
export const Route = createFileRoute("/regularizacao-de-imoveis")({
  server: {
    handlers: {
      GET: async () =>
        new Response(null, {
          status: 301,
          headers: { Location: "/" },
        }),
    },
  },
});

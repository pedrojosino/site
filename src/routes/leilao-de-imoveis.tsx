import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore raw import
import html from "../../public/leilao-de-imoveis/index.html?raw";

export const Route = createFileRoute("/leilao-de-imoveis")({
  server: {
    handlers: {
      GET: async () =>
        new Response(html as string, {
          status: 200,
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
    },
  },
});

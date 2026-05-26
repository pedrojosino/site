import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore raw import
import html from "../../public/regularizacao-de-imoveis/index.html?raw";

export const Route = createFileRoute("/regularizacao-de-imoveis")({
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

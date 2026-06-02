import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore raw import
import html from "../../public/quem-e/index.html?raw";

export const Route = createFileRoute("/quem-e")({
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

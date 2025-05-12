"use server";

import { Event } from "@/lib/definitions/event";

export async function fetchEvents() {
  const query = `
        query AllEvents {
            allEvents {
                id
                title
                description
                date
                location
                price
            }
        }
    `;

  const res = await fetch("https://vivemedellin-latest.onrender.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  const json = await res.json();

  // Puedes agregar un chequeo por si hay errores:
  if (json.errors) {
    console.error(json.errors);
    throw new Error("GraphQL query failed");
  }

  return json.data.allEvents as Event[];
}

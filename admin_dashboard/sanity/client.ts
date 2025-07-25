// sanity/client.ts
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-07-01",
  token: process.env.SANITY_TOKEN, // Only used on backend
  useCdn: false,
});

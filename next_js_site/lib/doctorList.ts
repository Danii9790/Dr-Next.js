import { client } from "@/sanity/lib/client";

export async function getDoctors() {
  const query = `*[_type == "doctor"]{
    _id,
    name,
    speciality,
    "image": image.asset->url,
    description

  }`;

  const data = await client.fetch(query);
  return data;
}

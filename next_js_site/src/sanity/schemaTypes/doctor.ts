import { defineField, defineType } from "sanity";

export const doctor = defineType({
  name: "doctor",
  title: "Doctor",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "speciality",
      title: "Speciality",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // image cropping
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Short bio or info about the doctor",
    }),
  ],
});

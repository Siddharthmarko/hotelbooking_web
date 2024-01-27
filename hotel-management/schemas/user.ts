import { defineField } from "sanity";

const user = {
  name: "user",
  title: "user",
  type: "document",
  fields: [
    defineField({
      name: "isAdmin",
      title: "Is Admin",
      type: "boolean",
      description: "chack if the user is a admin",
      initialValue: false,
      validation: (Rule) => Rule.required(),
      // readOnly:true,
      // hidden:true
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "The full name of the user",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "url",
    }),
    defineField({
      name: "passowrd",
      type: "string",
      hidden: true,
    }),
    defineField({
      name: "about",
      title: "About",
      type: "text",
      description: "A description about this user",
    }),
  ],
};
export default user;

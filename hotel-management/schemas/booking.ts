import { defineField } from "sanity";

const booking = {
  name: "booking",
  title: "Booking",
  type: "Documnet",
  fields: [
    defineField({
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
};

export default booking;
// video timing 1.27.14
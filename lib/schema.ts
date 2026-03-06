import SchemaBuilder from "@pothos/core";

const builder = new SchemaBuilder({});

const HELLOS = [
  "Hello",          // English
  "Hola",           // Spanish
  "Bonjour",        // French
  "Hallo",          // German
  "Ciao",           // Italian
  "Olá",            // Portuguese
  "Privet",         // Russian
  "Nǐ hǎo",         // Chinese
  "Kon'nichiwa",    // Japanese
  "Annyeonghaseyo", // Korean
  "Marhaban",       // Arabic
  "Namaste",        // Hindi
  "Merhaba",        // Turkish
  "Hallå",          // Swedish
  "Geia sou",       // Greek
  "Shalom",         // Hebrew
  "Sawatdee",       // Thai
  "Xin chào",       // Vietnamese
  "Jambo",          // Swahili
  "Cześć",          // Polish
  "Hei",            // Finnish
  "Sawubona",       // Zulu
  "Szia",           // Hungarian
];

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      args: {
        name: t.arg.string(),
      },
      resolve: (parent, { name }) => {
        const greeting = HELLOS[Math.floor(Math.random() * HELLOS.length)];
        return `${greeting}, ${name || "World"}`;
      },
    }),
  }),
});

export const schema = builder.toSchema();

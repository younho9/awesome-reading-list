const fs = require("fs");
const process = require("process");
const path = require("path");
const ejs = require("ejs");
const prettier = require("prettier");

(async () => {
  const context = JSON.parse(process.env.context)

  const template = await fs.promises.readFile(
    path.resolve("template.md"),
    "utf8"
  );

  const markdown = prettier.format(
    ejs.render(template, context),
    { parser: "markdown" }
  );

  await fs.promises.writeFile(
    'README.md',
    markdown,
  );
})();

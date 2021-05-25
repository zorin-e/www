import * as unwrapImages from "remark-unwrap-images";
import * as typography from "@mavrin/remark-typograf";

import * as syntaxHighlight from "rehype-highlight/light";
import * as javascript from "highlight.js/lib/languages/javascript";
import * as typescript from "highlight.js/lib/languages/typescript";

export const serializationConfig = {
  remarkPlugins: [
    unwrapImages,
    [
      typography,
      {
        locale: ["ru"],
        disableRule: ["*"],
        enableRule: ["common/nbsp/*", "ru/nbsp/*"],
      },
    ],
  ],

  rehypePlugins: [
    [
      syntaxHighlight,
      {
        plainText: ["text"],
        languages: {
          javascript,
          typescript,
        },
      },
    ],
  ],
};
// @ts-check

import watch from "glob-watcher";
import { reload, hasError } from "./common.mjs";
import { isDev } from "./argParser.mjs";

const main = () => {
  if (isDev) {
    const watcher = watch([
      "content/{en,zh-CN}/news/**/*.typ",
      "content/meta/news-list.json",
      "src/**/*.typ",
    ]);
    watcher.on("add", reload);
    watcher.on("remove", reload);

    // The first reload.
    reload();
  } else {
    reload();
    if (hasError) {
      process.exit(1);
    }
  }
};

main();

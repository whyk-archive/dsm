import { version } from "./config.ts";

const printVersionNumber = async (): Promise<string | undefined> => {
  const versionString = await version();
  return versionString?.replace("v", "");
};

export const template = async (): Promise<string> => `
import type { DsmConfig } from "https://deno.land/x/dsm@${await printVersionNumber()}/model.ts";

const config: DsmConfig = {
  scripts: {
    "version:deno": {
      cmd: "deno -V",
      desc: "print deno version",
    },
  },
};

export default config;
`;

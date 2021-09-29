import { Client, Server } from 'styletron-engine-atomic';
/* istanbul ignore file */

import type { hydrateType } from "styletron-engine-atomic";

const getHydrateClass = () =>
  document.getElementsByClassName("_styletron_hydrate_");

export const styletron: any =
  typeof window === "undefined"
    ? new Server()
    : new Client({
        hydrate: getHydrateClass() as hydrateType | undefined,
      });

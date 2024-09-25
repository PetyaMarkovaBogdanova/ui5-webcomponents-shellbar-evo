import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "bdd-diagram";
const pathData = "M415 192h65c17 0 32 13 32 32v64c0 19-15 32-32 32h-65c-17 0-31-13-31-32v-16h-64l-1 80c0 2-1 4-2 7l27 27c3-1 5-2 7-2h65c17 0 32 13 32 32v64c0 19-15 32-32 32h-65c-17 0-31-13-31-32v-64c0-3 0-6 1-8l-34-34-119 41c-2 1-5 1-8 1-4 0-7 0-9-1L10 367c-7-2-10-7-10-15V160c0-8 3-13 10-15l141-48c2-1 5-1 9-1 3 0 6 0 8 1l119 41 34-34c-1-2-1-5-1-8V32c0-19 14-32 31-32h65c17 0 32 13 32 32v64c0 19-15 32-32 32h-65c-2 0-4-1-7-2l-27 27c1 3 3 4 3 7v80h64v-16c0-19 14-32 31-32zm1-160h-65l1 64h64V32zM160 190l91-31-91-31-92 31zm-16 189V218L31 180v161zm144-38V180l-113 38v161zm128-53h64v-64h-65zm0 192v-64h-65l1 64h64z";
const ltr = false;
const accData = null;
const collection = "tnt-v3";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v3/bdd-diagram";
export { pathData, ltr, accData };
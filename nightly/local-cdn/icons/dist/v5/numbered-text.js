import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "numbered-text";
const pathData = "M486 365q11 0 18.5 7t7.5 18-7.5 18.5T486 416H218q-11 0-18.5-7.5T192 390t7.5-18 18.5-7h268zM218 147q-11 0-18.5-7t-7.5-18 7.5-18.5T218 96h268q11 0 18.5 7.5T512 122t-7.5 18-18.5 7H218zm-116 26q11 0 18.5 7t7.5 18-7.5 18.5T102 224H26q-11 0-18.5-7.5T0 198t7.5-18 18.5-7h19V83H26q-11 0-18.5-7T0 58t7.5-18.5T26 32h44q11 0 18.5 7.5T96 58v115h6zm0 256q11 0 18.5 7t7.5 18-7.5 18.5T102 480H26q-11 0-18.5-7.5T0 454v-8q0-42 32-69l45-38H26q-11 0-18.5-7T0 314t7.5-18.5T26 288h54q20 0 34 14.5t14 37.5q0 10-3.5 19.5T111 378l-46 38q-3 3-5.5 6t-4.5 7h47z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/numbered-text";
export { pathData, ltr, accData };
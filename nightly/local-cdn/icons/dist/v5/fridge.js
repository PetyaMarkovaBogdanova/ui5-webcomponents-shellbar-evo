import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "fridge";
const pathData = "M371 0q32 0 54.5 22.5T448 77v358q0 32-22.5 54.5T371 512H141q-32 0-54.5-22.5T64 435V77q0-32 22.5-54.5T141 0h230zM141 51q-11 0-18.5 7.5T115 77v115h282V77q0-11-7.5-18.5T371 51H141zm230 410q11 0 18.5-7.5T397 435V243H115v192q0 11 7.5 18.5T141 461h230zM186 160q-11 0-18.5-7.5T160 134v-25q0-11 7.5-18.5T186 83t18 7.5 7 18.5v25q0 11-7 18.5t-18 7.5zm0 128q11 0 18 7.5t7 18.5v44q0 11-7 18.5t-18 7.5-18.5-7.5T160 358v-44q0-11 7.5-18.5T186 288z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/fridge";
export { pathData, ltr, accData };
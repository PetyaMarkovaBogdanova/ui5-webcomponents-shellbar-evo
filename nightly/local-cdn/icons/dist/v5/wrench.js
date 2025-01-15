import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "wrench";
const pathData = "M505 399q7 9 7 18 0 11-7 18l-70 70q-7 7-18 7-9 0-18-7L215 320q-27 8-51 8-34 0-64-13t-52.5-35.5-35-53T0 162q0-9 1-22.5t5-26 11-22T36 82q11 0 18 7l63 62 34-34-62-63q-7-7-7-18 0-12 10-19t23.5-11T143 1t22-1q34 0 63.5 13T280 48.5t35 52 13 63.5q0 24-8 51zM51 161q0 24 8.5 45t24 36.5 36 24.5 44.5 9q23 0 43.5-9t35.5-24 24-35.5 9-43.5q0-24-9-44.5T243 84t-35.5-24-43.5-9h-6l47 49q7 7 7 18t-7 18l-69 69q-7 7-18 7t-18-7l-49-47v3zm399 256L295 262q-13 19-33 33l155 155z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/wrench";
export { pathData, ltr, accData };
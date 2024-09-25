import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "call";
const pathData = "M438 276q20 9 31 27t11 40v20q0 51-26.5 84T374 480q-12 0-20-1.5t-12-2.5q-53-14-102-42t-89.5-67.5-70-88.5T37 174q-1-4-3-13.5T32 137q0-53 33-79t84-26h31q35 0 51 32l28 56q6 12 6 25 0 16-8.5 30T233 197l-5 2q9 26 34 51t50 34l3-6q8-15 22-23t30-8q13 0 25 6zm-10 67q0-14-13-22l-46-23h-3q-3 0-5 3l-11 23q-9 14-27 14-22 0-48.5-15T226 285.5 189 237t-15-48q0-21 14-27l22-11q4-1 4-5 0-2-1-4l-28-55q-2-4-5-4h-31q-66 0-66 53 0 6 1 12.5t4 17.5q12 45 36.5 87t59 76 77.5 59 90 37q13 4 22 4 32 0 43.5-18.5T428 363v-20z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/call";
export { pathData, ltr, accData };
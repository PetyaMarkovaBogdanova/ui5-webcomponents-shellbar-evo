import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "phone";
const pathData = "M422 0q38 0 64 26t26 64v332q0 38-26 64t-64 26H90q-38 0-64-26T0 422v-13q0-11 7.5-18.5T26 383t18 7.5 7 18.5v13q0 17 11 28t28 11h332q17 0 28-11t11-28V90q0-17-11-28t-28-11H218q-11 0-18.5-7T192 26t7.5-18.5T218 0h204zM58 320q-24 0-41-17T0 262V58q0-24 17-41T58 0h44q24 0 41 17t17 41v204q0 24-17 41t-41 17H58zm-7-58q0 7 7 7h44q7 0 7-7V58q0-7-7-7H58q-7 0-7 7v204zm167-6q-26 0-26-26 0-25 26-25 25 0 25 25 0 26-25 26zm0 80q-26 0-26-26 0-25 26-25 25 0 25 25 0 26-25 26zm87-51q25 0 25 25 0 26-25 26-26 0-26-26 0-25 26-25zm25-55q0 26-25 26-26 0-26-26 0-25 26-25 25 0 25 25zm60-25q26 0 26 25 0 26-26 26-25 0-25-26 0-25 25-25zm0 80q26 0 26 25 0 26-26 26-25 0-25-26 0-25 25-25zM218 416q-26 0-26-26 0-25 26-25 25 0 25 25 0 26-25 26zm87-51q25 0 25 25 0 26-25 26-26 0-26-26 0-25 26-25zm85 0q26 0 26 25 0 26-26 26-25 0-25-26 0-25 25-25zm0-256q11 0 18.5 7t7.5 18-7.5 18.5T390 160H218q-11 0-18.5-7.5T192 134t7.5-18 18.5-7h172z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/phone";
export { pathData, ltr, accData };
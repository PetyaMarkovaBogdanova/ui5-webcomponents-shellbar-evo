import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "vertical-bullet-chart";
const pathData = "M448 32v32H320V32h128zm-96 376V104q0-8 8-8h48q8 0 8 8v304q0 8-8 8h-48q-8 0-8-8zM192 127V96h128v31H192zm32 41q0-8 8-8h48q8 0 8 8v240q0 8-8 8h-48q-8 0-8-8V168zm-32 25v31H64v-31h128zm-88 64h48q8 0 8 8v143q0 8-8 8h-48q-8 0-8-8V265q0-8 8-8zM32 449h448v31H32v-31z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/vertical-bullet-chart";
export { pathData, ltr, accData };
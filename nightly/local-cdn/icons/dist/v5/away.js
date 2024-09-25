import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "away";
const pathData = "M256 64q46 0 87 17.5t71.5 48 48 71.5 17.5 87-17.5 87-48 71.5-71.5 48-87 17.5-87-17.5-71.5-48-48-71.5T32 288t17.5-87 48-71.5 71.5-48T256 64zm0 397q36 0 67.5-13.5t55-37 37-55T429 288t-13.5-67.5-37-55-55-37T256 115t-67.5 13.5-55 37-37 55T83 288t13.5 67.5 37 55 55 37T256 461zm78-192q11 0 18 7t7 18-7 18.5-18 7.5h-72q-11 0-18.5-7.5T236 294V186q0-11 7.5-18.5T262 160t18.5 7.5T288 186v83h46zM47 117q-8 11-21 11-11 0-18.5-7T0 106q0-10 12-27.5t28.5-35 34.5-30T105 1q10 0 16.5 7.5T128 26q0 6-4 12t-15 14Q95 62 78 78.5T47 117zM407 1q12 0 30 12.5t34.5 30 28.5 35 12 27.5q0 8-8 15t-18 7q-13 0-21-11-14-22-30.5-38.5T404 52q-12-8-16-14t-4-12q0-10 6.5-17.5T407 1z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/away";
export { pathData, ltr, accData };
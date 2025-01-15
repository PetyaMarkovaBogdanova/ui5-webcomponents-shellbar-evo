import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "history";
const pathData = "M254 0q53 0 100 20t82 54.5 55.5 81.5T512 256q0 54-20.5 100.5t-55.5 81-82 54.5-101 20q-45 0-86-14.5T92 457t-57.5-62T1 317q-1-5-1-6.5V307q0-11 7.5-18t18.5-7q8 0 15 5.5t9 14.5q8 35 27.5 64.5T124 417t60 32.5 69 11.5q43 0 81-16t66-43.5 44.5-65T461 256t-16.5-80.5-44.5-65T334.5 67 254 51q-56 0-105 27.5T73 154h93q11 0 18.5 7t7.5 18-7.5 18.5T166 205H25q-11 0-18-7.5T0 179V25Q0 14 7 7t18-7 18.5 7T51 25v71q37-46 90-71T254 0zm1 96q11 0 18 7.5t7 18.5v124l65 63q7 6 7 18 0 10-7 17.5t-18 7.5q-9 0-18-7l-72-71q-8-8-8-18V122q0-11 7.5-18.5T255 96z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/history";
export { pathData, ltr, accData };
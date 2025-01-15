import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "collision";
const pathData = "M448 486q0 11-7.5 18.5T422 512h-12q-11 0-18.5-7.5T384 486v-19H64v19q0 11-7.5 18.5T38 512H26q-11 0-18.5-7.5T0 486V263q0-4 2-10l28-80q10-27 33-43.5t52-16.5h19q11 0 18.5 7.5T160 139t-7.5 18.5T134 165h-19q-28 0-36 25l-17 47h72q11 0 18.5 7t7.5 18-7.5 18.5T134 288H51v128h346v-32q0-11 7-18.5t18-7.5 18.5 7.5T448 384v102zM320 384q-14 0-23-9t-9-23 9-23 23-9 23 9 9 23-9 23-23 9zm-192-64q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm380-80q4 7 4 15 0 13-9 23t-23 10H224q-14 0-23-10t-9-23q0-8 4-15L324 16q9-16 28-16t28 16zm-156 16q16 0 24-10t8-22q0-11-7.5-20.5T354 192q-17 0-25.5 10.5T320 225t8 21.5 24 9.5zm32-176q0-14-9-23t-23-9-23 9-9 23v64q0 14 9 23t23 9 23-9 9-23V80z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/collision";
export { pathData, ltr, accData };
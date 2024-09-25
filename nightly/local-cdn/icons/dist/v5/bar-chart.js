import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "bar-chart";
const pathData = "M70 352q11 0 18.5 7.5T96 378v76q0 11-7.5 18.5T70 480H58q-11 0-18.5-7.5T32 454v-76q0-11 7.5-18.5T58 352h12zm128-192q11 0 18.5 7.5T224 186v268q0 11-7.5 18.5T198 480h-12q-11 0-18.5-7.5T160 454V186q0-11 7.5-18.5T186 160h12zM454 32q11 0 18.5 7.5T480 58v396q0 11-7.5 18.5T454 480h-12q-11 0-18.5-7.5T416 454V58q0-11 7.5-18.5T442 32h12zM326 224q11 0 18.5 7.5T352 250v204q0 11-7.5 18.5T326 480h-12q-11 0-18.5-7.5T288 454V250q0-11 7.5-18.5T314 224h12z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/bar-chart";
export { pathData, ltr, accData };
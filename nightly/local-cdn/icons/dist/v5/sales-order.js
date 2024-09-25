import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "sales-order";
const pathData = "M367 328q-7 0-7 9 0 3 2.5 6t4.5 3h22q24 0 41.5 17.5T448 406q0 20-12.5 36.5T403 464v22q0 11-7 18.5t-18 7.5-18.5-7.5T352 486v-20h-18q-11 0-18-7.5t-7-18.5 7-18 18-7h55q3 0 5.5-3t2.5-6q0-9-8-9h-22q-23 0-40.5-18T309 337q0-21 12-37t31-21v-29q0-11 7.5-18.5T378 224t18 7.5 7 18.5v26h19q11 0 18.5 7.5T448 302t-7.5 18.5T422 328h-55zm23-264q24 0 41 17t17 41v44q0 11-7.5 18.5T422 192t-18-7.5-7-18.5v-44q0-7-7-7h-39q-5 20-20.5 32.5T294 160h-76q-21 0-36.5-12.5T161 115h-39q-7 0-7 7v332q0 7 7 7h108q11 0 18.5 7t7.5 18-7.5 18.5T230 512H122q-24 0-41-17t-17-41V122q0-24 17-41t41-17h38v-6q0-24 17-41t41-17h76q24 0 41 17t17 41v6h38zm-89-6q0-7-7-7h-76q-7 0-7 7v44q0 7 7 7h76q7 0 7-7V58z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/sales-order";
export { pathData, ltr, accData };
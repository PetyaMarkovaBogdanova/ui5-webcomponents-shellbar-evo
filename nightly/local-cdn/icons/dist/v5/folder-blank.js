import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "folder-blank";
const pathData = "M422 480H90q-38 0-64-26T0 390V122q0-38 26-64t64-26h115q9 0 18 7l44 44h155q38 0 64 26t26 64v217q0 38-26 64t-64 26zM90 83q-17 0-28 11t-11 28v268q0 17 11 28t28 11h332q17 0 28-11t11-28V173q0-17-11-28t-28-11H256q-9 0-18-7l-44-44H90z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/folder-blank";
export { pathData, ltr, accData };
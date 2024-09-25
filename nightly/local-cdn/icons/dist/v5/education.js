import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "education";
const pathData = "M486 32q11 0 18.5 7.5T512 58v295q0 9-6 16t-15 9q-30 5-56.5 12.5t-52.5 19-53 27.5-58 38q-8 5-15 5t-15-5q-31-22-58-38t-53-27.5-52.5-19T21 378q-9-2-15-9t-6-16V58q0-11 7.5-18.5T26 32t18 7.5T51 58v273q48 10 90 28t89 47V147q0-12 13.5-25t32-25T313 75.5 343 62q32-14 69-22t74-8zm-25 52q-47 5-95.5 24T282 158v248q47-29 89-47t90-28V84zM106 256q-10 0-10-9V48q0-16 16-16 3 0 5 1l64 21q11 3 11 15v178q0 9-10 9-4 0-10-6l-28-26-24 24q-8 8-14 8z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/education";
export { pathData, ltr, accData };
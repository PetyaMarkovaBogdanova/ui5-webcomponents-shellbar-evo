import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "status-error";
const pathData = "M512 256q0 53-20.5 100t-55 81.5-81 54.5-99.5 20-100-20.5-81.5-55T20 355 0 256q0-54 20-100.5t55-81T156.5 20 256 0t99.5 20T437 75t55 81.5 20 99.5zM399 364q3-3 3-6t-3-6l-86-86q-3-3-3-6t3-6l81-81q3-3 3-6t-3-6l-37-37q-2-2-6-2t-6 2l-83 82q-1 3-6 3-3 0-6-3l-84-83q-1-2-6-2-4 0-6 2l-37 37q-3 3-3 6t3 6l83 82q3 3 3 6t-3 6l-83 82q-2 2-2.5 4.5l-.5 2.5q0 3 3 5l36 37q4 2 6 2 4 0 6-2l85-84q2-2 6-2t6 2l88 88q4 2 6 2t6-2z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/status-error";
export { pathData, ltr, accData };
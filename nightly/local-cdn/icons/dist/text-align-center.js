import { isLegacyThemeFamilyAsync } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { pathData as pathDatav4, ltr, accData } from "./v4/text-align-center.js";
import { pathData as pathDatav5 } from "./v5/text-align-center.js";

const getPathData = async() => {
	return await isLegacyThemeFamilyAsync() ? pathDatav4 : pathDatav5;
};

export default "text-align-center";
export { getPathData, ltr, accData };
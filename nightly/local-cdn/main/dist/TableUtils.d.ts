import type Table from "./Table";
import type TableRow from "./TableRow";
declare const isInstanceOfTable: (obj: any) => obj is Table;
declare const isSelectionCheckbox: (e: Event) => boolean;
declare const isHeaderSelector: (e: Event) => boolean;
declare const findRowInPath: (composedPath: Array<EventTarget>) => TableRow;
declare const findVerticalScrollContainer: (element: HTMLElement) => HTMLElement;
declare const scrollElementIntoView: (scrollContainer: HTMLElement, element: HTMLElement, stickyElements: HTMLElement[], isRtl: boolean) => void;
declare const isFeature: <T>(element: any, identifier: string) => element is T;
export { isInstanceOfTable, isSelectionCheckbox, isHeaderSelector, findRowInPath, findVerticalScrollContainer, scrollElementIntoView, isFeature, };

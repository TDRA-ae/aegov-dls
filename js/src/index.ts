import Events from "./dom/events";
import { initAccordions } from "./components/accordion";
import { initCollapses } from './components/collapse';
import { initDismisses } from './components/dismiss';
import { initDropdowns } from './components/dropdown';
import { initModals } from './components/modal';
import { initTooltips } from './components/tooltip';

const events = new Events("load", [
	initAccordions,
    initCollapses,
    initDismisses,
    initDropdowns,
    initModals,
	initTooltips
]);
events.init()

// export all components
export { default as Accordion } from "./components/accordion";
export { default as Collapse } from './components/collapse';
export { default as Dismiss } from './components/dismiss';
export { default as Dropdown } from './components/dropdown';
export { default as Modal } from './components/modal';
export { default as Tooltip } from './components/tooltip';

// export all types
export * from "./components/accordion/types";
export * from './components/collapse/types';
export * from './components/dismiss/types';
export * from './components/dropdown/types';
export * from './components/modal/types';
export * from './components/tooltip/types';

// export all interfaces
export * from "./components/accordion/interface";
export * from './components/collapse/interface';
export * from './components/dismiss/interface';
export * from './components/dropdown/interface';
export * from './components/modal/interface';
export * from './components/tooltip/interface';

// export init functions
export { initAccordions } from "./components/accordion";
export { initCollapses } from './components/collapse';
export { initDismisses } from './components/dismiss';
export { initDropdowns } from './components/dropdown';
export { initModals } from './components/modal';
export { initTooltips } from './components/tooltip';

// export all init functions
export { initAEGov } from "./components/index"

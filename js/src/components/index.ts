import { initAccordions } from "./accordion"
import { initCollapses } from './collapse';
import { initDismisses } from './dismiss';
import { initDropdowns } from './dropdown';
import { initModals } from './modal';
import { initTabs } from './tabs';
import { initTooltips } from './tooltip';

export function initAEGov() {
  initAccordions();
  initCollapses();
  initDismisses();
  initDropdowns();
  initModals();
  initTabs();
  initTooltips();
}

if (typeof window !== 'undefined') {
    window.initAEGov = initAEGov;
}

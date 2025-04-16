// primary component list
import Accordion, { initAccordions } from "./components/accordion";
import Collapse, { initCollapses } from './components/collapse';
import Dismiss, { initDismisses } from './components/dismiss';
import Drawer, { initDrawers } from './components/drawer';
import Dropdown, { initDropdowns } from './components/dropdown';
import Modal, { initModals } from './components/modal';
import Popover, { initPopovers } from './components/popover';
import Tabs, { initTabs } from './components/tabs';
import Tooltip, { initTooltips } from './components/tooltip';
import './components/index';
import Events from './dom/events';
import { initCustom } from './components/custom';

const events = new Events("load", [
  initAccordions,
  initCollapses,
  initDismisses,
  initDropdowns,
  initModals,
  initPopovers,
  initDrawers,
  initTabs,
  initTooltips,
  initCustom
]);
events.init();

export default {
  Accordion,
  Collapse,
  Dismiss,
  Dropdown,
  Modal,
  Popover,
  Drawer,
  Tabs,
  Tooltip
};

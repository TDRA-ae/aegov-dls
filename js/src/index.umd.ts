// primary component list
import Accordion, { initAccordions } from "./components/accordion";
import Collapse, { initCollapses } from './components/collapse';
import Dismiss, { initDismisses } from './components/dismiss';
import Dropdown, { initDropdowns } from './components/dropdown';
import Modal, { initModals } from './components/modal';
import Tooltip, { initTooltips } from './components/tooltip';
import './components/index';
//import Events from './dom/events';

const events = new Events("load", [
  initAccordions,
  initCollapses,
  initDismisses,
  initDropdowns,
  initModals,
  initTooltips
]);
events.init()

export default {
  Accordion,
  Collapse,
  Dismiss,
  Dropdown,
  Modal,
  Tooltip
}

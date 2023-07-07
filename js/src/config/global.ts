import Accordion from '../components/accordion';
import Collapse from '../components/collapse';
import Dismiss from '../components/dismiss';
import Dropdown from '../components/dropdown';
import Modal from '../components/modal';
import Tabs from '../components/tabs';
import Tooltip from '../components/tooltip';

declare global {
    interface Window {
        Accordion: typeof Accordion;
        Collapse: typeof Collapse;
        Dismiss: typeof Dismiss;
        Dropdown: typeof Dropdown;
        Modal: typeof Modal;
        Tabs: typeof Tabs;
        Tooltip: typeof Tooltip;
        initAccordions: () => void;
        initCollapses: () => void;
        initDismisses: () => void;
        initDropdowns: () => void;
        initModals: () => void;
        initTabs: () => void;
        initTooltips: () => void;
        initAEGov: () => void;
    }
}
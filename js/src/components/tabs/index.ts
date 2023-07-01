/* eslint-disable @typescript-eslint/no-empty-function */
import type { TabItem, TabsOptions } from './types';
import { TabsInterface } from './interface';

const Default: TabsOptions = {
    defaultTabId: null,
    activeClasses:'tab-active',
    inactiveClasses:'tab-inactive',
    onShow: () => {},
};

class Tabs implements TabsInterface {
    _items: TabItem[];
    _activeTab: TabItem;
    _options: TabsOptions;

    constructor(items: TabItem[] = [], options: TabsOptions = Default) {
        this._items = items;
        this._activeTab = options ? this.getTab(options.defaultTabId) : null;
        this._options = { ...Default, ...options };
        this._init();
    }

    _init() {
        if (this._items.length) {
            // set the first tab as active if not set by explicitly
            if (!this._activeTab) {
                this._setActiveTab(this._items[0]);
            }

            // force show the first default tab
            this.show(this._activeTab.id, true);

            // show tab content based on click
            this._items.map((tab) => {
                tab.triggerEl.addEventListener('click', () => {
                    this.show(tab.id);
                });
            });
        }
    }

    getActiveTab() {
        return this._activeTab;
    }

    _setActiveTab(tab: TabItem) {
        this._activeTab = tab;
    }

    getTab(id: string) {
        return this._items.filter((t) => t.id === id)[0];
    }

     show(id: string, forceShow = false) {
        const tab = this.getTab(id);

        // don't do anything if already active
        if (tab === this._activeTab && !forceShow) {
            return;
        }

        // hide other tabs
        this._items.map((t: TabItem) => {
            if (t !== tab) {
                t.triggerEl.classList.remove(
                    ...this._options.activeClasses.split(' ')
                );
                t.triggerEl.classList.add(
                    ...this._options.inactiveClasses.split(' ')
                );
                t.targetEl.classList.add('hidden');
                t.triggerEl.setAttribute('aria-selected', 'false');
            }
        });

        // show active tab
        tab.triggerEl.classList.add(...this._options.activeClasses.split(' '));
        tab.triggerEl.classList.remove(
            ...this._options.inactiveClasses.split(' ')
        );
        tab.triggerEl.setAttribute('aria-selected', 'true');
        tab.targetEl.classList.remove('hidden');

        this._setActiveTab(tab);

        // callback function
        this._options.onShow(this, tab);
    }
}

export function initTabs() {
    document.querySelectorAll('[data-tabs-toggle]').forEach(($triggerEl) => {
        const tabItems: TabItem[] = [];
        let defaultTabId = null;
        $triggerEl
            .querySelectorAll('[role="tab"]')
            .forEach(($triggerEl: HTMLElement) => {
                const isActive =
                    $triggerEl.getAttribute('aria-selected') === 'true';
                const tab: TabItem = {
                    id: $triggerEl.getAttribute('data-tabs-target'),
                    triggerEl: $triggerEl,
                    targetEl: document.querySelector(
                        $triggerEl.getAttribute('data-tabs-target')
                    ),
                };
                tabItems.push(tab);

                if (isActive) {
                    defaultTabId = tab.id;
                }
            });
        new Tabs(tabItems, {
            defaultTabId: defaultTabId,
        } as TabsOptions);
    });
}

if (typeof window !== 'undefined') {
    window.Tabs = Tabs;
    window.initTabs = initTabs;
}

export default Tabs;
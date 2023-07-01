import type { AccordionItem, AccordionOptions } from "./types"
import { AccordionInterface } from "./interface"

const Default: AccordionOptions = {
  alwaysOpen: false,
  activeClasses: "accordion-active",
  inactiveClasses: "accordion-inactive",
  onOpen: () => {},
  onClose: () => {},
  onToggle: () => {},
}

class Accordion implements AccordionInterface {
  _items: AccordionItem[]
  _options: AccordionOptions

  constructor(items: AccordionItem[] = [], options: AccordionOptions = Default) {
    this._items = items
    this._options = { ...Default, ...options }
    this._init()
  }

  private _init() {
    if (this._items.length) {
      // show accordion item based on click
      this._items.map((item) => {
        if (item.active) {
          this.open(item.id)
        }

        item.triggerEl.addEventListener("click", () => {
          this.toggle(item.id)
        })
      })
    }
  }

  getItem(id: string) {
    return this._items.filter((item) => item.id === id)[0]
  }

  open(id: string) {
    const item = this.getItem(id)

    // don't hide other accordions if always open
    if (!this._options.alwaysOpen) {
      this._items.map((i) => {
        if (i !== item) {
          i.triggerEl.classList.remove(...this._options.activeClasses.split(" "))
          i.triggerEl.classList.add(...this._options.inactiveClasses.split(" "))
          i.targetEl.classList.add("hidden")
          i.triggerEl.setAttribute("aria-expanded", "false")
          i.active = false
        }
      })
    }

    // show active item
    item.triggerEl.classList.add(...this._options.activeClasses.split(" "))
    item.triggerEl.classList.remove(...this._options.inactiveClasses.split(" "))
    item.triggerEl.setAttribute("aria-expanded", "true")
    item.targetEl.classList.remove("hidden")
    item.active = true

    // callback function
    this._options.onOpen(this, item)
  }

  toggle(id: string) {
    const item = this.getItem(id)

    if (item.active) {
      this.close(id)
    } else {
      this.open(id)
    }

    // callback function
    this._options.onToggle(this, item)
  }

  close(id: string) {
    const item = this.getItem(id)

    item.triggerEl.classList.remove(...this._options.activeClasses.split(" "))
    item.triggerEl.classList.add(...this._options.inactiveClasses.split(" "))
    item.targetEl.classList.add("hidden")
    item.triggerEl.setAttribute("aria-expanded", "false")
    item.active = false

    // callback function
    this._options.onClose(this, item)
  }
}

if (typeof window !== "undefined") {
  window.Accordion = Accordion
}

export function initAccordions() {
  document.querySelectorAll("[data-accordion]").forEach(($accordionEl) => {
    const alwaysOpen = $accordionEl.getAttribute("data-accordion")
    const activeClasses = $accordionEl.getAttribute("data-active-classes")
    const inactiveClasses = $accordionEl.getAttribute("data-inactive-classes")

    const items = [] as AccordionItem[]

    $accordionEl.querySelectorAll("[data-accordion-target]").forEach(($triggerEl) => {
      // Consider only items that directly belong to $accordionEl
      // (to make nested accordions work).
      if ($triggerEl.closest("[data-accordion]") === $accordionEl) {
        const item = {
          id: $triggerEl.getAttribute("data-accordion-target"),
          triggerEl: $triggerEl,
          targetEl: document.querySelector($triggerEl.getAttribute("data-accordion-target")),
          active: $triggerEl.getAttribute("aria-expanded") === "true" ? true : false,
        } as AccordionItem
        items.push(item)
      }
    })

    new Accordion(items, {
      alwaysOpen: alwaysOpen === "open" ? true : false,
      activeClasses: activeClasses ? activeClasses : Default.activeClasses,
      inactiveClasses: inactiveClasses ? inactiveClasses : Default.inactiveClasses,
    } as AccordionOptions)
  })
}

export default Accordion

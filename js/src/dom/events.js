class Events {
    _eventType;
    _eventFunctions;

    constructor(eventType, eventFunctions) {
        this._eventType = eventType;
        this._eventFunctions = eventFunctions;
    }

    init() {
        this._eventFunctions.forEach((eventFunction) => {
            if (typeof window !== 'undefined') {
                window.addEventListener(this._eventType, eventFunction);
            }
        });
    }
}

export default Events;
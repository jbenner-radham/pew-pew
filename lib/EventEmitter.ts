import Messages from './Messages';

export default class EventEmitter {
  private listeners: Record<string, Function[]>;

  public constructor() {
    this.listeners = {};
  }

  public on(message: number | string, listener: Function): void {
    if (!this.listeners[message]) this.listeners[message] = [];

    this.listeners[message].push(listener);
  }

  public emit(message: number | string, payload?: any): void {
    if (this.listeners[message])
      this.listeners[message].forEach(listener => listener(message, payload))
  }
}

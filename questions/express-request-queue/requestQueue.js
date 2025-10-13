export class RequestQueue {
  constructor() {
    this.current = Promise.resolve();
    this.active = 0;
    this.maxSeen = 0;
  }

  async enqueue(task) {
    this.active++;
    this.maxSeen = Math.max(this.maxSeen, this.active);

    const previous = this.current;
    const next = previous.finally(() => task().finally(() => {
      this.active--;
    }));

    this.current = next;

    return next;
  }
}

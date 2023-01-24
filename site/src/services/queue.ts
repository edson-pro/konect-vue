import { fromEvent } from "rxjs";
import { scan, startWith, distinctUntilChanged } from "rxjs/operators";

const storage$ = fromEvent(window, "storage").pipe(
  scan((acc, event: any) => {
    return event.newValue;
  }, null),
  startWith(localStorage.getItem("queues")),
  distinctUntilChanged()
);

storage$.subscribe((value) => console.log(value));

class Queue {
  checkQueue() {
    const queues = JSON.parse(localStorage.getItem("queues")) || [];
    if (queues.length) {
      queues.forEach((queue) => {
        console.log(queue);
      });
    }
  }
  addToQueue({ action, payload, collection, id }: any) {
    const queues = JSON.parse(localStorage.getItem("queues")) || [];
    const newQueues = [
      ...queues,
      {
        action,
        payload,
        collection,
        id: queues.length + 1,
      },
    ];
    localStorage.setItem("queues", JSON.stringify(newQueues));
  }
  removeToQueue(id) {
    const queues = JSON.parse(localStorage.getItem("queues")) || [];
    const newQueue = queues.filter((e) => e.id !== id);
    localStorage.setItem("queues", JSON.stringify(newQueue));
  }
}

const queue = new Queue();

const online$ = fromEvent(window, "online");

online$.subscribe(() => queue.checkQueue());

export default queue;

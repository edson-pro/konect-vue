import queue from "@/services/queue";
import { fromEvent } from "rxjs";
const online$ = fromEvent(window, "online");
online$.subscribe(() => queue.checkQueue());

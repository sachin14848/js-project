class Queue {
    constructor() {
        this.items = [];
        this.front = -1;
        this.rear = -1;
    }

    enqueue(item) {
        if (this.front === -1) {
            this.front = 0;
            this.rear = 0;
        }else {
            this.rear++;
        }
        this.items[this.rear] = item;
    }

    dequeue() {
        if (this.front === -1 || this.front > this.rear) {
            return null;
        }
        const item = this.items[this.front];
        this.front++;
        return item;
    }
    
    isEmpty() {
        return this.front === -1 || this.front > this.rear;
    }

    size() {
        return this.rear - this.front + 1;
    }

    peek() {
        if (this.front === -1 || this.front > this.rear) {
            return null;
        }
        return this.items[this.front];
    }

    print() {
        console.log(this.items);
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.size());
console.log(queue.isEmpty());
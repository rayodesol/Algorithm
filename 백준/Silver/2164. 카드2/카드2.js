class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue {
    constructor() {
        this.front = null
        this.back = null
        this.size = 0
    }
    
    enqueue(data) {
        const newNode = new Node(data)
        if (this.size === 0) this.front = newNode
        else this.back.next = newNode
        this.back = newNode
        this.size++
    }
    
    dequeue() {
        if (this.size === 0) return
        const removed = this.front.data
        this.front = this.front.next
        this.size--
        if (this.size === 0) this.back = null
        return removed
    }
    
    length() {
        return this.size
    }
    
    peek() {
        if (this.size === 0) return null
        return this.front.data
    }
}

const fs = require('fs');
const n = Number(fs.readFileSync('./dev/stdin').toString())
const queue = new Queue()

for (let i = 1; i <= n; i++) {
    queue.enqueue(i)
}

while (queue.length() > 1) {
    queue.dequeue()
    queue.enqueue(queue.dequeue())
}

console.log(queue.peek())
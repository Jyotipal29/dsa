// // linkedlist is the collactiion of value
// // linkedlist is the space effeicnt then array

// //create a node

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     //insert at head
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     insertAtHead(data) {
//         const newNode = new Node(data)
//         newNode.next = this.head;
//         this.head = newNode

//         this.size++;
//     }
//     //insert at index
//     insertAt(index, data) {

//         if (index < 0 || index > this.size) {
//             return "Invalid Index"
//         }

//         if (index === 0) {
//             this.insertAtHead(data)
//             return;
//         }

//         let newNode = new Node(data)
//         let temp = this.head;
//         for (let i = 0; i < index - 1; i++) {
//             temp = temp.next;

//         }

//         newNode.next = temp.next;
//         temp.next = newNode;

//         this.size++;
//     }
//     //print
//     print() {
//         let result = ""
//         let temp = this.head;
//         while (temp) {
//             result += `${temp.data}->`
//             temp = temp.next;
//         }

//         return result
//     }
//     //remove at head
//     //remove element

//     removeElement(data) {
//         if (this.isEmpty()) {
//             return "list is already empty"
//         }

//         let current = this.head, prev = null;
//         while (current) {
//             if (current.data === data) {
//                 if (prev === null) {
//                     this.head = current.next;
//                 } else {
//                     prev.next = current.next;
//                 }

//                 return current.element
//             }

//             prev = current;
//             current = prev.next;
//         }

//         return -1;


//     }
//     //search item
//     search(data) {
//         let curr = this.head;
//         let index = 0;
//         while (curr) {
//             if (curr.data === data) {
//                 return index
//             }
//             index++;
//             curr = curr.next;
//         }
//         return -1;
//     }
//     //middle of linked list


//     isEmpty() {
//         return this.size === 0;
//     }
// }

// let list = new LinkedList()
// list.insertAtHead(4)
// list.insertAtHead(6)
// list.insertAtHead(7)
// list.insertAtHead(5)
// list.insertAt(2, 44)
// list.insertAt(1, 77)
// list.removeElement(44)
// console.log(list.search(7))
// console.log(list.print())
// console.log(list)

//revison of the linkedlist

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}



class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    addFist(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode
        this.size++
    }


    addLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;

        this.size++
    }


    addAt(data, index) {
        const newNode = new Node(data)
        if (index < 0 || index > this.size) {
            return "invalid index"
        }

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;

            return;
        }


        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }

        newNode.next = curr.next;
        curr.next = newNode;





    }


    removeTop(data) {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;

    }


    removeLast(data) {
        if (!this.head) {
            return;
        }

        let curr = this.head
        while (curr.next.next) {
            curr = curr.next
        }

        curr.next = null;


    }


    removeAt(data, index) {
        if (index < 0 || index > this.size) {
            return "invalid index"
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }


        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }

        if (curr.next) {
            curr.next = curr.next.next
        }


    }
}


const list = new LinkedList()




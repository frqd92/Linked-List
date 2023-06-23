# linked-list
Hello. This is my linked lists assignment from The Odin Project.
I chose to use recursive functions to traverse the nodes as it looks cleaner, but in a real life situation I would probably use loops instead as they require less space (due to the stored calls in the stack when using recursion).

In index.js you can find some tests where the objective is to use the various functions belows to build the following linked list:
    This is the head -> one -> two -> three -> four -> This is the tail -> null



Features:
- append(value) adds a new node containing value to the end of the list

- prepend(value) adds a new node containing value to the start of the list

- appendMultiple(array) adds multiple nodes in sequential order from an array of values

- size() returns the total number of nodes in the list

- head() returns the first node in the list

- tail() returns the last node in the list

- at(index) returns the node at the given index

- pop() removes the last element from the list

- contains(value) returns true if the passed in value is in the list and otherwise returns false

- find(value) returns the index of the node containing value, or null if not found

- toString() represents your LinkedList objects as strings, so you can print them out and preview them in the console

- insertAt(value, index) that inserts a new node with the provided value at the given index

- removeAt(index) that removes the node at the given index

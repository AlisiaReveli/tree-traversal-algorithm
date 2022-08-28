
//Javascript tree representation
class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const d = new Node('d');
const c = new Node('c');
const e = new Node('e');
const f = new Node('f');

// //cases you will need numeric values
// const a = new Node(10);
// const b = new Node(2);
// const d = new Node(39);
// const c = new Node(34);
// const e = new Node(56);
// const f = new Node(6);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;


//Search tree values DFS algorithm

function searchTreBFS(tree) {
    let stack = [tree];
    if (tree.val === null) {
        console.log('Tree is empty');
    }
    while (stack.length) {
        let searchValue = stack.pop();
        console.log(searchValue.val);
        if (searchValue.right !== null) {
            stack.push(searchValue.right)
        }
        if (searchValue.left !== null) {
            stack.push(searchValue.left)
        }
    }
    return;
}
searchTree(a);


//Search tree values recursive
function searchTreeBFSRecursive(tree) {
    const result = []
    if (tree.val === null) return result;
    const leftSideValues = searchTreeRecursive(tree.left);
    const rightSideValues = searchTreeRecursive(tree.right);

    result.push(tree.val, ...leftSideValues, ...rightSideValues)
    console.log('result:', result);

}
searchTreeRecursive(a);



// Search tree values DFS algorithm

function searchTreeDFS(tree) {
    if (tree.val === null) {
        console.log('Tree is empty');
    }
    let queue = [tree];
    while (queue.length) {
        let currentValue = queue.shift();
        console.log(currentValue.val);
        if (currentValue.left !== null) queue.push(currentValue.left)
        if (currentValue.right !== null) queue.push(currentValue.right)
    }
    return;
}

searchTreeDFS(a)



//Fin value


function searchSpecificValue(tree, target) {
    if (tree === null) return 0;
    if (tree.val === target) return 1;
    return (searchSpecificValue(tree.left) || searchSpecificValue(tree.right))
}

searchSpecificValue(a, 'c')


//Summary/total
function treeSumRecursive(tree) {
    if (tree === null) return 0;
    return tree.val + treeSumRecursive(tree.left) + treeSumRecursive(tree.right);
}

treeSumRecursive(a)


//find min

function minTreeValueDfs(tree) {
    if (tree === null) return 'Tree is empty';
    let myValue = Infinity;
    let queue = [tree]; //node value
    while (queue.length) {
        const searchVal = queue.shift();
        if (searchVal.val < myValue) {
            myValue = searchVal.val;
        }
        if (searchVal.left !== null) {
            queue.push(searchVal.left)
        }
        if (searchVal.right !== null) {
            queue.push(searchVal.right)
        }
    }
    console.log(myValue);
}

minTreeValueDfs(a);


function minTreeValueBfs(tree) {
    if (tree === null) return 'Tree is empty';
    let myValue = Infinity;
    let stack = [tree];
    while (stack.length > 0) {
        let searchVal = stack.pop();
        if (searchVal.val < myValue) {
            myValue = searchVal.val
        }
        if (searchVal.right !== null) {
            stack.push(searchVal.right);
        }
        if (searchVal.left !== null) {
            stack.push(searchVal.left);
        }
    }
    console.log(myValue);
}

minTreeValueBfs(a)


function MirrorTree(tree) {
    if (tree === null) return;
    let q = [tree];
    while (q.length > 0) {
        const searchValue = q.shift();
        let temp = searchValue.left;
        searchValue.left = searchValue.right;
        searchValue.right = temp;
        if (searchValue.left !== null) {
            q.push(searchValue.left)
        }
        if (searchValue.right !== null) {
            q.push(searchValue.right)
        }

    }
    console.log(tree);
}

MirrorTree(a)









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

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;



// //Search tree values DFS algorithm

// function searchTreBFS(tree) {
//     let stack = [tree];
//     if (tree.val === null) {
//         console.log('Tree is empty');
//     }
//     while (stack.length) {
//         let searchValue = stack.pop();
//         console.log(searchValue.val);
//         if (searchValue.right !== null) {
//             stack.push(searchValue.right)
//         }
//         if (searchValue.left !== null) {
//             stack.push(searchValue.left)
//         }
//     }
//     return;
// }
// searchTree(a);


// //Search tree values recursive
// function searchTreeBFSRecursive(tree) {
//     const result = []
//     if (tree.val === null) return result;
//     const leftSideValues = searchTreeRecursive(tree.left);
//     const rightSideValues = searchTreeRecursive(tree.right);

//     result.push(tree.val, ...leftSideValues, ...rightSideValues)
//     console.log('result:', result);

// }
// searchTreeRecursive(a);



//Search tree values DFS algorithm

// function searchTreeDFS(tree) {
//     if (tree.val === null) {
//         console.log('Tree is empty');
//     }
//     let queue = [tree];
//     while (queue.length) {
//         let currentValue = queue.shift();
//         console.log(currentValue.val);
//         if (currentValue.left !== null) queue.push(currentValue.left)
//         if (currentValue.right !== null) queue.push(currentValue.right)
//     }
//     return;
// }

// searchTreeDFS(a)




// function searchSpecificValue(tree, target) {
//     if (tree === null) return 0;
//     if (tree.val === target) return 1;
//     return (searchSpecificValue(tree.left) || searchSpecificValue(tree.right))
// }

// searchSpecificValue(a, 'c')


function treeSumRecursive(tree) {
    if (tree === null) return 0;
    return tree.val + treeSumRecursive(tree.left) + treeSumRecursive(tree.right);
}

treeSumRecursive(a)







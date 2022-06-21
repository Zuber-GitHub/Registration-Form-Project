class TreeNode
{
	constructor(data)
	{
		this.data = data;
		this.left = null;
		this.right = null;
	}
}
class BinarySearchTree
{
	constructor()
	{
		this.root = null;
	}
	// Insert a node element
	addNode(node, data)
	{
		if (node != null)
		{
			if (node.data >= data)
			{
				// When new element is smaller or
				// equal to current node
				node.left = this.addNode(node.left, data);
			}
			else
			{
				// When new element is higher to current node
				node.right = this.addNode(node.right, data);
			}
			// important to manage root node
			return node;
		}
		else
		{
			return new TreeNode(data);
		}
	}
    preorder(node)
	{
		if (node != null)
		{
			// Display node value
			process.stdout.write("  " + node.data);
			// Visit to left subtree
			this.preorder(node.left);
			// Visit to right subtree
			this.preorder(node.right);
		}
	}
}
function main()
{
	var tree = new BinarySearchTree();
	tree.root = tree.addNode(tree.root, 10);
	tree.addNode(tree.root, 4);
	tree.addNode(tree.root, 3);
	tree.addNode(tree.root, 5);
	tree.addNode(tree.root, 15);
	tree.addNode(tree.root, 12);
	// Display tree nodes
	console.log("Preorder ");
	tree.preorder(tree.root);
}

main();
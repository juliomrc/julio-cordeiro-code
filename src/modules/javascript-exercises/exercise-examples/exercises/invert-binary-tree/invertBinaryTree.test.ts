import {
    inPlaceInvertBinaryTree,
    invertBinaryTree,
    BinaryTreeNode,
} from "./invertBinaryTree";

describe("Invert binary tree", () => {
    it("Inverts binary tree in place", () => {
        const binaryTree: BinaryTreeNode = {
            value: 1,
            left: {
                value: 2,
            },
            right: {
                value: 3,
            },
        };
        inPlaceInvertBinaryTree(binaryTree);

        expect(binaryTree.right?.value).toBe(2);
        expect(binaryTree.left?.value).toBe(3);
    });
    it("Inverts binary tree", () => {
        const binaryTree: BinaryTreeNode = {
            value: 1,
            left: {
                value: 2,
            },
            right: {
                value: 3,
            },
        };
        const invertedBinaryTree = invertBinaryTree(binaryTree);

        expect(invertedBinaryTree.right?.value).toBe(binaryTree.left?.value);
        expect(invertedBinaryTree.left?.value).toBe(binaryTree.right?.value);
    });
    it("Inverts multiple levels of binary tree", () => {
        const binaryTree: BinaryTreeNode = {
            value: 1,
            left: {
                value: 2,
                left: {
                    value: 3,
                    left: {
                        value: 4,
                    },
                    right: {
                        value: 5,
                    },
                },
                right: {
                    value: 6,
                    left: {
                        value: 7,
                    },
                    right: {
                        value: 8,
                    },
                },
            },
            right: {
                value: 9,
                left: {
                    value: 10,
                    left: {
                        value: 11,
                    },
                    right: {
                        value: 12,
                    },
                },
                right: {
                    value: 13,
                    left: {
                        value: 14,
                    },
                    right: {
                        value: 15,
                    },
                },
            },
        };

        const invertedBinaryTree = invertBinaryTree(binaryTree);

        expect(invertedBinaryTree.right?.value).toBe(binaryTree.left?.value);
        expect(invertedBinaryTree.left?.value).toBe(binaryTree.right?.value);

        expect(invertedBinaryTree.right?.right?.value).toBe(
            binaryTree.left?.left?.value,
        );
        expect(invertedBinaryTree.right?.left?.value).toBe(
            binaryTree.left?.right?.value,
        );

        expect(invertedBinaryTree.right?.right?.right?.value).toBe(
            binaryTree.left?.left?.left?.value,
        );
        expect(invertedBinaryTree.left?.left?.left?.value).toBe(
            binaryTree.right?.right?.right?.value,
        );
    });
});

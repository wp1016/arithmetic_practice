/**
 * 自平衡树
 */
import { TreeNode } from './BinarySearchTree'

class AdelsonVelskiiLandi {
  root: any
  constructor() {
    this.root = null
  }

  /**
   * @description 计算节点高度
   * @private
   * @param node
   * @returns
   * @memberof AdelsonVelskiiLandi
   */
  private heightNode(node: TreeNode): number {
    if (node === null) {
      return -1
    } else {
      return Math.max(this.heightNode(node.left), this.heightNode(node.right)) + 1
    }
  }

  /**
   * @description 向左的单旋转
   * @private
   * @param node
   * @returns
   * @memberof AdelsonVelskiiLandi
   */
  private rotationRR(node: TreeNode) {
    let temp = node.right
    node.right = temp.left
    temp.left = node
    return temp
  }
  /**
   * @description 向右的单旋转
   * @private
   * @param node
   * @returns
   * @memberof AdelsonVelskiiLandi
   */
  private rotationLL(node: TreeNode) {
    let temp = node.left
    node.left = temp.left
    temp.right = node
    return temp
  }
  /**
   * @description 向右双旋转，先做一次RR旋转，再做一次LL旋转
   * @private
   * @param node
   * @returns
   * @memberof AdelsonVelskiiLandi
   */
  private rotationLR(node: TreeNode) {
    node.left = this.rotationRR(node.left)
    return this.rotationLL(node)
  }

  /**
   * @description 向左的双旋转，先做一次LL旋转，再做一次RR旋转
   * @private
   * @param node
   * @returns
   * @memberof AdelsonVelskiiLandi
   */
  private rotationRL(node: TreeNode) {
    node.right = this.rotationLL(node.right)
    return this.rotationRR(node)
  }

  private inserNode(node: TreeNode, newNode: TreeNode) {
    if (node === null) {
      node = newNode
    } else if (newNode.key < node.key) {
      this.inserNode(node.left, newNode)
      if (node.left !== null) {
        //检查平衡
        // 向左子树插入新节点，且节点的值小于其左子节点时，应进行LL旋转。否则，进行LR旋转
        if (this.heightNode(node.left) - this.heightNode(node.right) > 1) {
          if (newNode < node.left.key) {
            node = this.rotationLL(node)
          } else {
            node = this.rotationLR(node)
          }
        }
        // 向右子树插入新节点，且节点的值大于其右子节点时，应进行RR旋转。否则，进行RL旋转。
        if (this.heightNode(node.right) - this.heightNode(node.left) > 1) {
          if (newNode > node.right.key) {
            node = this.rotationRR(node)
          } else {
            node = this.rotationRL(node)
          }
        }
      }
    } else {
      this.inserNode(node.right, newNode)
      if (node.right !== null) {
        //检查平衡
      }
    }
  }

  private inOrderTraverseNode(node: TreeNode, callback?: Function) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback && callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  private preOrderTraverseNode(node: TreeNode, callback?: Function) {
    if (node !== null) {
      callback && callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  private postOrderTraverseNode(node: TreeNode, callback?: Function) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback && callback(node.key)
    }
  }

  private minNode(node: TreeNode) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node.key
    } else {
      return null
    }
  }

  private maxNode(node: TreeNode) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }
      return node.key
    } else {
      return null
    }
  }

  private searchNode(node: TreeNode, key: any) {
    if (node === null) {
      return false
    }
    if (key < node.key) {
      return this.searchNode(node.left, key)
    } else if (key > node.key) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }

  private removeNode(node: TreeNode, key: any) {
    if (node === null) {
      return null
    }
    if (key < node.key) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      // 如果删除的是叶节点
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      // 第二种情况---一个只有一个子节点的节点
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }

      // 第三种情况--- 一个有两个子节点的节点
      let aux = this.findMinNode(node.right)
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }

  private findMinNode(node: TreeNode) {
    while (node && node.left !== null) {
      node = node.left
    }
    return node
  }

  /**
   * @description 向树种插入一个新键
   * @param key
   * @memberof BinarySearchTree
   */
  insert(key: any) {
    let newNode = new TreeNode(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.inserNode(this.root, newNode)
    }
  }

  /**
   * @description 中序遍历
   * 中序遍历是一种以上行顺序访问BST所有节点的遍历方式，也就是以从最小到最大的顺序访问所有节点。
   * 中序遍历的一种应用就是对树进行排序操作
   * @memberof BinarySearchTree
   */
  inOrderTraverse(callback: Function) {
    this.inOrderTraverseNode(this.root, callback)
  }

  /**
   * @description 先序遍历，先序遍历是以优先于后代节点的顺序访问每个节点的。
   * 先序遍历的一种应用是打印一个结构化的文档。
   * 先序遍历和中序遍历的不同点是，先序遍历会先访问节点本身，然后再访问它的左侧子节点，最后是右侧子节点
   * @param callback
   * @memberof BinarySearchTree
   */
  preOrderTraverse(callback: Function) {
    this.preOrderTraverseNode(this.root, callback)
  }

  /**
   * @description 后序遍历，后续遍历则是先访问节点的后代节点，再访问节点本身
   * 后序遍历的一种应用是计算一个目录和它的子目录中所有文件所占空间的大小。
   * @param callback
   * @memberof BinarySearchTree
   */
  postOrderTraverse(callback: Function) {
    this.postOrderTraverseNode(this.root, callback)
  }

  /**
   * @description 查找树的最小键
   * @memberof BinarySearchTree
   */
  min() {
    return this.minNode(this.root)
  }

  /**
   * @description 查找树的最大键
   * @returns
   * @memberof BinarySearchTree
   */
  max() {
    return this.maxNode(this.root)
  }

  /**
   * @description 搜索一个特定的值
   * @param key
   * @returns
   * @memberof BinarySearchTree
   */
  search(key: any) {
    return this.searchNode(this.root, key)
  }

  /**
   * @description 移除一个特定节点
   * @param key
   * @memberof BinarySearchTree
   */
  remove(key: any) {
    this.root = this.removeNode(this.root, key)
  }
}
function printNode(value: any) {
  console.log(value)
}

let tree = new AdelsonVelskiiLandi()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)

tree.insert(6)
console.log('========中序========')
tree.inOrderTraverse(printNode)
console.log('========先序========')
tree.preOrderTraverse(printNode)
console.log('========最小========')
console.log(tree.min())
console.log('========最大========')
console.log(tree.max())
// console.log(JSON.stringify(tree.root))

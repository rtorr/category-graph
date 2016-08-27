// @flow

/**
 * Category Graph
 * categories are "lines" in a Graph
 * that have a list of Node IDs that
 * point to Nodes 
 */

type Node = {
  id: string,
  categories: Array<any>
};

export class Graph {
  nodes: { [id: string]: Node };
  categories: { [id: string]: Array<Node> };
  constructor() {
    this.nodes = {}
    this.categories = {}
  }
  addCategory(id:string) {
    if (!this.categories[id]) {
      this.categories[id] = [];
    }
    return this.categories[id];
  }
  addNode(value:Node) {
    const _node = this.nodes[value.id] ? this.nodes[value.id]
      : this.nodes[value.id] = value;

    value.categories.map(category_id => {
      const _category = this.addCategory(category_id);
      if (_node.categories.indexOf(category_id) === -1) {
        _node.categories.push(category_id);
      }
      if (_category.indexOf(_node) === -1) {
        _category.push(_node);
      }
      return category_id;
    });
    return _node;
  }
  getNode(id: string): any {
    const _node = this.nodes[id];
    if (!_node) {
      throw new Error({ message: `Node ${id} does not exist` })
    }
    _node.categories = _node.categories.map(category_id => {
      return this.getCategory(category_id);
    });
    return _node;
  }
  getCategory(id: string) {
    return this.categories[id];
  }
}
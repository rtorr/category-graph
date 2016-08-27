# Category Graph

`npm install category-graph`

```
/**
 * Graph
 * categories are "lines" in a Graph
 * that have a list of Node IDs that
 * point to Nodes 
 */

const b = new Graph();

b.addNode({
  id: 'test_id',
  categories: ['action_games']
});

b.addNode({
  id: 'test_id',
  categories: ['action_games', 'racing_games']
});

b.addNode({
  id: 'overwatch',
  categories: ['action_games']
});

console.log(b, b.getNode('test_id'));
```
const assert = require('assert');
const Graph = require('./../build/index').Graph;

let g;
beforeEach(function() {
  g = new Graph();
});

describe('Graph', function() {
  describe('#addCategory()', function() {
    it('should create a category if one does not exist, and return the category', function() {
      const category = 'New Games'; 
      g.addCategory(category);
      assert.equal(g.categories['New Games'].length, 0);
      g.addNode({
        id: 'test_node',
        categories: [category]
      });
      g.addCategory(category);
      assert.equal(g.categories['New Games'].length, 1);
    });
  });
  describe('#addNode()', function() {
    it('should create a new node an assign it to its categories', function() {
      const category = 'New Games'; 
      g.addNode({
        id: 'test_node',
        categories: [category]
      });
      assert.equal(g.categories['New Games'].length, 1);
      g.getNode('test_node');
      assert.equal(g.getNode('test_node').id, 'test_node');
    });
  });
  describe('#getNode()', function() {
    it('get node by id', function() {
      const category = 'New Games'; 
      g.addNode({
        id: 'test_node',
        categories: [category]
      });
      assert.equal(g.getNode('test_node').id, 'test_node');
    });
  });
  describe('#getCategory()', function() {
    it('get category by id', function() {
      const category = 'New Games'; 
      g.addNode({
        id: 'test_node',
        categories: [category]
      });
      assert.equal(g.getCategory(category).length, 1);
    });
  });
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Graph = exports.Graph = function () {
  function Graph() {
    _classCallCheck(this, Graph);

    this.nodes = {};
    this.categories = {};
  }

  _createClass(Graph, [{
    key: "addCategory",
    value: function addCategory(id) {
      if (!this.categories[id]) {
        this.categories[id] = [];
      }
      return this.categories[id];
    }
  }, {
    key: "addNode",
    value: function addNode(value) {
      var _this = this;

      var _node = this.nodes[value.id] ? this.nodes[value.id] : this.nodes[value.id] = value;

      value.categories.map(function (category_id) {
        var _category = _this.addCategory(category_id);
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
  }, {
    key: "getNode",
    value: function getNode(id) {
      var _this2 = this;

      var _node = this.nodes[id];
      if (!_node) {
        throw new Error({ message: "Node " + id + " does not exist" });
      }
      _node.categories = _node.categories.map(function (category_id) {
        return _this2.getCategory(category_id);
      });
      return _node;
    }
  }, {
    key: "getCategory",
    value: function getCategory(id) {
      return this.categories[id];
    }
  }]);

  return Graph;
}();

/**
 * Category Graph
 * categories are "lines" in a Graph
 * that have a list of Node IDs that
 * point to Nodes 
 */
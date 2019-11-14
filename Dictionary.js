"use strict";
/**
 * 字典
 */
exports.__esModule = true;
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.items = {};
    }
    /**
     * @description 如果某个键值存在于这个字典中，则返回true，反之则返回false
     * @param key
     * @returns
     * @memberof Dictionary
     */
    Dictionary.prototype.has = function (key) {
        return key in this.items;
    };
    /**
     * @description 向字典中添加新元素
     * @param key
     * @param value
     * @memberof Dictionary
     */
    Dictionary.prototype.set = function (key, value) {
        this.items[key] = value;
    };
    /**
     * @description 通过使用键值来从字典中移除键值对应的数据值
     * @param key
     * @returns
     * @memberof Dictionary
     */
    Dictionary.prototype["delete"] = function (key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    };
    /**
     * @description 通过键值查找特定的数值并返回
     * @param key
     * @returns
     * @memberof Dictionary
     */
    Dictionary.prototype.get = function (key) {
        return this.has(key) ? this.items[key] : undefined;
    };
    /**
     * @description 将字典所包含的所有数值以数组形式返回
     * @returns
     * @memberof Dictionary
     */
    Dictionary.prototype.values = function () {
        var values = [];
        for (var key in this.items) {
            if (this.has(key)) {
                values.push(this.items[key]);
            }
        }
        return values;
    };
    /**
     * @description 将这个字典中的所有元素全部删除
     * @memberof Dictionary
     */
    Dictionary.prototype.clear = function () {
        this.items = {};
    };
    /**
     * @description 将字典所包含的所有键名以数组形式返回
     * @returns
     * @memberof Dictionary
     */
    Dictionary.prototype.keys = function () {
        return Object.keys(this.items);
    };
    /**
     * @description 返回字典所包含元素的数量。与数组的length属性类似
     * @returns
     * @memberof Dictionary
     */
    Dictionary.prototype.size = function () {
        return this.keys().length;
    };
    /**
     * @description 获取字典中所有项
     * @returns
     * @memberof Dictionary
     */
    Dictionary.prototype.getItems = function () {
        return this.items;
    };
    return Dictionary;
}());
exports["default"] = Dictionary;
var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');
console.log(dictionary.has('Gandalf'));

import { root } from './root';
export function assignImpl(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    var len = sources.length;
    for (var i = 0; i < len; i++) {
        var source = sources[i];
        for (var k in source) {
            if (source.hasOwnProperty(k)) {
                target[k] = source[k];
            }
        }
    }
    return target;
}
;
export function getAssign(root) {
    return root.Object.assign || assignImpl;
}
export var assign = getAssign(root);
//# sourceMappingURL=assign.js.map
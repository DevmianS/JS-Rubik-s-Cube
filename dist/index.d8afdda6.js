// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hbBj0":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "2f64ba5ad8afdda6";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5r2AZ":[function(require,module,exports) {
var _modelJs = require("./model.js");
'use strict';
const preEs6module = function() {
    const var1 = 1;
    const var2 = 2;
    const arr1 = [];
    const method1 = function() {
        arr1.push(var1 + var2);
        console.log(arr1);
    };
    return {
        var1,
        method1
    };
}();
preEs6module.method1();
//Init
(()=>{
    document.querySelector('body').innerHTML = `
   <div class = "wrapper"> 
    <div class="scene">
        <div class="cube">
            <div class="side back" id="back"><h2>BACK</h2></div>
            <div class="side left" id="left"><h2>LEFT</h2></div>
            <div class="side front" id="front"><h2>FRONT</h2></div>
            <div class="side right" id="right"><h2>RIGHT</h2></div>
            <div class="side top" id="top"><h2>TOP</h2></div>
            <div class="side bottom" id="bottom"><h2>BOTTOM</h2></div>
                <div class="multi_piece">
                <div class="piece" id="tile_1"><div class="sticker front"><h2>1</h2></div></div>
                <div class="piece" id="tile_2"><div class="sticker front"><h2>2</h2></div></div>
                <div class="piece" id="tile_3"><div class="sticker front"><h2>3</h2></div></div>
                <div class="piece" id="tile_4"><div class="sticker front"><h2>4</h2></div></div>
                <div class="piece" id="tile_5"><div class="sticker front"><h2>5</h2></div></div>
                <div class="piece" id="tile_6"><div class="sticker front"><h2>6</h2></div></div>
                <div class="piece" id="tile_7"><div class="sticker front"><h2>7</h2></div></div>
                <div class="piece" id="tile_8"><div class="sticker front"><h2>8</h2></div></div>
                <div class="piece" id="tile_9"><div class="sticker front"><h2>9</h2></div></div>
                <div class="piece" id="tile_10"><div class="sticker right"><h2>10</h2></div></div>
                <div class="piece" id="tile_11"><div class="sticker right"><h2>11</h2></div></div>
                <div class="piece" id="tile_12"><div class="sticker right"><h2>12</h2></div></div>
                <div class="piece" id="tile_13"><div class="sticker right"><h2>13</h2></div></div>
                <div class="piece" id="tile_14"><div class="sticker right"><h2>14</h2></div></div>
                <div class="piece" id="tile_15"><div class="sticker right"><h2>15</h2></div></div>
                <div class="piece" id="tile_16"><div class="sticker right"><h2>16</h2></div></div>
                <div class="piece" id="tile_17"><div class="sticker right"><h2>17</h2></div></div>
                <div class="piece" id="tile_18"><div class="sticker right"><h2>18</h2></div></div>
                <div class="piece" id="tile_19"><div class="sticker back"><h2>19</h2></div></div>
                <div class="piece" id="tile_20"><div class="sticker back"><h2>20</h2></div></div>
                <div class="piece" id="tile_21"><div class="sticker back"><h2>21</h2></div></div>
                <div class="piece" id="tile_22"><div class="sticker back"><h2>22</h2></div></div>
                <div class="piece" id="tile_23"><div class="sticker back"><h2>23</h2></div></div>
                <div class="piece" id="tile_24"><div class="sticker back"><h2>24</h2></div></div>
                <div class="piece" id="tile_25"><div class="sticker back"><h2>25</h2></div></div>
                <div class="piece" id="tile_26"><div class="sticker back"><h2>26</h2></div></div>
                <div class="piece" id="tile_27"><div class="sticker back"><h2>27</h2></div></div>
                <div class="piece" id="tile_28"><div class="sticker left"><h2>28</h2></div></div>
                <div class="piece" id="tile_29"><div class="sticker left"><h2>29</h2></div></div>
                <div class="piece" id="tile_30"><div class="sticker left"><h2>30</h2></div></div>
                <div class="piece" id="tile_31"><div class="sticker left"><h2>31</h2></div></div>
                <div class="piece" id="tile_32"><div class="sticker left"><h2>32</h2></div></div>
                <div class="piece" id="tile_33"><div class="sticker left"><h2>33</h2></div></div>
                <div class="piece" id="tile_34"><div class="sticker left"><h2>34</h2></div></div>
                <div class="piece" id="tile_35"><div class="sticker left"><h2>35</h2></div></div>
                <div class="piece" id="tile_36"><div class="sticker left"><h2>36</h2></div></div>
                <div class="piece" id="tile_37"><div class="sticker top"><h2>37</h2></div></div>
                <div class="piece" id="tile_38"><div class="sticker top"><h2>38</h2></div></div>
                <div class="piece" id="tile_39"><div class="sticker top"><h2>39</h2></div></div>
                <div class="piece" id="tile_40"><div class="sticker top"><h2>41</h2></div></div>
                <div class="piece" id="tile_41"><div class="sticker top"><h2>41</h2></div></div>
                <div class="piece" id="tile_42"><div class="sticker top"><h2>42</h2></div></div>
                <div class="piece" id="tile_43"><div class="sticker top"><h2>43</h2></div></div>
                <div class="piece" id="tile_44"><div class="sticker top"><h2>44</h2></div></div>
                <div class="piece" id="tile_45"><div class="sticker top"><h2>45</h2></div></div>
                <div class="piece" id="tile_46"><div class="sticker bottom"><h2>46</h2></div></div>
                <div class="piece" id="tile_47"><div class="sticker bottom"><h2>47</h2></div></div>
                <div class="piece" id="tile_48"><div class="sticker bottom"><h2>48</h2></div></div>
                <div class="piece" id="tile_49"><div class="sticker bottom"><h2>49</h2></div></div>
                <div class="piece" id="tile_50"><div class="sticker bottom"><h2>50</h2></div></div>
                <div class="piece" id="tile_51"><div class="sticker bottom"><h2>51</h2></div></div>
                <div class="piece" id="tile_52"><div class="sticker bottom"><h2>52</h2></div></div>
                <div class="piece" id="tile_53"><div class="sticker bottom"><h2>53</h2></div></div>
                <div class="piece" id="tile_54"><div class="sticker bottom"><h2>54</h2></div></div>
                </div>
            <button class="btn_reset">RESET POSITION</button>
            <button class="btn_top">TOP</button>
            <button class="btn_left">LEFT</button>
            <button class="btn_right">RIGHT</button>
            <button class="btn_bottom">BOTTOM</button>
            <button class="btn_left_side_up">Left UP</button>
            <button class="btn_segment-top">top segment</button>
        </div>
    </div>
</div>`;
})();
//sides--------------------------------------------
let moveFront = document.querySelector('.front');
let moveRight = document.querySelector('.right');
let moveLeft = document.querySelector('.left');
let moveBack = document.querySelector('.back');
let moveTop = document.querySelector('.top');
let moveBottom = document.querySelector('.bottom');
let getCube = document.querySelector('#cube');
let sides = document.querySelectorAll('.side');
let tstSide = document.querySelector('.tst');
let tstSide2 = document.querySelector('.tst2');
//buttons--------------------------------------------
let btnRight = document.querySelector('.btn_right');
let btnLeft = document.querySelector('.btn_left');
let bttile_ottom = document.querySelector('.btn_bottom');
let btnTop = document.querySelector('.btn_top');
let btnReset = document.querySelector('.btn_reset');
let btnSegTop = document.querySelector('.btn_segment-top');
//tiles------------------------------
// const tile1 = document.querySelector('#tile_1');
//-------------------------
//TODO
let pitch = -45; //TODO
let yaw = -45;
//CONTROLER-------------------
class Controler {
}
//-----------------------------
//VIEW----------------
class RenderSide {
    size = 300;
    vol = this.size / 2;
    pitch = _modelJs.state.pitch;
    yaw = _modelJs.state.yaw;
    renderSideEl(el, side, tile = 0) {
        // console.log(this.size);
        //variables
        const tilePos = new Map([
            //TODO
            [
                0,
                ''
            ],
            [
                1,
                `translateX(-${this.size}px) translateY(-${this.size}px)`
            ],
            [
                2,
                `translateX(0px) translateY(-${this.size}px)`
            ],
            [
                3,
                `translateX(${this.size}px) translateY(-${this.size}px)`
            ],
            [
                4,
                `translateX(-${this.size}px) translateY(0px)`
            ],
            [
                5,
                `translateX(0px) translateY(0px)`
            ],
            [
                6,
                `translateX(${this.size}px) translateY(0px)`
            ],
            [
                7,
                `translateX(-${this.size}px) translateY(${this.size}px)`
            ],
            [
                8,
                `translateX(0px) translateY(${this.size}px)`
            ],
            [
                9,
                `translateX(${this.size}px) translateY(${this.size}px)`
            ], 
        ]);
        const dims = `width: ${this.size}px;
        height: ${this.size}px;`;
        const sdPos = {
            1: `transform: rotateX(${this.pitch}deg) rotateY(${this.yaw}deg) translateZ(${this.vol}px) ${tilePos.get(tile)}; ${dims};`,
            2: `transform: rotateX(${this.pitch}deg) rotateY(${this.yaw + 90}deg) translateZ(${this.vol}px) ${tilePos.get(tile)}; ${dims};`,
            3: `transform: rotateX(${this.pitch}deg) rotateY(${this.yaw + 180}deg) translateZ(${this.vol}px) ${tilePos.get(tile)}; ${dims};`,
            4: `transform: rotateX(${this.pitch}deg) rotateY(${this.yaw + 270}deg) translateZ(${this.vol}px) ${tilePos.get(tile)}; ${dims};`,
            5: `transform: rotateX(${this.pitch + 90}deg) rotateY(0deg) rotateZ(${-this.yaw}deg) translateZ(${this.vol}px) ${tilePos.get(tile)};
            ${dims}`,
            6: `transform: rotateX(${this.pitch - 90}deg) rotateY(0deg) rotateZ(${this.yaw}deg) translateZ(${//TODO this.yaw or this.yaw + 180?
            this.vol}px) ${tilePos.get(tile)};
            ${dims}`
        };
        //Render selected Tile/side
        document.querySelector(`#${el}`).style = sdPos[`${side}`];
    // document.querySelector(`#tile_2`).style = sdPos[`front`];
    // console.log(document.querySelector(`#${el}`));
    }
    renderSides() {
        this.renderSideEl('front', 'front');
        this.renderSideEl('left', 'left');
        this.renderSideEl('right', 'right');
        this.renderSideEl('top', 'top');
        this.renderSideEl('bottom', 'bottom');
        this.renderSideEl('back', 'back');
    // this.renderSideEl('tile_2', 'top'); //TODO
    }
}
//-----------------------------
class Cube extends RenderSide {
    //TODO probably don't need this class
    //distance from the center in px
    constructor(){
        super();
        this.renderSides();
    }
}
//pieces--------------------------------------------
let piecesArr = [
    0
];
let piecesPosition = [
    0
];
//piecesArr[0] = 0;
// let pBackup = [...piecesArr];
// for (let i = 1; i <= 54; i++) {
//     piecesArr[i] = document.getElementById('tile_' + i);
//     piecesPosition[i] = i;
//     //     console.log(piecesArr[i]);
// }
class Pieces extends RenderSide {
    //TODO
    temp = this.size;
    // vol = this.temp - this.temp / 3;
    size = this.temp / 3;
    tst = 0;
    constructor(){
        super();
        this.renderPieces();
    // this.size / 3; //TODO
    }
    renderPieces() {
        //TODO `front` needs to read current position from the model
        //TODO try to render tiles as pieces! 26 instead of 54!
        //front top left corner
        this.renderSideEl(`tile_${_modelJs.state.crnr.flt.tileNr[0]}`, _modelJs.state.crnr.flt.cubeSide[0], _modelJs.state.crnr.flt.tilePos[0]);
        this.renderSideEl(`tile_${_modelJs.state.crnr.flt.tileNr[1]}`, _modelJs.state.crnr.flt.cubeSide[1], _modelJs.state.crnr.flt.tilePos[1]);
        this.renderSideEl(`tile_${_modelJs.state.crnr.flt.tileNr[2]}`, _modelJs.state.crnr.flt.cubeSide[2], _modelJs.state.crnr.flt.tilePos[2]);
        //front bottom left corner
        this.renderSideEl(`tile_${_modelJs.state.crnr.flb.tileNr[0]}`, _modelJs.state.crnr.flb.cubeSide[0], _modelJs.state.crnr.flb.tilePos[0]);
        this.renderSideEl(`tile_${_modelJs.state.crnr.flb.tileNr[1]}`, _modelJs.state.crnr.flb.cubeSide[1], _modelJs.state.crnr.flb.tilePos[1]);
        this.renderSideEl(`tile_${_modelJs.state.crnr.flb.tileNr[2]}`, _modelJs.state.crnr.flb.cubeSide[2], _modelJs.state.crnr.flb.tilePos[2]);
        //TODO rest of the corners like this^
        //front top right corner
        this.renderSideEl(`tile_${3}`, 1, 3);
        this.renderSideEl(`tile_${10}`, 2, 1);
        this.renderSideEl(`tile_${45}`, 5, 9);
        //front bottom right corner
        this.renderSideEl(`tile_${9}`, 1, 9);
        this.renderSideEl(`tile_${16}`, 2, 7);
        this.renderSideEl(`tile_${49}`, 6, 3);
        //right top back corner
        this.renderSideEl(`tile_${13}`, 2, 3);
        this.renderSideEl(`tile_${19}`, 3, 1);
        this.renderSideEl(`tile_${40}`, 5, 3);
        //right bottom back corner
        this.renderSideEl(`tile_${18}`, 2, 9);
        this.renderSideEl(`tile_${25}`, 3, 7);
        this.renderSideEl(`tile_${54}`, 6, 9);
        //back top left corner
        this.renderSideEl(`tile_${28}`, 4, 1);
        this.renderSideEl(`tile_${22}`, 3, 3);
        this.renderSideEl(`tile_${37}`, 5, 1);
        //back bottom left corner
        this.renderSideEl(`tile_${35}`, 4, 7);
        this.renderSideEl(`tile_${27}`, 3, 9);
        this.renderSideEl(`tile_${52}`, 6, 7);
    //front 1-9
    //right 10-18
    //back 19-27
    //left 28-36
    //top 37-45
    //bottom 46-54
    // for (let i = 1; i <= 54; i++) {
    //     if (i <= 9) this.renderSideEl(`tile_${i}`, `front`, i);
    //     if (i > 9 && i <= 18)
    //         this.renderSideEl(`tile_${i}`, 'right', i - 9);
    //     if (i > 18 && i <= 27)
    //         this.renderSideEl(`tile_${i}`, 'back', i - 18);
    //     if (i > 27 && i <= 36) this.renderSideEl(`tile_${i}`, 'left', i);
    //     if (i > 36 && i <= 45) this.renderSideEl(`tile_${i}`, 'top', i);
    //     if (i > 45 && i <= 54) this.renderSideEl(`tile_${i}`, 'bottom', i);
    // }
    }
    cubeMovement(direction1) {
        if (direction1 == 'right') {
            this.yaw += 90;
            this.renderPieces();
        }
        if (direction1 == 'left') {
            this.yaw -= 90;
            this.renderPieces();
        }
        if (direction1 == 'bottom') {
            this.pitch -= 90;
            this.renderPieces();
        }
        if (direction1 == 'top') {
            this.pitch += 90;
            this.renderPieces();
        }
    }
}
// const d3cube = new Cube();
const piece = new Pieces();
// piece.renderSideEl('tile_1', 'top');
//variables----------------------------------------
let translateZ = 150;
let direction = '';
let spacing = 0;
let innerSpacing = 0;
//css sides variables-------------------------------
let tilePosition = [
    0,
    'translateX(-100px) translateY(-100px)',
    'translateX(0px) translateY(-100px)',
    'translateX(100px) translateY(-100px)',
    'translateX(-100px) translateY(0px)',
    'translateX(0px) translateY(0px)',
    'translateX(100px) translateY(0px)',
    'translateX(-100px) translateY(100px)',
    'translateX(0px) translateY(100px)',
    'translateX(100px) translateY(100px)', 
];
let whichSide = 0;
// let rotateFaceX = 'rotateX( ' + pitch + 'deg)';
let rotateFaceX = `rotateX( ${pitch}deg)`;
let rotateFaceY = `rotateY( ${yaw}deg)`;
let rotateFaceXTop = `rotateX(${pitch + 90}deg)`;
let rotateFaceXBottom = `rotateX(${pitch - 90}deg)`;
let rotateFaceYRight = `rotateY(${yaw + 90}deg)`;
let rotateFaceYBack = `rotateY(${yaw + 180}deg)`;
let rotateFaceYLeft = `rotateY(${yaw + 270}deg)`;
let rotateFaceZTop = `rotateZ(${-yaw}deg)`;
let rotateFaceZBottom = `rotateZ(${+yaw}deg)`;
let rotateFaceZ = 'rotateZ(0deg)';
let pPopup = 'translateZ(' + (translateZ + spacing) + 'px)';
let sideAngles = [
    0,
    document.documentElement.style.setProperty('--front', rotateFaceX + rotateFaceY),
    document.documentElement.style.setProperty('--right', rotateFaceX + rotateFaceYRight),
    document.documentElement.style.setProperty('--back', rotateFaceX + rotateFaceYBack),
    document.documentElement.style.setProperty('--left', rotateFaceX + rotateFaceYLeft),
    document.documentElement.style.setProperty('--top', rotateFaceXTop + 'rotateY(0deg)' + rotateFaceZTop),
    document.documentElement.style.setProperty('--bottom', rotateFaceXBottom + 'rotateY(0deg)' + rotateFaceZBottom), 
];
//getComputedStyle(document.documentElement).getPropertyValue('--top')
//going to be removed:
function cubeMovement(direction2) {
    if (direction2 == 'right') {
        yaw += 90;
        turnCube(direction2);
    } else if (direction2 == 'left') {
        yaw -= 90;
        turnCube(direction2);
    } else if (direction2 == 'bottom') {
        // alert("move bottom "+rotateFaceX);
        pitch -= 90;
        // alert("move bottom "+rotateFaceX);
        turnCube(direction2);
    } else if (direction2 == 'top') {
        pitch += 90;
        turnCube(direction2);
    } else if (direction2 == 'movetops') turnCube(direction2);
    else alert("Wrong direction name! Only 'right, left, bottom, top' are allowed!");
}
function resetPosition() {
    yaw = 0;
    pitch = 0;
//WIP
}
// function getPosition(side) {}
function variables() {
    rotateFaceZ = 'rotateZ(0deg)';
    rotateFaceX = 'rotateX( ' + pitch + 'deg)';
    rotateFaceXTop = 'rotateX( ' + (pitch + 90) + 'deg)';
    rotateFaceXBottom = 'rotateX( ' + (pitch - 90) + 'deg)';
    rotateFaceY = 'rotateY(' + yaw + 'deg)';
    rotateFaceY0 = 'rotateY(0deg)';
    rotateFaceXTop = 'rotateX( ' + (pitch + 90) + 'deg)';
    rotateFaceXBottom = 'rotateX( ' + (pitch - 90) + 'deg)';
    rotateFaceYRight = 'rotateY(' + (yaw + 90) + 'deg)';
    rotateFaceYBack = 'rotateY(' + (yaw + 180) + 'deg)';
    rotateFaceYLeft = 'rotateY(' + (yaw + 270) + 'deg)';
    rotateFaceZTop = 'rotateZ(' + -yaw + 'deg)';
    rotateFaceZBottom = 'rotateZ(' + +yaw + 'deg)';
}
//going to be removed:
function turnCube(direction3) {
    // tilePosition = [0,
    //         "translateX(-100px) translateY(-100px)",//        ^
    //         "translateX(0px) translateY(-100px)",   //        |-100y
    //         "translateX(100px) translateY(-100px)", //        |
    //         "translateX(-100px) translateY(0px)",   //-100x___|0_____100x>
    //         "translateX(0px) translateY(0px)",      //        |
    //         "translateX(100px) translateY(0px)",    //        |-100y
    //         "translateX(-100px) translateY(100px)",
    //         "translateX(0px) translateY(100px)",
    //         "translateX(100px) translateY(100px)"];
    // rotateFaceX = "rotateX( "+(pitch)+"deg)";
    // rotateFaceX = "rotateX( "+(pitch)+"deg)";
    //rotateFaceY = "rotateY("+(yaw)+"deg)";
    variables();
    let tile = 1;
    //move inner sides--------------------------------------------
    // moveFront.style.transform = rotateFaceX + "rotateY("+(yaw)+"deg)" + rotateFaceZ + " translateZ("+(translateZ-innerSpacing)+"px)";
    // moveRight.style.transform = rotateFaceX + "rotateY("+(yaw+90)+"deg)" +rotateFaceZ + " translateZ("+(translateZ-innerSpacing)+"px)";
    // moveLeft.style.transform = rotateFaceX + "rotateY("+(yaw-90)+"deg)" + rotateFaceZ + "  translateZ("+(translateZ-innerSpacing)+"px)" ;
    // moveBack.style.transform = rotateFaceX + "rotateY("+(yaw+180)+"deg)" + rotateFaceZ + " translateZ("+(translateZ-innerSpacing)+"px)" ;
    // moveTop.style.transform = "rotateX( "+(pitch+90)+"deg) rotateY( 0deg) rotateZ("+(-yaw)+"deg) translateZ("+(translateZ-innerSpacing)+"px)" ;
    // moveBottom.style.transform = "rotateX("+(pitch-90)+"deg) rotateY( 0deg) rotateZ("+(yaw)+"deg) translateZ("+(translateZ-innerSpacing)+"px)" ;
    //move pieces--------------------------------------------
    if (direction3 == 'movetops') {
        piecesArr[1].style.transform = rotateFaceX + rotateFaceYRight + rotateFaceZ + tilePosition[1] + pPopup;
        piecesArr[2].style.transform = rotateFaceX + rotateFaceYRight + rotateFaceZ + tilePosition[2] + pPopup;
        piecesArr[3].style.transform = rotateFaceX + rotateFaceYRight + rotateFaceZ + tilePosition[3] + pPopup;
        piecesArr[28].style.transform = rotateFaceX + rotateFaceY + rotateFaceZ + tilePosition[1] + pPopup;
        piecesArr[29].style.transform = rotateFaceX + rotateFaceY + rotateFaceZ + tilePosition[2] + pPopup;
        piecesArr[30].style.transform = rotateFaceX + rotateFaceY + rotateFaceZ + tilePosition[3] + pPopup;
        piecesArr[10].style.transform = rotateFaceX + rotateFaceYBack + rotateFaceZ + tilePosition[1] + pPopup;
        piecesArr[11].style.transform = rotateFaceX + rotateFaceYBack + rotateFaceZ + tilePosition[2] + pPopup;
        piecesArr[12].style.transform = rotateFaceX + rotateFaceYBack + rotateFaceZ + tilePosition[3] + pPopup;
        piecesArr[19].style.transform = rotateFaceX + rotateFaceYLeft + rotateFaceZ + tilePosition[1] + pPopup;
        piecesArr[20].style.transform = rotateFaceX + rotateFaceYLeft + rotateFaceZ + tilePosition[2] + pPopup;
        piecesArr[21].style.transform = rotateFaceX + rotateFaceYLeft + rotateFaceZ + tilePosition[3] + pPopup;
    }
    if (direction3 == 'right' || direction3 == 'left' || direction3 == 'bottom' || direction3 == 'top') for(k = 1; k <= 54; k++){
        //54
        //bad ifs?tile = 1;
        //if (k < 10) rotateFaceY = "rotateY("+(yaw+whichSide)+"deg)";
        if (tile >= 10) tile = 1;
        piecesArr[k].style.transform = rotateFaceX + rotateFaceY + rotateFaceZ + tilePosition[tile] + pPopup;
        //if (k < 10 && k>2) rotateFaceY = "rotateY("+(yaw)+"deg)";
        if (k >= 10) piecesArr[k].style.transform = rotateFaceX + rotateFaceYRight + rotateFaceZ + tilePosition[tile] + pPopup;
        if (k >= 19 && k <= 27) piecesArr[k].style.transform = rotateFaceX + rotateFaceYBack + rotateFaceZ + tilePosition[tile] + pPopup;
        if (k >= 28 && k <= 36) piecesArr[k].style.transform = rotateFaceX + rotateFaceYLeft + rotateFaceZ + tilePosition[tile] + pPopup;
        if (k >= 37) piecesArr[k].style.transform = rotateFaceXTop + rotateFaceY0 + rotateFaceZTop + tilePosition[tile] + pPopup;
        if (k >= 46) piecesArr[k].style.transform = rotateFaceXBottom + rotateFaceY0 + rotateFaceZBottom + tilePosition[tile] + pPopup;
    // tile++;
    }
}
//button event listeners--------------------------------------------
btnRight.addEventListener('click', function() {
    // cubeMovement('right');
    piece.cubeMovement('right');
});
btnLeft.addEventListener('click', function() {
    // cubeMovement('left');
    piece.cubeMovement('left');
});
bttile_ottom.addEventListener('click', function() {
    // cubeMovement('bottom');
    piece.cubeMovement('bottom');
});
btnTop.addEventListener('click', function() {
    // cubeMovement('top');
    piece.cubeMovement('top');
});
btnSegTop.addEventListener('click', function() {
// cubeMovement('movetops');
}); //window.addEventListener('load',getAxis);
 // btnReset.addEventListener('click',resetPosition); WIP

},{"./model.js":"1b1Oa"}],"1b1Oa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    pitch: -45,
    yaw: -45,
    crnr: {
        //front left top
        flt: {
            tileNr: [
                1,
                31,
                44
            ],
            cubeSide: [
                1,
                4,
                5
            ],
            tilePos: [
                1,
                3,
                7
            ]
        },
        //front left bottom
        flb: {
            tileNr: [
                7,
                36,
                46
            ],
            cubeSide: [
                1,
                4,
                6
            ],
            tilePos: [
                7,
                9,
                1
            ]
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["hbBj0","5r2AZ"], "5r2AZ", "parcelRequire1931")

//# sourceMappingURL=index.d8afdda6.js.map

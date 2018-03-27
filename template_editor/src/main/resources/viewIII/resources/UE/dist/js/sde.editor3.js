/*!
 * SoDiaoEditor v2.1.0 
 * author: dd@sodiao.com 
 * createtime: Mon, 16 Oct 2017 14:22:38 GMT
 */
!
function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, t),
        o.l = !0,
        o.exports
    }
    var n = {};
    t.m = e,
    t.c = n,
    t.i = function(e) {
        return e
    },
    t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    },
    t.n = function(e) {
        var n = e && e.__esModule ?
        function() {
            return e.
        default
        }:
        function() {
            return e
        };
        return t.d(n, "a", n),
        n
    },
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    t.p = "",
    t(t.s = 59)
} ([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(e) {
        return typeof e
    }: function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
    };
    t.
default = {
        isFunction: function(e) {
            return "function" == typeof e
        },
        isArray: function(e) {
            return e instanceof Array
        },
        isPlainObject: function(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        },
        getSDELang: function(e, t, n) {
            if (window.SDE_LANG) {
                var i = window.SDE_LANG.toolbars[t];
                if (!i) return e;
                var o = i[n];
                return o || e
            }
            return e
        },
        getPlugin: function(e) {
            if (0 === window.SDE_CONFIG.PLUGINS.length) return null;
            for (var t = 0,
            n = window.SDE_CONFIG.PLUGINS.length; t < n; t++) {
                var i = window.SDE_CONFIG.PLUGINS[t];
                if (e === i.name && i.init) return i.init()
            }
            return null
        },
        isIE: function() {
            return !! (window.ActiveXObject || "ActiveXObject" in window)
        },
        registerEvent: function(e, t, n, i) {
            e.addEventListener ? e.addEventListener(t, n, i, !1) : e.attachEvent ? e.attachEvent("on" + t, n, i) : e["on" + t] = n
        },
        removeEvent: function(e, t, n) {
            e.addEventListener ? e.removeEventListener(t, n, !1) : e.attachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null
        },
        ajax: function(e) {
            function t(e, t) {
                void 0 !== c && (m = setTimeout(function() {
                    "jsonp" === s ? (delete window[e], document.body.removeChild(t)) : (f = !0, p && p.abort()),
                    console.log("timeout")
                },
                c))
            }
            var n = e.url || "",
            o = (e.type || "get").toLowerCase(),
            r = e.data || null,
            a = e.contentType || "",
            s = e.dataType || "",
            l = void 0 === e.async || e.async,
            c = e.timeOut,
            d = e.before ||
            function() {},
            u = e.error ||
            function() {},
            h = e.success ||
            function() {},
            f = !1,
            m = null,
            p = null; !
            function() {
                function e(t, n) {
                    function o(t, n, o) {
                        var r = [];
                        return t = void 0 === o ? t: o + "[" + t + "]",
                        "object" === (void 0 === n ? "undefined": i(n)) && null !== n ? r = r.concat(e(n, t)) : (t = encodeURIComponent(t), n = encodeURIComponent(n), r.push(t + "=" + n)),
                        r
                    }
                    var r, a = [];
                    if ("[object Array]" == Object.prototype.toString.call(t)) for (var s = 0,
                    l = t.length; s < l; s++) r = t[s],
                    a = a.concat(o("object" == (void 0 === r ? "undefined": i(r)) ? s: "", r, n));
                    else if ("[object Object]" == Object.prototype.toString.call(t)) for (var c in t) r = t[c],
                    a = a.concat(o(c, r, n));
                    return a
                }
                r && ("string" == typeof r ? r = function(e) {
                    for (var t = e.split("&"), n = 0, i = t.length; n < i; n++){
                        var name = encodeURIComponent(t[n].split("=")[0]),
                        value = encodeURIComponent(t[n].split("=")[1]);
                        t[n] = name + "=" + value;
                    }
                    return t
                } (r) : "object" === (void 0 === r ? "undefined": i(r)) && (r = e(r)), r = r.join("&").replace("/%20/g", "+"), "get" !== o && "jsonp" !== s || (n += n.indexOf("?") > -1 ? n.indexOf("=") > -1 ? "&" + r: r: "?" + r))
            } (),
            d(),
            "jsonp" === s ?
            function() {
                var e = document.createElement("script"),
                i = (new Date).getTime() + Math.round(1e3 * Math.random()),
                o = "JSONP_" + i;
                window[o] = function(t) {
                    clearTimeout(m),
                    document.body.removeChild(e),
                    h(t)
                },
                e.src = n + (n.indexOf("?") > -1 ? "&": "?") + "callback=" + o,
                e.type = "text/javascript",
                document.body.appendChild(e),
                t(o, e)
            } () : function() {
                p = function() {
                    if (window.XMLHttpRequest) return new XMLHttpRequest;
                    for (var e = ["Microsoft", "msxm3", "msxml2", "msxml1"], t = 0; t < e.length; t++) try {
                        var n = e[t] + ".XMLHTTP";
                        return new ActiveXObject(n)
                    } catch(e) {}
                } (),
                p.open(o, n, l),
                "post" !== o || a ? a && p.setRequestHeader("Content-Type", a) : p.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8"),
                p.onreadystatechange = function() {
                    if (4 === p.readyState) {
                        if (void 0 !== c) {
                            if (f) return;
                            clearTimeout(m)
                        }
                        p.status >= 200 && p.status < 300 || 304 == p.status ? h(p.responseText) : u(p.status, p.statusText)
                    }
                },
                p.send("get" === o ? null: r),
                t()
            } ()
        },
        deepCopy: function() {
            var e = void 0,
            t = void 0,
            n = void 0,
            o = void 0,
            r = void 0,
            a = void 0,
            s = arguments[0] || {},
            l = 1,
            c = arguments.length,
            d = !1;
            for ("boolean" == typeof s && (d = s, s = arguments[l] || {},
            l++), "object" === (void 0 === s ? "undefined": i(s)) || this.isFunction(s) || (s = {}), l === c && (s = this, l--); l < c; l++) if (null != (r = arguments[l])) for (o in r) e = s[o],
            n = r[o],
            s !== n && (d && n && (this.isPlainObject(n) || (t = this.isArray(n))) ? (t ? (t = !1, a = e && this.isArray(e) ? e: []) : a = e && this.isPlainObject(e) ? e: {},
            s[o] = this.deepCopy(d, a, n)) : void 0 !== n && (s[o] = n));
            return s
        },
        getTop: function(e) {
            var t = e.offsetTop;
            return null !== e.offsetParent && (t += this.getTop(e.offsetParent)),
            t
        },
        getLeft: function(e) {
            var t = e.offsetLeft;
            return null !== e.offsetParent && (t += this.getLeft(e.offsetParent)),
            t
        }
    }
},
,
function(e, t) {
    e.exports = function() {
        var e = [];
        return e.toString = function() {
            for (var e = [], t = 0; t < this.length; t++) {
                var n = this[t];
                n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
            }
            return e.join("")
        },
        e.i = function(t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var i = {},
            o = 0; o < this.length; o++) {
                var r = this[o][0];
                "number" == typeof r && (i[r] = !0)
            }
            for (o = 0; o < t.length; o++) {
                var a = t[o];
                "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n: n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
            }
        },
        e
    }
},
function(e, t) {
    function n(e, t) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n],
            o = h[i.id];
            if (o) {
                o.refs++;
                for (var r = 0; r < o.parts.length; r++) o.parts[r](i.parts[r]);
                for (; r < i.parts.length; r++) o.parts.push(l(i.parts[r], t))
            } else {
                for (var a = [], r = 0; r < i.parts.length; r++) a.push(l(i.parts[r], t));
                h[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }
    function i(e) {
        for (var t = [], n = {},
        i = 0; i < e.length; i++) {
            var o = e[i],
            r = o[0],
            a = o[1],
            s = o[2],
            l = o[3],
            c = {
                css: a,
                media: s,
                sourceMap: l
            };
            n[r] ? n[r].parts.push(c) : t.push(n[r] = {
                id: r,
                parts: [c]
            })
        }
        return t
    }
    function o(e, t) {
        var n = p(),
        i = v[v.length - 1];
        if ("top" === e.insertAt) i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
        v.push(t);
        else {
            if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n.appendChild(t)
        }
    }
    function r(e) {
        e.parentNode.removeChild(e);
        var t = v.indexOf(e);
        t >= 0 && v.splice(t, 1)
    }
    function a(e) {
        var t = document.createElement("style");
        return t.type = "text/css",
        o(e, t),
        t
    }
    function s(e) {
        var t = document.createElement("link");
        return t.rel = "stylesheet",
        o(e, t),
        t
    }
    function l(e, t) {
        var n, i, o;
        if (t.singleton) {
            var l = b++;
            n = g || (g = a(t)),
            i = c.bind(null, n, l, !1),
            o = c.bind(null, n, l, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = s(t), i = u.bind(null, n), o = function() {
            r(n),
            n.href && URL.revokeObjectURL(n.href)
        }) : (n = a(t), i = d.bind(null, n), o = function() {
            r(n)
        });
        return i(e),
        function(t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                i(e = t)
            } else o()
        }
    }
    function c(e, t, n, i) {
        var o = n ? "": i.css;
        if (e.styleSheet) e.styleSheet.cssText = y(t, o);
        else {
            var r = document.createTextNode(o),
            a = e.childNodes;
            a[t] && e.removeChild(a[t]),
            a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
        }
    }
    function d(e, t) {
        var n = t.css,
        i = t.media;
        if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = n;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }
    function u(e, t) {
        var n = t.css,
        i = t.sourceMap;
        i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        var o = new Blob([n], {
            type: "text/css"
        }),
        r = e.href;
        e.href = URL.createObjectURL(o),
        r && URL.revokeObjectURL(r)
    }
    var h = {},
    f = function(e) {
        var t;
        return function() {
            return void 0 === t && (t = e.apply(this, arguments)),
            t
        }
    },
    m = f(function() {
        return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
    }),
    p = f(function() {
        return document.head || document.getElementsByTagName("head")[0]
    }),
    g = null,
    b = 0,
    v = [];
    e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        t = t || {},
        void 0 === t.singleton && (t.singleton = m()),
        void 0 === t.insertAt && (t.insertAt = "bottom");
        var o = i(e);
        return n(o, t),
        function(e) {
            for (var r = [], a = 0; a < o.length; a++) {
                var s = o[a],
                l = h[s.id];
                l.refs--,
                r.push(l)
            }
            if (e) {
                n(i(e), t)
            }
            for (var a = 0; a < r.length; a++) {
                var l = r[a];
                if (0 === l.refs) {
                    for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                    delete h[l.id]
                }
            }
        }
    };
    var y = function() {
        var e = [];
        return function(t, n) {
            return e[t] = n,
            e.filter(Boolean).join("\n")
        }
    } ()
},
, , , ,
function(e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(e) {
        return typeof e
    }: function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
    };
    n(76);
    var o = function(e, t) {
        return e.getElementsByClassName(t)
    },
    r = function(e) {
        this.mobileSelect,
        this.wheelsData = e.wheels,
        this.jsonType = !1,
        this.jsonData = [],
        this.checkDataType(),
        this.renderWheels(this.wheelsData),
        this.displayJson = [],
        this.cascade = !1,
        this.startY,
        this.moveEndY,
        this.moveY,
        this.oldMoveY,
        this.offset = 0,
        this.offsetSum = 0,
        this.oversizeBorder,
        this.curDistance = [],
        this.clickStatus = !1,
        this.init(e)
    };
    r.prototype = {
        constructor: r,
        init: function(e) {
            var t = this;
            if (t.wheel = o(t.mobileSelect, "wheel"), t.slider = o(t.mobileSelect, "selectContainer"), t.wheels = t.mobileSelect.querySelector(".wheels"), t.liHeight = t.mobileSelect.querySelector("li").offsetHeight, t.ensureBtn = t.mobileSelect.querySelector(".ensure"), t.closeBtn = t.mobileSelect.querySelector(".cancel"), t.grayLayer = t.mobileSelect.querySelector(".grayLayer"), t.popUp = t.mobileSelect.querySelector(".content"), t.callback = e.callback ? e.callback: function() {},
            t.transitionEnd = e.transitionEnd ? e.transitionEnd: function() {},
            t.initPosition = e.position ? e.position: [], t.titleText = e.title ? e.title: "", t.setTitle(t.titleText), t.checkCascade(), t.cascade && t.initCascade(), 0 == t.initPosition.length) for (var n = 0; n < t.slider.length; n++) t.initPosition.push(0);
            t.setCurDistance(t.initPosition),
            t.addListenerAll(),
            t.closeBtn.addEventListener("click",
            function() {
                t.mobileSelect.remove()
            }),
            t.ensureBtn.addEventListener("click",
            function() {
                var e = t.callback(t.getIndexArr(), t.getJson());
                void 0 !== e && !0 !== e || t.mobileSelect.remove()
            }),
            t.grayLayer.addEventListener("click",
            function() {
                var e = t.callback(t.getIndexArr(), t.getJson());
                void 0 !== e && !0 !== e || t.mobileSelect.remove()
            }),
            t.popUp.addEventListener("click",
            function() {
                event.stopPropagation()
            }),
            t.fixRowStyle()
        },
        setTitle: function(e) {
            var t = this;
            t.titleText = e,
            t.mobileSelect.querySelector(".title").innerHTML = t.titleText
        },
        renderWheels: function(e) {
            var t = this;
            t.mobileSelect = document.createElement("div"),
            t.mobileSelect.classList.add("mobileSelect"),
            t.mobileSelect.classList.add("mobileSelect-show"),
            t.mobileSelect.innerHTML = '<div class="grayLayer"></div><div class="content"><div class="btnBar"><div class="fixWidth"><div class="cancel">取消</div><div class="title"></div><div class="ensure">选择</div></div></div><div class="panel"><div class="fixWidth"><div class="wheels"></div><div class="selectLine"></div><div class="shadowMask"></div></div></div></div>',
            document.body.appendChild(t.mobileSelect);
            for (var n = "",
            i = 0; i < e.length; i++) {
                if (n += '<div class="wheel"><ul class="selectContainer">', t.jsonType) for (var o = 0; o < e[i].data.length; o++) n += '<li data-id="' + e[i].data[o].id + '">' + e[i].data[o].value + "</li>";
                else for (var o = 0; o < e[i].data.length; o++) n += "<li>" + e[i].data[o] + "</li>";
                n += "</ul></div>"
            }
            t.mobileSelect.querySelector(".wheels").innerHTML = n
        },
        addListenerAll: function() {
            for (var e = this,
            t = 0; t < e.slider.length; t++) !
            function(t) {
                e.addListenerWheel(e.wheel[t], t),
                e.addListenerLi(t)
            } (t)
        },
        addListenerWheel: function(e, t) {
            var n = this;
            e.addEventListener("touchstart",
            function() {
                n.touch(event, this.firstChild, t)
            },
            !1),
            e.addEventListener("touchend",
            function() {
                n.touch(event, this.firstChild, t)
            },
            !1),
            e.addEventListener("touchmove",
            function() {
                n.touch(event, this.firstChild, t)
            },
            !1),
            e.addEventListener("mousedown",
            function() {
                n.dragClick(event, this.firstChild, t)
            },
            !1),
            e.addEventListener("mousemove",
            function() {
                n.dragClick(event, this.firstChild, t)
            },
            !1),
            e.addEventListener("mouseup",
            function() {
                n.dragClick(event, this.firstChild, t)
            },
            !0)
        },
        addListenerLi: function(e) {
            for (var t = this,
            n = t.slider[e].getElementsByTagName("li"), i = 0; i < n.length; i++) !
            function(i) {
                n[i].addEventListener("click",
                function() {
                    t.singleClick(this, i, e)
                },
                !1)
            } (i)
        },
        checkDataType: function() {
            var e = this;
            "object" == i(e.wheelsData[0].data[0]) && (e.jsonType = !0, e.jsonData = e.wheelsData[0].data)
        },
        checkCascade: function() {
            var e = this;
            if (e.jsonType) {
                for (var t = e.wheelsData[0].data, n = 0; n < t.length; n++) if ("childs" in t[n] && t[n].childs.length > 0) {
                    e.cascade = !0;
                    break
                }
            } else e.cascade = !1
        },
        initCascade: function() {
            var e = this;
            e.displayJson.push(e.generateArrData(e.jsonData)),
            e.checkArrDeep(e.jsonData[0]),
            e.updateWheels()
        },
        generateArrData: function(e) {
            for (var t = [], n = 0; n < e.length; n++) t.push({
                id: e[n].id,
                value: e[n].value
            });
            return t
        },
        checkArrDeep: function(e) {
            var t = this;
            "childs" in e && e.childs.length > 0 && (t.displayJson.push(t.generateArrData(e.childs)), t.checkArrDeep(e.childs[0]))
        },
        checkRange: function(e, t) {
            for (var n = this,
            i = n.displayJson.length - 1 - e,
            o = 0; o < i; o++) n.displayJson.pop();
            for (var r, o = 0; o <= e; o++) r = 0 == o ? n.jsonData[t[0]] : r.childs[t[o]];
            n.checkArrDeep(r),
            n.updateWheels(),
            n.fixRowStyle(),
            n.setCurDistance(n.resetPostion(e, t))
        },
        resetPostion: function(e, t) {
            var n, i = this,
            o = t;
            if (i.slider.length > t.length) {
                n = i.slider.length - t.length;
                for (var r = 0; r < n; r++) o.push(0)
            } else if (i.slider.length < t.length) {
                n = t.length - i.slider.length;
                for (var r = 0; r < n; r++) o.pop()
            }
            for (var r = e + 1; r < o.length; r++) o[r] = 0;
            return o
        },
        updateWheels: function() {
            var e = this;
            if (e.wheel.length > e.displayJson.length) for (var t = e.wheel.length - e.displayJson.length,
            n = 0; n < t; n++) e.wheels.removeChild(e.wheel[e.wheel.length - 1]);
            for (var n = 0; n < e.displayJson.length; n++) !
            function(t) {
                var n = "";
                if (e.wheel[t]) {
                    for (var i = 0; i < e.displayJson[t].length; i++) n += '<li data-id="' + e.displayJson[t][i].id + '">' + e.displayJson[t][i].value + "</li>";
                    e.slider[t].innerHTML = n
                } else {
                    var o = document.createElement("div");
                    o.className = "wheel",
                    n = '<ul class="selectContainer">';
                    for (var i = 0; i < e.displayJson[t].length; i++) n += '<li data-id="' + e.displayJson[t][i].id + '">' + e.displayJson[t][i].value + "</li>";
                    n += "</ul>",
                    o.innerHTML = n,
                    e.addListenerWheel(o, t),
                    e.wheels.appendChild(o)
                }
                e.addListenerLi(t)
            } (n)
        },
        updateWheel: function(e, t) {
            for (var n = this,
            i = "",
            o = 0; o < t.length; o++) i += "<li>" + t[o] + "</li>";
            n.slider[e].innerHTML = i,
            n.addListenerLi(e)
        },
        fixRowStyle: function() {
            for (var e = this,
            t = (99 / e.wheel.length).toFixed(2), n = 0; n < e.wheel.length; n++) e.wheel[n].style.width = t + "%"
        },
        getIndex: function(e) {
            return Math.round((2 * this.liHeight - e) / this.liHeight)
        },
        getIndexArr: function() {
            for (var e = this,
            t = [], n = 0; n < e.curDistance.length; n++) t.push(e.getIndex(e.curDistance[n]));
            return t
        },
        getJson: function() {
            var e = this,
            t = [],
            n = e.getIndexArr();
            if (e.cascade) for (var i = 0; i < e.wheel.length; i++) t.push(e.displayJson[i][n[i]]);
            else if (e.jsonType) for (var i = 0; i < e.curDistance.length; i++) t.push(e.wheelsData[i].data[e.getIndex(e.curDistance[i])]);
            else for (var i = 0; i < e.curDistance.length; i++) t.push(e.getValue(i));
            return t
        },
        calcDistance: function(e) {
            return 2 * this.liHeight - e * this.liHeight
        },
        setCurDistance: function(e) {
            for (var t = this,
            n = [], i = 0; i < t.slider.length; i++) n.push(t.calcDistance(e[i])),
            t.movePosition(t.slider[i], n[i]);
            t.curDistance = n
        },
        fixPosition: function(e) {
            return - (this.getIndex(e) - 2) * this.liHeight
        },
        movePosition: function(e, t) {
            e.style.webkitTransform = "translate3d(0," + t + "px, 0)",
            e.style.transform = "translate3d(0," + t + "px, 0)"
        },
        locatePostion: function(e, t) {
            this.curDistance[e] = this.calcDistance(t),
            this.movePosition(this.slider[e], this.curDistance[e])
        },
        updateCurDistance: function(e, t) {
            this.curDistance[t] = parseInt(e.style.transform.split(",")[1])
        },
        getDistance: function(e) {
            return parseInt(e.style.transform.split(",")[1])
        },
        getValue: function(e) {
            var t = this,
            n = t.getIndex(t.curDistance[e]);
            return t.slider[e].getElementsByTagName("li")[n].innerHTML
        },
        touch: function(e, t, n) {
            var i = this;
            switch (e = e || window.event, e.type) {
            case "touchstart":
                i.startY = e.touches[0].clientY,
                i.oldMoveY = i.startY;
                break;
            case "touchend":
                if (i.moveEndY = e.changedTouches[0].clientY, i.offsetSum = i.moveEndY - i.startY, i.updateCurDistance(t, n), i.curDistance[n] = i.fixPosition(i.curDistance[n]), i.movePosition(t, i.curDistance[n]), i.oversizeBorder = -(t.getElementsByTagName("li").length - 3) * i.liHeight, i.curDistance[n] + i.offsetSum > 2 * i.liHeight ? (i.curDistance[n] = 2 * i.liHeight, setTimeout(function() {
                    i.movePosition(t, i.curDistance[n])
                },
                100)) : i.curDistance[n] + i.offsetSum < i.oversizeBorder && (i.curDistance[n] = i.oversizeBorder, setTimeout(function() {
                    i.movePosition(t, i.curDistance[n])
                },
                100)), i.transitionEnd(i.getIndexArr(), i.getJson()), i.cascade) {
                    var o = i.getIndexArr();
                    o[n] = i.getIndex(i.curDistance[n]),
                    i.checkRange(n, o)
                }
                break;
            case "touchmove":
                e.preventDefault(),
                i.moveY = e.touches[0].clientY,
                i.offset = i.moveY - i.oldMoveY,
                i.updateCurDistance(t, n),
                i.curDistance[n] = i.curDistance[n] + i.offset,
                i.movePosition(t, i.curDistance[n]),
                i.oldMoveY = i.moveY
            }
        },
        dragClick: function(e, t, n) {
            var i = this;
            switch (e = e || window.event, e.type) {
            case "mousedown":
                i.startY = e.clientY,
                i.oldMoveY = i.startY,
                i.clickStatus = !0;
                break;
            case "mouseup":
                if (i.moveEndY = e.clientY, i.offsetSum = i.moveEndY - i.startY, i.updateCurDistance(t, n), i.curDistance[n] = i.fixPosition(i.curDistance[n]), i.movePosition(t, i.curDistance[n]), i.oversizeBorder = -(t.getElementsByTagName("li").length - 3) * i.liHeight, i.curDistance[n] + i.offsetSum > 2 * i.liHeight ? (i.curDistance[n] = 2 * i.liHeight, setTimeout(function() {
                    i.movePosition(t, i.curDistance[n])
                },
                100)) : i.curDistance[n] + i.offsetSum < i.oversizeBorder && (i.curDistance[n] = i.oversizeBorder, setTimeout(function() {
                    i.movePosition(t, i.curDistance[n])
                },
                100)), i.clickStatus = !1, i.transitionEnd(i.getIndexArr(), i.getJson()), i.cascade) {
                    var o = i.getIndexArr();
                    o[n] = i.getIndex(i.curDistance[n]),
                    i.checkRange(n, o)
                }
                break;
            case "mousemove":
                e.preventDefault(),
                i.clickStatus && (i.moveY = e.clientY, i.offset = i.moveY - i.oldMoveY, i.updateCurDistance(t, n), i.curDistance[n] = i.curDistance[n] + i.offset, i.movePosition(t, i.curDistance[n]), i.oldMoveY = i.moveY)
            }
        },
        singleClick: function(e, t, n) {
            var i = this;
            if (i.cascade) {
                var o = i.getIndexArr();
                o[n] = t,
                i.checkRange(n, o)
            } else i.curDistance[n] = (2 - t) * i.liHeight,
            i.movePosition(e.parentNode, i.curDistance[n])
        }
    },
    e.exports = r,
    e.exports.
default = r
},
function(e, t, n) {
    var i = n(60);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    n(3)(i, {});
    i.locals && (e.exports = i.locals)
},
, ,
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.
default = {
        defaultOptions: {
            id: void 0,
            html: void 0,
            mode: "EDITOR",
            controls: []
        }
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0); !
    function(e) {
        e && e.__esModule
    } (i);
    //sde复选
    t.default = {
        TYPE: "checkbox",
        click: function(e) /*{
            var t = this.querySelectorAll("input[type=checkbox]"),
            n = [];
            if ("LABEL" !== event.target.tagName) {
                for (var i = 0,
                o = t.length; i < o; i++) {
                    var r = t[i];
                    r.checked ? (r.setAttribute("checked", "checked"), n.push({
                        VALUE: r.getAttribute("value"),
                        TEXT: r.getAttribute("text")
                    })) : r.removeAttribute("checked")
                }
                var a = JSON.parse(this.getAttribute("sde-model"));
                a.VALUE = n,
                this.setAttribute("sde-model", JSON.stringify(a))
            }
        }*/
        {
            if($(this).hasClass('sde-plugin-disabled'))return ;
            /*2017-8-1 Rum 小红点*/
            sde.noPoint(this);
            if((e.CODE!==undefined||e.ID!==undefined)&&parent.window.SDE_CONFIG.ISALLCLICKPLUGINCODE=="1") {
                parent.window.SDE_CONFIG.CLICKPLUGINCODE=e.CODE||e.ID;
            }
            var t = this.querySelectorAll(".sde-value input[type=checkbox]"),
                n = [];
            i = event.target;
            /*20170803 king 选值框*/
            if(i.className =='selVal'){
                var val = i.getAttribute('val');
                var sv = $(i).siblings("#selVal")[0];/*兄弟节点*/
                sv.innerHTML =  val ;
                var paren = $(i).closest(".sde-bg")[0],/*父节点*/
                    sdeModel = paren.getAttribute("sde-model"),
                    j = JSON.parse(sdeModel);
                j.VALUE = val ;
                paren.setAttribute("sde-model", JSON.stringify(j));
            }else if ("LABEL" !== event.target.tagName) {
                for (var i = 0,
                         o = t.length; i < o; i++) {
                    var r = t[i];
                    r.checked ? (r.setAttribute("checked", "checked"), n.push({
                        VALUE: r.getAttribute("value"),
                        TEXT: r.getAttribute("text")
                    })) : r.removeAttribute("checked")
                }
                var a = JSON.parse(this.getAttribute("sde-model"));
                a.VALUE = n,
                    this.setAttribute("sde-model", JSON.stringify(a))
            }
        }
    }
},
function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(0),
    r = (i(o), n(70)),
    a = i(r),
    s = n(71),
    l = i(s),
    c = n(58),
    d = i(c);
    n(9),
    n(77);
    var u = function(e) {
        // console.log("同时展示历史记录(暂未实现)...")
    };
    //sde时间
    t.default = {
        TYPE: "date",
        click: function(e) {
            if (1 !== e.READONLY) {
                if($(this).hasClass('sde-plugin-disabled'))return ;
                /*2017-8-1 Rum 小红点*/
                sde.noPoint(this);
                if((e.CODE!==undefined||e.ID!==undefined)&&parent.window.SDE_CONFIG.ISALLCLICKPLUGINCODE=="1") {
                    parent.window.SDE_CONFIG.CLICKPLUGINCODE=e.CODE||e.ID;
                }
                var t = this.getElementsByClassName("sde-value");
                // $(t).focus();//king 修复无法选中控件输入框问题
                if (0 !== t.length) {
                    var n = t[0];
                    0 === e.READONLY && n.innerHTML === '&#8203;' && (n.innerText = "");
                    var i = this;
                    new a.default(n, {
                        enableTime: void 0 !== e.FORMAT && e.FORMAT.indexOf("H") > 0,
                        enableSeconds: !0,
                        dateFormat: void 0 === e.FORMAT ? "Y-m-d": e.FORMAT,
                        maxDate: "" === e.MAX ||"undefined" === e.MAX? null: e.MAX,
                        minDate: "" === e.MIN ||"undefined" === e.MIN ? null: e.MIN,
                        defaultDate: "" === e.VALUE ? null: e.VALUE,
                        time_24hr: !0,
                        minuteIncrement: 1,
                        allowInput: !0,
                        plugins: [new d.default({})],
                        locale: l.default.zh,
                        onClose: function() {
                            //king 点击控件然后失去焦点，控件出现默认值，需要去掉，不能出现默认值。
                            //防止innerText = ""时，切换页面后，控件的sde-value节点丢失
                            var $i = $(i);
                            $i.find(".sde-right").css({ "color": "#0000FF"});
                            $i.find(".sde-left").css({ "color": "#0000FF"});
                            $i.find(".sde-validatebox").remove();
                            if (e.VALUE && 0 !== e.VALUE.length) {
                                var nin = n.innerText;
                                e.VALUE !== n.innerText && (e.VALUE = $.trim(nin), i.setAttribute("sde-model", JSON.stringify(e)))
                            } else if ("" == n.innerText) {
                                n.innerHTML = '&zwj;';
                            }

                        },
                        onChange: function(t, o, r) {
                            var $i = $(i);
                            $i.find(".sde-right").css({ "color": "#0000FF"});
                            $i.find(".sde-left").css({ "color": "#0000FF"});
                            $i.find(".sde-validatebox").remove();
                            //编辑器内容发生改变时会修改该值，0表示沒有改变
                            n.innerText !== o ? parent.window.SDE_CONFIG.IS_CONTENTCHAGNE = "true":"";
                            if("" === o || "undefined" === o) o = '';
                            n.innerText = o, e.VALUE = o, i.setAttribute("sde-model", JSON.stringify(e))

                        }
                    }).open(),
                    0 === e.READONLY && u()
                }
            }
        }
    }
},
function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(0),
    r = (i(o), n(8)),
    a = i(r),
    s = function() {
        for (var e = (new Date).getFullYear(), t = [], n = 0; n < 5; n++) t.push({
            id: e - 5 + n,
            value: e - 5 + n + "年"
        });
        for (var i = 0; i < 20; i++) t.push({
            id: e + i,
            value: e + i + "年"
        });
        return t
    },
    l = function(e, t, n) {
        for (var i = [], o = e, r = t; o < r; o++) i.push({
            id: o,
            value: o + n
        });
        return i
    },
    c = function(e, t) {
        for (var n = 0,
        i = 0,
        o = e.length; i < o; i++) if (e[i].id === t) {
            n = i;
            break
        }
        return n
    },
    d = function(e) {
        return "number" == typeof e ? e >= 10 ? e: "0" + e: 2 === e.length ? e: "0" + e
    },
    u = function(e, t) {
        if ("" === e.MIN && "" === e.MAX) return ! 0;
        var n = void 0,
        i = void 0,
        o = new Date(t).getTime();
        return n = "" === e.MIN ? e.MIN.indexOf("-") > 0 ? new Date(e.MIN.replace("-", "/")).getTime() : new Date(e.MIN).getTime() : 0,
        i = "" === e.MAX ? e.MAX.indexOf("-") > 0 ? new Date(e.MAX.replace("-", "/")).getTime() : new Date(e.MAX).getTime() : new Date("9999-12-31").getTime(),
        n <= o && o <= i
    };
    t.
default = {
        TYPE: "date.mobile",
        click: function(e) {
            if (1 !== e.READONLY) {
                /*2017-8-1 Rum 小红点*/
                sde.noPoint(this);
                var t = this.getElementsByClassName("sde-value");
                // $(t).focus();//king 修复无法选中控件输入框问题
                if (0 !== t.length) {
                    var n = t[0];
                    0 === e.READONLY && n.innerText === e.DESCNAME && (n.innerText = "");
                    var i = s(),
                    o = l(1, 13, "月"),
                    r = l(1, 32, "日"),
                    h = l(0, 24, "时"),
                    f = l(0, 60, "分"),
                    m = l(0, 60, "秒"),
                    p = [];
                    e.FORMAT.indexOf("Y") >= 0 && p.push({
                        data: i
                    }),
                    e.FORMAT.indexOf("m") >= 0 && p.push({
                        data: o
                    }),
                    e.FORMAT.indexOf("d") >= 0 && p.push({
                        data: r
                    }),
                    e.FORMAT.indexOf("H") >= 0 && p.push({
                        data: h
                    }),
                    e.FORMAT.indexOf("i") >= 0 && p.push({
                        data: f
                    }),
                    e.FORMAT.indexOf("S") >= 0 && p.push({
                        data: m
                    });
                    var g = [];
                    if ("" === e.VALUE) {
                        var b = new Date;
                        g.push(c(i, b.getFullYear())),
                        g.push(b.getMonth()),
                        g.push(b.getDate() - 1),
                        e.FORMAT.indexOf("H") > 0 && (g.push(b.getHours()), g.push(b.getMinutes()), g.push(b.getSeconds()))
                    } else {
                        var v = e.VALUE;
                        v = v.replace("年", "/").replace("月", "/").replace("日", "/").replace("-", "/");
                        var y = new Date(v);
                        g.push(c(i, y.getFullYear())),
                        g.push(y.getMonth()),
                        g.push(y.getDate() - 1),
                        e.FORMAT.indexOf("H") > 0 && (g.push(y.getHours()), g.push(y.getMinutes()), g.push(y.getSeconds()))
                    }
                    new a.
                default({
                        title:
                        e.DESCNAME,
                        position: g,
                        wheels: p,
                        callback: function(t, i) {
                            if (i.length <= 0) return void console.error("选择数据为空！");
                            var o = i[0].id + "/" + i[1].id + "/" + i[2].id;
                            if (i.length > 3 && (o += " " + i[3].id + ":" + i[4].id + ":" + i[5].id), !u(e, o)) return alert("日期输入范围最小值：" + e.MIN + "最大值：" + e.MAX),
                            !1;
                            var r = [];
                            e.FORMAT.indexOf("-") > 0 ? (r.push(i[0].id + "-"), r.push(d(i[1].id) + "-"), r.push(d(i[2].id))) : (r.push(i[0].id + "年"), r.push(d(i[1].id) + "月"), r.push(d(i[2].id) + "日")),
                            i.length > 3 && (r.push(" " + d(i[3].id) + ":"), r.push(d(i[4].id) + ":"), r.push(d(i[5].id)));
                            var a = r.join("");
                            e.VALUE = a,
                            n.innerText = a,
                            n.parentNode.setAttribute("sde-model", JSON.stringify(e))
                        }
                    })
                }
            }
        }
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
    o = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (i),
    r = [],
    a = function(e) {
        if (0 === r.length) return ! 1;
        for (var t = !1,
        n = 0,
        i = r.length; n < i; n++) if (r[n] === e) {
            t = !0;
            break
        }
        return t
    },
    s = function(e) {
        /*var t = e.newValue,
        n = this.parentNode,
        i = JSON.parse(n.getAttribute("sde-model"));
        i.VALUE = t,
        n.setAttribute("sde-model", JSON.stringify(i))*/
        /*2017-8-21 author*/
        var n = this.parentNode;
        var o = JSON.parse(n.getAttribute("sde-model"));
        var $n = $(n);
        $n.find(".sde-right").css({ "color": "#0000FF"});
        $n.find(".sde-left").css({ "color": "#0000FF"});
        $n.find(".sde-validatebox").remove();
        setTimeout(function(){
            //console.log(e.target.parentNode.innerText);
            var parentN = e.target.parentNode;
            var tt = parentN?e.target.parentNode.innerText:"";
            o.VALUE = $.trim(tt);
            n.setAttribute("sde-model", JSON.stringify(o));
        },800);
    },
    l = function(e) {
        var t = (e.newValue, this.parentNode);
        var $t = $(t);
        $t.find(".sde-right").css({ "color": "#0000FF"});
        $t.find(".sde-left").css({ "color": "#0000FF"});
        $t.find(".sde-validatebox").remove();
        n = JSON.parse(t.getAttribute("sde-model")),
        i = this;
        if(parent.window.SDE_CONFIG.SDE_OPEN_DESC=='1') {
            "" === $.trim(i.innerText) && (i.innerText = n.DESCNAME)
        }
    },
    /*c = function(e, t, n) {
        var i = e.parentNode,
        r = document.createElement("div");
        r.className = "sde-select-root";
        var a = document.createElement("div");
        a.className = "sde-select-bg",
        a.style.zIndex = 99998;
        var s = function() {
            e.style.zIndex = null,
            i.removeChild(r)
        };
        o.
    default.registerEvent(a, "click",
        function() {
            "" === e.innerText && (e.innerText = t.DESCNAME),
            s()
        }),
        r.appendChild(a);
        var l = document.createElement("div");
        l.className = "sde-select",
        l.style.zIndex = 99999,
        l.style.left = o.
    default.getLeft(e) - 10 + "px";
        var c = document.createElement("ul");
        c.className = "sde-select-content list-paddingleft-2";
        for (var d = 0,
        u = n.length; d < u; d++) {
            var h = document.createElement("li");
            h.setAttribute("title", n[d].TEXT),
            h.setAttribute("v", n[d].VALUE),
            h.setAttribute("t", n[d].TEXT),
            h.innerText = n[d].TEXT,
            n[d].VALUE === t.VALUE && (h.className = "selected"),
            c.appendChild(h)
        }
        o.
    default.registerEvent(c, "click",
        function(n) {
            var o = n.target,
            r = o.getAttribute("v"),
            a = o.getAttribute("t");
            t.VALUE = r,
            t.TEXT = a,
            e.innerText = a,
            i.setAttribute("sde-model", JSON.stringify(t)),
            s()
        }),
        l.appendChild(c),
        r.appendChild(l),
        i.appendChild(r),
        e.style.zIndex = 99999
    },*/
    c = function(e, t, n) {
        //king 20170627根据t.RULE判断是否是规则取数
        var html ;

        n = eval(n);
        outer:
        if(t.RULE){
             try{
                 var param = {};
                 param.ruleId = t.RULE;
                 var rulefindParam={};
                 if(t.RULE_FPARAM){
                     var RULE_FPARAM = t.RULE_FPARAM;
                     if(RULE_FPARAM==t.RULE){
                         param.param = "";
                     }else{
                         try{
                             RULE_FPARAM = JSON.parse(t.RULE_FPARAM);
                             for(var i=0,rl=RULE_FPARAM.length;i<rl;i++){
                                 var obj = RULE_FPARAM[i];
                                 var valu = obj.value;
                                 if(obj.type=='select'){
                                     valu = sde.getControl(obj.value)||'';
                                     if(valu && valu.VALUE){
                                         valu =  valu.VALUE;
                                     }else{
                                         console.log("规则取数对于的控件值为空，CODE："+obj.value);
                                         break outer;
                                     };
                                 }
                                 rulefindParam[obj.param] = valu;
                             }
                         }catch(e){ }
                         param.param = JSON.stringify(rulefindParam);
                     }
                     var datas = window.parent.srvFunByParam("ruleSrv", "findById", param, false);
                     n = datas.data.value;
                 }
                 if(((typeof n)=='string')||((typeof n)=='number')||(typeof n)=='boolean')  n = [n];
             }catch(e){
                 console.log("规则取数异常："+e);
             }
        }
        var i = e.parentNode,
            r = document.createElement("div");
        r.className = "sde-select-root";
        var a = document.createElement("div");
        a.className = "sde-select-bg",
            a.style.zIndex = 99998;
        var s = function() {
            e.style.zIndex = null,
                i.removeChild(r)
        };
        //king,下拉选项
        o.default.registerEvent(a, "click", function() {
                //king 点击控件然后失去焦点，控件出现默认值，需要去掉，不能出现默认值。
                //防止innerText = ""时，切换页面后，控件的sde-value节点丢失
                "" === e.innerText && (e.innerHTML = '&zwj;'),
                s()
            });
        r.appendChild(a);
        if(parent.window.SDE_CONFIG.CLOSE_SELECT){
            parent.window.SDE_CONFIG.CLOSE_SELECT = false;
            return;
        }
        var l = document.createElement("div");
        l.className = "sde-select",
            l.style.zIndex = 99999,
            l.style.background = '#FFFFE0',
            l.style.left = o.default.getLeft(e) - 10 + "px";
        $(l).css({"border-radius":"4px","box-shadow":"0 0 8px #888888"});
        var c = document.createElement("ul");
        c.className = "sde-select-content list-paddingleft-2";
        $(c).css("color","#1A1A1A");
        for (var d = 0, u = n.length; d < u; d++) {
            var TEXT = n[d].TEXT||n[d].text;
            var VALUE = n[d].VALUE||n[d].value;
            var h = document.createElement("li");
            h.setAttribute("title", TEXT),
            h.setAttribute("v", VALUE),
            h.setAttribute("t", TEXT);
            n[d].RELATIONCODE && h.setAttribute("RELATIONCODE", n[d].RELATIONCODE||""),
            n[d].RELATIONFUNC && h.setAttribute("RELATIONFUNC", n[d].RELATIONFUNC||""),
            n[d].rel_none && h.setAttribute("rel_none", n[d].rel_none||""),
            n[d].rel_dis && h.setAttribute("rel_dis", n[d].rel_dis||"");
            h.innerText = TEXT,
            VALUE === t.VALUE && (h.className = "selected"),
                c.appendChild(h)
        };
        o.default.registerEvent(c, "click", function (n) {
           var relcode = i.getAttribute("relcode");
            if(relcode){
                var arr = relcode.split(",");
                for(var rii in arr){
                    var arrrii = arr[rii];
                    if(arrrii) sde.enSDEPlugin("#"+arrrii), sde.showSDEPlugin("#"+arrrii);
                }

                sde.copySDEPluginvalue();
            }
            var o = n.target,
            r = o.getAttribute("v"),
            a = o.getAttribute("t"),
            RELATIONCODE = o.getAttribute("RELATIONCODE"),
            RELATIONFUNC = o.getAttribute("RELATIONFUNC");
            if(RELATIONCODE && RELATIONFUNC){
                console.log("RELATIONCODE:"+RELATIONCODE+"---RELATIONFUNC:"+RELATIONFUNC);
                var arr = RELATIONCODE.split(",");
                for(var rii in arr){
                    var arrrii = arr[rii];
                    if(arrrii) sde.setControl({ ID: arrrii, VALUE: RELATIONFUNC ,COPYVALUE:'1'});
                }
            }
            if(RELATIONCODE){
                var rel_none = o.getAttribute("rel_none");
                if(rel_none){
                    var arr = RELATIONCODE.split(",");
                    for(var rii in arr){
                        var arrrii = arr[rii];
                        if(arrrii) sde.hideSDEPlugin("#"+arrrii);
                    }
                }
                var rel_dis = o.getAttribute("rel_dis");
                if(rel_dis){
                    var arr = RELATIONCODE.split(",");
                    for(var rii in arr){
                        var arrrii = arr[rii];
                        if(arrrii) sde.disSDEPlugin("#"+arrrii);
                    }
                }
            }
            /*t.VALUE = r,
             t.TEXT = a,
             e.innerText = a,*/
            t.VALUE = r,// r = key;
            t.TEXT = a;// a = value;
            var boo = !1;
            if (parent.window.SDE_CONFIG.MIP_MRHP) {
                var MIP_MRHP = parent.window.SDE_CONFIG.MIP_MRHP;
                var arrs = [];
                if (!Array.isArray(MIP_MRHP)) {
                    arrs.push(MIP_MRHP);
                } else {
                    arrs = MIP_MRHP;
                }
                var bb = $('#' + t.ID);
                for (var ii = 0, al = arrs.length; ii < al; ii++) {
                    var arr = arrs[ii];
                    var aa = $(arr);
                    boo = sde.sdecontains(aa[0], bb[0]);
                    if (boo) {
                        break;
                    }
                }
            }
            if (boo) {
                if (e.innerText != r) {
                    //编辑器内容发生改变时会修改该值，0表示沒有改变
                    parent.window.SDE_CONFIG.IS_CONTENTCHAGNE = "true";
                }
                e.innerText = r;
                $(e).addClass('mrhp-paddingTag');
                //e.style='padding:0px 6px;border:1px solid #000';
            }else if (parent.window.SDE_CONFIG.MODE == "REVISE") {
                if($(e).next().hasClass("reviseText")){
                    $(e).next($(".reviseText")).remove();
                }
                e.innerHTML = "<span class='span-revise' revise='revise' id='revise' contenteditable='false'>" + e.innerText + "</span>";
                $(e).after("<span class='reviseText'>" + a + "</span>");
                parent.window.SDE_CONFIG.IS_CONTENTCHAGNE = "true";

            }else{
                if(e.innerText != a){
                    //编辑器内容发生改变时会修改该值，0表示沒有改变
                    parent.window.SDE_CONFIG.IS_CONTENTCHAGNE = "true";
                }
                e.innerText = a;
            }
            i.setAttribute("relcode", RELATIONCODE),
            i.setAttribute("relvalue", RELATIONFUNC),
            t.VALUE=$.trim(t.VALUE),
            i.setAttribute("sde-model", JSON.stringify(t));
            //20180111 king 控件值变化时,自动计算表达式
            var expStr = i.getAttribute("expStr");
            sde.makeClickByExpStr(expStr);
            s()
        }),
        l.appendChild(c),
        r.appendChild(l),
        i.appendChild(r),
        e.style.zIndex = 99999;
        var selectNumRrows = parent.window.SDE_CONFIG.SELECTNUMRROWS||10;
        var $li = $(l).find("li");
        $(l).find("ul").height($li.length > selectNumRrows ? $li.height() * selectNumRrows : "auto");
        //控件在靠近底部与右部时，下拉内容显示在上方与左方--Nothing
        var dvalue=window.innerWidth-l.offsetLeft;
        var div_width = parseInt(l.offsetWidth);
         if(dvalue<=div_width){
            l.style.left = e.offsetLeft+e.offsetWidth-div_width+'px';
        }
        if((l.offsetTop+l.offsetHeight+50)>= $(document).height()){
            l.style.top = l.offsetTop - l.offsetHeight - e.offsetHeight - 2 + 'px';
        }
        var selectNumRrows = parent.window.SDE_CONFIG.SELECTNUMRROWS||10;
        var $li = $(l).find("li");
        $(l).find("ul").height($li.length > selectNumRrows ? $li.height() * selectNumRrows : "auto");

    }, /*king,下拉多选项*/
    c1 = function(e, t, n) {
        //king 20170627根据t.RULE判断是否是规则取数
        var html ;
        n = eval(n);
        /*if(t.RULE){
            var param = {};
            param.ruleId = t.RULE;
            param.param = "";
            var datas = window.parent.srvFunByParam("ruleSrv", "findById", param, false);
            var rule = datas.data.value[0].bindingdata;
            n = JSON.parse(rule);
        }*/
        var i = e.parentNode,
            oo = 99999,
            a = document.createElement("div");
        a.className = "sde-select-root";
        a.style="height:224px;width:300px;";
        var s = document.createElement("div");
        s.className = "sde-select-bg",
            s.style.zIndex = oo - 1;
        var l = function() {
            e.style.zIndex = null,
                i.removeChild(a)
        };
        //king,下拉多选项
        o.default.registerEvent(s, "click",function() {
            //king 点击控件然后失去焦点，控件出现默认值，需要去掉，不能出现默认值。
            //防止innerText = ""时，切换页面后，控件的sde-value节点丢失
            "" === e.innerText && (e.innerHTML = '&zwj;'),
            l()
        }),
            a.appendChild(s);
        var c = document.createElement("div");
        c.className = "sde-select",
            c.style="width:auto;left:0;position:absolute;background:#FFFFE0;border-radius:4px;box-shadow: 0 0 8px #888888;white-space:nowrap;",

            c.style.zIndex = oo,
            c.style.left = o.default.getLeft(e) - 10 + "px";

        var d = document.createElement("ul");
        d.style.width='100%';
        d.style.color = '#1A1A1A';
        d.className = "sde-select-content list-paddingleft-2 dropList";

        for (var u = 0,  h = n.length; u < h; u++) {
            var f = document.createElement("li");
            f.setAttribute("title", n[u].TEXT),
                f.setAttribute("v", n[u].VALUE),
                f.setAttribute("t", n[u].TEXT),
                f.innerText = n[u].TEXT,
            n[u].VALUE === t.VALUE && (f.className = "selected");
            var input =document.createElement("input");
            input.setAttribute("type","checkbox");
//            	console.log("1:"numArr);
//	            if(numArr!=[]){
//	            	for(var k=0;k<numArr.length;k++){
//	            		if(u==numArr[k]) input.checked = "checked";
//	            	}
//	            }
            $(f).prepend(input);
            d.appendChild(f);
            $(d).find("li:first").css("padding-top","6px");
        }


        /* r. default.registerEvent(d, "click",
         function(n) {
         var o = n.target,
         r = o.getAttribute("v"),
         a = o.getAttribute("t");
         t.VALUE = a,
         t.TEXT = a;
         if(parent.window.SDE_CONFIG.MIP_MRHP){
         e.innerText = r;
         $(e).addClass('mrhp-padding');
         //e.style='padding:0px 6px;border:1px solid #000';
         }else{
         e.innerText = a;
         }
         i.setAttribute("sde-model", JSON.stringify(t));
         l()
         }),*/
        c.appendChild(d);
        var _hr = $('<hr style="margin-bottom:2px"/>');
        var _p =  $('<p style="position:relative;bottom:0;width:100%;" ></p>');
        $(_p).append(_hr);
        var _spanA = $('<span style="float:left;margin-left:4px;"></span>');
        var _checkbox = $('<input type="checkbox" value="1" id="all">');
        _spanA.append(_checkbox);
        var _all = $('<span style="margin-right:10px">全选</span>');
        _spanA.append(_all);
        _p.append(_spanA);
        var _span = $('<span style="float:right;margin-right:10px;cursor:pointer"> </span>');
        var _ok = $('<button id="dropList_confirmBtn">确定</button>');
        var _canal = $('<button style="margin-left:10px;" id="dropList_cancelBtn">取消</button>');

        _span.append(_ok);
        _span.append(_canal);
        _p.append(_span);
        $(c).append(_p);
        a.appendChild(c),
            i.appendChild(a),
            e.style.zIndex = oo,
            $("#all").click(function(){
                if(this.checked){
                    $(".dropList input:checkbox").prop("checked", true);
                }else{
                    $(".dropList input:checkbox").prop("checked", false);
                }
            });
//        $("#dropList_confirmBtn").click(function(){
//        	var dropListArr = $(".dropList input[type='checkbox']:checked");
//        	var preserveArr = [];
//        	if(dropListArr){
//        		e.innerText = "";
//        		for( var j=0;j<dropListArr.length;j++){
//        			e.innerText += dropListArr[j].nextSibling.data;
//        		}
//        	}
//        	i.removeChild(a);
//        });
//        if(numArr!==[]){
//        	for(var k in numArr){
//        		$(".dropList input")[numArr[k]].checked = "checked";
//        	}
//        }
        // var numArr = [];
        function stopPropagation(e) {			//阻止冒泡
            var ev = e || window.event;
            if (ev.stopPropagation) {
                ev.stopPropagation();
            }
            else if (window.event) {
                window.event.cancelBubble = true;//兼容IE
            }
        };

        var numArr = [];
        $("#dropList_confirmBtn").click(function(){
            var dropListArr = $(".dropList input");
            var _innerText = e.innerText;
            var _text = '';
            /*var _score = 0;*/
            e.innerText = "";
            for( var j=0; j<dropListArr.length;j++){
                if(dropListArr[j].checked){
                    var data=dropListArr[j].nextSibling.data;
                    var parentv=$(dropListArr[j]).parent().attr("v");
                    numArr.push({"VALUE":parentv,"TEXT":data});
                    _text? _text = _text+"、"+data : _text +=data;
                    /*_score ?_score= _score+"、"+ parseInt(parentv) : _score += parseInt(parentv);*/
                }
            };
            e.innerText = _text;
            if(_innerText  !== _text ){
                //编辑器内容发生改变时会修改该值，0表示沒有改变
                parent.window.SDE_CONFIG.IS_CONTENTCHAGNE = "true";
            }
            var n = JSON.parse(e.parentNode.getAttribute("sde-model"));
            n.VALUE = numArr;
            e.parentNode.setAttribute("sde-model", JSON.stringify(n)),
                i.removeChild(a);
        });
//        	stopPropagation(e),
//        	 o.default.registerEvent(i, "click",function() {
//        			 if($(i).has(a)){
//
//                  		for(var k=0; k<dropListArr.length; k++){
//          	        		for(var l in numArr){
//          	        			if(k == numArr[l])dropListArr[k].checked = "checked";
//          	        		}
//                  		}
//                  	}
//             })
        $("#dropList_cancelBtn").click(function(){
            i.removeChild(a);
        });
         //test
        var dvalue=window.innerWidth-e.offsetLeft;
        var div_width = parseInt(c.offsetWidth);
        if(dvalue<=div_width){
            c.style.left = e.offsetLeft+e.offsetWidth-div_width+10+'px';
        }
        if((e.offsetTop+e.offsetHeight+c.offsetHeight+50)>= $(document).height()){
            c.style.top = c.offsetTop - c.offsetHeight - e.offsetHeight - 2 + 'px';
        }
        //test


    },
    d = function(e, t) {
        if (null === e || void 0 === e) return void t(null);
        e.REMOTEURL && "" !== e.REMOTEURL ? o.
    default.ajax({
            type:
            "get",
            url: e.REMOTEURL,
            timeOut: 5e3,
            before: function() {},
            success: function(n) {
                "" !== n ? t(JSON.parse(n)) : console.error("select控件无法通过远程地址获取数据，远程地址为：" + e.REMOTEURL)
            },
            error: function() {}
        }) : t(e.BINDINGDATA)
    },
    u = function(e) {
        //console.log("同时展示历史记录(暂未实现)...")
    };
    //sde下拉
    t.default = {
        TYPE: "select",
        click: function(e) {
            if($(this).hasClass('sde-plugin-disabled'))return ;

            if (void 0 === e.READONLY || 1 !== e.READONLY) {
                /*2017-8-1 Rum 小红点*/
                sde.noPoint(this);
                if((e.CODE!==undefined||e.ID!==undefined)&&parent.window.SDE_CONFIG.ISALLCLICKPLUGINCODE=="1") {
                    parent.window.SDE_CONFIG.CLICKPLUGINCODE=e.CODE||e.ID;
                }
                var t = this.getElementsByClassName("sde-value");
                // $(t).focus();//king 修复无法选中控件输入框问题
                if (0 !== t.length) {
                    var n = t[0];
                    if(parent.window.SDE_CONFIG.SDE_OPEN_DESC=='1') {
                        $.trim(n.innerText) === e.DESCNAME && (n.innerText = "");
                    }
                    a(n) || (o.default.registerEvent(n, "DOMCharacterDataModified", s),
                             o.default.registerEvent(n, "blur", l),
                             r.push(n)),
                    d(e, function(t) {
                        if (null === t) return void console.error("该select控件无法获取列表数据！！！");
                        if(e.VERIFYTYPE==="checkbox"){
                            return c1(n, e, t);
                        }
                        c(n, e, t)
                    }),
                    u()
                }
            }
        }
    }
},
function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(0),
    r = i(o),
    a = n(8),
    s = i(a),
    l = function(e, t) {
        if (null === e || void 0 === e) return void t(null);
        e.REMOTEURL && "" !== e.REMOTEURL ? r.
    default.ajax({
            type:
            "get",
            url: e.REMOTEURL,
            timeOut: 5e3,
            before: function() {},
            success: function(n) {
                "" !== n ? t(JSON.parse(n)) : console.error("select控件无法通过远程地址获取数据，远程地址为：" + e.REMOTEURL)
            },
            error: function() {}
        }) : t(e.BINDINGDATA)
    };
    t.
default = {
        TYPE: "select.mobile",
        click: function(e) {
            if (1 !== e.READONLY) {
                /*2017-8-1 Rum 小红点*/
                sde.noPoint(this);
                var t = this.getElementsByClassName("sde-value");
                // $(t).focus();//king 修复无法选中控件输入框问题
                if (0 !== t.length) {
                    var n = t[0];
                    0 === e.READONLY && encodeURIComponent(n.innerText) === encodeURIComponent(e.DESCNAME) && (n.innerText = ""),
                    l(e,
                    function(t) {
                        if (null === t || 0 === t.length) return void console.error("该select控件无法获取列表数据！！！");
                        for (var i = [], o = [], r = 0, a = 0, l = 0, c = t.length; l < c; l++) o.push({
                            id: t[l].VALUE,
                            value: t[l].TEXT
                        }),
                        t[l].SELECTED && 1 === t[l].SELECTED && (r = l),
                        t[l].VALUE === e.VALUE && (a = l);
                        i.push({
                            data: o
                        }),
                        a = 0 === a ? r: a;
                        new s.
                    default({
                            title:
                            e.DESCNAME,
                            position: [a],
                            wheels: i,
                            callback: function(t, i) {
                                if (i.length <= 0) return void console.error("选择数据为空！");
                                var o = i[0];
                                e.VALUE = o.id,
                                e.TEXT = o.value,
                                n.innerText = o.value,
                                n.parentNode.setAttribute("sde-model", JSON.stringify(e))
                            }
                        })
                    })
                }
            }
        }
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
    o = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (i),
    r = [],
    a = !1,
    s = function(e) {
        if (0 === r.length) return ! 1;
        for (var t = !1,
        n = 0,
        i = r.length; n < i; n++) if (r[n] === e) {
            t = !0;
            break
        }
        return t
    },
    l = function(e) {
        var t = e.keyCode || e.which;
        if (8 === t || 46 === t) {
            var n = document.getSelection();
            n.isCollapsed || n.anchorOffset === n.focusOffset || (a = !0)
        }
    },
    //king 控件内容改变,根据检验表达式,检验控件值是否不符合.
    txtCheck=function(param,t){
        var $n = $(param),
            $R = $n.find(".sde-right"),
            $L = $n.find(".sde-left"),
            $V = $n.find(".sde-value"),
            sdeJson = {};
        try {
            sdeJson = JSON.parse($n.attr("sde-model"));
        } catch (e) {
            var pluginId = $n.attr("id") || "";
            alert("控件:" + pluginId + "已损坏!");
        }
        var txt = $V.text();
        var thisColor = {"color": "#0000FF"};
        sdeJson.VALUE = $.trim(txt);
        var checkRes = sde.analyCheck(sdeJson.TEXTCHECK, sdeJson.VALUE);
        var checkMsg = sdeJson.CHECKMSG || "请输入合法值";
        if (checkRes.res) {
            var sde_vali = $R.find(".sde-validatebox");
            if (sde_vali.length == 0) {
                thisColor.color = "red";
                $R.addClass("position-rela");
                $R.append('<div class="sde-validatebox">' + checkMsg + '</div>');
            } else {
                sde_vali.text(checkMsg);
            }
        } else {
            thisColor.color = "#0000FF";
            $R.removeClass("position-rela");
            $n.find(".sde-validatebox").remove();
        }
        $L.css(thisColor);
        $R.css(thisColor);
        $n.attr("sde-model", JSON.stringify(sdeJson));
        return $n;
    },
    /*c = function(e) {
        if (a || 0 === this.innerText.length) {
            var t = this.parentNode,
                n = JSON.parse(t.getAttribute("sde-model"));
            var tt = t.querySelector(".sde-value").innerText;
            n.VALUE = $.trim(tt),
                t.setAttribute("sde-model", JSON.stringify(n))
        }
    },*/
    //上面是原始方法
    c = function(e) {
        if (a || 0 === this.innerText.length) {
            var parentN = this.parentNode;
            //20180119 king 控件值限制
            txtCheck(parentN,t);
            //20180111 king 控件值变化时,自动计算表达式
            var expStr = parentN.getAttribute("expStr");
            sde.makeClickByExpStr(expStr);
        }
    },

    /*d = function(e) {
        var t = e.newValue,
            n = this.parentNode,
            i = JSON.parse(n.getAttribute("sde-model"));
        i.VALUE = t,
            n.setAttribute("sde-model", JSON.stringify(i))
    },*/
    //上面是原始方法

    d = function(e) {
        var t = e.newValue;
        var parentN = this.parentNode;
        //20180119 king 控件值限制
        txtCheck(parentN,t);
        //20180111 king 控件值变化时,自动计算表达式
        var expStr = parentN.getAttribute("expStr");
        sde.makeClickByExpStr(expStr);
    },
    textchange=function(){
        var parentN = this.parentNode;
        //20180119 king 控件值限制
        txtCheck(parentN,t);
        //20180111 king 控件值变化时,自动计算表达式
        var expStr = parentN.getAttribute("expStr");
        sde.makeClickByExpStr(expStr);
    },
    /*u = function(e) {
        var t = (e.newValue, this.parentNode),
            n = JSON.parse(t.getAttribute("sde-model")),
            i = this;
        "" === i.innerText && 0 === n.READONLY && (i.innerText = n.DESCNAME)
    },*/
    //上面是原始方法
    u = function(e) {
        var t = (e.newValue, this.parentNode),
        n = JSON.parse(t.getAttribute("sde-model")),
        i = this;
        if(parent.window.SDE_CONFIG.SDE_OPEN_DESC=='1'){
            "" === $.trim(i.innerText) && 0 === n.READONLY && (i.innerText = n.DESCNAME)
        }else{
            //king 点击控件然后失去焦点，控件出现默认值，需要去掉，不能出现默认值。
            //防止innerText = ""时，切换页面后，控件的sde-value节点丢失
            "" === i.innerText && (0 === n.READONLY || '0' === n.READONLY) && (i.innerHTML = '&zwj;')
        }
        //20180111 king 控件值变化时,自动计算表达式
        var expStr = t.getAttribute("expStr");
        sde.makeClickByExpStr(expStr);
    },
    h = function(e) {
        //console.log("同时展示历史记录(暂未实现)...")
    };
    //sde文本
    t.default = {
        TYPE: "text",
        click: function(e) {
            if($(this).hasClass('sde-plugin-disabled'))return ;
            if (1 !== e.READONLY) {
                /*2017-8-1 Rum 小红点*/
                sde.noPoint(this);
                if(e.CODE!==undefined||e.ID!==undefined){
                    parent.window.SDE_CONFIG.CLICKPLUGINCODE=e.CODE||e.ID;
                }
                var pluginCode=e.CODE||e.ID;
                var funcEvent = parent.window.SDE_CONFIG.CLICKPLUGINEVENT;
                if (funcEvent && funcEvent!=="undefined" && funcEvent!=="") {
                    var sdeuserfun = new parent.window.sdeUserFun();
                    sdeuserfun[funcEvent](pluginCode);
                } else {
                    console.log("plugin("+pluginCode+") click is null...");
                }
                var t = this.getElementsByClassName("sde-value");
                /*2017-12-24 king 计算表达式 start*/
                if(parent.sde.isSDEExpStr(e.EXPSTR)){
                    sde.clickEXPPlugin(e.CODE);
                }
                /*2017-12-24 king 计算表达式 end*/
                // $(t).focus();//king 修复无法选中控件输入框问题
                if (0 !== t.length) {
                    var n = t[0];
                    if(parent.window.SDE_CONFIG.SDE_OPEN_DESC=='1'){
                        0 === e.READONLY && encodeURIComponent($.trim(n.innerText)) === encodeURIComponent(e.DESCNAME) && (n.innerText = "")
                    }else{
                        //king 点击控件然后失去焦点，控件出现默认值，需要去掉，不能出现默认值。
                        //防止innerText = ""时，切换页面后，控件的sde-value节点丢失
                        //(0 === e.READONLY || '0' === e.READONLY) && (n.innerText = ""),
                    }
                        s(n) || (
                            o.default.registerEvent(n, "DOMCharacterDataModified", d),
                            o.default.registerEvent(n, "keydown", l),
                            o.default.registerEvent(n, "keyup", c),
                            o.default.registerEvent(n, "blur", u),
                            o.default.registerEvent(n, "DOMNodeInserted", textchange),//不生效
                            r.push(n)
                        ),
                    0 === e.READONLY && h()
                }
            }
        }
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0); !
    function(e) {
        e && e.__esModule
    } (i);
    t.
default = {
        TYPE: "text.mobile",
        click: function(e) {
            if (1 !== e.READONLY) {
                /*2017-8-1 Rum 小红点*/
                sde.noPoint(this);
                var t = this.getElementsByClassName("sde-value");
                // $(t).focus();//king 修复无法选中控件输入框问题
                if (0 !== t.length) {
                    var n = t[0];
                    0 === e.READONLY && encodeURIComponent(n.innerText) === encodeURIComponent(e.DESCNAME) && (n.innerText = "");
                    var i = prompt(e.DESCNAME, e.VALUE);
                    if (null === i) return void("" === n.innerText && 0 === e.READONLY && (n.innerText = e.DESCNAME));
                    e.VALUE = i,
                    "" === i ? 0 === e.READONLY && (n.innerText = e.DESCNAME) : n.innerText = i,
                    n.parentNode.setAttribute("sde-model", JSON.stringify(e))
                }
            }
        }
    }
},
function(e, t, n) { (function(i) {
        var o;
        /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
        "classList" in document.createElement("_") ||
        function(e) {
            "use strict";
            if ("Element" in e) {
                var t = e.Element.prototype,
                n = Object,
                i = String.prototype.trim ||
                function() {
                    return this.replace(/^\s+|\s+$/g, "")
                },
                o = Array.prototype.indexOf ||
                function(e) {
                    for (var t = 0,
                    n = this.length; t < n; t++) if (t in this && this[t] === e) return t;
                    return - 1
                },
                r = function(e, t) {
                    this.name = e,
                    this.code = DOMException[e],
                    this.message = t
                },
                a = function(e, t) {
                    if ("" === t) throw new r("SYNTAX_ERR", "An invalid or illegal string was specified");
                    if (/\s/.test(t)) throw new r("INVALID_CHARACTER_ERR", "String contains an invalid character");
                    return o.call(e, t)
                },
                s = function(e) {
                    for (var t = i.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], o = 0, r = n.length; o < r; o++) this.push(n[o]);
                    this._updateClassName = function() {
                        e.setAttribute("class", this.toString())
                    }
                },
                l = s.prototype = [],
                c = function() {
                    return new s(this)
                };
                if (r.prototype = Error.prototype, l.item = function(e) {
                    return this[e] || null
                },
                l.contains = function(e) {
                    return e += "",
                    -1 !== a(this, e)
                },
                l.add = function() {
                    var e, t = arguments,
                    n = 0,
                    i = t.length,
                    o = !1;
                    do {
                        e = t[n] + "", -1 === a(this, e) && (this.push(e), o = !0)
                    } while (++ n < i );
                    o && this._updateClassName()
                },
                l.remove = function() {
                    var e, t, n = arguments,
                    i = 0,
                    o = n.length,
                    r = !1;
                    do {
                        for (e = n[i] + "", t = a(this, e); - 1 !== t;) this.splice(t, 1), r = !0, t = a(this, e)
                    } while (++ i < o );
                    r && this._updateClassName()
                },
                l.toggle = function(e, t) {
                    e += "";
                    var n = this.contains(e),
                    i = n ? !0 !== t && "remove": !1 !== t && "add";
                    return i && this[i](e),
                    !0 === t || !1 === t ? t: !n
                },
                l.toString = function() {
                    return this.join(" ")
                },
                n.defineProperty) {
                    var d = {
                        get: c,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        n.defineProperty(t, "classList", d)
                    } catch(e) { - 2146823252 === e.number && (d.enumerable = !1, n.defineProperty(t, "classList", d))
                    }
                } else n.prototype.__defineGetter__ && t.__defineGetter__("classList", c)
            }
        } (self),
        /*! @source http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js */
        function(e) {
            "use strict";
            if (e.URL = e.URL || e.webkitURL, e.Blob && e.URL) try {
                return void new Blob
            } catch(e) {}
            var t = e.BlobBuilder || e.WebKitBlobBuilder || e.MozBlobBuilder ||
            function(e) {
                var t = function(e) {
                    return Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1]
                },
                n = function() {
                    this.data = []
                },
                i = function(e, t, n) {
                    this.data = e,
                    this.size = e.length,
                    this.type = t,
                    this.encoding = n
                },
                o = n.prototype,
                r = i.prototype,
                a = e.FileReaderSync,
                s = function(e) {
                    this.code = this[this.name = e]
                },
                l = "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),
                c = l.length,
                d = e.URL || e.webkitURL || e,
                u = d.createObjectURL,
                h = d.revokeObjectURL,
                f = d,
                m = e.btoa,
                p = e.atob,
                g = e.ArrayBuffer,
                b = e.Uint8Array,
                v = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
                for (i.fake = r.fake = !0; c--;) s.prototype[l[c]] = c + 1;
                return d.createObjectURL || (f = e.URL = function(e) {
                    var t, n = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
                    return n.href = e,
                    "origin" in n || ("data:" === n.protocol.toLowerCase() ? n.origin = null: (t = e.match(v), n.origin = t && t[1])),
                    n
                }),
                f.createObjectURL = function(e) {
                    var t, n = e.type;
                    return null === n && (n = "application/octet-stream"),
                    e instanceof i ? (t = "data:" + n, "base64" === e.encoding ? t + ";base64," + e.data: "URI" === e.encoding ? t + "," + decodeURIComponent(e.data) : m ? t + ";base64," + m(e.data) : t + "," + encodeURIComponent(e.data)) : u ? u.call(d, e) : void 0
                },
                f.revokeObjectURL = function(e) {
                    "data:" !== e.substring(0, 5) && h && h.call(d, e)
                },
                o.append = function(e) {
                    var n = this.data;
                    if (b && (e instanceof g || e instanceof b)) {
                        for (var o = "",
                        r = new b(e), l = 0, c = r.length; l < c; l++) o += String.fromCharCode(r[l]);
                        n.push(o)
                    } else if ("Blob" === t(e) || "File" === t(e)) {
                        if (!a) throw new s("NOT_READABLE_ERR");
                        var d = new a;
                        n.push(d.readAsBinaryString(e))
                    } else e instanceof i ? "base64" === e.encoding && p ? n.push(p(e.data)) : "URI" === e.encoding ? n.push(decodeURIComponent(e.data)) : "raw" === e.encoding && n.push(e.data) : ("string" != typeof e && (e += ""), n.push(unescape(encodeURIComponent(e))))
                },
                o.getBlob = function(e) {
                    return arguments.length || (e = null),
                    new i(this.data.join(""), e, "raw")
                },
                o.toString = function() {
                    return "[object BlobBuilder]"
                },
                r.slice = function(e, t, n) {
                    var o = arguments.length;
                    return o < 3 && (n = null),
                    new i(this.data.slice(e, o > 1 ? t: this.data.length), n, this.encoding)
                },
                r.toString = function() {
                    return "[object Blob]"
                },
                r.close = function() {
                    this.size = 0,
                    delete this.data
                },
                n
            } (e);
            e.Blob = function(e, n) {
                var i = n ? n.type || "": "",
                o = new t;
                if (e) for (var r = 0,
                a = e.length; r < a; r++) Uint8Array && e[r] instanceof Uint8Array ? o.append(e[r].buffer) : o.append(e[r]);
                var s = o.getBlob(i);
                return ! s.slice && s.webkitSlice && (s.slice = s.webkitSlice),
                s
            };
            var n = Object.getPrototypeOf ||
            function(e) {
                return e.__proto__
            };
            e.Blob.prototype = n(new e.Blob)
        } ("undefined" != typeof self && self || "undefined" != typeof window && window || this.content || this),
        function(r, a) {
            "use strict";
            "object" == typeof e && void 0 !== i && i && i.versions && i.versions.electron || "object" != typeof e ? void 0 !== (o = function() {
                return a
            }.call(t, n, t, e)) && (e.exports = o) : e.exports = a
        } (0,
        function() {
            "use strict";
            function e(e, t) {
                return this.init(e, t)
            }
            return e.extensions = {},
            function(t) {
                function n(e, t) {
                    var n, i = Array.prototype.slice.call(arguments, 2);
                    t = t || {};
                    for (var o = 0; o < i.length; o++) {
                        var r = i[o];
                        if (r) for (n in r) r.hasOwnProperty(n) && void 0 !== r[n] && (e || !1 === t.hasOwnProperty(n)) && (t[n] = r[n])
                    }
                    return t
                }
                var i = !1;
                try {
                    var o = document.createElement("div"),
                    r = document.createTextNode(" ");
                    o.appendChild(r),
                    i = o.contains(r)
                } catch(e) {}
                var a = {
                    isIE: "Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName && null !== new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent),
                    isEdge: null !== /Edge\/\d+/.exec(navigator.userAgent),
                    isFF: navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
                    isMac: t.navigator.platform.toUpperCase().indexOf("MAC") >= 0,
                    keyCode: {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        ESCAPE: 27,
                        SPACE: 32,
                        DELETE: 46,
                        K: 75,
                        M: 77,
                        V: 86
                    },
                    isMetaCtrlKey: function(e) {
                        return !! (a.isMac && e.metaKey || !a.isMac && e.ctrlKey)
                    },
                    isKey: function(e, t) {
                        var n = a.getKeyCode(e);
                        return ! 1 === Array.isArray(t) ? n === t: -1 !== t.indexOf(n)
                    },
                    getKeyCode: function(e) {
                        var t = e.which;
                        return null === t && (t = null !== e.charCode ? e.charCode: e.keyCode),
                        t
                    },
                    blockContainerElementNames: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "pre", "ul", "li", "ol", "address", "article", "aside", "audio", "canvas", "dd", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "header", "hgroup", "main", "nav", "noscript", "output", "section", "video", "table", "thead", "tbody", "tfoot", "tr", "th", "td"],
                    emptyElementNames: ["br", "col", "colgroup", "hr", "img", "input", "source", "wbr"],
                    extend: function() {
                        var e = [!0].concat(Array.prototype.slice.call(arguments));
                        return n.apply(this, e)
                    },
                    defaults: function() {
                        var e = [!1].concat(Array.prototype.slice.call(arguments));
                        return n.apply(this, e)
                    },
                    createLink: function(e, t, n, i) {
                        var o = e.createElement("a");
                        return a.moveTextRangeIntoElement(t[0], t[t.length - 1], o),
                        o.setAttribute("href", n),
                        i && o.setAttribute("target", i),
                        o
                    },
                    findOrCreateMatchingTextNodes: function(e, t, n) {
                        for (var i = e.createTreeWalker(t, NodeFilter.SHOW_ALL, null, !1), o = [], r = 0, s = !1, l = null, c = null; null !== (l = i.nextNode());) if (! (l.nodeType > 3)) if (3 === l.nodeType) {
                            if (!s && n.start < r + l.nodeValue.length && (s = !0, c = a.splitStartNodeIfNeeded(l, n.start, r)), s && a.splitEndNodeIfNeeded(l, c, n.end, r), s && r === n.end) break;
                            if (s && r > n.end + 1) throw new Error("PerformLinking overshot the target!");
                            s && o.push(c || l),
                            r += l.nodeValue.length,
                            null !== c && (r += c.nodeValue.length, i.nextNode()),
                            c = null
                        } else "img" === l.tagName.toLowerCase() && (!s && n.start <= r && (s = !0), s && o.push(l));
                        return o
                    },
                    splitStartNodeIfNeeded: function(e, t, n) {
                        return t !== n ? e.splitText(t - n) : null
                    },
                    splitEndNodeIfNeeded: function(e, t, n, i) {
                        var o, r;
                        o = i + e.nodeValue.length + (t ? t.nodeValue.length: 0) - 1,
                        r = n - i - (t ? e.nodeValue.length: 0),
                        o >= n && i !== o && 0 !== r && (t || e).splitText(r)
                    },
                    splitByBlockElements: function(t) {
                        if (3 !== t.nodeType && 1 !== t.nodeType) return [];
                        var n = [],
                        i = e.util.blockContainerElementNames.join(",");
                        if (3 === t.nodeType || 0 === t.querySelectorAll(i).length) return [t];
                        for (var o = 0; o < t.childNodes.length; o++) {
                            var r = t.childNodes[o];
                            if (3 === r.nodeType) n.push(r);
                            else if (1 === r.nodeType) {
                                var a = r.querySelectorAll(i);
                                0 === a.length ? n.push(r) : n = n.concat(e.util.splitByBlockElements(r))
                            }
                        }
                        return n
                    },
                    findAdjacentTextNodeWithContent: function(e, t, n) {
                        var i, o = !1,
                        r = n.createNodeIterator(e, NodeFilter.SHOW_TEXT, null, !1);
                        for (i = r.nextNode(); i;) {
                            if (i === t) o = !0;
                            else if (o && 3 === i.nodeType && i.nodeValue && i.nodeValue.trim().length > 0) break;
                            i = r.nextNode()
                        }
                        return i
                    },
                    findPreviousSibling: function(e) {
                        if (!e || a.isMediumEditorElement(e)) return ! 1;
                        for (var t = e.previousSibling; ! t && !a.isMediumEditorElement(e.parentNode);) e = e.parentNode,
                        t = e.previousSibling;
                        return t
                    },
                    isDescendant: function(e, t, n) {
                        if (!e || !t) return ! 1;
                        if (e === t) return !! n;
                        if (1 !== e.nodeType) return ! 1;
                        if (i || 3 !== t.nodeType) return e.contains(t);
                        for (var o = t.parentNode; null !== o;) {
                            if (o === e) return ! 0;
                            o = o.parentNode
                        }
                        return ! 1
                    },
                    isElement: function(e) {
                        return ! (!e || 1 !== e.nodeType)
                    },
                    throttle: function(e, t) {
                        var n, i, o, r = null,
                        a = 0,
                        s = function() {
                            a = Date.now(),
                            r = null,
                            o = e.apply(n, i),
                            r || (n = i = null)
                        };
                        return t || 0 === t || (t = 50),
                        function() {
                            var l = Date.now(),
                            c = t - (l - a);
                            return n = this,
                            i = arguments,
                            c <= 0 || c > t ? (r && (clearTimeout(r), r = null), a = l, o = e.apply(n, i), r || (n = i = null)) : r || (r = setTimeout(s, c)),
                            o
                        }
                    },
                    traverseUp: function(e, t) {
                        if (!e) return ! 1;
                        do {
                            if (1 === e.nodeType) {
                                if (t(e)) return e;
                                if (a.isMediumEditorElement(e)) return ! 1
                            }
                            e = e.parentNode
                        } while ( e );
                        return ! 1
                    },
                    htmlEntities: function(e) {
                        return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                    },
                    insertHTMLCommand: function(t, n) {
                        var i, o, r, s, l, c, d, u = !1,
                        h = ["insertHTML", !1, n];
                        if (!e.util.isEdge && t.queryCommandSupported("insertHTML")) try {
                            return t.execCommand.apply(t, h)
                        } catch(e) {}
                        if (i = t.getSelection(), i.rangeCount) {
                            if (o = i.getRangeAt(0), d = o.commonAncestorContainer, a.isMediumEditorElement(d) && !d.firstChild) o.selectNode(d.appendChild(t.createTextNode("")));
                            else if (3 === d.nodeType && 0 === o.startOffset && o.endOffset === d.nodeValue.length || 3 !== d.nodeType && d.innerHTML === o.toString()) {
                                for (; ! a.isMediumEditorElement(d) && d.parentNode && 1 === d.parentNode.childNodes.length && !a.isMediumEditorElement(d.parentNode);) d = d.parentNode;
                                o.selectNode(d)
                            }
                            for (o.deleteContents(), r = t.createElement("div"), r.innerHTML = n, s = t.createDocumentFragment(); r.firstChild;) l = r.firstChild,
                            c = s.appendChild(l);
                            o.insertNode(s),
                            c && (o = o.cloneRange(), o.setStartAfter(c), o.collapse(!0), e.selection.selectRange(t, o)),
                            u = !0
                        }
                        return t.execCommand.callListeners && t.execCommand.callListeners(h, u),
                        u
                    },
                    execFormatBlock: function(t, n) {
                        var i, o = a.getTopBlockContainer(e.selection.getSelectionStart(t));
                        if ("blockquote" === n) {
                            if (o && (i = Array.prototype.slice.call(o.childNodes), i.some(function(e) {
                                return a.isBlockContainer(e)
                            }))) return t.execCommand("outdent", !1, null);
                            if (a.isIE) return t.execCommand("indent", !1, n)
                        }
                        if (o && n === o.nodeName.toLowerCase() && (n = "p"), a.isIE && (n = "<" + n + ">"), o && "blockquote" === o.nodeName.toLowerCase()) {
                            if (a.isIE && "<p>" === n) return t.execCommand("outdent", !1, n);
                            if ((a.isFF || a.isEdge) && "p" === n) return i = Array.prototype.slice.call(o.childNodes),
                            i.some(function(e) {
                                return ! a.isBlockContainer(e)
                            }) && t.execCommand("formatBlock", !1, n),
                            t.execCommand("outdent", !1, n)
                        }
                        return t.execCommand("formatBlock", !1, n)
                    },
                    setTargetBlank: function(e, t) {
                        var n, i = t || !1;
                        if ("a" === e.nodeName.toLowerCase()) e.target = "_blank";
                        else for (e = e.getElementsByTagName("a"), n = 0; n < e.length; n += 1) ! 1 !== i && i !== e[n].attributes.href.value || (e[n].target = "_blank")
                    },
                    removeTargetBlank: function(e, t) {
                        var n;
                        if ("a" === e.nodeName.toLowerCase()) e.removeAttribute("target");
                        else for (e = e.getElementsByTagName("a"), n = 0; n < e.length; n += 1) t === e[n].attributes.href.value && e[n].removeAttribute("target")
                    },
                    addClassToAnchors: function(e, t) {
                        var n, i, o = t.split(" ");
                        if ("a" === e.nodeName.toLowerCase()) for (i = 0; i < o.length; i += 1) e.classList.add(o[i]);
                        else {
                            var r = e.getElementsByTagName("a");
                            if (0 === r.length) {
                                var s = a.getClosestTag(e, "a");
                                e = s ? [s] : []
                            } else e = r;
                            for (n = 0; n < e.length; n += 1) for (i = 0; i < o.length; i += 1) e[n].classList.add(o[i])
                        }
                    },
                    isListItem: function(e) {
                        if (!e) return ! 1;
                        if ("li" === e.nodeName.toLowerCase()) return ! 0;
                        for (var t = e.parentNode,
                        n = t.nodeName.toLowerCase();
                        "li" === n || !a.isBlockContainer(t) && "div" !== n;) {
                            if ("li" === n) return ! 0;
                            if (! (t = t.parentNode)) return ! 1;
                            n = t.nodeName.toLowerCase()
                        }
                        return ! 1
                    },
                    cleanListDOM: function(t, n) {
                        if ("li" === n.nodeName.toLowerCase()) {
                            var i = n.parentElement;
                            "p" === i.parentElement.nodeName.toLowerCase() && (a.unwrap(i.parentElement, t), e.selection.moveCursor(t, n.firstChild, n.firstChild.textContent.length))
                        }
                    },
                    splitOffDOMTree: function(e, t, n) {
                        for (var i = t,
                        o = null,
                        r = !n; i !== e;) {
                            var a, s = i.parentNode,
                            l = s.cloneNode(!1),
                            c = r ? i: s.firstChild;
                            for (o && (r ? l.appendChild(o) : a = o), o = l; c;) {
                                var d = c.nextSibling;
                                c === i ? (c.hasChildNodes() ? c = c.cloneNode(!1) : c.parentNode.removeChild(c), c.textContent && o.appendChild(c), c = r ? d: null) : (c.parentNode.removeChild(c), (c.hasChildNodes() || c.textContent) && o.appendChild(c), c = d)
                            }
                            a && o.appendChild(a),
                            i = s
                        }
                        return o
                    },
                    moveTextRangeIntoElement: function(e, t, n) {
                        if (!e || !t) return ! 1;
                        var i = a.findCommonRoot(e, t);
                        if (!i) return ! 1;
                        if (t === e) {
                            var o = e.parentNode,
                            r = e.nextSibling;
                            return o.removeChild(e),
                            n.appendChild(e),
                            r ? o.insertBefore(n, r) : o.appendChild(n),
                            n.hasChildNodes()
                        }
                        for (var s, l, c, d = [], u = 0; u < i.childNodes.length; u++) if (c = i.childNodes[u], s) {
                            if (a.isDescendant(c, t, !0)) {
                                l = c;
                                break
                            }
                            d.push(c)
                        } else a.isDescendant(c, e, !0) && (s = c);
                        var h = l.nextSibling,
                        f = i.ownerDocument.createDocumentFragment();
                        return s === e ? (s.parentNode.removeChild(s), f.appendChild(s)) : f.appendChild(a.splitOffDOMTree(s, e)),
                        d.forEach(function(e) {
                            e.parentNode.removeChild(e),
                            f.appendChild(e)
                        }),
                        l === t ? (l.parentNode.removeChild(l), f.appendChild(l)) : f.appendChild(a.splitOffDOMTree(l, t, !0)),
                        n.appendChild(f),
                        l.parentNode === i ? i.insertBefore(n, l) : h ? i.insertBefore(n, h) : i.appendChild(n),
                        n.hasChildNodes()
                    },
                    depthOfNode: function(e) {
                        for (var t = 0,
                        n = e; null !== n.parentNode;) n = n.parentNode,
                        t++;
                        return t
                    },
                    findCommonRoot: function(e, t) {
                        for (var n = a.depthOfNode(e), i = a.depthOfNode(t), o = e, r = t; n !== i;) n > i ? (o = o.parentNode, n -= 1) : (r = r.parentNode, i -= 1);
                        for (; o !== r;) o = o.parentNode,
                        r = r.parentNode;
                        return o
                    },
                    isElementAtBeginningOfBlock: function(e) {
                        for (var t, n; ! a.isBlockContainer(e) && !a.isMediumEditorElement(e);) {
                            for (n = e; n = n.previousSibling;) if (t = 3 === n.nodeType ? n.nodeValue: n.textContent, t.length > 0) return ! 1;
                            e = e.parentNode
                        }
                        return ! 0
                    },
                    isMediumEditorElement: function(e) {
                        return e && e.getAttribute && !!e.getAttribute("data-medium-editor-element")
                    },
                    getContainerEditorElement: function(e) {
                        return a.traverseUp(e,
                        function(e) {
                            return a.isMediumEditorElement(e)
                        })
                    },
                    isBlockContainer: function(e) {
                        return e && 3 !== e.nodeType && -1 !== a.blockContainerElementNames.indexOf(e.nodeName.toLowerCase())
                    },
                    getClosestBlockContainer: function(e) {
                        return a.traverseUp(e,
                        function(e) {
                            return a.isBlockContainer(e) || a.isMediumEditorElement(e)
                        })
                    },
                    getTopBlockContainer: function(e) {
                        var t = !!a.isBlockContainer(e) && e;
                        return a.traverseUp(e,
                        function(e) {
                            return a.isBlockContainer(e) && (t = e),
                            !(t || !a.isMediumEditorElement(e)) && (t = e, !0)
                        }),
                        t
                    },
                    getFirstSelectableLeafNode: function(e) {
                        for (; e && e.firstChild;) e = e.firstChild;
                        if (e = a.traverseUp(e,
                        function(e) {
                            return - 1 === a.emptyElementNames.indexOf(e.nodeName.toLowerCase())
                        }), "table" === e.nodeName.toLowerCase()) {
                            var t = e.querySelector("th, td");
                            t && (e = t)
                        }
                        return e
                    },
                    getFirstTextNode: function(e) {
                        return a.warn("getFirstTextNode is deprecated and will be removed in version 6.0.0"),
                        a._getFirstTextNode(e)
                    },
                    _getFirstTextNode: function(e) {
                        if (3 === e.nodeType) return e;
                        for (var t = 0; t < e.childNodes.length; t++) {
                            var n = a._getFirstTextNode(e.childNodes[t]);
                            if (null !== n) return n
                        }
                        return null
                    },
                    ensureUrlHasProtocol: function(e) {
                        return - 1 === e.indexOf("://") ? "http://" + e: e
                    },
                    warn: function() {
                        void 0 !== t.console && "function" == typeof t.console.warn && t.console.warn.apply(t.console, arguments)
                    },
                    deprecated: function(e, t, n) {
                        var i = e + " is deprecated, please use " + t + " instead.";
                        n && (i += " Will be removed in " + n),
                        a.warn(i)
                    },
                    deprecatedMethod: function(e, t, n, i) {
                        a.deprecated(e, t, i),
                        "function" == typeof this[t] && this[t].apply(this, n)
                    },
                    cleanupAttrs: function(e, t) {
                        t.forEach(function(t) {
                            e.removeAttribute(t)
                        })
                    },
                    cleanupTags: function(e, t) { - 1 !== t.indexOf(e.nodeName.toLowerCase()) && e.parentNode.removeChild(e)
                    },
                    unwrapTags: function(t, n) { - 1 !== n.indexOf(t.nodeName.toLowerCase()) && e.util.unwrap(t, document)
                    },
                    getClosestTag: function(e, t) {
                        return a.traverseUp(e,
                        function(e) {
                            return e.nodeName.toLowerCase() === t.toLowerCase()
                        })
                    },
                    unwrap: function(e, t) {
                        for (var n = t.createDocumentFragment(), i = Array.prototype.slice.call(e.childNodes), o = 0; o < i.length; o++) n.appendChild(i[o]);
                        n.childNodes.length ? e.parentNode.replaceChild(n, e) : e.parentNode.removeChild(e)
                    },
                    guid: function() {
                        function e() {
                            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                        }
                        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
                    }
                };
                e.util = a
            } (window),
            function() {
                var t = function(t) {
                    e.util.extend(this, t)
                };
                t.extend = function(t) {
                    var n, i = this;
                    n = t && t.hasOwnProperty("constructor") ? t.constructor: function() {
                        return i.apply(this, arguments)
                    },
                    e.util.extend(n, i);
                    var o = function() {
                        this.constructor = n
                    };
                    return o.prototype = i.prototype,
                    n.prototype = new o,
                    t && e.util.extend(n.prototype, t),
                    n
                },
                t.prototype = {
                    init: function() {},
                    base: void 0,
                    name: void 0,
                    checkState: void 0,
                    destroy: void 0,
                    queryCommandState: void 0,
                    isActive: void 0,
                    isAlreadyApplied: void 0,
                    setActive: void 0,
                    setInactive: void 0,
                    getInteractionElements: void 0,
                    window: void 0,
                    document: void 0,
                    getEditorElements: function() {
                        return this.base.elements
                    },
                    getEditorId: function() {
                        return this.base.id
                    },
                    getEditorOption: function(e) {
                        return this.base.options[e]
                    }
                },
                ["execAction", "on", "off", "subscribe", "trigger"].forEach(function(e) {
                    t.prototype[e] = function() {
                        return this.base[e].apply(this.base, arguments)
                    }
                }),
                e.Extension = t
            } (),
            function() {
                function t(t) {
                    return e.util.isBlockContainer(t) ? NodeFilter.FILTER_ACCEPT: NodeFilter.FILTER_SKIP
                }
                var n = {
                    findMatchingSelectionParent: function(t, n) {
                        var i, o, r = n.getSelection();
                        return 0 !== r.rangeCount && (i = r.getRangeAt(0), o = i.commonAncestorContainer, e.util.traverseUp(o, t))
                    },
                    getSelectionElement: function(t) {
                        return this.findMatchingSelectionParent(function(t) {
                            return e.util.isMediumEditorElement(t)
                        },
                        t)
                    },
                    exportSelection: function(e, t) {
                        if (!e) return null;
                        var n = null,
                        i = t.getSelection();
                        if (i.rangeCount > 0) {
                            var o, r = i.getRangeAt(0),
                            a = r.cloneRange();
                            a.selectNodeContents(e),
                            a.setEnd(r.startContainer, r.startOffset),
                            o = a.toString().length,
                            n = {
                                start: o,
                                end: o + r.toString().length
                            },
                            this.doesRangeStartWithImages(r, t) && (n.startsWithImage = !0);
                            var s = this.getTrailingImageCount(e, n, r.endContainer, r.endOffset);
                            if (s && (n.trailingImageCount = s), 0 !== o) {
                                var l = this.getIndexRelativeToAdjacentEmptyBlocks(t, e, r.startContainer, r.startOffset); - 1 !== l && (n.emptyBlocksIndex = l)
                            }
                        }
                        return n
                    },
                    importSelection: function(e, t, n, i) {
                        if (e && t) {
                            var o = n.createRange();
                            o.setStart(t, 0),
                            o.collapse(!0);
                            var r, a = t,
                            s = [],
                            l = 0,
                            c = !1,
                            d = !1,
                            u = 0,
                            h = !1,
                            f = !1,
                            m = null;
                            for ((i || e.startsWithImage || void 0 !== e.emptyBlocksIndex) && (f = !0); ! h && a;) if (a.nodeType > 3) a = s.pop();
                            else {
                                if (3 !== a.nodeType || d) {
                                    if (e.trailingImageCount && d && ("img" === a.nodeName.toLowerCase() && u++, u === e.trailingImageCount)) {
                                        for (var p = 0; a.parentNode.childNodes[p] !== a;) p++;
                                        o.setEnd(a.parentNode, p + 1),
                                        h = !0
                                    }
                                    if (!h && 1 === a.nodeType) for (var g = a.childNodes.length - 1; g >= 0;) s.push(a.childNodes[g]),
                                    g -= 1
                                } else r = l + a.length,
                                !c && e.start >= l && e.start <= r && (f || e.start < r ? (o.setStart(a, e.start - l), c = !0) : m = a),
                                c && e.end >= l && e.end <= r && (e.trailingImageCount ? d = !0 : (o.setEnd(a, e.end - l), h = !0)),
                                l = r;
                                h || (a = s.pop())
                            } ! c && m && (o.setStart(m, m.length), o.setEnd(m, m.length)),
                            void 0 !== e.emptyBlocksIndex && (o = this.importSelectionMoveCursorPastBlocks(n, t, e.emptyBlocksIndex, o)),
                            i && (o = this.importSelectionMoveCursorPastAnchor(e, o)),
                            this.selectRange(n, o)
                        }
                    },
                    importSelectionMoveCursorPastAnchor: function(t, n) {
                        var i = function(e) {
                            return "a" === e.nodeName.toLowerCase()
                        };
                        if (t.start === t.end && 3 === n.startContainer.nodeType && n.startOffset === n.startContainer.nodeValue.length && e.util.traverseUp(n.startContainer, i)) {
                            for (var o = n.startContainer,
                            r = n.startContainer.parentNode; null !== r && "a" !== r.nodeName.toLowerCase();) r.childNodes[r.childNodes.length - 1] !== o ? r = null: (o = r, r = r.parentNode);
                            if (null !== r && "a" === r.nodeName.toLowerCase()) {
                                for (var a = null,
                                s = 0; null === a && s < r.parentNode.childNodes.length; s++) r.parentNode.childNodes[s] === r && (a = s);
                                n.setStart(r.parentNode, a + 1),
                                n.collapse(!0)
                            }
                        }
                        return n
                    },
                    importSelectionMoveCursorPastBlocks: function(n, i, o, r) {
                        var a, s, l = n.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, t, !1),
                        c = r.startContainer,
                        d = 0;
                        for (o = o || 1, a = 3 === c.nodeType && e.util.isBlockContainer(c.previousSibling) ? c.previousSibling: e.util.getClosestBlockContainer(c); l.nextNode();) if (s) {
                            if (s = l.currentNode, ++d === o) break;
                            if (s.textContent.length > 0) break
                        } else a === l.currentNode && (s = l.currentNode);
                        return s || (s = a),
                        r.setStart(e.util.getFirstSelectableLeafNode(s), 0),
                        r
                    },
                    getIndexRelativeToAdjacentEmptyBlocks: function(n, i, o, r) {
                        if (o.textContent.length > 0 && r > 0) return - 1;
                        var a = o;
                        if (3 !== a.nodeType && (a = o.childNodes[r]), a) {
                            if (!e.util.isElementAtBeginningOfBlock(a)) return - 1;
                            var s = e.util.findPreviousSibling(a);
                            if (!s) return - 1;
                            if (s.nodeValue) return - 1
                        }
                        for (var l = e.util.getClosestBlockContainer(o), c = n.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, t, !1), d = 0; c.nextNode();) {
                            var u = "" === c.currentNode.textContent;
                            if ((u || d > 0) && (d += 1), c.currentNode === l) return d;
                            u || (d = 0)
                        }
                        return d
                    },
                    doesRangeStartWithImages: function(e, t) {
                        if (0 !== e.startOffset || 1 !== e.startContainer.nodeType) return ! 1;
                        if ("img" === e.startContainer.nodeName.toLowerCase()) return ! 0;
                        var n = e.startContainer.querySelector("img");
                        if (!n) return ! 1;
                        for (var i = t.createTreeWalker(e.startContainer, NodeFilter.SHOW_ALL, null, !1); i.nextNode();) {
                            var o = i.currentNode;
                            if (o === n) break;
                            if (o.nodeValue) return ! 1
                        }
                        return ! 0
                    },
                    getTrailingImageCount: function(e, t, n, i) {
                        if (0 === i || 1 !== n.nodeType) return 0;
                        if ("img" !== n.nodeName.toLowerCase() && !n.querySelector("img")) return 0;
                        for (var o = n.childNodes[i - 1]; o.hasChildNodes();) o = o.lastChild;
                        for (var r, a = e,
                        s = [], l = 0, c = !1, d = !1, u = !1, h = 0; ! u && a;) if (a.nodeType > 3) a = s.pop();
                        else {
                            if (3 !== a.nodeType || d) {
                                if ("img" === a.nodeName.toLowerCase() && h++, a === o) u = !0;
                                else if (1 === a.nodeType) for (var f = a.childNodes.length - 1; f >= 0;) s.push(a.childNodes[f]),
                                f -= 1
                            } else h = 0,
                            r = l + a.length,
                            !c && t.start >= l && t.start <= r && (c = !0),
                            c && t.end >= l && t.end <= r && (d = !0),
                            l = r;
                            u || (a = s.pop())
                        }
                        return h
                    },
                    selectionContainsContent: function(e) {
                        var t = e.getSelection();
                        if (!t || t.isCollapsed || !t.rangeCount) return ! 1;
                        if ("" !== t.toString().trim()) return ! 0;
                        var n = this.getSelectedParentElement(t.getRangeAt(0));
                        return ! (!n || !("img" === n.nodeName.toLowerCase() || 1 === n.nodeType && n.querySelector("img")))
                    },
                    selectionInContentEditableFalse: function(e) {
                        var t, n = this.findMatchingSelectionParent(function(e) {
                            var n = e && e.getAttribute("contenteditable");
                            return "true" === n && (t = !0),
                            "#text" !== e.nodeName && "false" === n
                        },
                        e);
                        return ! t && n
                    },
                    getSelectionHtml: function(e) {
                        var t, n, i, o = "",
                        r = e.getSelection();
                        if (r.rangeCount) {
                            for (i = e.createElement("div"), t = 0, n = r.rangeCount; t < n; t += 1) i.appendChild(r.getRangeAt(t).cloneContents());
                            o = i.innerHTML
                        }
                        return o
                    },
                    getCaretOffsets: function(e, t) {
                        var n, i;
                        return t || (t = window.getSelection().getRangeAt(0)),
                        n = t.cloneRange(),
                        i = t.cloneRange(),
                        n.selectNodeContents(e),
                        n.setEnd(t.endContainer, t.endOffset),
                        i.selectNodeContents(e),
                        i.setStart(t.endContainer, t.endOffset),
                        {
                            left: n.toString().length,
                            right: i.toString().length
                        }
                    },
                    rangeSelectsSingleNode: function(e) {
                        var t = e.startContainer;
                        return t === e.endContainer && t.hasChildNodes() && e.endOffset === e.startOffset + 1
                    },
                    getSelectedParentElement: function(e) {
                        return e ? this.rangeSelectsSingleNode(e) && 3 !== e.startContainer.childNodes[e.startOffset].nodeType ? e.startContainer.childNodes[e.startOffset] : 3 === e.startContainer.nodeType ? e.startContainer.parentNode: e.startContainer: null
                    },
                    getSelectedElements: function(e) {
                        var t, n, i, o = e.getSelection();
                        if (!o.rangeCount || o.isCollapsed || !o.getRangeAt(0).commonAncestorContainer) return [];
                        if (t = o.getRangeAt(0), 3 === t.commonAncestorContainer.nodeType) {
                            for (n = [], i = t.commonAncestorContainer; i.parentNode && 1 === i.parentNode.childNodes.length;) n.push(i.parentNode),
                            i = i.parentNode;
                            return n
                        }
                        return [].filter.call(t.commonAncestorContainer.getElementsByTagName("*"),
                        function(e) {
                            return "function" != typeof o.containsNode || o.containsNode(e, !0)
                        })
                    },
                    selectNode: function(e, t) {
                        var n = t.createRange();
                        n.selectNodeContents(e),
                        this.selectRange(t, n)
                    },
                    select: function(e, t, n, i, o) {
                        var r = e.createRange();
                        return r.setStart(t, n),
                        i ? r.setEnd(i, o) : r.collapse(!0),
                        this.selectRange(e, r),
                        r
                    },
                    clearSelection: function(e, t) {
                        t ? e.getSelection().collapseToStart() : e.getSelection().collapseToEnd()
                    },
                    moveCursor: function(e, t, n) {
                        this.select(e, t, n)
                    },
                    getSelectionRange: function(e) {
                        var t = e.getSelection();
                        return 0 === t.rangeCount ? null: t.getRangeAt(0)
                    },
                    selectRange: function(e, t) {
                        var n = e.getSelection();
                        n.removeAllRanges(),
                        n.addRange(t)
                    },
                    getSelectionStart: function(e) {
                        var t = e.getSelection().anchorNode;
                        return t && 3 === t.nodeType ? t.parentNode: t
                    }
                };
                e.selection = n
            } (),
            function() {
                function t(t, n) {
                    return t.some(function(t) {
                        if ("function" != typeof t.getInteractionElements) return ! 1;
                        var i = t.getInteractionElements();
                        return !! i && (Array.isArray(i) || (i = [i]), i.some(function(t) {
                            return e.util.isDescendant(t, n, !0)
                        }))
                    })
                }
                var n = function(e) {
                    this.base = e,
                    this.options = this.base.options,
                    this.events = [],
                    this.disabledEvents = {},
                    this.customEvents = {},
                    this.listeners = {}
                };
                n.prototype = {
                    InputEventOnContenteditableSupported: !e.util.isIE && !e.util.isEdge,
                    attachDOMEvent: function(t, n, i, o) {
                        var r = this.base.options.contentWindow,
                        a = this.base.options.ownerDocument;
                        t = e.util.isElement(t) || [r, a].indexOf(t) > -1 ? [t] : t,
                        Array.prototype.forEach.call(t,
                        function(e) {
                            e.addEventListener(n, i, o),
                            this.events.push([e, n, i, o])
                        }.bind(this))
                    },
                    detachDOMEvent: function(t, n, i, o) {
                        var r, a, s = this.base.options.contentWindow,
                        l = this.base.options.ownerDocument;
                        null !== t && (t = e.util.isElement(t) || [s, l].indexOf(t) > -1 ? [t] : t, Array.prototype.forEach.call(t,
                        function(e) { - 1 !== (r = this.indexOfListener(e, n, i, o)) && (a = this.events.splice(r, 1)[0], a[0].removeEventListener(a[1], a[2], a[3]))
                        }.bind(this)))
                    },
                    indexOfListener: function(e, t, n, i) {
                        var o, r, a;
                        for (o = 0, r = this.events.length; o < r; o += 1) if (a = this.events[o], a[0] === e && a[1] === t && a[2] === n && a[3] === i) return o;
                        return - 1
                    },
                    detachAllDOMEvents: function() {
                        for (var e = this.events.pop(); e;) e[0].removeEventListener(e[1], e[2], e[3]),
                        e = this.events.pop()
                    },
                    detachAllEventsFromElement: function(e) {
                        for (var t = this.events.filter(function(t) {
                            return t && t[0].getAttribute && t[0].getAttribute("medium-editor-index") === e.getAttribute("medium-editor-index")
                        }), n = 0, i = t.length; n < i; n++) {
                            var o = t[n];
                            this.detachDOMEvent(o[0], o[1], o[2], o[3])
                        }
                    },
                    attachAllEventsToElement: function(e) {
                        this.listeners.editableInput && (this.contentCache[e.getAttribute("medium-editor-index")] = e.innerHTML),
                        this.eventsCache && this.eventsCache.forEach(function(t) {
                            this.attachDOMEvent(e, t.name, t.handler.bind(this))
                        },
                        this)
                    },
                    enableCustomEvent: function(e) {
                        void 0 !== this.disabledEvents[e] && delete this.disabledEvents[e]
                    },
                    disableCustomEvent: function(e) {
                        this.disabledEvents[e] = !0
                    },
                    attachCustomEvent: function(e, t) {
                        this.setupListener(e),
                        this.customEvents[e] || (this.customEvents[e] = []),
                        this.customEvents[e].push(t)
                    },
                    detachCustomEvent: function(e, t) {
                        var n = this.indexOfCustomListener(e, t); - 1 !== n && this.customEvents[e].splice(n, 1)
                    },
                    indexOfCustomListener: function(e, t) {
                        return this.customEvents[e] && this.customEvents[e].length ? this.customEvents[e].indexOf(t) : -1
                    },
                    detachAllCustomEvents: function() {
                        this.customEvents = {}
                    },
                    triggerCustomEvent: function(e, t, n) {
                        this.customEvents[e] && !this.disabledEvents[e] && this.customEvents[e].forEach(function(e) {
                            e(t, n)
                        })
                    },
                    destroy: function() {
                        this.detachAllDOMEvents(),
                        this.detachAllCustomEvents(),
                        this.detachExecCommand(),
                        this.base.elements && this.base.elements.forEach(function(e) {
                            e.removeAttribute("data-medium-focused")
                        })
                    },
                    attachToExecCommand: function() {
                        this.execCommandListener || (this.execCommandListener = function(e) {
                            this.handleDocumentExecCommand(e)
                        }.bind(this), this.wrapExecCommand(), this.options.ownerDocument.execCommand.listeners.push(this.execCommandListener))
                    },
                    detachExecCommand: function() {
                        var e = this.options.ownerDocument;
                        if (this.execCommandListener && e.execCommand.listeners) {
                            var t = e.execCommand.listeners.indexOf(this.execCommandListener); - 1 !== t && e.execCommand.listeners.splice(t, 1),
                            e.execCommand.listeners.length || this.unwrapExecCommand()
                        }
                    },
                    wrapExecCommand: function() {
                        var e = this.options.ownerDocument;
                        if (!e.execCommand.listeners) {
                            var t = function(t, n) {
                                e.execCommand.listeners && e.execCommand.listeners.forEach(function(e) {
                                    e({
                                        command: t[0],
                                        value: t[2],
                                        args: t,
                                        result: n
                                    })
                                })
                            },
                            n = function() {
                                var n = e.execCommand.orig.apply(this, arguments);
                                if (!e.execCommand.listeners) return n;
                                var i = Array.prototype.slice.call(arguments);
                                return t(i, n),
                                n
                            };
                            n.orig = e.execCommand,
                            n.listeners = [],
                            n.callListeners = t,
                            e.execCommand = n
                        }
                    },
                    unwrapExecCommand: function() {
                        var e = this.options.ownerDocument;
                        e.execCommand.orig && (e.execCommand = e.execCommand.orig)
                    },
                    setupListener: function(e) {
                        if (!this.listeners[e]) {
                            switch (e) {
                            case "externalInteraction":
                                this.attachDOMEvent(this.options.ownerDocument.body, "mousedown", this.handleBodyMousedown.bind(this), !0),
                                this.attachDOMEvent(this.options.ownerDocument.body, "click", this.handleBodyClick.bind(this), !0),
                                this.attachDOMEvent(this.options.ownerDocument.body, "focus", this.handleBodyFocus.bind(this), !0);
                                break;
                            case "blur":
                            case "focus":
                                this.setupListener("externalInteraction");
                                break;
                            case "editableInput":
                                this.contentCache = {},
                                this.base.elements.forEach(function(e) {
                                    this.contentCache[e.getAttribute("medium-editor-index")] = e.innerHTML
                                },
                                this),
                                this.InputEventOnContenteditableSupported && this.attachToEachElement("input", this.handleInput),
                                this.InputEventOnContenteditableSupported || (this.setupListener("editableKeypress"), this.keypressUpdateInput = !0, this.attachDOMEvent(document, "selectionchange", this.handleDocumentSelectionChange.bind(this)), this.attachToExecCommand());
                                break;
                            case "editableClick":
                                this.attachToEachElement("click", this.handleClick);
                                break;
                            case "editableBlur":
                                this.attachToEachElement("blur", this.handleBlur);
                                break;
                            case "editableKeypress":
                                this.attachToEachElement("keypress", this.handleKeypress);
                                break;
                            case "editableKeyup":
                                this.attachToEachElement("keyup", this.handleKeyup);
                                break;
                            case "editableKeydown":
                                this.attachToEachElement("keydown", this.handleKeydown);
                                break;
                            case "editableKeydownSpace":
                            case "editableKeydownEnter":
                            case "editableKeydownTab":
                            case "editableKeydownDelete":
                                this.setupListener("editableKeydown");
                                break;
                            case "editableMouseover":
                                this.attachToEachElement("mouseover", this.handleMouseover);
                                break;
                            case "editableDrag":
                                this.attachToEachElement("dragover", this.handleDragging),
                                this.attachToEachElement("dragleave", this.handleDragging);
                                break;
                            case "editableDrop":
                                this.attachToEachElement("drop", this.handleDrop);
                                break;
                            case "editablePaste":
                                this.attachToEachElement("paste", this.handlePaste)
                            }
                            this.listeners[e] = !0
                        }
                    },
                    attachToEachElement: function(e, t) {
                        this.eventsCache || (this.eventsCache = []),
                        this.base.elements.forEach(function(n) {
                            this.attachDOMEvent(n, e, t.bind(this))
                        },
                        this),
                        this.eventsCache.push({
                            name: e,
                            handler: t
                        })
                    },
                    cleanupElement: function(e) {
                        var t = e.getAttribute("medium-editor-index");
                        t && (this.detachAllEventsFromElement(e), this.contentCache && delete this.contentCache[t])
                    },
                    focusElement: function(e) {
                        e.focus(),
                        this.updateFocus(e, {
                            target: e,
                            type: "focus"
                        })
                    },
                    updateFocus: function(n, i) {
                        var o, r = this.base.getFocusedElement();
                        r && "click" === i.type && this.lastMousedownTarget && (e.util.isDescendant(r, this.lastMousedownTarget, !0) || t(this.base.extensions, this.lastMousedownTarget)) && (o = r),
                        o || this.base.elements.some(function(t) {
                            return ! o && e.util.isDescendant(t, n, !0) && (o = t),
                            !!o
                        },
                        this);
                        var a = !e.util.isDescendant(r, n, !0) && !t(this.base.extensions, n);
                        o !== r && (r && a && (r.removeAttribute("data-medium-focused"), this.triggerCustomEvent("blur", i, r)), o && (o.setAttribute("data-medium-focused", !0), this.triggerCustomEvent("focus", i, o))),
                        a && this.triggerCustomEvent("externalInteraction", i)
                    },
                    updateInput: function(e, t) {
                        if (this.contentCache) {
                            var n = e.getAttribute("medium-editor-index"),
                            i = e.innerHTML;
                            i !== this.contentCache[n] && this.triggerCustomEvent("editableInput", t, e),
                            this.contentCache[n] = i
                        }
                    },
                    handleDocumentSelectionChange: function(t) {
                        if (t.currentTarget && t.currentTarget.activeElement) {
                            var n, i = t.currentTarget.activeElement;
                            this.base.elements.some(function(t) {
                                return !! e.util.isDescendant(t, i, !0) && (n = t, !0)
                            },
                            this),
                            n && this.updateInput(n, {
                                target: i,
                                currentTarget: n
                            })
                        }
                    },
                    handleDocumentExecCommand: function() {
                        var e = this.base.getFocusedElement();
                        e && this.updateInput(e, {
                            target: e,
                            currentTarget: e
                        })
                    },
                    handleBodyClick: function(e) {
                        this.updateFocus(e.target, e)
                    },
                    handleBodyFocus: function(e) {
                        this.updateFocus(e.target, e)
                    },
                    handleBodyMousedown: function(e) {
                        this.lastMousedownTarget = e.target
                    },
                    handleInput: function(e) {
                        this.updateInput(e.currentTarget, e)
                    },
                    handleClick: function(e) {
                        this.triggerCustomEvent("editableClick", e, e.currentTarget)
                    },
                    handleBlur: function(e) {
                        this.triggerCustomEvent("editableBlur", e, e.currentTarget)
                    },
                    handleKeypress: function(e) {
                        if (this.triggerCustomEvent("editableKeypress", e, e.currentTarget), this.keypressUpdateInput) {
                            var t = {
                                target: e.target,
                                currentTarget: e.currentTarget
                            };
                            setTimeout(function() {
                                this.updateInput(t.currentTarget, t)
                            }.bind(this), 0)
                        }
                    },
                    handleKeyup: function(e) {
                        this.triggerCustomEvent("editableKeyup", e, e.currentTarget)
                    },
                    handleMouseover: function(e) {
                        this.triggerCustomEvent("editableMouseover", e, e.currentTarget)
                    },
                    handleDragging: function(e) {
                        this.triggerCustomEvent("editableDrag", e, e.currentTarget)
                    },
                    handleDrop: function(e) {
                        this.triggerCustomEvent("editableDrop", e, e.currentTarget)
                    },
                    handlePaste: function(e) {
                        this.triggerCustomEvent("editablePaste", e, e.currentTarget)
                    },
                    handleKeydown: function(t) {
                        return this.triggerCustomEvent("editableKeydown", t, t.currentTarget),
                        e.util.isKey(t, e.util.keyCode.SPACE) ? this.triggerCustomEvent("editableKeydownSpace", t, t.currentTarget) : e.util.isKey(t, e.util.keyCode.ENTER) || t.ctrlKey && e.util.isKey(t, e.util.keyCode.M) ? this.triggerCustomEvent("editableKeydownEnter", t, t.currentTarget) : e.util.isKey(t, e.util.keyCode.TAB) ? this.triggerCustomEvent("editableKeydownTab", t, t.currentTarget) : e.util.isKey(t, [e.util.keyCode.DELETE, e.util.keyCode.BACKSPACE]) ? this.triggerCustomEvent("editableKeydownDelete", t, t.currentTarget) : void 0
                    }
                },
                e.Events = n
            } (),
            function() {
                var t = e.Extension.extend({
                    action: void 0,
                    aria: void 0,
                    tagNames: void 0,
                    style: void 0,
                    useQueryState: void 0,
                    contentDefault: void 0,
                    contentFA: void 0,
                    classList: void 0,
                    attrs: void 0,
                    constructor: function(n) {
                        t.isBuiltInButton(n) ? e.Extension.call(this, this.defaults[n]) : e.Extension.call(this, n)
                    },
                    init: function() {
                        e.Extension.prototype.init.apply(this, arguments),
                        this.button = this.createButton(),
                        this.on(this.button, "click", this.handleClick.bind(this))
                    },
                    getButton: function() {
                        return this.button
                    },
                    getAction: function() {
                        return "function" == typeof this.action ? this.action(this.base.options) : this.action
                    },
                    getAria: function() {
                        return "function" == typeof this.aria ? this.aria(this.base.options) : this.aria
                    },
                    getTagNames: function() {
                        return "function" == typeof this.tagNames ? this.tagNames(this.base.options) : this.tagNames
                    },
                    createButton: function() {
                        var e = this.document.createElement("button"),
                        t = this.contentDefault,
                        n = this.getAria(),
                        i = this.getEditorOption("buttonLabels");
                        return e.classList.add("medium-editor-action"),
                        e.classList.add("medium-editor-action-" + this.name),
                        this.classList && this.classList.forEach(function(t) {
                            e.classList.add(t)
                        }),
                        e.setAttribute("data-action", this.getAction()),
                        n && (e.setAttribute("title", n), e.setAttribute("aria-label", n)),
                        this.attrs && Object.keys(this.attrs).forEach(function(t) {
                            e.setAttribute(t, this.attrs[t])
                        },
                        this),
                        "fontawesome" === i && this.contentFA && (t = this.contentFA),
                        e.innerHTML = t,
                        e
                    },
                    handleClick: function(e) {
                        e.preventDefault(),
                        e.stopPropagation();
                        var t = this.getAction();
                        t && this.execAction(t)
                    },
                    isActive: function() {
                        return this.button.classList.contains(this.getEditorOption("activeButtonClass"))
                    },
                    setInactive: function() {
                        this.button.classList.remove(this.getEditorOption("activeButtonClass")),
                        delete this.knownState
                    },
                    setActive: function() {
                        this.button.classList.add(this.getEditorOption("activeButtonClass")),
                        delete this.knownState
                    },
                    queryCommandState: function() {
                        var e = null;
                        return this.useQueryState && (e = this.base.queryCommandState(this.getAction())),
                        e
                    },
                    isAlreadyApplied: function(e) {
                        var t, n, i = !1,
                        o = this.getTagNames();
                        return ! 1 === this.knownState || !0 === this.knownState ? this.knownState: (o && o.length > 0 && (i = -1 !== o.indexOf(e.nodeName.toLowerCase())), !i && this.style && (t = this.style.value.split("|"), n = this.window.getComputedStyle(e, null).getPropertyValue(this.style.prop), t.forEach(function(e) {
                            this.knownState || ((i = -1 !== n.indexOf(e)) || "text-decoration" !== this.style.prop) && (this.knownState = i)
                        },
                        this)), i)
                    }
                });
                t.isBuiltInButton = function(t) {
                    return "string" == typeof t && e.extensions.button.prototype.defaults.hasOwnProperty(t)
                },
                e.extensions.button = t
            } (),
            function() {
                e.extensions.button.prototype.defaults = {
                    bold: {
                        name: "bold",
                        action: "bold",
                        aria: "bold",
                        tagNames: ["b", "strong"],
                        style: {
                            prop: "font-weight",
                            value: "700|bold"
                        },
                        useQueryState: !0,
                        contentDefault: "<b>B</b>",
                        contentFA: '<i class="fa fa-bold"></i>'
                    },
                    italic: {
                        name: "italic",
                        action: "italic",
                        aria: "italic",
                        tagNames: ["i", "em"],
                        style: {
                            prop: "font-style",
                            value: "italic"
                        },
                        useQueryState: !0,
                        contentDefault: "<b><i>I</i></b>",
                        contentFA: '<i class="fa fa-italic"></i>'
                    },
                    underline: {
                        name: "underline",
                        action: "underline",
                        aria: "underline",
                        tagNames: ["u"],
                        style: {
                            prop: "text-decoration",
                            value: "underline"
                        },
                        useQueryState: !0,
                        contentDefault: "<b><u>U</u></b>",
                        contentFA: '<i class="fa fa-underline"></i>'
                    },
                    strikethrough: {
                        name: "strikethrough",
                        action: "strikethrough",
                        aria: "strike through",
                        tagNames: ["strike"],
                        style: {
                            prop: "text-decoration",
                            value: "line-through"
                        },
                        useQueryState: !0,
                        contentDefault: "<s>A</s>",
                        contentFA: '<i class="fa fa-strikethrough"></i>'
                    },
                    superscript: {
                        name: "superscript",
                        action: "superscript",
                        aria: "superscript",
                        tagNames: ["sup"],
                        contentDefault: "<b>x<sup>1</sup></b>",
                        contentFA: '<i class="fa fa-superscript"></i>'
                    },
                    subscript: {
                        name: "subscript",
                        action: "subscript",
                        aria: "subscript",
                        tagNames: ["sub"],
                        contentDefault: "<b>x<sub>1</sub></b>",
                        contentFA: '<i class="fa fa-subscript"></i>'
                    },
                    image: {
                        name: "image",
                        action: "image",
                        aria: "image",
                        tagNames: ["img"],
                        contentDefault: "<b>image</b>",
                        contentFA: '<i class="fa fa-picture-o"></i>'
                    },
                    html: {
                        name: "html",
                        action: "html",
                        aria: "evaluate html",
                        tagNames: ["iframe", "object"],
                        contentDefault: "<b>html</b>",
                        contentFA: '<i class="fa fa-code"></i>'
                    },
                    orderedlist: {
                        name: "orderedlist",
                        action: "insertorderedlist",
                        aria: "ordered list",
                        tagNames: ["ol"],
                        useQueryState: !0,
                        contentDefault: "<b>1.</b>",
                        contentFA: '<i class="fa fa-list-ol"></i>'
                    },
                    unorderedlist: {
                        name: "unorderedlist",
                        action: "insertunorderedlist",
                        aria: "unordered list",
                        tagNames: ["ul"],
                        useQueryState: !0,
                        contentDefault: "<b>&bull;</b>",
                        contentFA: '<i class="fa fa-list-ul"></i>'
                    },
                    indent: {
                        name: "indent",
                        action: "indent",
                        aria: "indent",
                        tagNames: [],
                        contentDefault: "<b>&rarr;</b>",
                        contentFA: '<i class="fa fa-indent"></i>'
                    },
                    outdent: {
                        name: "outdent",
                        action: "outdent",
                        aria: "outdent",
                        tagNames: [],
                        contentDefault: "<b>&larr;</b>",
                        contentFA: '<i class="fa fa-outdent"></i>'
                    },
                    justifyCenter: {
                        name: "justifyCenter",
                        action: "justifyCenter",
                        aria: "center justify",
                        tagNames: [],
                        style: {
                            prop: "text-align",
                            value: "center"
                        },
                        contentDefault: "<b>C</b>",
                        contentFA: '<i class="fa fa-align-center"></i>'
                    },
                    justifyFull: {
                        name: "justifyFull",
                        action: "justifyFull",
                        aria: "full justify",
                        tagNames: [],
                        style: {
                            prop: "text-align",
                            value: "justify"
                        },
                        contentDefault: "<b>J</b>",
                        contentFA: '<i class="fa fa-align-justify"></i>'
                    },
                    justifyLeft: {
                        name: "justifyLeft",
                        action: "justifyLeft",
                        aria: "left justify",
                        tagNames: [],
                        style: {
                            prop: "text-align",
                            value: "left"
                        },
                        contentDefault: "<b>L</b>",
                        contentFA: '<i class="fa fa-align-left"></i>'
                    },
                    justifyRight: {
                        name: "justifyRight",
                        action: "justifyRight",
                        aria: "right justify",
                        tagNames: [],
                        style: {
                            prop: "text-align",
                            value: "right"
                        },
                        contentDefault: "<b>R</b>",
                        contentFA: '<i class="fa fa-align-right"></i>'
                    },
                    removeFormat: {
                        name: "removeFormat",
                        aria: "remove formatting",
                        action: "removeFormat",
                        contentDefault: "<b>X</b>",
                        contentFA: '<i class="fa fa-eraser"></i>'
                    },
                    quote: {
                        name: "quote",
                        action: "append-blockquote",
                        aria: "blockquote",
                        tagNames: ["blockquote"],
                        contentDefault: "<b>&ldquo;</b>",
                        contentFA: '<i class="fa fa-quote-right"></i>'
                    },
                    pre: {
                        name: "pre",
                        action: "append-pre",
                        aria: "preformatted text",
                        tagNames: ["pre"],
                        contentDefault: "<b>0101</b>",
                        contentFA: '<i class="fa fa-code fa-lg"></i>'
                    },
                    h1: {
                        name: "h1",
                        action: "append-h1",
                        aria: "header type one",
                        tagNames: ["h1"],
                        contentDefault: "<b>H1</b>",
                        contentFA: '<i class="fa fa-header"><sup>1</sup>'
                    },
                    h2: {
                        name: "h2",
                        action: "append-h2",
                        aria: "header type two",
                        tagNames: ["h2"],
                        contentDefault: "<b>H2</b>",
                        contentFA: '<i class="fa fa-header"><sup>2</sup>'
                    },
                    h3: {
                        name: "h3",
                        action: "append-h3",
                        aria: "header type three",
                        tagNames: ["h3"],
                        contentDefault: "<b>H3</b>",
                        contentFA: '<i class="fa fa-header"><sup>3</sup>'
                    },
                    h4: {
                        name: "h4",
                        action: "append-h4",
                        aria: "header type four",
                        tagNames: ["h4"],
                        contentDefault: "<b>H4</b>",
                        contentFA: '<i class="fa fa-header"><sup>4</sup>'
                    },
                    h5: {
                        name: "h5",
                        action: "append-h5",
                        aria: "header type five",
                        tagNames: ["h5"],
                        contentDefault: "<b>H5</b>",
                        contentFA: '<i class="fa fa-header"><sup>5</sup>'
                    },
                    h6: {
                        name: "h6",
                        action: "append-h6",
                        aria: "header type six",
                        tagNames: ["h6"],
                        contentDefault: "<b>H6</b>",
                        contentFA: '<i class="fa fa-header"><sup>6</sup>'
                    }
                }
            } (),
            function() {
                var t = e.extensions.button.extend({
                    init: function() {
                        e.extensions.button.prototype.init.apply(this, arguments)
                    },
                    formSaveLabel: "&#10003;",
                    formCloseLabel: "&times;",
                    activeClass: "medium-editor-toolbar-form-active",
                    hasForm: !0,
                    getForm: function() {},
                    isDisplayed: function() {
                        return !! this.hasForm && this.getForm().classList.contains(this.activeClass)
                    },
                    showForm: function() {
                        this.hasForm && this.getForm().classList.add(this.activeClass)
                    },
                    hideForm: function() {
                        this.hasForm && this.getForm().classList.remove(this.activeClass)
                    },
                    showToolbarDefaultActions: function() {
                        var e = this.base.getExtensionByName("toolbar");
                        e && e.showToolbarDefaultActions()
                    },
                    hideToolbarDefaultActions: function() {
                        var e = this.base.getExtensionByName("toolbar");
                        e && e.hideToolbarDefaultActions()
                    },
                    setToolbarPosition: function() {
                        var e = this.base.getExtensionByName("toolbar");
                        e && e.setToolbarPosition()
                    }
                });
                e.extensions.form = t
            } (),
            function() {
                var t = e.extensions.form.extend({
                    customClassOption: null,
                    customClassOptionText: "Button",
                    linkValidation: !1,
                    placeholderText: "Paste or type a link",
                    targetCheckbox: !1,
                    targetCheckboxText: "Open in new window",
                    name: "anchor",
                    action: "createLink",
                    aria: "link",
                    tagNames: ["a"],
                    contentDefault: "<b>#</b>",
                    contentFA: '<i class="fa fa-link"></i>',
                    init: function() {
                        e.extensions.form.prototype.init.apply(this, arguments),
                        this.subscribe("editableKeydown", this.handleKeydown.bind(this))
                    },
                    handleClick: function(t) {
                        t.preventDefault(),
                        t.stopPropagation();
                        var n = e.selection.getSelectionRange(this.document);
                        return "a" === n.startContainer.nodeName.toLowerCase() || "a" === n.endContainer.nodeName.toLowerCase() || e.util.getClosestTag(e.selection.getSelectedParentElement(n), "a") ? this.execAction("unlink") : (this.isDisplayed() || this.showForm(), !1)
                    },
                    handleKeydown: function(t) {
                        e.util.isKey(t, e.util.keyCode.K) && e.util.isMetaCtrlKey(t) && !t.shiftKey && this.handleClick(t)
                    },
                    getForm: function() {
                        return this.form || (this.form = this.createForm()),
                        this.form
                    },
                    getTemplate: function() {
                        var e = ['<input type="text" class="medium-editor-toolbar-input" placeholder="', this.placeholderText, '">'];
                        return e.push('<a href="#" class="medium-editor-toolbar-save">', "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-check"></i>': this.formSaveLabel, "</a>"),
                        e.push('<a href="#" class="medium-editor-toolbar-close">', "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-times"></i>': this.formCloseLabel, "</a>"),
                        this.targetCheckbox && e.push('<div class="medium-editor-toolbar-form-row">', '<input type="checkbox" class="medium-editor-toolbar-anchor-target">', "<label>", this.targetCheckboxText, "</label>", "</div>"),
                        this.customClassOption && e.push('<div class="medium-editor-toolbar-form-row">', '<input type="checkbox" class="medium-editor-toolbar-anchor-button">', "<label>", this.customClassOptionText, "</label>", "</div>"),
                        e.join("")
                    },
                    isDisplayed: function() {
                        return e.extensions.form.prototype.isDisplayed.apply(this)
                    },
                    hideForm: function() {
                        e.extensions.form.prototype.hideForm.apply(this),
                        this.getInput().value = ""
                    },
                    showForm: function(t) {
                        var n = this.getInput(),
                        i = this.getAnchorTargetCheckbox(),
                        o = this.getAnchorButtonCheckbox();
                        if (t = t || {
                            value: ""
                        },
                        "string" == typeof t && (t = {
                            value: t
                        }), this.base.saveSelection(), this.hideToolbarDefaultActions(), e.extensions.form.prototype.showForm.apply(this), this.setToolbarPosition(), n.value = t.value, n.focus(), i && (i.checked = "_blank" === t.target), o) {
                            var r = t.buttonClass ? t.buttonClass.split(" ") : [];
                            o.checked = -1 !== r.indexOf(this.customClassOption)
                        }
                    },
                    destroy: function() {
                        if (!this.form) return ! 1;
                        this.form.parentNode && this.form.parentNode.removeChild(this.form),
                        delete this.form
                    },
                    getFormOpts: function() {
                        var e = this.getAnchorTargetCheckbox(),
                        t = this.getAnchorButtonCheckbox(),
                        n = {
                            value: this.getInput().value.trim()
                        };
                        return this.linkValidation && (n.value = this.checkLinkFormat(n.value)),
                        n.target = "_self",
                        e && e.checked && (n.target = "_blank"),
                        t && t.checked && (n.buttonClass = this.customClassOption),
                        n
                    },
                    doFormSave: function() {
                        var e = this.getFormOpts();
                        this.completeFormSave(e)
                    },
                    completeFormSave: function(e) {
                        this.base.restoreSelection(),
                        this.execAction(this.action, e),
                        this.base.checkSelection()
                    },
                    ensureEncodedUri: function(e) {
                        return e === decodeURI(e) ? encodeURI(e) : e
                    },
                    ensureEncodedUriComponent: function(e) {
                        return e === decodeURIComponent(e) ? encodeURIComponent(e) : e
                    },
                    ensureEncodedParam: function(e) {
                        var t = e.split("="),
                        n = t[0],
                        i = t[1];
                        return n + (void 0 === i ? "": "=" + this.ensureEncodedUriComponent(i))
                    },
                    ensureEncodedQuery: function(e) {
                        return e.split("&").map(this.ensureEncodedParam.bind(this)).join("&")
                    },
                    checkLinkFormat: function(e) {
                        var t = /^([a-z]+:)?\/\/|^(mailto|tel|maps):|^\#/i,
                        n = t.test(e),
                        i = "",
                        o = /^\+?\s?\(?(?:\d\s?\-?\)?){3,20}$/,
                        r = e.match(/^(.*?)(?:\?(.*?))?(?:#(.*))?$/),
                        a = r[1],
                        s = r[2],
                        l = r[3];
                        if (o.test(e)) return "tel:" + e;
                        if (!n) {
                            var c = a.split("/")[0]; (c.match(/.+(\.|:).+/) || "localhost" === c) && (i = "http://")
                        }
                        return i + this.ensureEncodedUri(a) + (void 0 === s ? "": "?" + this.ensureEncodedQuery(s)) + (void 0 === l ? "": "#" + l)
                    },
                    doFormCancel: function() {
                        this.base.restoreSelection(),
                        this.base.checkSelection()
                    },
                    attachFormEvents: function(e) {
                        var t = e.querySelector(".medium-editor-toolbar-close"),
                        n = e.querySelector(".medium-editor-toolbar-save"),
                        i = e.querySelector(".medium-editor-toolbar-input");
                        this.on(e, "click", this.handleFormClick.bind(this)),
                        this.on(i, "keyup", this.handleTextboxKeyup.bind(this)),
                        this.on(t, "click", this.handleCloseClick.bind(this)),
                        this.on(n, "click", this.handleSaveClick.bind(this), !0)
                    },
                    createForm: function() {
                        var e = this.document,
                        t = e.createElement("div");
                        return t.className = "medium-editor-toolbar-form",
                        t.id = "medium-editor-toolbar-form-anchor-" + this.getEditorId(),
                        t.innerHTML = this.getTemplate(),
                        this.attachFormEvents(t),
                        t
                    },
                    getInput: function() {
                        return this.getForm().querySelector("input.medium-editor-toolbar-input")
                    },
                    getAnchorTargetCheckbox: function() {
                        return this.getForm().querySelector(".medium-editor-toolbar-anchor-target")
                    },
                    getAnchorButtonCheckbox: function() {
                        return this.getForm().querySelector(".medium-editor-toolbar-anchor-button")
                    },
                    handleTextboxKeyup: function(t) {
                        if (t.keyCode === e.util.keyCode.ENTER) return t.preventDefault(),
                        void this.doFormSave();
                        t.keyCode === e.util.keyCode.ESCAPE && (t.preventDefault(), this.doFormCancel())
                    },
                    handleFormClick: function(e) {
                        e.stopPropagation()
                    },
                    handleSaveClick: function(e) {
                        e.preventDefault(),
                        this.doFormSave()
                    },
                    handleCloseClick: function(e) {
                        e.preventDefault(),
                        this.doFormCancel()
                    }
                });
                e.extensions.anchor = t
            } (),
            function() {
                var t = e.Extension.extend({
                    name: "anchor-preview",
                    hideDelay: 500,
                    previewValueSelector: "a",
                    showWhenToolbarIsVisible: !1,
                    showOnEmptyLinks: !0,
                    init: function() {
                        this.anchorPreview = this.createPreview(),
                        this.getEditorOption("elementsContainer").appendChild(this.anchorPreview),
                        this.attachToEditables()
                    },
                    getInteractionElements: function() {
                        return this.getPreviewElement()
                    },
                    getPreviewElement: function() {
                        return this.anchorPreview
                    },
                    createPreview: function() {
                        var e = this.document.createElement("div");
                        return e.id = "medium-editor-anchor-preview-" + this.getEditorId(),
                        e.className = "medium-editor-anchor-preview",
                        e.innerHTML = this.getTemplate(),
                        this.on(e, "click", this.handleClick.bind(this)),
                        e
                    },
                    getTemplate: function() {
                        return '<div class="medium-editor-toolbar-anchor-preview" id="medium-editor-toolbar-anchor-preview">    <a class="medium-editor-toolbar-anchor-preview-inner"></a></div>'
                    },
                    destroy: function() {
                        this.anchorPreview && (this.anchorPreview.parentNode && this.anchorPreview.parentNode.removeChild(this.anchorPreview), delete this.anchorPreview)
                    },
                    hidePreview: function() {
                        this.anchorPreview && this.anchorPreview.classList.remove("medium-editor-anchor-preview-active"),
                        this.activeAnchor = null
                    },
                    showPreview: function(e) {
                        return ! (!this.anchorPreview.classList.contains("medium-editor-anchor-preview-active") && !e.getAttribute("data-disable-preview")) || (this.previewValueSelector && (this.anchorPreview.querySelector(this.previewValueSelector).textContent = e.attributes.href.value, this.anchorPreview.querySelector(this.previewValueSelector).href = e.attributes.href.value), this.anchorPreview.classList.add("medium-toolbar-arrow-over"), this.anchorPreview.classList.remove("medium-toolbar-arrow-under"), this.anchorPreview.classList.contains("medium-editor-anchor-preview-active") || this.anchorPreview.classList.add("medium-editor-anchor-preview-active"), this.activeAnchor = e, this.positionPreview(), this.attachPreviewHandlers(), this)
                    },
                    positionPreview: function(e) {
                        e = e || this.activeAnchor;
                        var t, n, i, o, r, a = this.window.innerWidth,
                        s = this.anchorPreview.offsetHeight,
                        l = e.getBoundingClientRect(),
                        c = this.diffLeft,
                        d = this.diffTop,
                        u = this.getEditorOption("elementsContainer"),
                        h = ["absolute", "fixed"].indexOf(window.getComputedStyle(u).getPropertyValue("position")) > -1,
                        f = {};
                        t = this.anchorPreview.offsetWidth / 2;
                        var m = this.base.getExtensionByName("toolbar");
                        m && (c = m.diffLeft, d = m.diffTop),
                        n = c - t,
                        h ? (o = u.getBoundingClientRect(), ["top", "left"].forEach(function(e) {
                            f[e] = l[e] - o[e]
                        }), f.width = l.width, f.height = l.height, l = f, a = o.width, r = u.scrollTop) : r = this.window.pageYOffset,
                        i = l.left + l.width / 2,
                        r += s + l.top + l.height - d - this.anchorPreview.offsetHeight,
                        this.anchorPreview.style.top = Math.round(r) + "px",
                        this.anchorPreview.style.right = "initial",
                        i < t ? (this.anchorPreview.style.left = n + t + "px", this.anchorPreview.style.right = "initial") : a - i < t ? (this.anchorPreview.style.left = "auto", this.anchorPreview.style.right = 0) : (this.anchorPreview.style.left = n + i + "px", this.anchorPreview.style.right = "initial")
                    },
                    attachToEditables: function() {
                        this.subscribe("editableMouseover", this.handleEditableMouseover.bind(this)),
                        this.subscribe("positionedToolbar", this.handlePositionedToolbar.bind(this))
                    },
                    handlePositionedToolbar: function() {
                        this.showWhenToolbarIsVisible || this.hidePreview()
                    },
                    handleClick: function(e) {
                        var t = this.base.getExtensionByName("anchor"),
                        n = this.activeAnchor;
                        t && n && (e.preventDefault(), this.base.selectElement(this.activeAnchor), this.base.delay(function() {
                            if (n) {
                                var e = {
                                    value: n.attributes.href.value,
                                    target: n.getAttribute("target"),
                                    buttonClass: n.getAttribute("class")
                                };
                                t.showForm(e),
                                n = null
                            }
                        }.bind(this))),
                        this.hidePreview()
                    },
                    handleAnchorMouseout: function() {
                        this.anchorToPreview = null,
                        this.off(this.activeAnchor, "mouseout", this.instanceHandleAnchorMouseout),
                        this.instanceHandleAnchorMouseout = null
                    },
                    handleEditableMouseover: function(t) {
                        var n = e.util.getClosestTag(t.target, "a");
                        if (!1 !== n) {
                            if (!this.showOnEmptyLinks && (!/href=["']\S+["']/.test(n.outerHTML) || /href=["']#\S+["']/.test(n.outerHTML))) return ! 0;
                            var i = this.base.getExtensionByName("toolbar");
                            if (!this.showWhenToolbarIsVisible && i && i.isDisplayed && i.isDisplayed()) return ! 0;
                            this.activeAnchor && this.activeAnchor !== n && this.detachPreviewHandlers(),
                            this.anchorToPreview = n,
                            this.instanceHandleAnchorMouseout = this.handleAnchorMouseout.bind(this),
                            this.on(this.anchorToPreview, "mouseout", this.instanceHandleAnchorMouseout),
                            this.base.delay(function() {
                                this.anchorToPreview && this.showPreview(this.anchorToPreview)
                            }.bind(this))
                        }
                    },
                    handlePreviewMouseover: function() {
                        this.lastOver = (new Date).getTime(),
                        this.hovering = !0
                    },
                    handlePreviewMouseout: function(e) {
                        e.relatedTarget && /anchor-preview/.test(e.relatedTarget.className) || (this.hovering = !1)
                    },
                    updatePreview: function() {
                        if (this.hovering) return ! 0; (new Date).getTime() - this.lastOver > this.hideDelay && this.detachPreviewHandlers()
                    },
                    detachPreviewHandlers: function() {
                        clearInterval(this.intervalTimer),
                        this.instanceHandlePreviewMouseover && (this.off(this.anchorPreview, "mouseover", this.instanceHandlePreviewMouseover), this.off(this.anchorPreview, "mouseout", this.instanceHandlePreviewMouseout), this.activeAnchor && (this.off(this.activeAnchor, "mouseover", this.instanceHandlePreviewMouseover), this.off(this.activeAnchor, "mouseout", this.instanceHandlePreviewMouseout))),
                        this.hidePreview(),
                        this.hovering = this.instanceHandlePreviewMouseover = this.instanceHandlePreviewMouseout = null
                    },
                    attachPreviewHandlers: function() {
                        this.lastOver = (new Date).getTime(),
                        this.hovering = !0,
                        this.instanceHandlePreviewMouseover = this.handlePreviewMouseover.bind(this),
                        this.instanceHandlePreviewMouseout = this.handlePreviewMouseout.bind(this),
                        this.intervalTimer = setInterval(this.updatePreview.bind(this), 200),
                        this.on(this.anchorPreview, "mouseover", this.instanceHandlePreviewMouseover),
                        this.on(this.anchorPreview, "mouseout", this.instanceHandlePreviewMouseout),
                        this.on(this.activeAnchor, "mouseover", this.instanceHandlePreviewMouseover),
                        this.on(this.activeAnchor, "mouseout", this.instanceHandlePreviewMouseout)
                    }
                });
                e.extensions.anchorPreview = t
            } (),
            function() {
                function t(t) {
                    return ! e.util.getClosestTag(t, "a")
                }
                var n, i, o, r, a;
                n = [" ", "\t", "\n", "\r", " ", " ", " ", " ", " ", "\u2028", "\u2029"],
                i = "com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw",
                o = "(((?:(https?://|ftps?://|nntp://)|www\\d{0,3}[.]|[a-z0-9.\\-]+[.](" + i + ")\\/)\\S+(?:[^\\s`!\\[\\]{};:'\".,?«»“”‘’])))|(([a-z0-9\\-]+\\.)?[a-z0-9\\-]+\\.(" + i + "))",
                r = new RegExp("^(" + i + ")$", "i"),
                a = new RegExp(o, "gi");
                var s = e.Extension.extend({
                    init: function() {
                        e.Extension.prototype.init.apply(this, arguments),
                        this.disableEventHandling = !1,
                        this.subscribe("editableKeypress", this.onKeypress.bind(this)),
                        this.subscribe("editableBlur", this.onBlur.bind(this)),
                        this.document.execCommand("AutoUrlDetect", !1, !1)
                    },
                    isLastInstance: function() {
                        for (var e = 0,
                        t = 0; t < this.window._mediumEditors.length; t++) {
                            var n = this.window._mediumEditors[t];
                            null !== n && void 0 !== n.getExtensionByName("autoLink") && e++
                        }
                        return 1 === e
                    },
                    destroy: function() {
                        this.document.queryCommandSupported("AutoUrlDetect") && this.isLastInstance() && this.document.execCommand("AutoUrlDetect", !1, !0)
                    },
                    onBlur: function(e, t) {
                        this.performLinking(t)
                    },
                    onKeypress: function(t) {
                        this.disableEventHandling || e.util.isKey(t, [e.util.keyCode.SPACE, e.util.keyCode.ENTER]) && (clearTimeout(this.performLinkingTimeout), this.performLinkingTimeout = setTimeout(function() {
                            try {
                                var e = this.base.exportSelection();
                                this.performLinking(t.target) && this.base.importSelection(e, !0)
                            } catch(e) {
                                window.console && window.console.error("Failed to perform linking", e),
                                this.disableEventHandling = !0
                            }
                        }.bind(this), 0))
                    },
                    performLinking: function(t) {
                        var n = e.util.splitByBlockElements(t),
                        i = !1;
                        0 === n.length && (n = [t]);
                        for (var o = 0; o < n.length; o++) i = this.removeObsoleteAutoLinkSpans(n[o]) || i,
                        i = this.performLinkingWithinElement(n[o]) || i;
                        return this.base.events.updateInput(t, {
                            target: t,
                            currentTarget: t
                        }),
                        i
                    },
                    removeObsoleteAutoLinkSpans: function(n) {
                        if (!n || 3 === n.nodeType) return ! 1;
                        for (var i = n.querySelectorAll('span[data-auto-link="true"]'), o = !1, r = 0; r < i.length; r++) {
                            var a = i[r].textContent;
                            if ( - 1 === a.indexOf("://") && (a = e.util.ensureUrlHasProtocol(a)), i[r].getAttribute("data-href") !== a && t(i[r])) {
                                o = !0;
                                var s = a.replace(/\s+$/, "");
                                if (i[r].getAttribute("data-href") === s) {
                                    var l = a.length - s.length,
                                    c = e.util.splitOffDOMTree(i[r], this.splitTextBeforeEnd(i[r], l));
                                    i[r].parentNode.insertBefore(c, i[r].nextSibling)
                                } else e.util.unwrap(i[r], this.document)
                            }
                        }
                        return o
                    },
                    splitTextBeforeEnd: function(e, t) {
                        for (var n = this.document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null, !1), i = !0; i;) i = null !== n.lastChild();
                        for (var o, r, a; t > 0 && null !== a;) o = n.currentNode,
                        r = o.nodeValue,
                        r.length > t ? (a = o.splitText(r.length - t), t = 0) : (a = n.previousNode(), t -= r.length);
                        return a
                    },
                    performLinkingWithinElement: function(t) {
                        for (var n = this.findLinkableText(t), i = 0; i < n.length; i++) {
                            var o = e.util.findOrCreateMatchingTextNodes(this.document, t, n[i]);
                            this.shouldNotLink(o) || this.createAutoLink(o, n[i].href)
                        }
                        return ! 1
                    },
                    shouldNotLink: function(t) {
                        for (var n = !1,
                        i = 0; i < t.length && !1 === n; i++) n = !!e.util.traverseUp(t[i],
                        function(e) {
                            return "a" === e.nodeName.toLowerCase() || e.getAttribute && "true" === e.getAttribute("data-auto-link")
                        });
                        return n
                    },
                    findLinkableText: function(e) {
                        for (var t = e.textContent,
                        i = null,
                        o = []; null !== (i = a.exec(t));) {
                            var s = !0,
                            l = i.index + i[0].length;
                            s = !(0 !== i.index && -1 === n.indexOf(t[i.index - 1]) || l !== t.length && -1 === n.indexOf(t[l])),
                            s = s && ( - 1 !== i[0].indexOf("/") || r.test(i[0].split(".").pop().split("?").shift())),
                            s && o.push({
                                href: i[0],
                                start: i.index,
                                end: l
                            })
                        }
                        return o
                    },
                    createAutoLink: function(t, n) {
                        n = e.util.ensureUrlHasProtocol(n);
                        var i = e.util.createLink(this.document, t, n, this.getEditorOption("targetBlank") ? "_blank": null),
                        o = this.document.createElement("span");
                        for (o.setAttribute("data-auto-link", "true"), o.setAttribute("data-href", n), i.insertBefore(o, i.firstChild); i.childNodes.length > 1;) o.appendChild(i.childNodes[1])
                    }
                });
                e.extensions.autoLink = s
            } (),
            function() {
                function t(t) {
                    var i = e.util.getContainerEditorElement(t);
                    Array.prototype.slice.call(i.parentElement.querySelectorAll("." + n)).forEach(function(e) {
                        e.classList.remove(n)
                    })
                }
                var n = "medium-editor-dragover",
                i = e.Extension.extend({
                    name: "fileDragging",
                    allowedTypes: ["image"],
                    init: function() {
                        e.Extension.prototype.init.apply(this, arguments),
                        this.subscribe("editableDrag", this.handleDrag.bind(this)),
                        this.subscribe("editableDrop", this.handleDrop.bind(this))
                    },
                    handleDrag: function(e) {
                        e.preventDefault(),
                        e.dataTransfer.dropEffect = "copy";
                        var i = e.target.classList ? e.target: e.target.parentElement;
                        t(i),
                        "dragover" === e.type && i.classList.add(n)
                    },
                    handleDrop: function(e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        this.base.selectElement(e.target);
                        var n = this.base.exportSelection();
                        n.start = n.end,
                        this.base.importSelection(n),
                        e.dataTransfer.files && Array.prototype.slice.call(e.dataTransfer.files).forEach(function(e) {
                            this.isAllowedFile(e) && e.type.match("image") && this.insertImageFile(e)
                        },
                        this),
                        t(e.target)
                    },
                    isAllowedFile: function(e) {
                        return this.allowedTypes.some(function(t) {
                            return !! e.type.match(t)
                        })
                    },
                    insertImageFile: function(t) {
                        if ("function" == typeof FileReader) {
                            var n = new FileReader;
                            n.readAsDataURL(t),
                            n.addEventListener("load",
                            function(t) {
                                var n = this.document.createElement("img");
                                n.src = t.target.result,
                                e.util.insertHTMLCommand(this.document, n.outerHTML)
                            }.bind(this))
                        }
                    }
                });
                e.extensions.fileDragging = i
            } (),
            function() {
                var t = e.Extension.extend({
                    name: "keyboard-commands",
                    commands: [{
                        command: "bold",
                        key: "B",
                        meta: !0,
                        shift: !1,
                        alt: !1
                    },
                    {
                        command: "italic",
                        key: "I",
                        meta: !0,
                        shift: !1,
                        alt: !1
                    },
                    {
                        command: "underline",
                        key: "U",
                        meta: !0,
                        shift: !1,
                        alt: !1
                    }],
                    init: function() {
                        e.Extension.prototype.init.apply(this, arguments),
                        this.subscribe("editableKeydown", this.handleKeydown.bind(this)),
                        this.keys = {},
                        this.commands.forEach(function(e) {
                            var t = e.key.charCodeAt(0);
                            this.keys[t] || (this.keys[t] = []),
                            this.keys[t].push(e)
                        },
                        this)
                    },
                    handleKeydown: function(t) {
                        var n = e.util.getKeyCode(t);
                        if (this.keys[n]) {
                            var i = e.util.isMetaCtrlKey(t),
                            o = !!t.shiftKey,
                            r = !!t.altKey;
                            this.keys[n].forEach(function(e) {
                                e.meta !== i || e.shift !== o || e.alt !== r && void 0 !== e.alt || (t.preventDefault(), t.stopPropagation(), "function" == typeof e.command ? e.command.apply(this) : !1 !== e.command && this.execAction(e.command))
                            },
                            this)
                        }
                    }
                });
                e.extensions.keyboardCommands = t
            } (),
            function() {
                var t = e.extensions.form.extend({
                    name: "fontname",
                    action: "fontName",
                    aria: "change font name",
                    contentDefault: "&#xB1;",
                    contentFA: '<i class="fa fa-font"></i>',
                    fonts: ["", "Arial", "Verdana", "Times New Roman"],
                    init: function() {
                        e.extensions.form.prototype.init.apply(this, arguments)
                    },
                    handleClick: function(e) {
                        if (e.preventDefault(), e.stopPropagation(), !this.isDisplayed()) {
                            var t = this.document.queryCommandValue("fontName") + "";
                            this.showForm(t)
                        }
                        return ! 1
                    },
                    getForm: function() {
                        return this.form || (this.form = this.createForm()),
                        this.form
                    },
                    isDisplayed: function() {
                        return "block" === this.getForm().style.display
                    },
                    hideForm: function() {
                        this.getForm().style.display = "none",
                        this.getSelect().value = ""
                    },
                    showForm: function(e) {
                        var t = this.getSelect();
                        this.base.saveSelection(),
                        this.hideToolbarDefaultActions(),
                        this.getForm().style.display = "block",
                        this.setToolbarPosition(),
                        t.value = e || "",
                        t.focus()
                    },
                    destroy: function() {
                        if (!this.form) return ! 1;
                        this.form.parentNode && this.form.parentNode.removeChild(this.form),
                        delete this.form
                    },
                    doFormSave: function() {
                        this.base.restoreSelection(),
                        this.base.checkSelection()
                    },
                    doFormCancel: function() {
                        this.base.restoreSelection(),
                        this.clearFontName(),
                        this.base.checkSelection()
                    },
                    createForm: function() {
                        var e, t = this.document,
                        n = t.createElement("div"),
                        i = t.createElement("select"),
                        o = t.createElement("a"),
                        r = t.createElement("a");
                        n.className = "medium-editor-toolbar-form",
                        n.id = "medium-editor-toolbar-form-fontname-" + this.getEditorId(),
                        this.on(n, "click", this.handleFormClick.bind(this));
                        for (var a = 0; a < this.fonts.length; a++) e = t.createElement("option"),
                        e.innerHTML = this.fonts[a],
                        e.value = this.fonts[a],
                        i.appendChild(e);
                        return i.className = "medium-editor-toolbar-select",
                        n.appendChild(i),
                        this.on(i, "change", this.handleFontChange.bind(this)),
                        r.setAttribute("href", "#"),
                        r.className = "medium-editor-toobar-save",
                        r.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-check"></i>': "&#10003;",
                        n.appendChild(r),
                        this.on(r, "click", this.handleSaveClick.bind(this), !0),
                        o.setAttribute("href", "#"),
                        o.className = "medium-editor-toobar-close",
                        o.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-times"></i>': "&times;",
                        n.appendChild(o),
                        this.on(o, "click", this.handleCloseClick.bind(this)),
                        n
                    },
                    getSelect: function() {
                        return this.getForm().querySelector("select.medium-editor-toolbar-select")
                    },
                    clearFontName: function() {
                        e.selection.getSelectedElements(this.document).forEach(function(e) {
                            "font" === e.nodeName.toLowerCase() && e.hasAttribute("face") && e.removeAttribute("face")
                        })
                    },
                    handleFontChange: function() {
                        var e = this.getSelect().value;
                        "" === e ? this.clearFontName() : this.execAction("fontName", {
                            value: e
                        })
                    },
                    handleFormClick: function(e) {
                        e.stopPropagation()
                    },
                    handleSaveClick: function(e) {
                        e.preventDefault(),
                        this.doFormSave()
                    },
                    handleCloseClick: function(e) {
                        e.preventDefault(),
                        this.doFormCancel()
                    }
                });
                e.extensions.fontName = t
            } (),
            function() {
                var t = e.extensions.form.extend({
                    name: "fontsize",
                    action: "fontSize",
                    aria: "increase/decrease font size",
                    contentDefault: "&#xB1;",
                    contentFA: '<i class="fa fa-text-height"></i>',
                    init: function() {
                        e.extensions.form.prototype.init.apply(this, arguments)
                    },
                    handleClick: function(e) {
                        if (e.preventDefault(), e.stopPropagation(), !this.isDisplayed()) {
                            var t = this.document.queryCommandValue("fontSize") + "";
                            this.showForm(t)
                        }
                        return ! 1
                    },
                    getForm: function() {
                        return this.form || (this.form = this.createForm()),
                        this.form
                    },
                    isDisplayed: function() {
                        return "block" === this.getForm().style.display
                    },
                    hideForm: function() {
                        this.getForm().style.display = "none",
                        this.getInput().value = ""
                    },
                    showForm: function(e) {
                        var t = this.getInput();
                        this.base.saveSelection(),
                        this.hideToolbarDefaultActions(),
                        this.getForm().style.display = "block",
                        this.setToolbarPosition(),
                        t.value = e || "",
                        t.focus()
                    },
                    destroy: function() {
                        if (!this.form) return ! 1;
                        this.form.parentNode && this.form.parentNode.removeChild(this.form),
                        delete this.form
                    },
                    doFormSave: function() {
                        this.base.restoreSelection(),
                        this.base.checkSelection()
                    },
                    doFormCancel: function() {
                        this.base.restoreSelection(),
                        this.clearFontSize(),
                        this.base.checkSelection()
                    },
                    createForm: function() {
                        var e = this.document,
                        t = e.createElement("div"),
                        n = e.createElement("input"),
                        i = e.createElement("a"),
                        o = e.createElement("a");
                        return t.className = "medium-editor-toolbar-form",
                        t.id = "medium-editor-toolbar-form-fontsize-" + this.getEditorId(),
                        this.on(t, "click", this.handleFormClick.bind(this)),
                        n.setAttribute("type", "range"),
                        n.setAttribute("min", "1"),
                        n.setAttribute("max", "7"),
                        n.className = "medium-editor-toolbar-input",
                        t.appendChild(n),
                        this.on(n, "change", this.handleSliderChange.bind(this)),
                        o.setAttribute("href", "#"),
                        o.className = "medium-editor-toobar-save",
                        o.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-check"></i>': "&#10003;",
                        t.appendChild(o),
                        this.on(o, "click", this.handleSaveClick.bind(this), !0),
                        i.setAttribute("href", "#"),
                        i.className = "medium-editor-toobar-close",
                        i.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-times"></i>': "&times;",
                        t.appendChild(i),
                        this.on(i, "click", this.handleCloseClick.bind(this)),
                        t
                    },
                    getInput: function() {
                        return this.getForm().querySelector("input.medium-editor-toolbar-input")
                    },
                    clearFontSize: function() {
                        e.selection.getSelectedElements(this.document).forEach(function(e) {
                            "font" === e.nodeName.toLowerCase() && e.hasAttribute("size") && e.removeAttribute("size")
                        })
                    },
                    handleSliderChange: function() {
                        var e = this.getInput().value;
                        "4" === e ? this.clearFontSize() : this.execAction("fontSize", {
                            value: e
                        })
                    },
                    handleFormClick: function(e) {
                        e.stopPropagation()
                    },
                    handleSaveClick: function(e) {
                        e.preventDefault(),
                        this.doFormSave()
                    },
                    handleCloseClick: function(e) {
                        e.preventDefault(),
                        this.doFormCancel()
                    }
                });
                e.extensions.fontSize = t
            } (),
            function() {
                function t() {
                    return [[new RegExp(/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/g), ""], [new RegExp(/<!--StartFragment-->|<!--EndFragment-->/g), ""], [new RegExp(/<br>$/i), ""], [new RegExp(/<[^>]*docs-internal-guid[^>]*>/gi), ""], [new RegExp(/<\/b>(<br[^>]*>)?$/gi), ""], [new RegExp(/<span class="Apple-converted-space">\s+<\/span>/g), " "], [new RegExp(/<br class="Apple-interchange-newline">/g), "<br>"], [new RegExp(/<span[^>]*(font-style:italic;font-weight:(bold|700)|font-weight:(bold|700);font-style:italic)[^>]*>/gi), '<span class="replace-with italic bold">'], [new RegExp(/<span[^>]*font-style:italic[^>]*>/gi), '<span class="replace-with italic">'], [new RegExp(/<span[^>]*font-weight:(bold|700)[^>]*>/gi), '<span class="replace-with bold">'], [new RegExp(/&lt;(\/?)(i|b|a)&gt;/gi), "<$1$2>"], [new RegExp(/&lt;a(?:(?!href).)+href=(?:&quot;|&rdquo;|&ldquo;|"|“|”)(((?!&quot;|&rdquo;|&ldquo;|"|“|”).)*)(?:&quot;|&rdquo;|&ldquo;|"|“|”)(?:(?!&gt;).)*&gt;/gi), '<a href="$1">'], [new RegExp(/<\/p>\n+/gi), "</p>"], [new RegExp(/\n+<p/gi), "<p"], [new RegExp(/<\/?o:[a-z]*>/gi), ""], [new RegExp(/<!\[if !supportLists\]>(((?!<!).)*)<!\[endif]\>/gi), "$1"]]
                }
                function n(e, t, n) {
                    var i = e.clipboardData || t.clipboardData || n.dataTransfer,
                    o = {};
                    if (!i) return o;
                    if (i.getData) {
                        var r = i.getData("Text");
                        r && r.length > 0 && (o["text/plain"] = r)
                    }
                    if (i.types) for (var a = 0; a < i.types.length; a++) {
                        var s = i.types[a];
                        o[s] = i.getData(s)
                    }
                    return o
                }
                var i = null,
                o = null,
                r = function(e) {
                    e.stopPropagation()
                },
                a = e.Extension.extend({
                    forcePlainText: !0,
                    cleanPastedHTML: !1,
                    preCleanReplacements: [],
                    cleanReplacements: [],
                    cleanAttrs: ["class", "style", "dir"],
                    cleanTags: ["meta"],
                    unwrapTags: [],
                    init: function() {
                        e.Extension.prototype.init.apply(this, arguments),
                        (this.forcePlainText || this.cleanPastedHTML) && (this.subscribe("editableKeydown", this.handleKeydown.bind(this)), this.getEditorElements().forEach(function(e) {
                            this.on(e, "paste", this.handlePaste.bind(this))
                        },
                        this), this.subscribe("addElement", this.handleAddElement.bind(this)))
                    },
                    handleAddElement: function(e, t) {
                        this.on(t, "paste", this.handlePaste.bind(this))
                    },
                    destroy: function() { (this.forcePlainText || this.cleanPastedHTML) && this.removePasteBin()
                    },
                    handlePaste: function(e, t) {
                        if (!e.defaultPrevented) {
                            var i = n(e, this.window, this.document),
                            o = i["text/html"],
                            r = i["text/plain"];
                            this.window.clipboardData && void 0 === e.clipboardData && !o && (o = r),
                            (o || r) && (e.preventDefault(), this.doPaste(o, r, t))
                        }
                    },
                    doPaste: function(t, n, i) {
                        var o, r, a = "";
                        if (this.cleanPastedHTML && t) return this.cleanPaste(t);
                        if (this.getEditorOption("disableReturn") || i && i.getAttribute("data-disable-return")) a = e.util.htmlEntities(n);
                        else if (o = n.split(/[\r\n]+/g), o.length > 1) for (r = 0; r < o.length; r += 1)"" !== o[r] && (a += "<p>" + e.util.htmlEntities(o[r]) + "</p>");
                        else a = e.util.htmlEntities(o[0]);
                        e.util.insertHTMLCommand(this.document, a)
                    },
                    handlePasteBinPaste: function(e) {
                        if (e.defaultPrevented) return void this.removePasteBin();
                        var t = n(e, this.window, this.document),
                        i = t["text/html"],
                        r = t["text/plain"],
                        a = o;
                        if (!this.cleanPastedHTML || i) return e.preventDefault(),
                        this.removePasteBin(),
                        this.doPaste(i, r, a),
                        void this.trigger("editablePaste", {
                            currentTarget: a,
                            target: a
                        },
                        a);
                        setTimeout(function() {
                            this.cleanPastedHTML && (i = this.getPasteBinHtml()),
                            this.removePasteBin(),
                            this.doPaste(i, r, a),
                            this.trigger("editablePaste", {
                                currentTarget: a,
                                target: a
                            },
                            a)
                        }.bind(this), 0)
                    },
                    handleKeydown: function(t, n) {
                        e.util.isKey(t, e.util.keyCode.V) && e.util.isMetaCtrlKey(t) && (t.stopImmediatePropagation(), this.removePasteBin(), this.createPasteBin(n))
                    },
                    createPasteBin: function(t) {
                        var n, a = e.selection.getSelectionRange(this.document),
                        s = this.window.pageYOffset;
                        o = t,
                        a && (n = a.getClientRects(), n.length ? s += n[0].top: s += a.startContainer.getBoundingClientRect().top),
                        i = a;
                        var l = this.document.createElement("div");
                        l.id = this.pasteBinId = "medium-editor-pastebin-" + +Date.now(),
                        l.setAttribute("style", "border: 1px red solid; position: absolute; top: " + s + "px; width: 10px; height: 10px; overflow: hidden; opacity: 0"),
                        l.setAttribute("contentEditable", !0),
                        l.innerHTML = "%ME_PASTEBIN%",
                        this.document.body.appendChild(l),
                        this.on(l, "focus", r),
                        this.on(l, "focusin", r),
                        this.on(l, "focusout", r),
                        l.focus(),
                        e.selection.selectNode(l, this.document),
                        this.boundHandlePaste || (this.boundHandlePaste = this.handlePasteBinPaste.bind(this)),
                        this.on(l, "paste", this.boundHandlePaste)
                    },
                    removePasteBin: function() {
                        null !== i && (e.selection.selectRange(this.document, i), i = null),
                        null !== o && (o = null);
                        var t = this.getPasteBin();
                        t && t && (this.off(t, "focus", r), this.off(t, "focusin", r), this.off(t, "focusout", r), this.off(t, "paste", this.boundHandlePaste), t.parentElement.removeChild(t))
                    },
                    getPasteBin: function() {
                        return this.document.getElementById(this.pasteBinId)
                    },
                    getPasteBinHtml: function() {
                        var e = this.getPasteBin();
                        if (!e) return ! 1;
                        if (e.firstChild && "mcepastebin" === e.firstChild.id) return ! 1;
                        var t = e.innerHTML;
                        return ! (!t || "%ME_PASTEBIN%" === t) && t
                    },
                    cleanPaste: function(e) {
                        var n, i, o, r, a = /<p|<br|<div/.test(e),
                        s = [].concat(this.preCleanReplacements || [], t(), this.cleanReplacements || []);
                        for (n = 0; n < s.length; n += 1) e = e.replace(s[n][0], s[n][1]);
                        if (!a) return this.pasteHTML(e);
                        for (o = this.document.createElement("div"), o.innerHTML = "<p>" + e.split("<br><br>").join("</p><p>") + "</p>", i = o.querySelectorAll("a,p,div,br"), n = 0; n < i.length; n += 1) switch (r = i[n], r.innerHTML = r.innerHTML.replace(/\n/gi, " "), r.nodeName.toLowerCase()) {
                        case "p":
                        case "div":
                            this.filterCommonBlocks(r);
                            break;
                        case "br":
                            this.filterLineBreak(r)
                        }
                        this.pasteHTML(o.innerHTML)
                    },
                    pasteHTML: function(t, n) {
                        n = e.util.defaults({},
                        n, {
                            cleanAttrs: this.cleanAttrs,
                            cleanTags: this.cleanTags,
                            unwrapTags: this.unwrapTags
                        });
                        var i, o, r, a, s = this.document.createDocumentFragment();
                        for (s.appendChild(this.document.createElement("body")), a = s.querySelector("body"), a.innerHTML = t, this.cleanupSpans(a), i = a.querySelectorAll("*"), r = 0; r < i.length; r += 1) o = i[r],
                        "a" === o.nodeName.toLowerCase() && this.getEditorOption("targetBlank") && e.util.setTargetBlank(o),
                        e.util.cleanupAttrs(o, n.cleanAttrs),
                        e.util.cleanupTags(o, n.cleanTags),
                        e.util.unwrapTags(o, n.unwrapTags);
                        e.util.insertHTMLCommand(this.document, a.innerHTML.replace(/&nbsp;/g, " "))
                    },
                    isCommonBlock: function(e) {
                        return e && ("p" === e.nodeName.toLowerCase() || "div" === e.nodeName.toLowerCase())
                    },
                    filterCommonBlocks: function(e) { / ^\s * $ / .test(e.textContent) && e.parentNode && e.parentNode.removeChild(e)
                    },
                    filterLineBreak: function(e) {
                        this.isCommonBlock(e.previousElementSibling) ? this.removeWithParent(e) : !this.isCommonBlock(e.parentNode) || e.parentNode.firstChild !== e && e.parentNode.lastChild !== e ? e.parentNode && 1 === e.parentNode.childElementCount && "" === e.parentNode.textContent && this.removeWithParent(e) : this.removeWithParent(e)
                    },
                    removeWithParent: function(e) {
                        e && e.parentNode && (e.parentNode.parentNode && 1 === e.parentNode.childElementCount ? e.parentNode.parentNode.removeChild(e.parentNode) : e.parentNode.removeChild(e))
                    },
                    cleanupSpans: function(t) {
                        var n, i, o, r = t.querySelectorAll(".replace-with"),
                        a = function(e) {
                            return e && "#text" !== e.nodeName && "false" === e.getAttribute("contenteditable")
                        };
                        for (n = 0; n < r.length; n += 1) i = r[n],
                        o = this.document.createElement(i.classList.contains("bold") ? "b": "i"),
                        i.classList.contains("bold") && i.classList.contains("italic") ? o.innerHTML = "<i>" + i.innerHTML + "</i>": o.innerHTML = i.innerHTML,
                        i.parentNode.replaceChild(o, i);
                        for (r = t.querySelectorAll("span"), n = 0; n < r.length; n += 1) {
                            if (i = r[n], e.util.traverseUp(i, a)) return ! 1;
                            e.util.unwrap(i, this.document)
                        }
                    }
                });
                e.extensions.paste = a
            } (),
            function() {
                var t = e.Extension.extend({
                    name: "placeholder",
                    text: "Type your text",
                    hideOnClick: !0,
                    init: function() {
                        e.Extension.prototype.init.apply(this, arguments),
                        this.initPlaceholders(),
                        this.attachEventHandlers()
                    },
                    initPlaceholders: function() {
                        this.getEditorElements().forEach(this.initElement, this)
                    },
                    handleAddElement: function(e, t) {
                        this.initElement(t)
                    },
                    initElement: function(e) {
                        e.getAttribute("data-placeholder") || e.setAttribute("data-placeholder", this.text),
                        this.updatePlaceholder(e)
                    },
                    destroy: function() {
                        this.getEditorElements().forEach(this.cleanupElement, this)
                    },
                    handleRemoveElement: function(e, t) {
                        this.cleanupElement(t)
                    },
                    cleanupElement: function(e) {
                        e.getAttribute("data-placeholder") === this.text && e.removeAttribute("data-placeholder")
                    },
                    showPlaceholder: function(t) {
                        t && (e.util.isFF && 0 === t.childNodes.length ? (t.classList.add("medium-editor-placeholder-relative"), t.classList.remove("medium-editor-placeholder")) : (t.classList.add("medium-editor-placeholder"), t.classList.remove("medium-editor-placeholder-relative")))
                    },
                    hidePlaceholder: function(e) {
                        e && (e.classList.remove("medium-editor-placeholder"), e.classList.remove("medium-editor-placeholder-relative"))
                    },
                    updatePlaceholder: function(e, t) {
                        if (e.querySelector("img, blockquote, ul, ol, table") || "" !== e.textContent.replace(/^\s+|\s+$/g, "")) return this.hidePlaceholder(e);
                        t || this.showPlaceholder(e)
                    },
                    attachEventHandlers: function() {
                        this.hideOnClick && this.subscribe("focus", this.handleFocus.bind(this)),
                        this.subscribe("editableInput", this.handleInput.bind(this)),
                        this.subscribe("blur", this.handleBlur.bind(this)),
                        this.subscribe("addElement", this.handleAddElement.bind(this)),
                        this.subscribe("removeElement", this.handleRemoveElement.bind(this))
                    },
                    handleInput: function(e, t) {
                        var n = this.hideOnClick && t === this.base.getFocusedElement();
                        this.updatePlaceholder(t, n)
                    },
                    handleFocus: function(e, t) {
                        this.hidePlaceholder(t)
                    },
                    handleBlur: function(e, t) {
                        this.updatePlaceholder(t)
                    }
                });
                e.extensions.placeholder = t
            } (),
            function() {
                var t = e.Extension.extend({
                    name: "toolbar",
                    align: "center",
                    allowMultiParagraphSelection: !0,
                    buttons: ["bold", "italic", "underline", "anchor", "h2", "h3", "quote"],
                    diffLeft: 0,
                    diffTop: -10,
                    firstButtonClass: "medium-editor-button-first",
                    lastButtonClass: "medium-editor-button-last",
                    standardizeSelectionStart: !1,
                    static: !1,
                    sticky: !1,
                    stickyTopOffset: 0,
                    updateOnEmptySelection: !1,
                    relativeContainer: null,
                    init: function() {
                        e.Extension.prototype.init.apply(this, arguments),
                        this.initThrottledMethods(),
                        this.relativeContainer ? this.relativeContainer.appendChild(this.getToolbarElement()) : this.getEditorOption("elementsContainer").appendChild(this.getToolbarElement())
                    },
                    forEachExtension: function(e, t) {
                        return this.base.extensions.forEach(function(n) {
                            if (n !== this) return e.apply(t || this, arguments)
                        },
                        this)
                    },
                    createToolbar: function() {
                        var e = this.document.createElement("div");
                        return e.id = "medium-editor-toolbar-" + this.getEditorId(),
                        e.className = "medium-editor-toolbar",
                        this.static ? e.className += " static-toolbar": this.relativeContainer ? e.className += " medium-editor-relative-toolbar": e.className += " medium-editor-stalker-toolbar",
                        e.appendChild(this.createToolbarButtons()),
                        this.forEachExtension(function(t) {
                            t.hasForm && e.appendChild(t.getForm())
                        }),
                        this.attachEventHandlers(),
                        e
                    },
                    createToolbarButtons: function() {
                        var t, n, i, o, r, a, s = this.document.createElement("ul");
                        return s.id = "medium-editor-toolbar-actions" + this.getEditorId(),
                        s.className = "medium-editor-toolbar-actions",
                        s.style.display = "block",
                        this.buttons.forEach(function(i) {
                            "string" == typeof i ? (r = i, a = null) : (r = i.name, a = i),
                            (o = this.base.addBuiltInExtension(r, a)) && "function" == typeof o.getButton && (n = o.getButton(this.base), t = this.document.createElement("li"), e.util.isElement(n) ? t.appendChild(n) : t.innerHTML = n, s.appendChild(t))
                        },
                        this),
                        i = s.querySelectorAll("button"),
                        i.length > 0 && (i[0].classList.add(this.firstButtonClass), i[i.length - 1].classList.add(this.lastButtonClass)),
                        s
                    },
                    destroy: function() {
                        this.toolbar && (this.toolbar.parentNode && this.toolbar.parentNode.removeChild(this.toolbar), delete this.toolbar)
                    },
                    getInteractionElements: function() {
                        return this.getToolbarElement()
                    },
                    getToolbarElement: function() {
                        return this.toolbar || (this.toolbar = this.createToolbar()),
                        this.toolbar
                    },
                    getToolbarActionsElement: function() {
                        return this.getToolbarElement().querySelector(".medium-editor-toolbar-actions")
                    },
                    initThrottledMethods: function() {
                        this.throttledPositionToolbar = e.util.throttle(function() {
                            this.base.isActive && this.positionToolbarIfShown()
                        }.bind(this))
                    },
                    attachEventHandlers: function() {
                        this.subscribe("blur", this.handleBlur.bind(this)),
                        this.subscribe("focus", this.handleFocus.bind(this)),
                        this.subscribe("editableClick", this.handleEditableClick.bind(this)),
                        this.subscribe("editableKeyup", this.handleEditableKeyup.bind(this)),
                        this.on(this.document.documentElement, "mouseup", this.handleDocumentMouseup.bind(this)),
                        this.static && this.sticky && this.on(this.window, "scroll", this.handleWindowScroll.bind(this), !0),
                        this.on(this.window, "resize", this.handleWindowResize.bind(this))
                    },
                    handleWindowScroll: function() {
                        this.positionToolbarIfShown()
                    },
                    handleWindowResize: function() {
                        this.throttledPositionToolbar()
                    },
                    handleDocumentMouseup: function(t) {
                        if (t && t.target && e.util.isDescendant(this.getToolbarElement(), t.target)) return ! 1;
                        this.checkState()
                    },
                    handleEditableClick: function() {
                        setTimeout(function() {
                            this.checkState()
                        }.bind(this), 0)
                    },
                    handleEditableKeyup: function() {
                        this.checkState()
                    },
                    handleBlur: function() {
                        clearTimeout(this.hideTimeout),
                        clearTimeout(this.delayShowTimeout),
                        this.hideTimeout = setTimeout(function() {
                            this.hideToolbar()
                        }.bind(this), 1)
                    },
                    handleFocus: function() {
                        this.checkState()
                    },
                    isDisplayed: function() {
                        return this.getToolbarElement().classList.contains("medium-editor-toolbar-active")
                    },
                    showToolbar: function() {
                        clearTimeout(this.hideTimeout),
                        this.isDisplayed() || (this.getToolbarElement().classList.add("medium-editor-toolbar-active"), this.trigger("showToolbar", {},
                        this.base.getFocusedElement()))
                    },
                    hideToolbar: function() {
                        this.isDisplayed() && (this.getToolbarElement().classList.remove("medium-editor-toolbar-active"), this.trigger("hideToolbar", {},
                        this.base.getFocusedElement()))
                    },
                    isToolbarDefaultActionsDisplayed: function() {
                        return "block" === this.getToolbarActionsElement().style.display
                    },
                    hideToolbarDefaultActions: function() {
                        this.isToolbarDefaultActionsDisplayed() && (this.getToolbarActionsElement().style.display = "none")
                    },
                    showToolbarDefaultActions: function() {
                        this.hideExtensionForms(),
                        this.isToolbarDefaultActionsDisplayed() || (this.getToolbarActionsElement().style.display = "block"),
                        this.delayShowTimeout = this.base.delay(function() {
                            this.showToolbar()
                        }.bind(this))
                    },
                    hideExtensionForms: function() {
                        this.forEachExtension(function(e) {
                            e.hasForm && e.isDisplayed() && e.hideForm()
                        })
                    },
                    multipleBlockElementsSelected: function() {
                        var t = /<[^\/>][^>]*><\/[^>]+>/gim,
                        n = new RegExp("<(" + e.util.blockContainerElementNames.join("|") + ")[^>]*>", "g"),
                        i = e.selection.getSelectionHtml(this.document).replace(t, ""),
                        o = i.match(n);
                        return !! o && o.length > 1
                    },
                    modifySelection: function() {
                        var t = this.window.getSelection(),
                        n = t.getRangeAt(0);
                        if (this.standardizeSelectionStart && n.startContainer.nodeValue && n.startOffset === n.startContainer.nodeValue.length) {
                            var i = e.util.findAdjacentTextNodeWithContent(e.selection.getSelectionElement(this.window), n.startContainer, this.document);
                            if (i) {
                                for (var o = 0; 0 === i.nodeValue.substr(o, 1).trim().length;) o += 1;
                                n = e.selection.select(this.document, i, o, n.endContainer, n.endOffset)
                            }
                        }
                    },
                    checkState: function() {
                        if (!this.base.preventSelectionUpdates) {
                            if (!this.base.getFocusedElement() || e.selection.selectionInContentEditableFalse(this.window)) return this.hideToolbar();
                            var t = e.selection.getSelectionElement(this.window);
                            return ! t || -1 === this.getEditorElements().indexOf(t) || t.getAttribute("data-disable-toolbar") ? this.hideToolbar() : this.updateOnEmptySelection && this.static ? this.showAndUpdateToolbar() : !e.selection.selectionContainsContent(this.document) || !1 === this.allowMultiParagraphSelection && this.multipleBlockElementsSelected() ? this.hideToolbar() : void this.showAndUpdateToolbar()
                        }
                    },
                    showAndUpdateToolbar: function() {
                        this.modifySelection(),
                        this.setToolbarButtonStates(),
                        this.trigger("positionToolbar", {},
                        this.base.getFocusedElement()),
                        this.showToolbarDefaultActions(),
                        this.setToolbarPosition()
                    },
                    setToolbarButtonStates: function() {
                        this.forEachExtension(function(e) {
                            "function" == typeof e.isActive && "function" == typeof e.setInactive && e.setInactive()
                        }),
                        this.checkActiveButtons()
                    },
                    checkActiveButtons: function() {
                        var t, n = [],
                        i = null,
                        o = e.selection.getSelectionRange(this.document),
                        r = function(e) {
                            "function" == typeof e.checkState ? e.checkState(t) : "function" == typeof e.isActive && "function" == typeof e.isAlreadyApplied && "function" == typeof e.setActive && !e.isActive() && e.isAlreadyApplied(t) && e.setActive()
                        };
                        if (o && (this.forEachExtension(function(e) {
                            if ("function" == typeof e.queryCommandState && null !== (i = e.queryCommandState())) return void(i && "function" == typeof e.setActive && e.setActive());
                            n.push(e)
                        }), t = e.selection.getSelectedParentElement(o), this.getEditorElements().some(function(n) {
                            return e.util.isDescendant(n, t, !0)
                        }))) for (; t && (n.forEach(r), !e.util.isMediumEditorElement(t));) t = t.parentNode
                    },
                    positionToolbarIfShown: function() {
                        this.isDisplayed() && this.setToolbarPosition()
                    },
                    setToolbarPosition: function() {
                        var e = this.base.getFocusedElement(),
                        t = this.window.getSelection();
                        if (!e) return this; ! this.static && t.isCollapsed || (this.showToolbar(), this.relativeContainer || (this.static ? this.positionStaticToolbar(e) : this.positionToolbar(t)), this.trigger("positionedToolbar", {},
                        this.base.getFocusedElement()))
                    },
                    positionStaticToolbar: function(e) {
                        this.getToolbarElement().style.left = "0";
                        var t, n = this.document.documentElement && this.document.documentElement.scrollTop || this.document.body.scrollTop,
                        i = this.window.innerWidth,
                        o = this.getToolbarElement(),
                        r = e.getBoundingClientRect(),
                        a = r.top + n,
                        s = r.left + r.width / 2,
                        l = o.offsetHeight,
                        c = o.offsetWidth,
                        d = c / 2;
                        switch (this.sticky ? n > a + e.offsetHeight - l - this.stickyTopOffset ? (o.style.top = a + e.offsetHeight - l + "px", o.classList.remove("medium-editor-sticky-toolbar")) : n > a - l - this.stickyTopOffset ? (o.classList.add("medium-editor-sticky-toolbar"), o.style.top = this.stickyTopOffset + "px") : (o.classList.remove("medium-editor-sticky-toolbar"), o.style.top = a - l + "px") : o.style.top = a - l + "px", this.align) {
                        case "left":
                            t = r.left;
                            break;
                        case "right":
                            t = r.right - c;
                            break;
                        case "center":
                            t = s - d
                        }
                        t < 0 ? t = 0 : t + c > i && (t = i - Math.ceil(c) - 1),
                        o.style.left = t + "px"
                    },
                    positionToolbar: function(e) {
                        this.getToolbarElement().style.left = "0",
                        this.getToolbarElement().style.right = "initial";
                        var t = e.getRangeAt(0),
                        n = t.getBoundingClientRect(); (!n || 0 === n.height && 0 === n.width && t.startContainer === t.endContainer) && (n = 1 === t.startContainer.nodeType && t.startContainer.querySelector("img") ? t.startContainer.querySelector("img").getBoundingClientRect() : t.startContainer.getBoundingClientRect());
                        var i, o, r = this.window.innerWidth,
                        a = this.getToolbarElement(),
                        s = a.offsetHeight,
                        l = a.offsetWidth,
                        c = l / 2,
                        d = this.diffLeft - c,
                        u = this.getEditorOption("elementsContainer"),
                        h = ["absolute", "fixed"].indexOf(window.getComputedStyle(u).getPropertyValue("position")) > -1,
                        f = {},
                        m = {};
                        h ? (o = u.getBoundingClientRect(), ["top", "left"].forEach(function(e) {
                            m[e] = n[e] - o[e]
                        }), m.width = n.width, m.height = n.height, n = m, r = o.width, f.top = u.scrollTop) : f.top = this.window.pageYOffset,
                        i = n.left + n.width / 2,
                        f.top += n.top - s,
                        n.top < 50 ? (a.classList.add("medium-toolbar-arrow-over"), a.classList.remove("medium-toolbar-arrow-under"), f.top += 50 + n.height - this.diffTop) : (a.classList.add("medium-toolbar-arrow-under"), a.classList.remove("medium-toolbar-arrow-over"), f.top += this.diffTop),
                        i < c ? (f.left = d + c, f.right = "initial") : r - i < c ? (f.left = "auto", f.right = 0) : (f.left = d + i, f.right = "initial"),
                        ["top", "left", "right"].forEach(function(e) {
                            a.style[e] = f[e] + (isNaN(f[e]) ? "": "px")
                        })
                    }
                });
                e.extensions.toolbar = t
            } (),
            function() {
                var t = e.Extension.extend({
                    init: function() {
                        e.Extension.prototype.init.apply(this, arguments),
                        this.subscribe("editableDrag", this.handleDrag.bind(this)),
                        this.subscribe("editableDrop", this.handleDrop.bind(this))
                    },
                    handleDrag: function(e) {
                        e.preventDefault(),
                        e.dataTransfer.dropEffect = "copy",
                        "dragover" === e.type ? e.target.classList.add("medium-editor-dragover") : "dragleave" === e.type && e.target.classList.remove("medium-editor-dragover")
                    },
                    handleDrop: function(t) {
                        var n;
                        t.preventDefault(),
                        t.stopPropagation(),
                        t.dataTransfer.files && (n = Array.prototype.slice.call(t.dataTransfer.files, 0), n.some(function(t) {
                            if (t.type.match("image")) {
                                var n, i;
                                n = new FileReader,
                                n.readAsDataURL(t),
                                i = "medium-img-" + +new Date,
                                e.util.insertHTMLCommand(this.document, '<img class="medium-editor-image-loading" id="' + i + '" />'),
                                n.onload = function() {
                                    var e = this.document.getElementById(i);
                                    e && (e.removeAttribute("id"), e.removeAttribute("class"), e.src = n.result)
                                }.bind(this)
                            }
                        }.bind(this))),
                        t.target.classList.remove("medium-editor-dragover")
                    }
                });
                e.extensions.imageDragging = t
            } (),
            function() {
                function t(t) {
                    var n = e.selection.getSelectionStart(this.options.ownerDocument),
                    i = n.textContent,
                    o = e.selection.getCaretOffsets(n); (void 0 === i[o.left - 1] || "" === i[o.left - 1].trim() || void 0 !== i[o.left] && "" === i[o.left].trim()) && t.preventDefault()
                }
                function n(t, n) {
                    if (this.options.disableReturn || n.getAttribute("data-disable-return")) t.preventDefault();
                    else if (this.options.disableDoubleReturn || n.getAttribute("data-disable-double-return")) {
                        var i = e.selection.getSelectionStart(this.options.ownerDocument); (i && "" === i.textContent.trim() && "li" !== i.nodeName.toLowerCase() || i.previousElementSibling && "br" !== i.previousElementSibling.nodeName.toLowerCase() && "" === i.previousElementSibling.textContent.trim()) && t.preventDefault()
                    }
                }
                function i(t) {
                    var n = e.selection.getSelectionStart(this.options.ownerDocument);
                    "pre" === (n && n.nodeName.toLowerCase()) && (t.preventDefault(), e.util.insertHTMLCommand(this.options.ownerDocument, "    ")),
                    e.util.isListItem(n) && (t.preventDefault(), t.shiftKey ? this.options.ownerDocument.execCommand("outdent", !1, null) : this.options.ownerDocument.execCommand("indent", !1, null))
                }
                function o(t) {
                    var n, i = e.selection.getSelectionStart(this.options.ownerDocument),
                    o = i.nodeName.toLowerCase(),
                    r = /^(\s+|<br\/?>)?$/i,
                    a = /h\d/i;
                    e.util.isKey(t, [e.util.keyCode.BACKSPACE, e.util.keyCode.ENTER]) && i.previousElementSibling && a.test(o) && 0 === e.selection.getCaretOffsets(i).left ? e.util.isKey(t, e.util.keyCode.BACKSPACE) && r.test(i.previousElementSibling.innerHTML) ? (i.previousElementSibling.parentNode.removeChild(i.previousElementSibling), t.preventDefault()) : !this.options.disableDoubleReturn && e.util.isKey(t, e.util.keyCode.ENTER) && (n = this.options.ownerDocument.createElement("p"), n.innerHTML = "<br>", i.previousElementSibling.parentNode.insertBefore(n, i), t.preventDefault()) : e.util.isKey(t, e.util.keyCode.DELETE) && i.nextElementSibling && i.previousElementSibling && !a.test(o) && r.test(i.innerHTML) && a.test(i.nextElementSibling.nodeName.toLowerCase()) ? (e.selection.moveCursor(this.options.ownerDocument, i.nextElementSibling), i.previousElementSibling.parentNode.removeChild(i), t.preventDefault()) : e.util.isKey(t, e.util.keyCode.BACKSPACE) && "li" === o && r.test(i.innerHTML) && !i.previousElementSibling && !i.parentElement.previousElementSibling && i.nextElementSibling && "li" === i.nextElementSibling.nodeName.toLowerCase() ? (n = this.options.ownerDocument.createElement("p"), n.innerHTML = "<br>", i.parentElement.parentElement.insertBefore(n, i.parentElement), e.selection.moveCursor(this.options.ownerDocument, n), i.parentElement.removeChild(i), t.preventDefault()) : e.util.isKey(t, e.util.keyCode.BACKSPACE) && !1 !== e.util.getClosestTag(i, "blockquote") && 0 === e.selection.getCaretOffsets(i).left ? (t.preventDefault(), e.util.execFormatBlock(this.options.ownerDocument, "p")) : e.util.isKey(t, e.util.keyCode.ENTER) && !1 !== e.util.getClosestTag(i, "blockquote") && 0 === e.selection.getCaretOffsets(i).right ? (n = this.options.ownerDocument.createElement("p"), n.innerHTML = "<br>", i.parentElement.insertBefore(n, i.nextSibling), e.selection.moveCursor(this.options.ownerDocument, n), t.preventDefault()) : e.util.isKey(t, e.util.keyCode.BACKSPACE) && e.util.isMediumEditorElement(i.parentElement) && !i.previousElementSibling && i.nextElementSibling && r.test(i.innerHTML) && (t.preventDefault(), e.selection.moveCursor(this.options.ownerDocument, i.nextSibling), i.parentElement.removeChild(i))
                }
                function r(t) {
                    var n, i = e.selection.getSelectionStart(this.options.ownerDocument);
                    i && (e.util.isMediumEditorElement(i) && 0 === i.children.length && !e.util.isBlockContainer(i) && this.options.ownerDocument.execCommand("formatBlock", !1, "p"), !e.util.isKey(t, e.util.keyCode.ENTER) || e.util.isListItem(i) || e.util.isBlockContainer(i) || (n = i.nodeName.toLowerCase(), "a" === n ? this.options.ownerDocument.execCommand("unlink", !1, null) : t.shiftKey || t.ctrlKey || this.options.ownerDocument.execCommand("formatBlock", !1, "p")))
                }
                function a(e, t) {
                    var n = t.parentNode.querySelector('textarea[medium-editor-textarea-id="' + t.getAttribute("medium-editor-textarea-id") + '"]');
                    n && (n.value = t.innerHTML.trim())
                }
                function s(e) {
                    e._mediumEditors || (e._mediumEditors = [null]),
                    this.id || (this.id = e._mediumEditors.length),
                    e._mediumEditors[this.id] = this
                }
                function l(e) {
                    e._mediumEditors && e._mediumEditors[this.id] && (e._mediumEditors[this.id] = null)
                }
                function c(t, n, i) {
                    var o = [];
                    if (t || (t = []), "string" == typeof t && (t = n.querySelectorAll(t)), e.util.isElement(t) && (t = [t]), i) for (var r = 0; r < t.length; r++) {
                        var a = t[r]; ! e.util.isElement(a) || a.getAttribute("data-medium-editor-element") || a.getAttribute("medium-editor-textarea-id") || o.push(a)
                    } else o = Array.prototype.slice.apply(t);
                    return o
                }
                function d(e) {
                    var t = e.parentNode.querySelector('textarea[medium-editor-textarea-id="' + e.getAttribute("medium-editor-textarea-id") + '"]');
                    t && (t.classList.remove("medium-editor-hidden"), t.removeAttribute("medium-editor-textarea-id")),
                    e.parentNode && e.parentNode.removeChild(e)
                }
                function u(e, t) {
                    return Object.keys(t).forEach(function(n) {
                        void 0 === e[n] && (e[n] = t[n])
                    }),
                    e
                }
                function h(e, t, n) {
                    return e = u(e, {
                        window: n.options.contentWindow,
                        document: n.options.ownerDocument,
                        base: n
                    }),
                    "function" == typeof e.init && e.init(),
                    e.name || (e.name = t),
                    e
                }
                function f() {
                    return ! this.elements.every(function(e) {
                        return !! e.getAttribute("data-disable-toolbar")
                    }) && !1 !== this.options.toolbar
                }
                function m() {
                    return !! f.call(this) && !1 !== this.options.anchorPreview
                }
                function p() {
                    return ! 1 !== this.options.placeholder
                }
                function g() {
                    return ! 1 !== this.options.autoLink
                }
                function b() {
                    return ! 1 !== this.options.imageDragging
                }
                function v() {
                    return ! 1 !== this.options.keyboardCommands
                }
                function y() {
                    return ! this.options.extensions.imageDragging
                }
                function w(e) {
                    for (var t = this.options.ownerDocument.createElement("div"), n = Date.now(), i = "medium-editor-" + n, o = e.attributes; this.options.ownerDocument.getElementById(i);) n++,
                    i = "medium-editor-" + n;
                    t.className = e.className,
                    t.id = i,
                    t.innerHTML = e.value,
                    e.setAttribute("medium-editor-textarea-id", i);
                    for (var r = 0,
                    a = o.length; r < a; r++) t.hasAttribute(o[r].nodeName) || t.setAttribute(o[r].nodeName, o[r].nodeValue);
                    return e.form && this.on(e.form, "reset",
                    function(e) {
                        e.defaultPrevented || this.resetContent(this.options.ownerDocument.getElementById(i))
                    }.bind(this)),
                    e.classList.add("medium-editor-hidden"),
                    e.parentNode.insertBefore(t, e),
                    t
                }
                function E(t, i) {
                    if (!t.getAttribute("data-medium-editor-element")) {
                        "textarea" === t.nodeName.toLowerCase() && (t = w.call(this, t), this.instanceHandleEditableInput || (this.instanceHandleEditableInput = a.bind(this), this.subscribe("editableInput", this.instanceHandleEditableInput))),
                        this.options.disableEditing || t.getAttribute("data-disable-editing") || (t.setAttribute("contentEditable", !0), t.setAttribute("spellcheck", this.options.spellcheck)),
                        this.instanceHandleEditableKeydownEnter || (t.getAttribute("data-disable-return") || t.getAttribute("data-disable-double-return")) && (this.instanceHandleEditableKeydownEnter = n.bind(this), this.subscribe("editableKeydownEnter", this.instanceHandleEditableKeydownEnter)),
                        this.options.disableReturn || t.getAttribute("data-disable-return") || this.on(t, "keyup", r.bind(this));
                        var o = e.util.guid();
                        t.setAttribute("data-medium-editor-element", !0),
                        t.classList.add("medium-editor-element"),
                        t.setAttribute("role", "textbox"),
                        t.setAttribute("aria-multiline", !0),
                        t.setAttribute("data-medium-editor-editor-index", i),
                        t.setAttribute("medium-editor-index", o),
                        T[o] = t.innerHTML,
                        this.events.attachAllEventsToElement(t)
                    }
                    return t
                }
                function C() {
                    this.subscribe("editableKeydownTab", i.bind(this)),
                    this.subscribe("editableKeydownDelete", o.bind(this)),
                    this.subscribe("editableKeydownEnter", o.bind(this)),
                    this.options.disableExtraSpaces && this.subscribe("editableKeydownSpace", t.bind(this)),
                    this.instanceHandleEditableKeydownEnter || (this.options.disableReturn || this.options.disableDoubleReturn) && (this.instanceHandleEditableKeydownEnter = n.bind(this), this.subscribe("editableKeydownEnter", this.instanceHandleEditableKeydownEnter))
                }
                function x() {
                    if (this.extensions = [], Object.keys(this.options.extensions).forEach(function(e) {
                        "toolbar" !== e && this.options.extensions[e] && this.extensions.push(h(this.options.extensions[e], e, this))
                    },
                    this), y.call(this)) {
                        var t = this.options.fileDragging;
                        t || (t = {},
                        b.call(this) || (t.allowedTypes = [])),
                        this.addBuiltInExtension("fileDragging", t)
                    }
                    var n = {
                        paste: !0,
                        "anchor-preview": m.call(this),
                        autoLink: g.call(this),
                        keyboardCommands: v.call(this),
                        placeholder: p.call(this)
                    };
                    Object.keys(n).forEach(function(e) {
                        n[e] && this.addBuiltInExtension(e)
                    },
                    this);
                    var i = this.options.extensions.toolbar;
                    if (!i && f.call(this)) {
                        var o = e.util.extend({},
                        this.options.toolbar, {
                            allowMultiParagraphSelection: this.options.allowMultiParagraphSelection
                        });
                        i = new e.extensions.toolbar(o)
                    }
                    i && this.extensions.push(h(i, "toolbar", this))
                }
                function k(t, n) {
                    var i = [["allowMultiParagraphSelection", "toolbar.allowMultiParagraphSelection"]];
                    return n && i.forEach(function(t) {
                        n.hasOwnProperty(t[0]) && void 0 !== n[t[0]] && e.util.deprecated(t[0], t[1], "v6.0.0")
                    }),
                    e.util.defaults({},
                    n, t)
                }
                function D(t, n) {
                    var i, o, r = /^append-(.+)$/gi,
                    a = /justify([A-Za-z]*)$/g;
                    if (i = r.exec(t)) return e.util.execFormatBlock(this.options.ownerDocument, i[1]);
                    if ("fontSize" === t) return n.size && e.util.deprecated(".size option for fontSize command", ".value", "6.0.0"),
                    o = n.value || n.size,
                    this.options.ownerDocument.execCommand("fontSize", !1, o);
                    if ("fontName" === t) return n.name && e.util.deprecated(".name option for fontName command", ".value", "6.0.0"),
                    o = n.value || n.name,
                    this.options.ownerDocument.execCommand("fontName", !1, o);
                    if ("createLink" === t) return this.createLink(n);
                    if ("image" === t) {
                        var s = this.options.contentWindow.getSelection().toString().trim();
                        return this.options.ownerDocument.execCommand("insertImage", !1, s)
                    }
                    if ("html" === t) {
                        var l = this.options.contentWindow.getSelection().toString().trim();
                        return e.util.insertHTMLCommand(this.options.ownerDocument, l)
                    }
                    if (a.exec(t)) {
                        var c = this.options.ownerDocument.execCommand(t, !1, null),
                        d = e.selection.getSelectedParentElement(e.selection.getSelectionRange(this.options.ownerDocument));
                        return d && A.call(this, e.util.getTopBlockContainer(d)),
                        c
                    }
                    return o = n && n.value,
                    this.options.ownerDocument.execCommand(t, !1, o)
                }
                function A(t) {
                    if (t) {
                        var n, i = Array.prototype.slice.call(t.childNodes).filter(function(e) {
                            var t = "div" === e.nodeName.toLowerCase();
                            return t && !n && (n = e.style.textAlign),
                            t
                        });
                        i.length && (this.saveSelection(), i.forEach(function(t) {
                            if (t.style.textAlign === n) {
                                var i = t.lastChild;
                                if (i) {
                                    e.util.unwrap(t, this.options.ownerDocument);
                                    var o = this.options.ownerDocument.createElement("BR");
                                    i.parentNode.insertBefore(o, i.nextSibling)
                                }
                            }
                        },
                        this), t.style.textAlign = n, this.restoreSelection())
                    }
                }
                var T = {};
                e.prototype = {
                    init: function(e, t) {
                        return this.options = k.call(this, this.defaults, t),
                        this.origElements = e,
                        this.options.elementsContainer || (this.options.elementsContainer = this.options.ownerDocument.body),
                        this.setup()
                    },
                    setup: function() {
                        this.isActive || (s.call(this, this.options.contentWindow), this.events = new e.Events(this), this.elements = [], this.addElements(this.origElements), 0 !== this.elements.length && (this.isActive = !0, x.call(this), C.call(this)))
                    },
                    destroy: function() {
                        this.isActive && (this.isActive = !1, this.extensions.forEach(function(e) {
                            "function" == typeof e.destroy && e.destroy()
                        },
                        this), this.events.destroy(), this.elements.forEach(function(e) {
                            this.options.spellcheck && (e.innerHTML = e.innerHTML),
                            e.removeAttribute("contentEditable"),
                            e.removeAttribute("spellcheck"),
                            e.removeAttribute("data-medium-editor-element"),
                            e.classList.remove("medium-editor-element"),
                            e.removeAttribute("role"),
                            e.removeAttribute("aria-multiline"),
                            e.removeAttribute("medium-editor-index"),
                            e.removeAttribute("data-medium-editor-editor-index"),
                            e.getAttribute("medium-editor-textarea-id") && d(e)
                        },
                        this), this.elements = [], this.instanceHandleEditableKeydownEnter = null, this.instanceHandleEditableInput = null, l.call(this, this.options.contentWindow))
                    },
                    on: function(e, t, n, i) {
                        return this.events.attachDOMEvent(e, t, n, i),
                        this
                    },
                    off: function(e, t, n, i) {
                        return this.events.detachDOMEvent(e, t, n, i),
                        this
                    },
                    subscribe: function(e, t) {
                        return this.events.attachCustomEvent(e, t),
                        this
                    },
                    unsubscribe: function(e, t) {
                        return this.events.detachCustomEvent(e, t),
                        this
                    },
                    trigger: function(e, t, n) {
                        return this.events.triggerCustomEvent(e, t, n),
                        this
                    },
                    delay: function(e) {
                        var t = this;
                        return setTimeout(function() {
                            t.isActive && e()
                        },
                        this.options.delay)
                    },
                    serialize: function() {
                        var e, t, n = {},
                        i = this.elements.length;
                        for (e = 0; e < i; e += 1) t = "" !== this.elements[e].id ? this.elements[e].id: "element-" + e,
                        n[t] = {
                            value: this.elements[e].innerHTML.trim()
                        };
                        return n
                    },
                    getExtensionByName: function(e) {
                        var t;
                        return this.extensions && this.extensions.length && this.extensions.some(function(n) {
                            return n.name === e && (t = n, !0)
                        }),
                        t
                    },
                    addBuiltInExtension: function(t, n) {
                        var i, o = this.getExtensionByName(t);
                        if (o) return o;
                        switch (t) {
                        case "anchor":
                            i = e.util.extend({},
                            this.options.anchor, n),
                            o = new e.extensions.anchor(i);
                            break;
                        case "anchor-preview":
                            o = new e.extensions.anchorPreview(this.options.anchorPreview);
                            break;
                        case "autoLink":
                            o = new e.extensions.autoLink;
                            break;
                        case "fileDragging":
                            o = new e.extensions.fileDragging(n);
                            break;
                        case "fontname":
                            o = new e.extensions.fontName(this.options.fontName);
                            break;
                        case "fontsize":
                            o = new e.extensions.fontSize(n);
                            break;
                        case "keyboardCommands":
                            o = new e.extensions.keyboardCommands(this.options.keyboardCommands);
                            break;
                        case "paste":
                            o = new e.extensions.paste(this.options.paste);
                            break;
                        case "placeholder":
                            o = new e.extensions.placeholder(this.options.placeholder);
                            break;
                        default:
                            e.extensions.button.isBuiltInButton(t) && (n ? (i = e.util.defaults({},
                            n, e.extensions.button.prototype.defaults[t]), o = new e.extensions.button(i)) : o = new e.extensions.button(t))
                        }
                        return o && this.extensions.push(h(o, t, this)),
                        o
                    },
                    stopSelectionUpdates: function() {
                        this.preventSelectionUpdates = !0
                    },
                    startSelectionUpdates: function() {
                        this.preventSelectionUpdates = !1
                    },
                    checkSelection: function() {
                        var e = this.getExtensionByName("toolbar");
                        return e && e.checkState(),
                        this
                    },
                    queryCommandState: function(e) {
                        var t, n = /^full-(.+)$/gi,
                        i = null; (t = n.exec(e)) && (e = t[1]);
                        try {
                            i = this.options.ownerDocument.queryCommandState(e)
                        } catch(e) {
                            i = null
                        }
                        return i
                    },
                    execAction: function(t, n) {
                        var i, o, r = /^full-(.+)$/gi;
                        return i = r.exec(t),
                        i ? (this.saveSelection(), this.selectAllContents(), o = D.call(this, i[1], n), this.restoreSelection()) : o = D.call(this, t, n),
                        "insertunorderedlist" !== t && "insertorderedlist" !== t || e.util.cleanListDOM(this.options.ownerDocument, this.getSelectedParentElement()),
                        this.checkSelection(),
                        o
                    },
                    getSelectedParentElement: function(t) {
                        return void 0 === t && (t = this.options.contentWindow.getSelection().getRangeAt(0)),
                        e.selection.getSelectedParentElement(t)
                    },
                    selectAllContents: function() {
                        var t = e.selection.getSelectionElement(this.options.contentWindow);
                        if (t) {
                            for (; 1 === t.children.length;) t = t.children[0];
                            this.selectElement(t)
                        }
                    },
                    selectElement: function(t) {
                        e.selection.selectNode(t, this.options.ownerDocument);
                        var n = e.selection.getSelectionElement(this.options.contentWindow);
                        n && this.events.focusElement(n)
                    },
                    getFocusedElement: function() {
                        var e;
                        return this.elements.some(function(t) {
                            return ! e && t.getAttribute("data-medium-focused") && (e = t),
                            !!e
                        },
                        this),
                        e
                    },
                    exportSelection: function() {
                        var t = e.selection.getSelectionElement(this.options.contentWindow),
                        n = this.elements.indexOf(t),
                        i = null;
                        return n >= 0 && (i = e.selection.exportSelection(t, this.options.ownerDocument)),
                        null !== i && 0 !== n && (i.editableElementIndex = n),
                        i
                    },
                    saveSelection: function() {
                        this.selectionState = this.exportSelection()
                    },
                    importSelection: function(t, n) {
                        if (t) {
                            var i = this.elements[t.editableElementIndex || 0];
                            e.selection.importSelection(t, i, this.options.ownerDocument, n)
                        }
                    },
                    restoreSelection: function() {
                        this.importSelection(this.selectionState)
                    },
                    createLink: function(t) {
                        var n, i = e.selection.getSelectionElement(this.options.contentWindow),
                        o = {};
                        if ( - 1 !== this.elements.indexOf(i)) {
                            try {
                                if (this.events.disableCustomEvent("editableInput"), t.url && e.util.deprecated(".url option for createLink", ".value", "6.0.0"), (n = t.url || t.value) && n.trim().length > 0) {
                                    var r = this.options.contentWindow.getSelection();
                                    if (r) {
                                        var a, s, l, c, d = r.getRangeAt(0),
                                        u = d.commonAncestorContainer;
                                        if (3 === d.endContainer.nodeType && 3 !== d.startContainer.nodeType && 0 === d.startOffset && d.startContainer.firstChild === d.endContainer && (u = d.endContainer), s = e.util.getClosestBlockContainer(d.startContainer), l = e.util.getClosestBlockContainer(d.endContainer), 3 !== u.nodeType && 0 !== u.textContent.length && s === l) {
                                            var h = s || i,
                                            f = this.options.ownerDocument.createDocumentFragment();
                                            this.execAction("unlink"),
                                            a = this.exportSelection(),
                                            f.appendChild(h.cloneNode(!0)),
                                            i === h ? e.selection.select(this.options.ownerDocument, h.firstChild, 0, h.lastChild, 3 === h.lastChild.nodeType ? h.lastChild.nodeValue.length: h.lastChild.childNodes.length) : e.selection.select(this.options.ownerDocument, h, 0, h, h.childNodes.length);
                                            var m = this.exportSelection();
                                            c = e.util.findOrCreateMatchingTextNodes(this.options.ownerDocument, f, {
                                                start: a.start - m.start,
                                                end: a.end - m.start,
                                                editableElementIndex: a.editableElementIndex
                                            }),
                                            0 === c.length && (f = this.options.ownerDocument.createDocumentFragment(), f.appendChild(u.cloneNode(!0)), c = [f.firstChild.firstChild, f.firstChild.lastChild]),
                                            e.util.createLink(this.options.ownerDocument, c, n.trim());
                                            var p = (f.firstChild.innerHTML.match(/^\s+/) || [""])[0].length;
                                            e.util.insertHTMLCommand(this.options.ownerDocument, f.firstChild.innerHTML.replace(/^\s+/, "")),
                                            a.start -= p,
                                            a.end -= p,
                                            this.importSelection(a)
                                        } else this.options.ownerDocument.execCommand("createLink", !1, n);
                                        this.options.targetBlank || "_blank" === t.target ? e.util.setTargetBlank(e.selection.getSelectionStart(this.options.ownerDocument), n) : e.util.removeTargetBlank(e.selection.getSelectionStart(this.options.ownerDocument), n),
                                        t.buttonClass && e.util.addClassToAnchors(e.selection.getSelectionStart(this.options.ownerDocument), t.buttonClass)
                                    }
                                }
                                if (this.options.targetBlank || "_blank" === t.target || t.buttonClass) {
                                    o = this.options.ownerDocument.createEvent("HTMLEvents"),
                                    o.initEvent("input", !0, !0, this.options.contentWindow);
                                    for (var g = 0,
                                    b = this.elements.length; g < b; g += 1) this.elements[g].dispatchEvent(o)
                                }
                            } finally {
                                this.events.enableCustomEvent("editableInput")
                            }
                            this.events.triggerCustomEvent("editableInput", o, i)
                        }
                    },
                    cleanPaste: function(e) {
                        this.getExtensionByName("paste").cleanPaste(e)
                    },
                    pasteHTML: function(e, t) {
                        this.getExtensionByName("paste").pasteHTML(e, t)
                    },
                    setContent: function(e, t) {
                        if (t = t || 0, this.elements[t]) {
                            var n = this.elements[t];
                            n.innerHTML = e,
                            this.checkContentChanged(n)
                        }
                    },
                    getContent: function(e) {
                        return e = e || 0,
                        this.elements[e] ? this.elements[e].innerHTML.trim() : null
                    },
                    checkContentChanged: function(t) {
                        t = t || e.selection.getSelectionElement(this.options.contentWindow),
                        this.events.updateInput(t, {
                            target: t,
                            currentTarget: t
                        })
                    },
                    resetContent: function(e) {
                        if (e) {
                            var t = this.elements.indexOf(e);
                            return void( - 1 !== t && this.setContent(T[e.getAttribute("medium-editor-index")], t))
                        }
                        this.elements.forEach(function(e, t) {
                            this.setContent(T[e.getAttribute("medium-editor-index")], t)
                        },
                        this)
                    },
                    addElements: function(e) {
                        var t = c(e, this.options.ownerDocument, !0);
                        if (0 === t.length) return ! 1;
                        t.forEach(function(e) {
                            e = E.call(this, e, this.id),
                            this.elements.push(e),
                            this.trigger("addElement", {
                                target: e,
                                currentTarget: e
                            },
                            e)
                        },
                        this)
                    },
                    removeElements: function(e) {
                        var t = c(e, this.options.ownerDocument),
                        n = t.map(function(e) {
                            return e.getAttribute("medium-editor-textarea-id") && e.parentNode ? e.parentNode.querySelector('div[medium-editor-textarea-id="' + e.getAttribute("medium-editor-textarea-id") + '"]') : e
                        });
                        this.elements = this.elements.filter(function(e) {
                            return - 1 === n.indexOf(e) || (this.events.cleanupElement(e), e.getAttribute("medium-editor-textarea-id") && d(e), this.trigger("removeElement", {
                                target: e,
                                currentTarget: e
                            },
                            e), !1)
                        },
                        this)
                    }
                },
                e.getEditorFromElement = function(e) {
                    var t = e.getAttribute("data-medium-editor-editor-index"),
                    n = e && e.ownerDocument && (e.ownerDocument.defaultView || e.ownerDocument.parentWindow);
                    return n && n._mediumEditors && n._mediumEditors[t] ? n._mediumEditors[t] : null
                }
            } (),
            function() {
                e.prototype.defaults = {
                    activeButtonClass: "medium-editor-button-active",
                    buttonLabels: !1,
                    delay: 0,
                    disableReturn: !1,
                    disableDoubleReturn: !1,
                    disableExtraSpaces: !1,
                    disableEditing: !1,
                    autoLink: !1,
                    elementsContainer: !1,
                    contentWindow: window,
                    ownerDocument: document,
                    targetBlank: !1,
                    extensions: {},
                    spellcheck: !0
                }
            } (),
            e.parseVersionString = function(e) {
                var t = e.split("-"),
                n = t[0].split("."),
                i = t.length > 1 ? t[1] : "";
                return {
                    major: parseInt(n[0], 10),
                    minor: parseInt(n[1], 10),
                    revision: parseInt(n[2], 10),
                    preRelease: i,
                    toString: function() {
                        return [n[0], n[1], n[2]].join(".") + (i ? "-" + i: "")
                    }
                }
            },
            e.version = e.parseVersionString.call(this, {
                version: "5.23.0"
            }.version),
            e
        } ())
    }).call(t, n(72))
},
function(e, t, n) {
    var i = n(61);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    n(3)(i, {});
    i.locals && (e.exports = i.locals)
},
function(e, t, n) {
    var i = n(62);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    n(3)(i, {});
    i.locals && (e.exports = i.locals)
},
,
function(e, t, n) {
    var i = n(68);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    n(3)(i, {});
    i.locals && (e.exports = i.locals)
},
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
function(e, t, n) {
    "use strict";
    function i(e) {
        var t = {
            confirmIcon: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='17' height='17' viewBox='0 0 17 17'> <g> </g> <path d='M15.418 1.774l-8.833 13.485-4.918-4.386 0.666-0.746 4.051 3.614 8.198-12.515 0.836 0.548z' fill='#000000' /></svg>",
            confirmText: "确定 ",
            showAlways: !1,
            theme: "light"
        },
        n = {};
        for (var i in t) n[i] = e && void 0 !== e[i] ? e[i] : t[i];
        var o = null,
        r = function() {
            o.setDate(new Date, !0),
            o.close()
        },
        a = function() {
            o.setDate(null, !0),
            o.close()
        };
        return function(e) {
            var t = {
                onKeyDown: function(t, n, i, o) {
                    e.config.enableTime && "Tab" === o.key && o.target === e.amPM ? (o.preventDefault(), e.confirmContainer.focus()) : "Enter" === o.key && o.target === e.confirmContainer && e.close()
                },
                onReady: function() {
                    if (void 0 !== e.calendarContainer) {
                        o = this;
                        var t = e._createElement("div", "flatpickr-confirm " + (n.showAlways ? "visible": "") + " " + n.theme + "Theme", "");
                        t.classList.add("visible");
                        var i = document.createElement("div");
                        i.className = "left",
                        i.innerHTML = "清除",
                        i.addEventListener("click", a),
                        t.appendChild(i);
                        var s = document.createElement("div");
                        s.className = "center",
                        s.innerHTML = "今天",
                        s.addEventListener("click", r),
                        t.appendChild(s);
                        var l = document.createElement("div");
                        l.className = "right",
                        l.innerHTML = n.confirmText + n.confirmIcon,
                        l.tabIndex = -1,
                        l.addEventListener("click", e.close),
                        t.appendChild(l),
                        e.confirmContainer = t,
                        e.calendarContainer.appendChild(e.confirmContainer),
                        e.open()
                    }
                }
            };
            return n.showAlways || (t.onChange = function(t, n) {
                var i = e.config.enableTime || "multiple" === e.config.mode;
                if (n && !e.config.inline && i) return e.confirmContainer.classList.add("visible");
                e.confirmContainer && e.confirmContainer.classList.remove("visible")
            }),
            t
        }
    }
    n(9),
    e.exports = i
},
function(e, t, n) {
    "use strict";
    function i(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    var o = n(0),
    r = i(o),
    a = n(12),
    s = i(a),
    l = n(18),
    c = i(l),
    d = n(19),
    u = i(d),
    h = n(13),
    f = i(h),
    m = n(14),
    p = i(m),
    g = n(15),
    b = i(g),
    v = n(16),
    y = i(v),
    w = n(17),
    E = i(w),
    C = n(20),
    x = i(C);
    n(24),
    n(21),
    n(22);
    var k = [c.
default, y.
default, p.
default, f.
default, u.
default, E.
default, b.
default],
    D = function() {
        HTMLElement.prototype.__defineGetter__("innerText",
        function() {
            return this.textContent.replace(/\u200B/g, "")
        }),
        HTMLElement.prototype.__defineSetter__("innerText",
        function(e) {
            this.textContent = e
        })
    },
    A = function(e,selector) {
        for (var t = 0, n = e.length; t < n; t++) S.call(this, e[t],selector)
    },
    /* T = function(e, t) {
        var n = t.getAttribute("sde-model"),
        i = JSON.parse(n);
        if (i.VALUE = e.VALUE, void 0 !== e.READONLY) if (i.READONLY = e.READONLY, 1 === i.READONLY) {
            var o = t.getElementsByClassName("sde-value")[0];
            o.setAttribute("contenteditable", "false")
        } else if (0 === i.READONLY) {
            var r = t.getElementsByClassName("sde-value")[0];
            r.setAttribute("contenteditable", "true")
        }
        if (e.TYPE && "" !== e.TYPE || (e.TYPE = i.TYPE), "select" === e.TYPE) {
            if (!e.TEXT) if (1 === i.FREEINPUT) e.TEXT = e.VALUE;
            else if (void 0 === i.BINDINGDATA || null === i.BINDINGDATA || 0 === i.BINDINGDATA.length);
            else for (var a = 0,
            s = i.BINDINGDATA.length; a < s; a++) {
                var l = i.BINDINGDATA[a];
                if (l.VALUE === i.VALUE) {
                    e.TEXT = l.TEXT;
                    break
                }
            }
            e.BINDINGDATA && (i.BINDINGDATA = e.BINDINGDATA),
            i.TEXT = e.TEXT;
            t.getElementsByClassName("sde-value")[0].innerText = e.TEXT
        } else if (void 0 !== e.TEXT || "checkbox" === e.TYPE) for (var c = t.querySelectorAll("input[type=checkbox]"), d = 0, u = c.length; d < u; d++) {
            for (var h = c[d], f = !1, m = h.getAttribute("value"), p = 0, g = e.VALUE.length; p < g; p++) if (e.VALUE[p].VALUE === m) {
                f = !0;
                break
            }
            f ? h.setAttribute("checked", "checked") : h.removeAttribute("checked")
        } else {
            var b = t.getElementsByClassName("sde-value")[0];
            b.innerText = e.VALUE
        }
        t.setAttribute("sde-model", JSON.stringify(i))
    },*/

    //king 设置值
     T = function(e, t) {
         var _obj = t.getElementsByClassName("sde-value")[0];
         if (e.COPYVALUE ==='1'){
             _obj.setAttribute("copyvalue",_obj.innerText);
         }
         var n = t.getAttribute("sde-model"),
             i = JSON.parse(n);
         if (i.VALUE = e.VALUE,void 0 !== e.READONLY){
             if (i.READONLY = e.READONLY,1 === i.READONLY) {
                 _obj.setAttribute("contenteditable", "false")
            } else if (0 === i.READONLY) {
                 _obj.setAttribute("contenteditable", "true")
            }
         }
         //下拉
         if (e.TYPE && "" !== e.TYPE || (e.TYPE = i.TYPE), "select" === e.TYPE) {
            var MIP_MRHP = parent.window.SDE_CONFIG.MIP_MRHP;
             var pus=[];
            if(!e.TEXT){
                e.TEXT="";

                if(1 === i.FREEINPUT){
                    e.TEXT = e.VALUE;
                }else if (0 === i.BINDINGDATA.length){
                    console.error("id为" + e.ID + "控件BINDINGDATA数据为0，请赋予该控件TEXT值！");
                }else{
                    for(var a = 0,s = i.BINDINGDATA.length; a < s; a++) {
                        var l = i.BINDINGDATA[a];
                        if(i.VERIFYTYPE=="checkbox" && $.isArray(i.VALUE)){//是下拉多选
                            for(var a1 = 0,s1 = i.VALUE.length; a1 < s1; a1++) {
                                var _VALUE = i.VALUE[a1].VALUE;
                                if(!isNaN(_VALUE)) {_VALUE = _VALUE.toString();}
                                if (l.VALUE === _VALUE) {
                                    e.TEXT? e.TEXT = e.TEXT+"、"+l.TEXT : e.TEXT +=l.TEXT;
                                    pus.push(l);
                                    break
                                }
                            }
                        }else{//不是下拉多选
                            var _VALUE ;
                            if($.isArray(i.VALUE)){
                                _VALUE=i.VALUE[0].VALUE;
                            }else{
                                _VALUE=i.VALUE;
                            }
                            if(!isNaN(_VALUE)) {_VALUE = _VALUE.toString();}
                            if (l.VALUE === _VALUE) {
                                if (MIP_MRHP) {
                                    e.TEXT = l.VALUE;
                                    break
                                } else {
                                    e.TEXT = l.TEXT;
                                    break
                                }
                            }
                        }
                    }
                }
            }
            if(pus.length!==0){
                i.VALUE=pus;
            }
            i.TEXT = e.TEXT || e.VALUE;//下拉控件没有找到值时，直接set控件
            _obj.innerText = e.TEXT || e.VALUE;
            var bootemp = !1;
            if (MIP_MRHP) {
                var arrs = [];
                if (!Array.isArray(MIP_MRHP)) {
                    arrs.push(MIP_MRHP);
                } else {
                    arrs = MIP_MRHP;
                }
                 for (var ii = 0, al = arrs.length; ii < al; ii++) {
                    var arr = arrs[ii];
                    var aa = $(arr);
                     bootemp = sde.sdecontains(aa[0], _obj);
                    if (bootemp) {
                        break;
                    }
                }
            }
            if (bootemp) {
                $(_obj).toggleClass('mrhp-paddingTag');
            }
         //复选
         } else if (void 0 !== e.TEXT || "checkbox" === e.TYPE){
                 var checkboxs = t.querySelectorAll("input[type]");
                 var pus=[];
                 for (var d = 0, u = checkboxs.length; d < u; d++) {
                     var h = checkboxs[d],
                         f = !1,
                         $h = $(h),
                         m = $h.attr("value"),
                         text = $h.attr("text");
                     if(!$.isArray(e.VALUE)){
                         if (e.VALUE.toString() === m ) {
                             f = !0;
                         }
                     }else{
                         for (var p = 0, g = e.VALUE.length; p < g; p++){
                            if (e.VALUE[p].VALUE.toString() === m) {
                                f = !0; break ;
                            }
                         }
                     }

                     if(f){
                         if(i.VERIFYTYPE=="radio"){
                             $(checkboxs).removeAttr("checked");
                             $h.attr("checked", "checked");
                             pus.push({
                                 VALUE:m,
                                 TEXT: text
                             });
                             break ;
                         }else{
                             $h.attr("checked", "checked");
                             pus.push({
                                 VALUE:m,
                                 TEXT: text
                             });
                         }
                     }else{
                         $h.removeAttr("checked");
                     }
                 }
                 i.VALUE = pus;
         } else {
            //修复input设置问题 king
            var sdeValue=  t.getElementsByClassName("sde-value");
            var _input = $(sdeValue).find('input');
            var _textarea = $(sdeValue).find('textarea');

            if(_input && _input.length!=0){
                _input.val(e.VALUE);
            }else if(_textarea && _textarea.length!=0){
                _textarea.val(e.VALUE);
            }else {
                var b = sdeValue[0];
                b.innerText = e.VALUE;
            }
         }
         t.setAttribute("sde-model", JSON.stringify(i))
    },
    /*设置控件值*/
    S = function(e,selector) {
        var t;
        if(selector){
            t = $(selector).find("#" + e.ID);
        }else{
            t = $("#" + e.ID);
        }
        //20180117 king 设置/获取所有的控件值
        if(parent.window.SDE_CONFIG.ISSELECTORALL=='1') {
            if(selector){
                t = selector.querySelectorAll("#" + e.ID);
            }else{
                t = this.__dom__.querySelectorAll("#" + e.ID);
            }
        }
        for ( var n = 0, i = t.length; n < i; n++) {
            T(e, t[n])
        }
    },
    N = function(e) {
        /*if (this.__options__.mode = e, "READONLY" === e) {
            var t = this.__dom__.querySelectorAll("[contenteditable=true]");
            if (t.length > 0) for (var n = 0,
            i = t.length; n < i; n++) {
                var o = t[n];
                o.setAttribute("contenteditable", "false"),
                o.setAttribute("mode", "READONLY")
            }
            null !== window.frameElement && window.__is_sde_iframe__ && (this.__dom__.setAttribute("contenteditable", "false"), this.__dom__.setAttribute("mode", "READONLY"))
        } else {
            var r = this.__dom__.querySelectorAll("[mode=READONLY]");
            if (r.length > 0) for (var a = 0,
            s = r.length; a < s; a++) {
                var l = r[a];
                l.setAttribute("contenteditable", "true"),
                l.setAttribute("mode", e)
            }
            null !== window.frameElement && window.__is_sde_iframe__ && (this.__dom__.setAttribute("contenteditable", "true"), this.__dom__.setAttribute("mode", e))
        }*/
        if (this.__options__.mode = e, "READONLY" === e) {
            var t = $("[contenteditable=true]");
            if (t.length > 0)
                for (var n = 0,i = t.length; n < i; n++) {
                    var o = t[n];
                    o.setAttribute("contenteditable", "false");
                    o.setAttribute("mode", "READONLY");
                }
            var plaintextOnly = $("[contenteditable=plaintext-only]");
            if (plaintextOnly.length > 0)
                for (var nn = 0,pl = plaintextOnly.length; nn < pl; nn++) {
                    var oo = plaintextOnly[nn];
                    oo.setAttribute("contenteditable", "false");
                    if(parent.window.SDE_CONFIG.addWhiteSpace!=='1') {
                        oo.style["white-space"] = "pre-wrap";    //防止设置只读模式控件左移
                    }
                    oo.setAttribute("mode", "plaintextOnly");
                }
            null !== window.frameElement && window.__is_sde_iframe__ && (this.__dom__.setAttribute("contenteditable", "false"), this.__dom__.setAttribute("mode", "READONLY"))
        } else {
            var r = $("[mode=READONLY]");
            if (r.length > 0)
                for (var a = 0, s = r.length; a < s; a++) {
                    var l = r[a];
                    l.setAttribute("contenteditable", "true");
                    l.setAttribute("mode", e)
                }
            var pOnly = $("[mode=plaintextOnly]");
            if (pOnly.length > 0)
                for (var aa = 0, pol = pOnly.length; aa < pol; aa++) {
                    var ll = pOnly[aa];
                    ll.setAttribute("contenteditable", "plaintext-only");
                    ll.setAttribute("mode", e)
                }
            null !== window.frameElement && window.__is_sde_iframe__ && (this.__dom__.setAttribute("contenteditable", "true"), this.__dom__.setAttribute("mode", e))
        }
    },
    L = null,
    M = function(e) {
        var t = $("#" + e);
        if (0 !== t.length) {
            if (1 === t.length || null === L) L = t[0];
            else for (var n = 0,
            i = t.length; n < i; n++) {
                var o = t[n];
                if (L === o) {
                    L = n === i - 1 ? t[0] : t[n + 1];
                    break
                }
            }
            L.scrollIntoView(!1)
        }
    },
    O = function() {
        for (var e = this.__dom__.getElementsByClassName("sde-bg"), t = 0, n = e.length; t < n; t++) {
            var i = e[t];
            i.classList.contains("sde-check-error") && i.classList.remove("sde-check-error")
        }
    },
    R = function(e, t) {
        if (e.id && e.id.length > 0) {
            var n = $("#" + e.id);
            if (n) {
                P(n, e) && e.success && e.success()
            } else console.error("不存在id为" + e.id + "的dom节点"),
            e && e.error && e.error({
                msg: "不存在id为" + e.id + "的dom节点"
            })
        } else {
            for (var i = this.__dom__.getElementsByClassName("sde-bg"), o = !0, r = 0, a = i.length; r < a; r++) {
                var s = i[r],
                l = P(s, e);
                if (l || (o = !1), !l && !t) break
            }
            o && e.success && e.success()
        }
    },
    P = function(e, t) {
        var n = e.getAttribute("sde-model"),
        i = JSON.parse(n);
        switch (i.TYPE) {
        case "text":
            return I(i, t, e);
        case "select":
            return F(i, t, e);
        case "date":
            return B(i, t, e);
        case "checkbox":
            return _(i, t, e);
        default:
            return console.error("id=" + i.ID + "的控件的TYPE=" + i.TYPE + "类型未知！"),
            !1
        }
    },
    I = function(e, t, n) {
        if (!e.READONLY) {
            if (e.REQUIRED && (!e.VALUE || 0 === e.VALUE.length)) return t.error ? (n.classList.add("sde-check-error"), t.error({
                model: e,
                msg: "控件必填！"
            })) : console.error("id=" + e.ID + "控件必填！"),
            !1;
            if (e.VALUE) {
                var i = e.VERIFYTYPE;
                if ("int" === e.VERIFYTYPE || "text" === e.VERIFYTYPE || "email" === e.VERIFYTYPE || "float" === e.VERIFYTYPE || "idcard" === e.VERIFYTYPE) {
                    console.error("新版验证全部采用正则表达式验证\t\n详情可参考最新demo，以后不对输入类型为VERIFYTYPE=int、text、email、float、idcard做类型判断\t\n具体正则表达是可参考dialogs/text.html");
                    i = {
                        int: "^[0-9]*$",
                        email: "^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\\.[a-zA-Z0-9_-]{2,3}){1,2})$",
                        text: "\\S",
                        float: "^-?\\d+\\.\\d+$",
                        idcard: "^\\d{15}|\\d{}18$"
                    } [e.VERIFYTYPE]
                }
                return !! new RegExp(i).test(e.VALUE) || (t.error ? (n.classList.add("sde-check-error"), t.error({
                    model: e,
                    msg: "格式不符合要求！"
                })) : console.error("id=" + e.ID + "格式不符合要求！"), !1)
            }
        }
        return ! 0
    },
    F = function(e, t, n) {
        return ! e.REQUIRED || ( !! (e.VALUE && e.VALUE.length > 0) || (t.error ? (n.classList.add("sde-check-error"), t.error({
            model: e,
            msg: "控件必填！"
        })) : console.error("id=" + e.ID + "控件必填！"), !1))
    },
    B = function(e, t, n) {
        return !! e.READONLY || (!e.REQUIRED || e.VALUE && 0 !== e.VALUE.length ? !(e.VALUE && e.VALUE.length > 0) || (5 === e.FORMAT.length && 10 === e.VALUE.length || 6 === e.FORMAT.length && 11 === e.VALUE.length || 11 === e.FORMAT.length && 19 === e.VALUE.length || (t.error ? (n.classList.add("sde-check-error"), t.error({
            model: e,
            msg: "日期格式格式不符合要求！"
        })) : console.error("id=" + e.ID + "的 日期格式不符合要求"), !1)) : (t.error ? (n.classList.add("sde-check-error"), t.error({
            model: e,
            msg: "控件必填！"
        })) : console.error("id=" + e.ID + "的 控件必填！"), !1))
    },
    _ = function(e, t) {
        return ! 0
    },
    /*获取控件值*/
    H = function(e,selector) {
        var selectorDom=(selector!==undefined)?this.__dom__.querySelector(selector):this.__dom__;
        if(parent.window.SDE_CONFIG.ISSELECTORALL=='1') {
            //20180117 king 设置/获取所有的控件值
            var tAll = selectorDom.querySelectorAll("#" + e);
            for (var n = 0,arrAll = [],tl = tAll.length; n < tl; n++) {
                var ts=tAll[n];
                var jsonObj = HS($(ts));
                if(!jsonObj) continue;
                arrAll.push(jsonObj);
            }
            return arrAll;
        }
        return HS($(selectorDom).find("#" + e));
    },
    HS=function($t){//获取控件值(json)
        if(!$t||$t=== 'undefined'||$t.length==0) return "";
        var n = $t.attr("sde-model"),
            i = JSON.parse(n);
        if ("text" === i.TYPE) {
            var o = $t.find(".sde-value");
            "" !== o && o !== i.VALUE && o.text() !== i.DESCNAME && (
                i.VALUE = o.text(),
                    $t.attr("sde-model", JSON.stringify(i)),
                    o.siblings(".sde-right").css( "color", "#0000FF"),
                    o.siblings(".sde-left").css("color", "#0000FF"),
                    $t.find(".sde-validatebox").remove()
            )
        }
        i.VALUE = $.trim(i.VALUE);
        return i
    },
    Y = function(selector) {
        var $selector=(selector!==undefined)?$(selector):$(this.__dom__);
        var e = $selector.find(".sde-value");
        for (var t = [], n = 0, i = e.length; n < i; n++) {
            var o = e[n].parentNode,
            r = void 0,
            a = JSON.parse(o.getAttribute("sde-model"));
            $(e[n]).siblings(".sde-right").css({ "color": "#0000FF"});
            $(e[n]).siblings(".sde-left").css({ "color": "#0000FF"});
            $(o).find(".sde-validatebox").remove();
            "text" === a.TYPE && "" !== (r = e[n]) && r !== a.VALUE && r.innerText !== a.DESCNAME && (
                a.VALUE = r.innerText,
                o.setAttribute("sde-model", JSON.stringify(a))
            );
            a.VALUE = (typeof a.VALUE == "string")?$.trim(a.VALUE):a.VALUE;
            t.push(a)
        }
        return t
    },
        //禁用控件
    disSDEPlugin = function(e) {
        if(!e||e=== 'undefined'||e.length==0) return '';
        //禁用左侧描述
        var did=e.replace(/\#|\./,"");
        var str ="span[_name='"+did+"']";
        var $str = $(str);
        $str.attr("contenteditable","false");
        $str.addClass('sde-plugin-disabled');
        var t = $(e);
        if(!t)return '';
        t.addClass('sde-plugin-disabled');
        $(t).find(".sde-value>label>input").attr("disabled",true);
        var $v = t.find('.sde-value');
        var contenteditable = $v.attr("contenteditable");
        $v.attr("dismode", contenteditable);
        $v.attr("contenteditable", "false");
        return t
    },
        //启用控件
    enSDEPlugin = function(e) {
        if(!e||e=== 'undefined'||e.length==0) return '';
        //启用左侧描述
        var did=e.replace(/\#|\./,"");
        var str ="span[_name='"+did+"']";
        var $str = $(str);
        $str.removeAttr("contenteditable");
        $str.removeClass('sde-plugin-disabled');
        var t = $(e);
        if(!t)return '';
        $(t).removeClass('sde-plugin-disabled');
        $(t).find(".sde-value>label>input").removeAttr("disabled");
        var $v = t.find('.sde-value');
        var dismode = $v.attr("dismode");
        $v.removeAttr("dismode");
        $v.attr("contenteditable", dismode);
        return t
    },
        //隐藏控件
    hideSDEPlugin = function(e) {
        if(!e||e=== 'undefined'||e.length==0) return '';
        //隐藏左侧描述
        var did=e.replace(/\#|\./,"");
        var str ="span[_name='"+did+"']";
        var $str = $(str);
        $str.hide();

        var t = $(e);
        if(t) t.hide() ;
        return t
    },
        //显示控件
    showSDEPlugin = function(e) {
        if(!e||e=== 'undefined'||e.length==0) return '';
        //显示左侧描述
        var did=e.replace(/\#|\./,"");
        var str ="span[_name='"+did+"']";
        var $str = $(str);
        $str.show();

        var t = $(e);
        if(t) t.show() ;
        return t
    },
    copySDEPluginvalue = function(e) {
        var tt = $("span[copyvalue]");
        for(var i=0 ,tl=tt.length;i<tl;i++){
            var t = $(tt[i]);
            var v = t.attr('copyvalue');
            var i = t.parent().attr('id');
            var json = {ID:i, VALUE:v};
            sde.setControl(json);
            t.removeAttr('copyvalue');
        }
        return tt
    },
    handleSDEPlugin = function(e,type) {
        return ''
    },
    getAllPlugin = function(selector) {
        var e , t = [];
        var $selector = $(selector);
        if($selector.length>0){
            e = $selector.find(".sde-value");
        }else{
            e = this.__dom__.getElementsByClassName("sde-value")
        }
        for (var  n = 0, i = e.length; n < i; n++) {
            var o = e[n].parentNode,
                a = JSON.parse(o.getAttribute("sde-model"));
                t.push(a)
        }
        return t
    },
    U = function() {
        var e = {
            versions: function() {
                var e = navigator.userAgent;
                navigator.appVersion;
                return {
                    trident: e.indexOf("Trident") > -1,
                    presto: e.indexOf("Presto") > -1,
                    webKit: e.indexOf("AppleWebKit") > -1,
                    gecko: e.indexOf("Gecko") > -1 && -1 == e.indexOf("KHTML"),
                    mobile: !!e.match(/AppleWebKit.*Mobile.*/),
                    ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                    android: e.indexOf("Android") > -1 || e.indexOf("Linux") > -1,
                    iPhone: e.indexOf("iPhone") > -1,
                    iPad: e.indexOf("iPad") > -1,
                    webApp: -1 == e.indexOf("Safari"),
                    weixin: e.indexOf("MicroMessenger") > -1,
                    qq: " qq" == e.match(/\sQQ/i)
                }
            } (),
            language: (navigator.browserLanguage || navigator.language).toLowerCase()
        };
        return e.versions.mobile || e.versions.android || e.versions.ios
    },
    j = function(e) {
        var t = void 0;
        return 0 !== e.length && (1 === e.length ? t = e[0] : e.length > 1 && (t = e[e.length - 1]), "end-dom" !== t.className)
    },
    z = function(e, t) {
        var n = t.parentNode;
        n.lastChild == t ? n.appendChild(e, t) : n.insertBefore(e, t.nextSibling)
    },
    W = function(e) {
        for (var t = e.querySelectorAll(".sde-bg"), n = 0, i = t.length; n < i; n++) {
            var o = t[n];
            o.querySelectorAll(".sde-value").length > 0 && !o.innerHTML.endsWith("&#8203;") && z(document.createTextNode("​"), o)
        }
    },

        EByParam = function(e) {
            var ee = $(e), t = [];
            var e = $(ee).find(".sde-value");
            for (var i = e.length , n = 0; n < i; n++) {
                var en= e[n];
                try {
                    var o = en.parentNode,
                        r = JSON.parse(o.getAttribute("sde-model"));
                    if ("text" === r.TYPE) {
                        var a = e[n];
                        "" !== a && a !== r.VALUE && a.innerText !== r.DESCNAME && (r.VALUE = a.innerText, o.setAttribute("sde-model", JSON.stringify(r)))
                    }
                    t.push(r)
                } catch (ee) {
                    $(en).toggleClass('sde-underline');
                    console.log(ee);

                }
            }
            return t
        },
        EE = function() {
            var cls = 'sde-underline';
            var all = this.__dom__.getElementsByClassName("sde-value"), t = [], n = 0;
            for ( var i = all.length; n < i; n++) {
                var obj = $(all[n]);
                if(obj.hasClass("mrhp-padding")){
                    continue;
                }
                obj.toggleClass(cls);
            }
        },
        checkRedPoint = function(e) {
            if(!$.isArray(e)){
                e=[e];
            }
            var all = this.__dom__.getElementsByClassName("sde-right"), t = [], n = 0;
            var bo = false;
            for ( var i = all.length; n < i; n++) {
                try {
                    /*去掉字符串前后所有空格*/
                    var el = all[n];
                    $(el).parent().addClass("checkNull");
                    if($(el).hasClass("sde-right-point")){
                        bo = true;
                        el.style.color = 'red';
                        var sibR = $(el).siblings(".sde-left")[0];
                        sibR.style.color = 'red';
                    };
                } catch (e) {
                    console.log(e);
                }
            }
            return bo;
        },
        checkRequire  = function(e) {
            if(!$.isArray(e)) e=[e];
            var all = this.__dom__.getElementsByClassName("sde-value"), t = [], n = 0;
            var boo = false;
            for ( var i = all.length; n < i; n++) {
                try {
                    /*去掉字符串前后所有空格*/
                    var $el = $(all[n]);
                    var str = $.trim($el.text());
                    var sibR = $el.siblings(".sde-right");
                    var sibL = $el.siblings(".sde-left");
                    if(sibR.hasClass("sde-require")){
                        if (str == ''||($.inArray(str, e)!==-1)) {
                            boo = true;
                            sibL.css({ "color": "red"});
                            sibR.css({ "color": "red"});
                            sibR.css({ "position":"relative"});
                            $(sibR).append('<div class="sde-validatebox">请输入控件值</div>');
                        }
                    };
                } catch (e) {
                    console.log(e);
                }
            }
            return boo;
        },
        setPlaintextOnly = function(param) {
            var e = this.__dom__.getElementsByClassName("sde-value"), t = [];
            for ( var i = e.length, n = 0; n < i; n++) {
                var en = e[n];
                try {
                    var o = en.parentNode, r = JSON.parse(o.getAttribute("sde-model"));
                    if ("text" === r.TYPE) {
                        var getAttribute = en.getAttribute("contenteditable");
                        if(!getAttribute|| getAttribute== "true"){
                            en.setAttribute("contenteditable", "plaintext-only");
                        }
                        if(getAttribute == "plaintext-only"){
                            en.setAttribute("contenteditable", "true");
                        }
                    }
                } catch (ee) {
                    console.log("处理contenteditable属性异常！e:"+ee);
                }
            }
        },
        setMRHPSelect = function() {
            var e = $(this.__dom__).find(".mrhp-paddingTag"), t = [];
            for ( var i = e.length, n = 0; n < i; n++) {
                var en = e[n];
                try {
                    $(en).toggleClass('mrhp-padding');
                    /*var o = en.parentNode, enTxt = en.innerText, r = JSON.parse(o.getAttribute("sde-model"));
                    if ("select" === r.TYPE) {
                        if (r.BINDINGDATA) {
                            var banddata = eval(r.BINDINGDATA);
                            for ( var j = 0, l = banddata.length; j < l; j++) {
                                if (banddata[j].TEXT == enTxt) {
                                    en.innerText = banddata[j].VALUE;
                                    break;
                                }
                            }

                        }
                     $(en).toggleClass('mrhp-padding');
                        //en.style = 'padding:0px 6px;border:1px solid #000';
                     }*/
                } catch (ee) {
                    $(en).toggleClass('sde-underline');
                    console.log(ee);

                }
            }
        },
        checkNull = function(e) {
             if(!$.isArray(e)){
                 e=[e];
             }
            var all = this.__dom__.getElementsByClassName("sde-value"), t = [], n = 0;
            var boo = false;
            for ( var i = all.length; n < i; n++) {
                try {
                    /* 去掉字符串前后所有空格 */
                    var el = all[n], str = $.trim(el.innerText);
                    $(el).parent().addClass("checkNull");
                    if (str == '') {
                        boo = true;
                        var sibL = $(el).siblings(".sde-left")[0];
                        sibL.style.color = 'red';
                        var sibR = $(el).siblings(".sde-right")[0];
                        sibR.style.color = 'red';
                    }
                } catch (e) {
                    console.log(e);
                }
            }
            return boo;
        };
    if (window.SDE = function(e) {
        if (void 0 === e) return void console.error("iframe.SDE param options is undefined!");
        e = r.default.deepCopy(s.default.defaultOptions, e);
        var t = void 0;
        if (void 0 === e.id){
            t = document.body;
        } else if (void 0 === (t = document.getElementById(e.id)) || void 0 === t){
            return void console.error("can not find iframe`s id element!");
        }
        if (t.classList.add("sde-editor"), this.__dom__ = t, this.__options__ = e, "DESIGN" === e.mode) {
            var n = "sde_" + (new Date).getTime();
            t.className = t.className + " " + n,
            this.__meditor__ = new x.default("." + n, {
                toolbar: {
                    allowMultiParagraphSelection: !0,
                    buttons: ["bold", "italic", "underline", "strikethrough", "superscript", "subscript", "orderedlist", "indent", "outdent", "justifyCenter", "justifyFull", "justifyLeft", "justifyRight", "h1", "h2", "h3"],
                    diffLeft: 0,
                    diffTop: -10,
                    firstButtonClass: "medium-editor-button-first",
                    lastButtonClass: "medium-editor-button-last",
                    relativeContainer: null,
                    standardizeSelectionStart: !1,
                    static: !1,
                    align: "center",
                    sticky: !1,
                    updateOnEmptySelection: !1
                }
            })
        }
        void 0 !== e.html && (t.innerHTML = e.html),
        D(),
        W(t);
        var i = this;
        if (null !== t && void 0 !== t) {
            var o = function(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                e.stopPropagation()
            },
            a = function(e) {
                for (var t = !1,n = 0,i = e.length; n < i; n++) {
                    var o = e[n];
                    if (!t && o.parentElement.className.includes("sde-")) {
                        t = !0;
                        break
                    }
                }
                return t
            },
            l = function(e) {
                var t = e.getRangeAt(0);
                return "range" === e.type.toLowerCase() && t.startContainer === t.endContainer && e.anchorNode.parentNode.classList.contains("sde-value") && e.extentNode.parentNode.classList.contains("sde-value")
            },
            c = function(e) {
                if (e.anchorNode && !e.anchorNode.parentElement.className.includes("sde-") && !e.extentNode.parentElement.className.includes("sde-")) {
                    var t = e.getRangeAt(0),
                    n = t.cloneContents();
                    var boo = n.querySelectorAll(".sde-value").length > 0 || n.querySelectorAll(".sde-left").length > 0 || n.querySelectorAll(".sde-right").length > 0 || n.querySelectorAll(".sde-bg").length > 0;
                    return boo;
                }
                return ! 1
            }, d = function (e) {
                var t = e.target.parentNode,
                n = (t.getAttribute("sde-model"),
                    window.getSelection());
                    var _temp = u(n, e);
                    if (!_temp) {
                    if (1 === n.rangeCount) {
                        var i = n.getRangeAt(0);
                        if (i.startContainer && 3 === i.startContainer.nodeType && 1 === i.startOffset && "​" !== i.startContainer.wholeText && i.startContainer.previousSibling && 1 === i.startContainer.previousSibling.nodeType && i.startContainer.previousSibling.classList.contains("sde-bg")) {
                            var r = i.startContainer.textContent;
                            return i.startContainer.textContent = "​" + r.substring(1, r.length),
                            void o(e)
                        }
                    }
                    //此处的"​"为页面上的#&8 2 03 修复控件后面无法插入光标的问题
                    if (n.anchorNode && 3 == n.anchorNode.nodeType && n.anchorNode.wholeText.substring(0, n.anchorOffset).endsWith("​")) {
                        if ("​" === n.anchorNode.wholeText) return void o(e);
                        var s = document.createRange();
                        s.setStart(n.anchorNode, n.anchorOffset),
                        s.collapse(!0),
                        n.removeAllRanges(),
                        n.addRange(s)
                    }
                    //king start
                    var tt = e.target.parentNode,
                        nn = (tt.getAttribute("sde-model"), window.getSelection());
                    if (nn.isCollapsed && 0 === nn.anchorOffset && 0 === nn.focusOffset) {
                        var ii ;
                        try {
                            ii = nn.anchorNode.previousElementSibling;
                        } catch (e) {
                            //TODO
                            console.log("Cannot read property 'previousElementSibling' of null");
                        }
                        if (nn.focusNode.parentElement && nn.focusNode.parentElement.classList.contains("sde-value")) {
                            //king 解决控件换行不能删除的问题 start
                            var focusNode= n.focusNode.data ;
                            var parentElement= n.focusNode.parentElement;
                            var innerText=parentElement.innerText;
                            var reg=eval(/(\r\n)|(\n)/g);
                            var n=innerText.match(reg);
                            if( !n ){
                                return void o(e);
                            }else{
                                var br = innerText.split('\n')[0];
                                if( focusNode==br )return void o(e);
                             }
                            //king 解决控件换行不能删除的问题 end
                        }
                        if (ii && "SPAN" === ii.nodeName && ii.classList && (ii.classList.contains("sde-bg") || ii.classList.contains("sde-left") || ii.classList.contains("sde-right"))) return void o(e);
                        if (null === ii && null !== nn.anchorNode.parentElement) {
                            var rr = nn.anchorNode.parentElement.previousElementSibling;
                            if (null !== rr && rr.classList.contains("sde-bg")) return void o(e)
                        } else if (1 === nn.anchorNode.textContent.length && "​" === nn.anchorNode.textContent) return void o(e)
                    }
                    //king end
                    if (n.anchorNode && n.anchorNode.previousSibling && n.isCollapsed && 0 === n.anchorOffset && 0 === n.focusOffset) {
                        var d = n.anchorNode.previousSibling;
                        //if (n.focusNode.parentElement && n.focusNode.parentElement.classList.contains("sde-value")) return void o(e);
                        if (d && "SPAN" === d.nodeName && d.classList && (d.classList.contains("sde-bg") || d.classList.contains("sde-left") || d.classList.contains("sde-right"))) return void o(e);
                        if (null === d && null !== n.anchorNode.parentElement) {
                            var h = n.anchorNode.parentElement.previousElementSibling;
                            if (null !== h && h.classList.contains("sde-bg")) return void o(e)
                        } else 1 === n.anchorNode.textContent.length && n.anchorNode.textContent
                    } else /*if (!n.isCollapsed && !l(n) && a([n.anchorNode, n.extentNode])) return void o(e);*/
                    {
                        //king 20171010 修复浏览器奔溃问题 & 控件可以删除的问题 start
                        var other_range, getNative ,_this ,selectedHtml;
                        try {
                            _this = parent.sde.__ue__;
                            getNative = _this.selection.getNative();
                            other_range = getNative.getRangeAt(0);
                            var docFragment = other_range.cloneContents();
                            var tempDiv = document.createElement("div");
                            tempDiv.appendChild(docFragment);
                            selectedHtml = tempDiv.innerHTML;

                            var rIndex = selectedHtml.indexOf("sde-right");
                            var lIndex = selectedHtml.indexOf("sde-left");

                            if(rIndex<lIndex){
                                return void o(e);
                            }else{

                                //当前面都有一对括号时，后面有一个单独的【,,,,如何处理？
                                /*var sdeRight = $(selectedHtml).find(".sde-right");
                                 var sdeLeft = $(selectedHtml).find(".sde-left");
                                 if(sdeRight.length!= sdeLeft.length ){
                                 return void o(e);
                                 }*/
                                var rlastIndexOf = selectedHtml.lastIndexOf("sde-right");
                                var llastIndexOf = selectedHtml.lastIndexOf("sde-left");
                                if(rlastIndexOf<llastIndexOf){
                                    /*re=eval("/"+re+"/ig")
                                    return s.match(re).length;*/
                                    return void o(e);
                                }
                            }

                            //console.log("selectedHtml:"+selectedHtml);
                            var regexpR = new RegExp('sde-right');
                            var regexpL = new RegExp('sde-left');
                            var resR = regexpR.test(selectedHtml);
                            var resL = regexpL.test(selectedHtml);
                            //king 20171010 当选中][这样的情况还是会可以删除的，，，，bug
                            if(resR||resL){
                                return (resL&&resR)?"":void o(e);
                            }
                        } catch (e) {
                            console.log(e);
                        }
                        //king 20171010 修复浏览器奔溃问题 & 控件可以删除的问题 end
                    }
                    return c(n) ? void o(e) : void 0
                }
            },
            u = function(e, t) {
                if (1 === e.rangeCount) {
                    var n = e.getRangeAt(0),
                    i = n.startContainer;
                    if (i && 0 === n.startOffset && !i.previousSibling) {
                        var r = h(i);
                        if (r && r.querySelectorAll(".sde-bg").length > 0)
                            return !0
                    }
                }
                return ! 1
            },
            h = function e(t) {
                return "HTML" === t.nodeName ? null: t.previousSibling && t.previousSibling.innerText ? t.previousSibling: e(t.parentElement)
            },
            f = function e(t) {
                return "HTML" === t.nodeName ? null: t.nextSibling && t.nextSibling.innerText ? t.nextSibling: e(t.parentElement)
            },
            m = function(e, t) {
                if (1 === e.rangeCount) {
                    var n = e.getRangeAt(0),
                    i = n.endContainer;
                    if (i && n.endOffset === i.length && !i.nextSibling) {
                        var r = f(i);
                        if (r && r.querySelectorAll(".sde-bg").length > 0) return o(t),
                        !0
                    }
                }
                return ! 1
            },
            vv = function(e, t) {
                // king 处理选中控件后，输入文字，控件被删除的问题
                var n = window.getSelection();
                if (n.rangeCount > 0) {
                    var i = n.getRangeAt(0);
                    if (!i) return;
                    if (i.startContainer !== i.endContainer) {
                        var r = i.cloneContents();
                        if (r.querySelectorAll(".sde-bg").length > 0 || r.querySelectorAll(".sde-value").length > 0 || r.querySelectorAll(".sde-left").length > 0 || r.querySelectorAll(".sde-right").length > 0) return void o(t)
                    }
                }
            },
            p = function(e) {
                var t = e.target.parentNode,
                n = (t.getAttribute("sde-model"), window.getSelection());
                if (!m(n, e)) {
                    if (1 === n.rangeCount) {
                        var i = n.getRangeAt(0);
                        if (i.endContainer && 3 === i.endContainer.nodeType && i.endOffset === i.endContainer.length && "​" !== i.endContainer.wholeText && i.endContainer.nextSibling && 1 === i.endContainer.nextSibling.nodeType && i.endContainer.nextSibling.classList.contains("sde-bg")) return void o(e);
                        var r = i.endContainer;
                        if (r && 1 === r.wholeText.length && r.nextSibling && r.nextSibling.classList.contains("sde-bg") && r.previousSibling.classList.contains("sde-bg")) return "​" !== r.wholeText && (r.textContent = "​"),
                        void o(e)
                    }
                    if (n.isCollapsed && null !== n.focusNode && void 0 !== n.focusNode.length && n.focusOffset === n.focusNode.length) {
                        var s = n.focusNode.nextElementSibling;
                        if (n.focusNode.parentElement && n.focusNode.parentElement.classList.contains("sde-value")) return void o(e);
                        if (s && "SPAN" === s.nodeName && s.classList && (s.classList.contains("sde-bg") || s.classList.contains("sde-left") || s.classList.contains("sde-right"))) return void o(e);
                        if (null === s && null !== n.focusNode.parentElement) {
                            var d = n.focusNode.parentElement.nextElementSibling;
                            if (null !== d && d.classList.contains("sde-bg")) return void o(e)
                        } else if (0 === n.anchorOffset && 0 === n.focusOffset && "SPAN" === n.focusNode.nodeType && n.focusNode.classList.contains("sde-value")) return void o(e);
                        if (c(n)) return void o(e)
                    } else {
                        if (n.isCollapsed && n.focusNode && "SPAN" === n.focusNode.nodeName && n.focusNode.classList.contains("sde-value") && 0 === n.focusOffset && 0 === n.anchorOffset) return void o(e);
                        if (!n.isCollapsed && !l(n) && a([n.anchorNode, n.extentNode])) return void o(e)
                    }
                }
            };
            r.default.registerEvent(t, "dblclick",
                function (e) {
                    if ("READONLY" !== i.__options__.mode) {
                        var t = e.target;
                        if (t.classList.contains("sde-bg") || t.classList.contains("sde-left") || t.classList.contains("sde-right")) {
                            //return void window.getSelection().removeAllRanges()
                        }
                        null !== t && (
                            "INPUT" === t.tagName && "checkbox" === t.type && "LABEL" === t.parentNode.tagName && (t = t.parentNode.parentNode),
                            null === t.getAttribute("sde-model") && (t = t.parentNode),
                            null === t.getAttribute("sde-model") && (t = t.parentNode)
                        );

                        if (null !== t && "#document" !== t.nodeName && null !== t.getAttribute("sde-model")) {
                            var n = JSON.parse(t.getAttribute("sde-model"));
                            if (void 0 === n || null === n) return void console.error("iframe don`t have sde-model!");
                            var o = n.TYPE;
                            U() && !window.__is_sde_iframe__ && (o = n.TYPE + ".mobile");
                            for (var r = 0, a = k.length; r < a; r++) {
                                var s = k[r];
                                try {
                                    if (s.TYPE === o) {
                                        //$(t).find('.sde-value').text(2);
                                        var funcName = $(t).attr('_dblclick');
                                        //console.log("funcName:" + funcName);
                                        if (funcName && funcName!=="undefined" && funcName!=="") {
                                            var sdeuserfun = new parent.window.sdeUserFun();
                                            sdeuserfun[funcName]($(t));
                                        //parent.window.sde.__ue__.execCommand("checkbox", t, n);
                                        } else {
                                            console.log("_dblclick is null...");
                                        }
                                        break
                                    }
                                }catch (e){

                                }
                            }
                        }
                        if (e.target.type == "radio") {
                            t.parentNode.getAttribute("sde-model");
                            var n = JSON.parse(t.parentNode.getAttribute("sde-model"));
                            n.VALUE = e.target.value;
                            t.parentNode.setAttribute("sde-model", JSON.stringify(n));
                        }
                    }
                }),
            r.
        default.registerEvent(t, "click",
            function(e) {
                if(parent.window.SDE_CONFIG.CLOSE_SELECT){
                    parent.window.SDE_CONFIG.CLOSE_SELECT = false;
                    return;
                }else if ("READONLY" !== i.__options__.mode) {
                    var t = e.target;
                    if (t.classList.contains("sde-bg") || t.classList.contains("sde-left") || t.classList.contains("sde-right")) {
                        //return void window.getSelection().removeAllRanges()
                    }
                    if (null !== t && ("INPUT" === t.tagName && "checkbox" === t.type && "LABEL" === t.parentNode.tagName && (t = t.parentNode.parentNode), null === t.getAttribute("sde-model") && (t = t.parentNode), null === t.getAttribute("sde-model") && (t = t.parentNode), null !== t && "#document" !== t.nodeName && null !== t.getAttribute("sde-model"))) {
                        var n = JSON.parse(t.getAttribute("sde-model"));
                        if (void 0 === n || null === n) return void console.error("iframe don`t have sde-model!");
                        var o = n.TYPE;
                        U() && !window.__is_sde_iframe__ && (o = n.TYPE + ".mobile");
                        for (var r = 0,
                        a = k.length; r < a; r++) {
                            var s = k[r];
                            if (s.TYPE === o) {
                                s.click.call(t, n);
                                break
                            }
                        }
                    }
                    //复选框，单选事件
                    if(e.target.type =="radio"){
                        var $par = $(t.parentNode);
                        if($par.hasClass('sde-plugin-disabled')||!$par.hasClass('sde-bg'))return ;
                        /*2017-8-1 Rum 小红点*/
                        sde.noPoint(this);
                        var tt = $par.find(".sde-value input[type=radio]");
                        tt.removeAttr("checked");
                        $(e.target).attr("checked","checked");
                        var pjson = JSON.parse($par.attr("sde-model"));
                        pjson.VALUE = e.target.value;
                        $par.attr("sde-model", JSON.stringify(pjson));
                    }
                }
            }),
            r.
        default.registerEvent(t, "keydown",
            function(e) {
                var t = e.keyCode || e.which;
                var sdeValue = parent.sde.__ue__.selection.getStart();
                window.getSelection();
                if(e.keyCode == "67" && e.ctrlKey){
                    window.sessionStorage.removeItem("copyContent");
                    parent.sde.__ue__.execCommand("Copy");
                }
                //控制光标在控件间移动 Nothing 20180222
                if($(sdeValue).hasClass("sde-value") || $(sdeValue).closest(".sde-value").length != 0){
                    if(9 === e.keyCode && e.shiftKey == true){
                        stepWidget(-1);     //光标后退
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }else if(9 === e.keyCode){  //光标前进
                        stepWidget(1);
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }
                }

                if (229 === t) return ! 0;
                if ( 13 === t) {
                    var str = e.target.parentNode.getAttribute("sde-model");
                    var obj = eval('('+ str +')');
                    if(obj && obj.TYPE == 'select'){
                        //$(e.target).parent().find(".sde-value").trigger('click');
                        if($(e.target).parent().find(".sde-select-root").length == 0){
                             $(e.target).trigger('click');
                        }else{
                            if($(".one input").length == 0 ){
                                $(".one").trigger("click");
                                //$(e.target).parent().children(".sde-select-root").remove();
                            }else{
                                $(".one input").attr("checked",!$(".one input").attr("checked"));
                            }
                        }
                        e.cancelBubble = true;
                        return e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                    }else if(obj && obj.TYPE == 'checkbox'){
                        $(sdeValue).find("input").prop("checked",!$(sdeValue).find("input").prop("checked"))
                        e.cancelBubble = true;
                        return e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                    }else if(obj && obj.TYPE == "date"){
                        $(e.target).trigger('click');
                    }
                   //if (null !== e.target.parentNode.getAttribute("sde-model")){
                        //取消阻止回车事件 king
                        /*return e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                         void e.stopPropagation()*/
                    //}
                }else if ( 38 === t){
                     if($(e.target).parent().find(".sde-select-root").length != 0){
                         selectStep(-1);
                         return e.preventDefault ? e.preventDefault() : e.returnValue = !1;　
                     }
                }else if( 40 === t){
                    if($(e.target).parent().find(".sde-select-root").length != 0){
                         selectStep(1);
                         return e.preventDefault ? e.preventDefault() : e.returnValue = !1;　
                     }　
                }
                else if( 113 == t){
                    //$("span[sde-model]")
                }
                 else if(8 === t){
                    d(e)
                } else if( 46 === t){
                    p(e)
                }else{
                    //king 处理选中控件后，输入文字，控件被删除的问题
                    vv(0, e);
                }
                function selectStep(step){
                    var index;
                    var len;
                    index = $(".one").length == 0 ?  $(e.target).parent().find(".selected").index() : $(".one").index();
                    index = index + step;
                    len = $(e.target).parent().find(".sde-select-content li").length;
                    if(index >= len ) index = 0;
                    if(index < 0 ) index = len-1 ;
                    $(e.target).parent().find(".sde-select-content li").removeClass("one").css('background','');
                    $(e.target).parent().find(".sde-select-content li:eq("+index+")").css('background','#d5e1f2').addClass("one").focus();
                    // $(".one").bind("keydown",function(e){
                    //     if(e.keyCode == 13) this.trigger("click");
                    // })
                }

            }),
            r.
        default.registerEvent(t, "paste",
            function(t) {
                t = t || event;
                var n = null,
                i = t.target;
                var selection = window.sessionStorage.getItem("copyContent");
                if($(selection).text().indexOf(t.clipboardData.getData("text")) != -1){
                    window.sessionStorage.setItem("copyCount",true);
                }
                if (null === n && i.getAttribute("sde-model") ? n = JSON.parse(i.getAttribute("sde-model")) : null === n && (i = i.parentNode), null === n && i.getAttribute("sde-model") ? n = JSON.parse(i.getAttribute("sde-model")) : null === n && (i = i.parentNode), null === n && i.getAttribute("sde-model") ? n = JSON.parse(i.getAttribute("sde-model")) : null === n && (i = i.parentNode), null !== n) {
                    if ("READONLY" === e.mode) return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                    !1;
                    var o = t.clipboardData || window.clipboardData;
                    if (1 !== n.READONLY && ("text" === n.TYPE || "date" === n.TYPE || "select" === n.TYPE && n.FREEINPUT && 1 === n.FREEINPUT)) {
                        var r = void 0,
                        a = void 0,
                        s = void 0,
                        l = o.getData("text"),
                        c = document.createTextNode(l);
                        window.getSelection ? (r = window.getSelection(), r.getRangeAt && r.rangeCount && (a = r.getRangeAt(0), a.collapse(!1), a.insertNode(c))) : document.selection && document.selection.createRange && (a = document.selection.createRange(), a.collapse(!1), s = 3 == c.nodeType ? c.data: c.outerHTML, a.pasteHTML(s)),
                        setTimeout(function() {
                            var e = i.getElementsByClassName("sde-value")[0].innerText;
                            n.VALUE = e,
                            i.setAttribute("sde-model", JSON.stringify(n))
                        },
                        0)
                    }
                    for (var d = i.getElementsByClassName("sde-select-root"), u = 0, h = d.length; u < h; u++) d[u].remove();
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                    !1
                }
            })
        }
        N.call(this, e.mode),
        void 0 !== e.controls && e.controls.length > 0 && A.call(this, e.controls)
        this.editorPalyer();
        this.spaceEnsp();
    },
    /**
     * king sdejiekou 接口
     */
    window.SDE.prototype = {
        constructor: window.SDE,
        html : function(e) {
            if (void 0 === e) {
                O.call(this);
                var t = this.__dom__;
                var n = t.getElementsByClassName("flatpickr-calendar");
                for (var i = n.length, o = i - 1; o >= 0; o--){
                    n[o].remove();
                }
                var s = j(t.children) ? t.innerHTML + '<p class="end-dom"></p>': t.innerHTML;
                return s.replace(/\u200B/g, "");
            }
            this.__dom__.innerHTML = e
        },
        removerFlatpickr: function() {
            /**
             * 修复日期控件不能二次点击问题 Nothing 20180307
             * */
            if($('.flatpickr-calendar').css("display") != 'block'){
                $(".flatpickr-calendar").remove();
            }
        },
        setMode: function(e) {
            if( "READONLY" === e){
                var _html = this.__dom__.innerHTML;
                _html = _html.replace(/(\r\n)|(\n)/g,'<br>');
                this.__dom__.innerHTML = _html;
                var $button = $('button');
                $.each($button,function(i, n){
                    var $this=$(this);
                    $this.attr("_onclick",$this.attr("onclick")||"");
                    $this.removeAttr("onclick");
                });
            }else{
                var $button = $('button');
                $.each($button,function(i, n){
                    var $this=$(this);
                    if($this.attr("_onclick")!==undefined){
                        $this.attr("onclick",$this.attr("_onclick"));
                        $this.removeAttr("_onclick");
                    }
                });

            }
            N.call(this, e)
        },
        setControl: function(e,selector) {
            return null !== e && void 0 !== e && "" !== e && (r.default.isArray(e) ? A.call(this, e,selector) : r.default.isPlainObject(e) && S.call(this, e, selector))
        },
        getControl: function(e,selector) {
            return void 0 === e ? Y.call(this,selector) : H.call(this, e,selector)
        },
        disSDEPlugin: function(e) {
            return disSDEPlugin.call(this, e)
        },
        enSDEPlugin: function(e) {
            return enSDEPlugin.call(this, e)
        },
        hideSDEPlugin: function(e) {
            return hideSDEPlugin.call(this, e)
        },
        showSDEPlugin: function(e) {
            return showSDEPlugin.call(this, e)
        },
        copySDEPluginvalue: function(e) {
            return copySDEPluginvalue.call(this, e)
        },
        handleSDEPlugin: function(e,type) {
            return handleSDEPlugin.call(this, e,type)
        },
        getAllPlugin: function(e,selector) {
            return void 0 === e ? getAllPlugin.call(this,selector) : H.call(this, e,selector)
        },
        checkControl: function(e, t) {
            return e ? R.call(this, e, t) : (console.error("obj对象为空！"), !1)
        },
        checkPluginLR : function(A) {
            var $objSL = $("span.sde-left");
            var $objSR = $("span.sde-right");
            $objSL.css("color","#0000FF");
            $objSL.attr("contenteditable","false");
            $objSL.html('[');
            $objSR.css("color","#0000FF");
            $objSR.attr("contenteditable","false");
            $objSR.html(']');
            $("p").each(function(){
                if(this.innerHTML==']'||this.innerHTML==']<br>'){
                    $(this).remove();
                }
            });
            var own_icon_select = $("div.own_icon_select");
            var own_icon_text = $("div.own_icon_text");
            var own_icon_date = $("div.own_icon_date");
            var own_icon_checkbox = $("div.own_icon_checkbox");
            own_icon_text.remove();
            own_icon_date.remove();
            own_icon_checkbox.remove();
            own_icon_select.remove();
            return ;
        },
        /* 获取指点区域的值 */
        getControlByParam : function(e) {
            return EByParam.call(this, e)
        },
        /* 20170726 king 控件下划线 trace 319 */
        setControlUnderline : function(e) {
            return EE.call(this)
        },
        /* 20170803 king 空值检验 trace 349 */
        checkNull : function(e) {
            return checkNull.call(this, e)
        },
        /**
         *  必填项校验
         */
        checkRequire : function(e) {
            return checkRequire.call(this, e)
        },
        /* 20170803 king 小红点检验 trace 349 */
        checkRedPoint : function(e) {
            return checkRedPoint.call(this)
        },
        /* 20171218 king 去除小红点  */
        cancelRedPoint : function() {
            $(".sde-right").css({ "color": "#0000FF"});
            $(".sde-left").css({ "color": "#0000FF"});
            $(".sde-validatebox").remove();
            return $(".sde-right-point").removeClass('sde-right-point');
        },
        /* 20171218 king 去除提示  */
        cancelTig : function() {
            $(".sde-right").css({ "color": "#0000FF"});
            $(".sde-left").css({ "color": "#0000FF"});
            $(".sde-validatebox").remove();
            $(".sde-right-point").removeClass('sde-right-point');
        },
        /* 20170809 king setMRHPSelect  trace 349 */
        setMRHPSelect : function(e) {
            return setMRHPSelect.call(this)
        },
        setPlaintextOnly : function(e) {
            return setPlaintextOnly.call(this)
        },
        setBarcode : function(e) {
//            e.size = e.size ? e.size : 14;
//			e.bWidth ? $("#" + e.id).attr("width",e.bWidth) : (e.bWidth = $("#" + e.id).width()-e.size);
//			e.bHeight ? $("#" + e.id).attr("height",e.bHeight) : (e.bHeight = $("#" + e.id).height()-e.size * 2); 
//			JsBarcode("img#"+e.id,  e.number, {displayValue: true,width:e.bWidth * 0.01 / 0.79  , height:e.bHeight ,fontSize:e.size});
//			$("#" + e.id).attr("name",e.name);
        	e.size = e.size ? e.size : 10;
        	e.space = e.space ? e.space : 4;
        	e.number = e.number.replace(/\*/g,"");
        	JsBarcode("img#"+e.id,  e.number, {displayValue: false,width:e.bWidth  , height:e.bHeight ,fontSize:e.size});
            $("p.imgId_Value").html("*"+e.number+"*").css({"font-size":e.size,"letterSpacing":e.space}) ;
            $("#" + e.id).attr("name",e.name);
        	return '';
        },
        noPoint:function(_this){
            $(_this).find(".sde-right").removeClass('sde-right-point');
        },
        unCheckControl: function() {
            O.call(this)
        },
        moveToControlPosition: function(e) {
            M.call(this, e)
        },
        /** 判断a节点中是否包含b节点
         * contains 方法支持情况：chrome+ firefox9+ ie5+, opera9.64+(估计从9.0+),safari5.1.7+
         */
        sdecontains : function (a, b, itself) {
            // 第一个节点是否包含第二个节点
            //contains 方法支持情况：chrome+ firefox9+ ie5+, opera9.64+(估计从9.0+),safari5.1.7+
            if(!a||!b){
                return true
            }
            if (itself && a == b) {
                return true
            }
            if (a.contains) {
                if (a.nodeType === 9) return true;
                return a.contains(b);
            } else if (a.compareDocumentPosition) {
                return !!(a.compareDocumentPosition(b) & 16);
            }
            while ((b = b.parentNode))
                if (a === b) return true;
            return false;
        },
        editorPalyer : function (){
            $('span.closex', parent.document).click(function(){
                $('div.videobox', parent.document).css("display","none");
                $('video.video-player', parent.document).trigger('pause');
            })
            $(document).on("click",'img.edui-upload-video',function(){
                var url = $(this).attr("_url");
                url = parent.window.SDE_CONFIG.WEB_URL+url;
                $('video.video-player', parent.document).attr({"src":url,"autoplay":"true"});
                $('div.videobox', parent.document).css("display","block").focus();
            })

            $("img").css("cursor","pointer");

            /*视频窗口添加拖拽功能--start nothing*/
            var $videobox = $('div.videobox', parent.document);
            $videobox.bind("mousedown",function(ev){
                var oevent = ev || event;
                var offsetX = $videobox.offset();
                var distanceX = oevent.clientX - offsetX.left;
                var distanceY = oevent.clientY - offsetX.top;
                $(document).bind("mousemove",function(ev){
                    var oevent = ev || event;
                    $videobox.css({
                        'left':oevent.clientX - distanceX  + 248 + 'px',
                        'top':oevent.clientY - distanceY + 400 + 'px'
                    })
                });
                $(parent.document).bind("mousemove",function(ev){
                    var oevent = ev || event;
                    $videobox.css({
                        'left':oevent.clientX - distanceX + 249 + 'px',
                        'top':oevent.clientY - distanceY + 249 + 'px'
                    })
                });

                $(document).bind("mouseup",function(ev){
                    $(document).unbind("mousemove mouseup");
                    $(parent.document).unbind("mousemove mouseup");
                });
                $(parent.document).bind("mouseup",function(ev){
                    $(parent.document).unbind("mousemove mouseup");
                    $(document).unbind("mousemove mouseup")
                });

            })
            /*视频窗口添加拖拽功能--end nothing*/
        },
        spaceEnsp:function(){
            $(".sde-value").on("keydown",function(e){
                var str1 = $(e.target).html();              //获取sde-value的内容
                var selection = parent.sde.__ue__.selection.getNative();
                var endContainer = selection.getRangeAt(0).endContainer;
                var str2 = endContainer.textContent;    //光标所在位置的内容
                if(e.keyCode == 32){
                    var spanzwj = $('<span>&ensp;</span>').text();
                    parent.sde.execCommand( 'inserthtml', spanzwj );
                    e.preventDefault;
                    return false;
                    /*
                    *修复回车]与内容不在一行问题--start Nothing 20180101
                    **/
                }else if(e.keyCode == 13){
                        if(endContainer.previousSibling)var prevStr = endContainer.previousSibling.nodeValue;
                        if(endContainer.nextSibling) var nextStr = endContainer.nextSibling.nodeValue;
                        if( str1.slice(-1) != " "){
                            var spanzwj = $('<span>&#8204;</span>').text();
                            parent.sde.execCommand( 'inserthtml', spanzwj );
                            selection.modify("move", "backward", "character");// 光标向前移动一格
                        }else if(str2.slice(-1) == " " && prevStr != "\n"){
                            selection.modify("move", "backward", "character");
                        }else if(str1.slice(-1) == " " && str2.slice(-1) == " " && selection.getRangeAt(0).endOffset == 1){
                            selection.modify("move", "backward", "character");// 光标向前移动一格
                        }
                }else if(e.keyCode == 8){
                    if(selection.anchorNode.length == 1 && selection.anchorNode.wholeText.length != 1){
                        var spanzwj = $('<span>&#8204;</span>').text();
                        parent.sde.execCommand( 'inserthtml', spanzwj );
                        selection.modify("move", "backward", "character");
                    }
                  /*  var arr = ["‌","‍","​"]
                    if(selection.anchorNode.length == 1 && arr.indexOf(selection.anchorNode.textContent) == -1 && selection.anchorNode.wholeText.length != 1 && selection.anchorNode.wholeText.indexOf(str) != -1){
                        var spanzwj = $('<span>&#8204;</span>').text();
                        parent.sde.execCommand( 'inserthtml', spanzwj );
                        selection.modify("move", "backward", "character");
                    }*/
                   /* if(str1.slice(-1) == " " && str2.slice(-1) == " " && selection.getRangeAt(0).endOffset == 1){
                        selection.modify("move", "backward", "character");// 光标向前移动一格
                    }*/
                }
                /*
                 *修复回车]与内容不在一行问题--end
                 **/
            })
        },
        pastePattern : function(){
            $(document).bind("keydown",function(e){
                if(e.keyCode == 113){
                    parent.sde.__ue__.execCommand( 'pasteplain');
                    var pasteState = parent.sde.__ue__.queryCommandState( 'pasteplain');
                    pasteState == 0 ? alert("带格式粘贴模式") : alert("纯文本粘贴模式");
                }
            })
        }, /**
         * No42.获取控件得分情况
         */
        getControlScore : function() {
            var json = {};
            var control_arr = this.getControl();
            if(!control_arr || control_arr.length==0) return '';
            for (var i in control_arr) {
                var control = control_arr[i];
                if (control == null || control == '') {continue;}
                //多选值
                if ($.isArray(control.VALUE)) {
                    var sum = 0;
                    for (var m = 0,len = control.VALUE.length; m < len; m++) {
                        sum += parseFloat(control.VALUE[m].VALUE);
                    }
                } else {
                    sum = parseFloat(control.VALUE);
                }
                var goal_code = control.ID?control.ID:control.CODE;
                json[goal_code] = sum;
            }
            return json;
        },
        /**
         *No43. 给控件加属性
         * 20180111 king 控件值变化时,自动计算表达式
         * */
        addPluginAttrByCode:function(params,code){
            if(!$.isArray(params)){
                params = [params];
            }
            for(var i in params){
                var param = params[i];
                if($.trim(param)){
                    var $p = $("#"+param);
                    var expS = $p.attr("expStr");
                    //去除重复的code
                    expS = expS+"|"+code;
                    var Arr = expS.split("|");
                    var sets = new Set(Arr);
                    var expArr = Array.from(sets);
                    $p.attr("expStr",expArr.join("|"));
                }
            }
            return params;
        },
        /**
         * No43. 创建Exp事件
         * 20180111 king 控件值变化时,自动计算表达式
         * */
        makeClickByExpStr:function(expStr){
            var expArrs;
            expStr = $.trim(expStr);
            if(!expStr)return ;
            expArrs = expStr.split("|");
            for(var st in expArrs){
                var expCode = expArrs[st];
                if(expCode==""||expCode==null||expCode==undefined||expCode=='undefined' ){continue}
                sde.clickEXPPlugin(expCode);//Exp事件
            }
            return expArrs;
        },
        /**
         * No43.1 Exp事件
         * 20180111 king 控件值变化时,自动计算表达式
         * */
        clickEXPPlugin:function(code){
            code = $.trim(code);
            if(!code)return ;
            var $this=$("#"+code);
            if($this.hasClass('sde-plugin-disabled'))return ;
                sde.noPoint($this);
                var $sv = $this.find(".sde-value");
                var json = JSON.parse($this.attr('sde-model'));
                var expshow = json.EXPSTR;
                if(parent.sde.isSDEExpStr(expshow)){
                    var score = parent.sde.getControlScore();
                    var replaceStr = parent.sde.expReplaceMath(expshow);
                    var expNum= eval( replaceStr );
                    if(typeof expNum=="number"){ expNum = expNum.toFixed(2)}
                    json.VALUE = expNum;
                    $this.attr('sde-model',JSON.stringify(json));
                    $sv.text(json.VALUE);
                }
            return $this;
        },/**
         * No44. 解析校验
         * 20180119 king  自动校验表达式
         * */
        analyCheck:function(param,val){
            var res={};//返回结果
            res.res=false;
            res.msg="";
            var str = typeof param =="string" ?$.trim(param):"";
            var checkVal = "";
            var patrn = /^[0-9]*$/;
            if (patrn.test(val)) {
                checkVal = parseFloat(val)
            }

            if(str==undefined || str=="")return res;
            //str="if(this>0){$hide('#conn') }else{ $show('#conn') }"
            //隐藏,显示表达式
            if(str.indexOf("if") >= 0 && str.indexOf("this") >= 0 && (str.indexOf("$hide") >= 0 || str.indexOf("$show") >= 0 )){
                str = str.replace(/this/g,"checkVal");
                str = str.replace(/\$hide/g,"sde.hideSDEPlugin");
                str = str.replace(/\$show/g,"sde.showSDEPlugin");
                var score ="";
                if(str.indexOf("$")>=0){
                    score = this.getControlScore();
                    str = str.replace(/\$/g,"score.");
                }
                var bo = eval(str);
                //eval("if(checkVal>0){sde.hideSDEPlugin('#conn2')}else{sde.showSDEPlugin('#conn2')}");
                if(typeof bo=="boolean") res.res=bo;
                res.msg="隐藏表达式";
                return res;
            }
            //str="if(this>0){$dis('#conn') }else{ $en('#conn') }"
            //禁用,启用表达式
            if(str.indexOf("if") >= 0 && str.indexOf("this") >= 0 && (str.indexOf("$dis") >= 0 || str.indexOf("$en") >= 0 )){
                str = str.replace(/this/g,"checkVal");
                str = str.replace(/\$dis/g,"sde.disSDEPlugin");
                str = str.replace(/\$en/g,"sde.enSDEPlugin");
                var score ="";
                if(str.indexOf("$")>=0){
                    score = this.getControlScore();
                    str = str.replace(/\$/g,"score.");
                }
                var bo = eval(str);
                //eval("if(checkVal>0){sde.hideSDEPlugin('#conn2')}else{sde.showSDEPlugin('#conn2')}");
                if(typeof bo=="boolean") res.res=bo;
                res.msg="禁用表达式";
                return res;
            }

            //如果是纯数字,限制字数

            if (patrn.test(str)) {
                var txtLength = val.length;
                if(txtLength >= parseFloat(str)){
                    res.res=true;
                    res.msg="限字数";
                }
            }else if((str.indexOf(">") >= 0 || str.indexOf("<") >= 0|| str.indexOf("=") >= 0 )&& (str.indexOf("RegExp") == -1 )){ //大于或者小于或者等于
                if(str.indexOf("$") >= 0 ){//获取控件值
                    str = str.replace(/\$/g,"score.");
                    var score = this.getControlScore();
                    res.res  = eval("checkVal "+str+"");
                }else {//获取控件值
                    res.res  = eval("checkVal "+str+"");
                }
                res.msg="大小等于";
            }

            if(str.indexOf("RegExp") >= 0 ){ //正则表达式
               var regexp=eval("new "+str+"");
                res.res = regexp.test(val);
                res.msg="正则表达式";
            }
            console.log("检验结果:"+JSON.stringify(res));
            return res;
        },
        /**
         * No45.删除sde元素
         */
        removeSDE : function(param) {
            var resArr = [];
            var params = [];
            !Array.isArray(params) ? params.push(param) : params = params.concat(param);
            for ( var i = 0, pl = params.length; i < pl; i++) {
                resArr.push($(params[i]).remove());
            }
            return resArr;
        },
        /**
         * No45.1 隐藏sde元素
         */
        hideSDE : function(param) {
            var params = [];
            var resArr = [];
            !Array.isArray(params) ? params.push(param) : params = params.concat(param);
            for ( var i = 0, pl = params.length; i < pl; i++) {
                resArr.push($(params[i]).hide());
            }
            return resArr;
        },
        /**
         * No45.2 显示sde元素
         */
        showSDE : function(param) {
            var params = [];
            var resArr = [];
            !Array.isArray(params) ? params.push(param) : params = params.concat(param);
            for ( var i = 0, pl = params.length; i < pl; i++) {
                resArr.push($(params[i]).show());
            }
            return resArr;
        },
        /**
         * No45.3 添加sde属性
         */
        attrSDE : function(param,attr,attrVal) {
            var params = [];
            var resArr = [];
            !Array.isArray(params) ? params.push(param) : params = params.concat(param);
            for ( var i = 0, pl = params.length; i < pl; i++) {
                resArr.push($(params[i]).attr(attr,attrVal));
            }
            return resArr;
        },
        /**
         * No45.4 删除sde属性
         */
        removeAttrSDE : function(param,attr) {
            var params = [];
            var resArr = [];
            !Array.isArray(params) ? params.push(param) : params = params.concat(param);
            for ( var i = 0, pl = params.length; i < pl; i++) {
                resArr.push($(params[i]).removeAttr(attr));
            }
            return resArr;
        },
        /**
         * No45.5 添加sde的class样式
         */
        addClassSDE : function(param,_class) {
            var params = [];
            var resArr = [];
            !Array.isArray(params) ? params.push(param) : params = params.concat(param);
            for ( var i = 0, pl = params.length; i < pl; i++) {
                resArr.push($(params[i]).addClass(_class));
            }
            return resArr;
        },
        /**
         * No45.6 删除sde的class样式
         */
        removeClassSDE : function(param,_class) {
            var params = [];
            var resArr = [];
            !Array.isArray(params) ? params.push(param) : params = params.concat(param);
            for ( var i = 0, pl = params.length; i < pl; i++) {
                resArr.push($(params[i]).removeClass(_class));
            }
            return resArr;
        }
        ,
        /**
         * No45.7 添加sde的css
         */
        cssSDE : function(param,_css) {
            var params = [];
            var resArr = [];
            !Array.isArray(params) ? params.push(param) : params = params.concat(param);
            for ( var i = 0, pl = params.length; i < pl; i++) {
                resArr.push($(params[i]).css(_css));
            }
            return resArr;
        }

    },
/*-----------sdejiekou 接口 end-----------😊 请在我上边加接口 😊-------------------------*/
            window.sdeoptions) {
        var V = new SDE(window.sdeoptions);
        window.sde = V,
        void 0 !== window.__ready__ && window.__ready__()
    }
},
function(e, t, n) {
    t = e.exports = n(2)(),
    t.push([e.i, '.flatpickr-calendar{background:transparent;overflow:hidden;max-height:0;opacity:0;visibility:hidden;text-align:center;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:315px;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation;box-shadow:0 3px 13px rgba(0,0,0,.08)}.flatpickr-calendar.inline,.flatpickr-calendar.open{opacity:1;visibility:visible;overflow:visible;max-height:640px}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown .3s cubic-bezier(.23,1,.32,1);animation:fpFadeInDown .3s cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px)}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.hasWeeks{width:auto}.flatpickr-calendar .hasTime .dayContainer,.flatpickr-calendar .hasWeeks .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time{height:40px;border-top:1px solid rgba(72,72,72,.2)}.flatpickr-calendar.showTimeInput.hasTime .flatpickr-innerContainer{border-bottom:0}.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time{border:1px solid rgba(72,72,72,.2)}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:after,.flatpickr-calendar:before{position:absolute;display:block;pointer-events:none;border:solid transparent;content:"";height:0;width:0;left:22px}.flatpickr-calendar.rightMost:after,.flatpickr-calendar.rightMost:before{left:auto;right:22px}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:after,.flatpickr-calendar.arrowTop:before{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:rgba(72,72,72,.2)}.flatpickr-calendar.arrowTop:after{border-bottom-color:#42a5f5}.flatpickr-calendar.arrowBottom:after,.flatpickr-calendar.arrowBottom:before{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:rgba(72,72,72,.2)}.flatpickr-calendar.arrowBottom:after{border-top-color:#42a5f5}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-month{border-radius:5px 5px 0 0;background:#42a5f5;color:#fff;fill:#fff;height:28px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden}.flatpickr-next-month,.flatpickr-prev-month{text-decoration:none;cursor:pointer;position:absolute;top:0;line-height:16px;height:28px;padding:10px calc(3.57% - 1.5px);z-index:3}.flatpickr-next-month i,.flatpickr-prev-month i{position:relative}.flatpickr-next-month.flatpickr-prev-month,.flatpickr-prev-month.flatpickr-prev-month{left:0}.flatpickr-next-month.flatpickr-next-month,.flatpickr-prev-month.flatpickr-next-month{right:0}.flatpickr-next-month:hover,.flatpickr-prev-month:hover{color:#bbb}.flatpickr-next-month:hover svg,.flatpickr-prev-month:hover svg{fill:#f64747}.flatpickr-next-month svg,.flatpickr-prev-month svg{width:14px}.flatpickr-next-month svg path,.flatpickr-prev-month svg path{transition:fill .1s;fill:inherit}.numInputWrapper{position:relative;height:auto}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(72,72,72,.05);box-sizing:border-box}.numInputWrapper span:hover{background:rgba(0,0,0,.1)}.numInputWrapper span:active{background:rgba(0,0,0,.2)}.numInputWrapper span:after{display:block;content:"";position:absolute;top:33%}.numInputWrapper span.arrowUp{top:0;border-bottom:0}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(72,72,72,.6)}.numInputWrapper span.arrowDown{top:50%}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(72,72,72,.6)}.numInputWrapper span svg{width:inherit;height:auto}.numInputWrapper span svg path{fill:hsla(0,0%,100%,.5)}.numInputWrapper:hover{background:rgba(0,0,0,.05)}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:6.16px 0 0;line-height:1;height:28px;display:inline-block;text-align:center;-webkit-transform:translateZ(0);transform:translateZ(0)}.flatpickr-current-month.slideLeft{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);-webkit-animation:fpFadeOut .4s ease,fpSlideLeft .4s cubic-bezier(.23,1,.32,1);animation:fpFadeOut .4s ease,fpSlideLeft .4s cubic-bezier(.23,1,.32,1)}.flatpickr-current-month.slideLeftNew{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);-webkit-animation:fpFadeIn .4s ease,fpSlideLeftNew .4s cubic-bezier(.23,1,.32,1);animation:fpFadeIn .4s ease,fpSlideLeftNew .4s cubic-bezier(.23,1,.32,1)}.flatpickr-current-month.slideRight{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);-webkit-animation:fpFadeOut .4s ease,fpSlideRight .4s cubic-bezier(.23,1,.32,1);animation:fpFadeOut .4s ease,fpSlideRight .4s cubic-bezier(.23,1,.32,1)}.flatpickr-current-month.slideRightNew{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:fpFadeIn .4s ease,fpSlideRightNew .4s cubic-bezier(.23,1,.32,1);animation:fpFadeIn .4s ease,fpSlideRightNew .4s cubic-bezier(.23,1,.32,1)}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:.5ch;padding:0}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\0;display:inline-block}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:#fff}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:#fff}.flatpickr-current-month input.cur-year{background:transparent;box-sizing:border-box;color:inherit;cursor:default;padding:0 0 0 .5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:hsla(0,0%,100%,.5);background:transparent;pointer-events:none}.flatpickr-weekdays{background:#42a5f5;text-align:center;overflow:hidden;width:315px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:28px}span.flatpickr-weekday{cursor:default;font-size:90%;background:#42a5f5;color:rgba(0,0,0,.54);line-height:1;margin:0;text-align:center;display:block;-ms-flex:1;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0}.flatpickr-days{position:relative;overflow:hidden;display:-ms-flexbox;display:flex;width:315px;border-left:1px solid rgba(72,72,72,.2);border-right:1px solid rgba(72,72,72,.2)}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:315px;min-width:315px;max-width:315px;box-sizing:border-box;display:inline-block;display:-ms-flexbox;display:flex;flex-wrap:wrap;-ms-flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-around;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}.flatpickr-calendar.animate .dayContainer.slideLeft{-webkit-animation:fpFadeOut .4s cubic-bezier(.23,1,.32,1),fpSlideLeft .4s cubic-bezier(.23,1,.32,1);animation:fpFadeOut .4s cubic-bezier(.23,1,.32,1),fpSlideLeft .4s cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.animate .dayContainer.slideLeft,.flatpickr-calendar.animate .dayContainer.slideLeftNew{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.flatpickr-calendar.animate .dayContainer.slideLeftNew{-webkit-animation:fpFadeIn .4s cubic-bezier(.23,1,.32,1),fpSlideLeft .4s cubic-bezier(.23,1,.32,1);animation:fpFadeIn .4s cubic-bezier(.23,1,.32,1),fpSlideLeft .4s cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.animate .dayContainer.slideRight{-webkit-animation:fpFadeOut .4s cubic-bezier(.23,1,.32,1),fpSlideRight .4s cubic-bezier(.23,1,.32,1);animation:fpFadeOut .4s cubic-bezier(.23,1,.32,1),fpSlideRight .4s cubic-bezier(.23,1,.32,1);-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.flatpickr-calendar.animate .dayContainer.slideRightNew{-webkit-animation:fpFadeIn .4s cubic-bezier(.23,1,.32,1),fpSlideRightNew .4s cubic-bezier(.23,1,.32,1);animation:fpFadeIn .4s cubic-bezier(.23,1,.32,1),fpSlideRightNew .4s cubic-bezier(.23,1,.32,1)}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;box-sizing:border-box;color:#484848;cursor:pointer;font-weight:400;width:14.2857143%;-ms-flex-preferred-size:14.2857143%;flex-basis:14.2857143%;max-width:40px;height:40px;line-height:40px;margin:0;display:inline-block;position:relative;-ms-flex-pack:center;justify-content:center;text-align:center}.flatpickr-day.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day.nextMonthDay:focus,.flatpickr-day.nextMonthDay:hover,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.today.inRange,.flatpickr-day:focus,.flatpickr-day:hover{cursor:pointer;outline:0;background:#e2e2e2;border-color:#e2e2e2}.flatpickr-day.today{border-color:#bbb}.flatpickr-day.today:focus,.flatpickr-day.today:hover{border-color:#bbb;background:#bbb;color:#fff}.flatpickr-day.endRange,.flatpickr-day.endRange.inRange,.flatpickr-day.endRange.nextMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.endRange:focus,.flatpickr-day.endRange:hover,.flatpickr-day.selected,.flatpickr-day.selected.inRange,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.selected:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange,.flatpickr-day.startRange.inRange,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.startRange:focus,.flatpickr-day.startRange:hover{background:#42a5f5;box-shadow:none;color:#fff;border-color:#42a5f5}.flatpickr-day.endRange.startRange,.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.endRange.endRange,.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.endRange.startRange+.endRange,.flatpickr-day.selected.startRange+.endRange,.flatpickr-day.startRange.startRange+.endRange{box-shadow:-10px 0 0 #42a5f5}.flatpickr-day.endRange.startRange.endRange,.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;box-shadow:-5px 0 0 #e2e2e2,5px 0 0 #e2e2e2}.flatpickr-day.disabled,.flatpickr-day.disabled:hover{pointer-events:none}.flatpickr-day.disabled,.flatpickr-day.disabled:hover,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.nextMonthDay,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.prevMonthDay{color:rgba(72,72,72,.3);background:transparent;border-color:transparent;cursor:default}.flatpickr-day.week.selected{border-radius:0;box-shadow:-5px 0 0 #42a5f5,5px 0 0 #42a5f5}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{display:inline-block;float:left}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;border-left:1px solid rgba(72,72,72,.2)}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day{display:block;width:100%;max-width:none}.flatpickr-innerContainer{display:block;display:-ms-flexbox;display:flex;box-sizing:border-box;overflow:hidden;background:#fff;border-bottom:1px solid rgba(72,72,72,.2)}.flatpickr-rContainer{display:inline-block;padding:0;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;box-sizing:border-box;overflow:hidden;display:-ms-flexbox;display:flex;background:#fff;border-radius:0 0 5px 5px}.flatpickr-time:after{content:"";display:table;clear:both}.flatpickr-time .numInputWrapper{-ms-flex:1;flex:1;width:40%;height:40px;float:left}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#484848}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#484848}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;cursor:pointer;color:#484848;font-size:14px;position:relative;box-sizing:border-box}.flatpickr-time input.flatpickr-hour{font-weight:700}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-am-pm,.flatpickr-time .flatpickr-time-separator{height:inherit;display:inline-block;float:left;line-height:inherit;color:#484848;font-weight:700;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time .flatpickr-am-pm:focus,.flatpickr-time .flatpickr-am-pm:hover{background:#ececec}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fpFadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fpSlideLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes fpSlideLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@-webkit-keyframes fpSlideLeftNew{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fpSlideLeftNew{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fpSlideRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes fpSlideRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@-webkit-keyframes fpSlideRightNew{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fpSlideRightNew{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fpFadeOut{0%{opacity:1}to{opacity:0}}@keyframes fpFadeOut{0%{opacity:1}to{opacity:0}}@-webkit-keyframes fpFadeIn{0%{opacity:0}to{opacity:1}}@keyframes fpFadeIn{0%{opacity:0}to{opacity:1}}', ""])
},
function(e, t, n) {
    t = e.exports = n(2)(),
    t.push([e.i, '@-webkit-keyframes medium-editor-image-loading{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes medium-editor-image-loading{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes medium-editor-pop-upwards{0%{opacity:0;-webkit-transform:matrix(.97,0,0,1,0,12);transform:matrix(.97,0,0,1,0,12)}20%{opacity:.7;-webkit-transform:matrix(.99,0,0,1,0,2);transform:matrix(.99,0,0,1,0,2)}40%{opacity:1;-webkit-transform:matrix(1,0,0,1,0,-1);transform:matrix(1,0,0,1,0,-1)}to{-webkit-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}}@keyframes medium-editor-pop-upwards{0%{opacity:0;-webkit-transform:matrix(.97,0,0,1,0,12);transform:matrix(.97,0,0,1,0,12)}20%{opacity:.7;-webkit-transform:matrix(.99,0,0,1,0,2);transform:matrix(.99,0,0,1,0,2)}40%{opacity:1;-webkit-transform:matrix(1,0,0,1,0,-1);transform:matrix(1,0,0,1,0,-1)}to{-webkit-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}}.medium-editor-anchor-preview{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;left:0;line-height:1.4;max-width:280px;position:absolute;text-align:center;top:0;word-break:break-all;word-wrap:break-word;visibility:hidden;z-index:2000}.medium-editor-anchor-preview a{color:#fff;display:inline-block;margin:5px 5px 10px}.medium-editor-anchor-preview-active{visibility:visible}.medium-editor-dragover{background:#ddd}.medium-editor-image-loading{-webkit-animation:medium-editor-image-loading 1s infinite ease-in-out;animation:medium-editor-image-loading 1s infinite ease-in-out;background-color:#333;border-radius:100%;display:inline-block;height:40px;width:40px}.medium-editor-placeholder{position:relative}.medium-editor-placeholder:after{content:attr(data-placeholder)!important;font-style:italic;position:absolute;left:0;top:0;white-space:pre;padding:inherit;margin:inherit}.medium-editor-placeholder-relative{position:relative}.medium-editor-placeholder-relative:after{content:attr(data-placeholder)!important;font-style:italic;position:relative;white-space:pre;padding:inherit;margin:inherit}.medium-toolbar-arrow-over:before,.medium-toolbar-arrow-under:after{border-style:solid;content:"";display:block;height:0;left:50%;margin-left:-8px;position:absolute;width:0}.medium-toolbar-arrow-under:after{border-width:8px 8px 0}.medium-toolbar-arrow-over:before{border-width:0 8px 8px;top:-8px}.medium-editor-toolbar{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;left:0;position:absolute;top:0;visibility:hidden;z-index:2000}.medium-editor-toolbar ul{margin:0;padding:0}.medium-editor-toolbar li{float:left;list-style:none;margin:0;padding:0}.medium-editor-toolbar li button{box-sizing:border-box;cursor:pointer;display:block;font-size:14px;line-height:1.33;margin:0;padding:15px;text-decoration:none}.medium-editor-toolbar li button:focus{outline:none}.medium-editor-toolbar li .medium-editor-action-underline{text-decoration:underline}.medium-editor-toolbar li .medium-editor-action-pre{font-family:Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:12px;font-weight:100;padding:15px 0}.medium-editor-toolbar-active{visibility:visible}.medium-editor-sticky-toolbar{position:fixed;top:1px}.medium-editor-relative-toolbar{position:relative}.medium-editor-toolbar-active.medium-editor-stalker-toolbar{-webkit-animation:medium-editor-pop-upwards .16s forwards linear;animation:medium-editor-pop-upwards .16s forwards linear}.medium-editor-action-bold{font-weight:bolder}.medium-editor-action-italic{font-style:italic}.medium-editor-toolbar-form{display:none}.medium-editor-toolbar-form a,.medium-editor-toolbar-form input{font-family:Helvetica Neue,Helvetica,Arial,sans-serif}.medium-editor-toolbar-form .medium-editor-toolbar-form-row{line-height:14px;margin-left:5px;padding-bottom:5px}.medium-editor-toolbar-form .medium-editor-toolbar-input,.medium-editor-toolbar-form label{border:none;box-sizing:border-box;font-size:14px;margin:0;padding:6px;width:316px;display:inline-block}.medium-editor-toolbar-form .medium-editor-toolbar-input:focus,.medium-editor-toolbar-form label:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;box-shadow:none;outline:0}.medium-editor-toolbar-form a{display:inline-block;font-size:24px;font-weight:bolder;margin:0 10px;text-decoration:none}.medium-editor-toolbar-form-active{display:block}.medium-editor-toolbar-actions:after{clear:both;content:"";display:table}.medium-editor-element{word-wrap:break-word;min-height:30px}.medium-editor-element img{max-width:100%}.medium-editor-element sub{vertical-align:sub}.medium-editor-element sup{vertical-align:super}.medium-editor-hidden{display:none}', ""])
},
function(e, t, n) {
    t = e.exports = n(2)(),
    t.push([e.i, ".medium-toolbar-arrow-under:after{border-color:#242424 transparent transparent;top:50px}.medium-toolbar-arrow-over:before{border-color:transparent transparent #242424;top:-8px}.medium-editor-toolbar{background-color:#242424;background:linear-gradient(180deg,#242424,rgba(36,36,36,.75));border:1px solid #000;border-radius:5px;box-shadow:0 0 3px #000}.medium-editor-toolbar li button{background-color:#242424;background:linear-gradient(180deg,#242424,rgba(36,36,36,.89));border:0;border-right:1px solid #000;border-left:1px solid #333;border-left:1px solid hsla(0,0%,100%,.1);box-shadow:0 2px 2px rgba(0,0,0,.3);color:#fff;height:50px;min-width:50px;transition:background-color .2s ease-in}.medium-editor-toolbar li button:hover{background-color:#000;color:#ff0}.medium-editor-toolbar li .medium-editor-button-first{border-bottom-left-radius:5px;border-top-left-radius:5px}.medium-editor-toolbar li .medium-editor-button-last{border-bottom-right-radius:5px;border-top-right-radius:5px}.medium-editor-toolbar li .medium-editor-button-active{background-color:#000;background:linear-gradient(180deg,#242424,rgba(0,0,0,.89));color:#fff}.medium-editor-toolbar-form{background:#242424;border-radius:5px;color:#999}.medium-editor-toolbar-form .medium-editor-toolbar-input{background:#242424;box-sizing:border-box;color:#ccc;height:50px}.medium-editor-toolbar-form a{color:#fff}.medium-editor-toolbar-anchor-preview{background:#242424;border-radius:5px;color:#fff}.medium-editor-placeholder:after{color:#b3b3b1}", ""])
},
, , , ,
function(e, t, n) {
    t = e.exports = n(2)(),
    t.push([e.i, '.mobileSelect{position:relative;z-index:0;opacity:0;visibility:hidden;transition:all .4s}.mobileSelect .grayLayer{position:fixed;top:0;left:0;bottom:0;right:0;background:#eee;background:rgba(0,0,0,.7);z-index:888;display:block}.mobileSelect .content{width:100%;display:block;position:fixed;z-index:889;color:#000;transition:all .4s;bottom:-350px;left:0;background:#fff}.mobileSelect .content .fixWidth{width:90%;margin:0 auto;position:relative}.mobileSelect .content .fixWidth:after{content:".";display:block;height:0;clear:both;visibility:hidden}.mobileSelect .content .btnBar{border-bottom:1px solid #dcdcdc;font-size:15px;height:45px;position:relative;text-align:center;line-height:45px}.mobileSelect .content .btnBar .cancel,.mobileSelect .content .btnBar .ensure{height:45px;width:55px;cursor:pointer;position:absolute;top:0}.mobileSelect .content .btnBar .cancel{left:0;color:#666}.mobileSelect .content .btnBar .ensure{right:0;color:#1e83d3}.mobileSelect .content .btnBar .title{font-size:15px}.mobileSelect .content .panel:after{content:".";display:block;height:0;clear:both;visibility:hidden}.mobileSelect .content .panel .wheels{width:100%;height:200px;overflow:hidden}.mobileSelect .content .panel .wheel{position:relative;z-index:0;float:left;width:50%;height:200px;overflow:hidden;transition:width .3s ease}.mobileSelect .content .panel .wheel .selectContainer{display:block;text-align:center;transition:-webkit-transform .18s ease-out;transition:transform .18s ease-out;transition:transform .18s ease-out,-webkit-transform .18s ease-out;padding-left:0;margin-top:0;padding-top:0}.mobileSelect .content .panel .wheel .selectContainer li{font-size:15px;display:block;height:40px;line-height:40px;cursor:pointer;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.mobileSelect .content .panel .selectLine{height:40px;width:100%;position:absolute;top:80px;pointer-events:none;box-sizing:border-box;border-top:1px solid #dcdcdc;border-bottom:1px solid #dcdcdc}.mobileSelect .content .panel .shadowMask{position:absolute;top:0;width:100%;height:200px;background:linear-gradient(180deg,#fff,hsla(0,0%,100%,0),#fff);opacity:.9;pointer-events:none}.mobileSelect-show{opacity:1;z-index:10000;visibility:visible}.mobileSelect-show .content{bottom:0}', ""])
},
function(e, t, n) {
    var sde_bg = '';
    if(parent.window.SDE_CONFIG.IS_SDE_BG && parent.window.SDE_CONFIG.IS_SDE_BG==='1'){
        sde_bg = '.sde-bg{background-color:#f0f8ff}.sde-bg:hover{background-color:#add8e6}';
    }
    var sde_margin = '.sde-left,.sde-right{margin:0 3px;padding:0 3px;color:#0000FF}';
    if (parent.window.SDE_CONFIG.IS_SDE_MARGIN && parent.window.SDE_CONFIG.IS_SDE_MARGIN === '0') {
        sde_margin = '.sde-left{margin:0;padding-right:6px}.sde-right{margin:0;padding-left:6px}span[sde-model]{margin:0 6px;}';
}
    var SETPMARGIN="margin:5px 0;";
    SETPMARGIN = parent.window.SDE_CONFIG.SETPMARGIN || "";
    t = e.exports = n(2)(),
        t.push([e.i, '.sde-editor .view{padding:0;word-wrap:break-word;cursor:text;height:90%}.sde-editor body{margin:8px;font-family:sans-serif;font-size:16px}.sde-editor p{'+SETPMARGIN+'}.sde-editor table.sortEnabled tr.firstRow td,.sde-editor table.sortEnabled tr.firstRow th{padding-right:20px;background-repeat:no-repeat;background-position:100%;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAJCAYAAADtj3ZXAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABQSURBVHjanJFLCgAgCAXnRWf1Tp62VoEEZTYbCRzzIzMjMACth7tzo21ijCntIIxX+ZSYFuhxxio9+UFZ2/oR48JUFfdTqSICTAAAAP//AwDsFAsUChM52wAAAABJRU5ErkJggg==")}.sde-editor .selectTdClass{background-color:#edf5fa!important}.sde-editor table.noBorderTable caption,.sde-editor table.noBorderTable td,.sde-editor table.noBorderTable th{border:1px dashed #ddd!important}.sde-editor table{margin-bottom:10px;border-collapse:collapse;display:table}.sde-editor td,.sde-editor th{padding:5px 10px;border:1px solid #ddd}.sde-editor caption{border:1px dashed #ddd;border-bottom:0;padding:3px;text-align:center}.sde-editor th{border-top:1px solid #bbb;background-color:#f7f7f7}.sde-editor table tr.firstRow th{border-top-width:2px}.sde-editor .ue-table-interlace-color-single{background-color:#fcfcfc}.sde-editor .ue-table-interlace-color-double{background-color:#f7faff}.sde-editor td p{margin:0;padding:0}.sde-editor .pagebreak{display:block;clear:both!important;cursor:default!important;width:100%!important;margin:0}.sde-editor pre{margin:.5em 0;padding:.4em .6em;border-radius:8px;background:#f8f8f8}.sde-editor .loadingclass{background:url("http://ueditor.baidu.com/ueditor/themes/default/images/loading.gif") no-repeat 50% transparent;margin-left:1px}.sde-editor .loaderrorclass,.sde-editor .loadingclass{display:inline-block;cursor:default;border:1px solid #ccc;height:22px;width:22px}.sde-editor .loaderrorclass{background:url("http://ueditor.baidu.com/ueditor/themes/default/images/loaderror.png") no-repeat 50% transparent;margin-right:1px}.sde-editor ol,.sde-editor ul{margin:0;pading:0;width:100%}.sde-editor li{clear:both}.sde-editor li.list-cn-1-0{background-image:url(http://bs.baidu.com/listicon/list-cn-1-0.gif)}.sde-editor li.list-cn-1-1{background-image:url(http://bs.baidu.com/listicon/list-cn-1-1.gif)}.sde-editor li.list-cn-1-2{background-image:url(http://bs.baidu.com/listicon/list-cn-1-2.gif)}.sde-editor li.list-cn-1-3{background-image:url(http://bs.baidu.com/listicon/list-cn-1-3.gif)}.sde-editor li.list-cn-1-4{background-image:url(http://bs.baidu.com/listicon/list-cn-1-4.gif)}.sde-editor li.list-cn-1-5{background-image:url(http://bs.baidu.com/listicon/list-cn-1-5.gif)}.sde-editor li.list-cn-1-6{background-image:url(http://bs.baidu.com/listicon/list-cn-1-6.gif)}.sde-editor li.list-cn-1-7{background-image:url(http://bs.baidu.com/listicon/list-cn-1-7.gif)}.sde-editor li.list-cn-1-8{background-image:url(http://bs.baidu.com/listicon/list-cn-1-8.gif)}.sde-editor li.list-cn-1-9{background-image:url(http://bs.baidu.com/listicon/list-cn-1-9.gif)}.sde-editor li.list-cn-1-10{background-image:url(http://bs.baidu.com/listicon/list-cn-1-10.gif)}.sde-editor li.list-cn-1-11{background-image:url(http://bs.baidu.com/listicon/list-cn-1-11.gif)}.sde-editor li.list-cn-1-12{background-image:url(http://bs.baidu.com/listicon/list-cn-1-12.gif)}.sde-editor li.list-cn-1-13{background-image:url(http://bs.baidu.com/listicon/list-cn-1-13.gif)}.sde-editor li.list-cn-1-14{background-image:url(http://bs.baidu.com/listicon/list-cn-1-14.gif)}.sde-editor li.list-cn-1-15{background-image:url(http://bs.baidu.com/listicon/list-cn-1-15.gif)}.sde-editor li.list-cn-1-16{background-image:url(http://bs.baidu.com/listicon/list-cn-1-16.gif)}.sde-editor li.list-cn-1-17{background-image:url(http://bs.baidu.com/listicon/list-cn-1-17.gif)}.sde-editor li.list-cn-1-18{background-image:url(http://bs.baidu.com/listicon/list-cn-1-18.gif)}.sde-editor li.list-cn-1-19{background-image:url(http://bs.baidu.com/listicon/list-cn-1-19.gif)}.sde-editor li.list-cn-1-20{background-image:url(http://bs.baidu.com/listicon/list-cn-1-20.gif)}.sde-editor li.list-cn-1-21{background-image:url(http://bs.baidu.com/listicon/list-cn-1-21.gif)}.sde-editor li.list-cn-1-22{background-image:url(http://bs.baidu.com/listicon/list-cn-1-22.gif)}.sde-editor li.list-cn-1-23{background-image:url(http://bs.baidu.com/listicon/list-cn-1-23.gif)}.sde-editor li.list-cn-1-24{background-image:url(http://bs.baidu.com/listicon/list-cn-1-24.gif)}.sde-editor li.list-cn-1-25{background-image:url(http://bs.baidu.com/listicon/list-cn-1-25.gif)}.sde-editor li.list-cn-1-26{background-image:url(http://bs.baidu.com/listicon/list-cn-1-26.gif)}.sde-editor li.list-cn-1-27{background-image:url(http://bs.baidu.com/listicon/list-cn-1-27.gif)}.sde-editor li.list-cn-1-28{background-image:url(http://bs.baidu.com/listicon/list-cn-1-28.gif)}.sde-editor li.list-cn-1-29{background-image:url(http://bs.baidu.com/listicon/list-cn-1-29.gif)}.sde-editor li.list-cn-1-30{background-image:url(http://bs.baidu.com/listicon/list-cn-1-30.gif)}.sde-editor li.list-cn-1-31{background-image:url(http://bs.baidu.com/listicon/list-cn-1-31.gif)}.sde-editor li.list-cn-1-32{background-image:url(http://bs.baidu.com/listicon/list-cn-1-32.gif)}.sde-editor li.list-cn-1-33{background-image:url(http://bs.baidu.com/listicon/list-cn-1-33.gif)}.sde-editor li.list-cn-1-34{background-image:url(http://bs.baidu.com/listicon/list-cn-1-34.gif)}.sde-editor li.list-cn-1-35{background-image:url(http://bs.baidu.com/listicon/list-cn-1-35.gif)}.sde-editor li.list-cn-1-36{background-image:url(http://bs.baidu.com/listicon/list-cn-1-36.gif)}.sde-editor li.list-cn-1-37{background-image:url(http://bs.baidu.com/listicon/list-cn-1-37.gif)}.sde-editor li.list-cn-1-38{background-image:url(http://bs.baidu.com/listicon/list-cn-1-38.gif)}.sde-editor li.list-cn-1-39{background-image:url(http://bs.baidu.com/listicon/list-cn-1-39.gif)}.sde-editor li.list-cn-1-40{background-image:url(http://bs.baidu.com/listicon/list-cn-1-40.gif)}.sde-editor li.list-cn-1-41{background-image:url(http://bs.baidu.com/listicon/list-cn-1-41.gif)}.sde-editor li.list-cn-1-42{background-image:url(http://bs.baidu.com/listicon/list-cn-1-42.gif)}.sde-editor li.list-cn-1-43{background-image:url(http://bs.baidu.com/listicon/list-cn-1-43.gif)}.sde-editor li.list-cn-1-44{background-image:url(http://bs.baidu.com/listicon/list-cn-1-44.gif)}.sde-editor li.list-cn-1-45{background-image:url(http://bs.baidu.com/listicon/list-cn-1-45.gif)}.sde-editor li.list-cn-1-46{background-image:url(http://bs.baidu.com/listicon/list-cn-1-46.gif)}.sde-editor li.list-cn-1-47{background-image:url(http://bs.baidu.com/listicon/list-cn-1-47.gif)}.sde-editor li.list-cn-1-48{background-image:url(http://bs.baidu.com/listicon/list-cn-1-48.gif)}.sde-editor li.list-cn-1-49{background-image:url(http://bs.baidu.com/listicon/list-cn-1-49.gif)}.sde-editor li.list-cn-1-50{background-image:url(http://bs.baidu.com/listicon/list-cn-1-50.gif)}.sde-editor li.list-cn-1-51{background-image:url(http://bs.baidu.com/listicon/list-cn-1-51.gif)}.sde-editor li.list-cn-1-52{background-image:url(http://bs.baidu.com/listicon/list-cn-1-52.gif)}.sde-editor li.list-cn-1-53{background-image:url(http://bs.baidu.com/listicon/list-cn-1-53.gif)}.sde-editor li.list-cn-1-54{background-image:url(http://bs.baidu.com/listicon/list-cn-1-54.gif)}.sde-editor li.list-cn-1-55{background-image:url(http://bs.baidu.com/listicon/list-cn-1-55.gif)}.sde-editor li.list-cn-1-56{background-image:url(http://bs.baidu.com/listicon/list-cn-1-56.gif)}.sde-editor li.list-cn-1-57{background-image:url(http://bs.baidu.com/listicon/list-cn-1-57.gif)}.sde-editor li.list-cn-1-58{background-image:url(http://bs.baidu.com/listicon/list-cn-1-58.gif)}.sde-editor li.list-cn-1-59{background-image:url(http://bs.baidu.com/listicon/list-cn-1-59.gif)}.sde-editor li.list-cn-1-60{background-image:url(http://bs.baidu.com/listicon/list-cn-1-60.gif)}.sde-editor li.list-cn-1-61{background-image:url(http://bs.baidu.com/listicon/list-cn-1-61.gif)}.sde-editor li.list-cn-1-62{background-image:url(http://bs.baidu.com/listicon/list-cn-1-62.gif)}.sde-editor li.list-cn-1-63{background-image:url(http://bs.baidu.com/listicon/list-cn-1-63.gif)}.sde-editor li.list-cn-1-64{background-image:url(http://bs.baidu.com/listicon/list-cn-1-64.gif)}.sde-editor li.list-cn-1-65{background-image:url(http://bs.baidu.com/listicon/list-cn-1-65.gif)}.sde-editor li.list-cn-1-66{background-image:url(http://bs.baidu.com/listicon/list-cn-1-66.gif)}.sde-editor li.list-cn-1-67{background-image:url(http://bs.baidu.com/listicon/list-cn-1-67.gif)}.sde-editor li.list-cn-1-68{background-image:url(http://bs.baidu.com/listicon/list-cn-1-68.gif)}.sde-editor li.list-cn-1-69{background-image:url(http://bs.baidu.com/listicon/list-cn-1-69.gif)}.sde-editor li.list-cn-1-70{background-image:url(http://bs.baidu.com/listicon/list-cn-1-70.gif)}.sde-editor li.list-cn-1-71{background-image:url(http://bs.baidu.com/listicon/list-cn-1-71.gif)}.sde-editor li.list-cn-1-72{background-image:url(http://bs.baidu.com/listicon/list-cn-1-72.gif)}.sde-editor li.list-cn-1-73{background-image:url(http://bs.baidu.com/listicon/list-cn-1-73.gif)}.sde-editor li.list-cn-1-74{background-image:url(http://bs.baidu.com/listicon/list-cn-1-74.gif)}.sde-editor li.list-cn-1-75{background-image:url(http://bs.baidu.com/listicon/list-cn-1-75.gif)}.sde-editor li.list-cn-1-76{background-image:url(http://bs.baidu.com/listicon/list-cn-1-76.gif)}.sde-editor li.list-cn-1-77{background-image:url(http://bs.baidu.com/listicon/list-cn-1-77.gif)}.sde-editor li.list-cn-1-78{background-image:url(http://bs.baidu.com/listicon/list-cn-1-78.gif)}.sde-editor li.list-cn-1-79{background-image:url(http://bs.baidu.com/listicon/list-cn-1-79.gif)}.sde-editor li.list-cn-1-80{background-image:url(http://bs.baidu.com/listicon/list-cn-1-80.gif)}.sde-editor li.list-cn-1-81{background-image:url(http://bs.baidu.com/listicon/list-cn-1-81.gif)}.sde-editor li.list-cn-1-82{background-image:url(http://bs.baidu.com/listicon/list-cn-1-82.gif)}.sde-editor li.list-cn-1-83{background-image:url(http://bs.baidu.com/listicon/list-cn-1-83.gif)}.sde-editor li.list-cn-1-84{background-image:url(http://bs.baidu.com/listicon/list-cn-1-84.gif)}.sde-editor li.list-cn-1-85{background-image:url(http://bs.baidu.com/listicon/list-cn-1-85.gif)}.sde-editor li.list-cn-1-86{background-image:url(http://bs.baidu.com/listicon/list-cn-1-86.gif)}.sde-editor li.list-cn-1-87{background-image:url(http://bs.baidu.com/listicon/list-cn-1-87.gif)}.sde-editor li.list-cn-1-88{background-image:url(http://bs.baidu.com/listicon/list-cn-1-88.gif)}.sde-editor li.list-cn-1-89{background-image:url(http://bs.baidu.com/listicon/list-cn-1-89.gif)}.sde-editor li.list-cn-1-90{background-image:url(http://bs.baidu.com/listicon/list-cn-1-90.gif)}.sde-editor li.list-cn-1-91{background-image:url(http://bs.baidu.com/listicon/list-cn-1-91.gif)}.sde-editor li.list-cn-1-92{background-image:url(http://bs.baidu.com/listicon/list-cn-1-92.gif)}.sde-editor li.list-cn-1-93{background-image:url(http://bs.baidu.com/listicon/list-cn-1-93.gif)}.sde-editor li.list-cn-1-94{background-image:url(http://bs.baidu.com/listicon/list-cn-1-94.gif)}.sde-editor li.list-cn-1-95{background-image:url(http://bs.baidu.com/listicon/list-cn-1-95.gif)}.sde-editor li.list-cn-1-96{background-image:url(http://bs.baidu.com/listicon/list-cn-1-96.gif)}.sde-editor li.list-cn-1-97{background-image:url(http://bs.baidu.com/listicon/list-cn-1-97.gif)}.sde-editor li.list-cn-1-98{background-image:url(http://bs.baidu.com/listicon/list-cn-1-98.gif)}.sde-editor ol.custom_cn{list-style:none}.sde-editor ol.custom_cn li{background-position:0 3px;background-repeat:no-repeat}.sde-editor li.list-cn-paddingleft-1{padding-left:25px}.sde-editor li.list-cn-paddingleft-2{padding-left:40px}.sde-editor li.list-cn-paddingleft-3{padding-left:55px}.sde-editor li.list-cn-2-0{background-image:url(http://bs.baidu.com/listicon/list-cn-2-0.gif)}.sde-editor li.list-cn-2-1{background-image:url(http://bs.baidu.com/listicon/list-cn-2-1.gif)}.sde-editor li.list-cn-2-2{background-image:url(http://bs.baidu.com/listicon/list-cn-2-2.gif)}.sde-editor li.list-cn-2-3{background-image:url(http://bs.baidu.com/listicon/list-cn-2-3.gif)}.sde-editor li.list-cn-2-4{background-image:url(http://bs.baidu.com/listicon/list-cn-2-4.gif)}.sde-editor li.list-cn-2-5{background-image:url(http://bs.baidu.com/listicon/list-cn-2-5.gif)}.sde-editor li.list-cn-2-6{background-image:url(http://bs.baidu.com/listicon/list-cn-2-6.gif)}.sde-editor li.list-cn-2-7{background-image:url(http://bs.baidu.com/listicon/list-cn-2-7.gif)}.sde-editor li.list-cn-2-8{background-image:url(http://bs.baidu.com/listicon/list-cn-2-8.gif)}.sde-editor li.list-cn-2-9{background-image:url(http://bs.baidu.com/listicon/list-cn-2-9.gif)}.sde-editor li.list-cn-2-10{background-image:url(http://bs.baidu.com/listicon/list-cn-2-10.gif)}.sde-editor li.list-cn-2-11{background-image:url(http://bs.baidu.com/listicon/list-cn-2-11.gif)}.sde-editor li.list-cn-2-12{background-image:url(http://bs.baidu.com/listicon/list-cn-2-12.gif)}.sde-editor li.list-cn-2-13{background-image:url(http://bs.baidu.com/listicon/list-cn-2-13.gif)}.sde-editor li.list-cn-2-14{background-image:url(http://bs.baidu.com/listicon/list-cn-2-14.gif)}.sde-editor .anchorclass{background:url("http://ueditor.baidu.com/ueditor/themes/default/images/anchor.gif") no-repeat scroll 0 transparent;cursor:auto;display:inline-block;height:16px;width:15px}/*.sde-bg{background-color:#f0f8ff}.sde-bg:hover{background-color:#add8e6}.sde-left,.sde-right{margin:0 3px;padding:0 3px}*/.sde-value{min-width:15px}.sde-select-root{display:inline}.sde-select{position:absolute;border:1px solid #ccc;min-height:10px;background-color:#fefefe;}.sde-select-bg{position:fixed;background:#000;opacity:0;top:0;left:0;width:100%;height:100%}.sde-select-content{overflow-x:hidden;list-style:none;padding:0;font-size:12px;margin:0;color:#666}.sde-select-content li{padding:0 10px;overflow:hidden;word-break:break-all;line-height:2.5em;cursor:pointer;text-align:left;width:100%}.sde-select-content li:hover{background-color:#d5e1f2}.sde-select-content li.selected{background-color:#87a9da}:focus{outline:none}.sde-table{margin-bottom:10px;border-collapse:collapse;display:table;border-spacing:2px;border-color:grey}.sde-table tbody{display:table-row-group;vertical-align:middle;border-color:inherit}.sde-table td,.sde-table th{border:1px solid #ddd;padding:5px 10px}.sde-table tr{display:table-row;vertical-align:inherit;border-color:inherit}.sde-scrawl:hover{outline:5px auto -webkit-focus-ring-color}.sde-check-error{background-color:#da4f49}.sde-check-error .sde-value{color:#fff!important}' + sde_bg + sde_margin, ""])
},
function(e, t, n) {
    t = e.exports = n(2)(),
    t.push([e.i, ".flatpickr-confirm{height:40px;max-height:0;visibility:hidden;display:flex;justify-content:inherit;align-items:inherit;cursor:pointer;background:rgba(0,0,0,.06);border-left:1px solid rgba(72,72,72,.2);border-right:1px solid rgba(72,72,72,.2);border-bottom:1px solid rgba(72,72,72,.2);border-radius:0 0 5px 5px}.flatpickr-confirm svg path{fill:inherit}.flatpickr-confirm div:hover{background-color:#cdcdcd}.flatpickr-confirm .left,.flatpickr-confirm .right{line-height:40px;width:33%}.flatpickr-confirm .center{width:34%;line-height:40px}.flatpickr-confirm.darkTheme{color:#fff;fill:#fff}.flatpickr-confirm.visible{max-height:40px;visibility:visible}.flatpickr-calendar{background:#fff}.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time{border-bottom:none}.flatpickr-time{border-radius:0}", ""])
},
function(e, t, n) {
    /*! flatpickr v2.6.3, @license MIT */
    function i(e, t) {
        function n(e) {
            return e.bind(ye)
        }
        function o(e) {
            ye.config.noCalendar && !ye.selectedDates.length && (ye.selectedDates = [ye.now]),
            ve(e),
            ye.selectedDates.length && (!ye.minDateHasTime || "input" !== e.type || e.target.value.length >= 2 ? (s(), ce()) : setTimeout(function() {
                s(),
                ce()
            },
            1e3))
        }
        function s() {
            if (ye.config.enableTime) {
                var e = (parseInt(ye.hourElement.value, 10) || 0) % (ye.amPM ? 12 : 24),
                t = (parseInt(ye.minuteElement.value, 10) || 0) % 60,
                n = ye.config.enableSeconds ? (parseInt(ye.secondElement.value, 10) || 0) % 60 : 0;
                void 0 !== ye.amPM && (e = e % 12 + 12 * ("PM" === ye.amPM.textContent)),
                ye.minDateHasTime && 0 === be(ye.latestSelectedDateObj, ye.config.minDate) && (e = Math.max(e, ye.config.minDate.getHours())) === ye.config.minDate.getHours() && (t = Math.max(t, ye.config.minDate.getMinutes())),
                ye.maxDateHasTime && 0 === be(ye.latestSelectedDateObj, ye.config.maxDate) && (e = Math.min(e, ye.config.maxDate.getHours())) === ye.config.maxDate.getHours() && (t = Math.min(t, ye.config.maxDate.getMinutes())),
                c(e, t, n)
            }
        }
        function l(e) {
            var t = e || ye.latestSelectedDateObj;
            t && c(t.getHours(), t.getMinutes(), t.getSeconds())
        }
        function c(e, t, n) {
            ye.selectedDates.length && ye.latestSelectedDateObj.setHours(e % 24, t, n || 0, 0),
            ye.config.enableTime && !ye.isMobile && (ye.hourElement.value = ye.pad(ye.config.time_24hr ? e: (12 + e) % 12 + 12 * (e % 12 == 0)), ye.minuteElement.value = ye.pad(t), ye.config.time_24hr || (ye.amPM.textContent = e >= 12 ? "PM": "AM"), !0 === ye.config.enableSeconds && (ye.secondElement.value = ye.pad(n)))
        }
        function d(e) {
            var t = e.target.value;
            e.delta && (t = (parseInt(t) + e.delta).toString()),
            4 !== t.length && "Enter" !== e.key || (ye.currentYearElement.blur(), /[^\d]/.test(t) || B(t))
        }
        function u(e, t, n) {
            return t instanceof Array ? t.forEach(function(t) {
                return u(e, t, n)
            }) : e instanceof Array ? e.forEach(function(e) {
                return u(e, t, n)
            }) : (e.addEventListener(t, n), void ye._handlers.push({
                element: e,
                event: t,
                handler: n
            }))
        }
        function h(e) {
            return function(t) {
                return 1 === t.which && e(t)
            }
        }
        function f() {
            if (ye._handlers = [], ye._animationLoop = [], ye.config.wrap && ["open", "close", "toggle", "clear"].forEach(function(e) {
                Array.prototype.forEach.call(ye.element.querySelectorAll("[data-" + e + "]"),
                function(t) {
                    return u(t, "mousedown", h(ye[e]))
                })
            }), ye.isMobile) return ne();
            if (ye.debouncedResize = ge(U, 50), ye.triggerChange = function() {
                oe("Change")
            },
            ye.debouncedChange = ge(ye.triggerChange, 300), "range" === ye.config.mode && ye.daysContainer && u(ye.daysContainer, "mouseover",
            function(e) {
                return Y(e.target)
            }), u(window.document.body, "keydown", H), ye.config.static || u(ye._input, "keydown", H), ye.config.inline || ye.config.static || u(window, "resize", ye.debouncedResize), void 0 !== window.ontouchstart && u(window.document, "touchstart", F), u(window.document, "mousedown", h(F)), u(ye._input, "blur", F), !0 === ye.config.clickOpens && u(ye._input, "focus", ye.open), ye.config.noCalendar || (ye.monthNav.addEventListener("wheel",
            function(e) {
                return e.preventDefault()
            }), u(ye.monthNav, "wheel", ge(ue, 10)), u(ye.monthNav, "mousedown", h(he)), u(ye.monthNav, ["keyup", "increment"], d), u(ye.daysContainer, "mousedown", h(J)), ye.config.animate && (u(ye.daysContainer, ["webkitAnimationEnd", "animationend"], p), u(ye.monthNav, ["webkitAnimationEnd", "animationend"], g))), ye.config.enableTime) {
                var e = function(e) {
                    return e.target.select()
                };
                u(ye.timeContainer, ["wheel", "input", "increment"], o),
                u(ye.timeContainer, "mousedown", h(v)),
                u(ye.timeContainer, ["wheel", "increment"], ye.debouncedChange),
                u(ye.timeContainer, "input", ye.triggerChange),
                u([ye.hourElement, ye.minuteElement], "focus", e),
                void 0 !== ye.secondElement && u(ye.secondElement, "focus",
                function() {
                    return ye.secondElement.select()
                }),
                void 0 !== ye.amPM && u(ye.amPM, "mousedown", h(function(e) {
                    o(e),
                    ye.triggerChange(e)
                }))
            }
        }
        function m() {
            for (var e = ye._animationLoop.length; e--;) ye._animationLoop[e](),
            ye._animationLoop.splice(e, 1)
        }
        function p(e) {
            if (ye.daysContainer.childNodes.length > 1) switch (e.animationName) {
            case "fpSlideLeft":
                ye.daysContainer.lastChild.classList.remove("slideLeftNew"),
                ye.daysContainer.removeChild(ye.daysContainer.firstChild),
                ye.days = ye.daysContainer.firstChild,
                m();
                break;
            case "fpSlideRight":
                ye.daysContainer.firstChild.classList.remove("slideRightNew"),
                ye.daysContainer.removeChild(ye.daysContainer.lastChild),
                ye.days = ye.daysContainer.firstChild,
                m()
            }
        }
        function g(e) {
            switch (e.animationName) {
            case "fpSlideLeftNew":
            case "fpSlideRightNew":
                ye.navigationCurrentMonth.classList.remove("slideLeftNew"),
                ye.navigationCurrentMonth.classList.remove("slideRightNew");
                for (var t = ye.navigationCurrentMonth; t.nextSibling && /curr/.test(t.nextSibling.className);) ye.monthNav.removeChild(t.nextSibling);
                for (; t.previousSibling && /curr/.test(t.previousSibling.className);) ye.monthNav.removeChild(t.previousSibling);
                ye.oldCurMonth = null
            }
        }
        function b(e) {
            e = e ? ye.parseDate(e) : ye.latestSelectedDateObj || (ye.config.minDate > ye.now ? ye.config.minDate: ye.config.maxDate && ye.config.maxDate < ye.now ? ye.config.maxDate: ye.now);
            try {
                ye.currentYear = e.getFullYear(),
                ye.currentMonth = e.getMonth()
            } catch(t) {
                console.error(t.stack),
                console.warn("Invalid date supplied: " + e)
            }
            ye.redraw()
        }
        function v(e) {~e.target.className.indexOf("arrow") && y(e, e.target.classList.contains("arrowUp") ? 1 : -1)
        }
        function y(e, t, n) {
            var i = n || e.target.parentNode.childNodes[0],
            o = re("increment");
            o.delta = t,
            i.dispatchEvent(o)
        }
        function w(e) {
            var t = fe("div", "numInputWrapper"),
            n = fe("input", "numInput " + e),
            i = fe("span", "arrowUp"),
            o = fe("span", "arrowDown");
            return n.type = "text",
            n.pattern = "\\d*",
            t.appendChild(n),
            t.appendChild(i),
            t.appendChild(o),
            t
        }
        function E() {
            var e = window.document.createDocumentFragment();
            ye.calendarContainer = fe("div", "flatpickr-calendar"),
            ye.calendarContainer.tabIndex = -1,
            ye.config.noCalendar || (e.appendChild(T()), ye.innerContainer = fe("div", "flatpickr-innerContainer"), ye.config.weekNumbers && ye.innerContainer.appendChild(L()), ye.rContainer = fe("div", "flatpickr-rContainer"), ye.rContainer.appendChild(N()), ye.daysContainer || (ye.daysContainer = fe("div", "flatpickr-days"), ye.daysContainer.tabIndex = -1), D(), ye.rContainer.appendChild(ye.daysContainer), ye.innerContainer.appendChild(ye.rContainer), e.appendChild(ye.innerContainer)),
            ye.config.enableTime && e.appendChild(S()),
            pe(ye.calendarContainer, "rangeMode", "range" === ye.config.mode),
            pe(ye.calendarContainer, "animate", ye.config.animate),
            ye.calendarContainer.appendChild(e);
            var t = ye.config.appendTo && ye.config.appendTo.nodeType;
            if (ye.config.inline || ye.config.static) {
                if (ye.calendarContainer.classList.add(ye.config.inline ? "inline": "static"), ye.config.inline && !t) return ye.element.parentNode.insertBefore(ye.calendarContainer, ye._input.nextSibling);
                if (ye.config.static) {
                    var n = fe("div", "flatpickr-wrapper");
                    return ye.element.parentNode.insertBefore(n, ye.element),
                    n.appendChild(ye.element),
                    ye.altInput && n.appendChild(ye.altInput),
                    void n.appendChild(ye.calendarContainer)
                }
            } (t ? ye.config.appendTo: window.document.body).appendChild(ye.calendarContainer)
        }
        function C(e, t, n, i) {
            var o = _(t, !0),
            r = fe("span", "flatpickr-day " + e, t.getDate());
            return r.dateObj = t,
            r.$i = i,
            r.setAttribute("aria-label", ye.formatDate(t, ye.config.ariaDateFormat)),
            0 === be(t, ye.now) && (ye.todayDateElem = r, r.classList.add("today")),
            o ? (r.tabIndex = -1, ae(t) && (r.classList.add("selected"), ye.selectedDateElem = r, "range" === ye.config.mode && (pe(r, "startRange", 0 === be(t, ye.selectedDates[0])), pe(r, "endRange", 0 === be(t, ye.selectedDates[1]))))) : (r.classList.add("disabled"), ye.selectedDates[0] && t > ye.minRangeDate && t < ye.selectedDates[0] ? ye.minRangeDate = t: ye.selectedDates[0] && t < ye.maxRangeDate && t > ye.selectedDates[0] && (ye.maxRangeDate = t)),
            "range" === ye.config.mode && (se(t) && !ae(t) && r.classList.add("inRange"), 1 === ye.selectedDates.length && (t < ye.minRangeDate || t > ye.maxRangeDate) && r.classList.add("notAllowed")),
            ye.config.weekNumbers && "prevMonthDay" !== e && n % 7 == 1 && ye.weekNumbers.insertAdjacentHTML("beforeend", "<span class='disabled flatpickr-day'>" + ye.config.getWeek(t) + "</span>"),
            oe("DayCreate", r),
            r
        }
        function x(e, t) {
            var n = e + t || 0,
            i = void 0 !== e ? ye.days.childNodes[n] : ye.selectedDateElem || ye.todayDateElem || ye.days.childNodes[0],
            o = function() {
                i = i || ye.days.childNodes[n],
                i.focus(),
                "range" === ye.config.mode && Y(i)
            };
            if (void 0 === i && 0 !== t) return t > 0 ? (ye.changeMonth(1), n %= 42) : t < 0 && (ye.changeMonth( - 1), n += 42),
            k(o);
            o()
        }
        function k(e) {
            if (!0 === ye.config.animate) return ye._animationLoop.push(e);
            e()
        }
        function D(e) {
            var t = (new Date(ye.currentYear, ye.currentMonth, 1).getDay() - ye.l10n.firstDayOfWeek + 7) % 7,
            n = "range" === ye.config.mode;
            ye.prevMonthDays = ye.utils.getDaysinMonth((ye.currentMonth - 1 + 12) % 12),
            ye.selectedDateElem = void 0,
            ye.todayDateElem = void 0;
            var i = ye.utils.getDaysinMonth(),
            o = window.document.createDocumentFragment(),
            r = ye.prevMonthDays + 1 - t,
            a = 0;
            for (ye.config.weekNumbers && ye.weekNumbers.firstChild && (ye.weekNumbers.textContent = ""), n && (ye.minRangeDate = new Date(ye.currentYear, ye.currentMonth - 1, r), ye.maxRangeDate = new Date(ye.currentYear, ye.currentMonth + 1, (42 - t) % i)); r <= ye.prevMonthDays; r++, a++) o.appendChild(C("prevMonthDay", new Date(ye.currentYear, ye.currentMonth - 1, r), r, a));
            for (r = 1; r <= i; r++, a++) o.appendChild(C("", new Date(ye.currentYear, ye.currentMonth, r), r, a));
            for (var s = i + 1; s <= 42 - t; s++, a++) o.appendChild(C("nextMonthDay", new Date(ye.currentYear, ye.currentMonth + 1, s % i), s, a));
            n && 1 === ye.selectedDates.length && o.childNodes[0] ? (ye._hidePrevMonthArrow = ye._hidePrevMonthArrow || ye.minRangeDate > o.childNodes[0].dateObj, ye._hideNextMonthArrow = ye._hideNextMonthArrow || ye.maxRangeDate < new Date(ye.currentYear, ye.currentMonth + 1, 1)) : le();
            var l = fe("div", "dayContainer");
            if (l.appendChild(o), ye.config.animate && void 0 !== e) for (; ye.daysContainer.childNodes.length > 1;) ye.daysContainer.removeChild(ye.daysContainer.firstChild);
            else A(ye.daysContainer);
            return e >= 0 ? ye.daysContainer.appendChild(l) : ye.daysContainer.insertBefore(l, ye.daysContainer.firstChild),
            ye.days = ye.daysContainer.firstChild,
            ye.daysContainer
        }
        function A(e) {
            for (; e.firstChild;) e.removeChild(e.firstChild)
        }
        function T() {
            var e = window.document.createDocumentFragment();
            ye.monthNav = fe("div", "flatpickr-month"),
            ye.prevMonthNav = fe("span", "flatpickr-prev-month"),
            ye.prevMonthNav.innerHTML = ye.config.prevArrow,
            ye.currentMonthElement = fe("span", "cur-month"),
            ye.currentMonthElement.title = ye.l10n.scrollTitle;
            var t = w("cur-year");
            return ye.currentYearElement = t.childNodes[0],
            ye.currentYearElement.title = ye.l10n.scrollTitle,
            ye.config.minDate && (ye.currentYearElement.min = ye.config.minDate.getFullYear()),
            ye.config.maxDate && (ye.currentYearElement.max = ye.config.maxDate.getFullYear(), ye.currentYearElement.disabled = ye.config.minDate && ye.config.minDate.getFullYear() === ye.config.maxDate.getFullYear()),
            ye.nextMonthNav = fe("span", "flatpickr-next-month"),
            ye.nextMonthNav.innerHTML = ye.config.nextArrow,
            ye.navigationCurrentMonth = fe("span", "flatpickr-current-month"),
            ye.navigationCurrentMonth.appendChild(ye.currentMonthElement),
            ye.navigationCurrentMonth.appendChild(t),
            e.appendChild(ye.prevMonthNav),
            e.appendChild(ye.navigationCurrentMonth),
            e.appendChild(ye.nextMonthNav),
            ye.monthNav.appendChild(e),
            Object.defineProperty(ye, "_hidePrevMonthArrow", {
                get: function() {
                    return this.__hidePrevMonthArrow
                },
                set: function(e) {
                    this.__hidePrevMonthArrow !== e && (ye.prevMonthNav.style.display = e ? "none": "block"),
                    this.__hidePrevMonthArrow = e
                }
            }),
            Object.defineProperty(ye, "_hideNextMonthArrow", {
                get: function() {
                    return this.__hideNextMonthArrow
                },
                set: function(e) {
                    this.__hideNextMonthArrow !== e && (ye.nextMonthNav.style.display = e ? "none": "block"),
                    this.__hideNextMonthArrow = e
                }
            }),
            le(),
            ye.monthNav
        }
        function S() {
            ye.calendarContainer.classList.add("hasTime"),
            ye.config.noCalendar && ye.calendarContainer.classList.add("noCalendar"),
            ye.timeContainer = fe("div", "flatpickr-time"),
            ye.timeContainer.tabIndex = -1;
            var e = fe("span", "flatpickr-time-separator", ":"),
            t = w("flatpickr-hour");
            ye.hourElement = t.childNodes[0];
            var n = w("flatpickr-minute");
            if (ye.minuteElement = n.childNodes[0], ye.hourElement.tabIndex = ye.minuteElement.tabIndex = -1, ye.hourElement.value = ye.pad(ye.latestSelectedDateObj ? ye.latestSelectedDateObj.getHours() : ye.config.defaultHour), ye.minuteElement.value = ye.pad(ye.latestSelectedDateObj ? ye.latestSelectedDateObj.getMinutes() : ye.config.defaultMinute), ye.hourElement.step = ye.config.hourIncrement, ye.minuteElement.step = ye.config.minuteIncrement, ye.hourElement.min = ye.config.time_24hr ? 0 : 1, ye.hourElement.max = ye.config.time_24hr ? 23 : 12, ye.minuteElement.min = 0, ye.minuteElement.max = 59, ye.hourElement.title = ye.minuteElement.title = ye.l10n.scrollTitle, ye.timeContainer.appendChild(t), ye.timeContainer.appendChild(e), ye.timeContainer.appendChild(n), ye.config.time_24hr && ye.timeContainer.classList.add("time24hr"), ye.config.enableSeconds) {
                ye.timeContainer.classList.add("hasSeconds");
                var i = w("flatpickr-second");
                ye.secondElement = i.childNodes[0],
                ye.secondElement.value = ye.latestSelectedDateObj ? ye.pad(ye.latestSelectedDateObj.getSeconds()) : "00",
                ye.secondElement.step = ye.minuteElement.step,
                ye.secondElement.min = ye.minuteElement.min,
                ye.secondElement.max = ye.minuteElement.max,
                ye.timeContainer.appendChild(fe("span", "flatpickr-time-separator", ":")),
                ye.timeContainer.appendChild(i)
            }
            return ye.config.time_24hr || (ye.amPM = fe("span", "flatpickr-am-pm", ["AM", "PM"][ye.hourElement.value > 11 | 0]), ye.amPM.title = ye.l10n.toggleTitle, ye.amPM.tabIndex = -1, ye.timeContainer.appendChild(ye.amPM)),
            ye.timeContainer
        }
        function N() {
            ye.weekdayContainer || (ye.weekdayContainer = fe("div", "flatpickr-weekdays"));
            var e = ye.l10n.firstDayOfWeek,
            t = ye.l10n.weekdays.shorthand.slice();
            return e > 0 && e < t.length && (t = [].concat(t.splice(e, t.length), t.splice(0, e))),
            ye.weekdayContainer.innerHTML = "\n\t\t<span class=flatpickr-weekday>\n\t\t\t" + t.join("</span><span class=flatpickr-weekday>") + "\n\t\t</span>\n\t\t",
            ye.weekdayContainer
        }
        function L() {
            return ye.calendarContainer.classList.add("hasWeeks"),
            ye.weekWrapper = fe("div", "flatpickr-weekwrapper"),
            ye.weekWrapper.appendChild(fe("span", "flatpickr-weekday", ye.l10n.weekAbbreviation)),
            ye.weekNumbers = fe("div", "flatpickr-weeks"),
            ye.weekWrapper.appendChild(ye.weekNumbers),
            ye.weekWrapper
        }
        function M(e, t, n) {
            t = void 0 === t || t;
            var i = t ? e: e - ye.currentMonth,
            o = !ye.config.animate || !1 === n;
            if (! (i < 0 && ye._hidePrevMonthArrow || i > 0 && ye._hideNextMonthArrow)) {
                if (ye.currentMonth += i, (ye.currentMonth < 0 || ye.currentMonth > 11) && (ye.currentYear += ye.currentMonth > 11 ? 1 : -1, ye.currentMonth = (ye.currentMonth + 12) % 12, oe("YearChange")), D(o ? void 0 : i), o) return oe("MonthChange"),
                le();
                var r = ye.navigationCurrentMonth;
                if (i < 0) for (; r.nextSibling && /curr/.test(r.nextSibling.className);) ye.monthNav.removeChild(r.nextSibling);
                else if (i > 0) for (; r.previousSibling && /curr/.test(r.previousSibling.className);) ye.monthNav.removeChild(r.previousSibling);
                if (ye.oldCurMonth = ye.navigationCurrentMonth, ye.navigationCurrentMonth = ye.monthNav.insertBefore(ye.oldCurMonth.cloneNode(!0), i > 0 ? ye.oldCurMonth.nextSibling: ye.oldCurMonth), i > 0 ? (ye.daysContainer.firstChild.classList.add("slideLeft"), ye.daysContainer.lastChild.classList.add("slideLeftNew"), ye.oldCurMonth.classList.add("slideLeft"), ye.navigationCurrentMonth.classList.add("slideLeftNew")) : i < 0 && (ye.daysContainer.firstChild.classList.add("slideRightNew"), ye.daysContainer.lastChild.classList.add("slideRight"), ye.oldCurMonth.classList.add("slideRight"), ye.navigationCurrentMonth.classList.add("slideRightNew")), ye.currentMonthElement = ye.navigationCurrentMonth.firstChild, ye.currentYearElement = ye.navigationCurrentMonth.lastChild.childNodes[0], le(), ye.oldCurMonth.firstChild.textContent = ye.utils.monthToStr(ye.currentMonth - i), oe("MonthChange"), document.activeElement && document.activeElement.$i) {
                    var a = document.activeElement.$i;
                    k(function() {
                        x(a, 0)
                    })
                }
            }
        }
        function O(e) {
            ye.input.value = "",
            ye.altInput && (ye.altInput.value = ""),
            ye.mobileInput && (ye.mobileInput.value = ""),
            ye.selectedDates = [],
            ye.latestSelectedDateObj = void 0,
            ye.showTimeInput = !1,
            ye.redraw(),
            !1 !== e && oe("Change")
        }
        function R() {
            ye.isOpen = !1,
                ye.calendarContainer.style = "display:none",//king 20170831 隐藏时间框
            ye.isMobile || (ye.calendarContainer.classList.remove("open"), ye._input.classList.remove("active")),
            oe("Close");
            sde.removerFlatpickr();
        }
        function P() {
            for (var e = ye._handlers.length; e--;) {
                var t = ye._handlers[e];
                t.element.removeEventListener(t.event, t.handler)
            }
            ye._handlers = [],
            ye.mobileInput ? (ye.mobileInput.parentNode && ye.mobileInput.parentNode.removeChild(ye.mobileInput), ye.mobileInput = null) : ye.calendarContainer && ye.calendarContainer.parentNode && ye.calendarContainer.parentNode.removeChild(ye.calendarContainer),
            ye.altInput && (ye.input.type = "text", ye.altInput.parentNode && ye.altInput.parentNode.removeChild(ye.altInput), delete ye.altInput),
            ye.input && (ye.input.type = ye.input._type, ye.input.classList.remove("flatpickr-input"), ye.input.removeAttribute("readonly"), ye.input.value = ""),
            ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function(e) {
                return delete ye[e]
            })
        }
        function I(e) {
            return ! (!ye.config.appendTo || !ye.config.appendTo.contains(e)) || ye.calendarContainer.contains(e)
        }
        function F(e) {
            if (ye.isOpen && !ye.config.inline) {
                var t = I(e.target),
                n = e.target === ye.input || e.target === ye.altInput || ye.element.contains(e.target) || e.path && e.path.indexOf && (~e.path.indexOf(ye.input) || ~e.path.indexOf(ye.altInput)); ("blur" === e.type ? n && e.relatedTarget && !I(e.relatedTarget) : !n && !t) && (e.preventDefault(), ye.close(), "range" === ye.config.mode && 1 === ye.selectedDates.length && (ye.clear(!1), ye.redraw()))
            }
        }
        function B(e) {
            if (! (!e || ye.currentYearElement.min && e < ye.currentYearElement.min || ye.currentYearElement.max && e > ye.currentYearElement.max)) {
                var t = parseInt(e, 10),
                n = ye.currentYear !== t;
                ye.currentYear = t || ye.currentYear,
                ye.config.maxDate && ye.currentYear === ye.config.maxDate.getFullYear() ? ye.currentMonth = Math.min(ye.config.maxDate.getMonth(), ye.currentMonth) : ye.config.minDate && ye.currentYear === ye.config.minDate.getFullYear() && (ye.currentMonth = Math.max(ye.config.minDate.getMonth(), ye.currentMonth)),
                n && (ye.redraw(), oe("YearChange"))
            }
        }
        function _(e, t) {
            if (ye.config.minDate && be(e, ye.config.minDate, void 0 !== t ? t: !ye.minDateHasTime) < 0 || ye.config.maxDate && be(e, ye.config.maxDate, void 0 !== t ? t: !ye.maxDateHasTime) > 0) return ! 1;
            if (!ye.config.enable.length && !ye.config.disable.length) return ! 0;
            for (var n, i = ye.parseDate(e, null, !0), o = ye.config.enable.length > 0, r = o ? ye.config.enable: ye.config.disable, s = 0; s < r.length; s++) {
                if ((n = r[s]) instanceof Function && n(i)) return o;
                if (n instanceof Date && n.getTime() === i.getTime()) return o;
                if ("string" == typeof n && ye.parseDate(n, null, !0).getTime() === i.getTime()) return o;
                if ("object" === (void 0 === n ? "undefined": a(n)) && n.from && n.to && i >= n.from && i <= n.to) return o
            }
            return ! o
        }
        function H(e) {
            var t = e.target === ye._input,
            n = I(e.target),
            i = ye.config.allowInput,
            r = ye.isOpen && (!i || !t),
            a = ye.config.inline && t && !i;
            if ("Enter" === e.key && i && t) return ye.setDate(ye._input.value, !0, e.target === ye.altInput ? ye.config.altFormat: ye.config.dateFormat),
            e.target.blur();
            if (n || r || a) {
                var l = ye.timeContainer && ye.timeContainer.contains(e.target);
                switch (e.key) {
                case "Enter":
                    l ? ce() : J(e);
                    break;
                case "Escape":
                    e.preventDefault(),
                    ye.close();
                    break;
                case "ArrowLeft":
                case "ArrowRight":
                    if (!l) if (e.preventDefault(), ye.daysContainer) {
                        var c = "ArrowRight" === e.key ? 1 : -1;
                        e.ctrlKey ? M(c, !0) : x(e.target.$i, c)
                    } else ye.config.enableTime && !l && ye.hourElement.focus();
                    break;
                case "ArrowUp":
                case "ArrowDown":
                    e.preventDefault();
                    var d = "ArrowDown" === e.key ? 1 : -1;
                    ye.daysContainer ? e.ctrlKey ? (B(ye.currentYear - d), x(e.target.$i, 0)) : l || x(e.target.$i, 7 * d) : ye.config.enableTime && (l || ye.hourElement.focus(), o(e));
                    break;
                case "Tab":
                    e.target === ye.hourElement ? (e.preventDefault(), ye.minuteElement.select()) : e.target === ye.minuteElement && (ye.secondElement || ye.amPM) ? (e.preventDefault(), (ye.secondElement || ye.amPM).focus()) : e.target === ye.secondElement && (e.preventDefault(), ye.amPM.focus());
                    break;
                case "a":
                    e.target === ye.amPM && (ye.amPM.textContent = "AM", s(), ce());
                    break;
                case "p":
                    e.target === ye.amPM && (ye.amPM.textContent = "PM", s(), ce())
                }
                oe("KeyDown", e)
            }
        }
        function Y(e) {
            if (1 === ye.selectedDates.length && e.classList.contains("flatpickr-day")) {
                for (var t = e.dateObj,
                n = ye.parseDate(ye.selectedDates[0], null, !0), i = Math.min(t.getTime(), ye.selectedDates[0].getTime()), o = Math.max(t.getTime(), ye.selectedDates[0].getTime()), r = !1, a = i; a < o; a += ye.utils.duration.DAY) if (!_(new Date(a))) {
                    r = !0;
                    break
                }
                for (var s = ye.days.childNodes[0].dateObj.getTime(), l = 0; l < 42; l++, s += ye.utils.duration.DAY) { (function(a, s) {
                        var l = a < ye.minRangeDate.getTime() || a > ye.maxRangeDate.getTime(),
                        c = ye.days.childNodes[s];
                        if (l) return ye.days.childNodes[s].classList.add("notAllowed"),
                        ["inRange", "startRange", "endRange"].forEach(function(e) {
                            c.classList.remove(e)
                        }),
                        "continue";
                        if (r && !l) return "continue"; ["startRange", "inRange", "endRange", "notAllowed"].forEach(function(e) {
                            c.classList.remove(e)
                        });
                        var d = Math.max(ye.minRangeDate.getTime(), i),
                        u = Math.min(ye.maxRangeDate.getTime(), o);
                        e.classList.add(t < ye.selectedDates[0] ? "startRange": "endRange"),
                        n < t && a === n.getTime() ? c.classList.add("startRange") : n > t && a === n.getTime() && c.classList.add("endRange"),
                        a >= d && a <= u && c.classList.add("inRange")
                    })(s, l)
                }
            }
        }
        function U() { ! ye.isOpen || ye.config.static || ye.config.inline || K()
        }
        function j(e) {
            if (ye.isMobile) return e && (e.preventDefault(), e.target.blur()),
            setTimeout(function() {
                ye.mobileInput.click()
            },
            0),
            void oe("Open");
            ye.isOpen || ye._input.disabled || ye.config.inline || (ye.isOpen = !0, ye.calendarContainer.classList.add("open"), K(), ye._input.classList.add("active"), oe("Open"))
        }
        function z(e) {
            return function(t) {
                var n = ye.config["_" + e + "Date"] = ye.parseDate(t),
                i = ye.config["_" + ("min" === e ? "max": "min") + "Date"],
                o = t && n instanceof Date;
                o && (ye[e + "DateHasTime"] = n.getHours() || n.getMinutes() || n.getSeconds()),
                ye.selectedDates && (ye.selectedDates = ye.selectedDates.filter(function(e) {
                    return _(e)
                }), ye.selectedDates.length || "min" !== e || l(n), ce()),
                ye.daysContainer && (q(), o ? ye.currentYearElement[e] = n.getFullYear() : ye.currentYearElement.removeAttribute(e), ye.currentYearElement.disabled = i && n && i.getFullYear() === n.getFullYear())
            }
        }
        function W() {
            var e = ["utc", "wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
            t = ["onChange", "onClose", "onDayCreate", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange"];
            ye.config = Object.create(i.defaultConfig);
            var o = r({},
            ye.instanceConfig, JSON.parse(JSON.stringify(ye.element.dataset || {})));
            ye.config.parseDate = o.parseDate,
            ye.config.formatDate = o.formatDate,
            r(ye.config, o),
            !o.dateFormat && o.enableTime && (ye.config.dateFormat = ye.config.noCalendar ? "H:i" + (ye.config.enableSeconds ? ":S": "") : i.defaultConfig.dateFormat + " H:i" + (ye.config.enableSeconds ? ":S": "")),
            o.altInput && o.enableTime && !o.altFormat && (ye.config.altFormat = ye.config.noCalendar ? "h:i" + (ye.config.enableSeconds ? ":S K": " K") : i.defaultConfig.altFormat + " h:i" + (ye.config.enableSeconds ? ":S": "") + " K"),
            Object.defineProperty(ye.config, "minDate", {
                get: function() {
                    return this._minDate
                },
                set: z("min")
            }),
            Object.defineProperty(ye.config, "maxDate", {
                get: function() {
                    return this._maxDate
                },
                set: z("max")
            }),
            ye.config.minDate = o.minDate,
            ye.config.maxDate = o.maxDate;
            for (var a = 0; a < e.length; a++) ye.config[e[a]] = !0 === ye.config[e[a]] || "true" === ye.config[e[a]];
            for (var s = t.length; s--;) void 0 !== ye.config[t[s]] && (ye.config[t[s]] = me(ye.config[t[s]] || []).map(n));
            for (var l = 0; l < ye.config.plugins.length; l++) {
                var c = ye.config.plugins[l](ye) || {};
                for (var d in c) ye.config[d] instanceof Array || ~t.indexOf(d) ? ye.config[d] = me(c[d]).map(n).concat(ye.config[d]) : void 0 === o[d] && (ye.config[d] = c[d])
            }
            oe("ParseConfig")
        }
        function V() {
            "object" !== a(ye.config.locale) && void 0 === i.l10ns[ye.config.locale] && console.warn("flatpickr: invalid locale " + ye.config.locale),
            ye.l10n = r(Object.create(i.l10ns.
        default), "object" === a(ye.config.locale) ? ye.config.locale: "default" !== ye.config.locale ? i.l10ns[ye.config.locale] || {}: {})
        }
        function K() {
            if (void 0 !== ye.calendarContainer) {
                var e = ye.calendarContainer.offsetHeight,
                t = ye.calendarContainer.offsetWidth,
                n = ye.config.position,
                i = ye._positionElement.getBoundingClientRect(),
                o = window.innerHeight - i.bottom,
                r = "above" === n || "below" !== n && o < e && i.top > e,
                a = window.pageYOffset + i.top + (r ? -e - 2 : ye._positionElement.offsetHeight + 2);
                if (pe(ye.calendarContainer, "arrowTop", !r), pe(ye.calendarContainer, "arrowBottom", r), !ye.config.inline) {
                    var s = window.pageXOffset + i.left,
                    l = window.document.body.offsetWidth - i.right,
                    c = s + t > window.document.body.offsetWidth;
                    pe(ye.calendarContainer, "rightMost", c),
                    ye.config.static || (ye.calendarContainer.style.top = a + "px", c ? (ye.calendarContainer.style.left = "auto", ye.calendarContainer.style.right = l + "px") : (ye.calendarContainer.style.left = s + "px", ye.calendarContainer.style.right = "auto"))
                }
            }
        }
        function q() {
            ye.config.noCalendar || ye.isMobile || (N(), le(), D())
        }
        function J(e) {
            if (e.preventDefault(), e.stopPropagation(), e.target.classList.contains("flatpickr-day") && !e.target.classList.contains("disabled") && !e.target.classList.contains("notAllowed")) {
                var t = ye.latestSelectedDateObj = new Date(e.target.dateObj.getTime()),
                n = t.getMonth() !== ye.currentMonth && "range" !== ye.config.mode;
                if (ye.selectedDateElem = e.target, "single" === ye.config.mode) ye.selectedDates = [t];
                else if ("multiple" === ye.config.mode) {
                    var i = ae(t);
                    i ? ye.selectedDates.splice(i, 1) : ye.selectedDates.push(t)
                } else "range" === ye.config.mode && (2 === ye.selectedDates.length && ye.clear(), ye.selectedDates.push(t), 0 !== be(t, ye.selectedDates[0], !0) && ye.selectedDates.sort(function(e, t) {
                    return e.getTime() - t.getTime()
                }));
                if (s(), n) {
                    var o = ye.currentYear !== t.getFullYear();
                    ye.currentYear = t.getFullYear(),
                    ye.currentMonth = t.getMonth(),
                    o && oe("YearChange"),
                    oe("MonthChange")
                }
                if (D(), ye.minDateHasTime && ye.config.enableTime && 0 === be(t, ye.config.minDate) && l(ye.config.minDate), ce(), ye.config.enableTime && setTimeout(function() {
                    return ye.showTimeInput = !0
                },
                50), "range" === ye.config.mode && (1 === ye.selectedDates.length ? (Y(e.target), ye._hidePrevMonthArrow = ye._hidePrevMonthArrow || ye.minRangeDate > ye.days.childNodes[0].dateObj, ye._hideNextMonthArrow = ye._hideNextMonthArrow || ye.maxRangeDate < new Date(ye.currentYear, ye.currentMonth + 1, 1)) : le()), oe("Change"), n ? k(function() {
                    return ye.selectedDateElem.focus()
                }) : x(e.target.$i, 0), ye.config.enableTime && setTimeout(function() {
                    return ye.hourElement.select()
                },
                451), ye.config.closeOnSelect) {
                    var r = "single" === ye.config.mode && !ye.config.enableTime,
                    a = "range" === ye.config.mode && 2 === ye.selectedDates.length && !ye.config.enableTime; (r || a) && ye.close()
                }
            }
        }
        function X(e, t) {
            ye.config[e] = t,
            ye.redraw(),
            b()
        }
        function Z(e, t) {
            if (e instanceof Array) ye.selectedDates = e.map(function(e) {
                return ye.parseDate(e, t)
            });
            else if (e instanceof Date || !isNaN(e)) ye.selectedDates = [ye.parseDate(e, t)];
            else if (e && e.substring) switch (ye.config.mode) {
            case "single":
                ye.selectedDates = [ye.parseDate(e, t)];
                break;
            case "multiple":
                ye.selectedDates = e.split("; ").map(function(e) {
                    return ye.parseDate(e, t)
                });
                break;
            case "range":
                ye.selectedDates = e.split(ye.l10n.rangeSeparator).map(function(e) {
                    return ye.parseDate(e, t)
                })
            }
            ye.selectedDates = ye.selectedDates.filter(function(e) {
                return e instanceof Date && _(e, !1)
            }),
            ye.selectedDates.sort(function(e, t) {
                return e.getTime() - t.getTime()
            })
        }
        function Q(e, t, n) {
            if (!e) return ye.clear(t);
            Z(e, n),
            ye.showTimeInput = ye.selectedDates.length > 0,
            ye.latestSelectedDateObj = ye.selectedDates[0],
            ye.redraw(),
            b(),
            l(),
            ce(t),
            t && oe("Change")
        }
        function G() {
            function e(e) {
                for (var t = e.length; t--;)"string" == typeof e[t] || +e[t] ? e[t] = ye.parseDate(e[t], null, !0) : e[t] && e[t].from && e[t].to && (e[t].from = ye.parseDate(e[t].from), e[t].to = ye.parseDate(e[t].to));
                return e.filter(function(e) {
                    return e
                })
            }
            ye.selectedDates = [],
            ye.now = new Date,
            ye.config.disable.length && (ye.config.disable = e(ye.config.disable)),
            ye.config.enable.length && (ye.config.enable = e(ye.config.enable));
            var t = ye.config.defaultDate || ye.input.value;
            t && Z(t, ye.config.dateFormat);
            var n = ye.selectedDates.length ? ye.selectedDates[0] : ye.config.minDate && ye.config.minDate.getTime() > ye.now ? ye.config.minDate: ye.config.maxDate && ye.config.maxDate.getTime() < ye.now ? ye.config.maxDate: ye.now;
            ye.currentYear = n.getFullYear(),
            ye.currentMonth = n.getMonth(),
            ye.selectedDates.length && (ye.latestSelectedDateObj = ye.selectedDates[0]),
            ye.minDateHasTime = ye.config.minDate && (ye.config.minDate.getHours() || ye.config.minDate.getMinutes() || ye.config.minDate.getSeconds()),
            ye.maxDateHasTime = ye.config.maxDate && (ye.config.maxDate.getHours() || ye.config.maxDate.getMinutes() || ye.config.maxDate.getSeconds()),
            Object.defineProperty(ye, "latestSelectedDateObj", {
                get: function() {
                    return ye._selectedDateObj || ye.selectedDates[ye.selectedDates.length - 1]
                },
                set: function(e) {
                    ye._selectedDateObj = e
                }
            }),
            ye.isMobile || Object.defineProperty(ye, "showTimeInput", {
                get: function() {
                    return ye._showTimeInput
                },
                set: function(e) {
                    ye._showTimeInput = e,
                    ye.calendarContainer && pe(ye.calendarContainer, "showTimeInput", e),
                    K()
                }
            })
        }
        function $() {
            ye.utils = {
                duration: {
                    DAY: 864e5
                },
                getDaysinMonth: function(e, t) {
                    return e = void 0 === e ? ye.currentMonth: e,
                    t = void 0 === t ? ye.currentYear: t,
                    1 === e && (t % 4 == 0 && t % 100 != 0 || t % 400 == 0) ? 29 : ye.l10n.daysInMonth[e]
                },
                monthToStr: function(e, t) {
                    return t = void 0 === t ? ye.config.shorthandCurrentMonth: t,
                    ye.l10n.months[(t ? "short": "long") + "hand"][e]
                }
            }
        }
        function ee() { ["D", "F", "J", "M", "W", "l"].forEach(function(e) {
                ye.formats[e] = i.prototype.formats[e].bind(ye)
            }),
            ye.revFormat.F = i.prototype.revFormat.F.bind(ye),
            ye.revFormat.M = i.prototype.revFormat.M.bind(ye)
        }
        function te() {
            if (ye.input = ye.config.wrap ? ye.element.querySelector("[data-input]") : ye.element, !ye.input) return console.warn("Error: invalid input element specified", ye.input);
            ye.input._type = ye.input.type,
            ye.input.type = "text",
            ye.input.classList.add("flatpickr-input"),
            ye._input = ye.input,
            ye.config.altInput && (ye.altInput = fe(ye.input.nodeName, ye.input.className + " " + ye.config.altInputClass), ye._input = ye.altInput, ye.altInput.placeholder = ye.input.placeholder, ye.altInput.disabled = ye.input.disabled, ye.altInput.type = "text", ye.input.type = "hidden", !ye.config.static && ye.input.parentNode && ye.input.parentNode.insertBefore(ye.altInput, ye.input.nextSibling)),
            ye.config.allowInput || ye._input.setAttribute("readonly", "readonly"),
            ye._positionElement = ye.config.positionElement || ye._input
        }
        function ne() {
            var e = ye.config.enableTime ? ye.config.noCalendar ? "time": "datetime-local": "date";
            ye.mobileInput = fe("input", ye.input.className + " flatpickr-mobile"),
            ye.mobileInput.step = "any",
            ye.mobileInput.tabIndex = 1,
            ye.mobileInput.type = e,
            ye.mobileInput.disabled = ye.input.disabled,
            ye.mobileInput.placeholder = ye.input.placeholder,
            ye.mobileFormatStr = "datetime-local" === e ? "Y-m-d\\TH:i:S": "date" === e ? "Y-m-d": "H:i:S",
            ye.selectedDates.length && (ye.mobileInput.defaultValue = ye.mobileInput.value = ye.formatDate(ye.selectedDates[0], ye.mobileFormatStr)),
            ye.config.minDate && (ye.mobileInput.min = ye.formatDate(ye.config.minDate, "Y-m-d")),
            ye.config.maxDate && (ye.mobileInput.max = ye.formatDate(ye.config.maxDate, "Y-m-d")),
            ye.input.type = "hidden",
            ye.config.altInput && (ye.altInput.type = "hidden");
            try {
                ye.input.parentNode.insertBefore(ye.mobileInput, ye.input.nextSibling)
            } catch(e) {}
            ye.mobileInput.addEventListener("change",
            function(e) {
                ye.setDate(e.target.value, !1, ye.mobileFormatStr),
                oe("Change"),
                oe("Close")
            })
        }
        function ie() {
            if (ye.isOpen) return ye.close();
            ye.open()
        }
        function oe(e, t) {
            var n = ye.config["on" + e];
            if (void 0 !== n && n.length > 0) for (var i = 0; n[i] && i < n.length; i++) n[i](ye.selectedDates, ye.input.value, ye, t);
            "Change" === e && (ye.input.dispatchEvent(re("change")), ye.input.dispatchEvent(re("input")))
        }
        function re(e) {
            return ye._supportsEvents ? new Event(e, {
                bubbles: !0
            }) : (ye._[e + "Event"] = document.createEvent("Event"), ye._[e + "Event"].initEvent(e, !0, !0), ye._[e + "Event"])
        }
        function ae(e) {
            for (var t = 0; t < ye.selectedDates.length; t++) if (0 === be(ye.selectedDates[t], e)) return "" + t;
            return ! 1
        }
        function se(e) {
            return ! ("range" !== ye.config.mode || ye.selectedDates.length < 2) && (be(e, ye.selectedDates[0]) >= 0 && be(e, ye.selectedDates[1]) <= 0)
        }
        function le() {
            ye.config.noCalendar || ye.isMobile || !ye.monthNav || (ye.currentMonthElement.textContent = ye.utils.monthToStr(ye.currentMonth) + " ", ye.currentYearElement.value = ye.currentYear, ye._hidePrevMonthArrow = ye.config.minDate && (ye.currentYear === ye.config.minDate.getFullYear() ? ye.currentMonth <= ye.config.minDate.getMonth() : ye.currentYear < ye.config.minDate.getFullYear()), ye._hideNextMonthArrow = ye.config.maxDate && (ye.currentYear === ye.config.maxDate.getFullYear() ? ye.currentMonth + 1 > ye.config.maxDate.getMonth() : ye.currentYear > ye.config.maxDate.getFullYear()))
        }
        function ce(e) {
            if (!ye.selectedDates.length) return ye.clear(e);
            ye.isMobile && (ye.mobileInput.value = ye.selectedDates.length ? ye.formatDate(ye.latestSelectedDateObj, ye.mobileFormatStr) : "");
            var t = "range" !== ye.config.mode ? "; ": ye.l10n.rangeSeparator;
            ye.input.value = ye.selectedDates.map(function(e) {
                return ye.formatDate(e, ye.config.dateFormat)
            }).join(t),
            ye.config.altInput && (ye.altInput.value = ye.selectedDates.map(function(e) {
                return ye.formatDate(e, ye.config.altFormat)
            }).join(t)),
            oe("ValueUpdate")
        }
        function de(e) {
            return Math.max( - 1, Math.min(1, e.wheelDelta || -e.deltaY))
        }
        function ue(e) {
            e.preventDefault();
            var t = ye.currentYearElement.parentNode.contains(e.target);
            if (e.target === ye.currentMonthElement || t) {
                var n = de(e);
                t ? (B(ye.currentYear + n), e.target.value = ye.currentYear) : ye.changeMonth(n, !0, !1)
            }
        }
        function he(e) {
            var t = ye.prevMonthNav.contains(e.target),
            n = ye.nextMonthNav.contains(e.target);
            t || n ? M(t ? -1 : 1) : e.target === ye.currentYearElement ? (e.preventDefault(), ye.currentYearElement.select()) : "arrowUp" === e.target.className ? ye.changeYear(ye.currentYear + 1) : "arrowDown" === e.target.className && ye.changeYear(ye.currentYear - 1)
        }
        function fe(e, t, n) {
            var i = window.document.createElement(e);
            return t = t || "",
            n = n || "",
            i.className = t,
            void 0 !== n && (i.textContent = n),
            i
        }
        function me(e) {
            return e instanceof Array ? e: [e]
        }
        function pe(e, t, n) {
            if (n) return e.classList.add(t);
            e.classList.remove(t)
        }
        function ge(e, t, n) {
            var i = void 0;
            return function() {
                var o = this,
                r = arguments;
                clearTimeout(i),
                i = setTimeout(function() {
                    i = null,
                    n || e.apply(o, r)
                },
                t),
                n && !i && e.apply(o, r)
            }
        }
        function be(e, t, n) {
            return e instanceof Date && t instanceof Date && (!1 !== n ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0) : e.getTime() - t.getTime())
        }
        function ve(e) {
            e.preventDefault();
            var t = "keydown" === e.type,
            n = (e.type, e.type, e.target);
            if (ye.amPM && e.target === ye.amPM) return e.target.textContent = ["AM", "PM"]["AM" === e.target.textContent | 0];
            var i = Number(n.min),
            o = Number(n.max),
            r = Number(n.step),
            a = parseInt(n.value, 10),
            s = e.delta || (t ? 38 === e.which ? 1 : -1 : Math.max( - 1, Math.min(1, e.wheelDelta || -e.deltaY)) || 0),
            l = a + r * s;
            if (void 0 !== n.value && 2 === n.value.length) {
                var c = n === ye.hourElement,
                d = n === ye.minuteElement;
                l < i ? (l = o + l + !c + (c && !ye.amPM), d && y(null, -1, ye.hourElement)) : l > o && (l = n === ye.hourElement ? l - o - !ye.amPM: i, d && y(null, 1, ye.hourElement)),
                ye.amPM && c && (1 === r ? l + a === 23 : Math.abs(l - a) > r) && (ye.amPM.textContent = "PM" === ye.amPM.textContent ? "AM": "PM"),
                n.value = ye.pad(l)
            }
        }
        var ye = this;
        return ye._ = {},
        ye._.afterDayAnim = k,
        ye.changeMonth = M,
        ye.changeYear = B,
        ye.clear = O,
        ye.close = R,
        ye._createElement = fe,
        ye.destroy = P,
        ye.isEnabled = _,
        ye.jumpToDate = b,
        ye.open = j,
        ye.redraw = q,
        ye.set = X,
        ye.setDate = Q,
        ye.toggle = ie,
        function() {
            ye.element = ye.input = e,
            ye.instanceConfig = t || {},
            ye.parseDate = i.prototype.parseDate.bind(ye),
            ye.formatDate = i.prototype.formatDate.bind(ye),
            ee(),
            W(),
            V(),
            te(),
            G(),
            $(),
            ye.isOpen = !1,
            ye.isMobile = !ye.config.disableMobile && !ye.config.inline && "single" === ye.config.mode && !ye.config.disable.length && !ye.config.enable.length && !ye.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            ye.isMobile || E(),
            f(),
            (ye.selectedDates.length || ye.config.noCalendar) && (ye.config.enableTime && l(ye.config.noCalendar ? ye.latestSelectedDateObj || ye.config.minDate: null), ce()),
            ye.config.weekNumbers && (ye.calendarContainer.style.width = ye.daysContainer.offsetWidth + ye.weekWrapper.offsetWidth + "px"),
            ye.showTimeInput = ye.selectedDates.length > 0 || ye.config.noCalendar,
            ye.isMobile || K(),
            oe("Ready")
        } (),
        ye
    }
    function o(e, t) {
        for (var n = Array.prototype.slice.call(e), o = [], r = 0; r < n.length; r++) try {
            n[r]._flatpickr = new i(n[r], t || {}),
            o.push(n[r]._flatpickr)
        } catch(e) {
            console.warn(e, e.stack)
        }
        return 1 === o.length ? o[0] : o
    }
    var r = Object.assign ||
    function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    },
    a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(e) {
        return typeof e
    }: function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
    };
    i.defaultConfig = {
        mode: "single",
        position: "auto",
        animate: -1 === window.navigator.userAgent.indexOf("MSIE"),
        utc: !1,
        wrap: !1,
        weekNumbers: !1,
        allowInput: !1,
        clickOpens: !0,
        closeOnSelect: !0,
        time_24hr: !1,
        enableTime: !1,
        noCalendar: !1,
        dateFormat: "Y-m-d",
        ariaDateFormat: "F j, Y",
        altInput: !1,
        altInputClass: "form-control input",
        altFormat: "F j, Y",
        defaultDate: null,
        minDate: null,
        maxDate: null,
        parseDate: null,
        formatDate: null,
        getWeek: function(e) {
            var t = new Date(e.getTime()),
            n = new Date(t.getFullYear(), 0, 1);
            return Math.ceil(((t - n) / 864e5 + n.getDay() + 1) / 7)
        },
        enable: [],
        disable: [],
        shorthandCurrentMonth: !1,
        inline: !1,
        static: !1,
        appendTo: null,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        enableSeconds: !1,
        hourIncrement: 1,
        minuteIncrement: 5,
        defaultHour: 12,
        defaultMinute: 0,
        disableMobile: !1,
        locale: "default",
        plugins: [],
        onClose: void 0,
        onChange: void 0,
        onDayCreate: void 0,
        onMonthChange: void 0,
        onOpen: void 0,
        onParseConfig: void 0,
        onReady: void 0,
        onValueUpdate: void 0,
        onYearChange: void 0,
        onKeyDown: void 0
    },
    i.l10ns = {
        en: {
            weekdays: {
                shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            months: {
                shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            },
            daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            firstDayOfWeek: 0,
            ordinal: function(e) {
                var t = e % 100;
                if (t > 3 && t < 21) return "th";
                switch (t % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th"
                }
            },
            rangeSeparator: " to ",
            weekAbbreviation: "Wk",
            scrollTitle: "Scroll to increment",
            toggleTitle: "Click to toggle"
        }
    },
    i.l10ns.
default = Object.create(i.l10ns.en),
    i.localize = function(e) {
        return r(i.l10ns.
    default, e || {})
    },
    i.setDefaults = function(e) {
        return r(i.defaultConfig, e || {})
    },
    i.prototype = {
        formats: {
            Z: function(e) {
                return e.toISOString()
            },
            D: function(e) {
                return this.l10n.weekdays.shorthand[this.formats.w(e)]
            },
            F: function(e) {
                return this.utils.monthToStr(this.formats.n(e) - 1, !1)
            },
            G: function(e) {
                return i.prototype.pad(i.prototype.formats.h(e))
            },
            H: function(e) {
                return i.prototype.pad(e.getHours())
            },
            J: function(e) {
                return e.getDate() + this.l10n.ordinal(e.getDate())
            },
            K: function(e) {
                return e.getHours() > 11 ? "PM": "AM"
            },
            M: function(e) {
                return this.utils.monthToStr(e.getMonth(), !0)
            },
            S: function(e) {
                return i.prototype.pad(e.getSeconds())
            },
            U: function(e) {
                return e.getTime() / 1e3
            },
            W: function(e) {
                return this.config.getWeek(e)
            },
            Y: function(e) {
                return e.getFullYear()
            },
            d: function(e) {
                return i.prototype.pad(e.getDate())
            },
            h: function(e) {
                return e.getHours() % 12 ? e.getHours() % 12 : 12
            },
            i: function(e) {
                return i.prototype.pad(e.getMinutes())
            },
            j: function(e) {
                return e.getDate()
            },
            l: function(e) {
                return this.l10n.weekdays.longhand[e.getDay()]
            },
            m: function(e) {
                return i.prototype.pad(e.getMonth() + 1)
            },
            n: function(e) {
                return e.getMonth() + 1
            },
            s: function(e) {
                return e.getSeconds()
            },
            w: function(e) {
                return e.getDay()
            },
            y: function(e) {
                return String(e.getFullYear()).substring(2)
            }
        },
        formatDate: function(e, t) {
            var n = this;
            return void 0 !== this.config && void 0 !== this.config.formatDate ? this.config.formatDate(e, t) : t.split("").map(function(t, i, o) {
                return n.formats[t] && "\\" !== o[i - 1] ? n.formats[t](e) : "\\" !== t ? t: ""
            }).join("")
        },
        revFormat: {
            D: function() {},
            F: function(e, t) {
                e.setMonth(this.l10n.months.longhand.indexOf(t))
            },
            G: function(e, t) {
                e.setHours(parseFloat(t))
            },
            H: function(e, t) {
                e.setHours(parseFloat(t))
            },
            J: function(e, t) {
                e.setDate(parseFloat(t))
            },
            K: function(e, t) {
                var n = e.getHours();
                12 !== n && e.setHours(n % 12 + 12 * /pm/i.test(t))
            },
            M: function(e, t) {
                e.setMonth(this.l10n.months.shorthand.indexOf(t))
            },
            S: function(e, t) {
                e.setSeconds(t)
            },
            U: function(e, t) {
                return new Date(1e3 * parseFloat(t))
            },
            W: function(e, t) {
                return t = parseInt(t),
                new Date(e.getFullYear(), 0, 2 + 7 * (t - 1), 0, 0, 0, 0, 0)
            },
            Y: function(e, t) {
                e.setFullYear(t)
            },
            Z: function(e, t) {
                return new Date(t)
            },
            d: function(e, t) {
                e.setDate(parseFloat(t))
            },
            h: function(e, t) {
                e.setHours(parseFloat(t))
            },
            i: function(e, t) {
                e.setMinutes(parseFloat(t))
            },
            j: function(e, t) {
                e.setDate(parseFloat(t))
            },
            l: function() {},
            m: function(e, t) {
                e.setMonth(parseFloat(t) - 1)
            },
            n: function(e, t) {
                e.setMonth(parseFloat(t) - 1)
            },
            s: function(e, t) {
                e.setSeconds(parseFloat(t))
            },
            w: function() {},
            y: function(e, t) {
                e.setFullYear(2e3 + parseFloat(t))
            }
        },
        tokenRegex: {
            D: "(\\w+)",
            F: "(\\w+)",
            G: "(\\d\\d|\\d)",
            H: "(\\d\\d|\\d)",
            J: "(\\d\\d|\\d)\\w+",
            K: "(\\w+)",
            M: "(\\w+)",
            S: "(\\d\\d|\\d)",
            U: "(.+)",
            W: "(\\d\\d|\\d)",
            Y: "(\\d{4})",
            Z: "(.+)",
            d: "(\\d\\d|\\d)",
            h: "(\\d\\d|\\d)",
            i: "(\\d\\d|\\d)",
            j: "(\\d\\d|\\d)",
            l: "(\\w+)",
            m: "(\\d\\d|\\d)",
            n: "(\\d\\d|\\d)",
            s: "(\\d\\d|\\d)",
            w: "(\\d\\d|\\d)",
            y: "(\\d{2})"
        },
        pad: function(e) {
            return ("0" + e).slice( - 2)
        },
        parseDate: function(e, t, n) {
            if (!e) return null;
            var o = e;
            if (e instanceof Date) e = new Date(e.getTime()),
            e.fp_isUTC = o.fp_isUTC;
            else if (void 0 !== e.toFixed) e = new Date(e);
            else {
                var r = t || (this.config || i.defaultConfig).dateFormat;
                if ("today" === (e = String(e).trim())) e = new Date,
                n = !0;
                else if (/Z$/.test(e) || /GMT$/.test(e)) e = new Date(e);
                else if (this.config && this.config.parseDate) e = this.config.parseDate(e, r);
                else {
                    for (var a = this.config && this.config.noCalendar ? new Date((new Date).setHours(0, 0, 0, 0)) : new Date((new Date).getFullYear(), 0, 1, 0, 0, 0, 0), s = void 0, l = 0, c = 0, d = ""; l < r.length; l++) {
                        var u = r[l],
                        h = "\\" === u,
                        f = "\\" === r[l - 1] || h;
                        if (this.tokenRegex[u] && !f) {
                            d += this.tokenRegex[u];
                            var m = new RegExp(d).exec(e);
                            m && (s = !0) && (a = this.revFormat[u](a, m[++c]) || a)
                        } else h || (d += ".")
                    }
                    e = s ? a: null
                }
            }
            return e instanceof Date ? (
                this.config && this.config.utc && !e.fp_isUTC && (e = e.fp_toUTC()), !0 === n && e.setHours(0, 0, 0, 0), e
            ) : (
                console.warn("flatpickr: invalid date " + o),
                /*console.info(this.element),*/
                    null
            )
        }
    },
    "undefined" != typeof HTMLElement && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(e) {
        return o(this, e)
    },
    HTMLElement.prototype.flatpickr = function(e) {
        return o([this], e)
    }),
    "undefined" != typeof jQuery && (jQuery.fn.flatpickr = function(e) {
        return o(this, e)
    }),
    Date.prototype.fp_incr = function(e) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + parseInt(e, 10))
    },
    Date.prototype.fp_isUTC = !1,
    Date.prototype.fp_toUTC = function() {
        var e = new Date(this.getUTCFullYear(), this.getUTCMonth(), this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds());
        return e.fp_isUTC = !0,
        e
    },
    e.exports = i
},
function(e, t, n) {
    var i = i || {
        l10ns: {}
    };
    i.l10ns.zh = {},
    i.l10ns.zh.weekdays = {
        shorthand: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        longhand: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
    },
    i.l10ns.zh.months = {
        shorthand: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        longhand: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
    },
    i.l10ns.zh.rangeSeparator = " 至 ",
    i.l10ns.zh.weekAbbreviation = "周",
    i.l10ns.zh.scrollTitle = "滚动切换",
    i.l10ns.zh.toggleTitle = "点击切换 12/24 小时时制",
    e.exports = i.l10ns
},
function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }
    function i() {
        throw new Error("clearTimeout has not been defined")
    }
    function o(e) {
        if (d === setTimeout) return setTimeout(e, 0);
        if ((d === n || !d) && setTimeout) return d = setTimeout,
        setTimeout(e, 0);
        try {
            return d(e, 0)
        } catch(t) {
            try {
                return d.call(null, e, 0)
            } catch(t) {
                return d.call(this, e, 0)
            }
        }
    }
    function r(e) {
        if (u === clearTimeout) return clearTimeout(e);
        if ((u === i || !u) && clearTimeout) return u = clearTimeout,
        clearTimeout(e);
        try {
            return u(e)
        } catch(t) {
            try {
                return u.call(null, e)
            } catch(t) {
                return u.call(this, e)
            }
        }
    }
    function a() {
        p && f && (p = !1, f.length ? m = f.concat(m) : g = -1, m.length && s())
    }
    function s() {
        if (!p) {
            var e = o(a);
            p = !0;
            for (var t = m.length; t;) {
                for (f = m, m = []; ++g < t;) f && f[g].run();
                g = -1,
                t = m.length
            }
            f = null,
            p = !1,
            r(e)
        }
    }
    function l(e, t) {
        this.fun = e,
        this.array = t
    }
    function c() {}
    var d, u, h = e.exports = {}; !
    function() {
        try {
            d = "function" == typeof setTimeout ? setTimeout: n
        } catch(e) {
            d = n
        }
        try {
            u = "function" == typeof clearTimeout ? clearTimeout: i
        } catch(e) {
            u = i
        }
    } ();
    var f, m = [],
    p = !1,
    g = -1;
    h.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        m.push(new l(e, t)),
        1 !== m.length || p || o(s)
    },
    l.prototype.run = function() {
        this.fun.apply(null, this.array)
    },
    h.title = "browser",
    h.browser = !0,
    h.env = {},
    h.argv = [],
    h.version = "",
    h.versions = {},
    h.on = c,
    h.addListener = c,
    h.once = c,
    h.off = c,
    h.removeListener = c,
    h.removeAllListeners = c,
    h.emit = c,
    h.prependListener = c,
    h.prependOnceListener = c,
    h.listeners = function(e) {
        return []
    },
    h.binding = function(e) {
        throw new Error("process.binding is not supported")
    },
    h.cwd = function() {
        return "/"
    },
    h.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    },
    h.umask = function() {
        return 0
    }
},
, , ,
function(e, t, n) {
    var i = n(67);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    n(3)(i, {});
    i.locals && (e.exports = i.locals)
},
function(e, t, n) {
    var i = n(69);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    n(3)(i, {});
    i.locals && (e.exports = i.locals)
}]);
//处理backspace按键在非输入标签按下页面返回的问题
function forbidBackSpace(e) {
    // console.log(parent.document.getElementsByClassName('sde-editor-content')[0]);
    // console.log(parent.sde.__ue__.isFocus(e || event));
    var ev = window.event || e; //获取event对象
    //console.log(ev.keyCode);
    //console.log(parent.sde.__ue__.selection.getStart());
    try{
        var select = parent.sde.__ue__.selection.getStart();
        if(!parent.sde.__ue__.selection.isFocus()){
            ev.preventDefault();
        }
        // king 防止控件为false时，依然可以粘贴进去
        if (ev.keyCode == '86') {
            var sL = select.classList.contains("sde-left");
            var sR = select.classList.contains("sde-right");
            var sV = select.classList.contains("sde-value");
            if (sL || sR) {
                ev.preventDefault();
            } else if (sV) {
                var sContenteditable = select.getAttribute('contenteditable');
                if (sContenteditable === false || sContenteditable === 'false') {
                    ev.preventDefault();
                }

            }
        }
        //king contenteditable=false元素的内容，无法复制的问题
        if ((ev.ctrlKey || ev.metaKey)||((ev.ctrlKey || ev.metaKey) && ev.keyCode == '67')) {
            return ;
        }
        var contenteditable = select.getAttribute('contenteditable')
            || select.parentElement.getAttribute('contenteditable')
            || select.parentElement.parentElement.getAttribute('contenteditable');
        (contenteditable === false || contenteditable === 'false') && ev.preventDefault();
        var bo = (select.nodeName !== 'TD' && select.nodeName !== 'SPAN'&& select.nodeName !== 'P'&& select.nodeName !== 'DIV'&& select.nodeName !== 'IMG');
        if(8 == ev.keyCode &&  (contenteditable === false || contenteditable === 'false') && bo ){
            ev.preventDefault();
        }

    }catch (error){

    }
}

/**
 *showVal 随访滑动块效果  Nothing 2018-02-08
 * **/
deleteSelect();
function showVal(newVal,id){
    document.getElementById(id).innerHTML=newVal*0.1;
}
function deleteSelect(){
    if($("#tickmarks select").length != 0 ){
        $("#swiper1 datalist select").children().appendTo("#swiper1 datalist");
        $("#swiper2 datalist select").children().appendTo("#swiper2 datalist");
        $("#swiper1 datalist select,#swiper2 datalist select").remove();
    }
}

$(document).bind("keydown",function(e){
	if(e.keyCode == 113){                           //切换粘贴模式
        parent.sde.__ue__.execCommand( 'pasteplain');
		var pasteState = parent.sde.__ue__.queryCommandState( 'pasteplain');
		pasteState == 0 ? alert("带格式粘贴模式") : alert("纯文本粘贴模式");
	}
})

/**
 *stepWidget 控制光标移动 start Nothing 2018-02-22
 * **/
var num = 0;
var jumpSwitch = false;
$(".sde-bg").bind("click",function(){
    jumpSwitch = false;
})
function stepWidget(step){
        var arr = $(".sde-value");
        var len = arr.length;
        var _id;
        var sdeValue = parent.sde.__ue__.selection.getStart();
        if($(sdeValue).hasClass("sde-value")){
            _id = $(sdeValue).attr("_id");
        }else{
            _id = $(sdeValue).closest(".sde-value").attr("_id");
        }
         num = num + step;
        if(jumpSwitch){
            if($(".sde-value")[num] == undefined && step >= 0){
                num = 0;
            }else if($(".sde-value")[num] == undefined && step < 0){
                num = len - 1;
            }
            placeCaretAtEnd($(".sde-value")[num]);
                jumpSwitch = true;
        }else{
            for(var i= 0;i<arr.length;i++){
                if($(arr[i]).attr("_id") == _id){
                    if($(".sde-value")[i+step])placeCaretAtEnd($(".sde-value")[i+step]);
                    jumpSwitch = true;
                    num = i;
                    return;
                }
            }
        }
}


$(".sde-value[title='result']").on("focus",function(){
    this.innerHTML = parent.sde.getRadioVal()
})
function placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}
/**
 *stepWidget 控制光标移动 end Nothing 2018-02-22
 * **/

document.onkeypress = forbidBackSpace;
document.onkeydown = forbidBackSpace;

$(document).bind("copy",function(e){
    var div = document.createElement('div');
    var copyFrame = window.getSelection().getRangeAt(0).cloneContents();
    if($(copyFrame).children().eq(0).hasClass("sde-left") && $(copyFrame).children().eq(1).hasClass("sde-value") && $(copyFrame).children().eq(2).hasClass("sde-right")){
        $(div).append(window.getSelection().getRangeAt(0).commonAncestorContainer.outerHTML);
    }else{
        div.appendChild(copyFrame);
    }
    var selection = div.innerHTML+"&#8203";
    // var sdeArr = $(selection).find(".sde-value");
    window.sessionStorage.setItem("copyContent",selection);
    window.sessionStorage.setItem("copyCount",true);
})
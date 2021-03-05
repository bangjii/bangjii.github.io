self.AMP_CONFIG = {
    "v": "012102130314004",
    "type": "production",
    "allow-doc-opt-in": ["amp-next-page"],
    "allow-url-opt-in": [],
    "canary": 0,
    "a4aProfilingRate": 0.01,
    "adsense-ad-size-optimization": 1,
    "amp-accordion-display-locking": 1,
    "doubleclickSraExp": 0.01,
    "doubleclickSraReportExcludedBlock": 0.1,
    "expand-json-targeting": 1,
    "flexAdSlots": 0.05,
    "intersect-resources": 0,
    "ios-fixed-no-transfer": 0,
    "fie-resources": 1,
    "visibility-trigger-improvements": 1,
    "layout-aspect-ratio-css": 0.1,
    "sticky-ad-transition": 0.02
}; /*AMP_CONFIG*/
var global = self;
self.AMP = self.AMP || [];
try {
    (function(_) {
        if (self.AMP && !Array.isArray(self.AMP)) return;
        'use strict';
        var g, aa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        };

        function ba(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return d
            }
            return function() {
                throw Error("Cannot find global object");
            }()
        }
        var ca = ba(this);
        "function" === typeof Symbol && Symbol("x");
        var ea;
        if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
        else {
            var fa;
            a: {
                var ha = {
                        a: !0
                    },
                    ka = {};
                try {
                    ka.__proto__ = ha;
                    fa = ka.a;
                    break a
                } catch (a) {}
                fa = !1
            }
            ea = fa ? function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a
            } : null
        }
        var la = ea;

        function p(a, b) {
            a.prototype = aa(b.prototype);
            a.prototype.constructor = a;
            if (la) la(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Ph = b.prototype
        }

        function ma() {
            this.Ua = new na
        }
        ma.prototype.abort = function() {
            this.Ua.Qd || (this.Ua.Qd = !0, this.Ua.Cc && this.Ua.Cc({
                type: "abort",
                bubbles: !1,
                cancelable: !1,
                target: this.Ua,
                currentTarget: this.Ua
            }))
        };
        ca.Object.defineProperties(ma.prototype, {
            signal: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.Ua
                }
            }
        });

        function na() {
            this.Qd = !1;
            this.Cc = null
        }
        ca.Object.defineProperties(na.prototype, {
            aborted: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.Qd
                }
            },
            onabort: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.Cc
                },
                set: function(a) {
                    this.Cc = a
                }
            }
        });

        function oa(a, b) {
            var c = b || 0,
                d = this.length;
            for (b = 0 <= c ? c : Math.max(d + c, 0); b < d; b++) {
                var e = this[b];
                if (e === a || a !== a && e !== e) return !0
            }
            return !1
        };
        var pa;

        function v() {
            return pa ? pa : pa = Promise.resolve(void 0)
        };
        var qa = /^[a-z][a-z0-9._]*-[a-z0-9._-]*$/,
            ra = "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "),
            ta = {
                childList: !0,
                subtree: !0
            };

        function ua(a, b) {
            if (!qa.test(b) || ra.includes(b)) throw new a('invalid custom element name "' + b + '"');
        }

        function wa(a) {
            setTimeout(function() {
                self.__AMP_REPORT_ERROR(a);
                throw a;
            })
        }

        function xa(a, b) {
            this.A = a;
            this.Lc = b;
            this.Mf = Object.create(null)
        }
        xa.prototype.define = function(a, b, c) {
            this.Lc.define(a, b, c);
            var d = this.Mf,
                e = d[a];
            e && (e.resolve(), delete d[a])
        };
        xa.prototype.get = function(a) {
            var b = this.Lc.getByName(a);
            if (b) return b.ctor
        };
        xa.prototype.whenDefined = function(a) {
            var b = this.A,
                c = b.Promise;
            ua(b.SyntaxError, a);
            if (this.Lc.getByName(a)) return v();
            b = this.Mf;
            var d = b[a];
            if (d) return d.promise;
            var e, f = new c(function(h) {
                return e = h
            });
            b[a] = {
                promise: f,
                resolve: e
            };
            return f
        };
        xa.prototype.upgrade = function(a) {
            this.Lc.upgrade(a)
        };

        function ya(a) {
            this.A = a;
            this.Ad = Object.create(null);
            this.Ra = "";
            this.ka = this.zd = null;
            this.ne = [a.document]
        }
        g = ya.prototype;
        g.current = function() {
            var a = this.zd;
            this.zd = null;
            return a
        };
        g.getByName = function(a) {
            var b = this.Ad[a];
            if (b) return b
        };
        g.getByConstructor = function(a) {
            var b = this.Ad,
                c;
            for (c in b) {
                var d = b[c];
                if (d.ctor === a) return d
            }
        };
        g.define = function(a, b, c) {
            var d = this,
                e = this.A,
                f = e.Error;
            e = e.SyntaxError;
            if (c) throw new f("Extending native custom elements is not supported");
            ua(e, a);
            if (this.getByName(a) || this.getByConstructor(b)) throw new f('duplicate definition "' + a + '"');
            this.Ad[a] = {
                name: a,
                ctor: b
            };
            za(this, a);
            this.ne.forEach(function(h) {
                d.upgrade(h, a)
            })
        };
        g.upgrade = function(a, b) {
            var c = !!b,
                d = Aa(a, b || this.Ra);
            for (a = 0; a < d.length; a++) {
                var e = d[a];
                c ? Ba(this, e) : this.upgradeSelf(e)
            }
        };
        g.upgradeSelf = function(a) {
            var b = this.getByName(a.localName);
            b && Ca(this, a, b)
        };

        function Aa(a, b) {
            return b && a.querySelectorAll ? a.querySelectorAll(b) : []
        }

        function Ca(a, b, c) {
            c = c.ctor;
            if (!(b instanceof c)) {
                a.zd = b;
                try {
                    if (new c !== b) throw new a.A.Error("Constructor illegally returned a different instance.");
                } catch (d) {
                    wa(d)
                }
            }
        }

        function Ba(a, b) {
            var c = a.getByName(b.localName);
            if (c && (Ca(a, b, c), b.connectedCallback)) try {
                b.connectedCallback()
            } catch (d) {
                wa(d)
            }
        }

        function za(a, b) {
            if (a.Ra) a.Ra += "," + b;
            else {
                a.Ra = b;
                var c = new a.A.MutationObserver(function(d) {
                    d && Da(a, d)
                });
                a.ka = c;
                a.ne.forEach(function(d) {
                    c.observe(d, ta)
                });
                Ea(a.A, a)
            }
        }
        g.observe = function(a) {
            this.ne.push(a);
            this.ka && this.ka.observe(a, ta)
        };
        g.sync = function() {
            this.ka && Da(this, this.ka.takeRecords())
        };

        function Da(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                if (d) {
                    var e = d,
                        f = e.addedNodes,
                        h = e.removedNodes;
                    for (e = 0; e < f.length; e++) {
                        var k = f[e],
                            l = Aa(k, a.Ra);
                        Ba(a, k);
                        for (k = 0; k < l.length; k++) Ba(a, l[k])
                    }
                    for (e = 0; e < h.length; e++) {
                        k = h[e];
                        var m = Aa(k, a.Ra);
                        if (k.disconnectedCallback) try {
                            k.disconnectedCallback()
                        } catch (q) {
                            wa(q)
                        }
                        for (k = 0; k < m.length; k++) {
                            var n = m[k];
                            if (n.disconnectedCallback) try {
                                n.disconnectedCallback()
                            } catch (q) {
                                wa(q)
                            }
                        }
                    }
                }
            }
        }

        function Ea(a, b) {
            var c = a.document,
                d = a.Document.prototype,
                e = a.Element.prototype,
                f = a.Node.prototype,
                h = d.createElement,
                k = d.importNode,
                l = f.appendChild,
                m = f.cloneNode,
                n = f.insertBefore,
                q = f.removeChild,
                t = f.replaceChild;
            d.createElement = function(y) {
                var F = b.getByName(y);
                return F ? new F.ctor : h.apply(this, arguments)
            };
            d.importNode = function() {
                var y = k.apply(this, arguments);
                y && this === c && (b.upgradeSelf(y), b.upgrade(y));
                return y
            };
            f.appendChild = function() {
                var y = l.apply(this, arguments);
                b.sync();
                return y
            };
            f.insertBefore =
                function() {
                    var y = n.apply(this, arguments);
                    b.sync();
                    return y
                };
            f.removeChild = function() {
                var y = q.apply(this, arguments);
                b.sync();
                return y
            };
            f.replaceChild = function() {
                var y = t.apply(this, arguments);
                b.sync();
                return y
            };
            f.cloneNode = function() {
                var y = m.apply(this, arguments);
                y.ownerDocument === c && (b.upgradeSelf(y), b.upgrade(y));
                return y
            };
            var w = e,
                u = Object.getOwnPropertyDescriptor(w, "innerHTML");
            u || (w = Object.getPrototypeOf(a.HTMLElement.prototype), u = Object.getOwnPropertyDescriptor(w, "innerHTML"));
            if (u && u.configurable) {
                var r =
                    u.set;
                u.set = function(y) {
                    r.call(this, y);
                    b.upgrade(this)
                };
                Object.defineProperty(w, "innerHTML", u)
            }
        }

        function Fa() {
            function a() {
                var n = this.constructor,
                    q = h.current();
                q || (q = h.getByConstructor(n), q = f.call(e, q.name));
                Ga(q, n.prototype);
                return q
            }
            var b = Ha,
                c = b.Element,
                d = b.HTMLElement,
                e = b.document,
                f = e.createElement,
                h = new ya(b),
                k = new xa(b, h);
            Object.defineProperty(b, "customElements", {
                enumerable: !0,
                configurable: !0,
                value: k
            });
            c = c.prototype;
            var l = c.attachShadow,
                m = c.createShadowRoot;
            l && (c.attachShadow = function(n) {
                var q = l.apply(this, arguments);
                h.observe(q);
                return q
            }, c.attachShadow.toString = function() {
                return l.toString()
            });
            m && (c.createShadowRoot = function() {
                var n = m.apply(this, arguments);
                h.observe(n);
                return n
            }, c.createShadowRoot.toString = function() {
                return m.toString()
            });
            Ia(d, a);
            b.HTMLElement = a;
            a.call || (a.apply = b.Function.apply, a.bind = b.Function.bind, a.call = b.Function.call)
        }

        function Ja() {
            function a() {
                return d.construct(c, [], this.constructor)
            }
            var b = Ha,
                c = b.HTMLElement,
                d = b.Reflect;
            Ia(c, a);
            b.HTMLElement = a
        }

        function Ia(a, b) {
            b.prototype = Object.create(a.prototype, {
                constructor: {
                    configurable: !0,
                    writable: !0,
                    value: b
                }
            });
            Ga(b, a)
        }

        function Ga(a, b) {
            if (Object.setPrototypeOf) Object.setPrototypeOf(a, b);
            else if ({
                    __proto__: {
                        test: !0
                    }
                }.test) a.__proto__ = b;
            else
                for (; null !== b && !Object.isPrototypeOf.call(b, a);) {
                    for (var c = Object.getOwnPropertyNames(b), d = 0; d < c.length; d++) {
                        var e = c[d];
                        if (!Object.hasOwnProperty.call(a, e)) {
                            var f = Object.getOwnPropertyDescriptor(b, e);
                            Object.defineProperty(a, e, f)
                        }
                    }
                    b = Object.getPrototypeOf(b)
                }
        };

        function Ka(a, b) {
            if (void 0 === b ? this.contains(a) : !b) return this.remove(a), !1;
            this.add(a);
            return !0
        }

        function La() {
            var a = self;
            if (/Trident|MSIE|IEMobile/i.test(a.navigator.userAgent) && a.DOMTokenList) {
                a.Object.defineProperty(a.DOMTokenList.prototype, "toggle", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: Ka
                });
                var b = a.DOMTokenList.prototype.add;
                a.DOMTokenList.prototype.add = function() {
                    for (var c = 0; c < arguments.length; c++) b.call(this, arguments[c])
                }
            }
        };

        function Ma(a) {
            return a == this || this.documentElement.contains(a)
        };

        function Na(a, b) {
            var c = b = void 0 === b ? "" : b;
            try {
                return decodeURIComponent(a)
            } catch (d) {
                return c
            }
        };
        var Oa = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;

        function x(a) {
            var b = Object.create(null);
            if (!a) return b;
            for (var c; c = Oa.exec(a);) {
                var d = Na(c[1], c[1]),
                    e = c[2] ? Na(c[2].replace(/\+/g, " "), c[2]) : "";
                b[d] = e
            }
            return b
        };
        var Pa = "";

        function z(a) {
            var b = a || self;
            if (b.__AMP_MODE) b = b.__AMP_MODE;
            else {
                var c = x(b.location.originalHash || b.location.hash);
                var d = x(b.location.search);
                Pa || (Pa = b.AMP_CONFIG && b.AMP_CONFIG.v ? b.AMP_CONFIG.v : "012102130314004");
                c = {
                    localDev: !1,
                    development: !!(0 <= ["1", "actions", "amp", "amp4ads", "amp4email"].indexOf(c.development) || b.AMP_DEV_MODE),
                    examiner: "2" == c.development,
                    esm: !1,
                    geoOverride: c["amp-geo"],
                    minified: !0,
                    lite: void 0 != d.amp_lite,
                    test: !1,
                    log: c.log,
                    version: "2102130314004",
                    rtvVersion: Pa
                };
                b = b.__AMP_MODE = c
            }
            return b
        };
        var Qa = Object.prototype.toString;

        function A(a) {
            return Array.isArray(a)
        }

        function Ra(a) {
            return a ? Array.prototype.slice.call(a) : []
        }

        function Sa(a) {
            return "[object Object]" === Qa.call(a)
        }

        function Ta(a) {
            return "number" === typeof a && isFinite(a)
        };

        function Ua(a) {
            var b = !1,
                c = null,
                d = a;
            return function(e) {
                for (var f = [], h = 0; h < arguments.length; ++h) f[h - 0] = arguments[h];
                b || (c = d.apply(self, f), b = !0, d = null);
                return c
            }
        };
        var B = self.AMP_CONFIG || {},
            Va = ("string" == typeof B.cdnProxyRegex ? new RegExp(B.cdnProxyRegex) : B.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;

        function Wa(a) {
            if (!self.document || !self.document.head || self.location && Va.test(self.location.origin)) return null;
            var b = self.document.head.querySelector('meta[name="' + a + '"]');
            return b && b.getAttribute("content") || null
        }
        var Xa = {
                thirdParty: B.thirdPartyUrl || "https://3p.ampproject.net",
                thirdPartyFrameHost: B.thirdPartyFrameHost || "ampproject.net",
                thirdPartyFrameRegex: ("string" == typeof B.thirdPartyFrameRegex ? new RegExp(B.thirdPartyFrameRegex) : B.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
                cdn: B.cdnUrl || Wa("runtime-host") || "https://cdn.ampproject.org",
                cdnProxyRegex: Va,
                localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
                errorReporting: B.errorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
                betaErrorReporting: B.betaErrorReportingUrl ||
                    "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
                localDev: B.localDev || !1,
                trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
                geoApi: B.geoApiUrl || Wa("amp-geo-api")
            },
            Ya = {
                urls: Xa
            };

        function Za() {}

        function $a(a) {
            return 0 <= a.indexOf("\u200b\u200b\u200b")
        }
        var ab = void 0;

        function bb(a) {
            ab = a
        }

        function cb(a, b) {
            return b.reduce(function(c, d) {
                return c + "&s[]=" + encodeURIComponent(String(db(d)))
            }, "https://log.amp.dev/?v=012102130314004&id=" + encodeURIComponent(a))
        }

        function eb(a, b, c) {
            var d = this,
                e = c = void 0 === c ? "" : c;
            this.win = a;
            this.Xg = b;
            this.Yg = this.win.console && this.win.console.log && "0" != z().log ? this.Xg(parseInt(z().log, 10), z().development) : 0;
            this.Vc = e;
            this.zc = null;
            this.Bg = Ua(function() {
                a.fetch(Xa.cdn + "/rtv/012102130314004/log-messages.simple.json").then(function(f) {
                    return f.json()
                }, Za).then(function(f) {
                    f && (d.zc = f)
                })
            })
        }

        function fb(a) {
            return void 0 !== ab ? ab : a.Yg
        }

        function gb(a, b, c, d) {
            if (0 != fb(a)) {
                var e = a.win.console.log;
                "ERROR" == c ? e = a.win.console.error || e : "INFO" == c ? e = a.win.console.info || e : "WARN" == c && (e = a.win.console.warn || e);
                c = A(d[0]) ? hb(a, d[0]) : d;
                b = "[" + b + "]";
                "string" === typeof c[0] ? c[0] = b + " " + c[0] : c.unshift(b);
                e.apply(a.win.console, c)
            }
        }
        g = eb.prototype;
        g.isEnabled = function() {
            return 0 != fb(this)
        };
        g.fine = function(a, b) {
            4 <= fb(this) && gb(this, a, "FINE", Array.prototype.slice.call(arguments, 1))
        };
        g.info = function(a, b) {
            3 <= fb(this) && gb(this, a, "INFO", Array.prototype.slice.call(arguments, 1))
        };
        g.warn = function(a, b) {
            2 <= fb(this) && gb(this, a, "WARN", Array.prototype.slice.call(arguments, 1))
        };
        g.Pa = function(a, b) {
            if (1 <= fb(this)) gb(this, a, "ERROR", Array.prototype.slice.call(arguments, 1));
            else {
                var c = ib.apply(null, Array.prototype.slice.call(arguments, 1));
                lb(this, c);
                return c
            }
        };
        g.error = function(a, b) {
            var c = this.Pa.apply(this, arguments);
            c && (c.name = a || c.name, self.__AMP_REPORT_ERROR(c))
        };
        g.expectedError = function(a, b) {
            var c = this.Pa.apply(this, arguments);
            c && (c.expected = !0, self.__AMP_REPORT_ERROR(c))
        };
        g.createError = function(a) {
            var b = ib.apply(null, arguments);
            lb(this, b);
            return b
        };
        g.createExpectedError = function(a) {
            var b = ib.apply(null, arguments);
            lb(this, b);
            b.expected = !0;
            return b
        };
        g.assert = function(a, b, c) {
            var d;
            if (A(b)) return this.assert.apply(this, [a].concat(hb(this, b)));
            if (!a) {
                var e = (b || "Assertion failed").split("%s"),
                    f = e.shift(),
                    h = f,
                    k = [],
                    l = 2;
                for ("" != f && k.push(f); 0 < e.length;) {
                    var m = e.shift(),
                        n = arguments[l++];
                    n && n.tagName && (d = n);
                    k.push(n);
                    f = m.trim();
                    "" != f && k.push(f);
                    h += db(n) + m
                }
                l = Error(h);
                l.fromAssert = !0;
                l.associatedElement = d;
                l.messageArray = k;
                lb(this, l);
                self.__AMP_REPORT_ERROR(l);
                throw l;
            }
            return a
        };
        g.assertElement = function(a, b) {
            mb(this, a, a && 1 == a.nodeType, "Element expected", b);
            return a
        };
        g.assertString = function(a, b) {
            mb(this, a, "string" == typeof a, "String expected", b);
            return a
        };
        g.assertNumber = function(a, b) {
            mb(this, a, "number" == typeof a, "Number expected", b);
            return a
        };
        g.assertArray = function(a, b) {
            mb(this, a, A(a), "Array expected", b);
            return a
        };
        g.assertBoolean = function(a, b) {
            mb(this, a, !!a === a, "Boolean expected", b);
            return a
        };
        g.assertEnumValue = function(a, b, c) {
            a: {
                for (var d in a)
                    if (a[d] === b) {
                        a = !0;
                        break a
                    } a = !1
            }
            if (a) return b;this.assert(!1, 'Unknown %s value: "%s"', c || "enum", b)
        };

        function lb(a, b) {
            b = nb(b);
            a.Vc ? b.message ? -1 == b.message.indexOf(a.Vc) && (b.message += a.Vc) : b.message = a.Vc : $a(b.message) && (b.message = b.message.replace("\u200b\u200b\u200b", ""))
        }

        function hb(a, b) {
            var c = b.shift();
            z(a.win).development && a.Bg();
            return a.zc && c in a.zc ? [a.zc[c]].concat(b) : ["More info at " + cb(c, b)]
        }

        function mb(a, b, c, d, e) {
            A(e) ? a.assert(c, e.concat(b)) : a.assert(c, (e || d) + ": %s", b)
        }

        function db(a) {
            return a && 1 == a.nodeType ? a.tagName.toLowerCase() + (a.id ? "#" + a.id : "") : a
        }

        function nb(a) {
            var b = Object.getOwnPropertyDescriptor(a, "message");
            if (b && b.writable) return a;
            var c = a.stack,
                d = Error(a.message),
                e;
            for (e in a) d[e] = a[e];
            d.stack = c;
            return d
        }

        function ib(a) {
            for (var b = null, c = "", d = 0; d < arguments.length; d++) {
                var e = arguments[d];
                e instanceof Error && !b ? b = nb(e) : (c && (c += " "), c += e)
            }
            b ? c && (b.message = c + ": " + b.message) : b = Error(c);
            return b
        }

        function ob(a) {
            var b = ib.apply(null, arguments);
            setTimeout(function() {
                self.__AMP_REPORT_ERROR(b);
                throw b;
            })
        }
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var pb = self.__AMP_LOG,
            qb = null;

        function D(a) {
            pb.user || (pb.user = rb("\u200b\u200b\u200b"));
            var b = pb.user.win;
            return a && a.ownerDocument.defaultView != b ? pb.userForEmbed ? pb.userForEmbed : pb.userForEmbed = rb("\u200b\u200b\u200b\u200b") : pb.user
        }

        function rb(a) {
            if (!qb) throw Error("failed to call initLogConstructor");
            return new qb(self, function(b, c) {
                return c || 1 <= b ? 4 : 2
            }, a)
        }

        function G() {
            if (pb.dev) return pb.dev;
            if (!qb) throw Error("failed to call initLogConstructor");
            return pb.dev = new qb(self, function(a) {
                return 3 <= a ? 4 : 2 <= a ? 3 : 0
            })
        }

        function I(a, b, c, d, e, f) {
            return D().assert(a, b, c, d, e, f, void 0, void 0, void 0, void 0, void 0)
        };
        var sb = Object.prototype.hasOwnProperty;

        function J(a) {
            var b = Object.create(null);
            a && Object.assign(b, a);
            return b
        }

        function K(a) {
            return a || {}
        };

        function L() {
            var a, b;
            this.promise = new Promise(function(c, d) {
                a = c;
                b = d
            });
            this.resolve = a;
            this.reject = b
        }

        function tb(a) {
            return new Promise(function(b) {
                b(a())
            })
        };
        /*
         https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        var ub = /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;

        function vb(a, b, c, d, e) {
            return e ? e : b ? "\ufffd" : d ? a.slice(0, -1) + "\\" + a.slice(-1).charCodeAt(0).toString(16) + " " : "\\" + a
        };
        var wb;

        function xb(a) {
            try {
                var b = a.ownerDocument,
                    c = b.createElement("div"),
                    d = b.createElement("div");
                c.appendChild(d);
                return c.querySelector(":scope div") === d
            } catch (e) {
                return !1
            }
        };

        function yb(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        }

        function zb(a) {
            return a.trimStart ? a.trimStart() : (a + "_").trim().slice(0, -1)
        };
        var Ab = {
            bubbles: !0,
            cancelable: !0
        };

        function Bb(a, b, c) {
            if (b(a)) c();
            else {
                var d = a.ownerDocument.defaultView;
                if (d.MutationObserver) {
                    var e = new d.MutationObserver(function() {
                        b(a) && (e.disconnect(), c())
                    });
                    e.observe(a, {
                        childList: !0
                    })
                } else var f = d.setInterval(function() {
                    b(a) && (d.clearInterval(f), c())
                }, 5)
            }
        }

        function Cb(a, b) {
            return new Promise(function(c) {
                Bb(a, b, c)
            })
        }

        function Db(a, b) {
            Bb(a.documentElement, function() {
                return !!a.body
            }, b)
        }

        function Eb(a) {
            return new Promise(function(b) {
                return Db(a, b)
            })
        }

        function Fb(a) {
            a.parentElement && a.parentElement.removeChild(a)
        }

        function Gb(a) {
            var b = K({
                src: "about:blank",
                style: "display:none"
            });
            a = a.createElement("iframe");
            for (var c in b) a.setAttribute(c, b[c]);
            return a
        }

        function Hb(a) {
            var b = a.isConnected;
            if (void 0 !== b) return b;
            do
                if (a = Ib(a), a.host) a = a.host;
                else break; while (1);
            return a.nodeType === Node.DOCUMENT_NODE
        }

        function Ib(a) {
            if (Node.prototype.getRootNode) return a.getRootNode() || a;
            for (; a.parentNode && (!a || "I-AMPHTML-SHADOW-ROOT" != a.tagName && (11 != a.nodeType || "[object ShadowRoot]" !== Object.prototype.toString.call(a))); a = a.parentNode);
            return a
        }

        function Jb(a, b) {
            for (; a && void 0 !== a; a = a.parentElement)
                if (b(a)) return a;
            return null
        }

        function Kb(a, b) {
            return a.closest ? a.closest(b) : Jb(a, function(c) {
                return Lb(c, b)
            })
        }

        function Mb(a, b) {
            var c = [];
            for (a = a.firstElementChild; a; a = a.nextElementSibling) b(a) && c.push(a);
            return c
        }

        function Nb(a, b) {
            for (a = a.lastElementChild; a; a = a.previousElementSibling)
                if (b(a)) return a;
            return null
        }

        function Ob(a, b) {
            var c = [];
            for (a = a.firstChild; a; a = a.nextSibling) b(a) && c.push(a);
            return c
        }

        function Pb(a, b) {
            /^[\w-]+$/.test(b);
            return Qb(a, "> [" + b + "]")
        }

        function Lb(a, b) {
            var c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
            return c ? c.call(a, b) : !1
        }

        function Rb(a, b) {
            a.classList.add("i-amphtml-scoped");
            var c = b.replace(/^|,/g, "$&.i-amphtml-scoped "),
                d = a.querySelectorAll(c);
            a.classList.remove("i-amphtml-scoped");
            return d
        }

        function Qb(a, b) {
            if (void 0 !== wb ? wb : wb = xb(a)) return a.querySelector(b.replace(/^|,/g, "$&:scope "));
            var c = Rb(a, b);
            return void 0 === c[0] ? null : c[0]
        }

        function Sb(a, b) {
            for (var c = a.length, d = 0; d < c; d++) b(a[d], d)
        }

        function Tb(a, b, c, d) {
            try {
                var e = a.open(b, c, d)
            } catch (h) {
                G().error("DOM", "Failed to open url on target: ", c, h)
            }
            if (!(c = e || "_top" == c)) {
                c = d || "";
                var f;
                "number" !== typeof f && (f = 0);
                c = f + 8 > c.length ? !1 : -1 !== c.indexOf("noopener", f)
            }
            c || (e = a.open(b, "_top"));
            return e
        }

        function Ub(a) {
            try {
                a.focus()
            } catch (b) {}
        }

        function Vb(a) {
            return a.parent && a.parent != a
        }

        function Wb(a, b, c) {
            c = c || {};
            var d = a.ownerDocument.createEvent("Event");
            d.data = c;
            d.initEvent(b, Ab.bubbles, Ab.cancelable);
            a.dispatchEvent(d)
        };

        function Xb(a) {
            var b = Object.create(null),
                c;
            for (c in a)
                if (Yb(a, c)) {
                    var d = a[c];
                    b[c] = Sa(d) ? Xb(d) : d
                } return b
        }

        function Zb(a) {
            return JSON.parse(a)
        }

        function Yb(a, b) {
            return null == a || "object" != typeof a ? !1 : Object.prototype.hasOwnProperty.call(a, b)
        };

        function $b(a) {
            return "undefined" !== typeof TextEncoder ? (new TextEncoder("utf-8")).encode(a) : ac(unescape(encodeURIComponent(a)))
        }

        function ac(a) {
            for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                b[c] = d
            }
            return b
        }

        function bc(a) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) b[c] = String.fromCharCode(a[c]);
            return b.join("")
        };
        var cc = {
                document: 1,
                text: 2
            },
            dc = ["GET", "POST"];

        function ec(a, b) {
            var c = b = void 0 === b ? {} : b;
            return new Promise(function(d, e) {
                var f = fc(c.method || "GET"),
                    h = gc(f, a);
                "include" == c.credentials && (h.withCredentials = !0);
                c.responseType in cc && (h.responseType = c.responseType);
                c.headers && Object.keys(c.headers).forEach(function(k) {
                    h.setRequestHeader(k, c.headers[k])
                });
                h.onreadystatechange = function() {
                    2 > h.readyState || (100 > h.status || 599 < h.status ? (h.onreadystatechange = null, e(D().createExpectedError("Unknown HTTP status " + h.status))) : 4 == h.readyState && d(new hc(h)))
                };
                h.onerror =
                    function() {
                        e(D().createExpectedError("Network failure"))
                    };
                h.onabort = function() {
                    e(D().createExpectedError("Request aborted"))
                };
                "POST" == f ? h.send(c.body) : h.send()
            })
        }

        function gc(a, b) {
            var c = new XMLHttpRequest;
            if ("withCredentials" in c) c.open(a, b, !0);
            else throw G().createExpectedError("CORS is not supported");
            return c
        }

        function hc(a) {
            this.Xa = a;
            this.status = this.Xa.status;
            this.statusText = this.Xa.statusText;
            this.ok = 200 <= this.status && 300 > this.status;
            this.headers = new ic(a);
            this.bodyUsed = !1;
            this.body = null;
            this.url = a.responseURL
        }
        hc.prototype.clone = function() {
            return new hc(this.Xa)
        };

        function jc(a) {
            a.bodyUsed = !0;
            return Promise.resolve(a.Xa.responseText)
        }
        hc.prototype.text = function() {
            return jc(this)
        };
        hc.prototype.json = function() {
            return jc(this).then(Zb)
        };
        hc.prototype.arrayBuffer = function() {
            return jc(this).then($b)
        };

        function fc(a) {
            if (void 0 === a) return "GET";
            a = a.toUpperCase();
            dc.includes(a);
            return a
        }

        function ic(a) {
            this.Xa = a
        }
        ic.prototype.get = function(a) {
            return this.Xa.getResponseHeader(a)
        };
        ic.prototype.has = function(a) {
            return null != this.Xa.getResponseHeader(a)
        };

        function kc(a, b) {
            var c = b = void 0 === b ? {} : b,
                d = J();
            a = Object.assign({}, {
                status: 200,
                statusText: "OK",
                responseText: a ? String(a) : "",
                getResponseHeader: function(f) {
                    var h = String(f).toLowerCase();
                    return sb.call(d, h) ? d[h] : null
                }
            }, c);
            a.status = void 0 === c.status ? 200 : parseInt(c.status, 10);
            if (A(c.headers)) c.headers.forEach(function(f) {
                var h = f[1];
                d[String(f[0]).toLowerCase()] = String(h)
            });
            else if (Sa(c.headers))
                for (var e in c.headers) d[String(e).toLowerCase()] = String(c.headers[e]);
            c.statusText && (a.statusText = String(c.statusText));
            hc.call(this, a)
        }
        p(kc, hc);

        function lc(a, b, c, d) {
            return {
                left: a,
                top: b,
                width: c,
                height: d,
                bottom: b + d,
                right: a + c,
                x: a,
                y: b
            }
        }

        function mc(a) {
            for (var b = -Infinity, c = Infinity, d = -Infinity, e = Infinity, f = 0; f < arguments.length; f++) {
                var h = arguments[f];
                if (h && (b = Math.max(b, h.left), c = Math.min(c, h.left + h.width), d = Math.max(d, h.top), e = Math.min(e, h.top + h.height), c < b || e < d)) return null
            }
            return Infinity == c ? null : lc(b, d, c - b, e - d)
        }

        function nc(a, b) {
            return lc(a.left - .25 * a.width, a.top - a.height * b, 1.5 * a.width, a.height * (1 + 2 * b))
        }

        function oc(a, b, c) {
            return 0 == b && 0 == c || 0 == a.width && 0 == a.height ? a : lc(a.left + b, a.top + c, a.width, a.height)
        };
        var pc;

        function qc() {
            return Hb(this) ? pc.call(this) : lc(0, 0, 0, 0)
        }

        function rc() {
            var a = sc;
            if (!a.document) return !1;
            try {
                return 0 !== a.document.createElement("div").getBoundingClientRect().top
            } catch (b) {
                return !0
            }
        };

        function M(a, b, c) {
            a = tc(a);
            uc(a, a, b, c)
        }

        function N(a, b, c, d) {
            var e = vc(a),
                f = wc(e);
            uc(f, e, b, c);
            d && xc(f, b)
        }

        function O(a, b) {
            a = tc(a);
            return xc(a, b)
        }

        function P(a) {
            return xc(a, "timer")
        }

        function yc(a) {
            a = tc(a);
            return Bc(a, "performance") ? xc(a, "performance") : null
        }

        function Cc(a, b) {
            var c = vc(a);
            c = wc(c);
            return xc(c, b)
        }

        function Dc(a, b) {
            a = vc(a);
            a = wc(a);
            return Bc(a, b) ? xc(a, b) : null
        }

        function Ec(a, b) {
            return Fc(wc(a), b)
        }

        function Gc(a, b) {
            return Hc(wc(a), b)
        }

        function tc(a) {
            return a.__AMP_TOP || (a.__AMP_TOP = a)
        }

        function Ic(a, b) {
            var c = (a.ownerDocument || a).defaultView,
                d = b || tc(c);
            if (c && c != d && tc(c) == d) try {
                return c.frameElement
            } catch (e) {}
            return null
        }

        function vc(a) {
            return a.nodeType ? O((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }

        function wc(a) {
            a = vc(a);
            return a.isSingleDoc() ? a.win : a
        }

        function xc(a, b) {
            Bc(a, b);
            a = Jc(a)[b];
            a.obj || (a.obj = new a.ctor(a.context), a.ctor = null, a.context = null, a.resolve && a.resolve(a.obj));
            return a.obj
        }

        function uc(a, b, c, d) {
            var e = Jc(a),
                f = e[c];
            f || (f = e[c] = {
                obj: null,
                promise: null,
                resolve: null,
                reject: null,
                context: null,
                ctor: null,
                adopted: !1
            });
            f.ctor || f.obj || (f.ctor = d, f.context = b, f.adopted = !1, f.resolve && xc(a, c))
        }

        function Fc(a, b) {
            var c = Hc(a, b);
            if (c) return c;
            a = Jc(a);
            a[b] = Kc();
            return a[b].promise
        }

        function Hc(a, b) {
            var c = Jc(a)[b];
            if (c) {
                if (c.promise) return c.promise;
                xc(a, b);
                return c.promise = Promise.resolve(c.obj)
            }
            return null
        }

        function Jc(a) {
            var b = a.__AMP_SERVICES;
            b || (b = a.__AMP_SERVICES = {});
            return b
        }

        function Lc(a) {
            a = Jc(a);
            var b = {},
                c;
            for (c in a) {
                b.Ya = c;
                if (Object.prototype.hasOwnProperty.call(a, b.Ya)) {
                    var d = a[b.Ya];
                    d.adopted || (d.obj ? Mc(b.Ya, d.obj) : d.promise && d.promise.then(function(e) {
                        return function(f) {
                            return Mc(e.Ya, f)
                        }
                    }(b)))
                }
                b = {
                    Ya: b.Ya
                }
            }
        }

        function Mc(a, b) {
            if ("function" == typeof b.dispose) try {
                b.dispose()
            } catch (c) {
                G().error("SERVICE", "failed to dispose service", a, c)
            }
        }

        function Bc(a, b) {
            a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
            return !(!a || !a.ctor && !a.obj)
        }

        function Kc() {
            var a = new L,
                b = a.promise,
                c = a.resolve;
            a = a.reject;
            b.catch(function() {});
            return {
                obj: null,
                promise: b,
                resolve: c,
                reject: a,
                context: null,
                ctor: null
            }
        };

        function Nc(a, b, c) {
            return Oc(a, b, c, void 0).then(function(d) {
                return I(d, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", b, c, c, c)
            })
        }

        function Oc(a, b, c, d) {
            var e = Gc(a, b);
            if (e) return e;
            var f = vc(a);
            return f.waitForBodyOpen().then(function() {
                var h = f.win;
                return Pc(f.win.document.head).includes(c) ? O(h, "extensions").waitForExtension(h, c) : v()
            }).then(function() {
                if (d) var h = Gc(a, b);
                else h = f.win, h = h.__AMP_EXTENDED_ELEMENTS && h.__AMP_EXTENDED_ELEMENTS[c] ? Ec(a, b) : null;
                return h
            })
        }

        function Qc(a) {
            var b = Dc(a, "bind");
            return b ? Promise.resolve(b) : Oc(a, "bind", "amp-bind")
        }

        function Pc(a) {
            if (!a) return [];
            for (var b = {}, c = a.querySelectorAll("script[custom-element],script[custom-template]"), d = 0; d < c.length; d++) {
                var e = c[d];
                e = e.getAttribute("custom-element") || e.getAttribute("custom-template");
                b[e] = !0
            }
            return Object.keys(b)
        }

        function Rc(a) {
            return a.waitForBodyOpen().then(function() {
                var b = a.getHeadNode();
                return Pc(b).includes("amp-form")
            })
        };

        function Sc(a) {
            return O(a, "ampdoc")
        }

        function Tc(a) {
            return Cc(a, "documentInfo").get()
        }

        function Uc(a) {
            return O(a, "extensions")
        }

        function Vc(a) {
            return Cc(a, "mutator")
        }

        function Q(a) {
            return O(a, "platform")
        }

        function Wc(a) {
            return Cc(a, "resources")
        }

        function R(a) {
            return Cc(a, "viewer")
        }

        function Xc(a) {
            return O(a, "vsync")
        }

        function Yc(a) {
            return Cc(a, "viewport")
        };

        function Zc(a) {
            return !a.IntersectionObserver || !a.IntersectionObserverEntry || !!a.IntersectionObserver._stub || !$c(a) || /apple/i.test(a.navigator.vendor)
        }

        function ad() {
            var a = bd.IntersectionObserver,
                b = cd;
            return function(c, d) {
                return d && d.root && 9 === d.root.nodeType ? new b(c, d) : new a(c, d)
            }
        }

        function $c(a) {
            try {
                return new a.IntersectionObserver(function() {}, {
                    root: a.document
                }), !0
            } catch (b) {
                return !1
            }
        }

        function dd(a) {
            Zc(a) && Uc(a).preloadExtension("amp-intersection-observer-polyfill")
        }

        function cd(a, b) {
            this.Oa = a;
            this.Qb = Object.assign({}, {
                root: null,
                rootMargin: "0px 0px 0px 0px"
            }, b);
            this.U = [];
            this.L = null;
            cd._upgraders.push(this.ye.bind(this))
        }
        g = cd.prototype;
        g.disconnect = function() {
            this.L ? this.L.disconnect() : this.U.length = 0
        };
        g.takeRecords = function() {
            return this.L ? this.L.takeRecords() : []
        };
        g.observe = function(a) {
            this.L ? this.L.observe(a) : -1 == this.U.indexOf(a) && this.U.push(a)
        };
        g.unobserve = function(a) {
            this.L ? this.L.unobserve(a) : (a = this.U.indexOf(a), -1 != a && this.U.splice(a, 1))
        };
        g.ye = function(a) {
            var b = new a(this.Oa, this.Qb);
            this.L = b;
            this.U.forEach(function(c) {
                return b.observe(c)
            });
            this.U = null
        };
        ca.Object.defineProperties(cd.prototype, {
            root: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.L ? this.L.root : this.Qb.root || null
                }
            },
            rootMargin: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.L ? this.L.rootMargin : this.Qb.rootMargin
                }
            },
            thresholds: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.L ? this.L.thresholds : [].concat(this.Qb.threshold || 0)
                }
            }
        });
        cd._upgraders = [];

        function ed() {
            var a = fd;
            !a.IntersectionObserverEntry || "isIntersecting" in a.IntersectionObserverEntry.prototype || Object.defineProperty(a.IntersectionObserverEntry.prototype, "isIntersecting", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return 0 < this.intersectionRatio
                }
            })
        };

        function gd(a) {
            return (a = Number(a)) ? 0 < a ? 1 : -1 : a
        };
        var hd = Object.prototype.hasOwnProperty;

        function id(a, b) {
            if (null == a) throw new TypeError("Cannot convert undefined or null to object");
            for (var c = Object(a), d = 1; d < arguments.length; d++) {
                var e = arguments[d];
                if (null != e)
                    for (var f in e) hd.call(e, f) && (c[f] = e[f])
            }
            return c
        };

        function jd(a) {
            return Object.keys(a).map(function(b) {
                return a[b]
            })
        };

        function kd(a) {
            if (!(this instanceof kd)) throw new TypeError("Constructor Promise requires `new`");
            if (!ld(a)) throw new TypeError("Must pass resolver function");
            this._state = md;
            this._value = [];
            this._isChainEnd = !0;
            nd(this, od(this, pd), od(this, qd), {
                then: a
            })
        }
        kd.prototype.then = function(a, b) {
            a = ld(a) ? a : void 0;
            b = ld(b) ? b : void 0;
            if (a || b) this._isChainEnd = !1;
            return this._state(this._value, a, b)
        };
        kd.prototype.catch = function(a) {
            return this.then(void 0, a)
        };

        function rd(a) {
            return a === Object(a) && a instanceof this ? a : new this(function(b) {
                b(a)
            })
        }

        function sd(a) {
            return new this(function(b, c) {
                c(a)
            })
        }

        function td(a) {
            var b = this;
            return new b(function(c, d) {
                var e = a.length,
                    f = Array(e);
                if (0 === e) return c(f);
                ud(a, function(h, k) {
                    b.resolve(h).then(function(l) {
                        f[k] = l;
                        0 === --e && c(f)
                    }, d)
                })
            })
        }

        function vd(a) {
            var b = this;
            return new b(function(c, d) {
                for (var e = 0; e < a.length; e++) b.resolve(a[e]).then(c, d)
            })
        }

        function pd(a, b, c, d) {
            if (!b) return d && (b = d.promise, b._state = pd, b._value = a), this;
            d || (d = new wd(this.constructor));
            xd(yd(d, b, a));
            return d.promise
        }

        function qd(a, b, c, d) {
            if (!c) return d && (b = d.promise, b._state = qd, b._value = a), this;
            d || (d = new wd(this.constructor));
            xd(yd(d, c, a));
            return d.promise
        }

        function md(a, b, c, d) {
            if (!d) {
                if (!b && !c) return this;
                d = new wd(this.constructor)
            }
            a.push({
                deferred: d,
                onFulfilled: b || d.resolve,
                onRejected: c || d.reject
            });
            return d.promise
        }

        function wd(a) {
            var b = this;
            this.promise = new a(function(c, d) {
                b.resolve = c;
                b.reject = d
            });
            return b
        }

        function zd(a, b, c, d) {
            var e = a._value;
            a._state = b;
            a._value = c;
            d && b === md && d._state(c, void 0, void 0, {
                promise: a,
                resolve: void 0,
                reject: void 0
            });
            for (var f = 0; f < e.length; f++) {
                var h = e[f];
                a._state(c, h.onFulfilled, h.onRejected, h.deferred)
            }
            e.length = 0;
            b === qd && a._isChainEnd && setTimeout(function() {
                if (a._isChainEnd) throw c;
            }, 0)
        }

        function od(a, b) {
            return function(c) {
                zd(a, b, c)
            }
        }

        function Ad() {}

        function ld(a) {
            return "function" === typeof a
        }

        function ud(a, b) {
            for (var c = 0; c < a.length; c++) b(a[c], c)
        }

        function yd(a, b, c) {
            var d = a.promise,
                e = a.resolve,
                f = a.reject;
            return function() {
                try {
                    var h = b(c);
                    nd(d, e, f, h, h)
                } catch (k) {
                    f(k)
                }
            }
        }
        var xd = function() {
            function a() {
                for (var e = 0; e < d; e++) {
                    var f = c[e];
                    c[e] = null;
                    f()
                }
                d = 0
            }
            if ("undefined" !== typeof window && window.postMessage) {
                window.addEventListener("message", a);
                var b = function() {
                    window.postMessage("macro-task", "*")
                }
            } else b = function() {
                setTimeout(a, 0)
            };
            var c = Array(16),
                d = 0;
            return function(e) {
                0 === d && b();
                c[d++] = e
            }
        }();

        function nd(a, b, c, d, e) {
            var f = c,
                h;
            try {
                if (d === a) throw new TypeError("Cannot fulfill promise with itself");
                var k = d === Object(d);
                if (k && d instanceof a.constructor) zd(a, d._state, d._value, d);
                else if (k && (h = d.then) && ld(h)) {
                    var l = function(m) {
                        l = f = Ad;
                        nd(a, b, c, m, m)
                    };
                    f = function(m) {
                        l = f = Ad;
                        c(m)
                    };
                    h.call(e, function(m) {
                        l(m)
                    }, function(m) {
                        f(m)
                    })
                } else b(d)
            } catch (m) {
                f(m)
            }
        };

        function Bd(a) {
            this.Oa = a;
            this.U = [];
            this.L = null;
            Bd._upgraders.push(this.ye.bind(this))
        }
        Bd.prototype.disconnect = function() {
            this.L ? this.L.disconnect() : this.U.length = 0
        };
        Bd.prototype.observe = function(a) {
            this.L ? this.L.observe(a) : -1 == this.U.indexOf(a) && this.U.push(a)
        };
        Bd.prototype.unobserve = function(a) {
            this.L ? this.L.unobserve(a) : (a = this.U.indexOf(a), -1 != a && this.U.splice(a, 1))
        };
        Bd.prototype.ye = function(a) {
            var b = new a(this.Oa, this.Qb);
            this.L = b;
            this.U.forEach(function(c) {
                return b.observe(c)
            });
            this.U = null
        };
        Bd._upgraders = [];

        function Cd(a, b) {
            return this.substr(0 < b ? b | 0 : 0, a.length) === a
        };
        (function(a) {
            a.fetch || (Object.defineProperty(a, "fetch", {
                value: ec,
                writable: !0,
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(a, "Response", {
                value: kc,
                writable: !0,
                enumerable: !1,
                configurable: !0
            }))
        })(self);
        (function(a) {
            a.Math.sign || a.Object.defineProperty(a.Math, "sign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: gd
            })
        })(self);
        (function(a) {
            a.Object.assign || a.Object.defineProperty(a.Object, "assign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: id
            })
        })(self);
        (function(a) {
            a.Object.values || a.Object.defineProperty(a.Object, "values", {
                configurable: !0,
                writable: !0,
                value: jd
            })
        })(self);
        (function(a) {
            a.Promise || (a.Promise = kd, kd.default && (a.Promise = kd.default), a.Promise.resolve = rd, a.Promise.reject = sd, a.Promise.all = td, a.Promise.race = vd)
        })(self);
        (function(a) {
            a.Array.prototype.includes || a.Object.defineProperty(a.Array.prototype, "includes", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: oa
            })
        })(self);
        (function(a) {
            var b = a.Map,
                c = new b;
            if (c.set(0, 0) !== c) {
                var d = c.set;
                a.Object.defineProperty(b.prototype, "set", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        d.apply(this, arguments);
                        return this
                    }
                })
            }
        })(self);
        (function(a) {
            var b = a.WeakMap,
                c = new b;
            if (c.set({}, 0) !== c) {
                var d = c.set;
                a.Object.defineProperty(b.prototype, "set", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        d.apply(this, arguments);
                        return this
                    }
                })
            }
        })(self);
        (function(a) {
            var b = a.Set,
                c = new b;
            if (c.add(0) !== c) {
                var d = c.add;
                a.Object.defineProperty(b.prototype, "add", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        d.apply(this, arguments);
                        return this
                    }
                })
            }
        })(self);
        (function(a) {
            a.String.prototype.startsWith || a.Object.defineProperty(a.String.prototype, "startsWith", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: Cd
            })
        })(self);
        if (self.document) {
            La();
            var Dd = self,
                Ed = Dd.HTMLDocument || Dd.Document;
            Ed && !Ed.prototype.contains && Dd.Object.defineProperty(Ed.prototype, "contains", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: Ma
            });
            var sc = self;
            rc() && (pc = Element.prototype.getBoundingClientRect, sc.Object.defineProperty(sc.Element.prototype, "getBoundingClientRect", {
                value: qc
            }));
            var Fd = function() {},
                Ha = self,
                Gd = Ha.document,
                Hd, Id = Ha.customElements;
            Hd = !!(Id && Id.define && Id.get && Id.whenDefined);
            var Jd;
            if (!(Jd = !Gd)) {
                var Kd;
                if (Kd = Hd) Kd = -1 === Ha.HTMLElement.toString().indexOf("[native code]");
                Jd = Kd
            }
            if (!Jd) {
                var Ld = !0,
                    Md = !1;
                if (Fd && Hd) try {
                    var Nd = Ha.Reflect,
                        Od = Object.create(Fd.prototype);
                    Function.call.call(Fd, Od);
                    Md = !(!Nd || !Nd.construct)
                } catch (a) {
                    Ld = !1
                }
                Md ? Ja() : Ld && Fa()
            }
            var fd = self;
            if (Zc(fd)) {
                var bd = fd;
                if (bd.IntersectionObserver) {
                    var Pd = bd.IntersectionObserver;
                    bd.IntersectionObserver = ad();
                    bd.IntersectionObserver._stub = cd;
                    bd.IntersectionObserver._native = Pd
                } else bd.IntersectionObserver = cd, bd.IntersectionObserver._stub = cd
            }
            ed();
            var Qd = self;
            Qd.ResizeObserver && !Qd.ResizeObserver._stub || Qd.ResizeObserver ||
                (Qd.ResizeObserver = Bd, Qd.ResizeObserver._stub = Bd);
            var Rd = self;
            Rd.AbortController || (Object.defineProperty(Rd, "AbortController", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: ma
            }), Object.defineProperty(Rd, "AbortSignal", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: na
            }))
        };
        var Sd;

        function Td(a) {
            a = a.ownerDocument || a;
            Sd && Sd.ownerDocument === a || (Sd = a.createElement("div"));
            return Ud
        }

        function Ud(a) {
            var b = Sd;
            b.innerHTML = a[0];
            a = b.firstElementChild;
            b.removeChild(a);
            return a
        };

        function Vd() {
            this.tg = 100;
            this.gd = this.Z = 0;
            this.ab = Object.create(null)
        }
        Vd.prototype.has = function(a) {
            return !!this.ab[a]
        };
        Vd.prototype.get = function(a) {
            var b = this.ab[a];
            if (b) return b.access = ++this.gd, b.payload
        };
        Vd.prototype.put = function(a, b) {
            this.has(a) || this.Z++;
            this.ab[a] = {
                payload: b,
                access: this.gd
            };
            if (!(this.Z <= this.tg)) {
                G().warn("lru-cache", "Trimming LRU cache");
                a = this.ab;
                var c = this.gd + 1,
                    d;
                for (d in a) {
                    var e = a[d].access;
                    if (e < c) {
                        c = e;
                        var f = d
                    }
                }
                void 0 !== f && (delete a[f], this.Z--)
            }
        };
        var Wd = K({
                c: !0,
                v: !0,
                a: !0,
                ad: !0
            }),
            Xd, Zd, $d = /[?&]amp_js[^&]*/,
            ae = /[?&]amp_gsa[^&]*/,
            be = /[?&]amp_r[^&]*/,
            ce = /[?&]amp_kit[^&]*/,
            de = /[?&]usqp[^&]*/,
            ee = ["javascript:", "data:", "vbscript:"];

        function S(a, b) {
            Xd || (Xd = self.document.createElement("a"), Zd = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new Vd));
            return fe(Xd, a, b ? null : Zd)
        }

        function fe(a, b, c) {
            if (c && c.has(b)) return c.get(b);
            a.href = b;
            a.protocol || (a.href = a.href);
            var d = {
                href: a.href,
                protocol: a.protocol,
                host: a.host,
                hostname: a.hostname,
                port: "0" == a.port ? "" : a.port,
                pathname: a.pathname,
                search: a.search,
                hash: a.hash,
                origin: null
            };
            "/" !== d.pathname[0] && (d.pathname = "/" + d.pathname);
            if ("http:" == d.protocol && 80 == d.port || "https:" == d.protocol && 443 == d.port) d.port = "", d.host = d.hostname;
            d.origin = a.origin && "null" != a.origin ? a.origin : "data:" != d.protocol && d.host ? d.protocol + "//" + d.host : d.href;
            c && c.put(b,
                d);
            return d
        }

        function ge(a, b, c) {
            if (!b) return a;
            var d = a.split("#", 2),
                e = d[0].split("?", 2),
                f = e[0] + (e[1] ? c ? "?" + b + "&" + e[1] : "?" + e[1] + "&" + b : "?" + b);
            return f += d[1] ? "#" + d[1] : ""
        }

        function he(a, b) {
            return ge(a, ie(b))
        }

        function ie(a) {
            var b = [],
                c;
            for (c in a) {
                var d = a[c];
                if (null != d)
                    if (A(d))
                        for (var e = 0; e < d.length; e++) {
                            var f = d[e];
                            b.push(encodeURIComponent(c) + "=" + encodeURIComponent(f))
                        } else b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
            }
            return b.join("&")
        }

        function je(a) {
            "string" == typeof a && (a = S(a));
            return "https:" == a.protocol || "localhost" == a.hostname || "127.0.0.1" == a.hostname || yb(a.hostname, ".localhost")
        }

        function ke(a, b, c) {
            var d = c = void 0 === c ? "source" : c;
            I(null != a, "%s %s must be available", b, d);
            I(je(a) || /^(\/\/)/.test(a), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', b, d, a);
            return a
        }

        function le(a) {
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b)
        }

        function T(a) {
            "string" == typeof a && (a = S(a));
            return Xa.cdnProxyRegex.test(a.origin)
        }

        function me(a) {
            if (!a) return !0;
            "string" == typeof a && (a = S(a));
            return !ee.includes(a.protocol)
        }

        function ne(a) {
            var b = S(a);
            a = oe(b.search);
            return b.origin + b.pathname + a + b.hash
        }

        function oe(a) {
            if (!a || "?" == a) return "";
            var b = a.replace($d, "").replace(ae, "").replace(be, "").replace(ce, "").replace(de, "").replace(/^[?&]/, "");
            return b ? "?" + b : ""
        }

        function pe(a) {
            "string" == typeof a && (a = S(a));
            if (!T(a)) return a.href;
            var b = a.pathname.split("/");
            I(Wd[b[1]], "Unknown path prefix in url %s", a.href);
            var c = b[2],
                d = "s" == c ? "https://" + decodeURIComponent(b[3]) : "http://" + decodeURIComponent(c);
            I(0 < d.indexOf("."), "Expected a . in origin %s", d);
            b.splice(1, "s" == c ? 3 : 2);
            return d + b.join("/") + oe(a.search) + (a.hash || "")
        }

        function qe(a) {
            return S(pe(a)).origin
        }

        function re(a, b) {
            "string" == typeof b && (b = S(b));
            if ("function" == typeof URL) var c = (new URL(a, b.href)).toString();
            else {
                c = a;
                var d = b;
                "string" == typeof d && (d = S(d));
                c = c.replace(/\\/g, "/");
                var e = S(c);
                c = c.toLowerCase().startsWith(e.protocol) ? e.href : c.startsWith("//") ? d.protocol + c : c.startsWith("/") ? d.origin + c : d.origin + d.pathname.replace(/\/[^/]*$/, "/") + c
            }
            return c
        }

        function se(a, b) {
            te(b);
            var c = qe(a.location.href);
            a = encodeURIComponent("__amp_source_origin") + "=" + encodeURIComponent(c);
            return ge(b, a, void 0)
        }

        function te(a) {
            var b = S(a),
                c = x(b.search);
            I(!("__amp_source_origin" in c), "Source origin is not allowed in %s", a)
        };

        function U(a, b) {
            return !!ue(a)[b]
        }

        function ve(a, b, c, d) {
            var e = U(a, b),
                f = !(void 0 !== c ? !c : e);
            if (f != e && (ue(a)[b] = f, !d)) {
                var h = we(a);
                h[b] = f;
                var k = [],
                    l;
                for (l in h) k.push((!1 === h[l] ? "-" : "") + l);
                try {
                    "localStorage" in a && a.localStorage.setItem("amp-experiment-toggles", k.join(","))
                } catch (m) {
                    D().error("EXPERIMENTS", "Failed to save experiments to localStorage.")
                }
                D().warn("EXPERIMENTS", '"%s" experiment %s for the domain "%s". See: https://amp.dev/documentation/guides-and-tutorials/learn/experimental', b, f ? "enabled" : "disabled", a.location.hostname)
            }
            return f
        }

        function ue(a) {
            if (a.__AMP__EXPERIMENT_TOGGLES) return a.__AMP__EXPERIMENT_TOGGLES;
            a.__AMP__EXPERIMENT_TOGGLES = Object.create(null);
            var b = a.__AMP__EXPERIMENT_TOGGLES;
            if (a.AMP_CONFIG)
                for (var c in a.AMP_CONFIG) {
                    var d = a.AMP_CONFIG[c];
                    "number" === typeof d && 0 <= d && 1 >= d && (b[c] = Math.random() < d)
                }
            if (a.AMP_CONFIG && Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"]) && 0 < a.AMP_CONFIG["allow-doc-opt-in"].length) {
                var e = a.AMP_CONFIG["allow-doc-opt-in"],
                    f = a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
                if (f) {
                    var h = f.getAttribute("content").split(",");
                    for (c = 0; c < h.length; c++) - 1 != e.indexOf(h[c]) && (b[h[c]] = !0)
                }
            }
            Object.assign(b, we(a));
            if (a.AMP_CONFIG && Array.isArray(a.AMP_CONFIG["allow-url-opt-in"]) && 0 < a.AMP_CONFIG["allow-url-opt-in"].length) {
                c = a.AMP_CONFIG["allow-url-opt-in"];
                a = x(a.location.originalHash || a.location.hash);
                for (var k = 0; k < c.length; k++) {
                    var l = a["e-" + c[k]];
                    "1" == l && (b[c[k]] = !0);
                    "0" == l && (b[c[k]] = !1)
                }
            }
            return b
        }

        function we(a) {
            var b = "";
            try {
                "localStorage" in a && (b = a.localStorage.getItem("amp-experiment-toggles"))
            } catch (e) {
                G().warn("EXPERIMENTS", "Failed to retrieve experiments from localStorage.")
            }
            var c = b ? b.split(/\s*,\s*/g) : [];
            a = Object.create(null);
            for (var d = 0; d < c.length; d++) 0 != c[d].length && ("-" == c[d][0] ? a[c[d].substr(1)] = !1 : a[c[d]] = !0);
            return a
        }

        function xe(a, b) {
            a.__AMP_EXPERIMENT_BRANCHES = a.__AMP_EXPERIMENT_BRANCHES || {};
            for (var c = 0; c < b.length; c++) {
                var d = b[c],
                    e = d.experimentId;
                sb.call(a.__AMP_EXPERIMENT_BRANCHES, e) || (d.isTrafficEligible && d.isTrafficEligible(a) ? !a.__AMP_EXPERIMENT_BRANCHES[e] && U(a, e) && (d = d.branches, a.__AMP_EXPERIMENT_BRANCHES[e] = d[Math.floor(Math.random() * d.length)] || null) : a.__AMP_EXPERIMENT_BRANCHES[e] = null)
            }
        }

        function ye(a) {
            return a.__AMP_EXPERIMENT_BRANCHES ? a.__AMP_EXPERIMENT_BRANCHES["intersect-resources"] : null
        };
        var ze, Ae = "Webkit webkit Moz moz ms O o".split(" ");

        function Be(a, b, c) {
            if (b.startsWith("--")) return b;
            ze || (ze = J());
            var d = ze[b];
            if (!d || c) {
                d = b;
                if (void 0 === a[b]) {
                    var e = b.charAt(0).toUpperCase() + b.slice(1);
                    a: {
                        for (var f = 0; f < Ae.length; f++) {
                            var h = Ae[f] + e;
                            if (void 0 !== a[h]) {
                                e = h;
                                break a
                            }
                        }
                        e = ""
                    }
                    var k = e;
                    void 0 !== a[k] && (d = k)
                }
                c || (ze[b] = d)
            }
            return d
        }

        function Ce(a, b) {
            a = a.style;
            for (var c in b) a.setProperty(Be(a, c), b[c].toString(), "important")
        }

        function W(a, b, c, d) {
            if (b = Be(a.style, b, void 0)) {
                var e = d ? c + d : c;
                b.startsWith("--") ? a.style.setProperty(b, e) : a.style[b] = e
            }
        }

        function De(a, b) {
            for (var c in b) W(a, c, b[c])
        }

        function Ee(a, b) {
            void 0 === b && (b = a.hasAttribute("hidden"));
            b ? a.removeAttribute("hidden") : a.setAttribute("hidden", "")
        };

        function Fe(a) {
            if (!a.hasAttribute("src") && 0 == "srcset" in a) {
                var b = a.getAttribute("srcset"),
                    c = /\S+/.exec(b);
                null != c && a.setAttribute("src", c[0])
            }
        }

        function Ge(a, b, c) {
            var d = a.createElement("canvas");
            d.width = b;
            d.height = c;
            return d.toDataURL()
        };
        var He = ['<i-amphtml-sizer class=i-amphtml-sizer slot=i-amphtml-svc><img alt="" role=presentation aria-hidden=true class=i-amphtml-intrinsic-sizer></i-amphtml-sizer>'],
            Ie = {
                NODISPLAY: "nodisplay",
                FIXED: "fixed",
                FIXED_HEIGHT: "fixed-height",
                RESPONSIVE: "responsive",
                CONTAINER: "container",
                FILL: "fill",
                FLEX_ITEM: "flex-item",
                FLUID: "fluid",
                INTRINSIC: "intrinsic"
            },
            Je = {
                "AMP-PIXEL": {
                    width: "0px",
                    height: "0px"
                },
                "AMP-ANALYTICS": {
                    width: "1px",
                    height: "1px"
                },
                "AMP-AUDIO": null,
                "AMP-SOCIAL-SHARE": {
                    width: "60px",
                    height: "44px"
                }
            },
            Ke = {
                "AMP-AD": !0,
                "AMP-ANIM": !0,
                "AMP-EMBED": !0,
                "AMP-FACEBOOK": !0,
                "AMP-FACEBOOK-COMMENTS": !0,
                "AMP-FACEBOOK-PAGE": !0,
                "AMP-GOOGLE-DOCUMENT-EMBED": !0,
                "AMP-IFRAME": !0,
                "AMP-IMG": !0,
                "AMP-INSTAGRAM": !0,
                "AMP-LIST": !0,
                "AMP-PINTEREST": !0,
                "AMP-PLAYBUZZ": !0,
                "AMP-TWITTER": !0
            },
            Le = /^amp\-(video|.+player)|AMP-BRIGHTCOVE|AMP-DAILYMOTION|AMP-YOUTUBE|AMP-VIMEO|AMP-IMA-VIDEO/i,
            Me = null;

        function Ne(a) {
            for (var b in Ie)
                if (Ie[b] == a) return Ie[b]
        }

        function Oe(a) {
            return "fixed" == a || "fixed-height" == a || "responsive" == a || "fill" == a || "flex-item" == a || "fluid" == a || "intrinsic" == a
        }

        function Pe(a) {
            if ("number" == typeof a) return a + "px";
            if (a && /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(a)) return /^\d+(\.\d+)?$/.test(a) ? a + "px" : a
        }

        function Qe(a) {
            I(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(a), "Invalid length value: %s", a);
            return I(/[a-z]+/i.exec(a), "Failed to read units from %s", a)[0]
        }

        function Re(a) {
            a = parseFloat(a);
            return Ta(a) ? a : void 0
        };
        var Se;

        function Te(a, b, c, d) {
            var e = a,
                f = c;
            var h = function(m) {
                try {
                    return f(m)
                } catch (n) {
                    throw self.__AMP_REPORT_ERROR(n), n;
                }
            };
            var k = Ue(),
                l = !1;
            d && (l = d.capture);
            e.addEventListener(b, h, k ? d : l);
            return function() {
                e && e.removeEventListener(b, h, k ? d : l);
                h = e = f = null
            }
        }

        function Ue() {
            if (void 0 !== Se) return Se;
            Se = !1;
            try {
                var a = {
                    get capture() {
                        Se = !0
                    }
                };
                self.addEventListener("test-options", null, a);
                self.removeEventListener("test-options", null, a)
            } catch (b) {}
            return Se
        };

        function Ve(a, b, c, d) {
            return Te(a, b, c, d)
        }

        function We(a, b, c, d) {
            var e = c,
                f = Te(a, b, function(h) {
                    try {
                        e(h)
                    } finally {
                        e = null, f()
                    }
                }, d);
            return f
        }

        function Xe(a, b) {
            var c, d = new Promise(function(e) {
                c = We(a, "click", e, void 0)
            });
            d.then(c, c);
            b && b(c);
            return d
        }

        function Ye(a) {
            return !!(a.complete || "complete" == a.readyState || Ze(a) && 0 < a.readyState || a.document && "complete" == a.document.readyState)
        }

        function $e(a) {
            var b, c;
            if (Ye(a)) return Promise.resolve(a);
            var d = Ze(a);
            return d && a.__AMP_MEDIA_LOAD_FAILURE_SRC === a.currentSrc ? Promise.reject(a) : (new Promise(function(e, f) {
                b = d ? We(a, "loadedmetadata", e, {
                    capture: !0
                }) : We(a, "load", e);
                if (a.tagName) {
                    var h = a;
                    if (d && !a.hasAttribute("src") && (h = Nb(a, function(k) {
                            return "SOURCE" === k.tagName
                        }), !h)) return f(Error("Media has no source."));
                    c = We(h, "error", f)
                }
            })).then(function() {
                c && c();
                return a
            }, function() {
                b && b();
                Ze(a) && (a.__AMP_MEDIA_LOAD_FAILURE_SRC = a.currentSrc || !0);
                var e = a;
                e && e.src && (e = e.src);
                throw D().createError("Failed to load:", e);
            })
        }

        function Ze(a) {
            return "AUDIO" === a.tagName || "VIDEO" === a.tagName
        };

        function X(a) {
            this.element = a;
            this.win = a.ownerDocument.defaultView;
            this.defaultActionAlias_ = this.actionMap_ = null
        }
        X.prerenderAllowed = function() {
            return !1
        };
        X.createLoaderLogoCallback = function() {
            return {}
        };
        g = X.prototype;
        g.signals = function() {
            return this.element.signals()
        };
        g.getDefaultActionAlias = function() {
            return this.defaultActionAlias_
        };
        g.getLayoutPriority = function() {
            return 0
        };
        g.updateLayoutPriority = function(a) {
            this.element.getResources().updateLayoutPriority(this.element, a)
        };
        g.getLayout = function() {
            return this.element.getLayout()
        };
        g.getLayoutBox = function() {
            return this.element.getLayoutBox()
        };
        g.getLayoutSize = function() {
            return this.element.getLayoutSize()
        };
        g.getWin = function() {
            return this.win
        };
        g.getAmpDoc = function() {
            return this.element.getAmpDoc()
        };
        g.getVsync = function() {
            return Xc(this.win)
        };
        g.getConsentPolicy = function() {
            var a = null;
            this.element.hasAttribute("data-block-on-consent") && (a = this.element.getAttribute("data-block-on-consent") || "default");
            return a
        };
        g.isLayoutSupported = function(a) {
            return "nodisplay" == a
        };
        g.isAlwaysFixed = function() {
            return !1
        };
        g.upgradeCallback = function() {
            return null
        };
        g.buildCallback = function() {};
        g.preconnectCallback = function() {};
        g.attachedCallback = function() {};
        g.detachedCallback = function() {};
        g.isBuildRenderBlocking = function() {
            return !1
        };
        g.createPlaceholderCallback = function() {
            return null
        };
        g.renderOutsideViewport = function() {
            return "inabox" == z(this.win).runtime || 3
        };
        g.idleRenderOutsideViewport = function() {
            return !1
        };
        g.isRelayoutNeeded = function() {
            return !1
        };
        g.layoutCallback = function() {
            return v()
        };
        g.firstLayoutCompleted = function() {
            this.togglePlaceholder(!1)
        };
        g.pauseCallback = function() {};
        g.resumeCallback = function() {};
        g.unlayoutCallback = function() {
            return !1
        };
        g.unlayoutOnPause = function() {
            return !1
        };
        g.unload = function() {
            this.element.getResources().getResourceForElement(this.element).unload()
        };
        g.reconstructWhenReparented = function() {
            return !0
        };
        g.loadPromise = function(a) {
            return $e(a)
        };

        function af(a) {
            a.actionMap_ || (a.actionMap_ = a.win.Object.create(null))
        }
        g.registerAction = function(a, b, c) {
            var d = c = void 0 === c ? 2 : c;
            af(this);
            this.actionMap_[a] = {
                handler: b,
                minTrust: d
            }
        };
        g.registerDefaultAction = function(a, b, c) {
            var d = void 0 === b ? "activate" : b;
            this.registerAction(d, a, void 0 === c ? 2 : c);
            this.defaultActionAlias_ = d
        };
        g.executeAction = function(a) {
            var b = a.method;
            "activate" === b && (b = this.defaultActionAlias_ || b);
            af(this);
            var c = this.actionMap_[b];
            I(c, "Method not found: " + b + " in " + this.element.tagName);
            b = c.handler;
            if (a.satisfiesTrust(c.minTrust)) return b(a)
        };
        g.propagateAttributes = function(a, b, c) {
            a = A(a) ? a : [a];
            for (var d = 0; d < a.length; d++) {
                var e = a[d],
                    f = this.element.getAttribute(e);
                null !== f ? b.setAttribute(e, f) : c && b.removeAttribute(e)
            }
        };
        g.forwardEvents = function(a, b) {
            var c = this,
                d = (A(a) ? a : [a]).map(function(e) {
                    return Ve(b, e, function(f) {
                        Wb(c.element, e, f.data || {})
                    })
                });
            return function() {
                return d.forEach(function(e) {
                    return e()
                })
            }
        };
        g.getPlaceholder = function() {
            return this.element.getPlaceholder()
        };
        g.togglePlaceholder = function(a) {
            this.element.togglePlaceholder(a)
        };
        g.getFallback = function() {
            return this.element.getFallback()
        };
        g.toggleFallback = function(a) {
            this.element.toggleFallback(a)
        };
        g.toggleLoading = function(a, b) {
            this.element.toggleLoading(a, void 0 === b ? !1 : b)
        };
        g.getOverflowElement = function() {
            return this.element.getOverflowElement()
        };
        g.renderStarted = function() {
            this.element.renderStarted()
        };
        g.getRealChildNodes = function() {
            return this.element.getRealChildNodes()
        };
        g.getRealChildren = function() {
            return this.element.getRealChildren()
        };
        g.applyFillContent = function(a, b) {
            a.classList.add("i-amphtml-fill-content");
            b && a.classList.add("i-amphtml-replaced-content")
        };
        g.getViewport = function() {
            return Yc(this.getAmpDoc())
        };
        g.getIntersectionElementLayoutBox = function() {
            return this.getLayoutBox()
        };
        g.collapse = function() {
            Vc(this.getAmpDoc()).collapseElement(this.element)
        };
        g.attemptCollapse = function() {
            return Vc(this.getAmpDoc()).attemptCollapse(this.element)
        };
        g.forceChangeHeight = function(a) {
            Vc(this.getAmpDoc()).forceChangeSize(this.element, a, void 0)
        };
        g.attemptChangeHeight = function(a) {
            return Vc(this.getAmpDoc()).requestChangeSize(this.element, a, void 0)
        };
        g.attemptChangeSize = function(a, b, c) {
            return Vc(this.getAmpDoc()).requestChangeSize(this.element, a, b, void 0, c)
        };
        g.measureElement = function(a) {
            return Vc(this.getAmpDoc()).measureElement(a)
        };
        g.mutateElement = function(a, b) {
            return this.measureMutateElement(null, a, b)
        };
        g.measureMutateElement = function(a, b, c) {
            return Vc(this.getAmpDoc()).measureMutateElement(c || this.element, a, b)
        };
        g.mutateElementSkipRemeasure = function(a) {
            return Vc(this.getAmpDoc()).mutateElement(this.element, a, !0)
        };
        g.collapsedCallback = function() {};
        g.expand = function() {
            Vc(this.getAmpDoc()).expandElement(this.element)
        };
        g.mutatedAttributesCallback = function() {};
        g.onLayoutMeasure = function() {};
        g.user = function() {
            return D(this.element)
        };
        g.getApi = function() {
            return this
        };
        var bf = {
            PRERENDER: "prerender",
            VISIBLE: "visible",
            HIDDEN: "hidden",
            PAUSED: "paused",
            INACTIVE: "inactive"
        };
        /*

         Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
         Use of this source code is governed by a BSD-style
         license that can be found in the LICENSE file or at
         https://developers.google.com/open-source/licenses/bsd */
        var cf = {
            "amp-dynamic-css-classes": "[custom-element=amp-dynamic-css-classes]",
            variant: "amp-experiment",
            "amp-story-render": "amp-story[standalone]"
        };

        function df(a) {
            var b = ef(a).map(function(c) {
                var d = Fc(a, c).then(function(e) {
                    return e && "function" == typeof e.whenReady ? e.whenReady().then(function() {
                        return e
                    }) : e
                });
                return P(a).timeoutPromise(3E3, d, "Render timeout waiting for service " + c + " to be ready.")
            });
            return Promise.all(b)
        }

        function ef(a) {
            var b = a.document;
            return Object.keys(cf).filter(function(c) {
                return b.querySelector(cf[c])
            })
        };

        function ff(a, b, c, d, e) {
            var f = a.getHeadNode(),
                h = gf(f, hf(f, b), d || !1, e || null);
            if (c) {
                var k = a.getRootNode();
                if (jf(k, h)) c(h);
                else var l = setInterval(function() {
                    jf(k, h) && (clearInterval(l), c(h))
                }, 4)
            }
        }

        function gf(a, b, c, d) {
            var e = a.__AMP_CSS_SM;
            e || (e = a.__AMP_CSS_SM = J());
            var f = !c && d && "amp-custom" != d && "amp-keyframes" != d,
                h = c ? "amp-runtime" : f ? "amp-extension=" + d : null;
            if (h) {
                var k = kf(a, e, h);
                if (k) return k.textContent !== b && (k.textContent = b), k
            }
            var l = (a.ownerDocument || a).createElement("style");
            l.textContent = b;
            var m = null;
            c ? l.setAttribute("amp-runtime", "") : f ? (l.setAttribute("amp-extension", d || ""), m = kf(a, e, "amp-runtime")) : (d && l.setAttribute(d, ""), m = a.lastChild);
            b = m;
            (b = void 0 === b ? null : b) ? a.insertBefore(l, b.nextSibling):
                a.insertBefore(l, a.firstChild);
            h && (e[h] = l);
            return l
        }

        function kf(a, b, c) {
            return b[c] ? b[c] : (a = a.querySelector("style[" + c + "]")) ? b[c] = a : null
        }

        function hf(a, b) {
            return (a = a.__AMP_CSS_TR) ? a(b) : b
        }
        var lf = !1;

        function mf() {
            var a = self.document,
                b = a.defaultView;
            Eb(a).then(function() {
                return df(b)
            }).catch(function(c) {
                ob(c);
                return []
            }).then(function(c) {
                lf = !0;
                nf(a);
                vc(a).signals().signal("render-start");
                0 < c.length && Wc(a.documentElement).schedulePass(1, !0);
                try {
                    var d = O(b, "performance");
                    d.tick("mbv");
                    d.flush()
                } catch (e) {}
            })
        }

        function of (a) {
            lf || (lf = !0, nf(a))
        }

        function nf(a) {
            De(a.body, {
                opacity: 1,
                visibility: "visible",
                animation: "none"
            })
        }

        function jf(a, b) {
            var c = a.styleSheets;
            for (a = 0; a < c.length; a++)
                if (c[a].ownerNode == b) return !0;
            return !1
        };

        function pf(a) {
            var b = a.match(/^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)$/i);
            return {
                extensionId: b ? b[2] : void 0,
                extensionVersion: b ? b[3] : void 0
            }
        };

        function qf(a, b, c) {
            function d(k) {
                h = null;
                f = a.setTimeout(e, c);
                b.apply(null, k)
            }

            function e() {
                f = 0;
                h && d(h)
            }
            var f = 0,
                h = null;
            return function(k) {
                for (var l = [], m = 0; m < arguments.length; ++m) l[m - 0] = arguments[m];
                f ? h = l : d(l)
            }
        }

        function rf(a, b) {
            function c() {
                d = 0;
                var h = 300 - (a.Date.now() - e);
                if (0 < h) d = a.setTimeout(c, h);
                else {
                    var k = f;
                    f = null;
                    b.apply(null, k)
                }
            }
            var d = 0,
                e = 0,
                f = null;
            return function(h) {
                for (var k = [], l = 0; l < arguments.length; ++l) k[l - 0] = arguments[l];
                e = a.Date.now();
                f = k;
                d || (d = a.setTimeout(c, 300))
            }
        };

        function sf(a, b) {
            var c = b.documentElement;
            return a.some(function(d) {
                return c.hasAttribute(d)
            })
        }

        function tf(a) {
            return sf(["\u26a14email", "amp4email"], a)
        };

        function uf() {
            var a = vf();
            return function(b) {
                return setTimeout(b, a())
            }
        }

        function vf() {
            var a = 0;
            return function() {
                var b = Math.pow(1.5, a++);
                var c = b * (c || .3) * Math.random();
                .5 < Math.random() && (c *= -1);
                b += c;
                return 1E3 * b
            }
        };

        function wf(a, b) {
            var c = !1;
            b = void 0 === b ? {} : b;
            c = void 0 === c ? !0 : c;
            var d = b,
                e = c;
            Oc(a, "amp-analytics-instrumentation", "amp-analytics").then(function(f) {
                f && f.triggerEventForTarget(a, "user-error", d, e)
            })
        };
        var xf = self.__AMP_ERRORS || [];
        self.__AMP_ERRORS = xf;

        function yf(a) {
            yf = uf();
            return yf(a)
        }

        function zf(a) {
            try {
                return JSON.stringify(a)
            } catch (b) {
                return String(a)
            }
        }
        var Af;

        function Bf(a, b) {
            try {
                if (a)
                    if (void 0 !== a.message) a = nb(a);
                    else {
                        var c = a;
                        a = Error(zf(c));
                        a.origError = c
                    }
                else a = Error("Unknown error");
                if (a.reported) return a;
                a.reported = !0;
                var d = b || a.associatedElement;
                d && d.classList && (d.classList.add("i-amphtml-error"), z().development && (d.classList.add("i-amphtml-element-error"), d.setAttribute("error-message", a.message)));
                if (self.console && ($a(a.message) || !a.expected)) {
                    var e = console.error || console.log;
                    a.messageArray ? e.apply(console, a.messageArray) : d ? e.call(console, a.message,
                        d) : e.call(console, a.message)
                }
                d && d.Da && d.Da("amp:error", a.message);
                Cf.call(self, void 0, void 0, void 0, void 0, a)
            } catch (f) {
                setTimeout(function() {
                    throw f;
                })
            }
            return a
        }

        function Df() {
            return Error("CANCELLED")
        }

        function Ef(a) {
            return a ? "string" == typeof a ? a.startsWith("BLOCK_BY_CONSENT") : "string" == typeof a.message ? a.message.startsWith("BLOCK_BY_CONSENT") : !1 : !1
        }

        function Ff() {
            var a = self;
            a.onerror = Cf;
            a.addEventListener("unhandledrejection", function(b) {
                !b.reason || "CANCELLED" !== b.reason.message && "BLOCK_BY_CONSENT" !== b.reason.message && "AbortError" !== b.reason.message ? Bf(b.reason || Error("rejected promise " + b)) : b.preventDefault()
            })
        }

        function Cf(a, b, c, d, e) {
            var f = this;
            !this || !this.document || e && e.expected || of (this.document);
            if (!z().development) {
                var h = !1;
                try {
                    h = Gf()
                } catch (l) {}
                if (!(h && .01 < Math.random())) {
                    var k = Hf(a, b, c, d, e, h);
                    k && yf(function() {
                        try {
                            return If(f, k).catch(function() {})
                        } catch (l) {}
                    })
                }
            }
        }

        function If(a, b) {
            return b.pt && .9 > Math.random() ? v() : Jf(a, b).then(function(c) {
                if (!c) {
                    var d = new XMLHttpRequest;
                    d.open("POST", .1 > Math.random() ? Xa.betaErrorReporting : Xa.errorReporting, !0);
                    d.send(JSON.stringify(b))
                }
            })
        }

        function Jf(a, b) {
            a = Sc(a);
            if (!a.isSingleDoc()) return Promise.resolve(!1);
            var c = a.getSingleDoc();
            if (!c.getRootNode().documentElement.hasAttribute("report-errors-to-viewer")) return Promise.resolve(!1);
            var d = R(c);
            return d.hasCapability("errorReporter") ? d.isTrustedViewer().then(function(e) {
                if (!e) return !1;
                d.sendMessage("error", K({
                    m: b.m,
                    a: b.a,
                    s: b.s,
                    el: b.el,
                    ex: b.ex,
                    v: b.v,
                    pt: b.pt,
                    jse: b.jse
                }));
                return !0
            }) : Promise.resolve(!1)
        }

        function Hf(a, b, c, d, e, f) {
            var h = a;
            e && (h = e.message ? e.message : String(e));
            h || (h = "Unknown error");
            a = h;
            var k = !(!e || !e.expected);
            if (!/_reported_/.test(a) && "CANCELLED" != a) {
                var l = !(self && self.window),
                    m = Math.random();
                if (-1 != a.indexOf("Failed to load:") || "Script error." == a || l)
                    if (k = !0, .001 < m) return;
                var n = $a(a);
                if (!(n && .1 < m)) {
                    h = Object.create(null);
                    h.v = z().rtvVersion;
                    h.noAmp = f ? "1" : "0";
                    h.m = a.replace("\u200b\u200b\u200b", "");
                    h.a = n ? "1" : "0";
                    h.ex = k ? "1" : "0";
                    h.dw = l ? "1" : "0";
                    var q = "1p";
                    self.context && self.context.location ?
                        (h["3p"] = "1", q = "3p") : z().runtime && (q = z().runtime);
                    h.rt = q;
                    "inabox" === q && (h.adid = z().a4aId);
                    f = self;
                    h.ca = f.AMP_CONFIG && f.AMP_CONFIG.canary ? "1" : "0";
                    f = self;
                    h.bt = f.AMP_CONFIG && f.AMP_CONFIG.type ? f.AMP_CONFIG.type : "unknown";
                    self.location.ancestorOrigins && self.location.ancestorOrigins[0] && (h.or = self.location.ancestorOrigins[0]);
                    self.viewerState && (h.vs = self.viewerState);
                    self.parent && self.parent != self && (h.iem = "1");
                    if (self.AMP && self.AMP.viewer) {
                        var t = self.AMP.viewer.getResolvedViewerUrl(),
                            w = self.AMP.viewer.maybeGetMessagingOrigin();
                        t && (h.rvu = t);
                        w && (h.mso = w)
                    }
                    Af || (Af = Kf());
                    h.jse = Af;
                    var u = [];
                    f = self.__AMP__EXPERIMENT_TOGGLES || null;
                    for (var r in f) u.push(r + "=" + (f[r] ? "1" : "0"));
                    h.exps = u.join(",");
                    e ? (h.el = e.associatedElement ? e.associatedElement.tagName : "u", e.args && (h.args = JSON.stringify(e.args)), n || e.ignoreStack || !e.stack || (h.s = e.stack), e.message && (e.message += " _reported_")) : (h.f = b || "", h.l = c || "", h.c = d || "");
                    h.r = self.document ? self.document.referrer : "";
                    h.ae = xf.join(",");
                    h.fr = self.location.originalHash || self.location.hash;
                    "production" ===
                    h.bt && (h.pt = "1");
                    b = a;
                    25 <= xf.length && xf.splice(0, xf.length - 25 + 1);
                    xf.push(b);
                    return h
                }
            }
        }

        function Gf() {
            var a = self;
            if (!a.document) return !1;
            a = a.document.querySelectorAll("script[src]");
            for (var b = 0; b < a.length; b++)
                if (!T(a[b].src.toLowerCase())) return !0;
            return !1
        }

        function Kf() {
            function a() {}
            a.prototype.t = function() {
                throw Error("message");
            };
            var b = new a;
            try {
                b.t()
            } catch (d) {
                b = d.stack;
                if (b.startsWith("t@")) return "Safari";
                if (-1 < b.indexOf(".prototype.t@")) return "Firefox";
                var c = b.split("\n").pop();
                if (/\bat .* \(/i.test(c)) return "IE";
                if (b.startsWith("Error: message")) return "Chrome"
            }
            return "unknown"
        };
        var Lf = "__AMP_ACTION_MAP__" + Math.random(),
            Mf = {
                form: ["submit", "clear"]
            },
            Nf = [{
                tagOrTarget: "AMP",
                method: "setState"
            }, {
                tagOrTarget: "*",
                method: "focus"
            }, {
                tagOrTarget: "*",
                method: "hide"
            }, {
                tagOrTarget: "*",
                method: "show"
            }, {
                tagOrTarget: "*",
                method: "toggleClass"
            }, {
                tagOrTarget: "*",
                method: "toggleVisibility"
            }],
            Of = {
                button: !0,
                checkbox: !0,
                link: !0,
                listbox: !0,
                menuitem: !0,
                menuitemcheckbox: !0,
                menuitemradio: !0,
                option: !0,
                radio: !0,
                scrollbar: !0,
                slider: !0,
                spinbutton: !0,
                "switch": !0,
                tab: !0,
                treeitem: !0
            };

        function Pf(a, b, c, d, e, f, h, k, l, m) {
            k = void 0 === k ? "?" : k;
            l = void 0 === l ? null : l;
            m = void 0 === m ? Math.random() : m;
            var n = k,
                q = l,
                t = m;
            this.node = a;
            this.method = b;
            this.args = c;
            this.source = d;
            this.caller = e;
            this.event = f;
            this.trust = h;
            this.actionEventType = n;
            this.tagOrTarget = q || a.tagName;
            this.sequenceId = t
        }
        Pf.prototype.satisfiesTrust = function(a) {
            if (!Ta(this.trust)) return G().error("Action", "Invalid trust for '" + this.method + "': " + this.trust), !1;
            if (this.trust < a) {
                a: switch (this.trust) {
                    case 1:
                        var b = "low";
                        break a;
                    case 3:
                        b = "high";
                        break a;
                    default:
                        b = "default"
                }
                D().error("Action", '"' + this.actionEventType + '" event with "' + b + '" trust is not allowed to invoke "' + (this.tagOrTarget.toLowerCase() + "." + this.method + '".'));
                return !1
            }
            return !0
        };

        function Qf(a, b) {
            this.ampdoc = a;
            this.V = b || a.getRootNode();
            this.ia = (this.yf = this.ampdoc.isSingleDoc() && tf(this.V)) ? Nf : null;
            this.Hd = J();
            this.qf = J();
            this.addEvent("tap");
            this.addEvent("submit");
            this.addEvent("change");
            this.addEvent("input-debounced");
            this.addEvent("input-throttled");
            this.addEvent("valid");
            this.addEvent("invalid")
        }
        g = Qf.prototype;
        g.addEvent = function(a) {
            var b = this;
            if ("tap" == a) this.V.addEventListener("click", function(e) {
                e.defaultPrevented || b.trigger(e.target, a, e, 3)
            }), this.V.addEventListener("keydown", function(e) {
                var f = e.key,
                    h = e.target;
                if ("Enter" == f || " " == f) {
                    var k = h.getAttribute("role");
                    if (f = k) f = k.toLowerCase(), f = sb.call(Of, f);
                    var l = f;
                    !e.defaultPrevented && l && b.trigger(h, a, e, 3) && e.preventDefault()
                }
            });
            else if ("submit" == a) this.V.addEventListener(a, function(e) {
                b.trigger(e.target, a, e, 3)
            });
            else if ("change" == a) this.V.addEventListener(a,
                function(e) {
                    var f = e.target;
                    Rf(e);
                    b.trigger(f, a, e, 3)
                });
            else if ("input-debounced" == a) {
                var c = rf(this.ampdoc.win, function(e) {
                    b.trigger(e.target, a, e, 3)
                });
                this.V.addEventListener("input", function(e) {
                    var f = new Sf(e);
                    Rf(f);
                    c(f)
                })
            } else if ("input-throttled" == a) {
                var d = qf(this.ampdoc.win, function(e) {
                    b.trigger(e.target, a, e, 3)
                }, 100);
                this.V.addEventListener("input", function(e) {
                    e = new Sf(e);
                    Rf(e);
                    d(e)
                })
            } else "valid" != a && "invalid" != a || this.V.addEventListener(a, function(e) {
                b.trigger(e.target, a, e, 3)
            })
        };
        g.addGlobalTarget = function(a, b) {
            this.Hd[a] = b
        };
        g.addGlobalMethodHandler = function(a, b, c) {
            this.qf[a] = {
                handler: b,
                minTrust: void 0 === c ? 2 : c
            }
        };
        g.trigger = function(a, b, c, d, e) {
            return Tf(this, a, b, c, d, e)
        };
        g.execute = function(a, b, c, d, e, f, h) {
            a = new Pf(a, b, c, d, e, f, h);
            Uf(this, a)
        };
        g.installActionHandler = function(a, b) {
            "amp-" === (a.getAttribute("id") || "").substring(0, 4) || a.tagName.toLowerCase();
            if (a.__AMP_ACTION_HANDLER__) G().error("Action", "Action handler already installed for " + a);
            else {
                a.__AMP_ACTION_HANDLER__ = b;
                var c = a.__AMP_ACTION_QUEUE__;
                A(c) && P(a.ownerDocument.defaultView).delay(function() {
                    c.forEach(function(d) {
                        try {
                            b(d)
                        } catch (e) {
                            G().error("Action", "Action execution failed:", d, e)
                        }
                    });
                    a.__AMP_ACTION_QUEUE__.length = 0
                }, 1)
            }
        };
        g.hasAction = function(a, b, c) {
            return !!Vf(a, b, c)
        };
        g.hasResolvableAction = function(a, b, c) {
            var d = this,
                e = Vf(a, b, c);
            return e ? e.actionInfos.some(function(f) {
                return !!Wf(d, f.target)
            }) : !1
        };
        g.hasResolvableActionForTarget = function(a, b, c, d) {
            var e = this;
            return (a = Vf(a, b, d)) ? a.actionInfos.some(function(f) {
                return Wf(e, f.target) == c
            }) : !1
        };

        function Wf(a, b) {
            return a.Hd[b] ? a.V : a.V.getElementById(b)
        }
        g.setAllowlist = function(a) {
            a.every(function(b) {
                return b.tagOrTarget && b.method
            });
            this.ia = a
        };
        g.addToAllowlist = function(a, b, c) {
            var d = this;
            c && c.includes("email") !== this.yf || (this.ia || (this.ia = []), A(b) || (b = [b]), b.forEach(function(e) {
                d.ia.some(function(f) {
                    return f.tagOrTarget == a && f.method == e
                }) || d.ia.push({
                    tagOrTarget: a,
                    method: e
                })
            }))
        };

        function Tf(a, b, c, d, e, f) {
            var h = Vf(b, c);
            if (!h) return !1;
            var k = Math.random(),
                l = null;
            h.actionInfos.forEach(function(m) {
                function n() {
                    var r = Wf(a, q);
                    if (r) return r = new Pf(r, t, u, b, h.node, d, e, c, r.tagName || q, k), Uf(a, r);
                    a.Pa('Target "' + q + '" not found for action [' + w + "].")
                }
                var q = m.target,
                    t = m.method,
                    w = m.str,
                    u = Xf(m.args, d, f);
                l = l ? l.then(n) : n()
            });
            return 1 <= h.actionInfos.length
        }
        g.Pa = function(a, b) {
            if (b) throw a = D().createError("[Action] " + a), Bf(a, b), a;
            D().error("Action", a)
        };

        function Uf(a, b) {
            var c = b.method,
                d = b.tagOrTarget;
            if (a.ia && !Yf(b, a.ia)) return a.Pa('"' + d + "." + c + '" is not allowlisted ' + JSON.stringify(a.ia) + "."), null;
            var e = a.Hd[d];
            if (e) return e(b);
            var f = b.node,
                h = a.qf[c];
            if (h && b.satisfiesTrust(h.minTrust)) return h.handler(b);
            var k = f.tagName.toLowerCase();
            if ("amp-" === k.substring(0, 4)) return f.enqueAction ? f.enqueAction(b) : a.Pa('Unrecognized AMP element "' + k + '".', f), null;
            var l = Mf[k];
            if ("amp-" === (f.getAttribute("id") || "").substring(0, 4) || l && -1 < l.indexOf(c)) return (a = f.__AMP_ACTION_HANDLER__) ?
                a(b) : (f.__AMP_ACTION_QUEUE__ = f.__AMP_ACTION_QUEUE__ || [], f.__AMP_ACTION_QUEUE__.push(b)), null;
            a.Pa("Target (" + d + ") doesn't support \"" + c + '" action.', b.caller);
            return null
        }

        function Vf(a, b, c) {
            for (; a && (!c || a != c);) {
                var d = b;
                var e = a;
                var f = d,
                    h = e[Lf];
                void 0 === h && (h = null, e.hasAttribute("on") ? (f = e.getAttribute("on"), h = Zf(f, e), e[Lf] = h) : e.hasAttribute("execute") && (h = e.getAttribute("execute"), h = Zf(f + ":" + h, e), e[Lf] = h));
                var k = (e = h) ? e[d] || null : null;
                if (k && !a.disabled && !Lb(a, ":disabled")) return {
                    node: a,
                    actionInfos: k
                };
                a = a.parentElement
            }
            return null
        }
        g.setActions = function(a, b) {
            a.setAttribute("on", b);
            delete a[Lf]
        };

        function Rf(a) {
            var b = J(),
                c = a.target;
            void 0 !== c.value && (b.value = c.value);
            "INPUT" == c.tagName && (b.valueAsNumber = Number(c.value));
            void 0 !== c.checked && (b.checked = c.checked);
            if (void 0 !== c.min || void 0 !== c.max) b.min = c.min, b.max = c.max;
            c.files && (b.files = Ra(c.files).map(function(d) {
                return {
                    name: d.name,
                    size: d.size,
                    type: d.type
                }
            }));
            if (0 < Object.keys(b).length) try {
                a.detail = b
            } catch (d) {}
        }

        function Yf(a, b) {
            var c = a.method,
                d = a.node;
            a = a.tagOrTarget;
            "activate" === c && "function" == typeof d.getDefaultActionAlias && (c = d.getDefaultActionAlias());
            var e = c.toLowerCase(),
                f = a.toLowerCase();
            return b.some(function(h) {
                return h.tagOrTarget.toLowerCase() !== f && "*" !== h.tagOrTarget || h.method.toLowerCase() !== e ? !1 : !0
            })
        }

        function Sf(a) {
            this.detail = null;
            var b = this || J(),
                c;
            for (c in a) b[c] = "function" === typeof a[c] ? $f : a[c]
        }

        function $f() {}

        function Zf(a, b) {
            var c = ag.bind(null, a, b),
                d = bg.bind(null, a, b);
            b = null;
            var e = new cg(a);
            do {
                var f = e.next();
                if (f.type != dg && (f.type != eg || ";" != f.value))
                    if (f.type == fg || f.type == gg) {
                        var h = f.value;
                        d(e.next(), [eg], ":");
                        var k = [];
                        do {
                            var l = d(e.next(), [fg, gg]).value,
                                m = "activate",
                                n = null;
                            var q = e.peek();
                            if (q.type == eg && "." == q.value && (e.next(), m = d(e.next(), [fg, gg]).value || m, q = e.peek(), q.type == eg && "(" == q.value)) {
                                e.next();
                                n = e;
                                var t = d,
                                    w = c,
                                    u = n.peek(),
                                    r = null;
                                if (u.type == hg) {
                                    r = J();
                                    var y = n.next().value;
                                    r.__AMP_OBJECT_STRING__ =
                                        y;
                                    t(n.next(), [eg], ")")
                                } else {
                                    do {
                                        var F = y = n.next();
                                        u = F.type;
                                        F = F.value;
                                        if (u != eg || "," != F && ")" != F)
                                            if (u == fg || u == gg) {
                                                t(n.next(), [eg], "=");
                                                y = t(n.next(!0), [fg, gg]);
                                                var sa = [y];
                                                if (y.type == gg)
                                                    for (u = n.peek(); u.type == eg && "." == u.value; u = n.peek()) n.next(), y = t(n.next(!1), [gg]), sa.push(y);
                                                u = ig(sa);
                                                r || (r = J());
                                                r[F] = u;
                                                u = n.peek();
                                                w(u.type == eg && ("," == u.value || ")" == u.value), "Expected either [,] or [)]")
                                            } else w(!1, "; unexpected token [" + (y.value || "") + "]")
                                    } while (y.type != eg || ")" != y.value)
                                }
                                n = r
                            }
                            k.push({
                                event: h,
                                target: l,
                                method: m,
                                args: n,
                                str: a
                            });
                            q = e.peek()
                        } while (q.type == eg && "," == q.value && e.next());
                        b || (b = J());
                        b[h] = k
                    } else c(!1, "; unexpected token [" + (f.value || "") + "]")
            } while (f.type != dg);
            return b
        }

        function ig(a) {
            return 0 == a.length ? null : 1 == a.length ? a[0].value : {
                expression: a.map(function(b) {
                    return b.value
                }).join(".")
            }
        }

        function Xf(a, b, c) {
            if (!a) return a;
            var d = c || K({});
            b && (b = b.detail) && (d.event = b);
            var e = J();
            Object.keys(a).forEach(function(f) {
                var h = a[f];
                if ("object" == typeof h && h.expression) {
                    h = h.expression;
                    if ("." == h) h = d;
                    else {
                        h = h.split(".");
                        for (var k = d, l = 0; l < h.length; l++) {
                            var m = h[l];
                            if (m && k && void 0 !== k[m] && Yb(k, m)) k = k[m];
                            else {
                                k = void 0;
                                break
                            }
                        }
                        h = k
                    }
                    var n = h;
                    h = void 0 === n ? null : n
                }
                e[f] = d[h] ? d[h] : h
            });
            return e
        }

        function ag(a, b, c, d) {
            return I(c, "Invalid action definition in %s: [%s] %s", b, a, d || "")
        }

        function bg(a, b, c, d, e) {
            void 0 !== e ? ag(a, b, d.includes(c.type) && c.value == e, "; expected [" + e + "]") : ag(a, b, d.includes(c.type));
            return c
        }
        var dg = 1,
            eg = 2,
            fg = 3,
            gg = 4,
            hg = 5;

        function cg(a) {
            this.N = a;
            this.Ld = -1
        }
        cg.prototype.next = function(a) {
            var b = jg(this, a || !1);
            this.Ld = b.index;
            return b
        };
        cg.prototype.peek = function(a) {
            return jg(this, a || !1)
        };

        function jg(a, b) {
            var c = a.Ld + 1;
            if (c >= a.N.length) return {
                type: dg,
                index: a.Ld
            };
            var d = a.N.charAt(c);
            if (-1 != " \t\n\r\f\v\u00a0\u2028\u2029".indexOf(d)) {
                for (c++; c < a.N.length && -1 != " \t\n\r\f\v\u00a0\u2028\u2029".indexOf(a.N.charAt(c)); c++);
                if (c >= a.N.length) return {
                    type: dg,
                    index: c
                };
                d = a.N.charAt(c)
            }
            if (b && (kg(d) || "." == d && c + 1 < a.N.length && kg(a.N[c + 1]))) {
                for (var e = "." == d, f = c + 1; f < a.N.length; f++) {
                    var h = a.N.charAt(f);
                    if ("." == h) e = !0;
                    else if (!kg(h)) break
                }
                a = a.N.substring(c, f);
                a = e ? parseFloat(a) : parseInt(a, 10);
                c = f - 1;
                return {
                    type: fg,
                    value: a,
                    index: c
                }
            }
            if (-1 != ";:.()=,|!".indexOf(d)) return {
                type: eg,
                value: d,
                index: c
            };
            if (-1 != "\"'".indexOf(d)) {
                f = -1;
                for (var k = c + 1; k < a.N.length; k++)
                    if (a.N.charAt(k) == d) {
                        f = k;
                        break
                    } if (-1 == f) return {
                    type: 0,
                    index: c
                };
                a = a.N.substring(c + 1, f);
                c = f;
                return {
                    type: fg,
                    value: a,
                    index: c
                }
            }
            if ("{" == d) {
                var l = 1;
                f = -1;
                for (d = c + 1; d < a.N.length; d++) {
                    var m = a.N[d];
                    "{" == m ? l++ : "}" == m && l--;
                    if (0 >= l) {
                        f = d;
                        break
                    }
                }
                if (-1 == f) return {
                    type: 0,
                    index: c
                };
                a = a.N.substring(c, f + 1);
                c = f;
                return {
                    type: hg,
                    value: a,
                    index: c
                }
            }
            for (f = c + 1; f < a.N.length && -1 == " \t\n\r\f\x0B\u00a0\u2028\u2029;:.()=,|!\"'{}".indexOf(a.N.charAt(f)); f++);
            a = a.N.substring(c, f);
            c = f - 1;
            return !b || "true" != a && "false" != a ? kg(a.charAt(0)) ? {
                type: fg,
                value: a,
                index: c
            } : {
                type: gg,
                value: a,
                index: c
            } : {
                type: fg,
                value: "true" == a,
                index: c
            }
        }

        function kg(a) {
            return "0" <= a && "9" >= a
        };

        function lg(a, b) {
            for (var c = [], d = 0, e = 0; e < a.length; e++) {
                var f = a[e];
                b(f, e, a) ? c.push(f) : (d < e && (a[d] = f), d++)
            }
            d < a.length && (a.length = d)
        }

        function mg(a, b) {
            for (var c = 0; c < a.length; c++)
                if (b(a[c], c, a)) return c;
            return -1
        };

        function ng(a) {
            return !!a && "function" == typeof a.getFormData
        };
        var og = ["GET", "POST"],
            pg = [A, Sa];

        function qg(a, b) {
            var c = Object.assign({}, b);
            if (ng(b.body)) {
                var d = b.body;
                c.headers["Content-Type"] = "multipart/form-data;charset=utf-8";
                b = d.entries();
                for (var e = [], f = b.next(); !f.done; f = b.next()) e.push(f.value);
                c.body = e
            }
            return {
                input: a,
                init: c
            }
        }

        function rg(a, b) {
            I(Sa(a), "Object expected: %s", a);
            if ("document" != b) return new Response(a.body, a.init);
            var c = J(),
                d = {
                    status: 200,
                    statusText: "OK",
                    getResponseHeader: function(f) {
                        return c[String(f).toLowerCase()] || null
                    }
                };
            if (a.init) {
                var e = a.init;
                A(e.headers) && e.headers.forEach(function(f) {
                    var h = f[1];
                    c[String(f[0]).toLowerCase()] = String(h)
                });
                e.status && (d.status = parseInt(e.status, 10));
                e.statusText && (d.statusText = String(e.statusText))
            }
            return new Response(a.body ? String(a.body) : "", d)
        }

        function sg(a, b, c, d) {
            if (!b) return v();
            var e = d.prerenderSafe ? v() : b.whenFirstVisible(),
                f = R(b),
                h = T(c),
                k = f.hasCapability("xhrInterceptor"),
                l = d.bypassInterceptorForDev && !1;
            return h || !k || l || !b.getRootNode().documentElement.hasAttribute("allow-xhr-interception") ? e : e.then(function() {
                return f.isTrustedViewer()
            }).then(function(m) {
                if (m || U(a, "untrusted-xhr-interception")) {
                    var n = K({
                        originalRequest: qg(c, d)
                    });
                    return f.sendMessageAwaitResponse("xhr", n).then(function(q) {
                        return rg(q, d.responseType)
                    })
                }
            })
        }

        function tg(a, b, c) {
            !1 !== c.ampCors && (b = se(a, b));
            return b
        }

        function ug(a, b) {
            a = a || {};
            var c = a.method;
            void 0 === c ? c = "GET" : (c = c.toUpperCase(), og.includes(c));
            a.method = c;
            a.headers = a.headers || K({});
            b && (a.headers.Accept = b);
            return a
        }

        function vg(a, b, c) {
            c = c || {};
            var d = a.origin || S(a.location.href).origin;
            a = S(b).origin;
            d == a && (c.headers = c.headers || {}, c.headers["AMP-Same-Origin"] = "true");
            return c
        }

        function wg(a) {
            var b = ug(a, "application/json");
            "POST" != b.method || ng(b.body) || (pg.some(function(c) {
                return c(b.body)
            }), b.headers["Content-Type"] = b.headers["Content-Type"] || "text/plain;charset=utf-8", b.body = "application/x-www-form-urlencoded" === b.headers["Content-Type"] ? ie(b.body) : JSON.stringify(b.body));
            return b
        }

        function xg(a) {
            return new Promise(function(b) {
                if (a.ok) return b(a);
                b = a.status;
                var c = D().createError("HTTP error " + b);
                c.retriable = 415 == b || 500 <= b && 600 > b;
                c.response = a;
                throw c;
            })
        };

        function yg(a) {
            this.win = a;
            a = Sc(a);
            this.kg = a.isSingleDoc() ? a.getSingleDoc() : null
        }
        g = yg.prototype;
        g.Cg = function(a, b) {
            var c = arguments,
                d = this;
            return sg(this.win, this.kg, a, b).then(function(e) {
                if (e) return e;
                ng(b.body) && (b.body = b.body.getFormData());
                return d.win.fetch.apply(null, c)
            })
        };

        function zg(a, b, c) {
            c = void 0 === c ? {} : c;
            b = tg(a.win, b, c);
            c = vg(a.win, b, c);
            return a.Cg(b, c).then(function(d) {
                return d
            }, function(d) {
                var e = S(b).origin;
                throw D().createExpectedError("XHR", "Failed fetching (" + e + "/...):", d && d.message);
            })
        }
        g.fetchJson = function(a, b) {
            return this.fetch(a, wg(b))
        };
        g.fetchText = function(a, b) {
            return this.fetch(a, ug(b, "text/plain"))
        };
        g.xssiJson = function(a, b) {
            return b ? a.text().then(function(c) {
                return c.startsWith(b) ? Zb(c.slice(b.length)) : (D().warn("XHR", 'Failed to strip missing prefix "' + b + '" in fetch response.'), Zb(c))
            }) : a.json()
        };
        g.fetch = function(a, b) {
            b = ug(b);
            return zg(this, a, b).then(function(c) {
                return xg(c)
            })
        };
        g.sendSignal = function(a, b) {
            return zg(this, a, b).then(function(c) {
                return xg(c)
            })
        };
        g.getCorsUrl = function(a, b) {
            return se(a, b)
        };

        function Ag(a) {
            yg.call(this, a);
            this.Fb = J()
        }
        p(Ag, yg);
        Ag.prototype.fetch = function(a, b) {
            var c = this,
                d = !b || !b.method || "GET" === b.method,
                e = Bg(this, a, b && b.headers && b.headers.Accept || ""),
                f = !!this.Fb[e];
            if (d && f) return this.Fb[e].then(function(k) {
                return k.clone()
            });
            var h = yg.prototype.fetch.call(this, a, b);
            d && (this.Fb[e] = h.then(function(k) {
                delete c.Fb[e];
                return k.clone()
            }, function(k) {
                delete c.Fb[e];
                throw k;
            }));
            return h
        };

        function Bg(a, b, c) {
            var d = re(b, qe(a.win.location));
            return le(d) + c
        };

        function Cg(a) {
            this.B = a;
            this.h = R(this.B);
            this.me = null;
            this.P = P(this.B.win)
        }
        Cg.prototype.isSupported = function() {
            return this.h.isCctEmbedded() && this.h.isProxyOrigin()
        };
        Cg.prototype.getScopedCid = function(a) {
            var b = this;
            if (!this.h.isCctEmbedded()) return Promise.resolve(null);
            this.me || (this.me = this.Eb("https://ampcid.google.com/v1/cache:getClientId?key=AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc"));
            return this.me.then(function(c) {
                return c ? Dg(b, c, a) : null
            })
        };
        Cg.prototype.Eb = function(a, b) {
            var c = this,
                d = b = void 0 === b ? !0 : b,
                e = K({
                    publisherOrigin: qe(this.B.win.location)
                });
            return this.P.timeoutPromise(3E4, O(this.B.win, "xhr").fetchJson(a, {
                method: "POST",
                ampCors: !1,
                credentials: "include",
                mode: "cors",
                body: e
            }), "fetchCidTimeout").then(function(f) {
                return f.json().then(function(h) {
                    if (h.optOut) return null;
                    var k = h.publisherClientId;
                    return !k && d && h.alternateUrl ? c.Eb(h.alternateUrl + "?key=AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc", !1) : k
                })
            }).catch(function(f) {
                f && f.response ? f.response.json().then(function(h) {
                    G().error("CacheCidApi",
                        JSON.stringify(h))
                }) : f && "fetchCidTimeout" == f.message ? G().expectedError("CacheCidApi", f) : G().error("CacheCidApi", f);
                return null
            })
        };

        function Dg(a, b, c) {
            b = b + ";" + c;
            return O(a.B.win, "crypto").sha384Base64(b).then(function(d) {
                return "amp-" + d
            })
        };

        function Eg(a, b) {
            try {
                var c = a.document.cookie
            } catch (k) {
                c = ""
            }
            var d = c;
            if (!d) return null;
            var e = d.split(";");
            for (a = 0; a < e.length; a++) {
                var f = e[a].trim(),
                    h = f.indexOf("=");
                if (c = -1 != h) c = f.substring(0, h).trim(), c = Na(c, void 0) == b;
                if (c) return b = f.substring(h + 1).trim(), Na(b, b)
            }
            return null
        }

        function Fg(a, b, c, d) {
            var e = {
                    highestAvailableDomain: !0
                },
                f = e = void 0 === e ? {} : e;
            if (f.allowOnProxyOrigin) I(!f.highestAvailableDomain, "Could not support highestAvailable Domain on proxy origin, specify domain explicitly");
            else {
                I(!T(a.location.href), "Should never attempt to set cookie on proxy origin: " + b);
                e = S(a.location.href).hostname.toLowerCase();
                var h = S(Xa.cdn).hostname.toLowerCase();
                I(!(e == h || yb(e, "." + h)), "Should never attempt to set cookie on proxy origin. (in depth check): " + b)
            }
            e = void 0;
            if (f.domain) e =
                f.domain;
            else if (f.highestAvailableDomain) a: if (e = a.document.head && a.document.head.querySelector("meta[name='amp-cookie-scope']")) e = e.getAttribute("content") || "", h = qe(a.location.href), e = yb(h, "." + e) ? e : h.split("://")[1];
                else {
                    if (!T(a.location.href)) {
                        e = a.location.hostname.split(".");
                        h = e[e.length - 1];
                        var k;
                        for (k = "-test-amp-cookie-tmp"; Eg(a, k);) k = "-test-amp-cookie-tmp0";
                        for (var l = e.length - 2; 0 <= l; l--)
                            if (h = e[l] + "." + h, Gg(a, k, "delete", Date.now() + 1E3, h), "delete" == Eg(a, k)) {
                                Gg(a, k, "delete", Date.now() - 1E3, h);
                                e = h;
                                break a
                            }
                    }
                    e = null
                } Gg(a, b, c, d, e, f.sameSite, f.secure)
        }

        function Gg(a, b, c, d, e, f, h) {
            "ampproject.org" == e && (c = "delete", d = 0);
            b = encodeURIComponent(b) + "=" + encodeURIComponent(c) + "; path=/" + (e ? "; domain=" + e : "") + "; expires=" + (new Date(d)).toUTCString() + (f ? "; SameSite=" + f : "") + (h ? "; Secure" : "");
            try {
                a.document.cookie = b
            } catch (k) {}
        };

        function Hg(a) {
            this.A = a.win;
            this.P = P(this.A);
            this.xd = {};
            var b = Tc(a).canonicalUrl;
            this.wd = b ? S(b).origin : null
        }
        Hg.prototype.getScopedCid = function(a, b) {
            var c = this;
            if (this.xd[b]) return this.xd[b];
            var d;
            return this.xd[b] = this.P.poll(200, function() {
                d = Eg(c.A, "AMP_TOKEN");
                return "$RETRIEVING" !== d
            }).then(function() {
                if ("$OPT_OUT" === d) return "$OPT_OUT";
                if (("$NOT_FOUND" !== d || !T(c.A.document.referrer)) && d && "$" === d[0]) return null;
                d && (!d || "$" !== d[0]) || Ig(c, "$RETRIEVING", 3E4);
                return c.Eb("https://ampcid.google.com/v1/publisher:getClientId?key=" + a, b, d).then(function(e) {
                    var f = c.sf(e);
                    return !f && e.alternateUrl ? c.Eb(e.alternateUrl +
                        "?key=" + a, b, d).then(c.sf.bind(c)) : f
                }).catch(function(e) {
                    Ig(c, "$ERROR", 3E4);
                    e && e.response ? e.response.json().then(function(f) {
                        G().error("GoogleCidApi", JSON.stringify(f))
                    }) : G().error("GoogleCidApi", e);
                    return null
                })
            })
        };
        Hg.prototype.Eb = function(a, b, c) {
            b = K({
                originScope: b,
                canonicalOrigin: this.wd
            });
            c && (b.securityToken = c);
            return this.P.timeoutPromise(3E4, O(this.A, "xhr").fetchJson(a, {
                method: "POST",
                ampCors: !1,
                credentials: "include",
                mode: "cors",
                body: b
            }).then(function(d) {
                return d.json()
            }))
        };
        Hg.prototype.sf = function(a) {
            if (a.optOut) return Ig(this, "$OPT_OUT", 31536E6), "$OPT_OUT";
            if (a.clientId) return Ig(this, a.securityToken, 31536E6), a.clientId;
            if (a.alternateUrl) return null;
            Ig(this, "$NOT_FOUND", 36E5);
            return null
        };

        function Ig(a, b, c) {
            if (b) {
                var d = a.A;
                a = a.A.Date.now() + c;
                Fg(d, "AMP_TOKEN", b, a)
            }
        };

        function Jg(a) {
            this.B = a;
            this.h = R(this.B);
            this.wd = (a = Tc(this.B).canonicalUrl) ? S(a).origin : null
        }
        Jg.prototype.isSupported = function() {
            return this.h.hasCapability("cid") ? this.h.isTrustedViewer() : Promise.resolve(!1)
        };
        Jg.prototype.getScopedCid = function(a, b) {
            b = K({
                scope: b,
                clientIdApi: !!a,
                canonicalOrigin: this.wd
            });
            a && (b.apiKey = a);
            return this.h.sendMessageAwaitResponse("cid", b)
        };
        var Kg = {
            "+": "-",
            "/": "_",
            "=": "."
        };

        function Lg(a) {
            a = bc(a);
            return btoa(a).replace(/[+/=]/g, function(b) {
                return Kg[b]
            })
        };
        var Mg = /^[a-zA-Z0-9-_.]+$/,
            Ng = {
                googleanalytics: "AMP_ECID_GOOGLE"
            },
            Og = {
                googleanalytics: "AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM"
            };

        function Pg(a) {
            this.ampdoc = a;
            this.ld = null;
            this.Ed = Object.create(null);
            this.We = new Cg(a);
            this.hg = new Jg(a);
            this.ug = new Hg(a);
            this.kd = null;
            this.isBackupCidExpOn = U(this.ampdoc.win, "amp-cid-backup")
        }
        Pg.prototype.get = function(a, b, c) {
            var d = this;
            I(Mg.test(a.scope) && Mg.test(a.cookieName), "The CID scope and cookie name must only use the characters [a-zA-Z0-9-_.]+\nInstead found: %s", a.scope);
            return b.then(function() {
                return d.ampdoc.whenFirstVisible()
            }).then(function() {
                return Qg(d.ampdoc)
            }).then(function(e) {
                if (e) return "";
                var f = Rg(d, a, c || b);
                return P(d.ampdoc.win).timeoutPromise(1E4, f, 'Getting cid for "' + a.scope + '" timed out').catch(function(h) {
                    ob(h)
                })
            })
        };
        Pg.prototype.optOut = function() {
            return Sg(this.ampdoc)
        };

        function Rg(a, b, c) {
            var d = b.scope,
                e = S(a.ampdoc.win.location.href);
            if (!T(e)) {
                var f = Tg(a, d);
                return f ? a.ug.getScopedCid(f, d).then(function(h) {
                    return "$OPT_OUT" == h ? null : h ? (Ug(a.ampdoc.win, b.cookieName || d, h), h) : Vg(a, b, c)
                }) : Vg(a, b, c)
            }
            return a.hg.isSupported().then(function(h) {
                if (h) {
                    var k = Tg(a, d);
                    return a.hg.getScopedCid(k, d)
                }
                return a.We.isSupported() && Tg(a, d) ? a.We.getScopedCid(d).then(function(l) {
                    return l ? l : Wg(a, c, d, e)
                }) : Wg(a, c, d, e)
            })
        }

        function Wg(a, b, c, d) {
            return Xg(a, b).then(function(e) {
                var f = O(a.ampdoc.win, "crypto"),
                    h = f.sha384Base64;
                I(T(d), "Expected proxy origin %s", d.origin);
                var k = qe(d);
                return h.call(f, e + k + c)
            })
        }

        function Tg(a, b) {
            a.kd || (a.kd = Yg(a));
            return a.kd[b]
        }

        function Yg(a) {
            var b = {},
                c = a.ampdoc.getMetaByName("amp-google-client-id-api");
            c && c.split(",").forEach(function(d) {
                d = d.trim();
                if (0 < d.indexOf("=")) {
                    var e = d.split("=");
                    d = e[0].trim();
                    b[d] = e[1].trim()
                } else {
                    var f = d;
                    (d = Ng[f]) ? b[d] = Og[f]: D().warn("CID", "Unsupported client for Google CID API: " + f + '.Please remove or correct meta[name="amp-google-client-id-api"]')
                }
            });
            return b
        }

        function Sg(a) {
            R(a).sendMessage("cidOptOut", {});
            return Ec(a, "storage").then(function(b) {
                return b.set("amp-cid-optout", !0)
            })
        }

        function Qg(a) {
            return Ec(a, "storage").then(function(b) {
                return b.get("amp-cid-optout").then(function(c) {
                    return !!c
                })
            }).catch(function() {
                return !1
            })
        }

        function Ug(a, b, c) {
            var d = Date.now() + 31536E6;
            Fg(a, b, c, d)
        }

        function Zg(a, b, c) {
            Ec(a, "storage").then(function(d) {
                d.isViewerStorage() || d.setNonBoolean("amp-cid:" + b, c)
            })
        }

        function $g(a, b) {
            var c = a.ampdoc,
                d = a.isBackupCidExpOn,
                e = b.disableBackup;
            a = b.scope;
            var f = b.cookieName || a,
                h = Eg(c.win, f);
            return h ? Promise.resolve(h) : d && !e ? Ec(c, "storage").then(function(k) {
                return k.get("amp-cid:" + f, 31536E6)
            }).then(function(k) {
                return k && "string" == typeof k ? k : null
            }) : Promise.resolve(null)
        }

        function Vg(a, b, c) {
            var d = a.isBackupCidExpOn,
                e = a.ampdoc,
                f = e.win,
                h = b.scope,
                k = b.disableBackup,
                l = b.cookieName || h;
            return $g(a, b).then(function(m) {
                if (!m && !b.createCookieIfNotPresent) return Promise.resolve(null);
                if (m) return /^amp-/.test(m) && (Ug(f, l, m), d && !k && Zg(e, l, m)), Promise.resolve(m);
                if (a.Ed[h]) return a.Ed[h];
                var n = ah(f).then(function(q) {
                    return "amp-" + q
                });
                Promise.all([n, c]).then(function(q) {
                    var t = q[0];
                    Eg(f, l) || (Ug(f, l, t), d && !k && Zg(e, l, t))
                });
                return a.Ed[h] = n
            })
        }

        function Xg(a, b) {
            if (a.ld) return a.ld;
            var c = a.ampdoc.win;
            return a.ld = bh(a.ampdoc).then(function(d) {
                var e = !1;
                if (d && !ch(d)) {
                    var f = Promise.resolve(d.cid);
                    dh(d) && (e = !0)
                } else f = O(c, "crypto").sha384Base64(eh(c)), e = !0;
                e && f.then(function(h) {
                    fh(a.ampdoc, b, h)
                });
                return f
            })
        }

        function fh(a, b, c) {
            var d = a.win;
            Vb(d) ? gh(a, hh(c)) : b.then(function() {
                try {
                    d.localStorage.setItem("amp-cid", hh(c))
                } catch (e) {}
            })
        }

        function gh(a, b) {
            var c = R(a);
            return c.isTrustedViewer().then(function(d) {
                if (d) return G().expectedError("CID", "Viewer does not provide cap=cid"), c.sendMessageAwaitResponse("cid", b).then(function(e) {
                    var f;
                    if (f = e) {
                        try {
                            var h = Zb(e)
                        } catch (k) {
                            h = null
                        }
                        f = !h
                    }
                    return f ? (G().expectedError("CID", "invalid cid format"), JSON.stringify(K({
                        time: Date.now(),
                        cid: e
                    }))) : e
                })
            })
        }

        function hh(a) {
            return JSON.stringify(K({
                time: Date.now(),
                cid: a
            }))
        }

        function bh(a) {
            var b = a.win;
            try {
                var c = b.localStorage.getItem("amp-cid")
            } catch (e) {}
            var d = Promise.resolve(c);
            !c && Vb(b) && (d = gh(a));
            return d.then(function(e) {
                if (!e) return null;
                e = Zb(e);
                return {
                    time: e.time,
                    cid: e.cid
                }
            })
        }

        function ch(a) {
            var b = a.time,
                c = Date.now();
            return b + 31536E6 < c
        }

        function dh(a) {
            a = a.time;
            var b = Date.now();
            return a + 864E5 < b
        }

        function eh(a) {
            var b;
            if ((b = (b = a.crypto) || a.msCrypto) && b.getRandomValues) {
                var c = new Uint8Array(16);
                b.getRandomValues(c);
                b = c
            } else b = null;
            return b ? b : String(a.location.href + Date.now() + a.Math.random() + a.screen.width + a.screen.height)
        }

        function ah(a) {
            var b = eh(a);
            return "string" == typeof b ? O(a, "crypto").sha384Base64(b) : tb(function() {
                return Lg(b).replace(/\.+$/, "")
            })
        };

        function ih(a) {
            this.A = a;
            var b = null,
                c = !1;
            a.crypto && (a.crypto.subtle ? b = a.crypto.subtle : a.crypto.webkitSubtle && (b = a.crypto.webkitSubtle, c = !0));
            this.pkcsAlgo = {
                name: "RSASSA-PKCS1-v1_5",
                hash: {
                    name: "SHA-256"
                }
            };
            this.subtle = b;
            this.Sg = c;
            this.Ub = null
        }
        g = ih.prototype;
        g.sha384 = function(a) {
            var b = this;
            "string" === typeof a && (a = ac(a));
            if (!this.subtle || this.Ub) return (this.Ub || jh(this)).then(function(c) {
                return c(a)
            });
            try {
                return this.subtle.digest({
                    name: "SHA-384"
                }, a).then(function(c) {
                    return new Uint8Array(c)
                }, function(c) {
                    c.message && 0 > c.message.indexOf("secure origin") && D().error("Crypto", "SubtleCrypto failed, fallback to closure lib.", c);
                    return jh(b).then(function() {
                        return b.sha384(a)
                    })
                })
            } catch (c) {
                return G().error("Crypto", "SubtleCrypto failed, fallback to closure lib.",
                    c), jh(this).then(function() {
                    return b.sha384(a)
                })
            }
        };
        g.sha384Base64 = function(a) {
            return this.sha384(a).then(function(b) {
                return Lg(b)
            })
        };
        g.uniform = function(a) {
            return this.sha384(a).then(function(b) {
                for (var c = 0, d = 2; 0 <= d; d--) c = (c + b[d]) / 256;
                return c
            })
        };

        function jh(a) {
            return a.Ub ? a.Ub : a.Ub = Uc(a.A).preloadExtension("amp-crypto-polyfill").then(function() {
                return O(a.A, "crypto-polyfill")
            })
        }
        g.isPkcsAvailable = function() {
            return !!this.subtle && !1 !== this.A.isSecureContext
        };
        g.importPkcsKey = function(a) {
            this.isPkcsAvailable();
            var b = this.Sg ? $b(JSON.stringify(a)) : a;
            return this.subtle.importKey("jwk", b, this.pkcsAlgo, !0, ["verify"])
        };
        g.verifyPkcs = function(a, b, c) {
            this.isPkcsAvailable();
            return this.subtle.verify(this.pkcsAlgo, a, b, c)
        };
        var kh = ["prefetch", "preload", "preconnect", "dns-prefetch"];

        function lh(a) {
            this.B = a;
            this.ie = this.Md = null
        }
        lh.prototype.get = function() {
            if (this.Md) return this.Md;
            var a = this.B,
                b = a.getUrl(),
                c = pe(b),
                d = a.getRootNode();
            b = d && d.AMP && d.AMP.canonicalUrl;
            if (!b) {
                var e = d.querySelector("link[rel=canonical]");
                b = e ? S(e.href).href : c
            }
            var f = String(Math.floor(1E4 * a.win.Math.random())),
                h = mh(a.win.document);
            d = nh(a.win.document);
            var k = oh(a);
            return this.Md = {
                get sourceUrl() {
                    return pe(a.getUrl())
                },
                canonicalUrl: b,
                pageViewId: f,
                get pageViewId64() {
                    this.ie || (this.ie = ah(a.win));
                    return this.ie
                },
                linkRels: h,
                viewport: d,
                replaceParams: k
            }
        };

        function mh(a) {
            var b = J();
            if (a.head) {
                a = a.head.querySelectorAll("link[rel]");
                for (var c = {}, d = 0; d < a.length; c = {
                        ub: c.ub
                    }, d++) {
                    var e = a[d];
                    c.ub = e.href;
                    var f = e.getAttribute("rel");
                    f && c.ub && f.split(/\s+/).forEach(function(h) {
                        return function(k) {
                            if (-1 == kh.indexOf(k)) {
                                var l = b[k];
                                l ? (A(l) || (l = b[k] = [l]), l.push(h.ub)) : b[k] = h.ub
                            }
                        }
                    }(c))
                }
            }
            return b
        }

        function nh(a) {
            var b = a.head.querySelector('meta[name="viewport"]');
            return b ? b.getAttribute("content") : null
        }

        function oh(a) {
            var b;
            (b = !a.isSingleDoc()) || (b = a.win.location.href, "string" == typeof b && (b = S(b)), b = "a" != (T(b) ? b.pathname.split("/", 2)[1] : null));
            if (b) return null;
            a = S(a.win.location.href);
            var c = x(a.search).amp_r;
            return void 0 === c ? null : x(c)
        };
        var ph = null,
            qh = ["gclid", "gclsrc"],
            rh = [/^t.co$/];

        function sh() {
            return I(ph, "E#19457 trackImpressionPromise")
        }

        function th() {
            var a = self,
                b = new L,
                c = b.promise,
                d = b.resolve;
            ph = P(a).timeoutPromise(8E3, c, "TrackImpressionPromise timeout").catch(function(h) {
                G().warn("IMPRESSION", h)
            });
            b = R(a.document.documentElement);
            var e = b.isTrustedViewer(),
                f = b.getReferrerUrl().then(function(h) {
                    return uh(h)
                });
            Promise.all([e, f]).then(function(h) {
                var k = h[1];
                if (h[0] || k || U(a, "alp")) {
                    var l = vh(a),
                        m = wh(a);
                    Promise.all([l, m]).then(function() {
                        d()
                    }, function() {})
                } else d()
            })
        }

        function vh(a) {
            var b = R(a.document.documentElement);
            return b.getParam("replaceUrl") ? b.hasCapability("replaceUrl") ? b.sendMessageAwaitResponse("getReplaceUrl", void 0).then(function(c) {
                c && "object" == typeof c ? b.replaceUrl(c.replaceUrl || null) : G().warn("IMPRESSION", "get invalid replaceUrl response")
            }, function(c) {
                G().warn("IMPRESSION", "Error request replaceUrl from viewer", c)
            }) : (b.replaceUrl(b.getParam("replaceUrl") || null), v()) : v()
        }

        function uh(a) {
            var b = S(a);
            return "https:" != b.protocol ? !1 : rh.some(function(c) {
                return c.test(b.hostname)
            })
        }

        function wh(a) {
            var b = vc(a.document.documentElement),
                c = R(b).getParam("click");
            if (!c) return v();
            if (0 != c.indexOf("https://")) return D().warn("IMPRESSION", "click fragment param should start with https://. Found ", c), v();
            a.location.hash && (a.location.hash = "");
            return b.whenFirstVisible().then(function() {
                return xh(a, c)
            }).then(function(d) {
                if (d) {
                    var e = d.location;
                    (d = d.tracking_url || e) && !T(d) && ((new Image).src = d);
                    if (e && a.history.replaceState) {
                        d = R(a.document.documentElement);
                        var f = a.location.href;
                        e = S(e);
                        e = x(e.search);
                        e = he(f, e);
                        a.history.replaceState(null, "", e);
                        d.maybeUpdateFragmentForCct()
                    }
                }
            }).catch(function(d) {
                D().warn("IMPRESSION", "Error on request clickUrl: ", d)
            })
        }

        function xh(a, b) {
            return O(a, "xhr").fetchJson(b, {
                credentials: "include"
            }).then(function(c) {
                return 204 == c.status ? null : c.json()
            })
        }

        function yh(a) {
            return a.whenReady().then(function() {
                return !!a.getBody().querySelector("amp-analytics[type=googleanalytics]")
            })
        };

        function zh() {
            this.F = []
        }
        zh.prototype.peek = function() {
            var a = this.F.length;
            return a ? this.F[a - 1].item : null
        };
        zh.prototype.enqueue = function(a, b) {
            if (isNaN(b)) throw Error("Priority must not be NaN.");
            for (var c = -1, d = 0, e = this.F.length; d <= e;) {
                c = Math.floor((d + e) / 2);
                if (c === this.F.length) break;
                if (this.F[c].priority < b) d = c + 1;
                else if (0 < c && this.F[c - 1].priority >= b) e = c - 1;
                else break
            }
            this.F.splice(c, 0, {
                item: a,
                priority: b
            })
        };
        zh.prototype.forEach = function(a) {
            for (var b = this.F.length; b--;) a(this.F[b].item)
        };
        zh.prototype.dequeue = function() {
            return this.F.length ? this.F.pop().item : null
        };
        ca.Object.defineProperties(zh.prototype, {
            length: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.F.length
                }
            }
        });
        var Ah = ["_top", "_blank"];

        function Bh(a) {
            var b = this;
            this.ampdoc = a;
            this.ma = a.getRootNode();
            this.J = Yc(this.ampdoc);
            this.h = R(this.ampdoc);
            this.O = Cc(this.ampdoc, "history");
            this.ta = Q(this.ampdoc.win);
            this.Rg = this.ta.isIos() && this.ta.isSafari();
            this.Lb = Vb(this.ampdoc.win) && this.h.isOvertakeHistory();
            this.Sd = this.ma != this.ampdoc.getRootNode() || !!this.ampdoc.getParent();
            this.Qg = "inabox" == z(this.ampdoc.win).runtime;
            this.Tf = this.ma.nodeType == Node.DOCUMENT_NODE ? this.ma.documentElement : this.ma;
            this.yb = this.Jg.bind(this);
            this.ma.addEventListener("click",
                this.yb);
            this.ma.addEventListener("contextmenu", this.yb);
            this.Fe = !1;
            yh(this.ampdoc).then(function(c) {
                b.Fe = c
            });
            this.zf = this.gb = !1;
            Promise.all([this.h.isTrustedViewer(), this.h.getViewerOrigin()]).then(function(c) {
                b.gb = c[0];
                c = c[1];
                "string" == typeof c && (c = S(c));
                c = Xa.localhostRegex.test(c.origin);
                b.zf = c
            });
            this.fd = null;
            this.Ee = new zh;
            this.If = new zh
        }
        g = Bh.prototype;
        g.cleanup = function() {
            this.yb && (this.ma.removeEventListener("click", this.yb), this.ma.removeEventListener("contextmenu", this.yb))
        };
        g.openWindow = function(a, b, c, d) {
            var e = "";
            !this.ta.isIos() && this.ta.isChrome() || d || (e += "noopener");
            var f = Tb(a, b, c, e);
            f && !d && (f.opener = null)
        };
        g.navigateTo = function(a, b, c, d) {
            var e = d = void 0 === d ? {} : d;
            d = void 0 === e.target ? "_top" : e.target;
            e = void 0 === e.opener ? !1 : e.opener;
            b = Ch(this, b);
            var f = Dc(this.Tf, "url");
            if (f.isProtocolValid(b)) {
                I(Ah.includes(d), "Target '" + d + "' not supported.");
                var h = f.getSourceUrl(a.location);
                b = f.resolveRelativeUrl(b, h);
                if ("_blank" == d) this.openWindow(a, b, d, e);
                else {
                    if (c && (this.fd || (this.fd = Dh(this)), this.fd.includes(c) && this.navigateToAmpUrl(b, c))) return;
                    a.top.location.href = b
                }
            } else D().error("navigation", "Cannot navigate to invalid protocol: " +
                b)
        };
        g.navigateToAmpUrl = function(a, b) {
            return this.h.hasCapability("a2a") ? (this.h.sendMessage("a2aNavigate", K({
                url: a,
                requestedBy: b
            })), !0) : !1
        };

        function Dh(a) {
            return (a = a.ma.querySelector('meta[name="amp-to-amp-navigation"]')) && a.hasAttribute("content") ? a.getAttribute("content").split(",").map(function(b) {
                return b.trim()
            }) : []
        }
        g.Jg = function(a) {
            if (!a.defaultPrevented) {
                var b = Kb(a.__AMP_CUSTOM_LINKER_TARGET__ || a.target, "A");
                if (b && b.href)
                    if ("click" == a.type) {
                        Eh(this, b);
                        var c = Fh(this, b.href),
                            d;
                        if (d = !Gh(this, a, b, c)) {
                            if (this.Lb) {
                                d = b.ownerDocument.defaultView;
                                var e = b.href,
                                    f = c.protocol;
                                "ftp:" == f ? (Tb(d, e, "_blank"), a.preventDefault(), d = !0) : (f = /^(https?|mailto):$/.test(f), this.Rg && !f ? (Tb(d, e, "_top"), a.preventDefault(), d = !0) : d = !1)
                            } else d = !1;
                            d = !d
                        }
                        if (d)
                            if (d = Fh(this, ""), Hh(c) != Hh(d) && (Ih(this, b, a), c = Fh(this, b.href)), e = c, c = Hh(e), f = Hh(d),
                                e.hash && c == f) Jh(this, a, e, d);
                            else {
                                e = (b.getAttribute("target") || "").toLowerCase();
                                (this.Sd || this.Qg) && "_top" != e && "_blank" != e && (e = "_blank", b.setAttribute("target", e));
                                f = this.ampdoc.win;
                                var h = Q(f);
                                b = R(b);
                                d.search && h.isSafari() && 13 <= h.getMajorVersion() && b.isProxyOrigin() && b.isEmbedded() && Kh(f, d, e);
                                this.viewerInterceptsNavigation(c, "intercept_click") && a.preventDefault()
                            }
                    } else "contextmenu" == a.type && (Eh(this, b), Ih(this, b, a))
            }
        };

        function Ih(a, b, c) {
            a.Ee.forEach(function(d) {
                d(b, c)
            })
        }

        function Ch(a, b) {
            a.If.forEach(function(c) {
                b = c(b)
            });
            return b
        }

        function Eh(a, b) {
            var c = null;
            if (a.Fe && !a.Sd) {
                a = S(a.ampdoc.win.location.href);
                var d = x(a.search);
                a = [];
                for (var e = 0; e < qh.length; e++) {
                    var f = qh[e];
                    "undefined" !== typeof d[f] && a.push(f)
                }
                d = b.getAttribute("data-amp-addparams");
                e = b.href;
                d && (e = he(e, x(d)));
                d = S(e);
                d = x(d.search);
                for (e = a.length - 1; 0 <= e; e--) "undefined" !== typeof d[a[e]] && a.splice(e, 1);
                d = "";
                for (e = 0; e < a.length; e++) f = a[e], d += 0 == e ? f + "=QUERY_PARAM(" + f + ")" : "&" + f + "=QUERY_PARAM(" + f + ")";
                c = d
            }
            Dc(b, "url-replace").maybeExpandLink(b, c)
        }

        function Gh(a, b, c, d) {
            return c.hasAttribute("rel") && c.getAttribute("rel").split(" ").map(function(e) {
                return e.trim()
            }).includes("amphtml") ? a.navigateToAmpUrl(d.href, "<a rel=amphtml>") ? (b.preventDefault(), !0) : !1 : !1
        }

        function Kh(a, b, c) {
            function d() {
                var h = a.location.href;
                h == f ? (G().info("navigation", "Restored iframe URL with query string:", e), a.history.replaceState(null, "", e)) : G().error("navigation", "Unexpected iframe URL change:", h, f)
            }
            G().info("navigation", "Removing iframe query string before navigation:", b.search);
            var e = b.href,
                f = "" + b.origin + b.pathname + b.hash;
            a.history.replaceState(null, "", f);
            "_blank" === c ? a.setTimeout(d, 0) : a.addEventListener("pageshow", function l(k) {
                k.persisted && (d(), a.removeEventListener("pageshow",
                    l))
            })
        }

        function Jh(a, b, c, d) {
            if (Q(a.ampdoc.win).isIe()) {
                var e = c.hash.substring(1),
                    f = a.ampdoc.getElementById(e);
                f && (/^(?:a|select|input|button|textarea)$/i.test(f.tagName) || (f.tabIndex = -1), Ub(f))
            }
            b.preventDefault();
            if (!a.Sd) {
                var h = c.hash.slice(1),
                    k = null;
                if (h) {
                    var l = String(h).replace(ub, vb);
                    k = a.ma.getElementById(h) || a.ma.querySelector('a[name="' + l + '"]')
                }
                c.hash != d.hash ? a.O.replaceStateForTarget(c.hash).then(function() {
                    Lh(a, k, h)
                }) : Lh(a, k, h)
            }
        }
        g.registerAnchorMutator = function(a, b) {
            this.Ee.enqueue(a, b)
        };
        g.registerNavigateToMutator = function(a, b) {
            this.If.enqueue(a, b)
        };

        function Lh(a, b, c) {
            b ? (a.J.scrollIntoView(b), P(a.ampdoc.win).delay(function() {
                return a.J.scrollIntoView(b)
            }, 1)) : G().warn("navigation", "failed to find element with id=" + c + " or a[name=" + c + "]")
        }

        function Fh(a, b) {
            return Dc(a.Tf, "url").parse(b)
        }
        g.viewerInterceptsNavigation = function(a, b) {
            var c = this.h.hasCapability("interceptNavigation"),
                d = this.ampdoc.isSingleDoc() && this.ampdoc.getRootNode().documentElement.hasAttribute("allow-navigation-interception");
            if (!c || !d || !this.gb && !this.zf) return !1;
            this.h.sendMessage("navigateTo", K({
                url: a,
                requestedBy: b
            }));
            return !0
        };

        function Hh(a) {
            return "" + a.origin + a.pathname + a.search
        };

        function Mh(a) {
            Rc(a).then(function(b) {
                b && a.getRootNode().addEventListener("submit", Nh, !0)
            })
        }

        function Nh(a) {
            if (!a.defaultPrevented) {
                var b = a.target;
                if (b && "FORM" == b.tagName) {
                    (b.classList.contains("i-amphtml-form") ? b.hasAttribute("amp-novalidate") : b.hasAttribute("novalidate")) || !b.checkValidity || b.checkValidity() || a.preventDefault();
                    for (var c = b.elements, d = 0; d < c.length; d++) I(!c[d].name || "__amp_source_origin" != c[d].name, "Illegal input name, %s found: %s", "__amp_source_origin", c[d]);
                    c = b.getAttribute("action");
                    var e = b.getAttribute("action-xhr");
                    d = (b.getAttribute("method") || "GET").toUpperCase();
                    e && (ke(e, b, "action-xhr"), I(!T(e), "form action-xhr should not be on AMP CDN: %s", b), te(e));
                    c && (ke(c, b, "action"), I(!T(c), "form action should not be on AMP CDN: %s", b), te(c));
                    "GET" == d ? I(e || c, "form action-xhr or action attribute is required for method=GET: %s", b) : "POST" == d && (c && D().error("form", "action attribute is invalid for method=POST: %s", b), e || (a.preventDefault(), I(!1, "Only XHR based (via action-xhr attribute) submissions are support for POST requests. %s", b)));
                    (c = b.getAttribute("target")) ? I("_blank" ==
                        c || "_top" == c, "form target=%s is invalid can only be _blank or _top: %s", c, b): b.setAttribute("target", "_top");
                    e && (a.preventDefault(), a.stopImmediatePropagation(), Dc(b, "action").execute(b, "submit", null, b, b, a, 3))
                }
            }
        };

        function Y() {
            this.$ = null
        }
        g = Y.prototype;
        g.add = function(a) {
            var b = this;
            this.$ || (this.$ = []);
            this.$.push(a);
            return function() {
                b.remove(a)
            }
        };
        g.remove = function(a) {
            this.$ && (a = this.$.indexOf(a), -1 < a && this.$.splice(a, 1))
        };
        g.removeAll = function() {
            this.$ && (this.$.length = 0)
        };
        g.fire = function(a) {
            if (this.$)
                for (var b = this.$, c = 0; c < b.length; c++)(0, b[c])(a)
        };
        g.getHandlerCount = function() {
            return this.$ ? this.$.length : 0
        };
        var Oh = {
            attributes: !0,
            attributeFilter: ["hidden"],
            subtree: !0
        };

        function Ph(a) {
            this.V = a.getRootNode();
            this.A = (this.V.ownerDocument || this.V).defaultView;
            this.nb = this.ka = null
        }
        Ph.prototype.add = function(a) {
            var b = this;
            Qh(this);
            var c = this.nb.add(a);
            return function() {
                c();
                0 === b.nb.getHandlerCount() && b.dispose()
            }
        };

        function Qh(a) {
            if (!a.ka) {
                a.nb = new Y;
                var b = new a.A.MutationObserver(function(c) {
                    c && a.nb.fire(c)
                });
                a.ka = b;
                b.observe(a.V, Oh)
            }
        }
        Ph.prototype.dispose = function() {
            this.ka && (this.ka.disconnect(), this.nb.removeAll(), this.nb = this.ka = null)
        };

        function Rh(a) {
            try {
                return a.state
            } catch (b) {
                return null
            }
        };

        function Sh(a, b) {
            this.B = a;
            this.P = P(a.win);
            this.o = b;
            this.C = 0;
            this.Va = [];
            this.F = [];
            this.o.setOnStateUpdated(this.ba.bind(this))
        }
        g = Sh.prototype;
        g.cleanup = function() {
            this.o.cleanup()
        };
        g.push = function(a, b) {
            var c = this;
            return Th(this, function() {
                return c.o.push(b).then(function(d) {
                    c.ba(d);
                    a && (c.Va[d.stackIndex] = a);
                    return d.stackIndex
                })
            }, "push")
        };
        g.pop = function(a) {
            var b = this;
            return Th(this, function() {
                return b.o.pop(a).then(function(c) {
                    b.ba(c)
                })
            }, "pop")
        };
        g.replace = function(a) {
            var b = this;
            return Th(this, function() {
                return b.o.replace(a)
            }, "replace")
        };
        g.get = function() {
            var a = this;
            return Th(this, function() {
                return a.o.get()
            }, "get")
        };
        g.goBack = function(a) {
            var b = this;
            return Th(this, function() {
                return 0 >= b.C && !a ? v() : b.o.pop(b.C).then(function(c) {
                    b.ba(c)
                })
            }, "goBack")
        };
        g.replaceStateForTarget = function(a) {
            var b = this,
                c = this.B.win.location.hash;
            return this.push(function() {
                b.B.win.location.replace(c || "#")
            }).then(function() {
                b.o.replaceStateForTarget(a)
            })
        };
        g.getFragment = function() {
            return this.o.getFragment()
        };
        g.updateFragment = function(a) {
            "#" == a[0] && (a = a.substr(1));
            return this.o.updateFragment(a)
        };
        g.ba = function(a) {
            this.C = a.stackIndex;
            Uh(this, a)
        };

        function Uh(a, b) {
            if (!(a.C >= a.Va.length - 1)) {
                for (var c = [], d = a.Va.length - 1; d > a.C; d--) a.Va[d] && (c.push(a.Va[d]), a.Va[d] = void 0);
                a.Va.splice(a.C + 1);
                if (0 < c.length)
                    for (d = {
                            vb: 0
                        }; d.vb < c.length; d = {
                            vb: d.vb
                        }, d.vb++) a.P.delay(function(e) {
                        return function() {
                            return c[e.vb](b)
                        }
                    }(d), 1)
            }
        }

        function Th(a, b, c) {
            var d = new L,
                e = d.promise;
            a.F.push({
                callback: b,
                resolve: d.resolve,
                reject: d.reject,
                trace: Error("history trace for " + c + ": ")
            });
            1 == a.F.length && Vh(a);
            return e
        }

        function Vh(a) {
            if (0 != a.F.length) {
                var b = a.F[0];
                try {
                    var c = b.callback()
                } catch (d) {
                    c = Promise.reject(d)
                }
                c.then(function(d) {
                    b.resolve(d)
                }, function(d) {
                    G().error("History", "failed to execute a task:", d);
                    b.trace && (b.trace.message += d, G().error("History", b.trace));
                    b.reject(d)
                }).then(function() {
                    a.F.splice(0, 1);
                    Vh(a)
                })
            }
        }

        function Wh(a) {
            var b = this;
            this.win = a;
            this.P = P(a);
            a = this.win.history;
            this.Wa = a.length - 1;
            var c = Rh(a);
            c && void 0 !== c["AMP.History"] && (this.Wa = Math.min(c["AMP.History"], this.Wa));
            this.C = this.Wa;
            this.ba = null;
            this.Gh = "state" in a;
            this.sb = Xh(this, this.C);
            if (a.pushState && a.replaceState) {
                this.Dc = a.originalPushState || a.pushState.bind(a);
                this.Rb = a.originalReplaceState || a.replaceState.bind(a);
                var d = function(f, h, k) {
                    b.sb = f;
                    b.Dc(f, h, k || null)
                };
                var e = function(f, h, k) {
                    b.sb = f;
                    void 0 !== k ? b.Rb(f, h, k) : b.Rb(f, h)
                };
                a.originalPushState ||
                    (a.originalPushState = this.Dc);
                a.originalReplaceState || (a.originalReplaceState = this.Rb)
            } else d = function(f) {
                b.sb = f
            }, e = function(f) {
                b.sb = f
            };
            this.ph = d;
            this.Nc = e;
            try {
                this.Nc(Xh(this, this.C, !0))
            } catch (f) {
                G().error("History", "Initial replaceState failed: " + f.message)
            }
            a.pushState = this.vf.bind(this);
            a.replaceState = this.Kd.bind(this);
            this.Jc = function(f) {
                f = f.state;
                G().fine("History", "popstate event: " + b.win.history.length + ", " + JSON.stringify(f));
                f = Yh(b);
                G().fine("History", "history event: " + b.win.history.length +
                    ", " + JSON.stringify(f));
                var h = f ? f["AMP.History"] : void 0,
                    k = b.C,
                    l = b.cd;
                b.cd = void 0;
                k > b.win.history.length - 2 && (k = b.win.history.length - 2, b.Aa(Zh(f, {
                    stackIndex: k
                })));
                k = void 0 == h ? k + 1 : h < b.win.history.length ? h : b.win.history.length - 1;
                f || (f = {});
                f["AMP.History"] = k;
                b.Nc(f, void 0, void 0);
                k != b.C && b.Aa(Zh(f, {
                    stackIndex: k
                }));
                k < b.Wa && (b.Wa = k);
                l && l.resolve()
            };
            this.win.addEventListener("popstate", this.Jc)
        }
        g = Wh.prototype;
        g.cleanup = function() {
            this.Dc && (this.win.history.pushState = this.Dc);
            this.Rb && (this.win.history.replaceState = this.Rb);
            this.win.removeEventListener("popstate", this.Jc)
        };

        function Xh(a, b, c) {
            a = J(c ? Yh(a) : void 0);
            a["AMP.History"] = b;
            return a
        }
        g.setOnStateUpdated = function(a) {
            this.ba = a
        };
        g.push = function(a) {
            var b = this;
            return $h(this, function() {
                var c = Zh(Yh(b), a || {});
                b.vf(c, void 0, c.fragment ? "#" + c.fragment : void 0);
                return tb(function() {
                    return Zh(c, {
                        stackIndex: b.C
                    })
                })
            })
        };
        g.pop = function(a) {
            var b = this;
            a = Math.max(a, this.Wa);
            return $h(this, function() {
                return ai(b, b.C - a + 1)
            }).then(function(c) {
                return Zh(Yh(b), {
                    stackIndex: c
                })
            })
        };
        g.replace = function(a) {
            var b = this,
                c = a = void 0 === a ? {} : a;
            return $h(this, function() {
                var d = Zh(Yh(b), c || {}),
                    e = (d.url || "").replace(/#.*/, ""),
                    f = d.fragment ? "#" + d.fragment : "";
                b.Kd(d, d.title, e || f ? e + f : void 0);
                return tb(function() {
                    return Zh(d, {
                        stackIndex: b.C
                    })
                })
            })
        };
        g.get = function() {
            var a = this;
            return tb(function() {
                return Zh(Yh(a), {
                    stackIndex: a.C
                })
            })
        };
        g.backTo = function(a) {
            var b = this;
            a = Math.max(a, this.Wa);
            return $h(this, function() {
                return ai(b, b.C - a)
            })
        };

        function Yh(a) {
            return a.Gh ? Rh(a.win.history) : a.sb
        }

        function $h(a, b) {
            return a.cd ? a.cd.promise.then(b, b) : b()
        }

        function bi(a) {
            var b = new L,
                c = b.resolve,
                d = b.reject;
            b = a.P.timeoutPromise(500, b.promise);
            a.cd = {
                promise: b,
                resolve: c,
                reject: d
            };
            return b
        }

        function ai(a, b) {
            if (0 >= b) return Promise.resolve(a.C);
            a.sb = Xh(a, a.C - b);
            var c = bi(a);
            a.win.history.go(-b);
            return c.then(function() {
                return Promise.resolve(a.C)
            })
        }
        g.vf = function(a, b, c) {
            a || (a = {});
            var d = this.C + 1;
            a["AMP.History"] = d;
            this.ph(a, b, c);
            d != this.win.history.length - 1 && (d = this.win.history.length - 1, a["AMP.History"] = d, this.Nc(a));
            a = Zh(a, {
                stackIndex: d
            });
            this.Aa(a)
        };
        g.replaceStateForTarget = function(a) {
            var b = this;
            $h(this, function() {
                b.win.removeEventListener("popstate", b.Jc);
                try {
                    b.win.location.replace(a)
                } finally {
                    b.win.addEventListener("popstate", b.Jc)
                }
                b.Kd();
                return v()
            })
        };
        g.Kd = function(a, b, c) {
            a || (a = {});
            var d = Math.min(this.C, this.win.history.length - 1);
            a["AMP.History"] = d;
            this.Nc(a, b, c);
            a = Zh(a, {
                stackIndex: d
            });
            this.Aa(a)
        };
        g.Aa = function(a) {
            a.stackIndex = Math.min(a.stackIndex, this.win.history.length - 1);
            this.C != a.stackIndex && (G().fine("History", "stack index changed: " + this.C + " -> " + a.stackIndex), this.C = a.stackIndex, this.ba && this.ba(a))
        };
        g.getFragment = function() {
            var a = this.win.location.hash;
            a = a.substr(1);
            return Promise.resolve(a)
        };
        g.updateFragment = function(a) {
            return this.replace({
                fragment: a
            })
        };

        function Zh(a, b) {
            var c = Object.assign({}, a && a.data || {}, b.data || {});
            return Object.assign({}, a || {}, b, {
                data: c
            })
        }

        function ci(a, b) {
            var c = this;
            this.win = a;
            this.h = b;
            this.C = 0;
            this.ba = null;
            this.Kh = this.h.onMessage("historyPopped", function(d) {
                void 0 !== d.newStackIndex && (d.stackIndex = d.newStackIndex);
                di(d) ? c.Aa(d) : G().warn("History", 'Ignored unexpected "historyPopped" data:', d)
            })
        }
        g = ci.prototype;
        g.replaceStateForTarget = function(a) {
            this.win.location.replace(a)
        };
        g.cleanup = function() {
            this.Kh()
        };
        g.setOnStateUpdated = function(a) {
            this.ba = a
        };

        function ei(a, b, c) {
            if (di(a)) return a;
            G().warn("History", 'Ignored unexpected "%s" data:', c, a);
            return b
        }

        function di(a) {
            return !!a && void 0 !== a.stackIndex
        }
        g.push = function(a) {
            var b = this,
                c = Object.assign({}, {
                    stackIndex: this.C + 1
                }, a || {});
            return this.h.sendMessageAwaitResponse("pushHistory", c).then(function(d) {
                d = ei(d, c, "pushHistory");
                b.Aa(d);
                return d
            })
        };
        g.pop = function(a) {
            var b = this;
            if (a > this.C) return this.get();
            a = K({
                stackIndex: this.C
            });
            return this.h.sendMessageAwaitResponse("popHistory", a).then(function(c) {
                var d = K({
                    stackIndex: b.C - 1
                });
                c = ei(c, d, "popHistory");
                b.Aa(c);
                return c
            })
        };
        g.replace = function(a) {
            var b = this;
            if (a && a.url) {
                if (!this.h.hasCapability("fullReplaceHistory")) {
                    var c = K({
                        stackIndex: this.C
                    });
                    return Promise.resolve(c)
                }
                var d = a.url.replace(/#.*/, "");
                a.url = d
            }
            var e = Object.assign({}, {
                stackIndex: this.C
            }, a || {});
            return this.h.sendMessageAwaitResponse("replaceHistory", e, !0).then(function(f) {
                f = ei(f, e, "replaceHistory");
                b.Aa(f);
                return f
            })
        };
        g.get = function() {
            return Promise.resolve({
                data: void 0,
                fragment: "",
                stackIndex: this.C,
                title: ""
            })
        };
        g.Aa = function(a) {
            var b = a.stackIndex;
            this.C != b && (G().fine("History", "stackIndex: " + this.C + " -> " + b), this.C = b, this.ba && this.ba(a))
        };
        g.getFragment = function() {
            return this.h.hasCapability("fragment") ? this.h.sendMessageAwaitResponse("getFragment", void 0, !0).then(function(a) {
                if (!a) return "";
                "#" == a[0] && (a = a.substr(1));
                return a
            }) : Promise.resolve("")
        };
        g.updateFragment = function(a) {
            return this.h.hasCapability("fragment") ? this.h.sendMessageAwaitResponse("replaceHistory", K({
                fragment: a
            }), !0) : v()
        };

        function fi(a) {
            var b = R(a);
            b.isOvertakeHistory() || a.win.__AMP_TEST_IFRAME ? b = new ci(a.win, b) : (M(a.win, "global-history-binding", Wh), b = O(a.win, "global-history-binding"));
            return new Sh(a, b)
        };

        function gi() {
            X.apply(this, arguments)
        }
        p(gi, X);
        gi.createLoaderLogoCallback = X.createLoaderLogoCallback;
        gi.prerenderAllowed = X.prerenderAllowed;

        function hi(a, b) {
            this.A = a;
            this.Oa = b;
            this.Fa = {};
            this.Vb = null
        }
        g = hi.prototype;
        g.start = function() {
            this.Vb = this.Fa;
            this.Fa = {}
        };
        g.resolveMatchQuery = function(a) {
            return "1" === this.Oc(a, ii, "1")
        };
        g.resolveListQuery = function(a) {
            return this.Oc(a, ji, "")
        };
        g.complete = function() {
            for (var a in this.Vb) a in this.Fa || ki(this.Vb[a], this.Oa, !1);
            this.Vb = null
        };
        g.dispose = function() {
            for (var a in this.Fa) ki(this.Fa[a], this.Oa, !1);
            this.Fa = {}
        };
        g.Oc = function(a, b, c) {
            if (!a || !a.trim()) return c;
            var d = this.Fa[a] || this.Vb[a];
            d || (d = b(this.A, a), ki(d, this.Oa, !0));
            this.Fa[a] = d;
            a: {
                for (a = 0; a < d.length; a++) {
                    var e = d[a],
                        f = e.query;
                    e = e.value;
                    if (!f || f.matches) {
                        d = e;
                        break a
                    }
                }
                d = ""
            }
            return d
        };

        function ii(a, b) {
            return [{
                query: a.matchMedia(b),
                value: "1"
            }, {
                query: null,
                value: ""
            }]
        }

        function ji(a, b) {
            return b.split(",").map(function(c) {
                c = c.replace(/\s+/g, " ").trim();
                if (0 != c.length) {
                    var d;
                    if (")" == c.charAt(c.length - 1)) {
                        var e = 1;
                        for (d = c.length - 2; 0 <= d; d--) {
                            var f = c.charAt(d);
                            "(" == f ? e-- : ")" == f && e++;
                            if (0 == e) break
                        }
                        var h = d - 1;
                        if (0 < d)
                            for (d--; 0 <= d && (f = c.charAt(d), "%" == f || "-" == f || "_" == f || "a" <= f && "z" >= f || "A" <= f && "Z" >= f || "0" <= f && "9" >= f); d--);
                        if (d >= h) return null
                    } else
                        for (d = c.length - 2; 0 <= d && (f = c.charAt(d), "%" == f || "." == f || "a" <= f && "z" >= f || "A" <= f && "Z" >= f || "0" <= f && "9" >= f); d--);
                    0 <= d ? (f = c.substring(0,
                        d + 1).trim(), c = c.substring(d + 1).trim()) : f = void 0;
                    return c ? {
                        query: f ? a.matchMedia(f) : null,
                        value: c
                    } : null
                }
            }).filter(function(c) {
                return c
            })
        }

        function ki(a, b, c) {
            for (var d = 0; d < a.length; d++) {
                var e = a[d].query;
                e && (void 0 !== e.onchange ? e.onchange = c ? b : null : c ? e.addListener(b) : e.removeListener(b))
            }
        };

        function li(a, b, c) {
            b.__AMP__RESOURCE = this;
            this.Lg = a;
            this.element = b;
            this.debugid = b.tagName.toLowerCase() + "#" + a;
            this.hostWin = b.ownerDocument.defaultView;
            this.j = c;
            this.Ug = b.hasAttribute("placeholder");
            this.Hb = !1;
            this.ob = void 0;
            this.D = b.isBuilt() ? 1 : 0;
            0 == this.D && b.isBuilding() && this.build();
            this.le = -1;
            this.ra = 0;
            this.Df = this.$a = null;
            this.Kb = !1;
            this.aa = lc(-1E4, -1E4, 0, 0);
            this.Nd = null;
            this.Wd = !1;
            this.Ob = this.na = null;
            this.ke = void 0;
            a = new L;
            this.Zg = a.promise;
            this.$d = a.resolve;
            this.Ha = c.isIntersectionExperimentOn();
            this.Ud = !1;
            this.pb = null
        }

        function Z(a) {
            return a.__AMP__RESOURCE
        }
        g = li.prototype;
        g.getId = function() {
            return this.Lg
        };
        g.updateOwner = function(a) {
            this.ob = a
        };
        g.getOwner = function() {
            if (void 0 === this.ob) {
                for (var a = this.element; a; a = a.parentElement)
                    if (a.__AMP__OWNER) {
                        this.ob = a.__AMP__OWNER;
                        break
                    } void 0 === this.ob && (this.ob = null)
            }
            return this.ob
        };
        g.hasOwner = function() {
            return !!this.getOwner()
        };
        g.getLayoutPriority = function() {
            return -1 != this.le ? this.le : this.element.getLayoutPriority()
        };
        g.updateLayoutPriority = function(a) {
            this.le = a
        };
        g.getState = function() {
            return this.D
        };
        g.isBuilt = function() {
            return this.element.isBuilt()
        };
        g.isBuilding = function() {
            return this.Hb
        };
        g.whenBuilt = function() {
            return this.element.signals().whenSignal("res-built")
        };
        g.build = function() {
            var a = this;
            if (this.Hb || !this.element.isUpgraded()) return null;
            this.Hb = !0;
            return this.element.buildInternal().then(function() {
                a.Hb = !1;
                a.Ha && a.hasBeenMeasured() ? (a.D = 2, a.element.isAlwaysFixed() && !a.Kb && a.requestMeasure(), a.element.onMeasure(!0)) : a.D = 1;
                a.element.signals().signal("res-built")
            }, function(b) {
                a.maybeReportErrorOnBuildFailure(b);
                a.Hb = !1;
                a.element.signals().rejectSignal("res-built", b);
                throw b;
            })
        };
        g.maybeReportErrorOnBuildFailure = function(a) {
            Ef(a) || G().error("Resource", "failed to build:", this.debugid, a)
        };
        g.changeSize = function(a, b, c) {
            this.element.applySize(a, b, c);
            this.requestMeasure()
        };
        g.overflowCallback = function(a, b, c, d) {
            a && (this.ke = {
                height: b,
                width: c,
                margins: d
            });
            this.element.overflowCallback(a, b, c, d)
        };
        g.resetPendingChangeSize = function() {
            this.ke = void 0
        };
        g.getPendingChangeSize = function() {
            return this.ke
        };
        g.getUpgradeDelayMs = function() {
            return this.element.getUpgradeDelayMs()
        };
        g.premeasure = function(a) {
            this.pb = a
        };
        g.invalidatePremeasurementAndRequestMeasure = function() {
            this.pb = null;
            this.requestMeasure()
        };
        g.measure = function(a) {
            var b = a = void 0 === a ? !1 : a;
            if (!(this.Ug && this.element.parentElement && this.element.parentElement.tagName.startsWith("AMP-")) || "__AMP__RESOURCE" in this.element.parentElement)
                if (this.element.ownerDocument && this.element.ownerDocument.defaultView) {
                    this.Wd = !1;
                    var c = this.aa;
                    b ? mi(this, this.pb) : mi(this);
                    this.pb = null;
                    var d = this.aa,
                        e = !(c.width == d.width && c.height === d.height);
                    (1 == this.D || c.top != d.top || e) && this.element.isUpgraded() && (1 == this.D ? this.D = 2 : 4 != this.D && 5 != this.D || !this.element.isRelayoutNeeded() ||
                        (this.D = 2));
                    this.hasBeenMeasured() || (this.Nd = d);
                    this.element.updateLayoutBox(d, e)
                } else this.D = 1
        };
        g.ensureMeasured = function() {
            var a = this;
            return this.hasBeenMeasured() ? v() : Xc(this.hostWin).measure(function() {
                return a.measure()
            })
        };

        function mi(a, b) {
            var c = Yc(a.element);
            a.aa = c.getLayoutRect(a.element, b);
            var d = !1;
            if (c.supportsPositionFixed() && a.isDisplayed())
                for (var e = a.j.getAmpdoc().win, f = e.document.body, h = a.element; h && h != f; h = h.offsetParent) {
                    if (h.isAlwaysFixed && h.isAlwaysFixed()) {
                        d = !0;
                        break
                    }
                    if (c.isDeclaredFixed(h) && "fixed" == (e.getComputedStyle(h) || J()).position) {
                        d = !0;
                        break
                    }
                }
            if (a.Kb = d) a.aa = oc(a.aa, -c.getScrollLeft(), -c.getScrollTop())
        }
        g.completeCollapse = function() {
            Ee(this.element, !1);
            this.aa = lc(this.aa.left, this.aa.top, 0, 0);
            this.Kb = !1;
            this.element.updateLayoutBox(this.getLayoutBox());
            var a = this.getOwner();
            a && a.collapsedCallback(this.element)
        };
        g.completeExpand = function() {
            Ee(this.element, !0);
            this.requestMeasure()
        };
        g.isMeasureRequested = function() {
            return this.Wd
        };
        g.hasBeenMeasured = function() {
            return !!this.Nd
        };
        g.hasBeenPremeasured = function() {
            return !!this.pb
        };
        g.requestMeasure = function() {
            this.Wd = !0
        };
        g.getLayoutSize = function() {
            var a = this.aa;
            return {
                width: a.width,
                height: a.height
            }
        };
        g.getLayoutBox = function() {
            if (!this.Kb) return this.aa;
            var a = Yc(this.element);
            return oc(this.aa, a.getScrollLeft(), a.getScrollTop())
        };
        g.getInitialLayoutBox = function() {
            return this.Nd || this.aa
        };
        g.isDisplayed = function(a) {
            var b = void 0 === a ? !1 : a;
            if (!this.element.ownerDocument || !this.element.ownerDocument.defaultView) return !1;
            var c = "fluid" == this.element.getLayout(),
                d = b ? this.pb : this.getLayoutBox(),
                e = 0 < d.height && 0 < d.width;
            return c || e
        };
        g.isFixed = function() {
            return this.Kb
        };
        g.overlaps = function(a) {
            var b = this.getLayoutBox();
            return b.top <= a.bottom && a.top <= b.bottom && b.left <= a.right && a.left <= b.right
        };
        g.prerenderAllowed = function() {
            return this.element.prerenderAllowed()
        };
        g.isBuildRenderBlocking = function() {
            return this.element.isBuildRenderBlocking()
        };
        g.whenWithinViewport = function(a) {
            if (!this.isLayoutPending() || !0 === a) return v();
            var b = String(a);
            if (this.na && this.na[b]) return this.na[b].promise;
            if (this.isWithinViewportRatio(a)) return v();
            this.na = this.na || {};
            this.na[b] = new L;
            return this.na[b].promise
        };

        function ni(a) {
            if (a.na) {
                var b = a.getDistanceViewportRatio(),
                    c;
                for (c in a.na) a.isWithinViewportRatio(parseFloat(c), b) && (a.na[c].resolve(), delete a.na[c])
            }
        }
        g.getDistanceViewportRatio = function() {
            var a = Yc(this.element).getRect(),
                b = this.getLayoutBox(),
                c = this.j.getScrollDirection(),
                d = 1,
                e = 0;
            if (a.right < b.left || a.left > b.right) return {
                distance: !1
            };
            if (a.bottom < b.top) e = b.top - a.bottom, -1 == c && (d = 2);
            else if (a.top > b.bottom) e = a.top - b.bottom, 1 == c && (d = 2);
            else return {
                distance: !0
            };
            return {
                distance: e,
                scrollPenalty: d,
                viewportHeight: a.height
            }
        };
        g.isWithinViewportRatio = function(a, b) {
            if ("boolean" === typeof a) return a;
            var c = b || this.getDistanceViewportRatio(),
                d = c.distance;
            return "boolean" == typeof d ? d : d < c.viewportHeight * a / c.scrollPenalty
        };
        g.renderOutsideViewport = function() {
            ni(this);
            return this.hasOwner() || this.isWithinViewportRatio(this.element.renderOutsideViewport())
        };
        g.idleRenderOutsideViewport = function() {
            return this.isWithinViewportRatio(this.element.idleRenderOutsideViewport())
        };
        g.layoutScheduled = function(a) {
            this.D = 3;
            this.element.layoutScheduleTime = a
        };
        g.layoutCanceled = function() {
            this.D = this.Ha ? 2 : this.hasBeenMeasured() ? 2 : 1
        };
        g.startLayout = function() {
            var a = this;
            if (this.Ob) return this.Ob;
            if (4 == this.D) return v();
            if (5 == this.D) return Promise.reject(this.Df);
            this.isDisplayed();
            if (3 != this.D) {
                var b = G().createError("startLayout called but not LAYOUT_SCHEDULED", "currently: ", this.D);
                b.associatedElement = this.element;
                Bf(b);
                return Promise.reject(b)
            }
            if (0 < this.ra && !this.element.isRelayoutNeeded()) return G().fine("Resource", "layout canceled since it wasn't requested:", this.debugid, this.D), this.D = 4, v();
            G().fine("Resource", "start layout:",
                this.debugid, "count:", this.ra);
            this.ra++;
            this.D = 3;
            this.$a = new AbortController;
            var c = this.$a.signal;
            return this.Ob = (new Promise(function(d, e) {
                Xc(a.hostWin).mutate(function() {
                    try {
                        var f = a.element.layoutCallback(c)
                    } catch (h) {
                        e(h)
                    }
                    Promise.resolve(f).then(d, e)
                });
                c.onabort = function() {
                    return e(Df())
                }
            })).then(function() {
                return oi(a, !0, c)
            }, function(d) {
                return oi(a, !1, c, d)
            })
        };

        function oi(a, b, c, d) {
            a.$a = null;
            if (c.aborted) throw c = G().createError("layoutComplete race"), c.associatedElement = a.element, G().expectedError("Resource", c), Df();
            a.$d && (a.$d(), a.$d = null);
            a.Ob = null;
            a.D = b ? 4 : 5;
            a.Df = d;
            if (b) G().fine("Resource", "layout complete:", a.debugid);
            else return G().fine("Resource", "loading failed:", a.debugid, d), Promise.reject(d)
        }
        g.isLayoutPending = function() {
            return 4 != this.D && 5 != this.D
        };
        g.loadedOnce = function() {
            return this.Zg
        };
        g.isInViewport = function() {
            this.Ud && ni(this);
            return this.Ud
        };
        g.setInViewport = function(a) {
            this.Ud = a
        };
        g.unlayout = function() {
            0 != this.D && 1 != this.D && 2 != this.D && (this.$a && (this.$a.abort(), this.$a = null), this.setInViewport(!1), this.element.unlayoutCallback() && (this.element.togglePlaceholder(!0), this.D = this.Ha ? 2 : 1, this.ra = 0, this.Ob = null))
        };
        g.getTaskId = function(a) {
            return this.debugid + "#" + a
        };
        g.pause = function() {
            this.element.pauseCallback();
            this.element.unlayoutOnPause() && this.unlayout()
        };
        g.pauseOnRemove = function() {
            this.element.pauseCallback()
        };
        g.resume = function() {
            this.element.resumeCallback()
        };
        g.unload = function() {
            this.pause();
            this.unlayout()
        };
        g.disconnect = function() {
            delete this.element.__AMP__RESOURCE;
            this.element.disconnect(!0)
        };

        function pi() {
            this.Ia = J();
            this.ea = null
        }
        g = pi.prototype;
        g.get = function(a) {
            a = this.Ia[a];
            return null == a ? null : a
        };
        g.whenSignal = function(a) {
            var b = this.ea && this.ea[a];
            if (!b) {
                var c = this.Ia[a];
                null != c ? b = {
                    promise: "number" == typeof c ? Promise.resolve(c) : Promise.reject(c)
                } : (c = new L, b = {
                    promise: c.promise,
                    resolve: c.resolve,
                    reject: c.reject
                });
                this.ea || (this.ea = J());
                this.ea[a] = b
            }
            return b.promise
        };
        g.signal = function(a, b) {
            if (null == this.Ia[a]) {
                var c = void 0 == b ? Date.now() : b;
                this.Ia[a] = c;
                (a = this.ea && this.ea[a]) && a.resolve && (a.resolve(c), a.resolve = void 0, a.reject = void 0)
            }
        };
        g.rejectSignal = function(a, b) {
            null == this.Ia[a] && (this.Ia[a] = b, (a = this.ea && this.ea[a]) && a.reject && (a.reject(b), a.promise.catch(function() {}), a.resolve = void 0, a.reject = void 0))
        };
        g.reset = function(a) {
            this.Ia[a] && delete this.Ia[a];
            var b = this.ea && this.ea[a];
            b && !b.resolve && delete this.ea[a]
        };
        var qi = Date.now();
        var ri = /nochunking=1/.test(self.location.hash),
            si = v();

        function ti(a) {
            N(a, "chunk", ui);
            return Cc(a, "chunk")
        }

        function vi(a, b, c) {
            if (ri) si.then(b);
            else {
                var d = ti(a.documentElement || a);
                d.runForStartup(b);
                c && d.runForStartup(function() {
                    d.Ke = !0
                })
            }
        }

        function wi(a, b) {
            ri ? si.then(b) : ti(a).run(b, 10)
        }

        function xi(a) {
            this.state = "not_run";
            this.Fd = a
        }

        function yi(a, b) {
            if ("run" != a.state) {
                a.state = "run";
                try {
                    a.Fd(b)
                } catch (c) {
                    throw a.Lf(), c;
                }
            }
        }
        xi.prototype.Lf = function() {};
        xi.prototype.wf = function() {
            return !1
        };
        xi.prototype.gg = function() {
            return !1
        };

        function zi(a, b, c) {
            xi.call(this, a);
            this.$e = c
        }
        p(zi, xi);
        zi.prototype.Lf = function() {
            of (self.document)
        };
        zi.prototype.wf = function() {
            return this.$e.ampdoc.isVisible()
        };
        zi.prototype.gg = function() {
            return this.$e.df
        };

        function ui(a) {
            var b = this;
            this.ampdoc = a;
            this.A = a.win;
            this.M = new zh;
            this.Me = this.kf.bind(this);
            this.eb = 0;
            this.Eh = !(!this.A.navigator.scheduling || !this.A.navigator.scheduling.isInputPending);
            this.Qc = !1;
            this.Ke = this.A.document.documentElement.hasAttribute("i-amphtml-no-boilerplate");
            this.A.addEventListener("message", function(c) {
                "amp-macro-task" == c.data && b.kf(null)
            });
            this.df = !1;
            Ec(a, "viewer").then(function() {
                b.df = !0
            });
            a.onVisibilityChanged(function() {
                a.isVisible() && b.ya()
            })
        }
        ui.prototype.run = function(a, b) {
            a = new xi(a);
            this.M.enqueue(a, b);
            this.ya()
        };
        ui.prototype.runForStartup = function(a) {
            a = new zi(a, this.A, this);
            this.M.enqueue(a, Number.POSITIVE_INFINITY);
            this.ya()
        };

        function Ai(a, b) {
            for (var c = a.M.peek(); c && "not_run" !== c.state;) a.M.dequeue(), c = a.M.peek();
            c && b && a.M.dequeue();
            return c
        }
        ui.prototype.kf = function(a) {
            var b = this,
                c = Ai(this, !0);
            if (!c) return this.Qc = !1, this.eb = 0, !1;
            try {
                var d = Date.now();
                yi(c, a)
            } finally {
                si.then().then().then().then().then().then().then().then().then(function() {
                    b.Qc = !1;
                    b.eb += Date.now() - d;
                    G().fine("CHUNK", c.Fd.displayName || c.Fd.name, "Chunk duration", Date.now() - d, b.eb);
                    b.ya()
                })
            }
            return !0
        };

        function Bi(a) {
            a.Ke && (a.Eh ? a.A.navigator.scheduling.isInputPending() : 5 < a.eb) ? (a.eb = 0, Ci(a)) : si.then(function() {
                a.Me(null)
            })
        }
        ui.prototype.ya = function() {
            if (!this.Qc) {
                var a = Ai(this);
                a && (a.wf() ? (this.Qc = !0, Bi(this)) : a.gg() && this.A.requestIdleCallback ? Di(this.A, this.Me) : Ci(this))
            }
        };

        function Ci(a) {
            a.A.postMessage("amp-macro-task", "*")
        }

        function Di(a, b) {
            function c(e) {
                if (15 > e.timeRemaining()) {
                    var f = 2E3 - (Date.now() - d);
                    0 >= f || e.didTimeout ? (G().fine("CHUNK", "Timed out", 2E3, e.didTimeout), b(e)) : (G().fine("CHUNK", "Rescheduling with", f, e.timeRemaining()), a.requestIdleCallback(c, {
                        timeout: f
                    }))
                } else G().fine("CHUNK", "Running idle callback with ", 15), b(e)
            }
            var d = Date.now();
            a.requestIdleCallback(c, {
                timeout: 2E3
            })
        };
        var Ei, Fi = [];

        function Gi(a) {
            function b() {
                return c.apply(this, arguments) || this
            }
            var c = Hi(a);
            p(b, c);
            return b
        }

        function Hi(a) {
            function b() {
                var d = c.call(this) || this;
                d.createdCallback();
                return d
            }
            if (a.__AMP_BASE_CE_CLASS) return a.__AMP_BASE_CE_CLASS;
            var c = a.HTMLElement;
            p(b, c);
            b.prototype.createdCallback = function() {
                this.Jb = this.ud = !1;
                this.nc = null;
                this.readyState = "loading";
                this.everAttached = !1;
                this.j = this.B = null;
                this.layout_ = "nodisplay";
                this.ra = 0;
                this.Tb = this.Td = !1;
                this.warnOnMissingOverflow = !0;
                this.layoutScheduleTime = this.la = this.sizerElement = void 0;
                var d = a.__AMP_EXTENDED_ELEMENTS && a.__AMP_EXTENDED_ELEMENTS[this.localName];
                (this.qa = d === gi ? null : d || null) || Fi.push(this);
                this.impl_ = null;
                this.tb = 1;
                this.eg = 0;
                this.fb = this.Na = void 0;
                this.I = new pi;
                this.qa && this.I.signal("ready-upgrade");
                var e = yc(a);
                this.Oh = e && e.isPerformanceTrackingOn();
                this.ib = null;
                this.__AMP_UPG_RES && (this.__AMP_UPG_RES(this), delete this.__AMP_UPG_RES, delete this.__AMP_UPG_PRM)
            };
            b.prototype.signals = function() {
                return this.I
            };
            b.prototype.getAmpDoc = function() {
                return this.B
            };
            b.prototype.getResources = function() {
                return this.j
            };
            b.prototype.isUpgraded = function() {
                return 2 ==
                    this.tb
            };
            b.prototype.whenUpgraded = function() {
                return this.I.whenSignal("upgraded")
            };
            b.prototype.upgrade = function(d) {
                this.fb || 1 != this.tb || (this.qa = d, this.I.signal("ready-upgrade"), this.everAttached && this.cg())
            };
            b.prototype.getUpgradeDelayMs = function() {
                return this.eg
            };
            b.prototype.yd = function(d, e) {
                this.impl_ = d;
                this.eg = a.Date.now() - e;
                this.tb = 2;
                this.classList.remove("amp-unresolved");
                this.classList.remove("i-amphtml-unresolved");
                this.mg();
                this.Da("amp:attached");
                this.getResources().upgraded(this);
                this.I.signal("upgraded")
            };
            b.prototype.mg = function() {
                "nodisplay" != this.layout_ && this.impl_ && !this.impl_.isLayoutSupported(this.layout_) && (I(this.getAttribute("layout"), "The element did not specify a layout attribute. Check https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/control_layout and the respective element documentation for details."), I(!1, "Layout not supported: " + this.layout_))
            };
            b.prototype.isBuilt = function() {
                return this.ud
            };
            b.prototype.whenBuilt = function() {
                return this.I.whenSignal("built")
            };
            b.prototype.getLayoutPriority = function() {
                return this.impl_ ? this.impl_.getLayoutPriority() : 3
            };
            b.prototype.getDefaultActionAlias = function() {
                this.isUpgraded();
                return this.impl_.getDefaultActionAlias()
            };
            b.prototype.isBuilding = function() {
                return !!this.nc
            };
            b.prototype.buildInternal = function() {
                var d = this;
                this.isUpgraded();
                return this.nc ? this.nc : this.nc = (new Promise(function(e, f) {
                    var h = d.impl_,
                        k = d.Dg();
                    k ? Oc(d, "consentPolicyManager", "amp-consent").then(function(l) {
                        return l ? l.whenPolicyUnblock(k) : !0
                    }).then(function(l) {
                        l ?
                            e(h.buildCallback()) : f(Error("BLOCK_BY_CONSENT"))
                    }) : e(h.buildCallback())
                })).then(function() {
                    d.preconnect(!1);
                    d.ud = !0;
                    d.classList.add("i-amphtml-built");
                    d.classList.remove("i-amphtml-notbuilt");
                    d.classList.remove("amp-notbuilt");
                    d.I.signal("built");
                    d.Jb && d.cf();
                    d.Na && P(d.ownerDocument.defaultView).delay(d.xg.bind(d), 1);
                    if (!d.getPlaceholder()) {
                        var e = d.createPlaceholder();
                        e && d.appendChild(e)
                    }
                }, function(e) {
                    d.I.rejectSignal("built", e);
                    Ef(e) || Bf(e, d);
                    throw e;
                })
            };
            b.prototype.whenLoaded = function() {
                return this.I.whenSignal("load-end")
            };
            b.prototype.ensureLoaded = function(d) {
                var e = this;
                return this.Ga().whenBuilt().then(function() {
                    var f = e.Ga();
                    if (4 != f.getState() && ((3 != f.getState() || f.isMeasureRequested()) && f.measure(), f.isDisplayed())) return e.getResources().scheduleLayoutOrPreload(f, !0, d, !0), e.whenLoaded()
                })
            };
            b.prototype.preconnect = function(d) {
                var e = this;
                this.isUpgraded();
                d ? this.impl_.preconnectCallback(d) : vi(this.getAmpDoc(), function() {
                    e.ownerDocument && e.ownerDocument.defaultView && e.impl_.preconnectCallback(d)
                })
            };
            b.prototype.isAlwaysFixed =
                function() {
                    return this.impl_ ? this.impl_.isAlwaysFixed() : !1
                };
            b.prototype.updateLayoutBox = function(d, e) {
                var f = e = void 0 === e ? !1 : e;
                if (this.isBuilt()) this.onMeasure(f)
            };
            b.prototype.onMeasure = function() {
                this.isBuilt();
                try {
                    this.impl_.onLayoutMeasure()
                } catch (d) {
                    Bf(d, this)
                }
            };
            b.prototype.pf = function() {
                void 0 !== this.sizerElement || "responsive" !== this.layout_ && "intrinsic" !== this.layout_ || (this.sizerElement = this.querySelector("i-amphtml-sizer"));
                return this.sizerElement || null
            };
            b.prototype.vh = function(d) {
                if ("responsive" ===
                    this.layout_) W(d, "paddingTop", "0");
                else if ("intrinsic" === this.layout_) {
                    var e = d.querySelector(".i-amphtml-intrinsic-sizer");
                    e && e.setAttribute("src", "")
                }
            };
            b.prototype.Mg = function() {
                var d = this,
                    e = this.hasAttribute("media") || this.hasAttribute("sizes") && !this.hasAttribute("disable-inline-width") || this.hasAttribute("heights"),
                    f = this.ownerDocument.defaultView;
                e != !!this.ib && f && (e ? (this.ib = new hi(f, function() {
                    return d.Ge()
                }), this.Ge()) : this.gf())
            };
            b.prototype.gf = function() {
                this.ib && (this.ib.dispose(), this.ib =
                    null)
            };
            b.prototype.Ge = function() {
                var d = this.ib;
                if (d) {
                    d.start();
                    var e = this.getAttribute("media") || null,
                        f = e ? d.resolveMatchQuery(e) : !0;
                    this.classList.toggle("i-amphtml-hidden-by-media-query", !f);
                    var h = this.hasAttribute("disable-inline-width") ? null : this.getAttribute("sizes");
                    h && W(this, "width", d.resolveListQuery(h));
                    if (h = "responsive" === this.layout_ ? this.getAttribute("heights") : null) {
                        var k = this.pf();
                        k && W(k, "paddingTop", d.resolveListQuery(h))
                    }
                    d.complete();
                    this.Ga().requestMeasure()
                }
            };
            b.prototype.applySize =
                function(d, e, f) {
                    var h = this.pf();
                    h && (this.sizerElement = null, this.vh(h), this.dh(function() {
                        h && Fb(h)
                    }));
                    void 0 !== d && W(this, "height", d, "px");
                    void 0 !== e && W(this, "width", e, "px");
                    f && (null != f.top && W(this, "marginTop", f.top, "px"), null != f.right && W(this, "marginRight", f.right, "px"), null != f.bottom && W(this, "marginBottom", f.bottom, "px"), null != f.left && W(this, "marginLeft", f.left, "px"));
                    this.Og() && this.Ch();
                    Wb(this, "amp:size-changed")
                };
            b.prototype.connectedCallback = function() {
                void 0 === Ei && (Ei = "content" in self.document.createElement("template"));
                Ei || void 0 !== this.fb || (this.fb = !!Kb(this, "template"));
                if (!this.fb && !this.Jb && Hb(this)) {
                    this.Jb = !0;
                    this.everAttached || (this.classList.add("i-amphtml-element"), this.classList.add("i-amphtml-notbuilt"), this.classList.add("amp-notbuilt"));
                    if (!this.B) {
                        var d = this.ownerDocument.defaultView,
                            e = Sc(d).getAmpDoc(this);
                        this.B = e;
                        var f = this.tagName.toLowerCase();
                        this.qa || e.declaresExtension(f) || Uc(d).installExtensionForDoc(e, f)
                    }
                    this.j || (this.j = Wc(this.B));
                    this.getResources().add(this);
                    if (this.everAttached) {
                        var h =
                            this.reconstructWhenReparented();
                        h && this.Qf();
                        this.isUpgraded() && (h && this.getResources().upgraded(this), this.cf(), this.Da("amp:attached"))
                    } else {
                        this.everAttached = !0;
                        try {
                            var k = Q(this.ownerDocument.defaultView).isIe();
                            d = void 0 === k ? !1 : k;
                            var l = this.getAttribute("i-amphtml-layout");
                            if (l) {
                                var m = Ne(l);
                                "responsive" != m && "intrinsic" != m || !this.firstElementChild ? "nodisplay" == m && (Ee(this, !1), this.style.display = "") : (this.sizerElement = this.querySelector("i-amphtml-sizer") || void 0) && this.sizerElement.setAttribute("slot",
                                    "i-amphtml-svc");
                                var n = m
                            } else {
                                var q = this.getAttribute("layout"),
                                    t = this.getAttribute("width"),
                                    w = this.getAttribute("height"),
                                    u = this.getAttribute("sizes"),
                                    r = this.getAttribute("heights"),
                                    y = q ? Ne(q) : null;
                                I(void 0 !== y, 'Invalid "layout" value: %s, %s', q, this);
                                var F = t && "auto" != t ? Pe(t) : t;
                                I(void 0 !== F, 'Invalid "width" value: %s, %s', t, this);
                                var sa = w && "fluid" != w ? Pe(w) : w;
                                I(void 0 !== sa, 'Invalid "height" value: %s, %s', w, this);
                                var jb;
                                if (!(jb = y && "fixed" != y && "fixed-height" != y || F && sa)) {
                                    var va = this.tagName;
                                    va = va.toUpperCase();
                                    jb = void 0 === Je[va]
                                }
                                if (jb) {
                                    var E = F;
                                    var C = sa
                                } else {
                                    var V = this.tagName.toUpperCase();
                                    if (!Je[V]) {
                                        var da = this.ownerDocument,
                                            ia = V.replace(/^AMP\-/, ""),
                                            ja = da.createElement(ia);
                                        ja.controls = !0;
                                        De(ja, {
                                            position: "absolute",
                                            visibility: "hidden"
                                        });
                                        da.body.appendChild(ja);
                                        Je[V] = {
                                            width: (ja.offsetWidth || 1) + "px",
                                            height: (ja.offsetHeight || 1) + "px"
                                        };
                                        da.body.removeChild(ja)
                                    }
                                    var kb = Je[V];
                                    E = F || "fixed-height" == y ? F : kb.width;
                                    C = sa || kb.height
                                }
                                var H = y ? y : E || C ? "fluid" == C ? "fluid" : !C || E && "auto" != E ? C && E && (u || r) ? "responsive" : "fixed" : "fixed-height" :
                                    "container";
                                "fixed" != H && "fixed-height" != H && "responsive" != H && "intrinsic" != H || I(C, 'The "height" attribute is missing: %s', this);
                                "fixed-height" == H && I(!E || "auto" == E, 'The "width" attribute must be missing or "auto": %s', this);
                                "fixed" != H && "responsive" != H && "intrinsic" != H || I(E && "auto" != E, 'The "width" attribute must be present and not "auto": %s', this);
                                "responsive" == H || "intrinsic" == H ? I(Qe(E) == Qe(C), 'Length units should be the same for "width" and "height": %s, %s, %s', t, w, this) : I(null === r, '"heights" attribute must be missing: %s',
                                    this);
                                this.classList.add("i-amphtml-layout-" + H);
                                Oe(H) && this.classList.add("i-amphtml-layout-size-defined");
                                if ("nodisplay" == H) Ee(this, !1), this.style.display = "";
                                else if ("fixed" == H) De(this, {
                                    width: E,
                                    height: C
                                });
                                else if ("fixed-height" == H) W(this, "height", C);
                                else if ("responsive" == H) {
                                    var zc = this.ownerDocument.defaultView;
                                    null == Me && (Me = U(zc, "layout-aspect-ratio-css") && zc.CSS && zc.CSS.supports && zc.CSS.supports("aspect-ratio: 1/1") || !1);
                                    if (Me) W(this, "aspect-ratio", Re(E) + "/" + Re(C));
                                    else {
                                        var Ac = this.ownerDocument.createElement("i-amphtml-sizer");
                                        Ac.setAttribute("slot", "i-amphtml-svc");
                                        De(Ac, {
                                            paddingTop: Re(C) / Re(E) * 100 + "%"
                                        });
                                        this.insertBefore(Ac, this.firstChild);
                                        this.sizerElement = Ac
                                    }
                                } else if ("intrinsic" == H) {
                                    var Yd = Td(this)(He);
                                    Yd.firstElementChild.setAttribute("src", d && this.ownerDocument ? Ge(this.ownerDocument, Re(E), Re(C)) : 'data:image/svg+xml;charset=utf-8,<svg height="' + C + '" width="' + E + '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>');
                                    this.insertBefore(Yd, this.firstChild);
                                    this.sizerElement = Yd
                                } else "fill" != H && "container" != H && ("flex-item" ==
                                    H ? (E && W(this, "width", E), C && W(this, "height", C)) : "fluid" == H && (this.classList.add("i-amphtml-layout-awaiting-size"), E && W(this, "width", E), W(this, "height", 0)));
                                this.setAttribute("i-amphtml-layout", H);
                                n = H
                            }
                            this.layout_ = n;
                            this.Mg()
                        } catch (tl) {
                            Bf(tl, this)
                        }
                        this.qa && this.cg();
                        this.isUpgraded() || (this.classList.add("amp-unresolved"), this.classList.add("i-amphtml-unresolved"), this.Da("amp:stubbed"))
                    }
                    this.toggleLoading(!0)
                }
            };
            b.prototype.Og = function() {
                return this.classList.contains("i-amphtml-layout-awaiting-size")
            };
            b.prototype.Ch = function() {
                this.classList.remove("i-amphtml-layout-awaiting-size")
            };
            b.prototype.cg = function() {
                var d = this;
                if (!this.fb && 1 == this.tb) {
                    var e = new this.qa(this);
                    this.tb = 4;
                    var f = a.Date.now(),
                        h = e.upgradeCallback();
                    h ? "function" == typeof h.then ? h.then(function(k) {
                        d.yd(k || e, f)
                    }).catch(function(k) {
                        d.tb = 3;
                        ob(k)
                    }) : this.yd(h, f) : this.yd(e, f)
                }
            };
            b.prototype.disconnectedCallback = function() {
                this.disconnect(!1)
            };
            b.prototype.cf = function() {
                this.ud && this.impl_.attachedCallback()
            };
            b.prototype.disconnect = function(d) {
                this.fb ||
                    !this.Jb || !d && Hb(this) || (d && this.classList.remove("i-amphtml-element"), this.Jb = !1, this.getResources().remove(this), this.impl_ && this.impl_.detachedCallback(), this.toggleLoading(!1), this.gf())
            };
            b.prototype.Da = function() {};
            b.prototype.prerenderAllowed = function() {
                return this.hasAttribute("noprerender") ? !1 : this.qa ? this.qa.prerenderAllowed(this) : !1
            };
            b.prototype.isBuildRenderBlocking = function() {
                return this.impl_ ? this.impl_.isBuildRenderBlocking() : !1
            };
            b.prototype.createPlaceholder = function() {
                return this.impl_ ?
                    this.impl_.createPlaceholderCallback() : null
            };
            b.prototype.createLoaderLogo = function() {
                return this.qa ? this.qa.createLoaderLogoCallback(this) : {}
            };
            b.prototype.renderOutsideViewport = function() {
                return this.impl_ ? this.impl_.renderOutsideViewport() : !1
            };
            b.prototype.idleRenderOutsideViewport = function() {
                return this.impl_ ? this.impl_.idleRenderOutsideViewport() : !1
            };
            b.prototype.getLayoutBox = function() {
                return this.Ga().getLayoutBox()
            };
            b.prototype.getLayoutSize = function() {
                return this.Ga().getLayoutSize()
            };
            b.prototype.getOwner =
                function() {
                    return this.Ga().getOwner()
                };
            b.prototype.getIntersectionChangeEntry = function() {
                var d = this.impl_ ? this.impl_.getIntersectionElementLayoutBox() : this.getLayoutBox(),
                    e = this.getOwner(),
                    f = Yc(this.getAmpDoc()).getRect(),
                    h = e && e.getLayoutBox(),
                    k = mc(d, h, f) || lc(0, 0, 0, 0);
                e = k.width * k.height;
                var l = d.width * d.height;
                e = 0 === l ? 0 : e / l;
                if (l = f) k = oc(k, -f.left, -f.top), d = oc(d, -f.left, -f.top), l = oc(l, -f.left, -f.top);
                return {
                    time: "undefined" !== typeof performance && performance.now ? performance.now() : Date.now() - qi,
                    rootBounds: l,
                    boundingClientRect: d,
                    intersectionRect: k,
                    intersectionRatio: e
                }
            };
            b.prototype.Ga = function() {
                return this.getResources().getResourceForElement(this)
            };
            b.prototype.getResourceId = function() {
                return this.Ga().getId()
            };
            b.prototype.isRelayoutNeeded = function() {
                return this.impl_ ? this.impl_.isRelayoutNeeded() : !1
            };
            b.prototype.getImpl = function(d) {
                var e = this;
                d = void 0 === d ? !0 : d;
                return (d ? this.whenBuilt() : this.whenUpgraded()).then(function() {
                    return e.impl_
                })
            };
            b.prototype.getApi = function() {
                return this.getImpl().then(function(d) {
                    return d.getApi()
                })
            };
            b.prototype.getLayout = function() {
                return this.layout_
            };
            b.prototype.layoutCallback = function(d) {
                var e = this;
                this.isBuilt();
                if (d.aborted) return Promise.reject(Df());
                this.Da("amp:load-start");
                var f = 0 == this.ra;
                this.I.reset("unload");
                f && this.I.signal("load-start");
                this.toggleLoading(!0);
                var h = tb(function() {
                    return e.impl_.layoutCallback()
                });
                this.preconnect(!0);
                this.classList.add("i-amphtml-layout");
                return h.then(function() {
                    if (d.aborted) throw Df();
                    f && e.I.signal("load-end");
                    e.readyState = "complete";
                    e.ra++;
                    e.toggleLoading(!1);
                    e.Td || (e.impl_.firstLayoutCompleted(), e.Td = !0, e.Da("amp:load-end"))
                }, function(k) {
                    if (d.aborted) throw Df();
                    f && e.I.rejectSignal("load-end", k);
                    e.ra++;
                    e.toggleLoading(!1);
                    throw k;
                })
            };
            b.prototype.isPaused = function() {
                return this.Tb
            };
            b.prototype.pauseCallback = function() {
                this.Tb || (this.Tb = !0, this.isBuilt() && this.impl_.pauseCallback())
            };
            b.prototype.resumeCallback = function() {
                this.Tb && (this.Tb = !1, this.isBuilt() && this.impl_.resumeCallback())
            };
            b.prototype.unlayoutCallback = function() {
                if (!this.isBuilt()) return !1;
                this.I.signal("unload");
                var d = this.impl_.unlayoutCallback();
                d && this.Qf();
                this.Da("amp:unload");
                return d
            };
            b.prototype.Qf = function() {
                this.ra = 0;
                this.Td = !1;
                this.I.reset("render-start");
                this.I.reset("load-start");
                this.I.reset("load-end");
                this.I.reset("ini-load")
            };
            b.prototype.unlayoutOnPause = function() {
                return this.impl_ ? this.impl_.unlayoutOnPause() : !1
            };
            b.prototype.reconstructWhenReparented = function() {
                return this.impl_ ? this.impl_.reconstructWhenReparented() : !1
            };
            b.prototype.collapse = function() {
                this.impl_ &&
                    this.impl_.collapse()
            };
            b.prototype.collapsedCallback = function(d) {
                this.impl_ && this.impl_.collapsedCallback(d)
            };
            b.prototype.expand = function() {
                this.impl_ && this.impl_.expand()
            };
            b.prototype.mutatedAttributesCallback = function(d) {
                this.impl_ && this.impl_.mutatedAttributesCallback(d)
            };
            b.prototype.enqueAction = function(d) {
                this.isBuilt() ? this.lf(d, !1) : (void 0 === this.Na && (this.Na = []), this.Na.push(d))
            };
            b.prototype.xg = function() {
                var d = this;
                if (this.Na) {
                    var e = this.Na;
                    this.Na = null;
                    e.forEach(function(f) {
                        d.lf(f, !0)
                    })
                }
            };
            b.prototype.lf = function(d, e) {
                try {
                    this.impl_.executeAction(d, e)
                } catch (f) {
                    ob("Action execution failed:", f, d.node.tagName, d.method)
                }
            };
            b.prototype.Dg = function() {
                var d = this.getAttribute("data-block-on-consent");
                if (null === d)
                    if ((d = this.getAmpDoc().getMetaByName("amp-consent-blocking")) ? (d = d.toUpperCase().replace(/\s+/g, ""), d = d.split(",").includes(this.tagName)) : d = !1, d) d = "default", this.setAttribute("data-block-on-consent", d);
                    else return null;
                return "" != d && "default" != d || !this.impl_ ? d : this.impl_.getConsentPolicy()
            };
            b.prototype.getRealChildNodes = function() {
                return Ob(this, function(d) {
                    return !Ii(d)
                })
            };
            b.prototype.getRealChildren = function() {
                return Mb(this, function(d) {
                    return !Ii(d)
                })
            };
            b.prototype.getPlaceholder = function() {
                return Nb(this, function(d) {
                    return d.hasAttribute("placeholder") && !("placeholder" in d)
                })
            };
            b.prototype.togglePlaceholder = function(d) {
                if (d) {
                    var e = this.getPlaceholder();
                    e && e.classList.remove("amp-hidden")
                } else {
                    /^[\w-]+$/.test("placeholder");
                    e = (void 0 !== wb ? wb : wb = xb(this)) ? this.querySelectorAll("> [placeholder]".replace(/^|,/g,
                        "$&:scope ")) : Rb(this, "> [placeholder]");
                    for (var f = 0; f < e.length; f++) "placeholder" in e[f] || e[f].classList.add("amp-hidden")
                }
            };
            b.prototype.getFallback = function() {
                return Pb(this, "fallback")
            };
            b.prototype.toggleFallback = function(d) {
                var e = this.Ga().getState();
                if (!d || 0 != e && 1 != e && 2 != e)
                    if (this.classList.toggle("amp-notsupported", d), 1 == d) {
                        var f = this.getFallback();
                        f && Cc(this.getAmpDoc(), "owners").scheduleLayout(this, f)
                    }
            };
            b.prototype.renderStarted = function() {
                this.I.signal("render-start");
                this.togglePlaceholder(!1);
                this.toggleLoading(!1)
            };
            b.prototype.Tg = function(d) {
                var e = 0 < this.ra || this.I.get("render-start");
                (d = "nodisplay" == this.layout_ || this.hasAttribute("noloading") || e && !d) || (d = this.tagName.toUpperCase(), d = !(Ke[d] || ("AMP-VIDEO" == d ? 0 : Le.test(d))));
                return d || Ii(this) ? !1 : !0
            };
            b.prototype.toggleLoading = function(d, e) {
                e = void 0 === e ? !1 : e;
                if (this.ownerDocument && this.ownerDocument.defaultView) {
                    var f = Dc(this.getAmpDoc(), "loadingIndicator");
                    f && ((d = d && this.Tg(e)) ? f.track(this) : f.untrack(this))
                }
            };
            b.prototype.getOverflowElement =
                function() {
                    void 0 === this.la && (this.la = Pb(this, "overflow")) && (this.la.hasAttribute("tabindex") || this.la.setAttribute("tabindex", "0"), this.la.hasAttribute("role") || this.la.setAttribute("role", "button"));
                    return this.la
                };
            b.prototype.overflowCallback = function(d, e, f) {
                var h = this;
                this.getOverflowElement();
                this.la ? (this.la.classList.toggle("amp-visible", d), this.la.onclick = d ? function() {
                        var k = Vc(h.getAmpDoc());
                        k.forceChangeSize(h, e, f);
                        k.mutateElement(h, function() {
                            h.overflowCallback(!1, e, f)
                        })
                    } : null) : d && this.warnOnMissingOverflow &&
                    D().warn("CustomElement", "Cannot resize element and overflow is not available", this)
            };
            b.prototype.dh = function(d) {
                var e = void 0 === e ? !1 : e;
                this.B ? Vc(this.getAmpDoc()).mutateElement(this, d, e) : d()
            };
            a.__AMP_BASE_CE_CLASS = b;
            return a.__AMP_BASE_CE_CLASS
        }

        function Ii(a) {
            var b = "string" == typeof a ? a : a.tagName;
            return b && b.toLowerCase().startsWith("i-") || a.tagName && (a.hasAttribute("placeholder") || a.hasAttribute("fallback") || a.hasAttribute("overflow")) ? !0 : !1
        };

        function Ji(a) {
            a.__AMP_EXTENDED_ELEMENTS || (a.__AMP_EXTENDED_ELEMENTS = {});
            return a.__AMP_EXTENDED_ELEMENTS
        }

        function Ki(a) {
            Pc(a.getHeadNode()).forEach(function(b) {
                a.declareExtension(b);
                Li(a.win, b)
            })
        }

        function Li(a, b) {
            Ji(a)[b] || Mi(a, b, gi)
        }

        function Mi(a, b, c) {
            Ji(a)[b] = c;
            var d = Gi(a);
            a.customElements.define(b, d)
        };
        var Ni = "alt aria-describedby aria-label aria-labelledby crossorigin referrerpolicy title sizes srcset src".split(" ");

        function Oi(a) {
            X.call(this, a);
            this.kc = !0;
            this.Zc = this.$c = this.K = null;
            this.Xf = 0
        }
        p(Oi, X);
        Oi.createLoaderLogoCallback = X.createLoaderLogoCallback;
        Oi.prerenderAllowed = function() {
            return !0
        };
        g = Oi.prototype;
        g.mutatedAttributesCallback = function(a) {
            if (this.K) {
                var b = Ni.filter(function(c) {
                    return void 0 !== a[c]
                });
                a.src && !a.srcset && this.element.hasAttribute("srcset") && (this.element.removeAttribute("srcset"), b.push("srcset"), this.user().warn("amp-img", "Removed [srcset] since [src] was mutated. Recommend adding a [srcset] binding to support responsive images.", this.element));
                this.propagateAttributes(b, this.K, !0);
                this.propagateDataset(this.K);
                Fe(this.K)
            }
        };
        g.preconnectCallback = function(a) {
            var b = this.element.getAttribute("src");
            b ? O(this.win, "preconnect").url(this.getAmpDoc(), b, a) : (b = this.element.getAttribute("srcset")) && (b = /\S+/.exec(b)) && O(this.win, "preconnect").url(this.getAmpDoc(), b[0], a)
        };
        g.isLayoutSupported = function(a) {
            return Oe(a)
        };
        g.rc = function() {
            if (!this.K) {
                this.kc = !this.element.hasAttribute("fallback");
                this.element.hasAttribute("i-amphtml-ssr") && (this.K = Qb(this.element, "> img:not([placeholder])"));
                this.K = this.K || new Image;
                this.K.setAttribute("decoding", "async");
                this.element.id && this.K.setAttribute("amp-img-id", this.element.id);
                "img" == this.element.getAttribute("role") && (this.element.removeAttribute("role"), this.user().error("amp-img", "Setting role=img on amp-img elements breaks screen readers please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element."));
                if (this.K && !this.element.getAttribute("sizes")) {
                    var a = this.element.getAttribute("srcset");
                    if (a && !/[0-9]+x(?:,|$)/.test(a) && (a = this.element.getLayoutSize().width, this.K.hasAttribute("sizes") ? a > this.Xf : 1)) {
                        var b = this.getViewport().getWidth(),
                            c = "(max-width: " + b + "px) " + a + "px, ",
                            d = a + "px";
                        "fixed" !== this.getLayout() && (d = Math.max(Math.round(100 * a / b), 100) + "vw");
                        this.K.setAttribute("sizes", c + d);
                        this.Xf = a
                    }
                }
                this.propagateAttributes(Ni, this.K);
                this.propagateDataset(this.K);
                Fe(this.K);
                this.applyFillContent(this.K,
                    !0);
                a = this.element;
                b = this.K;
                a.hasAttribute("object-fit") && W(b, "object-fit", a.getAttribute("object-fit"));
                a.hasAttribute("object-position") && W(b, "object-position", a.getAttribute("object-position"));
                this.element.appendChild(this.K)
            }
        };
        g.reconstructWhenReparented = function() {
            return !1
        };
        g.layoutCallback = function() {
            var a = this;
            this.rc();
            var b = this.K;
            this.$c = Ve(b, "load", function() {
                return Pi(a)
            });
            this.Zc = Ve(b, "error", function() {
                return Qi(a)
            });
            return 0 >= this.element.getLayoutSize().width ? v() : this.loadPromise(b)
        };
        g.unlayoutCallback = function() {
            this.Zc && (this.Zc(), this.Zc = null);
            this.$c && (this.$c(), this.$c = null);
            var a = this.K;
            a && !a.complete && (a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=", Fb(a), this.K = null);
            return !0
        };
        g.firstLayoutCompleted = function() {
            var a = this.getPlaceholder();
            a && a.classList.contains("i-amphtml-blurry-placeholder") ? Ce(a, {
                opacity: 0
            }) : this.togglePlaceholder(!1)
        };

        function Pi(a) {
            !a.kc && a.K.classList.contains("i-amphtml-ghost") && a.getVsync().mutate(function() {
                a.K.classList.remove("i-amphtml-ghost");
                a.toggleFallback(!1)
            })
        }

        function Qi(a) {
            a.kc && (a.getVsync().mutate(function() {
                a.K.classList.add("i-amphtml-ghost");
                a.toggleFallback(!0);
                a.togglePlaceholder(!1)
            }), a.kc = !1)
        }
        g.propagateDataset = function(a) {
            for (var b in a.dataset) b in this.element.dataset || delete a.dataset[b];
            for (var c in this.element.dataset) c.startsWith("ampBind") && "ampBind" !== c || a.dataset[c] !== this.element.dataset[c] && (a.dataset[c] = this.element.dataset[c])
        };

        function Ri(a, b, c) {
            var d = this;
            this.P = P(a);
            this.Kg = b;
            this.wg = c || 0;
            this.va = -1;
            this.fe = 0;
            this.Ta = !1;
            this.pg = function() {
                d.Ic()
            }
        }
        Ri.prototype.isPending = function() {
            return -1 != this.va
        };
        Ri.prototype.schedule = function(a) {
            var b = a || this.wg;
            this.Ta && 10 > b && (b = 10);
            var c = Date.now() + b;
            return !this.isPending() || -10 > c - this.fe ? (this.cancel(), this.fe = c, this.va = this.P.delay(this.pg, b), !0) : !1
        };
        Ri.prototype.Ic = function() {
            this.va = -1;
            this.fe = 0;
            this.Ta = !0;
            this.Kg();
            this.Ta = !1
        };
        Ri.prototype.cancel = function() {
            this.isPending() && (this.P.cancel(this.va), this.va = -1)
        };

        function Si(a) {
            this.win = a;
            this.ng = this.eh.bind(this);
            this.og = this.fh.bind(this);
            this.nd = this.Ne = this.od = null;
            this.qc = "ontouchstart" in a || void 0 !== a.navigator.maxTouchPoints && 0 < a.navigator.maxTouchPoints || void 0 !== a.DocumentTouch;
            G().fine("Input", "touch detected:", this.qc);
            this.Nb = !1;
            this.win.document.addEventListener("keydown", this.ng);
            this.win.document.addEventListener("mousedown", this.og);
            this.Id = !0;
            this.Gf = 0;
            this.Ih = new Y;
            this.Hf = new Y;
            this.Yd = new Y;
            this.qc && (this.Id = !this.qc, this.od = this.gh.bind(this),
                We(a.document, "mousemove", this.od))
        }
        g = Si.prototype;
        g.setupInputModeClasses = function(a) {
            var b = this;
            this.onTouchDetected(function(c) {
                Ti(b, a, "amp-mode-touch", c)
            }, !0);
            this.onMouseDetected(function(c) {
                Ti(b, a, "amp-mode-mouse", c)
            }, !0);
            this.onKeyboardStateChanged(function(c) {
                Ti(b, a, "amp-mode-keyboard-active", c)
            }, !0)
        };
        g.isTouchDetected = function() {
            return this.qc
        };
        g.onTouchDetected = function(a, b) {
            b && a(this.isTouchDetected());
            return this.Ih.add(a)
        };
        g.isMouseDetected = function() {
            return this.Id
        };
        g.onMouseDetected = function(a, b) {
            b && a(this.isMouseDetected());
            return this.Hf.add(a)
        };
        g.isKeyboardActive = function() {
            return this.Nb
        };
        g.onKeyboardStateChanged = function(a, b) {
            b && a(this.isKeyboardActive());
            return this.Yd.add(a)
        };

        function Ti(a, b, c, d) {
            b.waitForBodyOpen().then(function(e) {
                Xc(a.win).mutate(function() {
                    e.classList.toggle(c, d)
                })
            })
        }
        g.eh = function(a) {
            this.Nb || a.defaultPrevented || (a = a.target, a && ("INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "OPTION" == a.tagName || a.hasAttribute("contenteditable"))) || (this.Nb = !0, this.Yd.fire(!0), G().fine("Input", "keyboard activated"))
        };
        g.fh = function() {
            this.Nb && (this.Nb = !1, this.Yd.fire(!1), G().fine("Input", "keyboard deactivated"))
        };
        g.gh = function(a) {
            var b = this;
            if (a.sourceCapabilities && a.sourceCapabilities.firesTouchEvents) this.Ff();
            else {
                this.nd || (this.nd = this.bh.bind(this), this.Ne = this.Ff.bind(this));
                var c, d = Xe(this.win.document, function(e) {
                    c = e
                });
                return P(this.win).timeoutPromise(300, d).then(this.Ne, function() {
                    c && c();
                    b.nd()
                })
            }
        };
        g.bh = function() {
            this.Id = !0;
            this.Hf.fire(!0);
            G().fine("Input", "mouse detected")
        };
        g.Ff = function() {
            this.Gf++;
            3 >= this.Gf ? We(this.win.document, "mousemove", this.od) : G().fine("Input", "mouse detection failed")
        };

        function Ui() {
            X.apply(this, arguments)
        }
        p(Ui, X);
        Ui.createLoaderLogoCallback = X.createLoaderLogoCallback;
        Ui.prerenderAllowed = function() {
            return !0
        };
        Ui.prototype.isLayoutSupported = function(a) {
            return "container" == a || Oe(a)
        };
        Ui.prototype.buildCallback = function() {
            if ("container" != this.getLayout()) {
                var a = this.win.document.createElement("div");
                this.applyFillContent(a);
                this.getRealChildNodes().forEach(function(b) {
                    a.appendChild(b)
                });
                this.element.appendChild(a)
            }
        };

        function Vi(a, b) {
            return Uc(a.win).installExtensionForDoc(a, "amp-loader").then(function() {
                return Nc(b, "loader", "amp-loader")
            })
        }

        function Wi(a, b, c, d, e) {
            var f = e = void 0 === e ? a.win.Date.now() : e,
                h = b.ownerDocument.createElement("div");
            Vi(a, b).then(function(k) {
                var l = a.win.Date.now() - f;
                k.initializeLoader(b, h, l, c, d)
            });
            return h
        };

        function Xi(a, b) {
            var c = void 0 === c ? {} : c;
            var d = c.needsRootBounds;
            return new b.IntersectionObserver(a, {
                threshold: c.threshold,
                root: Vb(b) && d ? b.document : void 0
            })
        }
        new WeakMap;
        new WeakMap;
        var Yi = ['<div slot=i-amphtml-svc class="i-amphtml-svc i-amphtml-loading-container i-amphtml-fill-content amp-hidden"></div>'];

        function Zi(a) {
            this.B = a;
            a = a.win;
            var b = this.inViewport_.bind(this);
            this.Pd = Xi(function(c) {
                return c.forEach(b)
            }, a);
            this.Ma = new WeakMap
        }
        g = Zi.prototype;
        g.dispose = function() {
            this.Pd.disconnect()
        };
        g.track = function(a) {
            this.Pd.observe(a)
        };
        g.untrack = function(a) {
            this.Pd.unobserve(a);
            this.af(a)
        };
        g.inViewport_ = function(a) {
            var b = a.boundingClientRect,
                c = b.width,
                d = b.height;
            b = a.target;
            a = a.isIntersecting && 20 < c && 20 < d;
            var e = this.Ma.get(b);
            a !== (e && e.shown || !1) && (a && !e && (e = Date.now(), c = Wi(this.B, b, c, d, e), d = Td(this.B.win.document)(Yi), d.appendChild(c), b.appendChild(d), e = {
                shown: !1,
                loader: c,
                container: d
            }, this.Ma.set(b, e)), e && (e.shown = a, e.container.classList.toggle("amp-hidden", !a), e.loader.classList.toggle("amp-active", a)))
        };
        g.af = function(a) {
            var b = this.Ma.get(a);
            b && (this.Ma.delete(a), Fb(b.container))
        };

        function $i(a) {
            var b = this;
            this.win = a;
            this.oh = 6E4;
            this.O = [];
            this.Jf = new Y;
            this.Ye = function(c) {
                c.target && 1 == c.target.nodeType && aj(b, c.target)
            };
            this.Xe = function() {
                P(a).delay(function() {
                    b.win.document.activeElement && aj(b, b.win.document.activeElement)
                }, 500)
            };
            this.win.document.addEventListener("focus", this.Ye, !0);
            this.win.addEventListener("blur", this.Xe)
        }
        g = $i.prototype;
        g.af = function() {
            this.win.document.removeEventListener("focus", this.Ye, !0);
            this.win.removeEventListener("blur", this.Xe)
        };
        g.onFocus = function(a) {
            return this.Jf.add(a)
        };

        function aj(a, b) {
            var c = Date.now();
            0 == a.O.length || a.O[a.O.length - 1].el != b ? a.O.push({
                el: b,
                time: c
            }) : a.O[a.O.length - 1].time = c;
            a.purgeBefore(c - a.oh);
            a.Jf.fire(b)
        }
        g.getLast = function() {
            return 0 == this.O.length ? null : this.O[this.O.length - 1].el
        };
        g.purgeBefore = function(a) {
            for (var b = this.O.length - 1, c = 0; c < this.O.length; c++)
                if (this.O[c].time >= a) {
                    b = c - 1;
                    break
                } - 1 != b && this.O.splice(0, b + 1)
        };
        g.hasDescendantsOf = function(a) {
            this.win.document.activeElement && aj(this, this.win.document.activeElement);
            for (var b = 0; b < this.O.length; b++)
                if (a.contains(this.O[b].el)) return !0;
            return !1
        };

        function bj(a) {
            var b = this;
            this.ampdoc = a;
            this.win = a.win;
            this.j = Wc(a);
            this.J = Yc(this.ampdoc);
            this.G = Xc(this.win);
            this.hd = new $i(this.win);
            this.hd.onFocus(function(c) {
                cj(b, c)
            });
            this.Ha = this.j.isIntersectionExperimentOn()
        }
        g = bj.prototype;
        g.forceChangeSize = function(a, b, c, d, e) {
            dj(this, Z(a), b, c, e, void 0, !0, d)
        };
        g.requestChangeSize = function(a, b, c, d, e) {
            var f = this;
            return new Promise(function(h, k) {
                dj(f, Z(a), b, c, d, e, !1, function(l) {
                    l ? h() : k(Error("changeSize attempt denied"))
                })
            })
        };
        g.expandElement = function(a) {
            Z(a).completeExpand();
            this.j.schedulePass(70)
        };
        g.attemptCollapse = function(a) {
            var b = this;
            return new Promise(function(c, d) {
                dj(b, Z(a), 0, 0, void 0, void 0, !1, function(e) {
                    e ? (Z(a).completeCollapse(), c()) : d(G().createExpectedError("collapse attempt denied"))
                })
            })
        };
        g.collapseElement = function(a) {
            if (!this.Ha) {
                var b = this.J.getLayoutRect(a);
                0 != b.width && 0 != b.height && (U(this.win, "dirty-collapse-element") ? this.dirtyElement(a) : this.j.setRelayoutTop(b.top))
            }
            Z(a).completeCollapse();
            this.Ha || this.j.schedulePass(70)
        };
        g.measureElement = function(a) {
            return this.G.measurePromise(a)
        };
        g.mutateElement = function(a, b, c) {
            return ej(this, a, null, b, c)
        };
        g.measureMutateElement = function(a, b, c) {
            return ej(this, a, b, c)
        };

        function ej(a, b, c, d, e) {
            function f() {
                var l = a.J.getLayoutRect(b);
                return 0 != l.width && 0 != l.height ? l.top : -1
            }
            var h = void 0 === e ? !1 : e,
                k = -1;
            return a.G.runPromise({
                measure: function() {
                    c && c();
                    a.Ha || h || (k = f())
                },
                mutate: function() {
                    d();
                    if (!h) {
                        b.classList.contains("i-amphtml-element") && Z(b).requestMeasure();
                        for (var l = b.getElementsByClassName("i-amphtml-element"), m = 0; m < l.length; m++) Z(l[m]).requestMeasure();
                        a.j.schedulePass(70);
                        a.Ha ? a.j.maybeHeightChanged() : (-1 != k && a.j.setRelayoutTop(k), a.G.measure(function() {
                            var n =
                                f(); - 1 != n && n != k && (a.j.setRelayoutTop(n), a.j.schedulePass(70));
                            a.j.maybeHeightChanged()
                        }))
                    }
                }
            })
        }
        g.dirtyElement = function(a) {
            var b = !1;
            a.classList.contains("i-amphtml-element") ? (a = Z(a), this.j.setRelayoutTop(a.getLayoutBox().top)) : b = !0;
            this.j.schedulePass(70, b)
        };

        function cj(a, b) {
            var c = Jb(b, function(e) {
                return !!Z(e)
            });
            if (c) {
                b = Z(c);
                var d = b.getPendingChangeSize();
                void 0 !== d && dj(a, b, d.height, d.width, d.margins, void 0, !0)
            }
        }

        function dj(a, b, c, d, e, f, h, k) {
            b.hasBeenMeasured() && !e ? fj(a, b, c, d, void 0, f, h, k) : a.G.measure(function() {
                b.hasBeenMeasured() || b.measure();
                if (e) {
                    var l = a.win.getComputedStyle(b.element) || J();
                    l = {
                        top: parseInt(l.marginTop, 10) || 0,
                        right: parseInt(l.marginRight, 10) || 0,
                        bottom: parseInt(l.marginBottom, 10) || 0,
                        left: parseInt(l.marginLeft, 10) || 0
                    };
                    l = {
                        newMargins: e,
                        currentMargins: l
                    }
                } else l = void 0;
                fj(a, b, c, d, l, f, h, k)
            })
        }

        function fj(a, b, c, d, e, f, h, k) {
            b.resetPendingChangeSize();
            var l = b.getLayoutSize(),
                m;
            if (!(m = void 0 !== c && c != l.height || void 0 !== d && d != l.width) && (m = void 0 !== e)) {
                m = e.currentMargins;
                var n = e.newMargins;
                m = void 0 !== n.top && n.top != m.top || void 0 !== n.right && n.right != m.right || void 0 !== n.bottom && n.bottom != m.bottom || void 0 !== n.left && n.left != m.left
            }
            m ? (a.j.updateOrEnqueueMutateTask(b, {
                resource: b,
                newHeight: c,
                newWidth: d,
                marginChange: e,
                event: f,
                force: h,
                callback: k
            }), a.j.schedulePassVsync()) : (void 0 === c && void 0 === d && void 0 ===
                e && G().error("Mutator", "attempting to change size with undefined dimensions", b.debugid), k && k(!0))
        };

        function gj(a) {
            return A(a) ? a : [a]
        }

        function hj(a) {
            this.j = Wc(a)
        }
        g = hj.prototype;
        g.setOwner = function(a, b) {
            b.contains(a);
            Z(a) && Z(a).updateOwner(b);
            a.__AMP__OWNER = b;
            a = a.getElementsByClassName("i-amphtml-element");
            for (b = 0; b < a.length; b++) {
                var c = a[b];
                Z(c) && Z(c).updateOwner(void 0)
            }
        };
        g.schedulePreload = function(a, b) {
            ij(this, this.j.getResourceForElement(a), gj(b))
        };
        g.scheduleLayout = function(a, b) {
            ij(this, this.j.getResourceForElement(a), gj(b))
        };
        g.schedulePause = function(a, b) {
            var c = this.j.getResourceForElement(a);
            b = gj(b);
            jj(this, c, b, function(d) {
                d.pause()
            })
        };
        g.scheduleResume = function(a, b) {
            a = this.j.getResourceForElement(a);
            b = gj(b);
            jj(this, a, b, function(c) {
                c.resume()
            })
        };
        g.scheduleUnlayout = function(a, b) {
            a = this.j.getResourceForElement(a);
            b = gj(b);
            jj(this, a, b, function(c) {
                c.unlayout()
            })
        };
        g.requireLayout = function(a) {
            var b = [];
            kj(this, a, function(c) {
                b.push(c.element.ensureLoaded())
            });
            return Promise.all(b)
        };

        function jj(a, b, c, d) {
            c.forEach(function(e) {
                b.element.contains(e);
                kj(a, e, d)
            })
        }

        function kj(a, b, c) {
            if (b.classList.contains("i-amphtml-element")) c(a.j.getResourceForElement(b)), (b = b.getPlaceholder()) && kj(a, b, c);
            else {
                b = b.getElementsByClassName("i-amphtml-element");
                for (var d = [], e = 0; e < b.length; e++) {
                    for (var f = b[e], h = !1, k = 0; k < d.length; k++)
                        if (d[k].contains(f)) {
                            h = !0;
                            break
                        } h || (d.push(f), c(a.j.getResourceForElement(f)))
                }
            }
        }

        function ij(a, b, c) {
            jj(a, b, c, function(d) {
                d.element.ensureLoaded(b.getLayoutPriority())
            })
        };

        function lj(a, b) {
            if ("referrerPolicy" in Image.prototype) return mj(a, b, !0);
            var c = Gb(a.document);
            c.onload = function() {
                mj(c.contentWindow, b)
            };
            a.document.body.appendChild(c);
            return c
        }

        function mj(a, b, c) {
            var d = c = void 0 === c ? !1 : c;
            a = new a.Image;
            d && (a.referrerPolicy = "no-referrer");
            a.src = b;
            return a
        };

        function nj(a) {
            X.call(this, a);
            this.ve = null
        }
        p(nj, X);
        nj.createLoaderLogoCallback = X.createLoaderLogoCallback;
        nj.prerenderAllowed = X.prerenderAllowed;
        nj.prototype.isLayoutSupported = function() {
            return !0
        };
        nj.prototype.buildCallback = function() {
            this.element.setAttribute("aria-hidden", "true");
            (this.Kc = this.element.getAttribute("referrerpolicy")) && I("no-referrer" == this.Kc, 'amp-pixel: invalid "referrerpolicy" value "' + this.Kc + '". Only "no-referrer" is supported');
            this.element.hasAttribute("i-amphtml-ssr") && this.element.querySelector("img") ? G().info("amp-pixel", "inabox img already present") : this.getAmpDoc().whenFirstVisible().then(this.Jh.bind(this))
        };
        nj.prototype.Jh = function() {
            var a = this;
            if (this.ve) return G().error("amp-pixel", "duplicate pixel"), this.ve;
            this.ve = P(this.win).promise(1).then(function() {
                var b = a.element.getAttribute("src");
                if (b) {
                    var c = Dc(a.element, "url-replace"),
                        d = c.expandUrlAsync;
                    I(/^(https:\/\/|\/\/)/i.test(b), 'The <amp-pixel> src attribute must start with "https://" or "//". Invalid value: ' + b);
                    return d.call(c, b).then(function(e) {
                        if (a.win) {
                            var f = a.win;
                            var h = a.Kc;
                            h && "no-referrer" !== h && D().error("pixel", "Unsupported referrerPolicy: %s",
                                h);
                            f = "no-referrer" === h ? lj(f, e) : mj(f, e);
                            G().info("amp-pixel", "pixel triggered: ", e);
                            return f
                        }
                    })
                }
            })
        };

        function oj(a) {
            this.T = a.navigator;
            this.A = a
        }
        g = oj.prototype;
        g.isAndroid = function() {
            return /Android/i.test(this.T.userAgent)
        };
        g.isIos = function() {
            return /iPhone|iPad|iPod/i.test(this.T.userAgent)
        };
        g.isSafari = function() {
            return /Safari/i.test(this.T.userAgent) && !this.isChrome() && !this.isIe() && !this.isEdge() && !this.isFirefox() && !this.isOpera()
        };
        g.isChrome = function() {
            return /Chrome|CriOS/i.test(this.T.userAgent) && !this.isEdge() && !this.isOpera()
        };
        g.isFirefox = function() {
            return /Firefox|FxiOS/i.test(this.T.userAgent) && !this.isEdge()
        };
        g.isOpera = function() {
            return /OPR\/|Opera|OPiOS/i.test(this.T.userAgent)
        };
        g.isIe = function() {
            return /Trident|MSIE|IEMobile/i.test(this.T.userAgent)
        };
        g.isEdge = function() {
            return /Edge/i.test(this.T.userAgent)
        };
        g.isWebKit = function() {
            return /WebKit/i.test(this.T.userAgent) && !this.isEdge()
        };
        g.isWindows = function() {
            return /Windows/i.test(this.T.userAgent)
        };
        g.isStandalone = function() {
            return this.isIos() && this.T.standalone || this.isChrome() && this.A.matchMedia("(display-mode: standalone)").matches
        };
        g.isBot = function() {
            return /bot/i.test(this.T.userAgent)
        };
        g.getMajorVersion = function() {
            return this.isSafari() ? this.isIos() ? this.getIosMajorVersion() || 0 : pj(this, /\sVersion\/(\d+)/, 1) : this.isChrome() ? pj(this, /(Chrome|CriOS)\/(\d+)/, 2) : this.isFirefox() ? pj(this, /(Firefox|FxiOS)\/(\d+)/, 2) : this.isOpera() ? pj(this, /(OPR|Opera|OPiOS)\/(\d+)/, 2) : this.isIe() ? pj(this, /MSIE\s(\d+)/, 1) : this.isEdge() ? pj(this, /Edge\/(\d+)/, 1) : 0
        };

        function pj(a, b, c) {
            if (!a.T.userAgent) return 0;
            a = a.T.userAgent.match(b);
            return !a || c >= a.length ? 0 : parseInt(a[c], 10)
        }
        g.getIosVersionString = function() {
            if (!this.T.userAgent || !this.isIos()) return "";
            var a = this.T.userAgent.match(/OS ([0-9]+[_.][0-9]+([_.][0-9]+)?)\b/);
            return a ? a = a[1].replace(/_/g, ".") : ""
        };
        g.getIosMajorVersion = function() {
            var a = this.getIosVersionString();
            return "" == a ? null : Number(a.split(".")[0])
        };

        function qj(a) {
            return "loading" != a.readyState && "uninitialized" != a.readyState
        }

        function rj(a) {
            return "complete" == a.readyState
        }

        function sj(a, b) {
            tj(a, qj, b)
        }

        function tj(a, b, c) {
            var d = b(a);
            if (d) c(a);
            else {
                var e = function() {
                    b(a) && (d || (d = !0, c(a)), a.removeEventListener("readystatechange", e))
                };
                a.addEventListener("readystatechange", e)
            }
        }

        function uj(a) {
            return new Promise(function(b) {
                sj(a, b)
            })
        }

        function vj(a) {
            return new Promise(function(b) {
                tj(a, rj, b)
            })
        };
        var wj = ["<link rel=preload referrerpolicy=origin>"],
            xj = null;

        function yj(a) {
            this.Bd = a.document;
            this.Jd = a.document.head;
            this.Sb = {};
            this.fg = {};
            this.ta = Q(a);
            this.Sb[S(a.location.href).origin] = !0;
            a: {
                if (!xj) {
                    var b = a.document.createElement("link");
                    var c = b.relList;
                    b.as = "invalid-value";
                    if (!c || !c.supports) {
                        b = {};
                        break a
                    }
                    xj = {
                        preconnect: c.supports("preconnect"),
                        preload: c.supports("preload"),
                        onlyValidAs: "invalid-value" != b.as
                    }
                }
                b = xj
            }
            this.oc = b;
            this.P = P(a)
        }
        yj.prototype.url = function(a, b, c) {
            var d = this;
            a.whenFirstVisible().then(function() {
                d.fc(a, b, c)
            })
        };
        yj.prototype.fc = function(a, b, c) {
            if (zj(b)) {
                a = S(b).origin;
                b = Date.now();
                var d = this.Sb[a];
                if (d && b < d) c && (this.Sb[a] = b + 18E4);
                else {
                    this.Sb[a] = b + (c ? 18E4 : 1E4);
                    if (!this.oc.preconnect) {
                        var e = this.Bd.createElement("link");
                        e.setAttribute("rel", "dns-prefetch");
                        e.setAttribute("href", a);
                        this.Jd.appendChild(e)
                    }
                    var f = this.Bd.createElement("link");
                    f.setAttribute("rel", "preconnect");
                    f.setAttribute("href", a);
                    f.setAttribute("referrerpolicy", "origin");
                    this.Jd.appendChild(f);
                    this.P.delay(function() {
                        e && e.parentNode && e.parentNode.removeChild(e);
                        f.parentNode && f.parentNode.removeChild(f)
                    }, 1E4);
                    Aj(this, a)
                }
            }
        };
        yj.prototype.preload = function(a, b, c) {
            var d = this;
            zj(b) && !this.fg[b] && (this.fg[b] = !0, this.url(a, b, !0), this.oc.preload && ("document" == c && this.ta.isSafari() || a.whenFirstVisible().then(function() {
                var e = Td(d.Bd)(wj);
                e.setAttribute("href", b);
                e.as = d.oc.onlyValidAs ? "fetch" : "";
                d.Jd.appendChild(e)
            })))
        };

        function zj(a) {
            return a.startsWith("https:") || a.startsWith("http:") ? !0 : !1
        }

        function Aj(a, b) {
            if (!a.oc.preconnect && (a.ta.isSafari() || a.ta.isIos())) {
                var c = Date.now();
                a.Sb[b] = c + 18E4;
                a = new XMLHttpRequest;
                a.open("HEAD", b + "/robots.txt?_AMP_safari_preconnect_polyfill_cachebust=" + (c - c % 18E4), !0);
                a.withCredentials = !0;
                a.send()
            }
        }

        function Bj() {
            var a = self.document;
            vj(a).then(function() {
                var b = a.defaultView;
                if (b) {
                    b = O(b, "preconnect");
                    var c = Tc(a.documentElement),
                        d = vc(a);
                    b.url(d, c.sourceUrl);
                    b.url(d, c.canonicalUrl)
                }
            })
        };

        function Cj(a) {
            this.D = a;
            this.bg = Object.create(null)
        }
        Cj.prototype.addTransition = function(a, b, c) {
            this.bg[a + "|" + b] = c
        };
        Cj.prototype.setState = function(a) {
            var b = this.D;
            this.D = a;
            (a = this.bg[b + "|" + a]) && a()
        };

        function Dj() {
            try {
                return new IntersectionObserver(function() {}, {
                    root: document
                }), !0
            } catch (a) {
                return !1
            }
        }

        function Ej(a) {
            !tf(a.document) && Dj() && xe(a, [{
                experimentId: "intersect-resources",
                isTrafficEligible: function() {
                    return !0
                },
                branches: ["21068800", "21068801"]
            }])
        };

        function Fj() {
            this.M = [];
            this.cc = {};
            this.Bf = this.Cf = 0
        }
        g = Fj.prototype;
        g.getSize = function() {
            return this.M.length
        };
        g.getLastEnqueueTime = function() {
            return this.Cf
        };
        g.getLastDequeueTime = function() {
            return this.Bf
        };
        g.getTaskById = function(a) {
            return this.cc[a] || null
        };
        g.enqueue = function(a) {
            this.M.push(a);
            this.cc[a.id] = a;
            this.Cf = Date.now()
        };
        g.dequeue = function(a) {
            if (!this.removeAtIndex(a, this.M.indexOf(this.cc[a.id]))) return !1;
            this.Bf = Date.now();
            return !0
        };
        g.peek = function(a) {
            for (var b = 1E6, c = null, d = 0; d < this.M.length; d++) {
                var e = this.M[d],
                    f = a(e);
                f < b && (b = f, c = e)
            }
            return c
        };
        g.forEach = function(a) {
            this.M.forEach(a)
        };
        g.removeAtIndex = function(a, b) {
            var c = this.cc[a.id];
            if (!c || this.M[b] != c) return !1;
            this.M.splice(b, 1);
            delete this.cc[a.id];
            return !0
        };
        g.purge = function(a) {
            for (var b = this.M.length; b--;) a(this.M[b]) && this.removeAtIndex(this.M[b], b)
        };

        function Gj(a) {
            if (Q(a).isIe()) {
                a = a.document;
                for (var b = a.querySelectorAll('.i-amphtml-intrinsic-sizer[src^="data:image/svg"]'), c = 0; c < b.length; c++) {
                    var d = b[c],
                        e = Kb(d, ".i-amphtml-element");
                    if (e) {
                        var f = Re(e.getAttribute("width"));
                        e = Re(e.getAttribute("height"));
                        f && e && (d.src = Ge(a, f, e))
                    }
                }
            }
        };

        function Hj(a) {
            return !Q(a).isIe() || Ij(a) ? null : new Promise(function(b) {
                var c = Date.now() + 2E3,
                    d = a.setInterval(function() {
                        var e = Date.now(),
                            f = Ij(a);
                        if (f || e > c) a.clearInterval(d), b(), f || G().error("ie-media-bug", "IE media never resolved")
                    }, 10)
            })
        }

        function Ij(a) {
            var b = "(min-width: " + (a.innerWidth - 1) + "px) AND (max-width: " + (a.innerWidth + 1 + "px)");
            try {
                return a.matchMedia(b).matches
            } catch (c) {
                return G().error("ie-media-bug", "IE matchMedia failed: ", c), !0
            }
        };

        function Jj(a) {
            var b = this;
            this.ampdoc = a;
            this.win = a.win;
            this.h = R(a);
            this.ja = this.h.isRuntimeOn();
            this.Pg = !1;
            this.xh = 0;
            this.j = [];
            this.sd = this.Ue = this.De = 0;
            this.ha = this.ampdoc.isVisible();
            this.Cb = !1;
            this.mf = !0;
            this.jd = !1;
            this.pc = -1;
            this.Sa = !0;
            this.qb = -1;
            this.Zd = this.vc = 0;
            this.Ic = new Ri(this.win, function() {
                return b.doPass()
            });
            this.Pf = new Ri(this.win, function() {
                b.Sa = !0;
                b.schedulePass()
            });
            this.pa = new Fj;
            this.F = new Fj;
            this.rd = this.sg.bind(this);
            this.fa = [];
            this.wa = [];
            this.Rd = !1;
            this.J = Yc(this.ampdoc);
            this.G =
                Xc(this.win);
            this.hd = new $i(this.win);
            this.Ce = !1;
            this.bb = 0;
            this.hb = !1;
            this.Hc = [];
            this.Cd = [];
            this.nh = U(this.win, "build-close-to-viewport");
            this.rg = U(this.win, "build-in-chunks");
            this.Mc = U(this.win, "remove-task-timeout");
            this.nf = new L;
            this.jg = new Cj(this.ampdoc.getVisibilityState());
            this.Y = null;
            this.xf = !1;
            Ej(this.win);
            if (U(this.win, "bento") || "21068801" === ye(this.win) || tf(this.win.document)) {
                var c = Vb(this.win);
                a = this.ampdoc.isSingleDoc() && c ? this.win.document : null;
                try {
                    this.Y = new IntersectionObserver(function(d) {
                        return b.intersect(d)
                    }, {
                        root: a,
                        rootMargin: "250% 31.25%"
                    }), this.Sa = !1
                } catch (d) {
                    G().warn("Resources", "Falling back to classic Resources:", d)
                }
            }
            this.J.onChanged(function(d) {
                b.vc = b.win.Date.now();
                b.Zd = d.velocity;
                d.relayoutAll && (b.Sa = !0, b.hb = !0);
                b.Sa && b.Y && b.j.forEach(function(e) {
                    return e.invalidatePremeasurementAndRequestMeasure()
                });
                b.schedulePass()
            });
            this.J.onScroll(function() {
                b.vc = b.win.Date.now()
            });
            this.ampdoc.onVisibilityChanged(function() {
                -1 == b.pc && b.ampdoc.isVisible() && (b.pc = b.win.Date.now());
                b.schedulePass()
            });
            this.h.onRuntimeState(function(d) {
                G().fine("Resources",
                    "Runtime state:", d);
                b.ja = d;
                b.schedulePass(1)
            });
            vi(this.ampdoc, function() {
                Kj(b, b.jg);
                b.schedulePass(0)
            });
            Lj(this);
            this.Y || (this.Wc = qf(this.win, function(d) {
                d = d.target;
                d.nodeType !== Node.ELEMENT_NODE || d === b.J.getScrollingElement() || b.Cd.includes(d) || (b.Cd.push(d), b.schedulePass(70))
            }, 250), Ve(this.win.document, "scroll", this.Wc, {
                capture: !0,
                passive: !0
            }))
        }
        g = Jj.prototype;
        g.isIntersectionExperimentOn = function() {
            return !!this.Y
        };
        g.intersect = function(a) {
            this.xf = !0;
            a.forEach(function(b) {
                var c = b.boundingClientRect;
                Z(b.target).premeasure(c)
            });
            this.schedulePass()
        };

        function Lj(a) {
            a.ampdoc.whenReady().then(function() {
                a.Cb = !0;
                a.Ve();
                a.wa = null;
                O(a.win, "input").setupInputModeClasses(a.ampdoc);
                Gj(a.win);
                if (!a.Y) {
                    var b = Hj(a.win),
                        c = function() {
                            return a.Pf.schedule()
                        };
                    b ? b.then(c) : c();
                    Promise.race([$e(a.win), P(a.win).promise(3100)]).then(c);
                    a.win.document.fonts && "loaded" != a.win.document.fonts.status && a.win.document.fonts.ready.then(c)
                }
            })
        }
        g.get = function() {
            return this.j.slice(0)
        };
        g.getAmpdoc = function() {
            return this.ampdoc
        };
        g.getResourceForElement = function(a) {
            return Z(a)
        };
        g.getResourceForElementOptional = function(a) {
            return Z(a)
        };
        g.getScrollDirection = function() {
            return Math.sign(this.Zd) || 1
        };
        g.add = function(a) {
            this.De++;
            1 == this.De && this.J.ensureReadyForElements();
            var b = Z(a);
            b && 0 != b.getState() && !a.reconstructWhenReparented() ? (b.requestMeasure(), G().fine("Resources", "resource reused:", b.debugid)) : (b = new li(++this.xh, a, this), G().fine("Resources", "resource added:", b.debugid));
            this.j.push(b);
            this.Y ? this.Y.observe(a) : this.Pf.schedule(1E3)
        };

        function Mj(a, b, c, d) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? !1 : d;
            var e = c,
                f = d;
            if (a.ja || a.Pg)
                if ("prerender" != a.ampdoc.getVisibilityState() || b.prerenderAllowed())
                    if (!a.nh || f || b.isBuildRenderBlocking() || b.renderOutsideViewport() || Nj(a) && b.idleRenderOutsideViewport()) a.Cb ? Oj(a, b, f) : b.isBuilt() || b.isBuilding() || e && a.wa.includes(b) || (a.wa.push(b), a.Ve())
        }
        g.Ve = function() {
            if (!this.Rd) try {
                this.Rd = !0;
                for (var a = 0; a < this.wa.length; a++) {
                    var b = this.wa[a],
                        c;
                    if (!(c = this.Cb)) a: {
                        var d = this.ampdoc.getRootNode(),
                            e = b.element;do
                            if (e.nextSibling) {
                                c = !0;
                                break a
                            } while ((e = e.parentNode) && e != d);
                        c = !1
                    }
                    c && (this.wa.splice(a--, 1), Oj(this, b))
                }
            } finally {
                this.Rd = !1
            }
        };

        function Oj(a, b, c) {
            if ((void 0 === c ? 0 : c) || (a.rg && 10 <= a.sd ? 0 : 20 > a.Ue || a.ampdoc.hasBeenVisible()) || b.isBuildRenderBlocking())
                if (c = b.build()) G().fine("Resources", "build resource:", b.debugid), a.Ue++, a.sd++, c.then(function() {
                    return a.schedulePass()
                }, function(d) {
                    Pj(a, b);
                    if (!Ef(d)) throw d;
                })
        }
        g.remove = function(a) {
            (a = Z(a)) && Pj(this, a)
        };

        function Pj(a, b) {
            var c = a.j.indexOf(b); - 1 != c && a.j.splice(c, 1);
            b.isBuilt() && b.pauseOnRemove();
            a.Y && a.Y.unobserve(b.element);
            3 === b.getState() && b.layoutCanceled();
            Qj(a, b, !0);
            G().fine("Resources", "resource removed:", b.debugid)
        }
        g.upgraded = function(a) {
            a = Z(a);
            Mj(this, a);
            G().fine("Resources", "resource upgraded:", a.debugid)
        };
        g.updateLayoutPriority = function(a, b) {
            var c = Z(a);
            c.updateLayoutPriority(b);
            this.F.forEach(function(d) {
                d.resource == c && (d.priority = b)
            });
            this.schedulePass()
        };
        g.schedulePass = function(a) {
            return this.Ic.schedule(a)
        };
        g.updateOrEnqueueMutateTask = function(a, b) {
            for (var c = null, d = 0; d < this.fa.length; d++)
                if (this.fa[d].resource == a) {
                    c = this.fa[d];
                    break
                } c ? (c.newHeight = b.newHeight, c.newWidth = b.newWidth, c.marginChange = b.marginChange, c.event = b.event, c.force = b.force || c.force, c.callback = b.callback) : this.fa.push(b)
        };
        g.schedulePassVsync = function() {
            var a = this;
            this.Ce || (this.Ce = !0, this.G.mutate(function() {
                return a.doPass()
            }))
        };
        g.ampInitComplete = function() {
            this.jd = !0;
            G().fine("Resources", "ampInitComplete");
            this.schedulePass()
        };
        g.setRelayoutTop = function(a) {
            this.qb = -1 == this.qb ? a : Math.min(a, this.qb)
        };
        g.maybeHeightChanged = function() {
            this.hb = !0
        };
        g.onNextPass = function(a) {
            this.Hc.push(a)
        };
        g.doPass = function() {
            var a = this;
            if (this.ja) {
                this.ha = this.ampdoc.isVisible();
                this.sd = 0;
                if (this.Cb && this.mf && this.jd) {
                    this.mf = !1;
                    var b = this.win.document,
                        c = Tc(this.ampdoc);
                    this.h.sendMessage("documentLoaded", K({
                        title: b.title,
                        sourceUrl: pe(this.ampdoc.getUrl()),
                        serverLayout: b.documentElement.hasAttribute("i-amphtml-element"),
                        linkRels: c.linkRels,
                        metaTags: {
                            viewport: c.viewport
                        },
                        viewport: c.viewport
                    }), !0);
                    this.bb = this.J.getContentHeight();
                    this.h.sendMessage("documentHeight", K({
                        height: this.bb
                    }), !0);
                    G().fine("Resources",
                        "document height on load: %s", this.bb)
                }
                var d = this.J.getSize();
                G().fine("Resources", "PASS: visible=", this.ha, ", relayoutAll=", this.Sa, ", relayoutTop=", this.qb, ", viewportSize=", d.width, d.height);
                this.Ic.cancel();
                this.Ce = !1;
                this.jg.setState(this.ampdoc.getVisibilityState());
                !this.Cb || !this.jd || this.Y && !this.xf || this.ampdoc.signals().get("ready-scan") || (this.ampdoc.signals().signal("ready-scan"), G().fine("Resources", "signal: ready-scan"));
                this.hb && (this.hb = !1, this.G.measure(function() {
                    var e = a.J.getContentHeight();
                    e != a.bb && (a.h.sendMessage("documentHeight", K({
                        height: e
                    }), !0), a.bb = e, G().fine("Resources", "document height changed: %s", a.bb), a.J.contentHeightChanged())
                }));
                for (b = 0; b < this.Hc.length; b++)(0, this.Hc[b])();
                this.Hc.length = 0
            } else G().fine("Resources", "runtime is off")
        };

        function Rj(a) {
            var b = a.win.Date.now(),
                c = a.J.getRect(),
                d = c.height / 10,
                e = c.height / 10,
                f = .01 > Math.abs(a.Zd) && 500 < b - a.vc || 1E3 < b - a.vc;
            if (0 < a.fa.length) {
                G().fine("Resources", "change size requests:", a.fa.length);
                var h = a.fa;
                a.fa = [];
                var k = -1,
                    l = [],
                    m = 0;
                b = {};
                for (var n = 0; n < h.length; b = {
                        Za: b.Za,
                        ic: b.ic,
                        H: b.H,
                        R: b.R
                    }, n++) {
                    b.H = h[n];
                    var q = b.H;
                    b.Za = q.resource;
                    q = q.event;
                    var t = b.Za.getLayoutBox(),
                        w = 0,
                        u = 0,
                        r = 0,
                        y = 0,
                        F = t,
                        sa = F.top,
                        jb = F.bottom;
                    b.R = void 0;
                    b.H.marginChange && (b.R = b.H.marginChange.newMargins, F = b.H.marginChange.currentMargins,
                        void 0 != b.R.top && (w = b.R.top - F.top), void 0 != b.R.bottom && (u = b.R.bottom - F.bottom), void 0 != b.R.left && (r = b.R.left - F.left), void 0 != b.R.right && (y = b.R.right - F.right), w && (sa = t.top - F.top), u && (jb = t.bottom + F.bottom));
                    var va = b.H.newHeight - t.height;
                    b.ic = b.H.newWidth - t.width;
                    var E = !1;
                    if (0 != va || 0 != w || 0 != u || 0 != b.ic || 0 != r || 0 != y)
                        if (b.H.force || !a.ha) E = !0;
                        else if (a.hd.hasDescendantsOf(b.Za.element) || q && q.userActivation && q.userActivation.hasBeenActive) E = !0;
                    else if (sa >= c.bottom - e || 0 == w && t.bottom + Math.min(va, 0) >= c.bottom -
                        e) E = !0;
                    else if (1 < c.top && jb <= c.top + d) {
                        if (0 > va && c.top + m < -va) continue;
                        f ? (m += va, l.push(b.H)) : a.fa.push(b.H);
                        continue
                    } else Sj(a, b.Za, t) ? E = !0 : 0 > va || 0 > w || 0 > u || (b.H.newHeight == t.height ? a.G.run({
                        measure: function(C) {
                            return function(V) {
                                V.resize = !1;
                                var da = C.Za.element.parentElement;
                                if (da) {
                                    for (var ia = da.getLayoutSize && da.getLayoutSize().width || da.offsetWidth, ja = C.ic, kb = 0; kb < da.childElementCount; kb++)
                                        if (ja += da.children[kb].offsetWidth, ja > ia) return;
                                    V.resize = !0
                                }
                            }
                        }(b),
                        mutate: function(C) {
                            return function(V) {
                                V.resize &&
                                    C.H.resource.changeSize(C.H.newHeight, C.H.newWidth, C.R);
                                C.H.resource.overflowCallback(!V.resize, C.H.newHeight, C.H.newWidth, C.R)
                            }
                        }(b)
                    }, {}) : b.H.resource.overflowCallback(!0, b.H.newHeight, b.H.newWidth, b.R));
                    E && (0 <= t.top && (k = -1 == k ? t.top : Math.min(k, t.top)), b.H.resource.changeSize(b.H.newHeight, b.H.newWidth, b.R), b.H.resource.overflowCallback(!1, b.H.newHeight, b.H.newWidth, b.R), a.hb = !0);
                    b.H.callback && b.H.callback(E)
                } - 1 != k && a.setRelayoutTop(k);
                0 < l.length && a.G.run({
                    measure: function(C) {
                        C.scrollHeight = a.J.getScrollHeight();
                        C.scrollTop = a.J.getScrollTop()
                    },
                    mutate: function(C) {
                        var V = -1;
                        l.forEach(function(ia) {
                            var ja = ia.resource.getLayoutBox();
                            V = -1 == V ? ja.top : Math.min(V, ja.top);
                            ia.resource.changeSize(ia.newHeight, ia.newWidth, ia.marginChange ? ia.marginChange.newMargins : void 0);
                            ia.callback && ia.callback(!0)
                        }); - 1 != V && a.setRelayoutTop(V);
                        var da = a.J.getScrollHeight();
                        da != C.scrollHeight && a.J.setScrollTop(C.scrollTop + (da - C.scrollHeight));
                        a.hb = !0
                    }
                }, {})
            }
        }

        function Sj(a, b, c) {
            var d = a.J.getContentHeight();
            a = Math.max(.85 * d, d - 1E3);
            var e = c || b.getLayoutBox(),
                f = b.getInitialLayoutBox();
            return e.bottom >= a || f.bottom >= a
        }

        function Tj(a, b) {
            b = void 0 === b ? !1 : b;
            var c = a.isDisplayed();
            a.measure(b);
            return !(c && !a.isDisplayed())
        }

        function Uj(a, b) {
            b.length && a.G.mutate(function() {
                b.forEach(function(c) {
                    c.unload();
                    Qj(a, c)
                });
                G().fine("Resources", "unload:", b)
            })
        }

        function Nj(a, b) {
            var c = b = void 0 === b ? Date.now() : b,
                d = a.pa.getLastDequeueTime();
            return 0 == a.pa.getSize() && 0 == a.F.getSize() && c > d + 5E3 && 0 < d
        }
        g.sg = function(a) {
            var b = this.J.getRect(),
                c = a.resource.getLayoutBox(),
                d = Math.floor((c.top - b.top) / b.height);
            Math.sign(d) != this.getScrollDirection() && (d *= 2);
            d = Math.abs(d);
            return 10 * a.priority + d
        };

        function Vj(a, b) {
            var c = a.win.Date.now();
            if (0 == a.pa.getSize()) return -1 === a.pc ? 0 : Math.max(1E3 * b.priority - (c - a.pc), 0);
            var d = 0;
            a.pa.forEach(function(e) {
                d = Math.max(d, Math.max(1E3 * (b.priority - e.priority), 0) - (c - e.startTime))
            });
            return d
        }
        g.uh = function(a) {
            this.F.getTaskById(a.id) || this.F.enqueue(a)
        };
        g.Zf = function(a, b, c) {
            this.pa.dequeue(a);
            this.schedulePass(1E3);
            if (!b) return G().info("Resources", "task failed:", a.id, a.resource.debugid, c), Promise.reject(c)
        };

        function Wj(a, b, c) {
            return 0 != b.getState() && b.isDisplayed() && (a.ha || "prerender" == a.ampdoc.getVisibilityState() && b.prerenderAllowed()) && (c || b.isInViewport() || b.renderOutsideViewport() || b.idleRenderOutsideViewport()) ? !0 : !1
        }
        g.scheduleLayoutOrPreload = function(a, b, c, d) {
            a.getState();
            a.isDisplayed();
            d = d || !1;
            Wj(this, a, d) && (b ? this.ya(a, "L", 0, c || 0, d, a.startLayout.bind(a)) : this.ya(a, "P", 2, c || 0, d, a.startLayout.bind(a)))
        };
        g.ya = function(a, b, c, d, e, f) {
            b = a.getTaskId(b);
            a = {
                id: b,
                resource: a,
                priority: Math.max(a.getLayoutPriority(), d) + c,
                forceOutsideViewport: e,
                callback: f,
                scheduleTime: this.win.Date.now(),
                startTime: 0,
                promise: null
            };
            G().fine("Resources", "schedule:", a.id, "at", a.scheduleTime);
            var h = this.F.getTaskById(b);
            if (!h || a.priority < h.priority) h && this.F.dequeue(h), this.F.enqueue(a), this.Mc ? this.schedulePass() : this.schedulePass(Vj(this, a));
            a.resource.layoutScheduled(a.scheduleTime)
        };
        g.whenFirstPass = function() {
            return this.nf.promise
        };

        function Kj(a, b) {
            function c() {
                a.j.forEach(function(k) {
                    return k.resume()
                });
                h()
            }

            function d() {
                a.j.forEach(function(k) {
                    k.unload();
                    Qj(a, k)
                });
                try {
                    a.win.getSelection().removeAllRanges()
                } catch (k) {}
            }

            function e() {
                a.j.forEach(function(k) {
                    return k.pause()
                })
            }

            function f() {}

            function h() {
                var k = a.J.getSize();
                if (0 < k.height && 0 < k.width) {
                    0 < a.fa.length && Rj(a);
                    k = a.win.Date.now();
                    var l = a.Sa,
                        m = a.qb,
                        n = a.Cd;
                    a.Sa = !1;
                    a.qb = -1;
                    for (var q = 0, t = 0, w = 0; w < a.j.length; w++) {
                        var u = a.j[w];
                        0 != u.getState() || u.isBuilding() || Mj(a, u, !0);
                        a.Y || (l ||
                            !u.hasBeenMeasured() || 1 == u.getState()) && q++;
                        u.isMeasureRequested() && t++
                    }
                    var r;
                    if (a.Y)
                        for (m = 0; m < a.j.length; m++) {
                            if (q = a.j[m], t = q.isMeasureRequested(), !q.hasOwner() || t) w = q.hasBeenPremeasured(), t && G().fine("Resources", "force remeasure:", q.debugid), u = !q.hasBeenMeasured() && "AMP-AD" == q.element.tagName, (w || t || l || u) && !Tj(q, w) && (q.getState(), r || (r = []), r.push(q))
                        } else if (0 < q || 0 < t || l || -1 != m || 0 < n.length)
                            for (q = 0; q < a.j.length; q++)
                                if (t = a.j[q], !t.hasOwner() || t.isMeasureRequested()) {
                                    w = l || 1 == t.getState() || !t.hasBeenMeasured() ||
                                        t.isMeasureRequested() || -1 != m && t.getLayoutBox().bottom >= m;
                                    if (!w)
                                        for (u = 0; u < n.length; u++)
                                            if (n[u].contains(t.element)) {
                                                w = !0;
                                                break
                                            } w && !Tj(t) && (r || (r = []), r.push(t))
                                } n.length = 0;
                    r && Uj(a, r);
                    l = a.J.getRect();
                    r = a.ha ? nc(l, 2) : l;
                    l = a.ha ? nc(l, .25) : l;
                    for (n = 0; n < a.j.length; n++) m = a.j[n], 0 == m.getState() || m.hasOwner() || (q = a.ha && m.isDisplayed() && m.overlaps(l), m.setInViewport(q));
                    if (r)
                        for (l = 0; l < a.j.length; l++) n = a.j[l], !n.isBuilt() && !n.isBuilding() && !n.hasOwner() && n.hasBeenMeasured() && n.isDisplayed() && n.overlaps(r) && Mj(a,
                            n, !0, !0), 2 != n.getState() || n.hasOwner() || n.isDisplayed() && n.overlaps(r) && a.scheduleLayoutOrPreload(n, !0);
                    if (a.ha && Nj(a, k)) {
                        for (r = k = 0; r < a.j.length && 4 > k; r++) l = a.j[r], 2 == l.getState() && !l.hasOwner() && l.isDisplayed() && l.idleRenderOutsideViewport() && (G().fine("Resources", "idleRenderOutsideViewport layout:", l.debugid), a.scheduleLayoutOrPreload(l, !1), k++);
                        for (r = 0; r < a.j.length && 4 > k; r++) l = a.j[r], 2 == l.getState() && !l.hasOwner() && l.isDisplayed() && (G().fine("Resources", "idle layout:", l.debugid), a.scheduleLayoutOrPreload(l,
                            !1), k++)
                    }
                    k = a.win.Date.now();
                    l = -1;
                    for (r = a.F.peek(a.rd); r;) {
                        a.Mc || (l = Vj(a, r));
                        G().fine("Resources", "peek from queue:", r.id, "sched at", r.scheduleTime, "score", a.rd(r), "timeout", l);
                        if (!a.Mc && 16 < l) break;
                        a.F.dequeue(r);
                        (l = a.pa.getTaskById(r.id)) ? (r = a.uh.bind(a, r), l.promise.then(r, r)) : (l = r.resource, n = !0, a.Y ? l.hasBeenPremeasured() && (n = l.isDisplayed(!0)) : l.measure(), n && Wj(a, l, r.forceOutsideViewport) ? (r.promise = r.callback(), r.startTime = k, G().fine("Resources", "exec:", r.id, "at", r.startTime), a.pa.enqueue(r), r.promise.then(a.Zf.bind(a,
                            r, !0), a.Zf.bind(a, r, !1)).catch(Bf)) : (G().fine("Resources", "cancelled", r.id), l.layoutCanceled()));
                        r = a.F.peek(a.rd);
                        l = -1
                    }
                    G().fine("Resources", "queue size:", a.F.getSize(), "exec size:", a.pa.getSize());
                    !a.Mc && 0 <= l ? k = l : (k = 2 * (k - a.pa.getLastDequeueTime()), k = Math.max(Math.min(3E4, k), 5E3));
                    0 < a.fa.length && (k = Math.min(k, 500));
                    a.ha ? a.schedulePass(k) ? G().fine("Resources", "next pass:", k) : G().fine("Resources", "pass already scheduled") : G().fine("Resources", "document is not visible: no scheduling");
                    a.nf.resolve()
                }
            }
            b.addTransition("prerender", "prerender", h);
            b.addTransition("prerender", "visible", h);
            b.addTransition("prerender", "hidden", h);
            b.addTransition("prerender", "inactive", h);
            b.addTransition("prerender", "paused", h);
            b.addTransition("visible", "visible", h);
            b.addTransition("visible", "hidden", h);
            b.addTransition("visible", "inactive", d);
            b.addTransition("visible", "paused", e);
            b.addTransition("hidden", "visible", h);
            b.addTransition("hidden", "hidden", h);
            b.addTransition("hidden", "inactive", d);
            b.addTransition("hidden", "paused",
                e);
            b.addTransition("inactive", "visible", c);
            b.addTransition("inactive", "hidden", c);
            b.addTransition("inactive", "inactive", f);
            b.addTransition("inactive", "paused", h);
            b.addTransition("paused", "visible", c);
            b.addTransition("paused", "hidden", h);
            b.addTransition("paused", "inactive", d);
            b.addTransition("paused", "paused", f)
        }

        function Qj(a, b, c) {
            if (1 == b.getState() || 2 == b.getState()) a.F.purge(function(e) {
                return e.resource == b
            }), a.pa.purge(function(e) {
                return e.resource == b
            }), lg(a.fa, function(e) {
                return e.resource === b
            });
            if (0 == b.getState() && c && a.wa) {
                var d = a.wa.indexOf(b); - 1 != d && a.wa.splice(d, 1)
            }
        };
        var Xj = /^i-amphtml-/;

        function Yj(a) {
            this.ampdoc = a;
            var b = a.getHeadNode();
            this.mb = Vc(a);
            this.J = Yc(a);
            a = Dc(b, "action");
            a.addGlobalTarget("AMP", this.Eg.bind(this));
            a.addGlobalMethodHandler("hide", this.rf.bind(this));
            a.addGlobalMethodHandler("show", this.uf.bind(this));
            a.addGlobalMethodHandler("toggleVisibility", this.Ig.bind(this));
            a.addGlobalMethodHandler("scrollTo", this.tf.bind(this));
            a.addGlobalMethodHandler("focus", this.Fg.bind(this));
            a.addGlobalMethodHandler("toggleClass", this.Hg.bind(this))
        }
        g = Yj.prototype;
        g.Eg = function(a) {
            if (!a.satisfiesTrust(2)) return null;
            var b = a.node,
                c = a.method,
                d = a.args,
                e = (b.ownerDocument || b).defaultView;
            switch (c) {
                case "pushState":
                case "setState":
                    return Qc(b.nodeType === Node.DOCUMENT_NODE ? b.documentElement : b).then(function(f) {
                        I(f, "AMP-BIND is not installed.");
                        return f.invoke(a)
                    });
                case "navigateTo":
                    return Zj(this, a);
                case "closeOrNavigateTo":
                    return ak(this, a);
                case "scrollTo":
                    return I(d.id, "AMP.scrollTo must provide element ID"), a.node = vc(b).getElementById(d.id), this.tf(a);
                case "goBack":
                    return Cc(this.ampdoc,
                        "history").goBack(!(!d || !0 !== d.navigate)), null;
                case "print":
                    return e.print(), null;
                case "optoutOfCid":
                    return Ec(this.ampdoc, "cid").then(function(f) {
                        return f.optOut()
                    }).catch(function(f) {
                        G().error("STANDARD-ACTIONS", "Failed to opt out of CID", f)
                    })
            }
            throw D().createError("Unknown AMP action ", c);
        };

        function Zj(a, b) {
            var c = b.node,
                d = b.caller,
                e = b.method,
                f = b.args,
                h = (c.ownerDocument || c).defaultView;
            b = v();
            d.tagName.startsWith("AMP-") && (b = d.getImpl().then(function(k) {
                "function" == typeof k.throwIfCannotNavigate && k.throwIfCannotNavigate()
            }));
            return b.then(function() {
                Cc(a.ampdoc, "navigation").navigateTo(h, f.url, "AMP." + e, {
                    target: f.target,
                    opener: f.opener
                })
            }, function(k) {
                D().error("STANDARD-ACTIONS", k.message)
            })
        }

        function ak(a, b) {
            var c = b.node;
            c = (c.ownerDocument || c).defaultView;
            var d = c.parent != c,
                e = !1;
            c.opener && a.ampdoc.isSingleDoc() && !d && (c.close(), e = c.closed);
            return e ? v() : Zj(a, b)
        }
        g.tf = function(a) {
            var b = a.node,
                c = (a = a.args) && a.position,
                d = a && a.duration;
            c && !["top", "bottom", "center"].includes(c) && (c = void 0);
            Ta(d) || (d = void 0);
            return this.J.animateScrollIntoView(b, c, d)
        };
        g.Fg = function(a) {
            Ub(a.node);
            return null
        };
        g.rf = function(a) {
            var b = a.node;
            b.classList.contains("i-amphtml-element") ? this.mb.mutateElement(b, function() {
                return b.collapse()
            }, !0) : this.mb.mutateElement(b, function() {
                return Ee(b, !1)
            });
            return null
        };
        g.uf = function(a) {
            var b = a.node,
                c = b.ownerDocument.defaultView;
            if (b.classList.contains("i-amphtml-layout-nodisplay")) return D().warn("STANDARD-ACTIONS", "Elements with layout=nodisplay cannot be dynamically shown.", b), null;
            this.mb.measureElement(function() {
                "none" != (c.getComputedStyle(b) || J()).display || b.hasAttribute("hidden") || D().warn("STANDARD-ACTIONS", 'Elements can only be dynamically shown when they have the "hidden" attribute set or when they were dynamically hidden.', b)
            });
            var d = b.hasAttribute("autofocus") ?
                b : b.querySelector("[autofocus]");
            d && Q(c).isIos() ? (bk(b, d), this.mb.mutateElement(b, function() {})) : this.mb.mutateElement(b, function() {
                bk(b, d)
            });
            return null
        };

        function bk(a, b) {
            a.classList.contains("i-amphtml-element") ? a.expand() : Ee(a, !0);
            b && Ub(b)
        }
        g.Ig = function(a) {
            return a.node.hasAttribute("hidden") ? this.uf(a) : this.rf(a)
        };
        g.Hg = function(a) {
            var b = a.node,
                c = a.args,
                d = D().assertString(c["class"], "Argument 'class' must be a string.");
            if (Xj.test(d)) return null;
            this.mb.mutateElement(b, function() {
                if (void 0 !== c.force) {
                    var e = D().assertBoolean(c.force, "Optional argument 'force' must be a boolean.");
                    b.classList.toggle(d, e)
                } else b.classList.toggle(d)
            });
            return null
        };

        function ck(a, b, c) {
            this.ampdoc = a;
            this.h = b;
            this.o = c;
            this.Wg = c instanceof dk;
            this.Ec = qe(this.ampdoc.win.location);
            this.Uc = null
        }
        g = ck.prototype;
        g.get = function(a, b) {
            return ek(this).then(function(c) {
                return c.get(a, b)
            })
        };
        g.set = function(a, b, c) {
            return this.setNonBoolean(a, b, c)
        };
        g.setNonBoolean = function(a, b, c) {
            return fk(this, function(d) {
                return d.set(a, b, c)
            })
        };
        g.remove = function(a) {
            return fk(this, function(b) {
                return b.remove(a)
            })
        };
        g.isViewerStorage = function() {
            return this.Wg
        };

        function ek(a) {
            a.Uc || (a.Uc = a.o.loadBlob(a.Ec).then(function(b) {
                return b ? Zb(atob(b)) : {}
            }).catch(function(b) {
                G().expectedError("Storage", "Failed to load store: ", b);
                return {}
            }).then(function(b) {
                return new gk(b)
            }));
            return a.Uc
        }

        function fk(a, b) {
            return ek(a).then(function(c) {
                b(c);
                c = btoa(JSON.stringify(c.obj));
                return a.o.saveBlob(a.Ec, c)
            }).then(a.qg.bind(a))
        }

        function hk(a) {
            a.h.onBroadcast(function(b) {
                "amp-storage-reset" == b.type && b.origin == a.Ec && (G().fine("Storage", "Received reset message"), a.Uc = null)
            })
        }
        g.qg = function() {
            G().fine("Storage", "Broadcasted reset message");
            this.h.broadcast({
                type: "amp-storage-reset",
                origin: this.Ec
            })
        };

        function gk(a) {
            this.obj = Xb(a);
            this.$g = 8;
            this.Ba = this.obj.vv || Object.create(null);
            this.obj.vv || (this.obj.vv = this.Ba)
        }
        gk.prototype.get = function(a, b) {
            var c = (a = this.Ba[a]) ? a.t : void 0,
                d = b && void 0 != c ? c + b > Date.now() : !0;
            return a && d ? a.v : void 0
        };
        gk.prototype.set = function(a, b, c) {
            if (void 0 !== this.Ba[a]) {
                a = this.Ba[a];
                var d = Date.now();
                c && (d = a.t);
                a.v = b;
                a.t = d
            } else this.Ba[a] = K({
                v: b,
                t: Date.now()
            });
            b = Object.keys(this.Ba);
            if (b.length > this.$g) {
                var e = Infinity,
                    f = null;
                for (c = 0; c < b.length; c++) a = this.Ba[b[c]], a.t < e && (f = b[c], e = a.t);
                f && delete this.Ba[f]
            }
        };
        gk.prototype.remove = function(a) {
            delete this.Ba[a]
        };

        function ik(a) {
            this.win = a;
            try {
                if ("localStorage" in this.win) {
                    this.win.localStorage.getItem("test");
                    var b = !0
                } else b = !1
            } catch (c) {
                b = !1
            }
            this.Vd = b;
            this.Vd || (a = Error("localStorage not supported."), G().expectedError("Storage", a))
        }
        ik.prototype.loadBlob = function(a) {
            var b = this;
            return new Promise(function(c) {
                b.Vd ? c(b.win.localStorage.getItem("amp-store:" + a)) : c(null)
            })
        };
        ik.prototype.saveBlob = function(a, b) {
            var c = this;
            return new Promise(function(d) {
                c.Vd && c.win.localStorage.setItem("amp-store:" + a, b);
                d()
            })
        };

        function dk(a) {
            this.h = a
        }
        dk.prototype.loadBlob = function(a) {
            return this.h.sendMessageAwaitResponse("loadStore", K({
                origin: a
            })).then(function(b) {
                return b.blob
            })
        };
        dk.prototype.saveBlob = function(a, b) {
            return this.h.sendMessageAwaitResponse("saveStore", K({
                origin: a,
                blob: b
            })).catch(function(c) {
                throw G().createExpectedError("Storage", "Failed to save store: ", c);
            })
        };

        function jk(a) {
            N(a, "storage", function() {
                var b = R(a),
                    c = parseInt(b.getParam("storage"), 10) ? new dk(b) : new ik(a.win);
                b = new ck(a, b, c);
                hk(b);
                return b
            }, !0)
        };

        function kk() {}

        function lk(a) {
            this.A = a;
            this.dc = {};
            this.te = {}
        }
        g = lk.prototype;
        g.whenReady = function(a) {
            return mk(this, a).then(kk)
        };
        g.setHtmlForTemplate = function(a, b) {
            return mk(this, a).then(function(c) {
                return c.setHtml(b)
            })
        };
        g.renderTemplate = function(a, b) {
            return mk(this, a).then(function(c) {
                return c.render(b)
            })
        };
        g.renderTemplateAsString = function(a, b) {
            return mk(this, a).then(function(c) {
                return c.renderAsString(b)
            })
        };
        g.renderTemplateArray = function(a, b) {
            return 0 == b.length ? Promise.resolve([]) : mk(this, a).then(function(c) {
                return b.map(function(d) {
                    return c.render(d)
                })
            })
        };
        g.findAndRenderTemplate = function(a, b, c) {
            return this.renderTemplate(this.findTemplate(a, c), b)
        };
        g.findAndSetHtmlForTemplate = function(a, b, c) {
            return this.setHtmlForTemplate(this.findTemplate(a, c), b)
        };
        g.findAndRenderTemplateArray = function(a, b, c) {
            return this.renderTemplateArray(this.findTemplate(a, c), b)
        };
        g.hasTemplate = function(a, b) {
            return !!this.maybeFindTemplate(a, b)
        };
        g.findTemplate = function(a, b) {
            b = this.maybeFindTemplate(a, b);
            I(b, "Template not found for %s", a);
            var c = b.tagName;
            I("TEMPLATE" == c || "SCRIPT" == c && "text/plain" === b.getAttribute("type"), 'Template must be defined in a <template> or <script type="text/plain"> tag');
            return b
        };
        g.maybeFindTemplate = function(a, b) {
            var c = a.getAttribute("template");
            return c ? Ib(a).getElementById(c) : b ? Qb(a, b) : a.querySelector('template[type], script[type="text/plain"]')
        };

        function mk(a, b) {
            var c = b.__AMP_IMPL_;
            if (c) return Promise.resolve(c);
            c = "";
            var d = b.tagName;
            "TEMPLATE" == d ? c = b.getAttribute("type") : "SCRIPT" == d && (c = b.getAttribute("template"));
            I(c, "Type must be specified: %s", b);
            if (d = b.__AMP_WAIT_) return d;
            d = nk(a, c).then(function(e) {
                var f = b.__AMP_IMPL_ = new e(b, a.A);
                delete b.__AMP_WAIT_;
                return f
            });
            return b.__AMP_WAIT_ = d
        }

        function nk(a, b) {
            if (a.dc[b]) return a.dc[b];
            var c = new L,
                d = c.promise;
            c = c.resolve;
            a.dc[b] = d;
            a.te[b] = c;
            return d
        };

        function ok(a) {
            this.win = a;
            this.wh = this.win.Promise.resolve();
            this.Hh = 0;
            this.vd = {};
            this.se = Date.now()
        }
        g = ok.prototype;
        g.timeSinceStart = function() {
            return Date.now() - this.se
        };
        g.delay = function(a, b) {
            var c = this;
            if (!b) {
                var d = "p" + this.Hh++;
                this.wh.then(function() {
                    c.vd[d] ? delete c.vd[d] : a()
                }).catch(Bf);
                return d
            }
            return this.win.setTimeout(function() {
                try {
                    a()
                } catch (e) {
                    throw Bf(e), e;
                }
            }, b)
        };
        g.cancel = function(a) {
            "string" == typeof a ? this.vd[a] = !0 : this.win.clearTimeout(a)
        };
        g.promise = function(a) {
            var b = this;
            return new this.win.Promise(function(c) {
                if (-1 == b.delay(c, a)) throw Error("Failed to schedule timer.");
            })
        };
        g.timeoutPromise = function(a, b, c) {
            function d() {
                e.cancel(f)
            }
            var e = this,
                f, h = new this.win.Promise(function(k, l) {
                    f = e.delay(function() {
                        l(D().createError(c || "timeout"))
                    }, a);
                    if (-1 == f) throw Error("Failed to schedule timer.");
                });
            if (!b) return h;
            b.then(d, d);
            return this.win.Promise.race([h, b])
        };
        g.poll = function(a, b) {
            var c = this;
            return new this.win.Promise(function(d) {
                var e = c.win.setInterval(function() {
                    b() && (c.win.clearInterval(e), d())
                }, a)
            })
        };

        function pk(a) {
            a = a.getRootNode();
            this.lg = (a.ownerDocument || a).createElement("a");
            this.ab = new Vd
        }
        g = pk.prototype;
        g.parse = function(a, b) {
            return fe(this.lg, a, b ? null : this.ab)
        };

        function qk(a, b) {
            return "string" !== typeof b ? b : a.parse(b)
        }
        g.isProtocolValid = function(a) {
            return me(a)
        };
        g.getSourceOrigin = function(a) {
            return qe(qk(this, a))
        };
        g.getSourceUrl = function(a) {
            return pe(qk(this, a))
        };
        g.resolveRelativeUrl = function(a, b) {
            return re(a, qk(this, b))
        };
        g.assertHttpsUrl = function(a, b, c) {
            return ke(a, b, void 0 === c ? "source" : c)
        };
        g.assertAbsoluteHttpOrHttpsUrl = function(a) {
            I(/^https?:/i.test(a), 'URL must start with "http://" or "https://". Invalid value: %s', a);
            return S(a).href
        };
        g.isProxyOrigin = function(a) {
            return T(qk(this, a))
        };
        g.isSecure = function(a) {
            return je(qk(this, a))
        };
        g.getWinOrigin = function(a) {
            return a.origin || qk(this, a.location.href).origin
        };
        g.getCdnUrlOnOrigin = function(a) {
            if (T(a)) return a;
            var b = qk(this, a),
                c = b.hash,
                d = b.pathname,
                e = b.search,
                f = encodeURIComponent(b.host);
            return Xa.cdn + "/c/" + f + d + e + c
        };
        var rk = {
            navigationStart: 1,
            redirectStart: 1,
            redirectEnd: 1,
            fetchStart: 1,
            domainLookupStart: 1,
            domainLookupEnd: 1,
            connectStart: 1,
            secureConnectionStart: 1,
            connectEnd: 1,
            requestStart: 1,
            responseStart: 1,
            responseEnd: 1,
            domLoading: 2,
            domInteractive: 2,
            domContentLoaded: 2,
            domComplete: 2,
            loadEventStart: 3,
            loadEventEnd: 4
        };

        function sk(a, b, c) {
            var d = rk[b] || 3,
                e = Math.max(d, c ? rk[c] || 3 : d);
            if (1 === e) var f = v();
            else if (2 === e) f = vj(a.document);
            else if (3 === e) f = $e(a);
            else if (4 === e) {
                var h = P(a);
                f = $e(a).then(function() {
                    return h.promise(1)
                })
            }
            return f.then(function() {
                return tk(a, b, c)
            })
        }

        function tk(a, b, c) {
            var d = a.performance && a.performance.timing;
            if (d && 0 != d.navigationStart) {
                var e = void 0 === c ? d[b] : d[c] - d[b];
                if (Ta(e) && !(0 > e)) return e
            }
        }

        function uk(a, b) {
            var c = a.performance && a.performance.navigation;
            if (c && void 0 !== c[b]) return c[b]
        }

        function vk(a) {
            this.ampdoc = a;
            this.Ja = Object.create(null);
            this.Od = !1;
            wk(this)
        }
        g = vk.prototype;
        g.rc = function() {
            this.initialize();
            this.Od = !0
        };
        g.initialize = function() {};
        g.get = function(a) {
            this.Od || this.rc();
            return this.Ja[a]
        };
        g.set = function(a, b) {
            a.indexOf("RETURN");
            this.Ja[a] = this.Ja[a] || {
                sync: void 0,
                async: void 0
            };
            this.Ja[a].sync = b;
            return this
        };
        g.setAsync = function(a, b) {
            a.indexOf("RETURN");
            this.Ja[a] = this.Ja[a] || {
                sync: void 0,
                async: void 0
            };
            this.Ja[a].async = b;
            return this
        };
        g.setBoth = function(a, b, c) {
            return this.set(a, b).setAsync(a, c)
        };
        g.getExpr = function(a, b) {
            this.Od || this.rc();
            var c = Object.assign({}, this.Ja, a);
            return xk(this, Object.keys(c), b)
        };

        function xk(a, b, c) {
            wk(a) && (b = b.filter(function(e) {
                return wk(a).includes(e)
            }));
            c && (b = b.filter(function(e) {
                return c[e]
            }));
            if (0 === b.length) return /_^/g;
            b.sort(function(e, f) {
                return f.length - e.length
            });
            var d = "\\$?(" + b.map(function(e) {
                return "$" === e[0] ? "\\" + e : e
            }).join("|") + ")";
            return new RegExp(d, "g")
        }

        function wk(a) {
            if (a.ze) return a.ze;
            if (a.ampdoc.isSingleDoc()) {
                var b = a.ampdoc.getRootNode();
                if (tf(b)) return a.ze = [""], a.ze
            }
        };

        function yk(a, b, c, d, e, f) {
            this.ga = a;
            this.wb = b;
            this.bf = c;
            this.rb = d;
            this.ia = e;
            this.Ag = !f
        }
        yk.prototype.expand = function(a) {
            if (!a.length) return this.rb ? a : Promise.resolve(a);
            var b = this.ga.getExpr(this.wb, this.ia);
            b = zk(a, b);
            return b.length ? Ak(this, a, b) : this.rb ? a : Promise.resolve(a)
        };
        yk.prototype.getMacroNames = function(a) {
            var b = this.ga.getExpr(this.wb, this.ia);
            return (a = a.match(b)) ? a : []
        };

        function zk(a, b) {
            var c = [];
            a.replace(b, function(d, e, f) {
                d = d.length;
                c.push({
                    start: f,
                    stop: d + f - 1,
                    name: e,
                    length: d
                })
            });
            return c
        }

        function Ak(a, b, c) {
            function d(n) {
                for (var q = "", t = [], w = []; f < b.length && h <= c.length;) {
                    var u = q.trim();
                    if (k && f === k.start) u && t.push(l ? zb(q) : q), q = void 0, q = a.wb && sb.call(a.wb, k.name) ? {
                        name: k.name,
                        prioritized: a.wb[k.name],
                        encode: n
                    } : Object.assign({}, a.ga.get(k.name), {
                        name: k.name,
                        encode: n
                    }), f = k.stop + 1, k = c[++h], "(" === b[f] ? (f++, l++, e.push(q), t.push(d(!1))) : t.push(Bk(a, q)), q = "";
                    else {
                        if ("`" === b[f]) m ? (m = !1, q.length && t.push(q)) : (m = !0, u && t.push(u)), q = "";
                        else if (l && "," === b[f] && !m) u && t.push(u), w.push(t), t = [], "," === b[f +
                            1] && (w.push([""]), f++), q = "";
                        else {
                            if (l && ")" === b[f] && !m) return f++, l--, q = e.pop(), u && t.push(u), w.push(t), Bk(a, q, w);
                            q += b[f]
                        }
                        f++
                    }
                    f === b.length && q.length && t.push(q)
                }
                return a.rb ? t.join("") : Promise.all(t).then(function(r) {
                    return r.join("")
                }).catch(function(r) {
                    ob(r);
                    return ""
                })
            }
            var e = [],
                f = 0,
                h = 0,
                k = c[h],
                l = 0,
                m = !1;
            return d(a.Ag)
        }

        function Bk(a, b, c) {
            var d = b.encode,
                e = b.name;
            if (void 0 != b.prioritized) var f = b.prioritized;
            else a.rb && void 0 != b.sync ? f = b.sync : a.rb ? (D().error("Expander", "ignoring async replacement key: ", b.name), f = "") : f = b.async || b.sync;
            return a.rb ? (a = Ck(a, f, e, c), d ? encodeURIComponent(a) : a) : Dk(a, f, e, c).then(function(h) {
                return d ? encodeURIComponent(h) : h
            })
        }

        function Dk(a, b, c, d) {
            try {
                var e = "function" === typeof b ? d ? Ek(d).then(function(f) {
                    return b.apply(null, f)
                }) : tb(b) : Promise.resolve(b);
                return e.then(function(f) {
                    Fk(a, c, f, d);
                    return null == f ? "" : f
                }).catch(function(f) {
                    ob(f);
                    Fk(a, c, "", d);
                    return Promise.resolve("")
                })
            } catch (f) {
                return ob(f), Fk(a, c, "", d), Promise.resolve("")
            }
        }

        function Ek(a) {
            return Promise.all(a.map(function(b) {
                return Promise.all(b).then(function(c) {
                    return c.join("")
                })
            }))
        }

        function Ck(a, b, c, d) {
            try {
                var e = b;
                "function" === typeof b && (e = b.apply(null, Gk(d)));
                if (e && e.then) {
                    D().error("Expander", "ignoring async macro resolution");
                    var f = ""
                } else "string" === typeof e || "number" === typeof e || "boolean" === typeof e ? (Fk(a, c, e, d), f = e.toString()) : (Fk(a, c, "", d), f = "");
                return f
            } catch (h) {
                return ob(h), Fk(a, c, "", d), ""
            }
        }

        function Gk(a) {
            return a ? a.map(function(b) {
                return b.join("")
            }) : a
        }

        function Fk(a, b, c, d) {
            if (a.bf) {
                var e = "";
                d && (e = "(" + d.filter(function(f) {
                    return "" !== f
                }).join(",") + ")");
                a.bf["" + b + e] = c || ""
            }
        };

        function Hk(a) {
            return function() {
                return (new Date)[a]()
            }
        }

        function Ik(a, b) {
            return function() {
                return a[b]
            }
        }

        function Jk() {
            vk.apply(this, arguments)
        }
        p(Jk, vk);

        function Kk(a, b, c, d) {
            a.setBoth(b, function() {
                return tk(a.ampdoc.win, c, d)
            }, function() {
                return sk(a.ampdoc.win, c, d)
            })
        }
        Jk.prototype.initialize = function() {
            function a() {
                var l = Lk(b);
                return le(Mk(b, l.sourceUrl))
            }
            var b = this,
                c = this.ampdoc.win,
                d = this.ampdoc.getHeadNode(),
                e = Yc(this.ampdoc);
            this.set("RANDOM", function() {
                return Math.random()
            });
            var f = Object.create(null);
            this.set("COUNTER", function(l) {
                return f[l] = (f[l] | 0) + 1
            });
            this.set("CANONICAL_URL", function() {
                return Lk(b).canonicalUrl
            });
            this.set("CANONICAL_HOST", function() {
                return S(Lk(b).canonicalUrl).host
            });
            this.set("CANONICAL_HOSTNAME", function() {
                return S(Lk(b).canonicalUrl).hostname
            });
            this.set("CANONICAL_PATH", function() {
                return S(Lk(b).canonicalUrl).pathname
            });
            this.setAsync("DOCUMENT_REFERRER", function() {
                return R(b.ampdoc).getReferrerUrl()
            });
            this.setAsync("EXTERNAL_REFERRER", function() {
                return R(b.ampdoc).getReferrerUrl().then(function(l) {
                    return l ? S(pe(l)).hostname === c.location.hostname ? null : l : null
                })
            });
            this.set("TITLE", function() {
                var l = c.document;
                return l.originalTitle || l.title
            });
            this.set("AMPDOC_URL", function() {
                return le(Mk(b, c.location.href))
            });
            this.set("AMPDOC_HOST", function() {
                var l =
                    S(c.location.href);
                return l && l.host
            });
            this.set("AMPDOC_HOSTNAME", function() {
                var l = S(c.location.href);
                return l && l.hostname
            });
            this.setBoth("SOURCE_URL", function() {
                return a()
            }, function() {
                return sh().then(function() {
                    return a()
                })
            });
            this.set("SOURCE_HOST", function() {
                return S(Lk(b).sourceUrl).host
            });
            this.set("SOURCE_HOSTNAME", function() {
                return S(Lk(b).sourceUrl).hostname
            });
            this.set("SOURCE_PATH", function() {
                return S(Lk(b).sourceUrl).pathname
            });
            this.set("PAGE_VIEW_ID", function() {
                return Lk(b).pageViewId
            });
            this.setAsync("PAGE_VIEW_ID_64", function() {
                return Lk(b).pageViewId64
            });
            this.setBoth("QUERY_PARAM", function(l, m) {
                return Nk(b, l, void 0 === m ? "" : m)
            }, function(l, m) {
                var n = void 0 === m ? "" : m;
                return sh().then(function() {
                    return Nk(b, l, n)
                })
            });
            this.set("FRAGMENT_PARAM", function(l, m) {
                m = void 0 === m ? "" : m;
                I(l, "The first argument to FRAGMENT_PARAM, the fragment string param is required");
                I("string" == typeof l, "param should be a string");
                var n = x(b.ampdoc.win.location.originalHash);
                return void 0 === n[l] ? m : n[l]
            });
            var h = null;
            this.setBoth("CLIENT_ID", function(l) {
                return h ? h[l] : null
            }, function(l, m, n, q) {
                I(l, "The first argument to CLIENT_ID, the fallback Cookie name, is required");
                var t = v();
                m && (t = Nc(d, "userNotificationManager", "amp-user-notification").then(function(w) {
                    return w.get(m)
                }));
                return Ec(b.ampdoc, "cid").then(function(w) {
                    q = "true" == q ? !0 : !1;
                    return w.get({
                        scope: l,
                        createCookieIfNotPresent: !0,
                        cookieName: n || void 0,
                        disableBackup: q
                    }, t)
                }).then(function(w) {
                    h || (h = Object.create(null));
                    var u = n || l;
                    w && "_ga" == u && ("string" === typeof w ?
                        w = w.replace(/^(GA1|1)\.[\d-]+\./, "") : G().error("UrlReplacements", "non-string cid, what is it?", Object.keys(w)));
                    return h[l] = w
                })
            });
            this.setAsync("VARIANT", function(l) {
                return Ok(b, function(m) {
                    var n = m[l];
                    I(void 0 !== n, "The value passed to VARIANT() is not a valid experiment in <amp-experiment>:" + l);
                    return null === n ? "none" : n
                }, "VARIANT")
            });
            this.setAsync("VARIANTS", function() {
                return Ok(b, function(l) {
                    var m = [],
                        n;
                    for (n in l) m.push(n + "." + (l[n] || "none"));
                    return m.join("!")
                }, "VARIANTS")
            });
            this.setAsync("AMP_GEO",
                function(l) {
                    return Pk(b, function(m) {
                        return l ? (I("ISOCountry" === l, "The value passed to AMP_GEO() is not valid name:" + l), m[l] || "unknown") : m.matchedISOCountryGroups.join(",")
                    })
                });
            this.set("TIMESTAMP", Hk("getTime"));
            this.set("TIMESTAMP_ISO", Hk("toISOString"));
            this.set("TIMEZONE", Hk("getTimezoneOffset"));
            this.set("SCROLL_HEIGHT", function() {
                return e.getScrollHeight()
            });
            this.set("SCROLL_WIDTH", function() {
                return e.getScrollWidth()
            });
            this.set("VIEWPORT_HEIGHT", function() {
                return e.getHeight()
            });
            this.set("VIEWPORT_WIDTH",
                function() {
                    return e.getWidth()
                });
            var k = c.screen;
            this.set("SCREEN_WIDTH", Ik(k, "width"));
            this.set("SCREEN_HEIGHT", Ik(k, "height"));
            this.set("AVAILABLE_SCREEN_HEIGHT", Ik(k, "availHeight"));
            this.set("AVAILABLE_SCREEN_WIDTH", Ik(k, "availWidth"));
            this.set("SCREEN_COLOR_DEPTH", Ik(k, "colorDepth"));
            this.set("DOCUMENT_CHARSET", function() {
                var l = c.document;
                return l.characterSet || l.charset
            });
            this.set("BROWSER_LANGUAGE", function() {
                var l = c.navigator;
                return (l.language || l.userLanguage || l.browserLanguage || "").toLowerCase()
            });
            this.set("USER_AGENT", function() {
                return c.navigator.userAgent
            });
            Kk(this, "PAGE_LOAD_TIME", "navigationStart", "loadEventStart");
            Kk(this, "DOMAIN_LOOKUP_TIME", "domainLookupStart", "domainLookupEnd");
            Kk(this, "TCP_CONNECT_TIME", "connectStart", "connectEnd");
            Kk(this, "SERVER_RESPONSE_TIME", "requestStart", "responseStart");
            Kk(this, "PAGE_DOWNLOAD_TIME", "responseStart", "responseEnd");
            Kk(this, "REDIRECT_TIME", "navigationStart", "fetchStart");
            Kk(this, "DOM_INTERACTIVE_TIME", "navigationStart", "domInteractive");
            Kk(this,
                "CONTENT_LOAD_TIME", "navigationStart", "domContentLoadedEventStart");
            this.setAsync("ACCESS_READER_ID", function() {
                return Qk(b, function(l) {
                    return l.getAccessReaderId()
                }, "ACCESS_READER_ID")
            });
            this.setAsync("AUTHDATA", function(l) {
                I(l, "The first argument to AUTHDATA, the field, is required");
                return Qk(b, function(m) {
                    return m.getAuthdataField(l)
                }, "AUTHDATA")
            });
            this.setAsync("VIEWER", function() {
                return R(b.ampdoc).getViewerOrigin().then(function(l) {
                    return void 0 == l ? "" : l
                })
            });
            this.setAsync("TOTAL_ENGAGED_TIME",
                function() {
                    return Nc(d, "activity", "amp-analytics").then(function(l) {
                        return l.getTotalEngagedTime()
                    })
                });
            this.setAsync("INCREMENTAL_ENGAGED_TIME", function(l, m) {
                return Nc(d, "activity", "amp-analytics").then(function(n) {
                    return n.getIncrementalEngagedTime(l, "false" !== m)
                })
            });
            this.set("NAV_TIMING", function(l, m) {
                I(l, "The first argument to NAV_TIMING, the start attribute name, is required");
                return tk(c, l, m)
            });
            this.setAsync("NAV_TIMING", function(l, m) {
                I(l, "The first argument to NAV_TIMING, the start attribute name, is required");
                return sk(c, l, m)
            });
            this.set("NAV_TYPE", function() {
                return uk(c, "type")
            });
            this.set("NAV_REDIRECT_COUNT", function() {
                return uk(c, "redirectCount")
            });
            this.set("AMP_VERSION", function() {
                return "2102130314004"
            });
            this.set("BACKGROUND_STATE", function() {
                return b.ampdoc.isVisible() ? "0" : "1"
            });
            this.setAsync("VIDEO_STATE", function(l, m) {
                return Cc(b.ampdoc, "video-manager").getVideoStateProperty(l, m)
            });
            this.setAsync("AMP_STATE", function(l) {
                var m = b.ampdoc.getRootNode();
                return Qc(m.documentElement || m).then(function(n) {
                    return n ?
                        n.getStateValue(l) || "" : ""
                })
            })
        };

        function Mk(a, b) {
            if (a = Lk(a).replaceParams) {
                b = ne(b);
                var c = S(b);
                c = x(c.search);
                for (var d = K({}), e = Object.keys(a), f = 0; f < e.length; f++) sb.call(c, e[f]) || (d[e[f]] = a[e[f]]);
                a = he(b, d)
            } else a = b;
            return a
        }

        function Lk(a) {
            return Tc(a.ampdoc)
        }

        function Qk(a, b, c) {
            a = a.ampdoc.getHeadNode();
            return Promise.all([Oc(a, "access", "amp-access"), Oc(a, "subscriptions", "amp-subscriptions")]).then(function(d) {
                var e = d[0],
                    f = d[1];
                d = e || f;
                return d ? e && f ? b(f) || b(e) : b(d) : (D().error("UrlReplacements", "Access or subsciptions service is not installed to access: ", c), null)
            })
        }

        function Nk(a, b, c) {
            I(b, "The first argument to QUERY_PARAM, the query string param is required");
            var d = S(ne(a.ampdoc.win.location.href));
            d = x(d.search);
            a = Lk(a).replaceParams;
            return "undefined" !== typeof d[b] ? d[b] : a && "undefined" !== typeof a[b] ? a[b] : c
        }

        function Ok(a, b, c) {
            return Oc(a.ampdoc.getHeadNode(), "variant", "amp-experiment", !0).then(function(d) {
                I(d, "To use variable %s, amp-experiment should be configured", c);
                return d.getVariants()
            }).then(function(d) {
                return b(d)
            })
        }

        function Pk(a, b) {
            a = a.ampdoc.getHeadNode();
            return Oc(a, "geo", "amp-geo", !0).then(function(c) {
                I(c, "To use variable %s, amp-geo should be configured", "AMP_GEO");
                return b(c)
            })
        }

        function Rk(a, b) {
            this.ampdoc = a;
            this.ga = b
        }
        g = Rk.prototype;
        g.expandStringSync = function(a, b, c) {
            return (new yk(this.ga, b, void 0, !0, c, !0)).expand(a)
        };
        g.expandStringAsync = function(a, b, c) {
            return (new yk(this.ga, b, void 0, void 0, c, !0)).expand(a)
        };
        g.expandUrlSync = function(a, b, c) {
            return Sk(a, (new yk(this.ga, b, void 0, !0, c)).expand(a))
        };
        g.expandUrlAsync = function(a, b, c, d) {
            return (new yk(this.ga, b, void 0, void 0, c, d)).expand(a).then(function(e) {
                return Sk(a, e)
            })
        };
        g.expandInputValueAsync = function(a) {
            return Tk(this, a, !1)
        };
        g.expandInputValueSync = function(a) {
            return Tk(this, a, !0)
        };

        function Tk(a, b, c) {
            "INPUT" == b.tagName && (b.getAttribute("type") || "").toLowerCase();
            var d = Uk(b);
            if (!d) return c ? b.value : Promise.resolve(b.value);
            void 0 === b["amp-original-value"] && (b["amp-original-value"] = b.value);
            a = (new yk(a.ga, void 0, void 0, c, d)).expand(b["amp-original-value"] || b.value);
            return c ? b.value = a : a.then(function(e) {
                return b.value = e
            })
        }

        function Uk(a, b) {
            if (a = a.getAttribute("data-amp-replace")) {
                var c = {};
                a.trim().split(/\s+/).forEach(function(d) {
                    !b || sb.call(b, d) ? c[d] = !0 : D().warn("URL", "Ignoring unsupported replacement", d)
                });
                return c
            }
        }
        g.maybeExpandLink = function(a, b) {
            var c = a.getAttribute("data-amp-addparams") || "",
                d = Uk(a, {
                    CLIENT_ID: !0,
                    QUERY_PARAM: !0,
                    PAGE_VIEW_ID: !0,
                    PAGE_VIEW_ID_64: !0,
                    NAV_TIMING: !0
                });
            if (d || c || b) {
                var e = a["amp-original-href"] || a.getAttribute("href"),
                    f = S(e);
                null == a["amp-original-href"] && (a["amp-original-href"] = e);
                a: {
                    var h = Tc(this.ampdoc);
                    if (f.origin == S(h.canonicalUrl).origin || f.origin == S(h.sourceUrl).origin) f = !0;
                    else {
                        if (h = this.ampdoc.getMetaByName("amp-link-variable-allowed-origin")) {
                            h = h.trim().split(/\s+/);
                            for (var k =
                                    0; k < h.length; k++)
                                if (f.origin == S(h[k]).origin) {
                                    f = !0;
                                    break a
                                }
                        }
                        f = !1
                    }
                }
                var l = f;
                c && (l ? (f = c, f = d ? this.expandUrlSync(f, void 0, d) : f) : f = c, c = f, e = he(e, x(c)));
                if (!l) return d && D().warn("URL", "Ignoring link replacement %s because the link does not go to the document's source, canonical, or allowlisted origin.", e), a.href = e;
                b && (d && d.QUERY_PARAM || (b = this.expandUrlSync(b, void 0, {
                    QUERY_PARAM: !0
                })), e = he(e, x(b)));
                e = d ? this.expandUrlSync(e, void 0, d) : e;
                return a.href = e
            }
        };
        g.collectVars = function(a, b) {
            var c = Object.create(null);
            return (new yk(this.ga, b, c)).expand(a).then(function() {
                return c
            })
        };
        g.collectDisallowedVarsSync = function(a) {
            var b = a.getAttribute("src"),
                c = (new yk(this.ga)).getMacroNames(b),
                d = Uk(a);
            return d ? c.filter(function(e) {
                return !d[e]
            }) : c
        };

        function Sk(a, b) {
            var c = S(b, !0).protocol,
                d = S(a, !0).protocol;
            if (c != d) return D().error("UrlReplacements", "Illegal replacement of the protocol: ", a), a;
            I(me(b), "The replacement url has invalid protocol: %s", b);
            return b
        }
        g.getVariableSource = function() {
            return this.ga
        };

        function Vk(a) {
            N(a, "url-replace", function(b) {
                return new Rk(b, new Jk(b))
            })
        };
        var Wk = /^(https?:\/\/)((www[0-9]*|web|ftp|wap|home|mobile|amp|m)\.)+/i;

        function Xk(a) {
            var b = this;
            this.ampdoc = a;
            this.win = a.win;
            this.Lb = Vb(this.win);
            this.ja = !0;
            this.Fc = !1;
            this.be = J();
            this.yc = J();
            this.Sf = new Y;
            this.Te = new Y;
            this.Ac = this.jb = null;
            this.kb = [];
            this.ua = J();
            this.Gb = J();
            a.isSingleDoc() && Object.assign(this.Gb, x(this.win.location.hash));
            this.ja = !parseInt(a.getParam("off"), 10);
            G().fine("Viewer", "- runtimeOn:", this.ja);
            this.Fc = !(!parseInt(a.getParam("history"), 10) && !this.Fc);
            G().fine("Viewer", "- history:", this.Fc);
            G().fine("Viewer", "- visibilityState:", this.ampdoc.getVisibilityState());
            this.Ib = null;
            this.Vg = T(S(this.ampdoc.win.location.href));
            var c = new L;
            this.ah = c.resolve;
            this.Qa = Yk(this, c.promise);
            this.Ae = this.gb = null;
            var d = a.getParam("referrer");
            this.Yc = this.isEmbedded() && null != d && !1 !== Zk(this) ? d : this.win.document.referrer;
            this.rh = new Promise(function(f) {
                b.isEmbedded() && null != a.getParam("referrer") ? b.isTrustedViewer().then(function(h) {
                    h ? f(a.getParam("referrer")) : (f(b.win.document.referrer), b.Yc != b.win.document.referrer && (G().expectedError("Viewer", "Untrusted viewer referrer override: " +
                        b.Yc + " at " + b.Ac), b.Yc = b.win.document.referrer))
                }) : f(b.win.document.referrer)
            });
            this.Pc = le(this.win.location.href || "");
            this.Nh = new Promise(function(f) {
                var h = a.getParam("viewerUrl");
                b.isEmbedded() && h ? b.isTrustedViewer().then(function(k) {
                    k ? b.Pc = h : G().expectedError("Viewer", "Untrusted viewer url override: " + h + " at " + b.Ac);
                    f(b.Pc)
                }) : f(b.Pc)
            });
            if (this.Gb.click) {
                var e = le(this.win.location.href);
                e != this.win.location.href && this.win.history.replaceState && (this.win.location.originalHash || (this.win.location.originalHash =
                    this.win.location.hash), this.win.history.replaceState({}, "", e), delete this.Gb.click, G().fine("Viewer", "replace fragment:" + this.win.location.href))
            }
            this.ampdoc.whenFirstVisible().then(function() {
                b.maybeUpdateFragmentForCct()
            });
            this.ampdoc.isSingleDoc() && $k(this)
        }

        function Yk(a, b) {
            return a.Lb && !a.win.__AMP_TEST_IFRAME && (a.ampdoc.getParam("origin") || a.ampdoc.getParam("visibilityState") || -1 != a.win.location.search.indexOf("amp_js_v")) || a.isWebviewEmbedded() || a.isCctEmbedded() || !a.ampdoc.isSingleDoc() ? P(a.win).timeoutPromise(2E4, b, "initMessagingChannel timeout").catch(function(c) {
                (c = al(c)) && yb(c.message, "initMessagingChannel timeout") && (c = G().createExpectedError(c));
                Bf(c);
                throw c;
            }) : null
        }
        g = Xk.prototype;
        g.getAmpDoc = function() {
            return this.ampdoc
        };
        g.getParam = function(a) {
            return this.ampdoc.getParam(a)
        };
        g.hasCapability = function(a) {
            var b = this.ampdoc.getParam("cap");
            return b ? -1 != b.split(",").indexOf(a) : !1
        };
        g.isEmbedded = function() {
            return !!this.Qa
        };
        g.isWebviewEmbedded = function() {
            return !this.Lb && "1" == this.ampdoc.getParam("webview")
        };
        g.isCctEmbedded = function() {
            if (null != this.Ib) return this.Ib;
            this.Ib = !1;
            if (!this.Lb) {
                var a = x(this.win.location.search);
                this.Ib = "1" === a.amp_gsa && (a.amp_js_v || "").startsWith("a")
            }
            return this.Ib
        };
        g.isProxyOrigin = function() {
            return this.Vg
        };
        g.maybeUpdateFragmentForCct = function() {
            if (this.isCctEmbedded() && this.win.history.replaceState) {
                var a = qe(this.win.location.href),
                    b = Tc(this.ampdoc).canonicalUrl,
                    c = qe(b);
                bl(a, c) && (this.Gb.ampshare = b, this.win.history.replaceState({}, "", "#" + ie(this.Gb)))
            }
        };

        function bl(a, b) {
            function c(d) {
                return 2 < d.split(".").length ? d.replace(Wk, "$1") : d
            }
            return c(a) == c(b)
        }
        g.isRuntimeOn = function() {
            return this.ja
        };
        g.toggleRuntime = function() {
            this.ja = !this.ja;
            G().fine("Viewer", "Runtime state:", this.ja);
            this.Sf.fire(this.ja)
        };
        g.onRuntimeState = function(a) {
            return this.Sf.add(a)
        };
        g.isOvertakeHistory = function() {
            return this.Fc
        };
        g.getVisibilityState = function() {
            return this.ampdoc.getVisibilityState()
        };
        g.isVisible = function() {
            return this.ampdoc.isVisible()
        };
        g.hasBeenVisible = function() {
            return this.ampdoc.hasBeenVisible()
        };
        g.whenFirstVisible = function() {
            return this.ampdoc.whenFirstVisible()
        };
        g.whenNextVisible = function() {
            return this.ampdoc.whenNextVisible()
        };
        g.getFirstVisibleTime = function() {
            return this.ampdoc.getFirstVisibleTime()
        };
        g.getLastVisibleTime = function() {
            return this.ampdoc.getLastVisibleTime()
        };
        g.onVisibilityChanged = function(a) {
            return this.ampdoc.onVisibilityChanged(a)
        };

        function cl(a, b) {
            b && (b = G().assertEnumValue(bf, b, "VisibilityState"), "hidden" === b && (b = null != a.ampdoc.getLastVisibleTime() ? "inactive" : "prerender"), a.ampdoc.overrideVisibilityState(b), G().fine("Viewer", "visibilitychange event:", a.ampdoc.getVisibilityState()))
        }
        g.getResolvedViewerUrl = function() {
            return this.Pc
        };
        g.getViewerUrl = function() {
            return this.Nh
        };
        g.maybeGetMessagingOrigin = function() {
            return this.Ac
        };
        g.getUnconfirmedReferrerUrl = function() {
            return this.Yc
        };
        g.getReferrerUrl = function() {
            return this.rh
        };
        g.isTrustedViewer = function() {
            if (!this.gb) {
                var a = Zk(this);
                this.gb = void 0 !== a ? Promise.resolve(a) : this.Qa.then(function(b) {
                    return b ? dl(b) : !1
                })
            }
            return this.gb
        };

        function Zk(a) {
            if (!a.isEmbedded()) return !1;
            if (a.win.location.ancestorOrigins && !a.isWebviewEmbedded() && !a.isCctEmbedded()) return 0 < a.win.location.ancestorOrigins.length && dl(a.win.location.ancestorOrigins[0])
        }
        g.getViewerOrigin = function() {
            if (!this.Ae) {
                var a;
                this.isEmbedded() ? this.win.location.ancestorOrigins && 0 < this.win.location.ancestorOrigins.length && (a = this.win.location.ancestorOrigins[0]) : a = "";
                this.Ae = void 0 !== a ? Promise.resolve(a) : P(this.win).timeoutPromise(1E3, this.Qa).catch(function() {
                    return ""
                })
            }
            return this.Ae
        };

        function dl(a) {
            var b = S(a);
            a = b.protocol;
            return "x-thread:" == a ? !0 : "https:" != a ? !1 : Xa.trustedViewerHosts.some(function(c) {
                return c.test(b.hostname)
            })
        }
        g.onMessage = function(a, b) {
            var c = this.be[a];
            c || (c = new Y, this.be[a] = c);
            var d = c.add(b);
            this.ua[a] && (this.ua[a].forEach(function(e) {
                c.fire(e.data);
                e.deferred.resolve()
            }), this.ua[a] = []);
            return d
        };
        g.onMessageRespond = function(a, b) {
            var c = this;
            this.yc[a] = b;
            this.ua[a] && (this.ua[a].forEach(function(d) {
                d.deferred.resolve(b(d.data))
            }), this.ua[a] = []);
            return function() {
                c.yc[a] === b && delete c.yc[a]
            }
        };
        g.receiveMessage = function(a, b) {
            if ("visibilitychange" == a) return cl(this, b.state), v();
            if ("broadcast" == a) return this.Te.fire(b), v();
            var c = this.be[a],
                d = this.yc[a];
            if (!c && !d) {
                this.ua[a] = this.ua[a] || [];
                if (50 <= this.ua[a].length) return;
                c = new L;
                this.ua[a].push({
                    data: b,
                    deferred: c
                });
                return c.promise
            }
            c && c.fire(b);
            if (d) return d(b);
            if (c) return v()
        };
        g.setMessageDeliverer = function(a, b) {
            var c = this;
            if (this.jb) throw Error("message channel can only be initialized once");
            if (null == b) throw Error("message channel must have an origin");
            G().fine("Viewer", "message channel established with origin: ", b);
            this.jb = a;
            this.Ac = b;
            this.ah(b);
            0 < this.kb.length && (a = this.kb.slice(0), this.kb = [], a.forEach(function(d) {
                var e = c.jb(d.eventType, d.data, d.awaitResponse);
                d.awaitResponse && d.responseResolver(e)
            }))
        };
        g.sendMessage = function(a, b, c) {
            el(this, a, b, void 0 === c ? !1 : c, !1)
        };
        g.sendMessageAwaitResponse = function(a, b, c) {
            return el(this, a, b, void 0 === c ? !1 : c, !0)
        };

        function el(a, b, c, d, e) {
            if (a.jb) return tb(function() {
                return a.jb(b, c, e)
            });
            if (!a.Qa) return e ? Promise.reject(al()) : v();
            if (!d) return a.Qa.then(function() {
                return a.jb(b, c, e)
            });
            var f = mg(a.kb, function(h) {
                return h.eventType == b
            }); - 1 != f ? (d = a.kb.splice(f, 1)[0], d.data = c, d.awaitResponse = d.awaitResponse || e) : (d = new L, d = {
                eventType: b,
                data: c,
                awaitResponse: e,
                responsePromise: d.promise,
                responseResolver: d.resolve
            });
            a.kb.push(d);
            return d.responsePromise
        }
        g.broadcast = function(a) {
            return this.Qa ? el(this, "broadcast", a, !1, !1).then(function() {
                return !0
            }, function() {
                return !1
            }) : Promise.resolve(!1)
        };
        g.onBroadcast = function(a) {
            return this.Te.add(a)
        };
        g.whenMessagingReady = function() {
            return this.Qa
        };
        g.replaceUrl = function(a) {
            if (a && this.ampdoc.isSingleDoc() && this.win.history.replaceState) try {
                var b = S(this.win.location.href),
                    c = S(le(a) + this.win.location.hash);
                b.origin == c.origin && qe(b) == qe(c) && (this.win.history.replaceState({}, "", c.href), this.win.location.originalHref = b.href, G().fine("Viewer", "replace url:" + c.href))
            } catch (d) {
                G().error("Viewer", "replaceUrl failed", d)
            }
        };

        function $k(a) {
            if ("visible" != a.ampdoc.getVisibilityState()) {
                var b = [],
                    c = function() {
                        return b.forEach(function(f) {
                            return f()
                        })
                    },
                    d = function() {
                        cl(a, "visible");
                        c();
                        G().expectedError("Viewer", "Received user action in non-visible doc")
                    },
                    e = {
                        capture: !0,
                        passive: !0
                    };
                b.push(Te(a.win, "keydown", d, e), Te(a.win, "touchstart", d, e), Te(a.win, "mousedown", d, e));
                a.whenFirstVisible().then(c)
            }
        }

        function al(a) {
            if (a instanceof Error) {
                a = nb(a);
                a.message = "No messaging channel: " + a.message;
                var b = a
            } else b = Error("No messaging channel: " + a);
            b.message = b.message.replace("\u200b\u200b\u200b", "");
            return b
        };

        function fl(a, b, c, d) {
            var e = new gl(a, b, c, d);
            return e.solveYValueFromXValue.bind(e)
        }

        function gl(a, b, c, d) {
            this.y0 = this.x0 = 0;
            this.x1 = a;
            this.y1 = b;
            this.x2 = c;
            this.y2 = d;
            this.y3 = this.x3 = 1
        }
        g = gl.prototype;
        g.solveYValueFromXValue = function(a) {
            return this.getPointY(this.solvePositionFromXValue(a))
        };
        g.solvePositionFromXValue = function(a) {
            var b = (a - this.x0) / (this.x3 - this.x0);
            if (0 >= b) return 0;
            if (1 <= b) return 1;
            for (var c = 0, d = 1, e = 0, f = 0; 8 > f; f++) {
                e = this.getPointX(b);
                var h = (this.getPointX(b + 1E-6) - e) / 1E-6;
                if (1E-6 > Math.abs(e - a)) return b;
                if (1E-6 > Math.abs(h)) break;
                else e < a ? c = b : d = b, b -= (e - a) / h
            }
            for (f = 0; 1E-6 < Math.abs(e - a) && 8 > f; f++) e < a ? (c = b, b = (b + d) / 2) : (d = b, b = (b + c) / 2), e = this.getPointX(b);
            return b
        };
        g.getPointX = function(a) {
            if (0 == a) return this.x0;
            if (1 == a) return this.x3;
            var b = this.lerp(this.x0, this.x1, a),
                c = this.lerp(this.x1, this.x2, a),
                d = this.lerp(this.x2, this.x3, a);
            b = this.lerp(b, c, a);
            c = this.lerp(c, d, a);
            return this.lerp(b, c, a)
        };
        g.getPointY = function(a) {
            if (0 == a) return this.y0;
            if (1 == a) return this.y3;
            var b = this.lerp(this.y0, this.y1, a),
                c = this.lerp(this.y1, this.y2, a),
                d = this.lerp(this.y2, this.y3, a);
            b = this.lerp(b, c, a);
            c = this.lerp(c, d, a);
            return this.lerp(b, c, a)
        };
        g.lerp = function(a, b, c) {
            return a + c * (b - a)
        };
        var hl = fl(.25, .1, .25, 1),
            il = fl(.42, 0, 1, 1),
            jl = fl(0, 0, .58, 1),
            kl = fl(.42, 0, .58, 1),
            ll = {
                linear: function(a) {
                    return a
                },
                ease: hl,
                "ease-in": il,
                "ease-out": jl,
                "ease-in-out": kl
            };

        function ml(a) {
            if (!a) return null;
            if ("string" == typeof a) {
                if (-1 != a.indexOf("cubic-bezier")) {
                    var b = a.match(/cubic-bezier\((.+)\)/);
                    if (b && (b = b[1].split(",").map(parseFloat), 4 == b.length)) {
                        for (var c = 0; 4 > c; c++)
                            if (isNaN(b[c])) return null;
                        return fl(b[0], b[1], b[2], b[3])
                    }
                    return null
                }
                return ll[a]
            }
            return a
        };

        function nl() {}

        function ol(a) {
            this.Bb = a;
            this.G = Xc(self);
            this.ef = null;
            this.W = []
        }

        function pl(a, b, c, d) {
            return (new ol(a)).setCurve(d).add(0, b, 1).start(c)
        }
        ol.prototype.setCurve = function(a) {
            a && (this.ef = ml(a));
            return this
        };
        ol.prototype.add = function(a, b, c, d) {
            this.W.push({
                delay: a,
                func: b,
                duration: c,
                curve: ml(d)
            });
            return this
        };
        ol.prototype.start = function(a) {
            return new ql(this.G, this.Bb, this.W, this.ef, a)
        };

        function ql(a, b, c, d, e) {
            this.G = a;
            this.Bb = b;
            this.W = [];
            for (a = 0; a < c.length; a++) {
                var f = c[a];
                this.W.push({
                    delay: f.delay,
                    func: f.func,
                    duration: f.duration,
                    curve: f.curve || d,
                    started: !1,
                    completed: !1
                })
            }
            this.zg = e;
            this.se = Date.now();
            this.Ta = !0;
            this.D = {};
            c = new L;
            this.Nf = c.promise;
            this.Oc = c.resolve;
            this.sh = c.reject;
            this.$f = this.G.createAnimTask(this.Bb, {
                mutate: this.Dh.bind(this)
            });
            this.G.canAnimate(this.Bb) ? this.$f(this.D) : (G().warn("Animation", "cannot animate"), rl(this, !1, 0))
        }
        ql.prototype.then = function(a, b) {
            return a || b ? this.Nf.then(a, b) : this.Nf
        };
        ql.prototype.thenAlways = function(a) {
            a = a || nl;
            return this.then(a, a)
        };
        ql.prototype.halt = function(a) {
            rl(this, !1, a || 0)
        };

        function rl(a, b, c) {
            if (a.Ta) {
                a.Ta = !1;
                if (0 != c) {
                    1 < a.W.length && a.W.sort(function(e, f) {
                        return e.delay + e.duration - (f.delay + f.duration)
                    });
                    try {
                        if (0 < c)
                            for (c = 0; c < a.W.length; c++) a.W[c].func(1, !0);
                        else
                            for (var d = a.W.length - 1; 0 <= d; d--) a.W[d].func(0, !1)
                    } catch (e) {
                        G().error("Animation", "completion failed: " + e, e), b = !1
                    }
                }
                b ? a.Oc() : a.sh()
            }
        }
        ql.prototype.Dh = function() {
            if (this.Ta) {
                for (var a = Date.now(), b = Math.min((a - this.se) / this.zg, 1), c = 0; c < this.W.length; c++) {
                    var d = this.W[c];
                    !d.started && b >= d.delay && (d.started = !0)
                }
                for (c = 0; c < this.W.length; c++)
                    if (d = this.W[c], d.started && !d.completed) a: {
                        var e;
                        if (0 < d.duration) {
                            var f = e = Math.min((b - d.delay) / d.duration, 1);
                            if (d.curve && 1 != f) try {
                                f = d.curve(e)
                            } catch (h) {
                                G().error("Animation", "step curve failed: " + h, h);
                                rl(this, !1, 0);
                                break a
                            }
                        } else f = e = 1;1 == e && (d.completed = !0);
                        try {
                            d.func(f, d.completed)
                        } catch (h) {
                            G().error("Animation",
                                "step mutate failed: " + h, h), rl(this, !1, 0)
                        }
                    }
                1 == b ? rl(this, !0, 0) : this.G.canAnimate(this.Bb) ? this.$f(this.D) : (G().warn("Animation", "cancel animation"), rl(this, !1, 0))
            }
        };

        function sl(a, b) {
            for (b = b.lastElementChild; b; b = b.previousElementSibling)
                if (0 < b.getBoundingClientRect().height) {
                    var c = a.getComputedStyle(b) || J();
                    if ("static" == c.position || "relative" == c.position) {
                        var d = c;
                        break
                    }
                } return d ? parseInt(d.marginBottom, 10) : 0
        };

        function ul(a) {
            var b = this;
            this.win = a;
            this.G = Xc(a);
            a = this.win.document;
            var c = a.documentElement,
                d = c.className;
            c.classList.add("i-amphtml-ios-embed");
            var e = a.createElement("html");
            this.X = e;
            e.id = "i-amphtml-wrapper";
            e.className = d;
            this.La = new Y;
            this.Ka = new Y;
            this.Ab = this.Kf.bind(this);
            this.zb = function() {
                return b.Ka.fire()
            };
            this.da = 0;
            this.Uf = !1;
            Db(a, this.Vf.bind(this));
            uj(a).then(function() {
                c.classList.add("i-amphtml-ios-overscroll")
            });
            G().fine("Viewport", "initialized ios-embed-wrapper viewport")
        }
        g = ul.prototype;
        g.ensureReadyForElements = function() {
            this.Vf()
        };
        g.Vf = function() {
            if (!this.Uf) {
                this.Uf = !0;
                var a = this.win.document,
                    b = a.body;
                a.documentElement.appendChild(this.X);
                this.X.appendChild(b);
                Object.defineProperty(a, "body", {
                    get: function() {
                        return b
                    }
                });
                this.Kf()
            }
        };
        g.connect = function() {
            this.win.addEventListener("resize", this.zb);
            this.X.addEventListener("scroll", this.Ab)
        };
        g.disconnect = function() {
            this.win.removeEventListener("resize", this.zb);
            this.X.removeEventListener("scroll", this.Ab)
        };
        g.getBorderTop = function() {
            return 1
        };
        g.requiresFixedLayerTransfer = function() {
            return U(this.win, "ios-fixed-no-transfer") ? 12.2 > parseFloat(Q(this.win).getIosVersionString()) : !0
        };
        g.overrideGlobalScrollTo = function() {
            return !0
        };
        g.supportsPositionFixed = function() {
            return !0
        };
        g.onScroll = function(a) {
            this.La.add(a)
        };
        g.onResize = function(a) {
            this.Ka.add(a)
        };
        g.updatePaddingTop = function(a) {
            this.da = a;
            Ce(this.X, {
                "padding-top": a + "px"
            })
        };
        g.hideViewerHeader = function(a) {
            a || this.updatePaddingTop(0)
        };
        g.showViewerHeader = function(a, b) {
            a || this.updatePaddingTop(b)
        };
        g.disableScroll = function() {
            this.X.classList.add("i-amphtml-scroll-disabled")
        };
        g.resetScroll = function() {
            this.X.classList.remove("i-amphtml-scroll-disabled")
        };
        g.updateLightboxMode = function() {
            return v()
        };
        g.getSize = function() {
            return {
                width: this.win.innerWidth,
                height: this.win.innerHeight
            }
        };
        g.getScrollTop = function() {
            return this.X.scrollTop
        };
        g.getScrollLeft = function() {
            return 0
        };
        g.getScrollWidth = function() {
            return this.X.scrollWidth
        };
        g.getScrollHeight = function() {
            return this.X.scrollHeight
        };
        g.getContentHeight = function() {
            var a = this.win.document.body,
                b = a.getBoundingClientRect().height,
                c = sl(this.win, a);
            a = this.win.getComputedStyle(a) || J();
            return parseInt(a.marginTop, 10) + this.da + b + c + parseInt(a.marginBottom, 10)
        };
        g.contentHeightChanged = function() {};
        g.getLayoutRect = function(a, b, c, d) {
            a = d || a.getBoundingClientRect();
            var e = void 0 != c ? c : this.getScrollTop(),
                f = void 0 != b ? b : this.getScrollLeft();
            return lc(Math.round(a.left + f), Math.round(a.top + e), Math.round(a.width), Math.round(a.height))
        };
        g.getRootClientRectAsync = function() {
            return Promise.resolve(null)
        };
        g.setScrollTop = function(a) {
            this.X.scrollTop = a || 1
        };
        g.Kf = function(a) {
            0 == this.X.scrollTop && (this.X.scrollTop = 1, a && a.preventDefault());
            a && this.La.fire()
        };
        g.getScrollingElement = function() {
            return this.X
        };
        g.getScrollingElementScrollsLikeViewport = function() {
            return !1
        };

        function vl(a) {
            var b = this;
            this.ampdoc = a;
            this.win = a.win;
            this.ta = Q(this.win);
            this.La = new Y;
            this.Ka = new Y;
            this.Ab = this.Gg.bind(this);
            this.zb = function() {
                return b.Ka.fire()
            };
            G().fine("Viewport", "initialized natural viewport")
        }
        g = vl.prototype;
        g.Gg = function() {
            this.La.fire()
        };
        g.connect = function() {
            this.win.addEventListener("scroll", this.Ab);
            this.win.addEventListener("resize", this.zb)
        };
        g.disconnect = function() {
            this.win.removeEventListener("scroll", this.Ab);
            this.win.removeEventListener("resize", this.zb)
        };
        g.ensureReadyForElements = function() {};
        g.getBorderTop = function() {
            return 0
        };
        g.requiresFixedLayerTransfer = function() {
            return !1
        };
        g.overrideGlobalScrollTo = function() {
            return !1
        };
        g.supportsPositionFixed = function() {
            return !0
        };
        g.onScroll = function(a) {
            this.La.add(a)
        };
        g.onResize = function(a) {
            this.Ka.add(a)
        };
        g.updatePaddingTop = function(a) {
            Ce(this.win.document.documentElement, {
                "padding-top": a + "px"
            })
        };
        g.hideViewerHeader = function(a) {
            a || this.updatePaddingTop(0)
        };
        g.showViewerHeader = function(a, b) {
            a || this.updatePaddingTop(b)
        };
        g.disableScroll = function() {
            this.win.document.documentElement.classList.add("i-amphtml-scroll-disabled")
        };
        g.resetScroll = function() {
            this.win.document.documentElement.classList.remove("i-amphtml-scroll-disabled")
        };
        g.updateLightboxMode = function() {
            return v()
        };
        g.getSize = function() {
            var a = this.win.innerWidth,
                b = this.win.innerHeight;
            if (a && b) return {
                width: a,
                height: b
            };
            var c = this.win.document.documentElement;
            return {
                width: c.clientWidth,
                height: c.clientHeight
            }
        };
        g.getScrollTop = function() {
            var a = this.getScrollingElement().scrollTop || this.win.pageYOffset,
                b = this.ampdoc.getRootNode().host;
            return b ? a - b.offsetTop : a
        };
        g.getScrollLeft = function() {
            return 0
        };
        g.getScrollWidth = function() {
            return this.getScrollingElement().scrollWidth
        };
        g.getScrollHeight = function() {
            return this.getScrollingElement().scrollHeight
        };
        g.getContentHeight = function() {
            var a = this.getScrollingElement(),
                b = a.getBoundingClientRect(),
                c = b.top + this.getScrollTop(),
                d = Q(this.win).isSafari() ? sl(this.win, a) : 0;
            a = this.win.getComputedStyle(a) || J();
            return c + parseInt(a.marginTop, 10) + b.height + d + parseInt(a.marginBottom, 10)
        };
        g.contentHeightChanged = function() {};
        g.getLayoutRect = function(a, b, c, d) {
            a = d || a.getBoundingClientRect();
            c = void 0 != c ? c : this.getScrollTop();
            b = void 0 != b ? b : this.getScrollLeft();
            return lc(Math.round(a.left + b), Math.round(a.top + c), Math.round(a.width), Math.round(a.height))
        };
        g.getRootClientRectAsync = function() {
            return Promise.resolve(null)
        };
        g.setScrollTop = function(a) {
            this.getScrollingElement().scrollTop = a
        };
        g.getScrollingElement = function() {
            var a = this.win.document;
            return a.scrollingElement ? a.scrollingElement : a.body && this.ta.isWebKit() ? a.body : a.documentElement
        };
        g.getScrollingElementScrollsLikeViewport = function() {
            return !0
        };

        function wl(a, b) {
            return function(c) {
                return a + (b - a) * c
            }
        };

        function xl(a, b, c) {
            var d = this,
                e = a.win;
            this.ampdoc = a;
            this.Gd = this.ampdoc.win.document;
            this.o = b;
            this.h = c;
            this.za = this.Z = this.Zb = null;
            this.oe = !1;
            this.Rc = null;
            this.da = Number(c.getParam("paddingTop") || 0);
            this.uc = 0;
            this.P = P(e);
            this.G = Xc(e);
            this.pe = !1;
            this.qe = null;
            this.zh = 0;
            this.Ze = new Y;
            this.La = new Y;
            this.Ka = new Y;
            this.he = this.hc = void 0;
            this.S = null;
            this.h.onMessage("viewport", this.Lh.bind(this));
            this.h.onMessage("scroll", this.Mh.bind(this));
            this.h.onMessage("disableScroll", this.yg.bind(this));
            this.h.isEmbedded() &&
                this.o.updatePaddingTop(this.da);
            this.o.onScroll(this.Ah.bind(this));
            this.o.onResize(this.Rf.bind(this));
            this.onScroll(this.Bh.bind(this));
            this.ha = !1;
            this.ampdoc.onVisibilityChanged(this.dg.bind(this));
            this.dg();
            var f = this.Gd.documentElement;
            a.isSingleDoc() && f.classList.add("i-amphtml-singledoc");
            c.isEmbedded() ? f.classList.add("i-amphtml-embedded") : f.classList.add("i-amphtml-standalone");
            Vb(e) && f.classList.add("i-amphtml-iframed");
            "1" === c.getParam("webview") && f.classList.add("i-amphtml-webview");
            Vb(e) && "scrollRestoration" in e.history && (e.history.scrollRestoration = "manual");
            if (this.o.overrideGlobalScrollTo()) try {
                Object.defineProperty(e, "scrollTo", {
                    value: function(h, k) {
                        return d.setScrollTop(k)
                    }
                }), ["pageYOffset", "scrollY"].forEach(function(h) {
                    Object.defineProperty(e, h, {
                        get: function() {
                            return d.getScrollTop()
                        }
                    })
                })
            } catch (h) {}
            Q(e).isIos() && Vb(e) && this.ampdoc.whenReady().then(function() {
                return e.scrollTo(-.1, 0)
            })
        }
        g = xl.prototype;
        g.dispose = function() {
            this.o.disconnect()
        };
        g.ensureReadyForElements = function() {
            this.o.ensureReadyForElements()
        };
        g.dg = function() {
            var a = this.ampdoc.isVisible();
            a != this.ha && ((this.ha = a) ? (this.o.connect(), this.Z && this.Rf(), this.za && (this.za = null, this.getScrollTop())) : this.o.disconnect())
        };
        g.getPaddingTop = function() {
            return this.da
        };
        g.getScrollTop = function() {
            null == this.za && (this.za = this.o.getScrollTop());
            return this.za
        };
        g.getScrollLeft = function() {
            null == this.Rc && (this.Rc = this.o.getScrollLeft());
            return this.Rc
        };
        g.setScrollTop = function(a) {
            this.za = null;
            this.o.setScrollTop(a)
        };
        g.updatePaddingBottom = function(a) {
            this.ampdoc.waitForBodyOpen().then(function(b) {
                W(b, "borderBottom", a + "px solid transparent")
            })
        };
        g.getSize = function() {
            if (this.Z) return this.Z;
            this.Z = this.o.getSize();
            if (0 == this.Z.width || 0 == this.Z.height) {
                var a = this.ampdoc.getVisibilityState();
                ("prerender" == a || "visible" == a) && .01 > Math.random() && G().error("Viewport", "viewport has zero dimensions")
            }
            return this.Z
        };
        g.getHeight = function() {
            return this.getSize().height
        };
        g.getWidth = function() {
            return this.getSize().width
        };
        g.getScrollWidth = function() {
            return this.o.getScrollWidth()
        };
        g.getScrollHeight = function() {
            return this.o.getScrollHeight()
        };
        g.getContentHeight = function() {
            return this.o.getContentHeight()
        };
        g.contentHeightChanged = function() {
            this.o.contentHeightChanged()
        };
        g.getRect = function() {
            if (null == this.Zb) {
                var a = this.getScrollTop(),
                    b = this.getScrollLeft(),
                    c = this.getSize();
                this.Zb = lc(b, a, c.width, c.height)
            }
            return this.Zb
        };
        g.getLayoutRect = function(a, b) {
            var c = this.getScrollLeft(),
                d = this.getScrollTop(),
                e = Ic(a, this.ampdoc.win);
            return e ? (a = this.o.getLayoutRect(a, 0, 0, b), c = this.o.getLayoutRect(e, c, d), lc(Math.round(a.left + c.left), Math.round(a.top + c.top), Math.round(a.width), Math.round(a.height))) : this.o.getLayoutRect(a, c, d, b)
        };
        g.getClientRectAsync = function(a) {
            var b = this.G.measurePromise(function() {
                    return a.getBoundingClientRect()
                }),
                c = this.o.getRootClientRectAsync(),
                d = Ic(a, this.ampdoc.win);
            d && (c = this.G.measurePromise(function() {
                return d.getBoundingClientRect()
            }));
            return Promise.all([b, c]).then(function(e) {
                var f = e[0];
                return (e = e[1]) ? oc(f, e.left, e.top) : lc(Number(f.left), Number(f.top), Number(f.width), Number(f.height))
            })
        };
        g.supportsPositionFixed = function() {
            return this.o.supportsPositionFixed()
        };
        g.isDeclaredFixed = function(a) {
            return this.S ? this.S.isDeclaredFixed(a) : !1
        };
        g.scrollIntoView = function(a) {
            var b = this;
            return yl(this, a).then(function(c) {
                return zl(b, a, c)
            })
        };

        function zl(a, b, c) {
            var d = a.o.getLayoutRect(b).top;
            tb(function() {
                return Math.max(0, d - a.da)
            }).then(function(e) {
                return Al(a, c, e)
            })
        }
        g.animateScrollIntoView = function(a, b, c, d) {
            var e = this,
                f = void 0 === b ? "top" : b;
            return yl(this, a).then(function(h) {
                return e.animateScrollWithinParent(a, h, f, c, d)
            })
        };
        g.animateScrollWithinParent = function(a, b, c, d, e) {
            var f = this,
                h = this.o.getLayoutRect(a),
                k = (b == this.o.getScrollingElement() ? this.getSize() : this.getLayoutRect(b)).height;
            switch (c) {
                case "bottom":
                    var l = -k + h.height;
                    break;
                case "center":
                    l = -k / 2 + h.height / 2;
                    break;
                default:
                    l = 0
            }
            return Bl(this, b).then(function(m) {
                var n = Math.max(0, h.top - f.da + l);
                if (n != m) return Cl(f, b, m, n, d, e)
            })
        };

        function Cl(a, b, c, d, e, f) {
            var h = void 0 === f ? "ease-in" : f;
            e = void 0 !== e ? e : Dl(c, d);
            var k = wl(c, d);
            return pl(b, function(l) {
                Al(a, b, k(l))
            }, e, h).thenAlways(function() {
                Al(a, b, d)
            })
        }

        function yl(a, b) {
            return a.G.measurePromise(function() {
                return Kb(b, ".i-amphtml-scrollable") || a.o.getScrollingElement()
            })
        }

        function Al(a, b, c) {
            b == a.o.getScrollingElement() ? a.o.setScrollTop(c) : a.G.mutate(function() {
                b.scrollTop = c
            })
        }

        function Bl(a, b) {
            return b == a.o.getScrollingElement() ? tb(function() {
                return a.getScrollTop()
            }) : a.G.measurePromise(function() {
                return b.scrollTop
            })
        }
        g.getScrollingElement = function() {
            return this.qe ? this.qe : this.qe = this.o.getScrollingElement()
        };
        g.onChanged = function(a) {
            return this.Ze.add(a)
        };
        g.onScroll = function(a) {
            return this.La.add(a)
        };
        g.onResize = function(a) {
            return this.Ka.add(a)
        };
        g.enterLightboxMode = function(a, b) {
            this.h.sendMessage("requestFullOverlay", {}, !0);
            this.enterOverlayMode();
            this.S && this.S.enterLightbox(a, b);
            a && this.maybeEnterFieLightboxMode(a);
            return this.o.updateLightboxMode(!0)
        };
        g.leaveLightboxMode = function(a) {
            this.h.sendMessage("cancelFullOverlay", {}, !0);
            this.S && this.S.leaveLightbox();
            this.leaveOverlayMode();
            a && this.maybeLeaveFieLightboxMode(a);
            return this.o.updateLightboxMode(!1)
        };
        g.isLightboxExperimentOn = function() {
            return U(this.ampdoc.win, "amp-lightbox-a4a-proto")
        };
        g.maybeEnterFieLightboxMode = function(a) {
            var b = El(this, a);
            b && (this.isLightboxExperimentOn(), b.enterFullOverlayMode())
        };
        g.maybeLeaveFieLightboxMode = function(a) {
            (a = El(this, a)) && a.leaveFullOverlayMode()
        };

        function El(a, b) {
            var c = Ic(b, a.ampdoc.win);
            return c && c.__AMP_EMBED__
        }
        g.enterOverlayMode = function() {
            this.disableTouchZoom();
            this.disableScroll()
        };
        g.leaveOverlayMode = function() {
            this.resetScroll();
            this.restoreOriginalTouchZoom()
        };
        g.disableScroll = function() {
            var a = this,
                b = this.ampdoc.win,
                c = b.document.documentElement,
                d;
            this.G.measure(function() {
                var e = (b.getComputedStyle(c) || J()).marginRight;
                var f = a.ampdoc.win;
                f = f.innerWidth - f.document.documentElement.clientWidth;
                d = parseInt(e, 10) + f
            });
            this.G.mutate(function() {
                W(c, "margin-right", d, "px");
                a.o.disableScroll()
            })
        };
        g.resetScroll = function() {
            var a = this,
                b = this.ampdoc.win.document.documentElement;
            this.G.mutate(function() {
                W(b, "margin-right", "");
                a.o.resetScroll()
            })
        };
        g.resetTouchZoom = function() {
            var a = this,
                b = this.ampdoc.win.innerHeight,
                c = this.Gd.documentElement.clientHeight;
            b && c && b === c || this.disableTouchZoom() && this.P.delay(function() {
                a.restoreOriginalTouchZoom()
            }, 50)
        };
        g.disableTouchZoom = function() {
            var a = Fl(this);
            if (!a) return !1;
            var b = a.content,
                c = {
                    "maximum-scale": "1",
                    "user-scalable": "no"
                };
            var d = Object.create(null);
            if (b)
                for (var e = b.split(/,|;/), f = 0; f < e.length; f++) {
                    var h = e[f].split("="),
                        k = h[0].trim();
                    h = h[1];
                    h = (h || "").trim();
                    k && (d[k] = h)
                }
            e = !1;
            for (var l in c) d[l] !== c[l] && (e = !0, void 0 !== c[l] ? d[l] = c[l] : delete d[l]);
            if (e) {
                b = "";
                for (var m in d) 0 < b.length && (b += ","), b = d[m] ? b + (m + "=" + d[m]) : b + m;
                d = b
            } else d = b;
            return Gl(this, d)
        };
        g.restoreOriginalTouchZoom = function() {
            return void 0 !== this.he ? Gl(this, this.he) : !1
        };
        g.updateFixedLayer = function() {
            return this.S ? this.S.update() : v()
        };
        g.addToFixedLayer = function(a, b) {
            return this.S ? this.S.addElement(a, b) : v()
        };
        g.removeFromFixedLayer = function(a) {
            this.S && this.S.removeElement(a)
        };
        g.createFixedLayer = function(a) {
            var b = this;
            this.S = new a(this.ampdoc, this.G, this.o.getBorderTop(), this.da, this.o.requiresFixedLayerTransfer());
            this.ampdoc.whenReady().then(function() {
                return b.S.setup()
            })
        };

        function Gl(a, b) {
            return (a = Fl(a)) && a.content != b ? (G().fine("Viewport", "changed viewport meta to:", b), a.content = b, !0) : !1
        }

        function Fl(a) {
            if (Vb(a.ampdoc.win)) return null;
            void 0 === a.hc && (a.hc = a.Gd.querySelector("meta[name=viewport]"), a.hc && (a.he = a.hc.content));
            return a.hc
        }
        g.Mh = function(a) {
            this.setScrollTop(a.scrollTop)
        };
        g.Lh = function(a) {
            var b = this,
                c = a.paddingTop,
                d = a.duration || 0,
                e = a.curve,
                f = a["transient"];
            if (void 0 != c && c != this.da && (this.uc = this.da, this.da = c, this.S)) {
                var h = this.S.animateFixedElements(this.da, this.uc, d, e, f);
                c < this.uc ? this.o.hideViewerHeader(f, this.uc) : h.then(function() {
                    b.o.showViewerHeader(f, c)
                })
            }
        };
        g.yg = function(a) {
            a ? this.disableScroll() : this.resetScroll()
        };

        function Hl(a, b, c) {
            var d = a.getSize(),
                e = a.getScrollTop(),
                f = a.getScrollLeft();
            G().fine("Viewport", "changed event:", "relayoutAll=", b, "top=", e, "left=", f, "bottom=", e + d.height, "velocity=", c);
            a.Ze.fire({
                relayoutAll: b,
                top: e,
                left: f,
                width: d.width,
                height: d.height,
                velocity: c
            })
        }
        g.Ah = function() {
            var a = this;
            this.Zb = null;
            this.zh++;
            this.Rc = this.o.getScrollLeft();
            var b = this.o.getScrollTop();
            if (!(0 > b)) {
                this.za = b;
                if (!this.pe) {
                    this.pe = !0;
                    var c = Date.now();
                    this.P.delay(function() {
                        a.G.measure(function() {
                            a.Wc(c, b)
                        })
                    }, 36)
                }
                this.La.fire()
            }
        };
        g.Wc = function(a, b) {
            var c = this,
                d = this.za = this.o.getScrollTop(),
                e = Date.now(),
                f = 0;
            e != a && (f = (d - b) / (e - a));
            G().fine("Viewport", "scroll: scrollTop=" + d + "; velocity=" + f);
            .03 > Math.abs(f) ? (Hl(this, !1, f), this.pe = !1) : this.P.delay(function() {
                return c.G.measure(c.Wc.bind(c, e, d))
            }, 20)
        };
        g.Bh = function() {
            var a = this;
            this.oe || (this.oe = !0, this.G.measure(function() {
                a.oe = !1;
                a.h.sendMessage("scroll", K({
                    scrollTop: a.getScrollTop()
                }), !0)
            }))
        };
        g.Rf = function() {
            var a = this;
            this.Zb = null;
            var b = this.Z;
            this.Z = null;
            var c = this.getSize();
            this.updateFixedLayer().then(function() {
                var d = !b || b.width != c.width;
                Hl(a, d, 0);
                (d || b.height != c.height) && a.Ka.fire({
                    relayoutAll: d,
                    width: c.width,
                    height: c.height
                })
            })
        };

        function Dl(a, b) {
            var c = Math;
            return c.floor.call(c, Math.min(Math.max(.65 * Math.abs(a - b), 0), 500))
        }

        function Il(a) {
            var b = R(a),
                c = a.win;
            c = a.isSingleDoc() && (Q(c).isIos() && Vb(c) && b.isEmbedded() && !b.hasCapability("iframeScroll") ? Jl : Kl) == Jl ? new ul(c) : new vl(a);
            return new xl(a, c, b)
        }
        var Kl = "natural",
            Jl = "natural-ios-embed";
        var Ll = ["<div class=i-amphtml-jank-meter></div>"];

        function Ml(a) {
            this.A = a;
            this.xc = this.wc = this.ec = this.mc = 0;
            this.$b = null;
            this.xa = yc(a);
            this.Pb = this.Ie = this.Je = null;
            Nl(this)
        }
        Ml.prototype.onScheduled = function() {
            Ol(this) && null == this.$b && (this.$b = this.A.Date.now())
        };
        Ml.prototype.onRun = function() {
            if (Ol(this) && null != this.$b) {
                var a = this.A.Date.now() - this.$b;
                this.$b = null;
                this.ec++;
                16 < a && (this.mc++, G().info("JANK", "Paint latency: " + a + "ms"));
                if (this.xa && 200 == this.ec) {
                    var b = this.A.Math.floor((this.ec - this.mc) / this.ec * 100);
                    this.xa.tickDelta("gfp", b);
                    this.xa.tickDelta("bf", this.mc);
                    this.Pb && (this.xa.tickDelta("lts", this.xc), this.xa.tickDelta("ltc", this.wc), this.Pb.disconnect(), this.Pb = null);
                    var c = 0;
                    this.Je && null != this.Ie && (c = this.A.Math.max(0, this.A.Math.floor(100 * this.Je.level -
                        this.Ie)), this.xa.tickDelta("bd", c));
                    this.xa.flush();
                    if (U(this.A, "jank-meter")) {
                        var d = c,
                            e = this.A.document,
                            f = Td(e)(Ll);
                        f.textContent = "bf:" + this.mc + ", lts: " + this.xc + ", ltc:" + (this.wc + ", bd:" + d);
                        e.body.appendChild(f)
                    }
                }
            }
        };

        function Ol(a) {
            return U(a.A, "jank-meter") || a.xa && a.xa.isPerformanceTrackingOn() && 200 > a.ec
        }

        function Nl(a) {
            Ol(a) && Pl(a.A) && (a.Pb = new a.A.PerformanceObserver(function(b) {
                for (var c = b.getEntries(), d = 0; d < c.length; d++)
                    if ("longtask" == c[d].entryType) {
                        var e = a.A.Math.floor(c[d].duration / 50);
                        "cross-origin-descendant" == c[d].name ? (a.wc += e, D().info("LONGTASK", "from child frame " + c[d].duration + "ms")) : (a.xc += e, G().info("LONGTASK", "from self frame " + c[d].duration + "ms"))
                    }
            }), a.Pb.observe({
                entryTypes: ["longtask"]
            }))
        }

        function Pl(a) {
            return !!a.PerformanceObserver && !!a.TaskAttributionTiming && "containerName" in a.TaskAttributionTiming.prototype
        };

        function Ql(a) {
            var b = Be(a, "visibilityState", !0);
            if (a[b]) return a[b];
            var c = Be(a, "hidden", !0);
            return a[c] ? a[c] ? "hidden" : "visible" : "visible"
        }

        function Rl(a, b) {
            if (a.addEventListener) {
                var c = Sl(a);
                c && a.addEventListener(c, b)
            }
        }

        function Tl(a, b) {
            if (a.removeEventListener) {
                var c = Sl(a);
                c && a.removeEventListener(c, b)
            }
        }

        function Sl(a) {
            a = Be(a, "hidden", !0);
            var b = a.indexOf("Hidden");
            return -1 != b ? a.substring(0, b) + "Visibilitychange" : "visibilitychange"
        };

        function Ul(a) {
            this.win = a;
            this.Ca = Sc(this.win);
            this.qh = Vl(this);
            this.M = [];
            this.ee = [];
            this.Ma = [];
            this.de = [];
            this.va = !1;
            this.ce = this.Bc = null;
            this.qd = this.yh.bind(this);
            this.Ng = new Ri(this.win, this.qd, 16);
            this.He = new Ri(this.win, this.qd, 40);
            this.pd = this.mh.bind(this);
            if (this.Ca.isSingleDoc()) this.Ca.getSingleDoc().onVisibilityChanged(this.pd);
            else Rl(this.win.document, this.pd);
            this.Af = new Ml(this.win)
        }
        g = Ul.prototype;
        g.dispose = function() {
            Tl(this.win.document, this.pd)
        };
        g.mh = function() {
            this.va && Wl(this)
        };
        g.run = function(a, b) {
            this.M.push(a);
            this.Ma.push(b || void 0);
            this.ya()
        };
        g.runPromise = function(a, b) {
            this.run(a, b);
            if (this.Bc) return this.Bc;
            a = new L;
            this.ce = a.resolve;
            return this.Bc = a.promise
        };
        g.createTask = function(a) {
            var b = this;
            return function(c) {
                b.run(a, c)
            }
        };
        g.mutate = function(a) {
            this.run({
                measure: void 0,
                mutate: a
            })
        };
        g.mutatePromise = function(a) {
            return this.runPromise({
                measure: void 0,
                mutate: a
            })
        };
        g.measure = function(a) {
            this.run({
                measure: a,
                mutate: void 0
            })
        };
        g.measurePromise = function(a) {
            var b = this;
            return new Promise(function(c) {
                b.measure(function() {
                    c(a())
                })
            })
        };
        g.canAnimate = function(a) {
            return Xl(this, a)
        };

        function Xl(a, b) {
            return "visible" != Ql(a.win.document) ? !1 : a.Ca.isSingleDoc() ? a.Ca.getSingleDoc().isVisible() : b ? (a = a.Ca.getAmpDocIfAvailable(b), !a || a.isVisible()) : !0
        }
        g.runAnim = function(a, b, c) {
            if (!Xl(this, a)) return G().warn("VSYNC", "Did not schedule a vsync request, because document was invisible"), !1;
            this.run(b, c);
            return !0
        };
        g.createAnimTask = function(a, b) {
            var c = this;
            return function(d) {
                return c.runAnim(a, b, d)
            }
        };
        g.runAnimMutateSeries = function(a, b, c) {
            var d = this;
            return Xl(this, a) ? new Promise(function(e, f) {
                var h = Date.now(),
                    k = 0,
                    l = d.createAnimTask(a, {
                        mutate: function(m) {
                            var n = Date.now() - h;
                            b(n, n - k, m) ? c && n > c ? f(Error("timeout")) : (k = n, l(m)) : e()
                        }
                    });
                l({})
            }) : Promise.reject(Df())
        };
        g.ya = function() {
            this.va || (this.va = !0, this.Af.onScheduled(), Wl(this))
        };

        function Wl(a) {
            Xl(a) ? (a.qh(a.qd), a.He.schedule()) : a.Ng.schedule()
        }
        g.yh = function() {
            this.He.cancel();
            this.va = !1;
            this.Af.onRun();
            var a = this.M,
                b = this.Ma,
                c = this.ce;
            this.Bc = this.ce = null;
            this.M = this.ee;
            this.Ma = this.de;
            for (var d = 0; d < a.length; d++) a[d].measure && !Yl(a[d].measure, b[d]) && (a[d].mutate = void 0);
            for (d = 0; d < a.length; d++) a[d].mutate && Yl(a[d].mutate, b[d]);
            this.ee = a;
            this.de = b;
            this.ee.length = 0;
            this.de.length = 0;
            c && c()
        };

        function Vl(a) {
            var b = a.win.requestAnimationFrame || a.win.webkitRequestAnimationFrame;
            if (b) return b.bind(a.win);
            var c = 0;
            return function(d) {
                var e = Date.now(),
                    f = Math.max(0, 16 - (e - c));
                c = e + f;
                a.win.setTimeout(d, f)
            }
        }

        function Yl(a, b) {
            try {
                void 0 !== a(b) && G().error("VSYNC", "callback returned a value but vsync cannot propogate it: %s", a.toString())
            } catch (c) {
                return ob(c), !1
            }
            return !0
        };

        function Zl(a) {
            M(a, "crypto", ih);
            M(a, "batched-xhr", Ag);
            M(a, "platform", oj);
            M(a, "templates", lk);
            M(a, "timer", ok);
            M(a, "timer", ok);
            M(a, "vsync", Ul);
            M(a, "xhr", yg);
            M(a, "input", Si);
            M(a, "preconnect", yj)
        }

        function $l(a) {
            a.getParent();
            N(a, "url", pk, !0);
            N(a, "documentInfo", lh);
            N(a, "cid", Pg);
            N(a, "viewer", Xk, !0);
            N(a, "viewport", Il, !0);
            N(a, "hidden-observer", Ph);
            N(a, "history", fi);
            N(a, "resources", Jj);
            N(a, "owners", hj);
            N(a, "mutator", bj);
            Vk(a);
            N(a, "action", Qf, !0);
            N(a, "standard-actions", Yj, !0);
            jk(a);
            N(a, "navigation", Bh, !0);
            Mh(a);
            N(a, "loadingIndicator", Zi)
        };
        var am = ["amp-ad", "amp-embed", "amp-video"],
            bm = ["amp-mustache"];

        function cm(a) {
            this.win = a;
            this.Ca = Sc(a);
            this.Dd = {};
            this.cb = null
        }
        g = cm.prototype;
        g.registerExtension = function(a, b, c) {
            var d = dm(this, a, !0);
            try {
                this.cb = a, b(c, c._), d.loaded = !0, d.resolve && d.resolve(d.extension)
            } catch (e) {
                throw d.error = e, d.reject && d.reject(e), e;
            } finally {
                this.cb = null
            }
        };
        g.waitForExtension = function(a, b, c) {
            return P(a).timeoutPromise(c || 16E3, em(dm(this, b, !1)), "Render timeout waiting for extension " + b + " to be load.")
        };
        g.preloadExtension = function(a, b) {
            "amp-embed" == a && (a = "amp-ad");
            var c = dm(this, a, !1);
            if (c.loaded || c.error) var d = !1;
            else void 0 === c.scriptPresent && (d = fm(this, a), c.scriptPresent = 0 < d.length), d = !c.scriptPresent;
            if (d) {
                d = b;
                b = this.win.document.createElement("script");
                b.async = !0;
                a.startsWith("_") ? d = "" : b.setAttribute(0 <= bm.indexOf(a) ? "custom-template" : "custom-element", a);
                b.setAttribute("data-script", a);
                b.setAttribute("i-amphtml-inserted", "");
                z().esm && b.setAttribute("type", "module");
                var e = this.win.document.head.querySelector("script[nonce]");
                e && b.setAttribute("nonce", e.getAttribute("nonce"));
                b.setAttribute("crossorigin", "anonymous");
                e = z().esm ? ".mjs" : ".js";
                var f = Xa.cdn;
                var h = z().rtvVersion;
                null == d && (d = "0.1");
                b.src = f + "/rtv/" + h + "/v0/" + a + (d ? "-" + d : "") + e;
                this.win.document.head.appendChild(b);
                c.scriptPresent = !0
            }
            return em(c)
        };
        g.installExtensionForDoc = function(a, b, c) {
            var d = this,
                e = a.getRootNode(),
                f = e.__AMP_EXT_LDR;
            f || (f = e.__AMP_EXT_LDR = J());
            if (f[b]) return f[b];
            Li(a.win, b);
            return f[b] = this.preloadExtension(b, c).then(function() {
                return d.installExtensionInDoc(a, b)
            })
        };
        g.reloadExtension = function(a) {
            var b = fm(this, a, !1);
            if (!b.length) return D().error("reloadExtension", 'Extension script for "%s" is missing or was already reloaded.', a), null;
            var c = this.Dd[a];
            c && (c.scriptPresent = !1);
            b.forEach(function(d) {
                return d.setAttribute("i-amphtml-loaded-new-version", a)
            });
            c = pf(b[0].src);
            return this.preloadExtension(a, c.extensionVersion)
        };

        function fm(a, b, c) {
            c = void 0 === c ? !0 : c;
            a = a.win.document.head.querySelectorAll('script[src*="/' + b + '-"]:not([i-amphtml-loaded-new-version])' + (c ? "" : ":not([i-amphtml-inserted])"));
            for (var d = [], e = 0; e < a.length; e++) {
                var f = a[e];
                pf(f.src).extensionId === b && d.push(f)
            }
            return d
        }
        g.loadElementClass = function(a) {
            return this.preloadExtension(a).then(function(b) {
                return b.elements[a].implementationClass
            })
        };
        g.addElement = function(a, b, c) {
            gm(this, a).extension.elements[a] = {
                implementationClass: b,
                css: c
            };
            this.addDocFactory(function(d) {
                hm(d, a, b, c)
            })
        };

        function hm(a, b, c, d) {
            d ? ff(a, d, function() {
                im(a.win, b, c)
            }, !1, b) : im(a.win, b, c)
        }

        function im(a, b, c) {
            var d = Ji(a);
            if (!d[b]) Mi(a, b, c);
            else if (d[b] != c)
                for (I(d[b] == gi, "%s is already registered. The script tag for %s is likely included twice in the page.", b, b), d[b] = c, d = 0; d < Fi.length; d++) {
                    var e = Fi[d];
                    if (e.tagName.toLowerCase() == b && e.ownerDocument.defaultView == a) {
                        try {
                            e.upgrade(c)
                        } catch (f) {
                            Bf(f, e)
                        }
                        Fi.splice(d--, 1)
                    }
                }
            M(a, b, jm)
        }
        g.addService = function(a, b) {
            gm(this).extension.services.push({
                serviceName: a,
                serviceClass: b
            });
            this.addDocFactory(function(c) {
                N(c, a, b, !0)
            })
        };
        g.addDocFactory = function(a, b) {
            var c = gm(this, b);
            c.docFactories.push(a);
            if (this.cb && this.Ca.isSingleDoc()) {
                var d = this.Ca.getAmpDoc(this.win.document);
                (d.declaresExtension(this.cb) || c.auto) && a(d)
            }
        };
        g.preinstallEmbed = function(a, b) {
            var c = a.win;
            km(this.win, c);
            lm(c);
            b.forEach(function(d) {
                am.includes(d) || Li(c, d)
            })
        };
        g.installExtensionsInDoc = function(a, b) {
            var c = this;
            return Promise.all(b.map(function(d) {
                return c.installExtensionInDoc(a, d)
            }))
        };
        g.installExtensionInDoc = function(a, b) {
            var c = dm(this, b, !1);
            return em(c).then(function() {
                a.declareExtension(b);
                c.docFactories.forEach(function(d) {
                    try {
                        d(a)
                    } catch (e) {
                        ob("Doc factory failed: ", e, b)
                    }
                })
            })
        };

        function dm(a, b, c) {
            var d = a.Dd[b];
            d || (d = {
                extension: {
                    elements: {},
                    services: []
                },
                auto: c,
                docFactories: [],
                promise: void 0,
                resolve: void 0,
                reject: void 0,
                loaded: void 0,
                error: void 0,
                scriptPresent: void 0
            }, a.Dd[b] = d);
            return d
        }

        function gm(a, b) {
            a.cb || G().error("extensions", "unknown extension for ", b);
            return dm(a, a.cb || "_UNKNOWN_", !0)
        }

        function em(a) {
            if (!a.promise)
                if (a.loaded) a.promise = Promise.resolve(a.extension);
                else if (a.error) a.promise = Promise.reject(a.error);
            else {
                var b = new L;
                a.promise = b.promise;
                a.resolve = b.resolve;
                a.reject = b.reject
            }
            return a.promise
        }

        function lm(a) {
            am.forEach(function(b) {
                Li(a, b)
            })
        }

        function km(a, b) {
            var c = Ji(a)["amp-img"];
            Mi(b, "amp-img", c || gi);
            a = Ji(a)["amp-pixel"];
            Mi(b, "amp-pixel", a || gi)
        }

        function jm() {
            return {}
        };
        (function() {
            qb = eb;
            G();
            D()
        })();
        (function(a) {
            self.__AMP_REPORT_ERROR = a
        })(function(a, b, c) {
            Bf(b, c);
            b && a && $a(b.message) && !(0 <= b.message.indexOf("\u200b\u200b\u200b\u200b")) && Sc(a).isSingleDoc() && (b = K({
                errorName: b.name,
                errorMessage: b.message
            }), a = Sc(a).getSingleDoc().getRootNode(), wf(a.documentElement || a.body || a, b))
        }.bind(null, self));

        function mm(a) {
            function b(k) {
                function l() {
                    f.then(function() {
                        "function" == typeof k ? k(c.AMP, c.AMP._) : e.registerExtension(k.n, k.f, c.AMP)
                    })
                }
                "function" != typeof k && k.i ? nm(e, k).then(function() {
                    return om(c, k, l)
                }) : om(c, k, l)
            }
            var c = self;
            if (c.__AMP_TAG) v();
            else {
                c.__AMP_TAG = !0;
                var d = c.AMP || [];
                M(c, "extensions", cm);
                var e = Uc(c);
                Zl(c);
                lm(c);
                c.AMP = {
                    win: c,
                    _: c.AMP ? c.AMP._ : void 0
                };
                c.AMP.config = Ya;
                c.AMP.BaseElement = X;
                c.AMP.registerElement = e.addElement.bind(e);
                c.AMP.registerTemplate = function(k, l) {
                    var m = O(c, "templates");
                    if (m.dc[k]) {
                        var n = m.te[k];
                        I(n, "Duplicate template type: %s", k);
                        delete m.te[k];
                        n(l)
                    } else m.dc[k] = Promise.resolve(l)
                };
                c.AMP.registerServiceForDoc = e.addService.bind(e);
                c.AMP.isExperimentOn = U.bind(null, c);
                c.AMP.toggleExperiment = ve.bind(null, c);
                c.AMP.setLogLevel = bb.bind(null);
                c.AMP.setTickFunction = function() {};
                var f = a(c, e);
                for (a = 0; a < d.length; a++) {
                    var h = d[a];
                    if (pm(c, h)) d.splice(a--, 1);
                    else if ("function" == typeof h || "high" == h.p) {
                        try {
                            b(h)
                        } catch (k) {
                            G().error("runtime", "Extension failed: ", k, h.n)
                        }
                        d.splice(a--,
                            1)
                    }
                }
                qm(c, function() {
                    c.AMP.push = function(m) {
                        pm(c, m) || b(m)
                    };
                    for (var k = 0; k < d.length; k++) {
                        var l = d[k];
                        if (!pm(c, l)) try {
                            b(l)
                        } catch (m) {
                            G().error("runtime", "Extension failed: ", m, l.n)
                        }
                    }
                    d.length = 0
                });
                c.AMP.push || (c.AMP.push = d.push.bind(d));
                Q(c).isIos() && W(c.document.documentElement, "cursor", "pointer");
                dd(c);
                c.ResizeObserver && !c.ResizeObserver._stub || Uc(c).preloadExtension("amp-resize-observer-polyfill")
            }
        }

        function nm(a, b) {
            if (Array.isArray(b.i)) return b = b.i.map(function(c) {
                return a.preloadExtension(c)
            }), Promise.all(b);
            if ("string" == typeof b.i) return a.preloadExtension(b.i);
            G().error("RUNTIME", "dependency is neither an array or a string", b.i);
            return v()
        }

        function om(a, b, c) {
            "function" == typeof b || "high" == b.p ? v().then(c) : (c.displayName = b.n, vi(a.document, c))
        }

        function rm() {
            mm(function(a) {
                sm(a);
                tm(a);
                return Eb(a.document).then(function() {
                    Ki(a.AMP.ampdoc)
                })
            })
        }

        function sm(a) {
            var b = a.document.documentElement,
                c = Sc(a).getSingleDoc();
            a.AMP.ampdoc = c;
            c = R(b);
            a.AMP.viewer = c;
            z().development && (a.AMP.toggleRuntime = c.toggleRuntime.bind(c), a.AMP.resources = Wc(b));
            b = Yc(b);
            a.AMP.viewport = {};
            a.AMP.viewport.getScrollLeft = b.getScrollLeft.bind(b);
            a.AMP.viewport.getScrollWidth = b.getScrollWidth.bind(b);
            a.AMP.viewport.getWidth = b.getWidth.bind(b)
        }

        function tm(a) {
            a.AMP.installAmpdocServices = $l.bind(null);
            a.AMP.combinedCss = "html{overflow-x:hidden!important}html.i-amphtml-fie{height:100%!important;width:100%!important}html:not([amp4ads]),html:not([amp4ads]) body{height:auto!important}html:not([amp4ads]) body{margin:0!important}body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}html.i-amphtml-singledoc.i-amphtml-embedded{-ms-touch-action:pan-y pinch-zoom;touch-action:pan-y pinch-zoom}html.i-amphtml-fie>body,html.i-amphtml-singledoc>body{overflow:visible!important}html.i-amphtml-fie:not(.i-amphtml-inabox)>body,html.i-amphtml-singledoc:not(.i-amphtml-inabox)>body{position:relative!important}html.i-amphtml-ios-embed-legacy>body{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important}html.i-amphtml-ios-embed{overflow-y:auto!important;position:static}#i-amphtml-wrapper{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;margin:0!important;display:block!important}html.i-amphtml-ios-embed.i-amphtml-ios-overscroll,html.i-amphtml-ios-embed.i-amphtml-ios-overscroll>#i-amphtml-wrapper{-webkit-overflow-scrolling:touch!important}#i-amphtml-wrapper>body{position:relative!important;border-top:1px solid transparent!important}#i-amphtml-wrapper+body{visibility:visible}#i-amphtml-wrapper+body .i-amphtml-lightbox-element,#i-amphtml-wrapper+body[i-amphtml-lightbox]{visibility:hidden}#i-amphtml-wrapper+body[i-amphtml-lightbox] .i-amphtml-lightbox-element{visibility:visible}#i-amphtml-wrapper.i-amphtml-scroll-disabled,.i-amphtml-scroll-disabled{overflow-x:hidden!important;overflow-y:hidden!important}amp-instagram{padding:54px 0px 0px!important;background-color:#fff}amp-iframe iframe{box-sizing:border-box!important}[amp-access][amp-access-hide]{display:none}[subscriptions-dialog],body:not(.i-amphtml-subs-ready) [subscriptions-action],body:not(.i-amphtml-subs-ready) [subscriptions-section]{display:none!important}amp-experiment,amp-live-list>[update]{display:none}.i-amphtml-jank-meter{position:fixed;background-color:rgba(232,72,95,0.5);bottom:0;right:0;color:#fff;font-size:16px;z-index:1000;padding:5px}amp-list[resizable-children]>.i-amphtml-loading-container.amp-hidden{display:none!important}amp-list [fetch-error],amp-list[load-more] [load-more-button],amp-list[load-more] [load-more-end],amp-list[load-more] [load-more-failed],amp-list[load-more] [load-more-loading]{display:none}amp-list[diffable] div[role=list]{display:block}amp-story-page,amp-story[standalone]{min-height:1px!important;display:block!important;height:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;width:100%!important}amp-story[standalone]{background-color:#202125!important;position:relative!important}amp-story-page{background-color:#757575}amp-story .amp-active>div,amp-story .i-amphtml-loader-background{display:none!important}amp-story-page:not(:first-of-type):not([distance]):not([active]){transform:translateY(1000vh)!important}amp-autocomplete{position:relative!important;display:inline-block!important}amp-autocomplete>input,amp-autocomplete>textarea{padding:0.5rem;border:1px solid rgba(0,0,0,0.33)}.i-amphtml-autocomplete-results,amp-autocomplete>input,amp-autocomplete>textarea{font-size:1rem;line-height:1.5rem}[amp-fx^=fly-in]{visibility:hidden}amp-script[nodom]{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}\n/*# sourceURL=/css/ampdoc.css*/[hidden]{display:none!important}.i-amphtml-element{display:inline-block}.i-amphtml-blurry-placeholder{transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none}[layout=nodisplay]:not(.i-amphtml-element){display:none!important}.i-amphtml-layout-fixed,[layout=fixed][width][height]:not(.i-amphtml-layout-fixed){display:inline-block;position:relative}.i-amphtml-layout-responsive,[layout=responsive][width][height]:not(.i-amphtml-layout-responsive),[width][height][heights]:not([layout]):not(.i-amphtml-layout-responsive),[width][height][sizes]:not([layout]):not(.i-amphtml-layout-responsive){display:block;position:relative}.i-amphtml-layout-intrinsic,[layout=intrinsic][width][height]:not(.i-amphtml-layout-intrinsic){display:inline-block;position:relative;max-width:100%}.i-amphtml-layout-intrinsic .i-amphtml-sizer{max-width:100%}.i-amphtml-intrinsic-sizer{max-width:100%;display:block!important}.i-amphtml-layout-container,.i-amphtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]:not(.i-amphtml-layout-fixed-height){display:block;position:relative}.i-amphtml-layout-fill,.i-amphtml-layout-fill.i-amphtml-notbuilt,[layout=fill]:not(.i-amphtml-layout-fill){display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-layout-flex-item,[layout=flex-item]:not(.i-amphtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-amphtml-layout-fluid{position:relative}.i-amphtml-layout-size-defined{overflow:hidden!important}.i-amphtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-amphtml-sizer{display:block!important}@supports (aspect-ratio:1/1){i-amphtml-sizer.i-amphtml-disable-ar{display:none!important}}.i-amphtml-blurry-placeholder,.i-amphtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-amphtml-layout-size-defined .i-amphtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-replaced-content,.i-amphtml-screen-reader{padding:0!important;border:none!important}.i-amphtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:8px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:12px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:16px!important}.i-amphtml-unresolved{position:relative;overflow:hidden!important}.i-amphtml-select-disabled{-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.i-amphtml-notbuilt,[layout]:not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not([layout]):not(.i-amphtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-amphtml-notbuilt:not(.i-amphtml-layout-container)>*,[layout]:not([layout=container]):not(.i-amphtml-element)>*,[width][height][heights]:not([layout]):not(.i-amphtml-element)>*,[width][height][sizes]:not([layout]):not(.i-amphtml-element)>*{display:none}amp-img:not(.i-amphtml-element)[i-amphtml-ssr]>img.i-amphtml-fill-content{display:block}.i-amphtml-notbuilt:not(.i-amphtml-layout-container),[layout]:not([layout=container]):not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not([layout]):not(.i-amphtml-element){color:transparent!important;line-height:0!important}.i-amphtml-ghost{visibility:hidden!important}.i-amphtml-element>[placeholder],[layout]:not(.i-amphtml-element)>[placeholder],[width][height][heights]:not([layout]):not(.i-amphtml-element)>[placeholder],[width][height][sizes]:not([layout]):not(.i-amphtml-element)>[placeholder]{display:block;line-height:normal}.i-amphtml-element>[placeholder].amp-hidden,.i-amphtml-element>[placeholder].hidden{visibility:hidden}.i-amphtml-element:not(.amp-notsupported)>[fallback],.i-amphtml-layout-container>[placeholder].amp-hidden,.i-amphtml-layout-container>[placeholder].hidden{display:none}.i-amphtml-layout-size-defined>[fallback],.i-amphtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}.i-amphtml-notbuilt>[placeholder]{display:block!important}.i-amphtml-hidden-by-media-query{display:none!important}.i-amphtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-amphtml-element-error:before{content:attr(error-message)}i-amp-scroll-container,i-amphtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active,i-amphtml-scroll-container.amp-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-amphtml-loading-container{display:block!important;pointer-events:none;z-index:1}.i-amphtml-notbuilt>.i-amphtml-loading-container{display:block!important}.i-amphtml-loading-container.amp-hidden{visibility:hidden}.i-amphtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden;display:initial;line-height:normal}.i-amphtml-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{display:none!important}amp-analytics,amp-auto-ads,amp-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}html.i-amphtml-fie>amp-analytics{position:initial!important}[visible-when-invalid]:not(.visible),form [submit-error],form [submit-success],form [submitting]{display:none}amp-accordion{display:block!important}amp-accordion>section{float:none!important}amp-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}amp-accordion,amp-accordion>section{margin:0}amp-accordion:not(.i-amphtml-built)>section>:last-child{display:none!important}amp-accordion:not(.i-amphtml-built)>section[expanded]>:last-child{display:block!important}\n/*# sourceURL=/css/ampshared.css*/"
        }

        function pm(a, b) {
            if ("function" == typeof b) return !1;
            if (b.m) return !0;
            if ("2102130314004" == b.v) return !1;
            Uc(a).reloadExtension(b.n);
            return !0
        }

        function qm(a, b) {
            a.document.body ? 0 < ef(a).length ? b() : P(a).delay(b, 1) : b()
        };

        function um() {
            var a = self;
            sj(a.document, function() {
                return vm(a)
            })
        }

        function vm(a) {
            var b = 1500,
                c = a.performance;
            c && c.timing && c.timing.navigationStart && (b = Date.now() - c.timing.navigationStart);
            var d = Math.max(1, 2100 - b);
            a.setTimeout(function() {
                wm(a);
                var e = a.document.styleSheets;
                if (e) {
                    for (var f = a.document.querySelectorAll('link[rel~="stylesheet"]:not([href^="' + String(Xa.cdn).replace(ub, vb) + '"])'), h = [], k = 0; k < f.length; k++) {
                        for (var l = f[k], m = !1, n = 0; n < e.length; n++)
                            if (e[n].ownerNode == l) {
                                m = !0;
                                break
                            } m || h.push(l)
                    }
                    k = {};
                    for (l = 0; l < h.length; k = {
                            oa: k.oa,
                            ed: k.ed
                        }, l++) k.oa = h[l], k.ed = k.oa.media ||
                        "all", k.oa.media = "print", k.oa.onload = function(q) {
                            return function() {
                                q.oa.media = q.ed;
                                wm(a)
                            }
                        }(k), k.oa.setAttribute("i-amphtml-timeout", d), k.oa.parentNode.insertBefore(k.oa, k.oa.nextSibling)
                }
            }, d)
        }

        function wm(a) {
            a = a.document;
            if (a.fonts && a.fonts.values)
                for (var b = a.fonts.values(); a = b.next();) {
                    var c = a.value;
                    if (!c) break;
                    "loading" == c.status && "display" in c && "auto" == c.display && (c.display = "swap")
                }
        };

        function xm(a) {
            return a.waitForBodyOpen().then(function() {
                var b = a.getBody(),
                    c = Cb(b, function() {
                        return !!b.firstElementChild
                    });
                return P(a.win).timeoutPromise(2E3, c).then(function() {
                    return "AMP-STORY" === b.firstElementChild.tagName
                }, function() {
                    return !1
                })
            })
        };

        function ym(a) {
            var b = a.win;
            sf(["\u26a1", "amp"], b.document) && a.isSingleDoc() && wi(a, function() {
                xm(a).then(function(c) {
                    c || Uc(b).installExtensionForDoc(a, "amp-auto-lightbox")
                })
            })
        };

        function zm(a) {
            this.win = a;
            this.Tc = null;
            var b = J();
            a.name && 0 == a.name.indexOf("__AMP__") && Object.assign(b, x(a.name.substring(7)));
            a.location && a.location.hash && Object.assign(b, x(a.location.hash));
            this.Tc = new Am(a, {
                params: b
            });
            a.document.__AMPDOC = this.Tc
        }
        g = zm.prototype;
        g.isSingleDoc = function() {
            return !!this.Tc
        };
        g.getSingleDoc = function() {
            return this.Tc
        };
        g.getAmpDocIfAvailable = function(a) {
            for (var b = a; b;) {
                var c = a.everAttached && "function" === typeof a.getAmpDoc ? a.getAmpDoc() : null;
                if (c) return c;
                b = Ib(b);
                if (!b) break;
                var d = b.__AMPDOC;
                if (d) return d;
                b = b.host ? b.host : Ic(b, this.win)
            }
            return null
        };
        g.getAmpDoc = function(a) {
            var b = this.getAmpDocIfAvailable(a);
            if (!b) throw G().createError("No ampdoc found for", a);
            return b
        };
        g.installShadowDoc = function(a, b, c) {
            a = new Bm(this.win, a, b, c);
            return b.__AMPDOC = a
        };
        g.installFieDoc = function(a, b, c) {
            var d = b.document;
            a = new Cm(b, a, this.getAmpDoc(b.frameElement), c);
            return d.__AMPDOC = a
        };

        function Dm(a, b, c) {
            var d = this;
            this.win = a;
            this.Of = J();
            this.Gc = b;
            this.I = c && c.signals || new pi;
            this.je = c && c.params || J();
            this.sa = null;
            this.ff = [];
            this.Be = c && c.visibilityState || this.je.visibilityState && G().assertEnumValue(bf, this.je.visibilityState, "VisibilityState") || null;
            this.bd = null;
            this.ig = new Y;
            this.Ef = null;
            this.we = [];
            var e = this.xe.bind(this);
            this.Gc && this.we.push(this.Gc.onVisibilityChanged(e));
            Rl(this.win.document, e);
            this.we.push(function() {
                return Tl(d.win.document, e)
            });
            this.xe()
        }
        g = Dm.prototype;
        g.dispose = function() {
            Lc(this);
            this.we.forEach(function(a) {
                return a()
            })
        };
        g.isSingleDoc = function() {
            return null
        };
        g.getParent = function() {
            return this.Gc
        };
        g.getWin = function() {
            return this.win
        };
        g.signals = function() {
            return this.I
        };
        g.getParam = function(a) {
            a = this.je[a];
            return null == a ? null : a
        };
        g.getMeta = function() {
            var a = this;
            if (this.sa) return J(this.sa);
            this.sa = J();
            var b = this.win.document.head.querySelectorAll("meta[name]");
            Sb(b, function(c) {
                var d = c.getAttribute("name");
                c = c.getAttribute("content");
                d && null !== c && void 0 === a.sa[d] && (a.sa[d] = c)
            });
            return J(this.sa)
        };
        g.getMetaByName = function(a) {
            if (!a) return null;
            a = this.getMeta()[a];
            return void 0 !== a ? a : null
        };
        g.setMetaByName = function() {};
        g.declaresExtension = function(a) {
            return -1 != this.ff.indexOf(a)
        };
        g.declareExtension = function(a) {
            this.declaresExtension(a) || this.ff.push(a)
        };
        g.getRootNode = function() {
            return null
        };
        g.getHeadNode = function() {};
        g.isBodyAvailable = function() {
            return !1
        };
        g.getBody = function() {
            return null
        };
        g.waitForBodyOpen = function() {
            return null
        };
        g.isReady = function() {
            return null
        };
        g.whenReady = function() {
            return null
        };
        g.getUrl = function() {
            return null
        };
        g.getElementById = function(a) {
            return this.getRootNode().getElementById(a)
        };
        g.contains = function(a) {
            return this.getRootNode().contains(a)
        };
        g.overrideVisibilityState = function(a) {
            this.Be != a && (this.Be = a, this.xe())
        };
        g.xe = function() {
            for (var a = Ql(this.win.document), b = "visible", c = this.Gc; c; c = c.getParent())
                if ("visible" != c.getVisibilityState()) {
                    b = c.getVisibilityState();
                    break
                } var d = this.Be || "visible";
            c = "visible" == d && "visible" == b && "visible" == a ? "visible" : "hidden" == a && "paused" == d ? a : "paused" == d || "inactive" == d ? d : "paused" == b || "inactive" == b ? b : "prerender" == d || "prerender" == a || "prerender" == b ? "prerender" : "hidden";
            this.bd != c && (this.bd = c, "visible" == c ? (this.Ef = Date.now(), this.I.signal("-ampdoc-first-visible"), this.I.signal("-ampdoc-next-visible")) :
                this.I.reset("-ampdoc-next-visible"), this.ig.fire())
        };
        g.whenFirstVisible = function() {
            return this.I.whenSignal("-ampdoc-first-visible").then(function() {})
        };
        g.whenNextVisible = function() {
            return this.I.whenSignal("-ampdoc-next-visible").then(function() {})
        };
        g.getFirstVisibleTime = function() {
            return this.I.get("-ampdoc-first-visible")
        };
        g.getLastVisibleTime = function() {
            return this.Ef
        };
        g.getVisibilityState = function() {
            return this.bd
        };
        g.isVisible = function() {
            return "visible" == this.bd
        };
        g.hasBeenVisible = function() {
            return null != this.getLastVisibleTime()
        };
        g.onVisibilityChanged = function(a) {
            return this.ig.add(a)
        };
        g.registerSingleton = function(a) {
            return this.Of[a] ? !1 : this.Of[a] = !0
        };

        function Am(a, b) {
            Dm.call(this, a, null, b);
            var c = this;
            this.xb = this.win.document.body ? Promise.resolve(this.win.document.body) : Eb(this.win.document).then(function() {
                return c.getBody()
            });
            this.Wb = uj(this.win.document)
        }
        p(Am, Dm);
        g = Am.prototype;
        g.isSingleDoc = function() {
            return !0
        };
        g.getRootNode = function() {
            return this.win.document
        };
        g.getUrl = function() {
            return this.win.location.href
        };
        g.getHeadNode = function() {
            return this.win.document.head
        };
        g.isBodyAvailable = function() {
            return !!this.win.document.body
        };
        g.getBody = function() {
            return this.win.document.body
        };
        g.waitForBodyOpen = function() {
            return this.xb
        };
        g.isReady = function() {
            return qj(this.win.document)
        };
        g.whenReady = function() {
            return this.Wb
        };

        function Bm(a, b, c, d) {
            Dm.call(this, a, null, d);
            this.fc = b;
            this.Wf = c;
            this.md = null;
            var e = new L;
            this.xb = e.promise;
            this.Le = e.resolve;
            this.Yb = !1;
            var f = new L;
            this.Wb = f.promise;
            this.Xb = f.resolve
        }
        p(Bm, Dm);
        g = Bm.prototype;
        g.isSingleDoc = function() {
            return !1
        };
        g.getRootNode = function() {
            return this.Wf
        };
        g.getUrl = function() {
            return this.fc
        };
        g.getHeadNode = function() {
            return this.Wf
        };
        g.isBodyAvailable = function() {
            return !!this.md
        };
        g.getBody = function() {
            return this.md
        };
        g.setBody = function(a) {
            this.md = a;
            this.Le(a);
            this.Le = void 0
        };
        g.waitForBodyOpen = function() {
            return this.xb
        };
        g.isReady = function() {
            return this.Yb
        };
        g.setReady = function() {
            this.Yb = !0;
            this.Xb();
            this.Xb = void 0
        };
        g.whenReady = function() {
            return this.Wb
        };
        g.getMeta = function() {
            return J(this.sa)
        };
        g.setMetaByName = function(a, b) {
            this.sa || (this.sa = J());
            this.sa[a] = b
        };

        function Cm(a, b, c, d) {
            Dm.call(this, a, c, d);
            var e = this;
            this.fc = b;
            this.xb = this.win.document.body ? Promise.resolve(this.win.document.body) : Eb(this.win.document).then(function() {
                return e.getBody()
            });
            this.Yb = !1;
            a = new L;
            this.Wb = a.promise;
            this.Xb = a.resolve
        }
        p(Cm, Dm);
        g = Cm.prototype;
        g.isSingleDoc = function() {
            return !1
        };
        g.getRootNode = function() {
            return this.win.document
        };
        g.getUrl = function() {
            return this.fc
        };
        g.getHeadNode = function() {
            return this.win.document.head
        };
        g.isBodyAvailable = function() {
            return !!this.win.document.body
        };
        g.getBody = function() {
            return this.win.document.body
        };
        g.waitForBodyOpen = function() {
            return this.xb
        };
        g.isReady = function() {
            return this.Yb
        };
        g.whenReady = function() {
            return this.Wb
        };
        g.setReady = function() {
            this.Yb = !0;
            this.Xb();
            this.Xb = void 0
        };

        function Em() {
            var a = self;
            M(a, "ampdoc", function() {
                return new zm(a)
            })
        };
        var Fm = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];

        function Gm(a, b, c) {
            a = vc(a);
            return Hm(a, b, function(d) {
                return d.isDisplayed() && (d.overlaps(c) || d.isFixed()) && d.prerenderAllowed() ? !0 : !1
            }).then(function(d) {
                var e = [];
                d.forEach(function(f) {
                    Fm.includes(f.element.tagName) || e.push(f.loadedOnce())
                });
                return Promise.all(e)
            })
        }

        function Hm(a, b, c) {
            return a.signals().whenSignal("ready-scan").then(function() {
                var d = [];
                Wc(a).get().forEach(function(e) {
                    e.hasBeenMeasured() || e.hostWin != b || e.hasOwner() || d.push(e.ensureMeasured())
                });
                return Promise.all(d)
            }).then(function() {
                return Wc(a).get().filter(function(d) {
                    return d.hostWin == b && !d.hasOwner() && d.hasBeenMeasured() && c(d)
                })
            })
        };

        function Im(a) {
            var b = this;
            this.win = a;
            this.Db = [];
            this.ue = a.performance.timeOrigin || a.performance.timing.navigationStart;
            this.hf = this.j = this.h = this.B = null;
            this.Mb = this.Xd = !1;
            this.jf = J();
            this.lc = void 0;
            this.lb = new pi;
            this.jc = this.Sc = 0;
            var c = this.win.PerformanceObserver && this.win.PerformanceObserver.supportedEntryTypes || [];
            c.includes("paint") || this.lb.rejectSignal("fcp", G().createExpectedError("First Contentful Paint not supported"));
            (this.bc = c.includes("layout-shift")) || this.lb.rejectSignal("cls", G().createExpectedError("Cumulative Layout Shift not supported"));
            (this.Yf = c.includes("first-input")) || this.lb.rejectSignal("fid", G().createExpectedError("First Input Delay not supported"));
            (this.ac = c.includes("largest-contentful-paint")) || this.lb.rejectSignal("lcpv", G().createExpectedError("Largest Contentful Paint not supported"));
            this.Fh = c.includes("navigation");
            this.tc = this.sc = null;
            this.Oe = this.lh.bind(this);
            this.ge = this.ge.bind(this);
            this.addEnabledExperiment("rtv-" + z(this.win).rtvVersion);
            uj(a.document).then(function() {
                b.tick("dr");
                b.flush()
            });
            vj(a.document).then(function() {
                b.tick("ol");
                if (!b.win.PerformancePaintTiming && b.win.chrome && "function" == typeof b.win.chrome.loadTimes) {
                    var d = 1E3 * b.win.chrome.loadTimes().firstPaintTime - b.win.performance.timing.navigationStart;
                    1 >= d || b.tickDelta("fp", d)
                }
                b.flush()
            });
            Jm(this);
            Km(this)
        }
        g = Im.prototype;
        g.coreServicesAvailable = function() {
            var a = this,
                b = this.win.document.documentElement;
            this.B = vc(b);
            this.h = R(b);
            this.j = Wc(b);
            this.hf = Tc(this.B);
            this.Mb = this.h.isEmbedded() && "1" === this.h.getParam("csi");
            this.B.onVisibilityChanged(this.flush.bind(this));
            Lm(this);
            var c = this.h.whenMessagingReady();
            this.B.whenFirstVisible().then(function() {
                a.tick("ofv");
                a.flush()
            });
            if (this.ac || this.bc) this.win.addEventListener("visibilitychange", this.Oe, {
                capture: !0
            }), this.B.onVisibilityChanged(this.ge);
            return c ? c.then(function() {
                a.tickDelta("msr",
                    a.win.performance.now());
                a.tick("timeOrigin", void 0, a.ue);
                var d = a.B.getMetaByName("amp-usqp");
                d && d.split(",").forEach(function(e) {
                    a.addEnabledExperiment("ssr-" + e)
                });
                return Mm(a)
            }).then(function() {
                a.Xd = !0;
                Nm(a);
                a.flush()
            }) : v()
        };

        function Mm(a) {
            var b = Sc(a.win).getSingleDoc();
            return xm(b).then(function(c) {
                c && a.addEnabledExperiment("story")
            })
        }

        function Jm(a) {
            if ("inabox" !== z(a.win).runtime) {
                var b = !1,
                    c = !1,
                    d = !1,
                    e = !1,
                    f = function(k) {
                        if ("first-paint" != k.name || b)
                            if ("first-contentful-paint" != k.name || c) "first-input" !== k.entryType || d ? "layout-shift" === k.entryType ? k.hadRecentInput || (a.jc += k.value) : "largest-contentful-paint" === k.entryType ? (k.loadTime && (a.sc = k.loadTime), k.renderTime && (a.tc = k.renderTime)) : "navigation" != k.entryType || e || ("domComplete domContentLoadedEventEnd domContentLoadedEventStart domInteractive loadEventEnd loadEventStart requestStart responseStart".split(" ").forEach(function(m) {
                                return a.tick(m,
                                    k[m])
                            }), e = !0) : (a.tickDelta("fid", k.processingStart - k.startTime), d = !0);
                            else {
                                var l = k.startTime + k.duration;
                                a.tickDelta("fcp", l);
                                a.tickSinceVisible("fcpv", l);
                                c = !0
                            }
                        else a.tickDelta("fp", k.startTime + k.duration), b = !0
                    },
                    h = [];
                a.win.PerformancePaintTiming && (a.win.performance.getEntriesByType("paint").forEach(f), h.push("paint"));
                a.Yf && Om(a, f, {
                    type: "first-input",
                    buffered: !0
                });
                a.bc && Om(a, f, {
                    type: "layout-shift",
                    buffered: !0
                });
                a.ac && Om(a, f, {
                    type: "largest-contentful-paint",
                    buffered: !0
                });
                a.Fh && Om(a, f, {
                    type: "navigation",
                    buffered: !0
                });
                0 < h.length && Om(a, f, {
                    entryTypes: h
                })
            }
        }

        function Om(a, b, c) {
            try {
                (new a.win.PerformanceObserver(function(d) {
                    d.getEntries().forEach(b);
                    a.flush()
                })).observe(c)
            } catch (d) {
                G().warn("Performance", d)
            }
        }

        function Km(a) {
            if (a.win.perfMetrics && a.win.perfMetrics.onFirstInputDelay) a.win.perfMetrics.onFirstInputDelay(function(b) {
                a.tickDelta("fid-polyfill", b);
                a.flush()
            })
        }
        g.lh = function() {
            "hidden" === this.win.document.visibilityState && (this.bc && Pm(this), this.ac && Qm(this))
        };
        g.ge = function() {
            "inactive" === this.B.getVisibilityState() && (this.bc && Pm(this), this.ac && Qm(this))
        };

        function Pm(a) {
            0 === a.Sc ? (a.tickDelta("cls", a.jc), a.flush(), a.Sc = 1) : 1 === a.Sc && (a.tickDelta("cls-2", a.jc), a.flush(), a.Sc = 2, a.win.removeEventListener("visibilitychange", a.Oe, {
                capture: !0
            }))
        }

        function Qm(a) {
            if (null !== a.sc) {
                a.tickDelta("lcpl", a.sc);
                var b = a.sc
            }
            null !== a.tc && (a.tickDelta("lcpr", a.tc), b = b || a.tc);
            null !== b && a.tickSinceVisible("lcpv", b);
            a.flush()
        }

        function Lm(a) {
            var b = !a.B.hasBeenVisible(),
                c = -1;
            a.B.whenFirstVisible().then(function() {
                c = a.win.performance.now();
                a.mark("visible")
            });
            Rm(a).then(function() {
                if (b) {
                    var d = -1 < c ? a.win.performance.now() - c : 0;
                    a.B.whenFirstVisible().then(function() {
                        a.tickDelta("pc", d)
                    });
                    Sm(a, d);
                    a.mark("pc")
                } else a.tick("pc"), Sm(a, a.win.performance.now() - c);
                a.flush()
            })
        }

        function Rm(a) {
            return a.j.whenFirstPass().then(function() {
                var b = a.win.document.documentElement,
                    c = Yc(b).getSize();
                c = lc(0, 0, c.width, c.height);
                return Gm(b, a.win, c)
            })
        }
        g.tick = function(a, b, c) {
            var d = K({
                    label: a
                }),
                e;
            void 0 != b ? d.delta = e = Math.max(b, 0) : void 0 != c ? d.value = c : (this.mark(a), e = this.win.performance.now(), d.value = this.ue + e);
            c = this.win;
            var f = c.dispatchEvent;
            var h = this.win;
            var k = {
                label: a,
                delta: e
            };
            var l = {
                detail: k
            };
            Object.assign(l, void 0);
            "function" == typeof h.CustomEvent ? k = new h.CustomEvent("perf", l) : (h = h.document.createEvent("CustomEvent"), h.initCustomEvent("perf", !!l.bubbles, !!l.cancelable, k), k = h);
            f.call(c, k);
            this.Xd && this.Mb ? this.h.sendMessage("tick", d) : (50 <= this.Db.length &&
                this.Db.shift(), this.Db.push(d));
            this.lb.signal(a, e)
        };
        g.mark = function(a) {
            this.win.performance && this.win.performance.mark && 1 == arguments.length && this.win.performance.mark(a)
        };
        g.tickDelta = function(a, b) {
            this.tick(a, b)
        };
        g.tickSinceVisible = function(a, b) {
            b = void 0 == b ? this.win.performance.now() : b;
            b = this.ue + b;
            var c = this.B && this.B.getFirstVisibleTime();
            this.tickDelta(a, c ? Math.max(b - c, 0) : 0)
        };
        g.flush = function() {
            this.Xd && this.Mb && (null == this.lc && (this.lc = Object.keys(this.jf).join(",")), this.h.sendMessage("sendCsi", K({
                ampexp: this.lc,
                canonicalUrl: this.hf.canonicalUrl
            }), !0))
        };
        g.throttledFlush = function() {
            this.ag || (this.ag = qf(this.win, this.flush.bind(this), 100));
            this.ag()
        };
        g.addEnabledExperiment = function(a) {
            this.jf[a] = !0;
            this.lc = void 0
        };

        function Nm(a) {
            a.h && (a.Mb && a.Db.forEach(function(b) {
                a.h.sendMessage("tick", b)
            }), a.Db.length = 0)
        }

        function Sm(a, b) {
            a.h && a.h.sendMessage("prerenderComplete", K({
                value: b
            }), !0)
        }
        g.isPerformanceTrackingOn = function() {
            return this.Mb
        };
        g.getMetric = function(a) {
            return this.lb.whenSignal(a)
        };

        function Tm(a, b) {
            this.Ea = a;
            this.J = b;
            this.Xc = !1;
            this.re = 0;
            this.Se = this.kh.bind(this);
            this.Re = this.jh.bind(this);
            this.Qe = this.ih.bind(this);
            this.Pe = this.hh.bind(this);
            this.Ea.addEventListener("touchstart", this.Se, !0)
        }
        g = Tm.prototype;
        g.cleanup = function() {
            Um(this);
            this.Ea.removeEventListener("touchstart", this.Se, !0)
        };
        g.kh = function(a) {
            this.Xc || !a.touches || 1 != a.touches.length || 0 < this.J.getScrollTop() || (a = a.touches[0].clientY, this.Xc = !0, this.re = a, this.Ea.addEventListener("touchmove", this.Re, !0), this.Ea.addEventListener("touchend", this.Qe, !0), this.Ea.addEventListener("touchcancel", this.Pe, !0))
        };

        function Um(a) {
            a.Xc = !1;
            a.re = 0;
            a.Ea.removeEventListener("touchmove", a.Re, !0);
            a.Ea.removeEventListener("touchend", a.Qe, !0);
            a.Ea.removeEventListener("touchcancel", a.Pe, !0)
        }
        g.jh = function(a) {
            if (this.Xc) {
                var b = a.touches[0].clientY - this.re;
                0 < b && a.preventDefault();
                0 != b && Um(this)
            }
        };
        g.ih = function() {
            Um(this)
        };
        g.hh = function() {
            Um(this)
        };

        function Vm(a) {
            var b = a.win;
            sf(["\u26a1", "amp"], b.document) && Q(a.win).isStandalone() && wi(a, function() {
                Uc(b).installExtensionForDoc(a, "amp-standalone").then(function() {
                    return Nc(a.getBody(), "standalone", "amp-standalone")
                }).then(function(c) {
                    return c.initialize()
                })
            })
        };

        function Wm() {
            var a = self,
                b = a.location.href;
            if (!b.startsWith("about:")) {
                var c = !1;
                z().development && (c = "0" !== x(a.location.originalHash || a.location.hash).validate);
                c ? Xm(a.document, Xa.cdn + "/v0/validator.js").then(function() {
                    amp.validator.validateUrlAndLog(b, a.document)
                }) : z().examiner && Xm(a.document, Xa.cdn + "/examiner.js")
            }
        }

        function Xm(a, b) {
            var c = a.createElement("script");
            c.src = b;
            (b = a.head.querySelector("script[nonce]")) && c.setAttribute("nonce", b.getAttribute("nonce"));
            b = $e(c).then(function() {
                a.head.removeChild(c)
            }, function() {});
            a.head.appendChild(c);
            return b
        };

        function Ym(a, b) {
            vi(self.document, function() {
                Zl(self);
                $l(a);
                b.coreServicesAvailable();
                th()
            });
            vi(self.document, function() {
                rm()
            });
            vi(self.document, function() {
                var c = self;
                Mi(c, "amp-img", Oi);
                Mi(c, "amp-pixel", nj);
                Mi(c, "amp-layout", Ui)
            });
            vi(self.document, function() {
                Ki(a)
            });
            vi(self.document, function() {
                var c = self,
                    d = c.document.documentElement;
                "0" == R(d).getParam("p2r") && Q(c).isChrome() && new Tm(c.document, Yc(d));
                ym(a);
                Vm(a);
                Wm();
                mf();
                Bj()
            }, !0);
            vi(self.document, function() {
                b.tick("e_is");
                Wc(a).ampInitComplete();
                b.flush()
            })
        }
        if (!self.IS_AMP_ALT) {
            self.location && (self.location.originalHash = self.location.hash);
            var ampdocService;
            try {
                Ff(), Em(), ampdocService = Sc(self)
            } catch (a) {
                throw of(self.document), a;
            }
            vi(self.document, function() {
                var a = ampdocService.getAmpDoc(self.document);
                M(self, "platform", oj);
                M(self, "performance", Im);
                var b = O(self, "performance");
                self.document.documentElement.hasAttribute("i-amphtml-no-boilerplate") && b.addEnabledExperiment("no-boilerplate");
                um();
                b.tick("is");
                ff(a, "html{overflow-x:hidden!important}html.i-amphtml-fie{height:100%!important;width:100%!important}html:not([amp4ads]),html:not([amp4ads]) body{height:auto!important}html:not([amp4ads]) body{margin:0!important}body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}html.i-amphtml-singledoc.i-amphtml-embedded{-ms-touch-action:pan-y pinch-zoom;touch-action:pan-y pinch-zoom}html.i-amphtml-fie>body,html.i-amphtml-singledoc>body{overflow:visible!important}html.i-amphtml-fie:not(.i-amphtml-inabox)>body,html.i-amphtml-singledoc:not(.i-amphtml-inabox)>body{position:relative!important}html.i-amphtml-ios-embed-legacy>body{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important}html.i-amphtml-ios-embed{overflow-y:auto!important;position:static}#i-amphtml-wrapper{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;margin:0!important;display:block!important}html.i-amphtml-ios-embed.i-amphtml-ios-overscroll,html.i-amphtml-ios-embed.i-amphtml-ios-overscroll>#i-amphtml-wrapper{-webkit-overflow-scrolling:touch!important}#i-amphtml-wrapper>body{position:relative!important;border-top:1px solid transparent!important}#i-amphtml-wrapper+body{visibility:visible}#i-amphtml-wrapper+body .i-amphtml-lightbox-element,#i-amphtml-wrapper+body[i-amphtml-lightbox]{visibility:hidden}#i-amphtml-wrapper+body[i-amphtml-lightbox] .i-amphtml-lightbox-element{visibility:visible}#i-amphtml-wrapper.i-amphtml-scroll-disabled,.i-amphtml-scroll-disabled{overflow-x:hidden!important;overflow-y:hidden!important}amp-instagram{padding:54px 0px 0px!important;background-color:#fff}amp-iframe iframe{box-sizing:border-box!important}[amp-access][amp-access-hide]{display:none}[subscriptions-dialog],body:not(.i-amphtml-subs-ready) [subscriptions-action],body:not(.i-amphtml-subs-ready) [subscriptions-section]{display:none!important}amp-experiment,amp-live-list>[update]{display:none}.i-amphtml-jank-meter{position:fixed;background-color:rgba(232,72,95,0.5);bottom:0;right:0;color:#fff;font-size:16px;z-index:1000;padding:5px}amp-list[resizable-children]>.i-amphtml-loading-container.amp-hidden{display:none!important}amp-list [fetch-error],amp-list[load-more] [load-more-button],amp-list[load-more] [load-more-end],amp-list[load-more] [load-more-failed],amp-list[load-more] [load-more-loading]{display:none}amp-list[diffable] div[role=list]{display:block}amp-story-page,amp-story[standalone]{min-height:1px!important;display:block!important;height:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;width:100%!important}amp-story[standalone]{background-color:#202125!important;position:relative!important}amp-story-page{background-color:#757575}amp-story .amp-active>div,amp-story .i-amphtml-loader-background{display:none!important}amp-story-page:not(:first-of-type):not([distance]):not([active]){transform:translateY(1000vh)!important}amp-autocomplete{position:relative!important;display:inline-block!important}amp-autocomplete>input,amp-autocomplete>textarea{padding:0.5rem;border:1px solid rgba(0,0,0,0.33)}.i-amphtml-autocomplete-results,amp-autocomplete>input,amp-autocomplete>textarea{font-size:1rem;line-height:1.5rem}[amp-fx^=fly-in]{visibility:hidden}amp-script[nodom]{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}\n/*# sourceURL=/css/ampdoc.css*/[hidden]{display:none!important}.i-amphtml-element{display:inline-block}.i-amphtml-blurry-placeholder{transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none}[layout=nodisplay]:not(.i-amphtml-element){display:none!important}.i-amphtml-layout-fixed,[layout=fixed][width][height]:not(.i-amphtml-layout-fixed){display:inline-block;position:relative}.i-amphtml-layout-responsive,[layout=responsive][width][height]:not(.i-amphtml-layout-responsive),[width][height][heights]:not([layout]):not(.i-amphtml-layout-responsive),[width][height][sizes]:not([layout]):not(.i-amphtml-layout-responsive){display:block;position:relative}.i-amphtml-layout-intrinsic,[layout=intrinsic][width][height]:not(.i-amphtml-layout-intrinsic){display:inline-block;position:relative;max-width:100%}.i-amphtml-layout-intrinsic .i-amphtml-sizer{max-width:100%}.i-amphtml-intrinsic-sizer{max-width:100%;display:block!important}.i-amphtml-layout-container,.i-amphtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]:not(.i-amphtml-layout-fixed-height){display:block;position:relative}.i-amphtml-layout-fill,.i-amphtml-layout-fill.i-amphtml-notbuilt,[layout=fill]:not(.i-amphtml-layout-fill){display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-layout-flex-item,[layout=flex-item]:not(.i-amphtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-amphtml-layout-fluid{position:relative}.i-amphtml-layout-size-defined{overflow:hidden!important}.i-amphtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-amphtml-sizer{display:block!important}@supports (aspect-ratio:1/1){i-amphtml-sizer.i-amphtml-disable-ar{display:none!important}}.i-amphtml-blurry-placeholder,.i-amphtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-amphtml-layout-size-defined .i-amphtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-replaced-content,.i-amphtml-screen-reader{padding:0!important;border:none!important}.i-amphtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:8px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:12px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:16px!important}.i-amphtml-unresolved{position:relative;overflow:hidden!important}.i-amphtml-select-disabled{-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.i-amphtml-notbuilt,[layout]:not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not([layout]):not(.i-amphtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-amphtml-notbuilt:not(.i-amphtml-layout-container)>*,[layout]:not([layout=container]):not(.i-amphtml-element)>*,[width][height][heights]:not([layout]):not(.i-amphtml-element)>*,[width][height][sizes]:not([layout]):not(.i-amphtml-element)>*{display:none}amp-img:not(.i-amphtml-element)[i-amphtml-ssr]>img.i-amphtml-fill-content{display:block}.i-amphtml-notbuilt:not(.i-amphtml-layout-container),[layout]:not([layout=container]):not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not([layout]):not(.i-amphtml-element){color:transparent!important;line-height:0!important}.i-amphtml-ghost{visibility:hidden!important}.i-amphtml-element>[placeholder],[layout]:not(.i-amphtml-element)>[placeholder],[width][height][heights]:not([layout]):not(.i-amphtml-element)>[placeholder],[width][height][sizes]:not([layout]):not(.i-amphtml-element)>[placeholder]{display:block;line-height:normal}.i-amphtml-element>[placeholder].amp-hidden,.i-amphtml-element>[placeholder].hidden{visibility:hidden}.i-amphtml-element:not(.amp-notsupported)>[fallback],.i-amphtml-layout-container>[placeholder].amp-hidden,.i-amphtml-layout-container>[placeholder].hidden{display:none}.i-amphtml-layout-size-defined>[fallback],.i-amphtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}.i-amphtml-notbuilt>[placeholder]{display:block!important}.i-amphtml-hidden-by-media-query{display:none!important}.i-amphtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-amphtml-element-error:before{content:attr(error-message)}i-amp-scroll-container,i-amphtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active,i-amphtml-scroll-container.amp-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-amphtml-loading-container{display:block!important;pointer-events:none;z-index:1}.i-amphtml-notbuilt>.i-amphtml-loading-container{display:block!important}.i-amphtml-loading-container.amp-hidden{visibility:hidden}.i-amphtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden;display:initial;line-height:normal}.i-amphtml-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{display:none!important}amp-analytics,amp-auto-ads,amp-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}html.i-amphtml-fie>amp-analytics{position:initial!important}[visible-when-invalid]:not(.visible),form [submit-error],form [submit-success],form [submitting]{display:none}amp-accordion{display:block!important}amp-accordion>section{float:none!important}amp-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}amp-accordion,amp-accordion>section{margin:0}amp-accordion:not(.i-amphtml-built)>section>:last-child{display:none!important}amp-accordion:not(.i-amphtml-built)>section[expanded]>:last-child{display:block!important}\n/*# sourceURL=/css/ampshared.css*/", function() {
                    return Ym(a,
                        b)
                }, !0, "amp-runtime")
            });
            self.console && (console.info || console.log).call(console, "Powered by AMP \u26a1 HTML \u2013 Version 2102130314004", self.location.href);
            self.document.documentElement.setAttribute("amp-version", "2102130314004")
        };
    })(AMP._ = AMP._ || {})
} catch (e) {
    setTimeout(function() {
        var s = document.body.style;
        s.opacity = 1;
        s.visibility = "visible";
        s.animation = "none";
        s.WebkitAnimation = "none;"
    }, 1000);
    throw e
};

//# sourceMappingURL=v0.js.map
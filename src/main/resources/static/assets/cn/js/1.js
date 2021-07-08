function centerBlock(n) {
    var t = n.outerWidth();
    n.css("margin-left", -t / 2)
}
function hover() {
    $(".more .moreBtn").hover(function() {
        $(this).html("View details 》")
    }, function() {
        $(this).html("More 》")
    })
}
function projectSlide() {
    var n = $(".max").outerWidth() / 4;
    $(".min .bxslider").bxSlider({
        minSlides: 1,
        maxSlides: 4,
        slideWidth: n,
        pager: !1,
        infiniteLoop: !1,
        moveSlides: 1
    });
    $(".min, .cooperate_cont .pic_cont .min .bx-next, .cooperate_cont .pic_cont .min .bx-prev").height(n * 488 / 868);
    $(".min li").click(function() {
        var r = $(this).find("img").attr("src"), n, t, i;
        $(".max img").attr("src", r);
        n = $(this).find("a").attr("href");
        t = $(this).find("a").attr("target");
        $(".max a").attr({
            href: n,
            target: t
        });
        i = $(this).find("h2").html();
        $(".black p").html(i);
        $(this).addClass("cur").siblings().removeClass("cur")
    })
}
function letterLimited(n, t) {
    var i = n.html();
    i.length > t && n.html(i.substr(0, t) + "...")
}
function timeLine(n, t) {
    $(window).scroll(function() {
        var r = $(window).scrollTop()
            , i = n.offset().top - r;
        alert(i);
        i < 100 && (n.hasClass(t) ? n.addClass("cur_left") : n.hasClass("rightObj") && n.addClass("cur_right"))
    })
}
function move(n, t) {
    if (n.length > 0) {
        var i = n.offset().top
            , r = n.offset().left
            , u = n.height();
        $("html,body").animate({
            scrollTop: i - 120,
            scrollLeft: r
        }, t, "easeOutCirc")
    }
}
function house() {
    $(window).scroll(function() {
        var n = $(window).scrollTop()
            , t = $(".personal_cont .intro > div").offset().top - n;
        t <= $(window).height() - 180 ? setTimeout(function() {
                $(".personal_cont .intro > div").addClass("cur")
            }, 200) : $(".personal_cont .intro > div").removeClass("cur")
    })
}
function onehand() {
    var n = $(window).width();
    n > 510 ? $("#imgbox").gridalicious({
            gutter: 14,
            width: 190,
            animate: !0,
            animationOptions: {
                speed: 300,
                duration: 400
            }
        }) : $("#imgbox").gridalicious({
            gutter: 10,
            width: 140,
            animate: !0,
            animationOptions: {
                speed: 300,
                duration: 400
            }
        });
    $(".houseBox .imgbox").delay(200).animate({
        opacity: "1"
    });
    $(".houseBox .imgbox .item .img").height($(".houseBox .imgbox .item .img img").height())
}
function housedetail() {
    var r = $(".bigimg .item").width(), i = $(".smallimg li").width() + 14, t = parseInt($(".bigimg .item").length), n = 1, e;
    if ($(".slider").width(r * t),
            $(".small ul").width(i * t),
            $(window).resize(function() {
                var t = $(".bigimg .item").width()
                    , i = $(".smallimg li").width() + 14
                    , n = parseInt($(".bigimg .item").length);
                $(".slider").width(t * n);
                $(".small ul").width(i * n)
            }),
            $(".imgrightbtn").click(function() {
                n < t ? ($(".slider").animate({
                        marginLeft: -r * n
                    }),
                        n < t - 3 ? $(".small ul").animate({
                                marginLeft: -i * n
                            }) : $(".small ul").animate({
                                marginLeft: -i * (t - 3)
                            }),
                        n++) : n == t && ($(".slider").animate({
                        marginLeft: 0
                    }),
                        $(".small ul").animate({
                            marginLeft: 0
                        }),
                        n = 1)
            }),
            $(".imgleftbtn").click(function() {
                n <= t && n > 1 ? ($(".slider").animate({
                        marginLeft: -r * (n - 2)
                    }),
                        n <= t - 1 ? $(".small ul").animate({
                                marginLeft: -i * (n - 2)
                            }) : $(".small ul").animate({
                                marginLeft: -i * (t - 3)
                            }),
                        n--) : n == 1 && ($(".slider").animate({
                        marginLeft: -r * (t - 1)
                    }),
                        $(".small ul").animate({
                            marginLeft: -i * (t - 3)
                        }),
                        n = t)
            }),
            $(".small ul li").click(function() {
                var u = $(this).index();
                $(".slider").animate({
                    marginLeft: -r * u
                });
                u < t - 3 ? $(".small ul").animate({
                        marginLeft: -i * u
                    }) : $(".small ul").animate({
                        marginLeft: -i * (t - 3)
                    });
                $("#caseCurrent").text(u + 1);
                n = u + 1
            }),
            e = $(window).width(),
        e <= 510) {
        var u = $(".housedetailBox .imgBox").width()
            , o = u * 10 / 16
            , f = (u - 86) / 3
            , r = u
            , i = f + 14;
        $(".bigimg .item,.bigimg").width(u).height(o);
        $(".smallimg .small").width(u - 44);
        $(".smallimg .small li").width(f).height(f);
        $(".imgleftbtn,.imgrightbtn").height(f)
    }
    $(window).resize(function() {
        var n = $(".housedetailBox .imgBox").width()
            , i = n * 10 / 16
            , t = (n - 86) / 3
            , r = n
            , u = t + 14;
        $(".bigimg .item,.bigimg").width(n).height(i);
        $(".smallimg .small").width(n - 44);
        $(".smallimg .small li").width(t).height(t);
        $(".imgleftbtn,.imgrightbtn").height(t)
    })
}
(function(n, t) {
    function yt(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
    }
    function pt(n) {
        if (!at[n]) {
            var e = r.body
                , t = i("<" + n + ">").appendTo(e)
                , u = t.css("display");
            t.remove();
            (u === "none" || u === "") && (f || (f = r.createElement("iframe"),
                f.frameBorder = f.width = f.height = 0),
                e.appendChild(f),
            y && f.createElement || (y = (f.contentWindow || f.contentDocument).document,
                y.write((i.support.boxModel ? "<!doctype html>" : "") + "<html><body>"),
                y.close()),
                t = y.createElement(n),
                y.body.appendChild(t),
                u = i.css(t, "display"),
                e.removeChild(f));
            at[n] = u
        }
        return at[n]
    }
    function c(n, t) {
        var r = {};
        return i.each(it.concat.apply([], it.slice(0, t)), function() {
            r[this] = n
        }),
            r
    }
    function dr() {
        rt = t
    }
    function wt() {
        return setTimeout(dr, 0),
            rt = i.now()
    }
    function gr() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function bt() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }
    function nu(n, r) {
        n.dataFilter && (r = n.dataFilter(r, n.dataType));
        for (var v = n.dataTypes, s = {}, l, p = v.length, a, u = v[0], h, y, f, e, o, c = 1; c < p; c++) {
            if (c === 1)
                for (l in n.converters)
                    typeof l == "string" && (s[l.toLowerCase()] = n.converters[l]);
            if (h = u,
                    u = v[c],
                u === "*")
                u = h;
            else if (h !== "*" && h !== u) {
                if (y = h + " " + u,
                        f = s[y] || s["* " + u],
                        !f) {
                    o = t;
                    for (e in s)
                        if (a = e.split(" "),
                            (a[0] === h || a[0] === "*") && (o = s[a[1] + " " + u],
                                o)) {
                            e = s[e];
                            e === !0 ? f = o : o === !0 && (f = e);
                            break
                        }
                }
                f || o || i.error("No conversion from " + y.replace(" ", " to "));
                f !== !0 && (r = f ? f(r) : o(e(r)))
            }
        }
        return r
    }
    function tu(n, i, r) {
        var s = n.contents, f = n.dataTypes, c = n.responseFields, o, u, e, h;
        for (u in c)
            u in r && (i[c[u]] = r[u]);
        while (f[0] === "*")
            f.shift(),
            o === t && (o = n.mimeType || i.getResponseHeader("content-type"));
        if (o)
            for (u in s)
                if (s[u] && s[u].test(o)) {
                    f.unshift(u);
                    break
                }
        if (f[0]in r)
            e = f[0];
        else {
            for (u in r) {
                if (!f[0] || n.converters[u + " " + f[0]]) {
                    e = u;
                    break
                }
                h || (h = u)
            }
            e = e || h
        }
        if (e)
            return e !== f[0] && f.unshift(e),
                r[e]
    }
    function ut(n, t, r, u) {
        if (i.isArray(t))
            i.each(t, function(t, i) {
                r || wf.test(n) ? u(n, i) : ut(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
            });
        else if (r || i.type(t) !== "object")
            u(n, t);
        else
            for (var f in t)
                ut(n + "[" + f + "]", t[f], r, u)
    }
    function kt(n, r) {
        var u, f, e = i.ajaxSettings.flatOptions || {};
        for (u in r)
            r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        f && i.extend(!0, n, f)
    }
    function w(n, i, r, u, f, e) {
        f = f || i.dataTypes[0];
        e = e || {};
        e[f] = !0;
        for (var s = n[f], h = 0, l = s ? s.length : 0, c = n === lt, o; h < l && (c || !o); h++)
            o = s[h](i, r, u),
            typeof o == "string" && (!c || e[o] ? o = t : (i.dataTypes.unshift(o),
                    o = w(n, i, r, u, o, e)));
        return !c && o || e["*"] || (o = w(n, i, r, u, "*", e)),
            o
    }
    function dt(n) {
        return function(t, r) {
            if (typeof t != "string" && (r = t,
                    t = "*"),
                    i.isFunction(r))
                for (var o = t.toLowerCase().split(cr), f = 0, h = o.length, u, s, e; f < h; f++)
                    u = o[f],
                        e = /^\+/.test(u),
                    e && (u = u.substr(1) || "*"),
                        s = n[u] = n[u] || [],
                        s[e ? "unshift" : "push"](r)
        }
    }
    function gt(n, t, r) {
        var u = t === "width" ? n.offsetWidth : n.offsetHeight
            , f = t === "width" ? 1 : 0
            , e = 4;
        if (u > 0) {
            if (r !== "border")
                for (; f < e; f += 2)
                    r || (u -= parseFloat(i.css(n, "padding" + o[f])) || 0),
                        r === "margin" ? u += parseFloat(i.css(n, r + o[f])) || 0 : u -= parseFloat(i.css(n, "border" + o[f] + "Width")) || 0;
            return u + "px"
        }
        if (u = a(n, t),
            (u < 0 || u == null) && (u = n.style[t]),
                ct.test(u))
            return u;
        if (u = parseFloat(u) || 0,
                r)
            for (; f < e; f += 2)
                u += parseFloat(i.css(n, "padding" + o[f])) || 0,
                r !== "padding" && (u += parseFloat(i.css(n, "border" + o[f] + "Width")) || 0),
                r === "margin" && (u += parseFloat(i.css(n, r + o[f])) || 0);
        return u + "px"
    }
    function iu(n) {
        var t = r.createElement("div");
        return st.appendChild(t),
            t.innerHTML = n.outerHTML,
            t.firstChild
    }
    function ni(n) {
        var t = (n.nodeName || "").toLowerCase();
        t === "input" ? ti(n) : t !== "script" && typeof n.getElementsByTagName != "undefined" && i.grep(n.getElementsByTagName("input"), ti)
    }
    function ti(n) {
        (n.type === "checkbox" || n.type === "radio") && (n.defaultChecked = n.checked)
    }
    function b(n) {
        return typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName("*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll("*") : []
    }
    function ii(n, t) {
        var r;
        t.nodeType === 1 && (t.clearAttributes && t.clearAttributes(),
        t.mergeAttributes && t.mergeAttributes(n),
            r = t.nodeName.toLowerCase(),
            r === "object" ? t.outerHTML = n.outerHTML : r !== "input" || n.type !== "checkbox" && n.type !== "radio" ? r === "option" ? t.selected = n.defaultSelected : r === "input" || r === "textarea" ? t.defaultValue = n.defaultValue : r === "script" && t.text !== n.text && (t.text = n.text) : (n.checked && (t.defaultChecked = t.checked = n.checked),
                    t.value !== n.value && (t.value = n.value)),
            t.removeAttribute(i.expando),
            t.removeAttribute("_submit_attached"),
            t.removeAttribute("_change_attached"))
    }
    function ri(n, t) {
        if (t.nodeType === 1 && !!i.hasData(n)) {
            var u, f, o, s = i._data(n), r = i._data(t, s), e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e)
                    for (f = 0,
                             o = e[u].length; f < o; f++)
                        i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }
    function ru(n) {
        return i.nodeName(n, "table") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }
    function ui(n) {
        var i = nr.split("|")
            , t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length)
                t.createElement(i.pop());
        return t
    }
    function fi(n, t, r) {
        if (t = t || 0,
                i.isFunction(t))
            return i.grep(n, function(n, i) {
                var u = !!t.call(n, i, n);
                return u === r
            });
        if (t.nodeType)
            return i.grep(n, function(n) {
                return n === t === r
            });
        if (typeof t == "string") {
            var u = i.grep(n, function(n) {
                return n.nodeType === 1
            });
            if (gu.test(t))
                return i.filter(t, u, !r);
            t = i.filter(t, u)
        }
        return i.grep(n, function(n) {
            return i.inArray(n, t) >= 0 === r
        })
    }
    function ei(n) {
        return !n || !n.parentNode || n.parentNode.nodeType === 11
    }
    function k() {
        return !0
    }
    function l() {
        return !1
    }
    function oi(n, t, r) {
        var u = t + "defer"
            , f = t + "queue"
            , e = t + "mark"
            , o = i._data(n, u);
        !o || r !== "queue" && i._data(n, f) || r !== "mark" && i._data(n, e) || setTimeout(function() {
            i._data(n, f) || i._data(n, e) || (i.removeData(n, u, !0),
                o.fire())
        }, 0)
    }
    function ft(n) {
        for (var t in n)
            if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON")
                return !1;
        return !0
    }
    function si(n, r, u) {
        if (u === t && n.nodeType === 1) {
            var f = "data-" + r.replace(li, "-$1").toLowerCase();
            if (u = n.getAttribute(f),
                typeof u == "string") {
                try {
                    u = u === "true" ? !0 : u === "false" ? !1 : u === "null" ? null : i.isNumeric(u) ? +u : ci.test(u) ? i.parseJSON(u) : u
                } catch (e) {}
                i.data(n, r, u)
            } else
                u = t
        }
        return u
    }
    function uu(n) {
        var i = hi[n] = {}, t, r;
        for (n = n.split(/\s+/),
                 t = 0,
                 r = n.length; t < r; t++)
            i[n[t]] = !0;
        return i
    }
    var r = n.document, fu = n.navigator, eu = n.location, i = function() {
        function c() {
            if (!i.isReady) {
                try {
                    r.documentElement.doScroll("left")
                } catch (n) {
                    setTimeout(c, 1);
                    return
                }
                i.ready()
            }
        }
        var i = function(n, t) {
            return new i.fn.init(n,t,l)
        }, k = n.jQuery, d = n.$, l, g = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, a = /\S/, v = /^\s+/, y = /\s+$/, nt = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, tt = /^[\],:{}\s]*$/, it = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rt = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ut = /(?:^|:|,)(?:\s*\[)+/g, ft = /(webkit)[ \/]([\w.]+)/, et = /(opera)(?:.*version)?[ \/]([\w.]+)/, ot = /(msie) ([\w.]+)/, st = /(mozilla)(?:.*? rv:([\w.]+))?/, ht = /-([a-z]|[0-9])/ig, ct = /^-ms-/, lt = function(n, t) {
            return (t + "").toUpperCase()
        }, at = fu.userAgent, e, o, u, vt = Object.prototype.toString, s = Object.prototype.hasOwnProperty, h = Array.prototype.push, f = Array.prototype.slice, p = String.prototype.trim, w = Array.prototype.indexOf, b = {};
        return i.fn = i.prototype = {
            constructor: i,
            init: function(n, u, f) {
                var o, s, e, h;
                if (!n)
                    return this;
                if (n.nodeType)
                    return this.context = this[0] = n,
                        this.length = 1,
                        this;
                if (n === "body" && !u && r.body)
                    return this.context = r,
                        this[0] = r.body,
                        this.selector = n,
                        this.length = 1,
                        this;
                if (typeof n == "string") {
                    if (o = n.charAt(0) !== "<" || n.charAt(n.length - 1) !== ">" || n.length < 3 ? g.exec(n) : [null, n, null],
                        o && (o[1] || !u)) {
                        if (o[1])
                            return u = u instanceof i ? u[0] : u,
                                h = u ? u.ownerDocument || u : r,
                                e = nt.exec(n),
                                e ? i.isPlainObject(u) ? (n = [r.createElement(e[1])],
                                            i.fn.attr.call(n, u, !0)) : n = [h.createElement(e[1])] : (e = i.buildFragment([o[1]], [h]),
                                        n = (e.cacheable ? i.clone(e.fragment) : e.fragment).childNodes),
                                i.merge(this, n);
                        if (s = r.getElementById(o[2]),
                            s && s.parentNode) {
                            if (s.id !== o[2])
                                return f.find(n);
                            this.length = 1;
                            this[0] = s
                        }
                        return this.context = r,
                            this.selector = n,
                            this
                    }
                    return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n)
                }
                return i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector,
                        this.context = n.context),
                        i.makeArray(n, this))
            },
            selector: "",
            jquery: "1.7.2",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return f.call(this, 0)
            },
            get: function(n) {
                return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n]
            },
            pushStack: function(n, t, r) {
                var u = this.constructor();
                return i.isArray(n) ? h.apply(u, n) : i.merge(u, n),
                    u.prevObject = this,
                    u.context = this.context,
                    t === "find" ? u.selector = this.selector + (this.selector ? " " : "") + r : t && (u.selector = this.selector + "." + t + "(" + r + ")"),
                    u
            },
            each: function(n, t) {
                return i.each(this, n, t)
            },
            ready: function(n) {
                return i.bindReady(),
                    o.add(n),
                    this
            },
            eq: function(n) {
                return n = +n,
                    n === -1 ? this.slice(n) : this.slice(n, n + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            slice: function() {
                return this.pushStack(f.apply(this, arguments), "slice", f.call(arguments).join(","))
            },
            map: function(n) {
                return this.pushStack(i.map(this, function(t, i) {
                    return n.call(t, i, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: h,
            sort: [].sort,
            splice: [].splice
        },
            i.fn.init.prototype = i.fn,
            i.extend = i.fn.extend = function() {
                var o, e, u, r, s, h, n = arguments[0] || {}, f = 1, l = arguments.length, c = !1;
                for (typeof n == "boolean" && (c = n,
                    n = arguments[1] || {},
                    f = 2),
                     typeof n != "object" && !i.isFunction(n) && (n = {}),
                     l === f && (n = this,
                         --f); f < l; f++)
                    if ((o = arguments[f]) != null)
                        for (e in o)
                            (u = n[e],
                                r = o[e],
                            n !== r) && (c && r && (i.isPlainObject(r) || (s = i.isArray(r))) ? (s ? (s = !1,
                                        h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {},
                                    n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
                return n
            }
            ,
            i.extend({
                noConflict: function(t) {
                    return n.$ === i && (n.$ = d),
                    t && n.jQuery === i && (n.jQuery = k),
                        i
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(n) {
                    n ? i.readyWait++ : i.ready(!0)
                },
                ready: function(n) {
                    if (n === !0 && !--i.readyWait || n !== !0 && !i.isReady) {
                        if (!r.body)
                            return setTimeout(i.ready, 1);
                        if (i.isReady = !0,
                            n !== !0 && --i.readyWait > 0)
                            return;
                        o.fireWith(r, [i]);
                        i.fn.trigger && i(r).trigger("ready").off("ready")
                    }
                },
                bindReady: function() {
                    if (!o) {
                        if (o = i.Callbacks("once memory"),
                            r.readyState === "complete")
                            return setTimeout(i.ready, 1);
                        if (r.addEventListener)
                            r.addEventListener("DOMContentLoaded", u, !1),
                                n.addEventListener("load", i.ready, !1);
                        else if (r.attachEvent) {
                            r.attachEvent("onreadystatechange", u);
                            n.attachEvent("onload", i.ready);
                            var t = !1;
                            try {
                                t = n.frameElement == null
                            } catch (f) {}
                            r.documentElement.doScroll && t && c()
                        }
                    }
                },
                isFunction: function(n) {
                    return i.type(n) === "function"
                },
                isArray: Array.isArray || function(n) {
                    return i.type(n) === "array"
                }
                ,
                isWindow: function(n) {
                    return n != null && n == n.window
                },
                isNumeric: function(n) {
                    return !isNaN(parseFloat(n)) && isFinite(n)
                },
                type: function(n) {
                    return n == null ? String(n) : b[vt.call(n)] || "object"
                },
                isPlainObject: function(n) {
                    if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n))
                        return !1;
                    try {
                        if (n.constructor && !s.call(n, "constructor") && !s.call(n.constructor.prototype, "isPrototypeOf"))
                            return !1
                    } catch (u) {
                        return !1
                    }
                    var r;
                    for (r in n)
                        ;
                    return r === t || s.call(n, r)
                },
                isEmptyObject: function(n) {
                    for (var t in n)
                        return !1;
                    return !0
                },
                error: function(n) {
                    throw new Error(n);
                },
                parseJSON: function(t) {
                    if (typeof t != "string" || !t)
                        return null;
                    if (t = i.trim(t),
                        n.JSON && n.JSON.parse)
                        return n.JSON.parse(t);
                    if (tt.test(t.replace(it, "@").replace(rt, "]").replace(ut, "")))
                        return new Function("return " + t)();
                    i.error("Invalid JSON: " + t)
                },
                parseXML: function(r) {
                    if (typeof r != "string" || !r)
                        return null;
                    var u, f;
                    try {
                        n.DOMParser ? (f = new DOMParser,
                                u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"),
                                u.async = "false",
                                u.loadXML(r))
                    } catch (e) {
                        u = t
                    }
                    return u && u.documentElement && !u.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + r),
                        u
                },
                noop: function() {},
                globalEval: function(t) {
                    t && a.test(t) && (n.execScript || function(t) {
                            n.eval.call(n, t)
                        }
                    )(t)
                },
                camelCase: function(n) {
                    return n.replace(ct, "ms-").replace(ht, lt)
                },
                nodeName: function(n, t) {
                    return n.nodeName && n.nodeName.toUpperCase() === t.toUpperCase()
                },
                each: function(n, r, u) {
                    var f, e = 0, o = n.length, s = o === t || i.isFunction(n);
                    if (u) {
                        if (s) {
                            for (f in n)
                                if (r.apply(n[f], u) === !1)
                                    break
                        } else
                            for (; e < o; )
                                if (r.apply(n[e++], u) === !1)
                                    break
                    } else if (s) {
                        for (f in n)
                            if (r.call(n[f], f, n[f]) === !1)
                                break
                    } else
                        for (; e < o; )
                            if (r.call(n[e], e, n[e++]) === !1)
                                break;
                    return n
                },
                trim: p ? function(n) {
                        return n == null ? "" : p.call(n)
                    }
                    : function(n) {
                        return n == null ? "" : (n + "").replace(v, "").replace(y, "")
                    }
                ,
                makeArray: function(n, t) {
                    var u = t || [], r;
                    return n != null && (r = i.type(n),
                        n.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(n) ? h.call(u, n) : i.merge(u, n)),
                        u
                },
                inArray: function(n, t, i) {
                    var r;
                    if (t) {
                        if (w)
                            return w.call(t, n, i);
                        for (r = t.length,
                                 i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
                            if (i in t && t[i] === n)
                                return i
                    }
                    return -1
                },
                merge: function(n, i) {
                    var u = n.length, r = 0, f;
                    if (typeof i.length == "number")
                        for (f = i.length; r < f; r++)
                            n[u++] = i[r];
                    else
                        while (i[r] !== t)
                            n[u++] = i[r++];
                    return n.length = u,
                        n
                },
                grep: function(n, t, i) {
                    var u = [], f, r, e;
                    for (i = !!i,
                             r = 0,
                             e = n.length; r < e; r++)
                        f = !!t(n[r], r),
                        i !== f && u.push(n[r]);
                    return u
                },
                map: function(n, r, u) {
                    var f, h, e = [], s = 0, o = n.length, c = n instanceof i || o !== t && typeof o == "number" && (o > 0 && n[0] && n[o - 1] || o === 0 || i.isArray(n));
                    if (c)
                        for (; s < o; s++)
                            f = r(n[s], s, u),
                            f != null && (e[e.length] = f);
                    else
                        for (h in n)
                            f = r(n[h], h, u),
                            f != null && (e[e.length] = f);
                    return e.concat.apply([], e)
                },
                guid: 1,
                proxy: function(n, r) {
                    var e, o, u;
                    return (typeof r == "string" && (e = n[r],
                        r = n,
                        n = e),
                        !i.isFunction(n)) ? t : (o = f.call(arguments, 2),
                            u = function() {
                                return n.apply(r, o.concat(f.call(arguments)))
                            }
                            ,
                            u.guid = n.guid = n.guid || u.guid || i.guid++,
                            u)
                },
                access: function(n, r, u, f, e, o, s) {
                    var c, l = u == null, h = 0, a = n.length;
                    if (u && typeof u == "object") {
                        for (h in u)
                            i.access(n, r, h, u[h], 1, o, f);
                        e = 1
                    } else if (f !== t) {
                        if (c = s === t && i.isFunction(f),
                            l && (c ? (c = r,
                                        r = function(n, t, r) {
                                            return c.call(i(n), r)
                                        }
                                ) : (r.call(n, f),
                                    r = null)),
                                r)
                            for (; h < a; h++)
                                r(n[h], u, c ? f.call(n[h], h, r(n[h], u)) : f, s);
                        e = 1
                    }
                    return e ? n : l ? r.call(n) : a ? r(n[0], u) : o
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(n) {
                    n = n.toLowerCase();
                    var t = ft.exec(n) || et.exec(n) || ot.exec(n) || n.indexOf("compatible") < 0 && st.exec(n) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                },
                sub: function() {
                    function n(t, i) {
                        return new n.fn.init(t,i)
                    }
                    i.extend(!0, n, this);
                    n.superclass = this;
                    n.fn = n.prototype = this();
                    n.fn.constructor = n;
                    n.sub = this.sub;
                    n.fn.init = function(r, u) {
                        return u && u instanceof i && !(u instanceof n) && (u = n(u)),
                            i.fn.init.call(this, r, u, t)
                    }
                    ;
                    n.fn.init.prototype = n.fn;
                    var t = n(r);
                    return n
                },
                browser: {}
            }),
            i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(n, t) {
                b["[object " + t + "]"] = t.toLowerCase()
            }),
            e = i.uaMatch(at),
        e.browser && (i.browser[e.browser] = !0,
            i.browser.version = e.version),
        i.browser.webkit && (i.browser.safari = !0),
        a.test(" ") && (v = /^[\s\xA0]+/,
            y = /[\s\xA0]+$/),
            l = i(r),
            r.addEventListener ? u = function() {
                    r.removeEventListener("DOMContentLoaded", u, !1);
                    i.ready()
                }
                : r.attachEvent && (u = function() {
                        r.readyState === "complete" && (r.detachEvent("onreadystatechange", u),
                            i.ready())
                    }
                ),
            i
    }(), hi = {}, d, ci, li, pr, p, nt, wr, v, br, kr, vt;
    i.Callbacks = function(n) {
        n = n ? hi[n] || uu(n) : {};
        var r = [], f = [], u, l, s, c, h, e, a = function(t) {
            for (var u, e, f = 0, s = t.length; f < s; f++)
                u = t[f],
                    e = i.type(u),
                    e === "array" ? a(u) : e === "function" && (!n.unique || !o.has(u)) && r.push(u)
        }, v = function(t, i) {
            for (i = i || [],
                     u = !n.memory || [t, i],
                     l = !0,
                     s = !0,
                     e = c || 0,
                     c = 0,
                     h = r.length; r && e < h; e++)
                if (r[e].apply(t, i) === !1 && n.stopOnFalse) {
                    u = !0;
                    break
                }
            s = !1;
            r && (n.once ? u === !0 ? o.disable() : r = [] : f && f.length && (u = f.shift(),
                    o.fireWith(u[0], u[1])))
        }, o = {
            add: function() {
                if (r) {
                    var n = r.length;
                    a(arguments);
                    s ? h = r.length : u && u !== !0 && (c = n,
                            v(u[0], u[1]))
                }
                return this
            },
            remove: function() {
                var t;
                if (r)
                    for (var u = arguments, i = 0, f = u.length; i < f; i++)
                        for (t = 0; t < r.length; t++)
                            if (u[i] === r[t] && (s && t <= h && (h--,
                                t <= e && e--),
                                    r.splice(t--, 1),
                                    n.unique))
                                break;
                return this
            },
            has: function(n) {
                if (r)
                    for (var t = 0, i = r.length; t < i; t++)
                        if (n === r[t])
                            return !0;
                return !1
            },
            empty: function() {
                return r = [],
                    this
            },
            disable: function() {
                return r = f = u = t,
                    this
            },
            disabled: function() {
                return !r
            },
            lock: function() {
                return f = t,
                u && u !== !0 || o.disable(),
                    this
            },
            locked: function() {
                return !f
            },
            fireWith: function(t, i) {
                return f && (s ? n.once || f.push([t, i]) : (!n.once || !u) && v(t, i)),
                    this
            },
            fire: function() {
                return o.fireWith(this, arguments),
                    this
            },
            fired: function() {
                return !!l
            }
        };
        return o
    }
    ;
    d = [].slice;
    i.extend({
        Deferred: function(n) {
            var u = i.Callbacks("once memory"), f = i.Callbacks("once memory"), e = i.Callbacks("memory"), s = "pending", h = {
                resolve: u,
                reject: f,
                notify: e
            }, o = {
                done: u.add,
                fail: f.add,
                progress: e.add,
                state: function() {
                    return s
                },
                isResolved: u.fired,
                isRejected: f.fired,
                then: function(n, i, r) {
                    return t.done(n).fail(i).progress(r),
                        this
                },
                always: function() {
                    return t.done.apply(t, arguments).fail.apply(t, arguments),
                        this
                },
                pipe: function(n, r, u) {
                    return i.Deferred(function(f) {
                        i.each({
                            done: [n, "resolve"],
                            fail: [r, "reject"],
                            progress: [u, "notify"]
                        }, function(n, r) {
                            var e = r[0], o = r[1], u;
                            i.isFunction(e) ? t[n](function() {
                                    u = e.apply(this, arguments);
                                    u && i.isFunction(u.promise) ? u.promise().then(f.resolve, f.reject, f.notify) : f[o + "With"](this === t ? f : this, [u])
                                }) : t[n](f[o])
                        })
                    }).promise()
                },
                promise: function(n) {
                    if (n == null)
                        n = o;
                    else
                        for (var t in o)
                            n[t] = o[t];
                    return n
                }
            }, t = o.promise({}), r;
            for (r in h)
                t[r] = h[r].fire,
                    t[r + "With"] = h[r].fireWith;
            return t.done(function() {
                s = "resolved"
            }, f.disable, e.lock).fail(function() {
                s = "rejected"
            }, u.disable, e.lock),
            n && n.call(t, t),
                t
        },
        when: function(n) {
            function h(n) {
                return function(i) {
                    o[n] = arguments.length > 1 ? d.call(arguments, 0) : i;
                    t.notifyWith(s, o)
                }
            }
            function c(n) {
                return function(i) {
                    r[n] = arguments.length > 1 ? d.call(arguments, 0) : i;
                    --e || t.resolveWith(t, r)
                }
            }
            var r = d.call(arguments, 0)
                , u = 0
                , f = r.length
                , o = Array(f)
                , e = f
                , l = f
                , t = f <= 1 && n && i.isFunction(n.promise) ? n : i.Deferred()
                , s = t.promise();
            if (f > 1) {
                for (; u < f; u++)
                    r[u] && r[u].promise && i.isFunction(r[u].promise) ? r[u].promise().then(c(u), t.reject, h(u)) : --e;
                e || t.resolveWith(t, r)
            } else
                t !== n && t.resolveWith(t, f ? [n] : []);
            return s
        }
    });
    i.support = function() {
        var u, v, o, c, l, f, e, h, a, y, s, t = r.createElement("div"), p = r.documentElement;
        if (t.setAttribute("className", "t"),
                t.innerHTML = "   <link/><table><\/table><a href='/a' style='top:1px;float:left;opacity:.55;'>a<\/a><input type='checkbox'/>",
                v = t.getElementsByTagName("*"),
                o = t.getElementsByTagName("a")[0],
            !v || !v.length || !o)
            return {};
        c = r.createElement("select");
        l = c.appendChild(r.createElement("option"));
        f = t.getElementsByTagName("input")[0];
        u = {
            leadingWhitespace: t.firstChild.nodeType === 3,
            tbody: !t.getElementsByTagName("tbody").length,
            htmlSerialize: !!t.getElementsByTagName("link").length,
            style: /top/.test(o.getAttribute("style")),
            hrefNormalized: o.getAttribute("href") === "/a",
            opacity: /^0.55/.test(o.style.opacity),
            cssFloat: !!o.style.cssFloat,
            checkOn: f.value === "on",
            optSelected: l.selected,
            getSetAttribute: t.className !== "t",
            enctype: !!r.createElement("form").enctype,
            html5Clone: r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav><\/:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        };
        i.boxModel = u.boxModel = r.compatMode === "CSS1Compat";
        f.checked = !0;
        u.noCloneChecked = f.cloneNode(!0).checked;
        c.disabled = !0;
        u.optDisabled = !l.disabled;
        try {
            delete t.test
        } catch (w) {
            u.deleteExpando = !1
        }
        if (!t.addEventListener && t.attachEvent && t.fireEvent && (t.attachEvent("onclick", function() {
                u.noCloneEvent = !1
            }),
                t.cloneNode(!0).fireEvent("onclick")),
                f = r.createElement("input"),
                f.value = "t",
                f.setAttribute("type", "radio"),
                u.radioValue = f.value === "t",
                f.setAttribute("checked", "checked"),
                f.setAttribute("name", "t"),
                t.appendChild(f),
                e = r.createDocumentFragment(),
                e.appendChild(t.lastChild),
                u.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
                u.appendChecked = f.checked,
                e.removeChild(f),
                e.appendChild(t),
                t.attachEvent)
            for (y in {
                submit: 1,
                change: 1,
                focusin: 1
            })
                a = "on" + y,
                    s = a in t,
                s || (t.setAttribute(a, "return;"),
                    s = typeof t[a] == "function"),
                    u[y + "Bubbles"] = s;
        return e.removeChild(t),
            e = c = l = t = f = null,
            i(function() {
                var e, c, f, k, l, o, y, p, d, w, b, a, v = r.getElementsByTagName("body")[0];
                v && (y = 1,
                    a = "padding:0;margin:0;border:",
                    w = "position:absolute;top:0;left:0;width:1px;height:1px;",
                    b = a + "0;visibility:hidden;",
                    p = "style='" + w + a + "5px solid #000;",
                    d = "<div " + p + "display:block;'><div style='" + a + "0;display:block;overflow:hidden;'><\/div><\/div><table " + p + "' cellpadding='0' cellspacing='0'><tr><td><\/td><\/tr><\/table>",
                    e = r.createElement("div"),
                    e.style.cssText = b + "width:0;height:0;position:static;top:0;margin-top:" + y + "px",
                    v.insertBefore(e, v.firstChild),
                    t = r.createElement("div"),
                    e.appendChild(t),
                    t.innerHTML = "<table><tr><td style='" + a + "0;display:none'><\/td><td>t<\/td><\/tr><\/table>",
                    h = t.getElementsByTagName("td"),
                    s = h[0].offsetHeight === 0,
                    h[0].style.display = "",
                    h[1].style.display = "none",
                    u.reliableHiddenOffsets = s && h[0].offsetHeight === 0,
                n.getComputedStyle && (t.innerHTML = "",
                    o = r.createElement("div"),
                    o.style.width = "0",
                    o.style.marginRight = "0",
                    t.style.width = "2px",
                    t.appendChild(o),
                    u.reliableMarginRight = (parseInt((n.getComputedStyle(o, null) || {
                            marginRight: 0
                        }).marginRight, 10) || 0) === 0),
                typeof t.style.zoom != "undefined" && (t.innerHTML = "",
                    t.style.width = t.style.padding = "1px",
                    t.style.border = 0,
                    t.style.overflow = "hidden",
                    t.style.display = "inline",
                    t.style.zoom = 1,
                    u.inlineBlockNeedsLayout = t.offsetWidth === 3,
                    t.style.display = "block",
                    t.style.overflow = "visible",
                    t.innerHTML = "<div style='width:5px;'><\/div>",
                    u.shrinkWrapBlocks = t.offsetWidth !== 3),
                    t.style.cssText = w + b,
                    t.innerHTML = d,
                    c = t.firstChild,
                    f = c.firstChild,
                    k = c.nextSibling.firstChild.firstChild,
                    l = {
                        doesNotAddBorder: f.offsetTop !== 5,
                        doesAddBorderForTableAndCells: k.offsetTop === 5
                    },
                    f.style.position = "fixed",
                    f.style.top = "20px",
                    l.fixedPosition = f.offsetTop === 20 || f.offsetTop === 15,
                    f.style.position = f.style.top = "",
                    c.style.overflow = "hidden",
                    c.style.position = "relative",
                    l.subtractsBorderForOverflowNotVisible = f.offsetTop === -5,
                    l.doesNotIncludeMarginInBodyOffset = v.offsetTop !== y,
                n.getComputedStyle && (t.style.marginTop = "1%",
                    u.pixelMargin = (n.getComputedStyle(t, null) || {
                            marginTop: 0
                        }).marginTop !== "1%"),
                typeof e.style.zoom != "undefined" && (e.style.zoom = 1),
                    v.removeChild(e),
                    o = t = e = null,
                    i.extend(u, l))
            }),
            u
    }();
    ci = /^(?:\{.*\}|\[.*\])$/;
    li = /([A-Z])/g;
    i.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando],
            !!n && !ft(n)
        },
        data: function(n, r, u, f) {
            if (!!i.acceptData(n)) {
                var a, o, h, c = i.expando, v = typeof r == "string", l = n.nodeType, s = l ? i.cache : n, e = l ? n[c] : n[c] && c, y = r === "events";
                return (!e || !s[e] || !y && !f && !s[e].data) && v && u === t ? void 0 : (e || (l ? n[c] = e = ++i.uuid : e = c),
                    s[e] || (s[e] = {},
                    l || (s[e].toJSON = i.noop)),
                    (typeof r == "object" || typeof r == "function") && (f ? s[e] = i.extend(s[e], r) : s[e].data = i.extend(s[e].data, r)),
                        a = o = s[e],
                    f || (o.data || (o.data = {}),
                        o = o.data),
                    u !== t && (o[i.camelCase(r)] = u),
                    y && !o[r]) ? a.events : (v ? (h = o[r],
                            h == null && (h = o[i.camelCase(r)])) : h = o,
                            h)
            }
        },
        removeData: function(n, t, r) {
            if (!!i.acceptData(n)) {
                var e, s, c, o = i.expando, h = n.nodeType, u = h ? i.cache : n, f = h ? n[o] : o;
                if (!u[f])
                    return;
                if (t && (e = r ? u[f] : u[f].data,
                        e)) {
                    for (i.isArray(t) || ((t in e) ? t = [t] : (t = i.camelCase(t),
                            t = (t in e) ? [t] : t.split(" "))),
                             s = 0,
                             c = t.length; s < c; s++)
                        delete e[t[s]];
                    if (!(r ? ft : i.isEmptyObject)(e))
                        return
                }
                if (!r && (delete u[f].data,
                        !ft(u[f])))
                    return;
                i.support.deleteExpando || !u.setInterval ? delete u[f] : u[f] = null;
                h && (i.support.deleteExpando ? delete n[o] : n.removeAttribute ? n.removeAttribute(o) : n[o] = null)
            }
        },
        _data: function(n, t, r) {
            return i.data(n, t, r, !0)
        },
        acceptData: function(n) {
            if (n.nodeName) {
                var t = i.noData[n.nodeName.toLowerCase()];
                if (t)
                    return t !== !0 && n.getAttribute("classid") === t
            }
            return !0
        }
    });
    i.fn.extend({
        data: function(n, r) {
            var u, s, h, o, l, e = this[0], c = 0, f = null;
            if (n === t) {
                if (this.length && (f = i.data(e),
                    e.nodeType === 1 && !i._data(e, "parsedAttrs"))) {
                    for (h = e.attributes,
                             l = h.length; c < l; c++)
                        o = h[c].name,
                        o.indexOf("data-") === 0 && (o = i.camelCase(o.substring(5)),
                            si(e, o, f[o]));
                    i._data(e, "parsedAttrs", !0)
                }
                return f
            }
            return typeof n == "object" ? this.each(function() {
                    i.data(this, n)
                }) : (u = n.split(".", 2),
                    u[1] = u[1] ? "." + u[1] : "",
                    s = u[1] + "!",
                    i.access(this, function(r) {
                        if (r === t)
                            return f = this.triggerHandler("getData" + s, [u[0]]),
                            f === t && e && (f = i.data(e, n),
                                f = si(e, n, f)),
                                f === t && u[1] ? this.data(u[0]) : f;
                        u[1] = r;
                        this.each(function() {
                            var t = i(this);
                            t.triggerHandler("setData" + s, u);
                            i.data(this, n, r);
                            t.triggerHandler("changeData" + s, u)
                        })
                    }, null, r, arguments.length > 1, null, !1))
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n)
            })
        }
    });
    i.extend({
        _mark: function(n, t) {
            n && (t = (t || "fx") + "mark",
                i._data(n, t, (i._data(n, t) || 0) + 1))
        },
        _unmark: function(n, t, r) {
            if (n !== !0 && (r = t,
                    t = n,
                    n = !1),
                    t) {
                r = r || "fx";
                var u = r + "mark"
                    , f = n ? 0 : (i._data(t, u) || 1) - 1;
                f ? i._data(t, u, f) : (i.removeData(t, u, !0),
                        oi(t, r, "mark"))
            }
        },
        queue: function(n, t, r) {
            var u;
            if (n)
                return t = (t || "fx") + "queue",
                    u = i._data(n, t),
                r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)),
                u || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t)
                , u = r.shift()
                , f = {};
            u === "inprogress" && (u = r.shift());
            u && (t === "fx" && r.unshift("inprogress"),
                i._data(n, t + ".run", f),
                u.call(n, function() {
                    i.dequeue(n, t)
                }, f));
            r.length || (i.removeData(n, t + "queue " + t + ".run", !0),
                oi(n, t, "queue"))
        }
    });
    i.fn.extend({
        queue: function(n, r) {
            var u = 2;
            return (typeof n != "string" && (r = n,
                n = "fx",
                u--),
            arguments.length < u) ? i.queue(this[0], n) : r === t ? this : this.each(function() {
                        var t = i.queue(this, n, r);
                        n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n)
                    })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        delay: function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n,
                t = t || "fx",
                this.queue(t, function(t, i) {
                    var r = setTimeout(t, n);
                    i.stop = function() {
                        clearTimeout(r)
                    }
                })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, r) {
            function e() {
                --s || o.resolveWith(u, [u])
            }
            typeof n != "string" && (r = n,
                n = t);
            n = n || "fx";
            for (var o = i.Deferred(), u = this, f = u.length, s = 1, h = n + "defer", l = n + "queue", a = n + "mark", c; f--; )
                (c = i.data(u[f], h, t, !0) || (i.data(u[f], l, t, !0) || i.data(u[f], a, t, !0)) && i.data(u[f], h, i.Callbacks("once memory"), !0)) && (s++,
                    c.add(e));
            return e(),
                o.promise(r)
        }
    });
    var ai = /[\n\t\r]/g, g = /\s+/, ou = /\r/g, su = /^(?:button|input)$/i, hu = /^(?:button|input|object|select|textarea)$/i, cu = /^a(?:rea)?$/i, vi = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, yi = i.support.getSetAttribute, e, pi, wi;
    i.fn.extend({
        attr: function(n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        },
        prop: function(n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n,
                this.each(function() {
                    try {
                        this[n] = t;
                        delete this[n]
                    } catch (i) {}
                })
        },
        addClass: function(n) {
            var r, f, o, t, e, u, s;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).addClass(n.call(this, t, this.className))
                });
            if (n && typeof n == "string")
                for (r = n.split(g),
                         f = 0,
                         o = this.length; f < o; f++)
                    if (t = this[f],
                        t.nodeType === 1)
                        if (t.className || r.length !== 1) {
                            for (e = " " + t.className + " ",
                                     u = 0,
                                     s = r.length; u < s; u++)
                                ~e.indexOf(" " + r[u] + " ") || (e += r[u] + " ");
                            t.className = i.trim(e)
                        } else
                            t.className = n;
            return this
        },
        removeClass: function(n) {
            var o, u, s, r, f, e, h;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, this.className))
                });
            if (n && typeof n == "string" || n === t)
                for (o = (n || "").split(g),
                         u = 0,
                         s = this.length; u < s; u++)
                    if (r = this[u],
                        r.nodeType === 1 && r.className)
                        if (n) {
                            for (f = (" " + r.className + " ").replace(ai, " "),
                                     e = 0,
                                     h = o.length; e < h; e++)
                                f = f.replace(" " + o[e] + " ", " ");
                            r.className = i.trim(f)
                        } else
                            r.className = "";
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n
                , u = typeof t == "boolean";
            return i.isFunction(n) ? this.each(function(r) {
                    i(this).toggleClass(n.call(this, r, this.className, t), t)
                }) : this.each(function() {
                    if (r === "string")
                        for (var f, s = 0, o = i(this), e = t, h = n.split(g); f = h[s++]; )
                            e = u ? e : !o.hasClass(f),
                                o[e ? "addClass" : "removeClass"](f);
                    else
                        (r === "undefined" || r === "boolean") && (this.className && i._data(this, "__className__", this.className),
                            this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
                })
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++)
                if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(ai, " ").indexOf(i) > -1)
                    return !0;
            return !1
        },
        val: function(n) {
            var r, u, e, f = this[0];
            return !arguments.length ? f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()],
                    r && "get"in r && (u = r.get(f, "value")) !== t) ? u : (u = f.value,
                            typeof u == "string" ? u.replace(ou, "") : u == null ? "" : u) : void 0 : (e = i.isFunction(n),
                    this.each(function(u) {
                        var o = i(this), f;
                        this.nodeType === 1 && (f = e ? n.call(this, u, o.val()) : n,
                            f == null ? f = "" : typeof f == "number" ? f += "" : i.isArray(f) && (f = i.map(f, function(n) {
                                        return n == null ? "" : n + ""
                                    })),
                            r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()],
                        r && "set"in r && r.set(this, f, "value") !== t || (this.value = f))
                    }))
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = n.attributes.value;
                    return !t || t.specified ? n.value : n.text
                }
            },
            select: {
                get: function(n) {
                    var o, r, h, t, u = n.selectedIndex, s = [], f = n.options, e = n.type === "select-one";
                    if (u < 0)
                        return null;
                    for (r = e ? u : 0,
                             h = e ? u + 1 : f.length; r < h; r++)
                        if (t = f[r],
                            t.selected && (i.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(),
                                    e)
                                return o;
                            s.push(o)
                        }
                    return e && !s.length && f.length ? i(f[u]).val() : s
                },
                set: function(n, t) {
                    var r = i.makeArray(t);
                    return i(n).find("option").each(function() {
                        this.selected = i.inArray(i(this).val(), r) >= 0
                    }),
                    r.length || (n.selectedIndex = -1),
                        r
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(n, r, u, f) {
            var o, s, h, c = n.nodeType;
            if (!!n && c !== 3 && c !== 8 && c !== 2) {
                if (f && r in i.attrFn)
                    return i(n)[r](u);
                if (typeof n.getAttribute == "undefined")
                    return i.prop(n, r, u);
                if (h = c !== 1 || !i.isXMLDoc(n),
                    h && (r = r.toLowerCase(),
                        s = i.attrHooks[r] || (vi.test(r) ? pi : e)),
                    u !== t) {
                    if (u === null) {
                        i.removeAttr(n, r);
                        return
                    }
                    return s && "set"in s && h && (o = s.set(n, u, r)) !== t ? o : (n.setAttribute(r, "" + u),
                            u)
                }
                return s && "get"in s && h && (o = s.get(n, r)) !== null ? o : (o = n.getAttribute(r),
                        o === null ? t : o)
            }
        },
        removeAttr: function(n, t) {
            var u, f, r, s, e, o = 0;
            if (t && n.nodeType === 1)
                for (f = t.toLowerCase().split(g),
                         s = f.length; o < s; o++)
                    r = f[o],
                    r && (u = i.propFix[r] || r,
                        e = vi.test(r),
                    e || i.attr(n, r, ""),
                        n.removeAttribute(yi ? r : u),
                    e && u in n && (n[u] = !1))
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (su.test(n.nodeName) && n.parentNode)
                        i.error("type property can't be changed");
                    else if (!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t),
                        r && (n.value = r),
                            t
                    }
                }
            },
            value: {
                get: function(n, t) {
                    return e && i.nodeName(n, "button") ? e.get(n, t) : t in n ? n.value : null
                },
                set: function(n, t, r) {
                    if (e && i.nodeName(n, "button"))
                        return e.set(n, t, r);
                    n.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(n, r, u) {
            var e, f, s, o = n.nodeType;
            if (!!n && o !== 3 && o !== 8 && o !== 2)
                return s = o !== 1 || !i.isXMLDoc(n),
                s && (r = i.propFix[r] || r,
                    f = i.propHooks[r]),
                    u !== t ? f && "set"in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get"in f && (e = f.get(n, r)) !== null ? e : n[r]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var i = n.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : hu.test(n.nodeName) || cu.test(n.nodeName) && n.href ? 0 : t
                }
            }
        }
    });
    i.attrHooks.tabindex = i.propHooks.tabIndex;
    pi = {
        get: function(n, r) {
            var u, f = i.prop(n, r);
            return f === !0 || typeof f != "boolean" && (u = n.getAttributeNode(r)) && u.nodeValue !== !1 ? r.toLowerCase() : t
        },
        set: function(n, t, r) {
            var u;
            return t === !1 ? i.removeAttr(n, r) : (u = i.propFix[r] || r,
                u in n && (n[u] = !0),
                    n.setAttribute(r, r.toLowerCase())),
                r
        }
    };
    yi || (wi = {
        name: !0,
        id: !0,
        coords: !0
    },
        e = i.valHooks.button = {
            get: function(n, i) {
                var r;
                return r = n.getAttributeNode(i),
                    r && (wi[i] ? r.nodeValue !== "" : r.specified) ? r.nodeValue : t
            },
            set: function(n, t, i) {
                var u = n.getAttributeNode(i);
                return u || (u = r.createAttribute(i),
                    n.setAttributeNode(u)),
                    u.nodeValue = t + ""
            }
        },
        i.attrHooks.tabindex.set = e.set,
        i.each(["width", "height"], function(n, t) {
            i.attrHooks[t] = i.extend(i.attrHooks[t], {
                set: function(n, i) {
                    if (i === "")
                        return n.setAttribute(t, "auto"),
                            i
                }
            })
        }),
        i.attrHooks.contenteditable = {
            get: e.get,
            set: function(n, t, i) {
                t === "" && (t = "false");
                e.set(n, t, i)
            }
        });
    i.support.hrefNormalized || i.each(["href", "src", "width", "height"], function(n, r) {
        i.attrHooks[r] = i.extend(i.attrHooks[r], {
            get: function(n) {
                var i = n.getAttribute(r, 2);
                return i === null ? t : i
            }
        })
    });
    i.support.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText.toLowerCase() || t
        },
        set: function(n, t) {
            return n.style.cssText = "" + t
        }
    });
    i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
                null
        }
    }));
    i.support.enctype || (i.propFix.enctype = "encoding");
    i.support.checkOn || i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            get: function(n) {
                return n.getAttribute("value") === null ? "on" : n.value
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = i.extend(i.valHooks[this], {
            set: function(n, t) {
                if (i.isArray(t))
                    return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        })
    });
    var et = /^(?:textarea|input|select)$/i
        , bi = /^([^\.]*)?(?:\.(.+))?$/
        , lu = /(?:^|\s)hover(\.\S+)?\b/
        , au = /^key/
        , vu = /^(?:mouse|contextmenu)|click/
        , ki = /^(?:focusinfocus|focusoutblur)$/
        , yu = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/
        , pu = function(n) {
        var t = yu.exec(n);
        return t && (t[1] = (t[1] || "").toLowerCase(),
            t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")),
            t
    }
        , wu = function(n, t) {
        var i = n.attributes || {};
        return (!t[1] || n.nodeName.toLowerCase() === t[1]) && (!t[2] || (i.id || {}).value === t[2]) && (!t[3] || t[3].test((i["class"] || {}).value))
    }
        , di = function(n) {
        return i.event.special.hover ? n : n.replace(lu, "mouseenter$1 mouseleave$1")
    };
    i.event = {
        add: function(n, r, u, f, e) {
            var a, s, v, y, p, o, b, l, w, c, h;
            if (!(n.nodeType === 3 || n.nodeType === 8 || !r || !u || !(a = i._data(n)))) {
                for (u.handler && (w = u,
                    u = w.handler,
                    e = w.selector),
                     u.guid || (u.guid = i.guid++),
                         v = a.events,
                     v || (a.events = v = {}),
                         s = a.handle,
                     s || (a.handle = s = function(n) {
                         return typeof i != "undefined" && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(s.elem, arguments) : t
                     }
                         ,
                         s.elem = n),
                         r = i.trim(di(r)).split(" "),
                         y = 0; y < r.length; y++)
                    p = bi.exec(r[y]) || [],
                        o = p[1],
                        b = (p[2] || "").split(".").sort(),
                        h = i.event.special[o] || {},
                        o = (e ? h.delegateType : h.bindType) || o,
                        h = i.event.special[o] || {},
                        l = i.extend({
                            type: o,
                            origType: p[1],
                            data: f,
                            handler: u,
                            guid: u.guid,
                            selector: e,
                            quick: e && pu(e),
                            namespace: b.join(".")
                        }, w),
                        c = v[o],
                    c || (c = v[o] = [],
                        c.delegateCount = 0,
                    h.setup && h.setup.call(n, f, b, s) !== !1 || (n.addEventListener ? n.addEventListener(o, s, !1) : n.attachEvent && n.attachEvent("on" + o, s))),
                    h.add && (h.add.call(n, l),
                    l.handler.guid || (l.handler.guid = u.guid)),
                        e ? c.splice(c.delegateCount++, 0, l) : c.push(l),
                        i.event.global[o] = !0;
                n = null
            }
        },
        global: {},
        remove: function(n, t, r, u, f) {
            var y = i.hasData(n) && i._data(n), l, p, e, b, h, k, a, v, c, w, o, s;
            if (!!y && !!(v = y.events)) {
                for (t = i.trim(di(t || "")).split(" "),
                         l = 0; l < t.length; l++) {
                    if (p = bi.exec(t[l]) || [],
                            e = b = p[1],
                            h = p[2],
                            !e) {
                        for (e in v)
                            i.event.remove(n, e + t[l], r, u, !0);
                        continue
                    }
                    for (c = i.event.special[e] || {},
                             e = (u ? c.delegateType : c.bindType) || e,
                             o = v[e] || [],
                             k = o.length,
                             h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                             a = 0; a < o.length; a++)
                        s = o[a],
                        (f || b === s.origType) && (!r || r.guid === s.guid) && (!h || h.test(s.namespace)) && (!u || u === s.selector || u === "**" && s.selector) && (o.splice(a--, 1),
                        s.selector && o.delegateCount--,
                        c.remove && c.remove.call(n, s));
                    o.length === 0 && k !== o.length && ((!c.teardown || c.teardown.call(n, h) === !1) && i.removeEvent(n, e, y.handle),
                        delete v[e])
                }
                i.isEmptyObject(v) && (w = y.handle,
                w && (w.elem = null),
                    i.removeData(n, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(r, u, f, e) {
            if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
                var o = r.type || r, p = [], w, k, c, s, h, a, l, v, y, b;
                if (ki.test(o + i.event.triggered))
                    return;
                if (o.indexOf("!") >= 0 && (o = o.slice(0, -1),
                        k = !0),
                    o.indexOf(".") >= 0 && (p = o.split("."),
                        o = p.shift(),
                        p.sort()),
                    (!f || i.event.customEvent[o]) && !i.event.global[o])
                    return;
                if (r = typeof r == "object" ? r[i.expando] ? r : new i.Event(o,r) : new i.Event(o),
                        r.type = o,
                        r.isTrigger = !0,
                        r.exclusive = k,
                        r.namespace = p.join("."),
                        r.namespace_re = r.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                        a = o.indexOf(":") < 0 ? "on" + o : "",
                        !f) {
                    w = i.cache;
                    for (c in w)
                        w[c].events && w[c].events[o] && i.event.trigger(r, u, w[c].handle.elem, !0);
                    return
                }
                if (r.result = t,
                    r.target || (r.target = f),
                        u = u != null ? i.makeArray(u) : [],
                        u.unshift(r),
                        l = i.event.special[o] || {},
                    l.trigger && l.trigger.apply(f, u) === !1)
                    return;
                if (y = [[f, l.bindType || o]],
                    !e && !l.noBubble && !i.isWindow(f)) {
                    for (b = l.delegateType || o,
                             s = ki.test(b + o) ? f : f.parentNode,
                             h = null; s; s = s.parentNode)
                        y.push([s, b]),
                            h = s;
                    h && h === f.ownerDocument && y.push([h.defaultView || h.parentWindow || n, b])
                }
                for (c = 0; c < y.length && !r.isPropagationStopped(); c++)
                    s = y[c][0],
                        r.type = y[c][1],
                        v = (i._data(s, "events") || {})[r.type] && i._data(s, "handle"),
                    v && v.apply(s, u),
                        v = a && s[a],
                    v && i.acceptData(s) && v.apply(s, u) === !1 && r.preventDefault();
                return r.type = o,
                e || r.isDefaultPrevented() || l._default && l._default.apply(f.ownerDocument, u) !== !1 || o === "click" && i.nodeName(f, "a") || !i.acceptData(f) || !a || !f[o] || (o === "focus" || o === "blur") && r.target.offsetWidth === 0 || i.isWindow(f) || (h = f[a],
                h && (f[a] = null),
                    i.event.triggered = o,
                    f[o](),
                    i.event.triggered = t,
                h && (f[a] = h)),
                    r.result
            }
        },
        dispatch: function(r) {
            r = i.event.fix(r || n.event);
            var h = (i._data(this, "events") || {})[r.type] || [], c = h.delegateCount, k = [].slice.call(arguments, 0), d = !r.exclusive && !r.namespace, l = i.event.special[r.type] || {}, a = [], f, v, e, y, p, w, o, b, u, s;
            if (k[0] = r,
                    r.delegateTarget = this,
                !l.preDispatch || l.preDispatch.call(this, r) !== !1) {
                if (c && (!r.button || r.type !== "click"))
                    for (y = i(this),
                             y.context = this.ownerDocument || this,
                             e = r.target; e != this; e = e.parentNode || this)
                        if (e.disabled !== !0) {
                            for (w = {},
                                     b = [],
                                     y[0] = e,
                                     f = 0; f < c; f++)
                                u = h[f],
                                    s = u.selector,
                                w[s] === t && (w[s] = u.quick ? wu(e, u.quick) : y.is(s)),
                                w[s] && b.push(u);
                            b.length && a.push({
                                elem: e,
                                matches: b
                            })
                        }
                for (h.length > c && a.push({
                    elem: this,
                    matches: h.slice(c)
                }),
                         f = 0; f < a.length && !r.isPropagationStopped(); f++)
                    for (o = a[f],
                             r.currentTarget = o.elem,
                             v = 0; v < o.matches.length && !r.isImmediatePropagationStopped(); v++)
                        u = o.matches[v],
                        (d || !r.namespace && !u.namespace || r.namespace_re && r.namespace_re.test(u.namespace)) && (r.data = u.data,
                            r.handleObj = u,
                            p = ((i.event.special[u.origType] || {}).handle || u.handler).apply(o.elem, k),
                        p !== t && (r.result = p,
                        p === !1 && (r.preventDefault(),
                            r.stopPropagation())));
                return l.postDispatch && l.postDispatch.call(this, r),
                    r.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode),
                    n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, i) {
                var o, u, f, e = i.button, s = i.fromElement;
                return n.pageX == null && i.clientX != null && (o = n.target.ownerDocument || r,
                    u = o.documentElement,
                    f = o.body,
                    n.pageX = i.clientX + (u && u.scrollLeft || f && f.scrollLeft || 0) - (u && u.clientLeft || f && f.clientLeft || 0),
                    n.pageY = i.clientY + (u && u.scrollTop || f && f.scrollTop || 0) - (u && u.clientTop || f && f.clientTop || 0)),
                !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s),
                !n.which && e !== t && (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0),
                    n
            }
        },
        fix: function(n) {
            if (n[i.expando])
                return n;
            var e, o, u = n, f = i.event.fixHooks[n.type] || {}, s = f.props ? this.props.concat(f.props) : this.props;
            for (n = i.Event(u),
                     e = s.length; e; )
                o = s[--e],
                    n[o] = u[o];
            return n.target || (n.target = u.srcElement || r),
            n.target.nodeType === 3 && (n.target = n.target.parentNode),
            n.metaKey === t && (n.metaKey = n.ctrlKey),
                f.filter ? f.filter(n, u) : n
        },
        special: {
            ready: {
                setup: i.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(n, t, r) {
                    i.isWindow(this) && (this.onbeforeunload = r)
                },
                teardown: function(n, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.event.handle = i.event.dispatch;
    i.removeEvent = r.removeEventListener ? function(n, t, i) {
            n.removeEventListener && n.removeEventListener(t, i, !1)
        }
        : function(n, t, i) {
            n.detachEvent && n.detachEvent("on" + t, i)
        }
    ;
    i.Event = function(n, t) {
        if (!(this instanceof i.Event))
            return new i.Event(n,t);
        n && n.type ? (this.originalEvent = n,
                this.type = n.type,
                this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? k : l) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || i.now();
        this[i.expando] = !0
    }
    ;
    i.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = k;
            var n = this.originalEvent;
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = k;
            var n = this.originalEvent;
            n && (n.stopPropagation && n.stopPropagation(),
                n.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = k;
            this.stopPropagation()
        },
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var f = this, r = n.relatedTarget, u = n.handleObj, o = u.selector, e;
                return r && (r === f || i.contains(f, r)) || (n.type = u.origType,
                    e = u.handler.apply(this, arguments),
                    n.type = t),
                    e
            }
        }
    });
    i.support.submitBubbles || (i.event.special.submit = {
        setup: function() {
            if (i.nodeName(this, "form"))
                return !1;
            i.event.add(this, "click._submit keypress._submit", function(n) {
                var u = n.target
                    , r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                r && !r._submit_attached && (i.event.add(r, "submit._submit", function(n) {
                    n._submit_bubble = !0
                }),
                    r._submit_attached = !0)
            })
        },
        postDispatch: function(n) {
            n._submit_bubble && (delete n._submit_bubble,
            this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        },
        teardown: function() {
            if (i.nodeName(this, "form"))
                return !1;
            i.event.remove(this, "._submit")
        }
    });
    i.support.changeBubbles || (i.event.special.change = {
        setup: function() {
            if (et.test(this.nodeName))
                return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function(n) {
                    n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }),
                    i.event.add(this, "click._change", function(n) {
                        this._just_changed && !n.isTrigger && (this._just_changed = !1,
                            i.event.simulate("change", this, n, !0))
                    })),
                    !1;
            i.event.add(this, "beforeactivate._change", function(n) {
                var t = n.target;
                et.test(t.nodeName) && !t._change_attached && (i.event.add(t, "change._change", function(n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }),
                    t._change_attached = !0)
            })
        },
        handle: function(n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox")
                return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return i.event.remove(this, "._change"),
                et.test(this.nodeName)
        }
    });
    i.support.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = 0
            , f = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function() {
                u++ == 0 && r.addEventListener(n, f, !0)
            },
            teardown: function() {
                --u == 0 && r.removeEventListener(n, f, !0)
            }
        }
    });
    i.fn.extend({
        on: function(n, r, u, f, e) {
            var o, s;
            if (typeof n == "object") {
                typeof r != "string" && (u = u || r,
                    r = t);
                for (s in n)
                    this.on(s, r, u, n[s], e);
                return this
            }
            if (u == null && f == null ? (f = r,
                        u = r = t) : f == null && (typeof r == "string" ? (f = u,
                            u = t) : (f = u,
                            u = r,
                            r = t)),
                f === !1)
                f = l;
            else if (!f)
                return this;
            return e === 1 && (o = f,
                f = function(n) {
                    return i().off(n),
                        o.apply(this, arguments)
                }
                ,
                f.guid = o.guid || (o.guid = i.guid++)),
                this.each(function() {
                    i.event.add(this, n, f, u, r)
                })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, r, u) {
            var f, e;
            if (n && n.preventDefault && n.handleObj)
                return f = n.handleObj,
                    i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler),
                    this;
            if (typeof n == "object") {
                for (e in n)
                    this.off(e, r, n[e]);
                return this
            }
            return (r === !1 || typeof r == "function") && (u = r,
                r = t),
            u === !1 && (u = l),
                this.each(function() {
                    i.event.remove(this, n, u, r)
                })
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        live: function(n, t, r) {
            i(this.context).on(n, this.selector, t, r);
            return this
        },
        die: function(n, t) {
            return i(this.context).off(n, this.selector || "**", t),
                this
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return arguments.length == 1 ? this.off(n, "**") : this.off(t, n, i)
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            if (this[0])
                return i.event.trigger(n, t, this[0], !0)
        },
        toggle: function(n) {
            var t = arguments
                , u = n.guid || i.guid++
                , r = 0
                , f = function(u) {
                var f = (i._data(this, "lastToggle" + n.guid) || 0) % r;
                return i._data(this, "lastToggle" + n.guid, f + 1),
                    u.preventDefault(),
                t[f].apply(this, arguments) || !1
            };
            for (f.guid = u; r < t.length; )
                t[r++].guid = u;
            return this.click(f)
        },
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return i == null && (i = n,
                n = null),
                arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
        ;
        i.attrFn && (i.attrFn[t] = !0);
        au.test(t) && (i.event.fixHooks[t] = i.event.keyHooks);
        vu.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks)
    }),
        function() {
            function b(t, i, r, u, f, o) {
                for (var s, c, h = 0, l = u.length; h < l; h++)
                    if (s = u[h],
                            s) {
                        for (c = !1,
                                 s = s[t]; s; ) {
                            if (s[e] === r) {
                                c = u[s.sizset];
                                break
                            }
                            if (s.nodeType === 1)
                                if (o || (s[e] = r,
                                        s.sizset = h),
                                    typeof i != "string") {
                                    if (s === i) {
                                        c = !0;
                                        break
                                    }
                                } else if (n.filter(i, [s]).length > 0) {
                                    c = s;
                                    break
                                }
                            s = s[t]
                        }
                        u[h] = c
                    }
            }
            function k(n, t, i, r, u, f) {
                for (var o, h, s = 0, c = r.length; s < c; s++)
                    if (o = r[s],
                            o) {
                        for (h = !1,
                                 o = o[n]; o; ) {
                            if (o[e] === i) {
                                h = r[o.sizset];
                                break
                            }
                            if (o.nodeType !== 1 || f || (o[e] = i,
                                    o.sizset = s),
                                o.nodeName.toLowerCase() === t) {
                                h = o;
                                break
                            }
                            o = o[n]
                        }
                        r[s] = h
                    }
            }
            var v = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, e = "sizcache" + (Math.random() + "").replace(".", ""), y = 0, d = Object.prototype.toString, c = !1, g = !0, o = /\\/g, tt = /\r\n/g, l = /\W/, n, s, f, a, h, w;
            [0, 0].sort(function() {
                return g = !1,
                    0
            });
            n = function(t, i, e, o) {
                var tt;
                if (e = e || [],
                        i = i || r,
                        tt = i,
                    i.nodeType !== 1 && i.nodeType !== 9)
                    return [];
                if (!t || typeof t != "string")
                    return e;
                var y, a, h, g, l, p, b, c, it = !0, k = n.isXML(i), s = [], rt = t;
                do
                    if (v.exec(""),
                            y = v.exec(rt),
                        y && (rt = y[3],
                            s.push(y[1]),
                            y[2])) {
                        g = y[3];
                        break
                    }
                while (y);if (s.length > 1 && nt.exec(t))
                    if (s.length === 2 && u.relative[s[0]])
                        a = w(s[0] + s[1], i, o);
                    else
                        for (a = u.relative[s[0]] ? [i] : n(s.shift(), i); s.length; )
                            t = s.shift(),
                            u.relative[t] && (t += s.shift()),
                                a = w(t, a, o);
                else if (!o && s.length > 1 && i.nodeType === 9 && !k && u.match.ID.test(s[0]) && !u.match.ID.test(s[s.length - 1]) && (l = n.find(s.shift(), i, k),
                        i = l.expr ? n.filter(l.expr, l.set)[0] : l.set[0]),
                        i)
                    for (l = o ? {
                            expr: s.pop(),
                            set: f(o)
                        } : n.find(s.pop(), s.length === 1 && (s[0] === "~" || s[0] === "+") && i.parentNode ? i.parentNode : i, k),
                             a = l.expr ? n.filter(l.expr, l.set) : l.set,
                             s.length > 0 ? h = f(a) : it = !1; s.length; )
                        p = s.pop(),
                            b = p,
                            u.relative[p] ? b = s.pop() : p = "",
                        b == null && (b = i),
                            u.relative[p](h, b, k);
                else
                    h = s = [];
                if (h || (h = a),
                    h || n.error(p || t),
                    d.call(h) === "[object Array]")
                    if (it)
                        if (i && i.nodeType === 1)
                            for (c = 0; h[c] != null; c++)
                                h[c] && (h[c] === !0 || h[c].nodeType === 1 && n.contains(i, h[c])) && e.push(a[c]);
                        else
                            for (c = 0; h[c] != null; c++)
                                h[c] && h[c].nodeType === 1 && e.push(a[c]);
                    else
                        e.push.apply(e, h);
                else
                    f(h, e);
                return g && (n(g, tt, e, o),
                    n.uniqueSort(e)),
                    e
            }
            ;
            n.uniqueSort = function(n) {
                if (a && (c = g,
                        n.sort(a),
                        c))
                    for (var t = 1; t < n.length; t++)
                        n[t] === n[t - 1] && n.splice(t--, 1);
                return n
            }
            ;
            n.matches = function(t, i) {
                return n(t, null, null, i)
            }
            ;
            n.matchesSelector = function(t, i) {
                return n(i, null, null, [t]).length > 0
            }
            ;
            n.find = function(n, t, i) {
                var f, e, c, r, s, h;
                if (!n)
                    return [];
                for (e = 0,
                         c = u.order.length; e < c; e++)
                    if (s = u.order[e],
                        (r = u.leftMatch[s].exec(n)) && (h = r[1],
                            r.splice(1, 1),
                        h.substr(h.length - 1) !== "\\" && (r[1] = (r[1] || "").replace(o, ""),
                            f = u.find[s](r, t, i),
                        f != null))) {
                        n = n.replace(u.match[s], "");
                        break
                    }
                return f || (f = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []),
                    {
                        set: f,
                        expr: n
                    }
            }
            ;
            n.filter = function(i, r, f, e) {
                for (var o, h, c, l, y, b, p, a, w, k = i, v = [], s = r, d = r && r[0] && n.isXML(r[0]); i && r.length; ) {
                    for (c in u.filter)
                        if ((o = u.leftMatch[c].exec(i)) != null && o[2]) {
                            if (b = u.filter[c],
                                    p = o[1],
                                    h = !1,
                                    o.splice(1, 1),
                                p.substr(p.length - 1) === "\\")
                                continue;
                            if (s === v && (v = []),
                                    u.preFilter[c])
                                if (o = u.preFilter[c](o, s, f, v, e, d),
                                        o) {
                                    if (o === !0)
                                        continue
                                } else
                                    h = l = !0;
                            if (o)
                                for (a = 0; (y = s[a]) != null; a++)
                                    y && (l = b(y, o, a, s),
                                        w = e ^ l,
                                        f && l != null ? w ? h = !0 : s[a] = !1 : w && (v.push(y),
                                                h = !0));
                            if (l !== t) {
                                if (f || (s = v),
                                        i = i.replace(u.match[c], ""),
                                        !h)
                                    return [];
                                break
                            }
                        }
                    if (i === k)
                        if (h == null)
                            n.error(i);
                        else
                            break;
                    k = i
                }
                return s
            }
            ;
            n.error = function(n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            }
            ;
            var p = n.getText = function(n) {
                var i, r, t = n.nodeType, u = "";
                if (t) {
                    if (t === 1 || t === 9 || t === 11) {
                        if (typeof n.textContent == "string")
                            return n.textContent;
                        if (typeof n.innerText == "string")
                            return n.innerText.replace(tt, "");
                        for (n = n.firstChild; n; n = n.nextSibling)
                            u += p(n)
                    } else if (t === 3 || t === 4)
                        return n.nodeValue
                } else
                    for (i = 0; r = n[i]; i++)
                        r.nodeType !== 8 && (u += p(r));
                return u
            }
                , u = n.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function(n) {
                        return n.getAttribute("href")
                    },
                    type: function(n) {
                        return n.getAttribute("type")
                    }
                },
                relative: {
                    "+": function(t, i) {
                        var f = typeof i == "string", e = f && !l.test(i), o = f && !e, u, s, r;
                        for (e && (i = i.toLowerCase()),
                                 u = 0,
                                 s = t.length; u < s; u++)
                            if (r = t[u]) {
                                while ((r = r.previousSibling) && r.nodeType !== 1)
                                    ;
                                t[u] = o || r && r.nodeName.toLowerCase() === i ? r || !1 : r === i
                            }
                        o && n.filter(i, t, !0)
                    },
                    ">": function(t, i) {
                        var u, f = typeof i == "string", r = 0, o = t.length, e;
                        if (f && !l.test(i))
                            for (i = i.toLowerCase(); r < o; r++)
                                u = t[r],
                                u && (e = u.parentNode,
                                    t[r] = e.nodeName.toLowerCase() === i ? e : !1);
                        else {
                            for (; r < o; r++)
                                u = t[r],
                                u && (t[r] = f ? u.parentNode : u.parentNode === i);
                            f && n.filter(i, t, !0)
                        }
                    },
                    "": function(n, t, i) {
                        var r, f = y++, u = b;
                        typeof t != "string" || l.test(t) || (t = t.toLowerCase(),
                            r = t,
                            u = k);
                        u("parentNode", t, f, n, r, i)
                    },
                    "~": function(n, t, i) {
                        var r, f = y++, u = b;
                        typeof t != "string" || l.test(t) || (t = t.toLowerCase(),
                            r = t,
                            u = k);
                        u("previousSibling", t, f, n, r, i)
                    }
                },
                find: {
                    ID: function(n, t, i) {
                        if (typeof t.getElementById != "undefined" && !i) {
                            var r = t.getElementById(n[1]);
                            return r && r.parentNode ? [r] : []
                        }
                    },
                    NAME: function(n, t) {
                        var r, u, i, f;
                        if (typeof t.getElementsByName != "undefined") {
                            for (r = [],
                                     u = t.getElementsByName(n[1]),
                                     i = 0,
                                     f = u.length; i < f; i++)
                                u[i].getAttribute("name") === n[1] && r.push(u[i]);
                            return r.length === 0 ? null : r
                        }
                    },
                    TAG: function(n, t) {
                        if (typeof t.getElementsByTagName != "undefined")
                            return t.getElementsByTagName(n[1])
                    }
                },
                preFilter: {
                    CLASS: function(n, t, i, r, u, f) {
                        if (n = " " + n[1].replace(o, "") + " ",
                                f)
                            return n;
                        for (var s = 0, e; (e = t[s]) != null; s++)
                            e && (u ^ (e.className && (" " + e.className + " ").replace(/[\t\n\r]/g, " ").indexOf(n) >= 0) ? i || r.push(e) : i && (t[s] = !1));
                        return !1
                    },
                    ID: function(n) {
                        return n[1].replace(o, "")
                    },
                    TAG: function(n) {
                        return n[1].replace(o, "").toLowerCase()
                    },
                    CHILD: function(t) {
                        if (t[1] === "nth") {
                            t[2] || n.error(t[0]);
                            t[2] = t[2].replace(/^\+|\s*/g, "");
                            var i = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(t[2] === "even" && "2n" || t[2] === "odd" && "2n+1" || !/\D/.test(t[2]) && "0n+" + t[2] || t[2]);
                            t[2] = i[1] + (i[2] || 1) - 0;
                            t[3] = i[3] - 0
                        } else
                            t[2] && n.error(t[0]);
                        return t[0] = y++,
                            t
                    },
                    ATTR: function(n, t, i, r, f, e) {
                        var s = n[1] = n[1].replace(o, "");
                        return !e && u.attrMap[s] && (n[1] = u.attrMap[s]),
                            n[4] = (n[4] || n[5] || "").replace(o, ""),
                        n[2] === "~=" && (n[4] = " " + n[4] + " "),
                            n
                    },
                    PSEUDO: function(t, i, r, f, e) {
                        if (t[1] === "not")
                            if ((v.exec(t[3]) || "").length > 1 || /^\w/.test(t[3]))
                                t[3] = n(t[3], null, null, i);
                            else {
                                var o = n.filter(t[3], i, r, !0 ^ e);
                                return r || f.push.apply(f, o),
                                    !1
                            }
                        else if (u.match.POS.test(t[0]) || u.match.CHILD.test(t[0]))
                            return !0;
                        return t
                    },
                    POS: function(n) {
                        return n.unshift(!0),
                            n
                    }
                },
                filters: {
                    enabled: function(n) {
                        return n.disabled === !1 && n.type !== "hidden"
                    },
                    disabled: function(n) {
                        return n.disabled === !0
                    },
                    checked: function(n) {
                        return n.checked === !0
                    },
                    selected: function(n) {
                        return n.parentNode && n.parentNode.selectedIndex,
                        n.selected === !0
                    },
                    parent: function(n) {
                        return !!n.firstChild
                    },
                    empty: function(n) {
                        return !n.firstChild
                    },
                    has: function(t, i, r) {
                        return !!n(r[3], t).length
                    },
                    header: function(n) {
                        return /h\d/i.test(n.nodeName)
                    },
                    text: function(n) {
                        var t = n.getAttribute("type")
                            , i = n.type;
                        return n.nodeName.toLowerCase() === "input" && "text" === i && (t === i || t === null)
                    },
                    radio: function(n) {
                        return n.nodeName.toLowerCase() === "input" && "radio" === n.type
                    },
                    checkbox: function(n) {
                        return n.nodeName.toLowerCase() === "input" && "checkbox" === n.type
                    },
                    file: function(n) {
                        return n.nodeName.toLowerCase() === "input" && "file" === n.type
                    },
                    password: function(n) {
                        return n.nodeName.toLowerCase() === "input" && "password" === n.type
                    },
                    submit: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return (t === "input" || t === "button") && "submit" === n.type
                    },
                    image: function(n) {
                        return n.nodeName.toLowerCase() === "input" && "image" === n.type
                    },
                    reset: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return (t === "input" || t === "button") && "reset" === n.type
                    },
                    button: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return t === "input" && "button" === n.type || t === "button"
                    },
                    input: function(n) {
                        return /input|select|textarea|button/i.test(n.nodeName)
                    },
                    focus: function(n) {
                        return n === n.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function(n, t) {
                        return t === 0
                    },
                    last: function(n, t, i, r) {
                        return t === r.length - 1
                    },
                    even: function(n, t) {
                        return t % 2 == 0
                    },
                    odd: function(n, t) {
                        return t % 2 == 1
                    },
                    lt: function(n, t, i) {
                        return t < i[3] - 0
                    },
                    gt: function(n, t, i) {
                        return t > i[3] - 0
                    },
                    nth: function(n, t, i) {
                        return i[3] - 0 === t
                    },
                    eq: function(n, t, i) {
                        return i[3] - 0 === t
                    }
                },
                filter: {
                    PSEUDO: function(t, i, r, f) {
                        var e = i[1], h = u.filters[e], s, o, c;
                        if (h)
                            return h(t, r, i, f);
                        if (e === "contains")
                            return (t.textContent || t.innerText || p([t]) || "").indexOf(i[3]) >= 0;
                        if (e === "not") {
                            for (s = i[3],
                                     o = 0,
                                     c = s.length; o < c; o++)
                                if (s[o] === t)
                                    return !1;
                            return !0
                        }
                        n.error(e)
                    },
                    CHILD: function(n, t) {
                        var r, o, s, u, h, f, c = t[1], i = n;
                        switch (c) {
                            case "only":
                            case "first":
                                while (i = i.previousSibling)
                                    if (i.nodeType === 1)
                                        return !1;
                                if (c === "first")
                                    return !0;
                                i = n;
                            case "last":
                                while (i = i.nextSibling)
                                    if (i.nodeType === 1)
                                        return !1;
                                return !0;
                            case "nth":
                                if (r = t[2],
                                        o = t[3],
                                    r === 1 && o === 0)
                                    return !0;
                                if (s = t[0],
                                        u = n.parentNode,
                                    u && (u[e] !== s || !n.nodeIndex)) {
                                    for (h = 0,
                                             i = u.firstChild; i; i = i.nextSibling)
                                        i.nodeType === 1 && (i.nodeIndex = ++h);
                                    u[e] = s
                                }
                                return f = n.nodeIndex - o,
                                    r === 0 ? f === 0 : f % r == 0 && f / r >= 0
                        }
                    },
                    ID: function(n, t) {
                        return n.nodeType === 1 && n.getAttribute("id") === t
                    },
                    TAG: function(n, t) {
                        return t === "*" && n.nodeType === 1 || !!n.nodeName && n.nodeName.toLowerCase() === t
                    },
                    CLASS: function(n, t) {
                        return (" " + (n.className || n.getAttribute("class")) + " ").indexOf(t) > -1
                    },
                    ATTR: function(t, i) {
                        var o = i[1]
                            , s = n.attr ? n.attr(t, o) : u.attrHandle[o] ? u.attrHandle[o](t) : t[o] != null ? t[o] : t.getAttribute(o)
                            , f = s + ""
                            , e = i[2]
                            , r = i[4];
                        return s == null ? e === "!=" : !e && n.attr ? s != null : e === "=" ? f === r : e === "*=" ? f.indexOf(r) >= 0 : e === "~=" ? (" " + f + " ").indexOf(r) >= 0 : r ? e === "!=" ? f !== r : e === "^=" ? f.indexOf(r) === 0 : e === "$=" ? f.substr(f.length - r.length) === r : e === "|=" ? f === r || f.substr(0, r.length + 1) === r + "-" : !1 : f && s !== !1
                    },
                    POS: function(n, t, i, r) {
                        var e = t[2]
                            , f = u.setFilters[e];
                        if (f)
                            return f(n, i, t, r)
                    }
                }
            }
                , nt = u.match.POS
                , it = function(n, t) {
                return "\\" + (+t + 1)
            };
            for (s in u.match)
                u.match[s] = new RegExp(u.match[s].source + /(?![^\[]*\])(?![^\(]*\))/.source),
                    u.leftMatch[s] = new RegExp(/(^(?:.|\r|\n)*?)/.source + u.match[s].source.replace(/\\(\d+)/g, it));
            u.match.globalPOS = nt;
            f = function(n, t) {
                return (n = Array.prototype.slice.call(n, 0),
                    t) ? (t.push.apply(t, n),
                        t) : n
            }
            ;
            try {
                Array.prototype.slice.call(r.documentElement.childNodes, 0)[0].nodeType
            } catch (rt) {
                f = function(n, t) {
                    var i = 0, r = t || [], u;
                    if (d.call(n) === "[object Array]")
                        Array.prototype.push.apply(r, n);
                    else if (typeof n.length == "number")
                        for (u = n.length; i < u; i++)
                            r.push(n[i]);
                    else
                        for (; n[i]; i++)
                            r.push(n[i]);
                    return r
                }
            }
            r.documentElement.compareDocumentPosition ? a = function(n, t) {
                    return n === t ? (c = !0,
                            0) : !n.compareDocumentPosition || !t.compareDocumentPosition ? n.compareDocumentPosition ? -1 : 1 : n.compareDocumentPosition(t) & 4 ? -1 : 1
                }
                : (a = function(n, t) {
                        var i;
                        if (n === t)
                            return c = !0,
                                0;
                        if (n.sourceIndex && t.sourceIndex)
                            return n.sourceIndex - t.sourceIndex;
                        var e, l, u = [], f = [], o = n.parentNode, s = t.parentNode, r = o;
                        if (o === s)
                            return h(n, t);
                        if (!o)
                            return -1;
                        if (!s)
                            return 1;
                        while (r)
                            u.unshift(r),
                                r = r.parentNode;
                        for (r = s; r; )
                            f.unshift(r),
                                r = r.parentNode;
                        for (e = u.length,
                                 l = f.length,
                                 i = 0; i < e && i < l; i++)
                            if (u[i] !== f[i])
                                return h(u[i], f[i]);
                        return i === e ? h(n, f[i], -1) : h(u[i], t, 1)
                    }
                        ,
                        h = function(n, t, i) {
                            if (n === t)
                                return i;
                            for (var r = n.nextSibling; r; ) {
                                if (r === t)
                                    return -1;
                                r = r.nextSibling
                            }
                            return 1
                        }
                ),
                function() {
                    var n = r.createElement("div")
                        , f = "script" + (new Date).getTime()
                        , i = r.documentElement;
                    n.innerHTML = "<a name='" + f + "'/>";
                    i.insertBefore(n, i.firstChild);
                    r.getElementById(f) && (u.find.ID = function(n, i, r) {
                            if (typeof i.getElementById != "undefined" && !r) {
                                var u = i.getElementById(n[1]);
                                return u ? u.id === n[1] || typeof u.getAttributeNode != "undefined" && u.getAttributeNode("id").nodeValue === n[1] ? [u] : t : []
                            }
                        }
                            ,
                            u.filter.ID = function(n, t) {
                                var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id");
                                return n.nodeType === 1 && i && i.nodeValue === t
                            }
                    );
                    i.removeChild(n);
                    i = n = null
                }(),
                function() {
                    var n = r.createElement("div");
                    n.appendChild(r.createComment(""));
                    n.getElementsByTagName("*").length > 0 && (u.find.TAG = function(n, t) {
                            var i = t.getElementsByTagName(n[1]), u, r;
                            if (n[1] === "*") {
                                for (u = [],
                                         r = 0; i[r]; r++)
                                    i[r].nodeType === 1 && u.push(i[r]);
                                i = u
                            }
                            return i
                        }
                    );
                    n.innerHTML = "<a href='#'><\/a>";
                    n.firstChild && typeof n.firstChild.getAttribute != "undefined" && n.firstChild.getAttribute("href") !== "#" && (u.attrHandle.href = function(n) {
                            return n.getAttribute("href", 2)
                        }
                    );
                    n = null
                }();
            r.querySelectorAll && function() {
                var i = n, t = r.createElement("div"), o = "__sizzle__", e;
                if (t.innerHTML = "<p class='TEST'><\/p>",
                    !t.querySelectorAll || t.querySelectorAll(".TEST").length !== 0) {
                    n = function(t, e, s, h) {
                        var c, l;
                        if (e = e || r,
                            !h && !n.isXML(e)) {
                            if (c = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t),
                                c && (e.nodeType === 1 || e.nodeType === 9)) {
                                if (c[1])
                                    return f(e.getElementsByTagName(t), s);
                                if (c[2] && u.find.CLASS && e.getElementsByClassName)
                                    return f(e.getElementsByClassName(c[2]), s)
                            }
                            if (e.nodeType === 9) {
                                if (t === "body" && e.body)
                                    return f([e.body], s);
                                if (c && c[3]) {
                                    if (l = e.getElementById(c[3]),
                                        !l || !l.parentNode)
                                        return f([], s);
                                    if (l.id === c[3])
                                        return f([l], s)
                                }
                                try {
                                    return f(e.querySelectorAll(t), s)
                                } catch (b) {}
                            } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                                var w = e
                                    , v = e.getAttribute("id")
                                    , a = v || o
                                    , y = e.parentNode
                                    , p = /^\s*[+~]/.test(t);
                                v ? a = a.replace(/'/g, "\\$&") : e.setAttribute("id", a);
                                p && y && (e = e.parentNode);
                                try {
                                    if (!p || y)
                                        return f(e.querySelectorAll("[id='" + a + "'] " + t), s)
                                } catch (k) {} finally {
                                    v || w.removeAttribute("id")
                                }
                            }
                        }
                        return i(t, e, s, h)
                    }
                    ;
                    for (e in i)
                        n[e] = i[e];
                    t = null
                }
            }(),
                function() {
                    var t = r.documentElement, i = t.matchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.msMatchesSelector, e, f;
                    if (i) {
                        e = !i.call(r.createElement("div"), "div");
                        f = !1;
                        try {
                            i.call(r.documentElement, "[test!='']:sizzle")
                        } catch (o) {
                            f = !0
                        }
                        n.matchesSelector = function(t, r) {
                            if (r = r.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"),
                                    !n.isXML(t))
                                try {
                                    if (f || !u.match.PSEUDO.test(r) && !/!=/.test(r)) {
                                        var o = i.call(t, r);
                                        if (o || !e || t.document && t.document.nodeType !== 11)
                                            return o
                                    }
                                } catch (s) {}
                            return n(r, null, null, [t]).length > 0
                        }
                    }
                }(),
                function() {
                    var n = r.createElement("div");
                    if (n.innerHTML = "<div class='test e'><\/div><div class='test'><\/div>",
                        !!n.getElementsByClassName && n.getElementsByClassName("e").length !== 0) {
                        if (n.lastChild.className = "e",
                            n.getElementsByClassName("e").length === 1)
                            return;
                        u.order.splice(1, 0, "CLASS");
                        u.find.CLASS = function(n, t, i) {
                            if (typeof t.getElementsByClassName != "undefined" && !i)
                                return t.getElementsByClassName(n[1])
                        }
                        ;
                        n = null
                    }
                }();
            n.contains = r.documentElement.contains ? function(n, t) {
                    return n !== t && (n.contains ? n.contains(t) : !0)
                }
                : r.documentElement.compareDocumentPosition ? function(n, t) {
                        return !!(n.compareDocumentPosition(t) & 16)
                    }
                    : function() {
                        return !1
                    }
            ;
            n.isXML = function(n) {
                var t = (n ? n.ownerDocument || n : 0).documentElement;
                return t ? t.nodeName !== "HTML" : !1
            }
            ;
            w = function(t, i, r) {
                for (var e, o = [], s = "", h = i.nodeType ? [i] : i, f, c; e = u.match.PSEUDO.exec(t); )
                    s += e[0],
                        t = t.replace(u.match.PSEUDO, "");
                for (t = u.relative[t] ? t + "*" : t,
                         f = 0,
                         c = h.length; f < c; f++)
                    n(t, h[f], o, r);
                return n.filter(s, o)
            }
            ;
            n.attr = i.attr;
            n.selectors.attrMap = {};
            i.find = n;
            i.expr = n.selectors;
            i.expr[":"] = i.expr.filters;
            i.unique = n.uniqueSort;
            i.text = n.getText;
            i.isXMLDoc = n.isXML;
            i.contains = n.contains
        }();
    var bu = /Until$/
        , ku = /^(?:parents|prevUntil|prevAll)/
        , du = /,/
        , gu = /^.[^:#\[\.,]*$/
        , nf = Array.prototype.slice
        , gi = i.expr.match.globalPOS
        , tf = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        find: function(n) {
            var s = this, t, f, r, o, u, e;
            if (typeof n != "string")
                return i(n).filter(function() {
                    for (t = 0,
                             f = s.length; t < f; t++)
                        if (i.contains(s[t], this))
                            return !0
                });
            for (r = this.pushStack("", "find", n),
                     t = 0,
                     f = this.length; t < f; t++)
                if (o = r.length,
                        i.find(n, this[t], r),
                    t > 0)
                    for (u = o; u < r.length; u++)
                        for (e = 0; e < o; e++)
                            if (r[e] === r[u]) {
                                r.splice(u--, 1);
                                break
                            }
            return r
        },
        has: function(n) {
            var t = i(n);
            return this.filter(function() {
                for (var n = 0, r = t.length; n < r; n++)
                    if (i.contains(this, t[n]))
                        return !0
            })
        },
        not: function(n) {
            return this.pushStack(fi(this, n, !1), "not", n)
        },
        filter: function(n) {
            return this.pushStack(fi(this, n, !0), "filter", n)
        },
        is: function(n) {
            return !!n && (typeof n == "string" ? gi.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
        },
        closest: function(n, t) {
            var f = [], u, s, r = this[0], e, o;
            if (i.isArray(n)) {
                for (e = 1; r && r.ownerDocument && r !== t; ) {
                    for (u = 0; u < n.length; u++)
                        i(r).is(n[u]) && f.push({
                            selector: n[u],
                            elem: r,
                            level: e
                        });
                    r = r.parentNode;
                    e++
                }
                return f
            }
            for (o = gi.test(n) || typeof n != "string" ? i(n, t || this.context) : 0,
                     u = 0,
                     s = this.length; u < s; u++)
                for (r = this[u]; r; ) {
                    if (o ? o.index(r) > -1 : i.find.matchesSelector(r, n)) {
                        f.push(r);
                        break
                    }
                    if (r = r.parentNode,
                        !r || !r.ownerDocument || r === t || r.nodeType === 11)
                        break
                }
            return f = f.length > 1 ? i.unique(f) : f,
                this.pushStack(f, "closest", n)
        },
        index: function(n) {
            return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(n, t) {
            var u = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n)
                , r = i.merge(this.get(), u);
            return this.pushStack(ei(u[0]) || ei(r[0]) ? r : i.unique(r))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return i.nth(n, 2, "nextSibling")
        },
        prev: function(n) {
            return i.nth(n, 2, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.makeArray(n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return bu.test(n) || (u = r),
            u && typeof u == "string" && (f = i.filter(u, f)),
                f = this.length > 1 && !tf[n] ? i.unique(f) : f,
            (this.length > 1 || du.test(u)) && ku.test(n) && (f = f.reverse()),
                this.pushStack(f, n, nf.call(arguments).join(","))
        }
    });
    i.extend({
        filter: function(n, t, r) {
            return r && (n = ":not(" + n + ")"),
                t.length === 1 ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
        },
        dir: function(n, r, u) {
            for (var e = [], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u)); )
                f.nodeType === 1 && e.push(f),
                    f = f[r];
            return e
        },
        nth: function(n, t, i) {
            t = t || 1;
            for (var r = 0; n; n = n[i])
                if (n.nodeType === 1 && ++r === t)
                    break;
            return n
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling)
                n.nodeType === 1 && n !== t && i.push(n);
            return i
        }
    });
    var nr = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
        , rf = / jQuery\d+="(?:\d+|null)"/g
        , ot = /^\s+/
        , tr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig
        , ir = /<([\w:]+)/
        , uf = /<tbody/i
        , ff = /<|&#?\w+;/
        , ef = /<(?:script|style)/i
        , of = /<(?:script|object|embed|option|style)/i
        , rr = new RegExp("<(?:" + nr + ")[\\s/>]","i")
        , ur = /checked\s*(?:[^=]|=\s*.checked.)/i
        , fr = /\/(java|ecma)script/i
        , sf = /^\s*<!(?:\[CDATA\[|\-\-)/
        , u = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        legend: [1, "<fieldset>", "<\/fieldset>"],
        thead: [1, "<table>", "<\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
        area: [1, "<map>", "<\/map>"],
        _default: [0, "", ""]
    }
        , st = ui(r);
    u.optgroup = u.option;
    u.tbody = u.tfoot = u.colgroup = u.caption = u.thead;
    u.th = u.td;
    i.support.htmlSerialize || (u._default = [1, "div<div>", "<\/div>"]);
    i.fn.extend({
        text: function(n) {
            return i.access(this, function(n) {
                return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
            }, null, n, arguments.length)
        },
        wrapAll: function(n) {
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).wrapAll(n.call(this, t))
                });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function() {
                    for (var n = this; n.firstChild && n.firstChild.nodeType === 1; )
                        n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                    i(this).wrapInner(n.call(this, t))
                }) : this.each(function() {
                    var t = i(this)
                        , r = t.contents();
                    r.length ? r.wrapAll(n) : t.append(n)
                })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(n) {
                this.nodeType === 1 && this.appendChild(n)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(n) {
                this.nodeType === 1 && this.insertBefore(n, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(n) {
                    this.parentNode.insertBefore(n, this)
                });
            if (arguments.length) {
                var n = i.clean(arguments);
                return n.push.apply(n, this.toArray()),
                    this.pushStack(n, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(n) {
                    this.parentNode.insertBefore(n, this.nextSibling)
                });
            if (arguments.length) {
                var n = this.pushStack(this, "after", arguments);
                return n.push.apply(n, i.clean(arguments)),
                    n
            }
        },
        remove: function(n, t) {
            for (var u = 0, r; (r = this[u]) != null; u++)
                (!n || i.filter(n, [r]).length) && (t || r.nodeType !== 1 || (i.cleanData(r.getElementsByTagName("*")),
                    i.cleanData([r])),
                r.parentNode && r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var t = 0, n; (n = this[t]) != null; t++)
                for (n.nodeType === 1 && i.cleanData(n.getElementsByTagName("*")); n.firstChild; )
                    n.removeChild(n.firstChild);
            return this
        },
        clone: function(n, t) {
            return n = n == null ? !1 : n,
                t = t == null ? n : t,
                this.map(function() {
                    return i.clone(this, n, t)
                })
        },
        html: function(n) {
            return i.access(this, function(n) {
                var r = this[0] || {}
                    , f = 0
                    , e = this.length;
                if (n === t)
                    return r.nodeType === 1 ? r.innerHTML.replace(rf, "") : null;
                if (typeof n == "string" && !ef.test(n) && (i.support.leadingWhitespace || !ot.test(n)) && !u[(ir.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = n.replace(tr, "<$1><\/$2>");
                    try {
                        for (; f < e; f++)
                            r = this[f] || {},
                            r.nodeType === 1 && (i.cleanData(r.getElementsByTagName("*")),
                                r.innerHTML = n);
                        r = 0
                    } catch (o) {}
                }
                r && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function(n) {
            return this[0] && this[0].parentNode ? i.isFunction(n) ? this.each(function(t) {
                        var r = i(this)
                            , u = r.html();
                        r.replaceWith(n.call(this, t, u))
                    }) : (typeof n != "string" && (n = i(n).detach()),
                        this.each(function() {
                            var t = this.nextSibling
                                , r = this.parentNode;
                            i(this).remove();
                            t ? i(t).before(n) : i(r).append(n)
                        })) : this.length ? this.pushStack(i(i.isFunction(n) ? n() : n), "replaceWith", n) : this
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, r, u) {
            var c, h, f, o, e = n[0], l = [];
            if (!i.support.checkClone && arguments.length === 3 && typeof e == "string" && ur.test(e))
                return this.each(function() {
                    i(this).domManip(n, r, u, !0)
                });
            if (i.isFunction(e))
                return this.each(function(f) {
                    var o = i(this);
                    n[0] = e.call(this, f, r ? o.html() : t);
                    o.domManip(n, r, u)
                });
            if (this[0]) {
                if (o = e && e.parentNode,
                        c = i.support.parentNode && o && o.nodeType === 11 && o.childNodes.length === this.length ? {
                                fragment: o
                            } : i.buildFragment(n, this, l),
                        f = c.fragment,
                        h = f.childNodes.length === 1 ? f = f.firstChild : f.firstChild,
                        h) {
                    r = r && i.nodeName(h, "tr");
                    for (var s = 0, a = this.length, v = a - 1; s < a; s++)
                        u.call(r ? ru(this[s], h) : this[s], c.cacheable || a > 1 && s < v ? i.clone(f, !0, !0) : f)
                }
                l.length && i.each(l, function(n, t) {
                    t.src ? i.ajax({
                            type: "GET",
                            global: !1,
                            url: t.src,
                            async: !1,
                            dataType: "script"
                        }) : i.globalEval((t.text || t.textContent || t.innerHTML || "").replace(sf, "/*$0*/"));
                    t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    });
    i.buildFragment = function(n, t, u) {
        var e, h, s, o, f = n[0];
        return t && t[0] && (o = t[0].ownerDocument || t[0]),
        o.createDocumentFragment || (o = r),
        n.length === 1 && typeof f == "string" && f.length < 512 && o === r && f.charAt(0) === "<" && !of.test(f) && (i.support.checkClone || !ur.test(f)) && (i.support.html5Clone || !rr.test(f)) && (h = !0,
            s = i.fragments[f],
        s && s !== 1 && (e = s)),
        e || (e = o.createDocumentFragment(),
            i.clean(n, o, e, u)),
        h && (i.fragments[f] = s ? e : 1),
            {
                fragment: e,
                cacheable: h
            }
    }
    ;
    i.fragments = {};
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(r) {
            var e = [], u = i(r), o = this.length === 1 && this[0].parentNode, f, h, s;
            if (o && o.nodeType === 11 && o.childNodes.length === 1 && u.length === 1)
                return u[t](this[0]),
                    this;
            for (f = 0,
                     h = u.length; f < h; f++)
                s = (f > 0 ? this.clone(!0) : this).get(),
                    i(u[f])[t](s),
                    e = e.concat(s);
            return this.pushStack(e, n, u.selector)
        }
    });
    i.extend({
        clone: function(n, t, r) {
            var f, e, u, o = i.support.html5Clone || i.isXMLDoc(n) || !rr.test("<" + n.nodeName + ">") ? n.cloneNode(!0) : iu(n);
            if ((!i.support.noCloneEvent || !i.support.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                for (ii(n, o),
                         f = b(n),
                         e = b(o),
                         u = 0; f[u]; ++u)
                    e[u] && ii(f[u], e[u]);
            if (t && (ri(n, o),
                    r))
                for (f = b(n),
                         e = b(o),
                         u = 0; f[u]; ++u)
                    ri(f[u], e[u]);
            return f = e = null,
                o
        },
        clean: function(n, t, f, e) {
            var k, h, c, l = [], a, o, b, v, g, nt;
            for (t = t || r,
                 typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || r),
                     a = 0; (o = n[a]) != null; a++)
                if (typeof o == "number" && (o += ""),
                        o) {
                    if (typeof o == "string")
                        if (ff.test(o)) {
                            o = o.replace(tr, "<$1><\/$2>");
                            var d = (ir.exec(o) || ["", ""])[1].toLowerCase(), p = u[d] || u._default, tt = p[0], s = t.createElement("div"), w = st.childNodes, y;
                            for (t === r ? st.appendChild(s) : ui(t).appendChild(s),
                                     s.innerHTML = p[1] + o + p[2]; tt--; )
                                s = s.lastChild;
                            if (!i.support.tbody)
                                for (b = uf.test(o),
                                         v = d === "table" && !b ? s.firstChild && s.firstChild.childNodes : p[1] === "<table>" && !b ? s.childNodes : [],
                                         c = v.length - 1; c >= 0; --c)
                                    i.nodeName(v[c], "tbody") && !v[c].childNodes.length && v[c].parentNode.removeChild(v[c]);
                            !i.support.leadingWhitespace && ot.test(o) && s.insertBefore(t.createTextNode(ot.exec(o)[0]), s.firstChild);
                            o = s.childNodes;
                            s && (s.parentNode.removeChild(s),
                            w.length > 0 && (y = w[w.length - 1],
                            y && y.parentNode && y.parentNode.removeChild(y)))
                        } else
                            o = t.createTextNode(o);
                    if (!i.support.appendChecked)
                        if (o[0] && typeof (g = o.length) == "number")
                            for (c = 0; c < g; c++)
                                ni(o[c]);
                        else
                            ni(o);
                    o.nodeType ? l.push(o) : l = i.merge(l, o)
                }
            if (f)
                for (k = function(n) {
                    return !n.type || fr.test(n.type)
                }
                         ,
                         a = 0; l[a]; a++)
                    h = l[a],
                        e && i.nodeName(h, "script") && (!h.type || fr.test(h.type)) ? e.push(h.parentNode ? h.parentNode.removeChild(h) : h) : (h.nodeType === 1 && (nt = i.grep(h.getElementsByTagName("script"), k),
                                l.splice.apply(l, [a + 1, 0].concat(nt))),
                                f.appendChild(h));
            return l
        },
        cleanData: function(n) {
            for (var r, u, o = i.cache, s = i.event.special, h = i.support.deleteExpando, t, f, e = 0; (t = n[e]) != null; e++)
                if ((!t.nodeName || !i.noData[t.nodeName.toLowerCase()]) && (u = t[i.expando],
                        u)) {
                    if (r = o[u],
                        r && r.events) {
                        for (f in r.events)
                            s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, r.handle);
                        r.handle && (r.handle.elem = null)
                    }
                    h ? delete t[i.expando] : t.removeAttribute && t.removeAttribute(i.expando);
                    delete o[u]
                }
        }
    });
    var ht = /alpha\([^)]*\)/i, hf = /opacity=([^)]*)/, cf = /([A-Z]|^ms)/g, lf = /^[\-+]?(?:\d*\.)?\d+$/i, ct = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, af = /^([\-+])=([\-+.\de]+)/, vf = /^margin/, yf = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, o = ["Top", "Right", "Bottom", "Left"], a, er, or;
    i.fn.css = function(n, r) {
        return i.access(this, function(n, r, u) {
            return u !== t ? i.style(n, r, u) : i.css(n, r)
        }, n, r, arguments.length > 1)
    }
    ;
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = a(n, "opacity");
                        return i === "" ? "1" : i
                    }
                    return n.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: i.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(n, r, u, f) {
            if (!!n && n.nodeType !== 3 && n.nodeType !== 8 && !!n.style) {
                var o, s, h = i.camelCase(r), c = n.style, e = i.cssHooks[h];
                if (r = i.cssProps[h] || h,
                    u === t)
                    return e && "get"in e && (o = e.get(n, !1, f)) !== t ? o : c[r];
                if (s = typeof u,
                    s === "string" && (o = af.exec(u)) && (u = +(o[1] + 1) * +o[2] + parseFloat(i.css(n, r)),
                        s = "number"),
                    u == null || s === "number" && isNaN(u))
                    return;
                if (s !== "number" || i.cssNumber[h] || (u += "px"),
                    !e || !("set"in e) || (u = e.set(n, u)) !== t)
                    try {
                        c[r] = u
                    } catch (l) {}
            }
        },
        css: function(n, r, u) {
            var e, f;
            return (r = i.camelCase(r),
                f = i.cssHooks[r],
                r = i.cssProps[r] || r,
            r === "cssFloat" && (r = "float"),
            f && "get"in f && (e = f.get(n, !0, u)) !== t) ? e : a ? a(n, r) : void 0
        },
        swap: function(n, t, i) {
            var u = {}, f, r;
            for (r in t)
                u[r] = n.style[r],
                    n.style[r] = t[r];
            f = i.call(n);
            for (r in t)
                n.style[r] = u[r];
            return f
        }
    });
    i.curCSS = i.css;
    r.defaultView && r.defaultView.getComputedStyle && (er = function(n, t) {
            var r, e, u, o, f = n.style;
            return t = t.replace(cf, "-$1").toLowerCase(),
            (e = n.ownerDocument.defaultView) && (u = e.getComputedStyle(n, null)) && (r = u.getPropertyValue(t),
            r === "" && !i.contains(n.ownerDocument.documentElement, n) && (r = i.style(n, t))),
            !i.support.pixelMargin && u && vf.test(t) && ct.test(r) && (o = f.width,
                f.width = r,
                r = u.width,
                f.width = o),
                r
        }
    );
    r.documentElement.currentStyle && (or = function(n, t) {
            var f, u, e, i = n.currentStyle && n.currentStyle[t], r = n.style;
            return i == null && r && (e = r[t]) && (i = e),
            ct.test(i) && (f = r.left,
                u = n.runtimeStyle && n.runtimeStyle.left,
            u && (n.runtimeStyle.left = n.currentStyle.left),
                r.left = t === "fontSize" ? "1em" : i,
                i = r.pixelLeft + "px",
                r.left = f,
            u && (n.runtimeStyle.left = u)),
                i === "" ? "auto" : i
        }
    );
    a = er || or;
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r)
                    return n.offsetWidth !== 0 ? gt(n, t, u) : i.swap(n, yf, function() {
                            return gt(n, t, u)
                        })
            },
            set: function(n, t) {
                return lf.test(t) ? t + "px" : t
            }
        }
    });
    i.support.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return hf.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },
        set: function(n, t) {
            var r = n.style
                , u = n.currentStyle
                , e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : ""
                , f = u && u.filter || r.filter || "";
            (r.zoom = 1,
            t >= 1 && i.trim(f.replace(ht, "")) === "" && (r.removeAttribute("filter"),
            u && !u.filter)) || (r.filter = ht.test(f) ? f.replace(ht, e) : f + " " + e)
        }
    });
    i(function() {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function(n, t) {
                return i.swap(n, {
                    display: "inline-block"
                }, function() {
                    return t ? a(n, "margin-right") : n.style.marginRight
                })
            }
        })
    });
    i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
            var t = n.offsetWidth
                , r = n.offsetHeight;
            return t === 0 && r === 0 || !i.support.reliableHiddenOffsets && (n.style && n.style.display || i.css(n, "display")) === "none"
        }
            ,
            i.expr.filters.visible = function(n) {
                return !i.expr.filters.hidden(n)
            }
    );
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var u = typeof i == "string" ? i.split(" ") : [i], f = {}, r = 0; r < 4; r++)
                    f[n + o[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        }
    });
    var pf = /%20/g, wf = /\[\]$/, sr = /\r?\n/g, bf = /#.*$/, kf = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, df = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, gf = /^(?:GET|HEAD)$/, ne = /^\/\//, hr = /\?/, te = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ie = /^(?:select|textarea)/i, cr = /\s+/, re = /([?&])_=[^&]*/, lr = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, ar = i.fn.load, lt = {}, vr = {}, s, h, yr = ["*/"] + ["*"];
    try {
        s = eu.href
    } catch (ee) {
        s = r.createElement("a");
        s.href = "";
        s = s.href
    }
    h = lr.exec(s.toLowerCase()) || [];
    i.fn.extend({
        load: function(n, r, u) {
            var f, e, o, s;
            return typeof n != "string" && ar ? ar.apply(this, arguments) : this.length ? (f = n.indexOf(" "),
                    f >= 0 && (e = n.slice(f, n.length),
                        n = n.slice(0, f)),
                        o = "GET",
                    r && (i.isFunction(r) ? (u = r,
                            r = t) : typeof r == "object" && (r = i.param(r, i.ajaxSettings.traditional),
                            o = "POST")),
                        s = this,
                        i.ajax({
                            url: n,
                            type: o,
                            dataType: "html",
                            data: r,
                            complete: function(n, t, r) {
                                r = n.responseText;
                                n.isResolved() && (n.done(function(n) {
                                    r = n
                                }),
                                    s.html(e ? i("<div>").append(r.replace(te, "")).find(e) : r));
                                u && s.each(u, [r, t, n])
                            }
                        }),
                        this) : this
        },
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? i.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || ie.test(this.nodeName) || df.test(this.type))
            }).map(function(n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function(n) {
                            return {
                                name: t.name,
                                value: n.replace(sr, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: r.replace(sr, "\r\n")
                        }
            }).get()
        }
    });
    i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    });
    i.each(["get", "post"], function(n, r) {
        i[r] = function(n, u, f, e) {
            return i.isFunction(u) && (e = e || f,
                f = u,
                u = t),
                i.ajax({
                    type: r,
                    url: n,
                    data: u,
                    success: f,
                    dataType: e
                })
        }
    });
    i.extend({
        getScript: function(n, r) {
            return i.get(n, t, r, "script")
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        ajaxSetup: function(n, t) {
            return t ? kt(n, i.ajaxSettings) : (t = n,
                    n = i.ajaxSettings),
                kt(n, t),
                n
        },
        ajaxSettings: {
            url: s,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(h[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": yr
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": n.String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: dt(lt),
        ajaxTransport: dt(vr),
        ajax: function(n, r) {
            function y(n, r, h, l) {
                if (e !== 2) {
                    e = 2;
                    nt && clearTimeout(nt);
                    c = t;
                    g = l || "";
                    f.readyState = n > 0 ? 4 : 0;
                    var y, b, w, a = r, ut = h ? tu(u, f, h) : t, tt, it;
                    if (n >= 200 && n < 300 || n === 304)
                        if (u.ifModified && ((tt = f.getResponseHeader("Last-Modified")) && (i.lastModified[o] = tt),
                            (it = f.getResponseHeader("Etag")) && (i.etag[o] = it)),
                            n === 304)
                            a = "notmodified",
                                y = !0;
                        else
                            try {
                                b = nu(u, ut);
                                a = "success";
                                y = !0
                            } catch (ft) {
                                a = "parsererror";
                                w = ft
                            }
                    else
                        w = a,
                        (!a || n) && (a = "error",
                        n < 0 && (n = 0));
                    f.status = n;
                    f.statusText = "" + (r || a);
                    y ? d.resolveWith(s, [b, a, f]) : d.rejectWith(s, [f, a, w]);
                    f.statusCode(p);
                    p = t;
                    v && k.trigger("ajax" + (y ? "Success" : "Error"), [f, u, y ? b : w]);
                    rt.fireWith(s, [f, a]);
                    v && (k.trigger("ajaxComplete", [f, u]),
                    --i.active || i.event.trigger("ajaxStop"))
                }
            }
            var tt, it;
            typeof n == "object" && (r = n,
                n = t);
            r = r || {};
            var u = i.ajaxSetup({}, r), s = u.context || u, k = s !== u && (s.nodeType || s instanceof i) ? i(s) : i.event, d = i.Deferred(), rt = i.Callbacks("once memory"), p = u.statusCode || {}, o, ut = {}, ft = {}, g, b, c, nt, l, e = 0, v, a, f = {
                readyState: 0,
                setRequestHeader: function(n, t) {
                    if (!e) {
                        var i = n.toLowerCase();
                        n = ft[i] = ft[i] || n;
                        ut[n] = t
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return e === 2 ? g : null
                },
                getResponseHeader: function(n) {
                    var i;
                    if (e === 2) {
                        if (!b)
                            for (b = {}; i = kf.exec(g); )
                                b[i[1].toLowerCase()] = i[2];
                        i = b[n.toLowerCase()]
                    }
                    return i === t ? null : i
                },
                overrideMimeType: function(n) {
                    return e || (u.mimeType = n),
                        this
                },
                abort: function(n) {
                    return n = n || "abort",
                    c && c.abort(n),
                        y(0, n),
                        this
                }
            };
            if (d.promise(f),
                    f.success = f.done,
                    f.error = f.fail,
                    f.complete = rt.add,
                    f.statusCode = function(n) {
                        if (n) {
                            var t;
                            if (e < 2)
                                for (t in n)
                                    p[t] = [p[t], n[t]];
                            else
                                t = n[f.status],
                                    f.then(t, t)
                        }
                        return this
                    }
                    ,
                    u.url = ((n || u.url) + "").replace(bf, "").replace(ne, h[1] + "//"),
                    u.dataTypes = i.trim(u.dataType || "*").toLowerCase().split(cr),
                u.crossDomain == null && (l = lr.exec(u.url.toLowerCase()),
                    u.crossDomain = !(!l || l[1] == h[1] && l[2] == h[2] && (l[3] || (l[1] === "http:" ? 80 : 443)) == (h[3] || (h[1] === "http:" ? 80 : 443)))),
                u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)),
                    w(lt, u, r, f),
                e === 2)
                return !1;
            v = u.global;
            u.type = u.type.toUpperCase();
            u.hasContent = !gf.test(u.type);
            v && i.active++ == 0 && i.event.trigger("ajaxStart");
            u.hasContent || (u.data && (u.url += (hr.test(u.url) ? "&" : "?") + u.data,
                delete u.data),
                o = u.url,
            u.cache === !1 && (tt = i.now(),
                it = u.url.replace(re, "$1_=" + tt),
                u.url = it + (it === u.url ? (hr.test(u.url) ? "&" : "?") + "_=" + tt : "")));
            (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType);
            u.ifModified && (o = o || u.url,
            i.lastModified[o] && f.setRequestHeader("If-Modified-Since", i.lastModified[o]),
            i.etag[o] && f.setRequestHeader("If-None-Match", i.etag[o]));
            f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + yr + "; q=0.01" : "") : u.accepts["*"]);
            for (a in u.headers)
                f.setRequestHeader(a, u.headers[a]);
            if (u.beforeSend && (u.beforeSend.call(s, f, u) === !1 || e === 2))
                return f.abort(),
                    !1;
            for (a in {
                success: 1,
                error: 1,
                complete: 1
            })
                f[a](u[a]);
            if (c = w(vr, u, r, f),
                    c) {
                f.readyState = 1;
                v && k.trigger("ajaxSend", [f, u]);
                u.async && u.timeout > 0 && (nt = setTimeout(function() {
                    f.abort("timeout")
                }, u.timeout));
                try {
                    e = 1;
                    c.send(ut, y)
                } catch (et) {
                    if (e < 2)
                        y(-1, et);
                    else
                        throw et;
                }
            } else
                y(-1, "No Transport");
            return f
        },
        param: function(n, r) {
            var u = [], e = function(n, t) {
                t = i.isFunction(t) ? t() : t;
                u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
            }, f;
            if (r === t && (r = i.ajaxSettings.traditional),
                i.isArray(n) || n.jquery && !i.isPlainObject(n))
                i.each(n, function() {
                    e(this.name, this.value)
                });
            else
                for (f in n)
                    ut(f, n[f], r, e);
            return u.join("&").replace(pf, "+")
        }
    });
    i.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    pr = i.now();
    p = /(\=)\?(&|$)|\?\?/i;
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return i.expando + "_" + pr++
        }
    });
    i.ajaxPrefilter("json jsonp", function(t, r, u) {
        var h = typeof t.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(t.contentType);
        if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (p.test(t.url) || h && p.test(t.data))) {
            var o, f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, c = n[f], e = t.url, s = t.data, l = "$1" + f + "$2";
            return t.jsonp !== !1 && (e = e.replace(p, l),
            t.url === e && (h && (s = s.replace(p, l)),
            t.data === s && (e += (/\?/.test(e) ? "&" : "?") + t.jsonp + "=" + f))),
                t.url = e,
                t.data = s,
                n[f] = function(n) {
                    o = [n]
                }
                ,
                u.always(function() {
                    n[f] = c;
                    o && i.isFunction(c) && n[f](o[0])
                }),
                t.converters["script json"] = function() {
                    return o || i.error(f + " was not called"),
                        o[0]
                }
                ,
                t.dataTypes[0] = "json",
                "script"
        }
    });
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n),
                    n
            }
        }
    });
    i.ajaxPrefilter("script", function(n) {
        n.cache === t && (n.cache = !1);
        n.crossDomain && (n.type = "GET",
            n.global = !1)
    });
    i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var i, u = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
            return {
                send: function(f, e) {
                    i = r.createElement("script");
                    i.async = "async";
                    n.scriptCharset && (i.charset = n.scriptCharset);
                    i.src = n.url;
                    i.onload = i.onreadystatechange = function(n, r) {
                        (r || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null,
                        u && i.parentNode && u.removeChild(i),
                            i = t,
                        r || e(200, "success"))
                    }
                    ;
                    u.insertBefore(i, u.firstChild)
                },
                abort: function() {
                    i && i.onload(0, 1)
                }
            }
        }
    });
    nt = n.ActiveXObject ? function() {
            for (var n in v)
                v[n](0, 1)
        }
        : !1;
    wr = 0;
    i.ajaxSettings.xhr = n.ActiveXObject ? function() {
            return !this.isLocal && bt() || gr()
        }
        : bt,
        function(n) {
            i.extend(i.support, {
                ajax: !!n,
                cors: !!n && "withCredentials"in n
            })
        }(i.ajaxSettings.xhr());
    i.support.ajax && i.ajaxTransport(function(r) {
        if (!r.crossDomain || i.support.cors) {
            var u;
            return {
                send: function(f, e) {
                    var o = r.xhr(), h, s;
                    if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async),
                            r.xhrFields)
                        for (s in r.xhrFields)
                            o[s] = r.xhrFields[s];
                    r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType);
                    r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in f)
                            o.setRequestHeader(s, f[s])
                    } catch (c) {}
                    o.send(r.hasContent && r.data || null);
                    u = function(n, f) {
                        var s, a, y, c, l;
                        try {
                            if (u && (f || o.readyState === 4))
                                if (u = t,
                                    h && (o.onreadystatechange = i.noop,
                                    nt && delete v[h]),
                                        f)
                                    o.readyState !== 4 && o.abort();
                                else {
                                    s = o.status;
                                    y = o.getAllResponseHeaders();
                                    c = {};
                                    l = o.responseXML;
                                    l && l.documentElement && (c.xml = l);
                                    try {
                                        c.text = o.responseText
                                    } catch (n) {}
                                    try {
                                        a = o.statusText
                                    } catch (w) {
                                        a = ""
                                    }
                                    !s && r.isLocal && !r.crossDomain ? s = c.text ? 200 : 404 : s === 1223 && (s = 204)
                                }
                        } catch (p) {
                            f || e(-1, p)
                        }
                        c && e(s, a, c, y)
                    }
                    ;
                    !r.async || o.readyState === 4 ? u() : (h = ++wr,
                        nt && (v || (v = {},
                            i(n).unload(nt)),
                            v[h] = u),
                            o.onreadystatechange = u)
                },
                abort: function() {
                    u && u(0, 1)
                }
            }
        }
    });
    var at = {}, f, y, ue = /^(?:toggle|show|hide)$/, fe = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, tt, it = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], rt;
    i.fn.extend({
        show: function(n, t, r) {
            var u, e, f, o;
            if (n || n === 0)
                return this.animate(c("show", 3), n, t, r);
            for (f = 0,
                     o = this.length; f < o; f++)
                u = this[f],
                u.style && (e = u.style.display,
                !i._data(u, "olddisplay") && e === "none" && (e = u.style.display = ""),
                (e === "" && i.css(u, "display") === "none" || !i.contains(u.ownerDocument.documentElement, u)) && i._data(u, "olddisplay", pt(u.nodeName)));
            for (f = 0; f < o; f++)
                u = this[f],
                u.style && (e = u.style.display,
                (e === "" || e === "none") && (u.style.display = i._data(u, "olddisplay") || ""));
            return this
        },
        hide: function(n, t, r) {
            if (n || n === 0)
                return this.animate(c("hide", 3), n, t, r);
            for (var f, e, u = 0, o = this.length; u < o; u++)
                f = this[u],
                f.style && (e = i.css(f, "display"),
                e !== "none" && !i._data(f, "olddisplay") && i._data(f, "olddisplay", e));
            for (u = 0; u < o; u++)
                this[u].style && (this[u].style.display = "none");
            return this
        },
        _toggle: i.fn.toggle,
        toggle: function(n, t, r) {
            var u = typeof n == "boolean";
            return i.isFunction(n) && i.isFunction(t) ? this._toggle.apply(this, arguments) : n == null || u ? this.each(function() {
                        var t = u ? n : i(this).is(":hidden");
                        i(this)[t ? "show" : "hide"]()
                    }) : this.animate(c("toggle", 3), n, t, r),
                this
        },
        fadeTo: function(n, t, i, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, r, u) {
            function e() {
                f.queue === !1 && i._mark(this);
                var e = i.extend({}, f), w = this.nodeType === 1, v = w && i(this).is(":hidden"), r, u, t, o, y, p, h, s, c, l, a;
                e.animatedProperties = {};
                for (t in n)
                    if (r = i.camelCase(t),
                        t !== r && (n[r] = n[t],
                            delete n[t]),
                        (y = i.cssHooks[r]) && "expand"in y) {
                        p = y.expand(n[r]);
                        delete n[r];
                        for (t in p)
                            t in n || (n[t] = p[t])
                    }
                for (r in n) {
                    if (u = n[r],
                            i.isArray(u) ? (e.animatedProperties[r] = u[1],
                                    u = n[r] = u[0]) : e.animatedProperties[r] = e.specialEasing && e.specialEasing[r] || e.easing || "swing",
                        u === "hide" && v || u === "show" && !v)
                        return e.complete.call(this);
                    w && (r === "height" || r === "width") && (e.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY],
                    i.css(this, "display") === "inline" && i.css(this, "float") === "none" && (!i.support.inlineBlockNeedsLayout || pt(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                e.overflow != null && (this.style.overflow = "hidden");
                for (t in n)
                    o = new i.fx(this,e,t),
                        u = n[t],
                        ue.test(u) ? (a = i._data(this, "toggle" + t) || (u === "toggle" ? v ? "show" : "hide" : 0),
                                a ? (i._data(this, "toggle" + t, a === "show" ? "hide" : "show"),
                                        o[a]()) : o[u]()) : (h = fe.exec(u),
                                s = o.cur(),
                                h ? (c = parseFloat(h[2]),
                                        l = h[3] || (i.cssNumber[t] ? "" : "px"),
                                    l !== "px" && (i.style(this, t, (c || 1) + l),
                                        s = (c || 1) / o.cur() * s,
                                        i.style(this, t, s + l)),
                                    h[1] && (c = (h[1] === "-=" ? -1 : 1) * c + s),
                                        o.custom(s, c, l)) : o.custom(s, u, ""));
                return !0
            }
            var f = i.speed(t, r, u);
            return i.isEmptyObject(n) ? this.each(f.complete, [!1]) : (n = i.extend({}, n),
                    f.queue === !1 ? this.each(e) : this.queue(f.queue, e))
        },
        stop: function(n, r, u) {
            return typeof n != "string" && (u = r,
                r = n,
                n = t),
            r && n !== !1 && this.queue(n || "fx", []),
                this.each(function() {
                    function e(n, t, r) {
                        var f = t[r];
                        i.removeData(n, r, !0);
                        f.stop(u)
                    }
                    var t, o = !1, f = i.timers, r = i._data(this);
                    if (u || i._unmark(!0, this),
                        n == null)
                        for (t in r)
                            r[t] && r[t].stop && t.indexOf(".run") === t.length - 4 && e(this, r, t);
                    else
                        r[t = n + ".run"] && r[t].stop && e(this, r, t);
                    for (t = f.length; t--; )
                        f[t].elem === this && (n == null || f[t].queue === n) && (u ? f[t](!0) : f[t].saveState(),
                            o = !0,
                            f.splice(t, 1));
                    u && o || i.dequeue(this, n)
                })
        }
    });
    i.each({
        slideDown: c("show", 1),
        slideUp: c("hide", 1),
        slideToggle: c("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.extend({
        speed: function(n, t, r) {
            var u = n && typeof n == "object" ? i.extend({}, n) : {
                    complete: r || !r && t || i.isFunction(n) && n,
                    duration: n,
                    easing: r && t || t && !i.isFunction(t) && t
                };
            return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default,
            (u.queue == null || u.queue === !0) && (u.queue = "fx"),
                u.old = u.complete,
                u.complete = function(n) {
                    i.isFunction(u.old) && u.old.call(this);
                    u.queue ? i.dequeue(this, u.queue) : n !== !1 && i._unmark(this)
                }
                ,
                u
        },
        easing: {
            linear: function(n) {
                return n
            },
            swing: function(n) {
                return -Math.cos(n * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function(n, t, i) {
            this.options = t;
            this.elem = n;
            this.prop = i;
            t.orig = t.orig || {}
        }
    });
    i.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this);
            (i.fx.step[this.prop] || i.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))
                return this.elem[this.prop];
            var t, n = i.css(this.elem, this.prop);
            return isNaN(t = parseFloat(n)) ? !n || n === "auto" ? 0 : n : t
        },
        custom: function(n, r, u) {
            function e(n) {
                return f.step(n)
            }
            var f = this
                , o = i.fx;
            this.startTime = rt || wt();
            this.end = r;
            this.now = this.start = n;
            this.pos = this.state = 0;
            this.unit = u || this.unit || (i.cssNumber[this.prop] ? "" : "px");
            e.queue = this.options.queue;
            e.elem = this.elem;
            e.saveState = function() {
                i._data(f.elem, "fxshow" + f.prop) === t && (f.options.hide ? i._data(f.elem, "fxshow" + f.prop, f.start) : f.options.show && i._data(f.elem, "fxshow" + f.prop, f.end))
            }
            ;
            e() && i.timers.push(e) && !tt && (tt = setInterval(o.tick, o.interval))
        },
        show: function() {
            var n = i._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = n || i.style(this.elem, this.prop);
            this.options.show = !0;
            n !== t ? this.custom(this.cur(), n) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            i(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = i._data(this.elem, "fxshow" + this.prop) || i.style(this.elem, this.prop);
            this.options.hide = !0;
            this.custom(this.cur(), 0)
        },
        step: function(n) {
            var r, f, e, o = rt || wt(), s = !0, u = this.elem, t = this.options;
            if (n || o >= t.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                t.animatedProperties[this.prop] = !0;
                for (r in t.animatedProperties)
                    t.animatedProperties[r] !== !0 && (s = !1);
                if (s) {
                    if (t.overflow == null || i.support.shrinkWrapBlocks || i.each(["", "X", "Y"], function(n, i) {
                            u.style["overflow" + i] = t.overflow[n]
                        }),
                        t.hide && i(u).hide(),
                        t.hide || t.show)
                        for (r in t.animatedProperties)
                            i.style(u, r, t.orig[r]),
                                i.removeData(u, "fxshow" + r, !0),
                                i.removeData(u, "toggle" + r, !0);
                    e = t.complete;
                    e && (t.complete = !1,
                        e.call(u))
                }
                return !1
            }
            return t.duration == Infinity ? this.now = o : (f = o - this.startTime,
                    this.state = f / t.duration,
                    this.pos = i.easing[t.animatedProperties[this.prop]](this.state, f, 0, 1, t.duration),
                    this.now = this.start + (this.end - this.start) * this.pos),
                this.update(),
                !0
        }
    };
    i.extend(i.fx, {
        tick: function() {
            for (var r, n = i.timers, t = 0; t < n.length; t++)
                r = n[t],
                r() || n[t] !== r || n.splice(t--, 1);
            n.length || i.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(tt);
            tt = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(n) {
                i.style(n.elem, "opacity", n.now)
            },
            _default: function(n) {
                n.elem.style && n.elem.style[n.prop] != null ? n.elem.style[n.prop] = n.now + n.unit : n.elem[n.prop] = n.now
            }
        }
    });
    i.each(it.concat.apply([], it), function(n, t) {
        t.indexOf("margin") && (i.fx.step[t] = function(n) {
                i.style(n.elem, t, Math.max(0, n.now) + n.unit)
            }
        )
    });
    i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
            return i.grep(i.timers, function(t) {
                return n === t.elem
            }).length
        }
    );
    kr = /^t(?:able|d|h)$/i;
    vt = /^(?:body|html)$/i;
    br = "getBoundingClientRect"in r.documentElement ? function(n, t, r, u) {
            try {
                u = n.getBoundingClientRect()
            } catch (v) {}
            if (!u || !i.contains(r, n))
                return u ? {
                        top: u.top,
                        left: u.left
                    } : {
                        top: 0,
                        left: 0
                    };
            var f = t.body
                , e = yt(t)
                , o = r.clientTop || f.clientTop || 0
                , s = r.clientLeft || f.clientLeft || 0
                , h = e.pageYOffset || i.support.boxModel && r.scrollTop || f.scrollTop
                , c = e.pageXOffset || i.support.boxModel && r.scrollLeft || f.scrollLeft
                , l = u.top + h - o
                , a = u.left + c - s;
            return {
                top: l,
                left: a
            }
        }
        : function(n, t, r) {
            for (var u, c = n.offsetParent, l = n, o = t.body, h = t.defaultView, s = h ? h.getComputedStyle(n, null) : n.currentStyle, f = n.offsetTop, e = n.offsetLeft; (n = n.parentNode) && n !== o && n !== r; ) {
                if (i.support.fixedPosition && s.position === "fixed")
                    break;
                u = h ? h.getComputedStyle(n, null) : n.currentStyle;
                f -= n.scrollTop;
                e -= n.scrollLeft;
                n === c && (f += n.offsetTop,
                    e += n.offsetLeft,
                i.support.doesNotAddBorder && (!i.support.doesAddBorderForTableAndCells || !kr.test(n.nodeName)) && (f += parseFloat(u.borderTopWidth) || 0,
                    e += parseFloat(u.borderLeftWidth) || 0),
                    l = c,
                    c = n.offsetParent);
                i.support.subtractsBorderForOverflowNotVisible && u.overflow !== "visible" && (f += parseFloat(u.borderTopWidth) || 0,
                    e += parseFloat(u.borderLeftWidth) || 0);
                s = u
            }
            return (s.position === "relative" || s.position === "static") && (f += o.offsetTop,
                e += o.offsetLeft),
            i.support.fixedPosition && s.position === "fixed" && (f += Math.max(r.scrollTop, o.scrollTop),
                e += Math.max(r.scrollLeft, o.scrollLeft)),
                {
                    top: f,
                    left: e
                }
        }
    ;
    i.fn.offset = function(n) {
        if (arguments.length)
            return n === t ? this : this.each(function(t) {
                    i.offset.setOffset(this, n, t)
                });
        var r = this[0]
            , u = r && r.ownerDocument;
        return u ? r === u.body ? i.offset.bodyOffset(r) : br(r, u, u.documentElement) : null
    }
    ;
    i.offset = {
        bodyOffset: function(n) {
            var t = n.offsetTop
                , r = n.offsetLeft;
            return i.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(i.css(n, "marginTop")) || 0,
                r += parseFloat(i.css(n, "marginLeft")) || 0),
                {
                    top: t,
                    left: r
                }
        },
        setOffset: function(n, t, r) {
            var f = i.css(n, "position");
            f === "static" && (n.style.position = "relative");
            var e = i(n), o = e.offset(), l = i.css(n, "top"), a = i.css(n, "left"), v = (f === "absolute" || f === "fixed") && i.inArray("auto", [l, a]) > -1, u = {}, s = {}, h, c;
            v ? (s = e.position(),
                    h = s.top,
                    c = s.left) : (h = parseFloat(l) || 0,
                    c = parseFloat(a) || 0);
            i.isFunction(t) && (t = t.call(n, r, o));
            t.top != null && (u.top = t.top - o.top + h);
            t.left != null && (u.left = t.left - o.left + c);
            "using"in t ? t.using.call(n, u) : e.css(u)
        }
    };
    i.fn.extend({
        position: function() {
            if (!this[0])
                return null;
            var u = this[0]
                , n = this.offsetParent()
                , t = this.offset()
                , r = vt.test(n[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : n.offset();
            return t.top -= parseFloat(i.css(u, "marginTop")) || 0,
                t.left -= parseFloat(i.css(u, "marginLeft")) || 0,
                r.top += parseFloat(i.css(n[0], "borderTopWidth")) || 0,
                r.left += parseFloat(i.css(n[0], "borderLeftWidth")) || 0,
                {
                    top: t.top - r.top,
                    left: t.left - r.left
                }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || r.body; n && !vt.test(n.nodeName) && i.css(n, "position") === "static"; )
                    n = n.offsetParent;
                return n
            })
        }
    });
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, r) {
        var u = /Y/.test(r);
        i.fn[n] = function(f) {
            return i.access(this, function(n, f, e) {
                var o = yt(n);
                if (e === t)
                    return o ? r in o ? o[r] : i.support.boxModel && o.document.documentElement[f] || o.document.body[f] : n[f];
                o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e
            }, n, f, arguments.length, null)
        }
    });
    i.each({
        Height: "height",
        Width: "width"
    }, function(n, r) {
        var u = "client" + n
            , f = "scroll" + n
            , e = "offset" + n;
        i.fn["inner" + n] = function() {
            var n = this[0];
            return n ? n.style ? parseFloat(i.css(n, r, "padding")) : this[r]() : null
        }
        ;
        i.fn["outer" + n] = function(n) {
            var t = this[0];
            return t ? t.style ? parseFloat(i.css(t, r, n ? "margin" : "border")) : this[r]() : null
        }
        ;
        i.fn[r] = function(n) {
            return i.access(this, function(n, r, o) {
                var s, h, c, l;
                if (i.isWindow(n))
                    return s = n.document,
                        h = s.documentElement[u],
                    i.support.boxModel && h || s.body && s.body[u] || h;
                if (n.nodeType === 9)
                    return (s = n.documentElement,
                    s[u] >= s[f]) ? s[u] : Math.max(n.body[f], s[f], n.body[e], s[e]);
                if (o === t)
                    return c = i.css(n, r),
                        l = parseFloat(c),
                        i.isNumeric(l) ? l : c;
                i(n).css(r, o)
            }, r, n, arguments.length, null)
        }
    });
    n.jQuery = n.$ = i;
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return i
    })
})(window),
    function(n) {
        function u(n) {
            this.parent = n;
            this.container;
            this.loadbar;
            this.percentageContainer
        }
        function i(n) {
            this.toPreload = [];
            this.parent = n;
            this.container
        }
        function r(n) {
            this.element;
            this.parent = n
        }
        function t(t, r) {
            this.element = t;
            this.$element = n(t);
            this.options = r;
            this.foundUrls = [];
            this.destroyed = !1;
            this.imageCounter = 0;
            this.imageDone = 0;
            this.alreadyLoaded = !1;
            this.preloadContainer = new i(this);
            this.overlayLoader = new u(this);
            this.defaultOptions = {
                onComplete: function() {},
                backgroundColor: "#000",
                overlayId: "qLoverlay",
                barHeight: 1,
                percentage: !1,
                deepSearch: !0,
                completeAnimation: "fade",
                minimumTime: 500
            };
            this.init()
        }
        u.prototype.createOverlay = function() {
            var i = "absolute", t;
            this.parent.element.tagName.toLowerCase() == "body" ? i = "fixed" : (t = this.parent.$element.css("position"),
                (t != "fixed" || t != "absolute") && this.parent.$element.css("position", "relative"));
            this.container = n("<div id='" + this.parent.options.overlayId + "'><\/div>").css({
                width: "100%",
                height: "100%",
                backgroundColor: this.parent.options.backgroundColor,
                backgroundPosition: "fixed",
                position: i,
                zIndex: 666999,
                top: 0,
                left: 0
            }).appendTo(this.parent.$element);
            this.loadbar = n("<div id='qLbar'><\/div>").css({
                height: this.parent.options.barHeight + "px",
                marginTop: "-" + this.parent.options.barHeight / 2 + "px",
                backgroundColor: this.parent.options.barColor,
                width: "0%",
                position: "absolute",
                top: "50%"
            }).appendTo(this.container);
            this.loadPic = n("<div id='loading'><\/div>").css({
                height: "10rem",
                width: "30%",
                position: "absolute",
                fontSize: "2.3em",
                fontFamily: "Arial",
                color: "#af9e68",
                top: "45%",
                marginTop: "-" + (59 + this.parent.options.barHeight) + "px",
                textAlign: "center"
            }).appendTo(this.container);
            this.parent.options.percentage == !0 && (this.percentageContainer = n("<div id='qLpercentage' style='color:#fff;'><\/div>").text("0%").css({
                height: "50px",
                width: "50px",
                position: "absolute",
                fontSize: "2.3em",
                fontFamily: "Arial",
                top: "70%",
                left: "50%",
                marginTop: "-" + (59 + this.parent.options.barHeight) + "px",
                textAlign: "center",
                marginLeft: "-25px",
                color: this.parent.options.barColor
            }).appendTo(this.container));
            this.parent.preloadContainer.toPreload.length && this.parent.alreadyLoaded != !0 || this.parent.destroyContainers()
        }
        ;
        u.prototype.updatePercentage = function(n) {
            this.loadbar.stop().animate({
                width: n + "%",
                minWidth: n + "%"
            }, 200);
            this.parent.options.percentage == !0 && (this.percentageContainer.text(Math.ceil(n) + "%"),
                this.loadPic.height(Math.ceil(n) / 100 * 11 + "rem"))
        }
        ;
        i.prototype.create = function() {
            this.container = n("<div><\/div>").appendTo("body").css({
                display: "none",
                width: 0,
                height: 0,
                overflow: "hidden"
            });
            this.processQueue()
        }
        ;
        i.prototype.processQueue = function() {
            for (var n = 0; this.toPreload.length > n; n++)
                this.parent.destroyed || this.preloadImage(this.toPreload[n])
        }
        ;
        i.prototype.addImage = function(n) {
            this.toPreload.push(n)
        }
        ;
        i.prototype.preloadImage = function(n) {
            var t = new r;
            t.addToPreloader(this, n);
            t.bindLoadEvent()
        }
        ;
        r.prototype.addToPreloader = function(t, i) {
            this.element = n("<img />").attr("src", i);
            this.element.appendTo(t.container);
            this.parent = t.parent
        }
        ;
        r.prototype.bindLoadEvent = function() {
            var t, n;
            this.parent.imageCounter++;
            t = this.element.attr("src");
            this.element.removeAttr("src");
            n = this;
            setTimeout(function() {
                n.element.on("load error", n, function(n) {
                    n.data.completeLoading()
                });
                n.element.attr("src", t)
            }, 1)
        }
        ;
        r.prototype.completeLoading = function() {
            this.parent.imageDone++;
            var n = this.parent.imageDone / this.parent.imageCounter * 100;
            this.parent.overlayLoader.updatePercentage(n);
            this.parent.imageDone == this.parent.imageCounter && this.parent.endLoader()
        }
        ;
        t.prototype.init = function() {
            var r, i, t;
            if (this.options = n.extend({}, this.defaultOptions, this.options),
                    r = this.findImageInElement(this.element),
                this.options.deepSearch == !0)
                for (i = this.$element.find("*:not(script)"),
                         t = 0; t < i.length; t++)
                    this.findImageInElement(i[t]);
            this.preloadContainer.create();
            this.overlayLoader.createOverlay()
        }
        ;
        t.prototype.findImageInElement = function(t) {
            var f = "", e = n(t), h = "normal", u, i, o, s;
            if (e.css("background-image") != "none" ? (f = e.css("background-image"),
                        h = "background") : typeof e.attr("src") != "undefined" && t.nodeName.toLowerCase() == "img" && (f = e.attr("src")),
                    !this.hasGradient(f))
                for (f = this.stripUrl(f),
                         u = f.split(", "),
                         i = 0; i < u.length; i++)
                    this.validUrl(u[i]) && this.urlIsNew(u[i]) && (o = "",
                        this.isIE() || this.isOpera() ? (o = "?rand=" + Math.random(),
                                this.preloadContainer.addImage(u[i] + o)) : h == "background" ? this.preloadContainer.addImage(u[i] + o) : (s = new r(this),
                                    s.element = e,
                                    s.bindLoadEvent()),
                        this.foundUrls.push(u[i]))
        }
        ;
        t.prototype.hasGradient = function(n) {
            return n.indexOf("gradient") == -1 ? !1 : !0
        }
        ;
        t.prototype.stripUrl = function(n) {
            return n = n.replace(/url\(\"/g, ""),
                n = n.replace(/url\(/g, ""),
                n = n.replace(/\"\)/g, ""),
                n.replace(/\)/g, "")
        }
        ;
        t.prototype.isIE = function() {
            return navigator.userAgent.match(/msie/i)
        }
        ;
        t.prototype.isOpera = function() {
            return navigator.userAgent.match(/Opera/i)
        }
        ;
        t.prototype.validUrl = function(n) {
            return n.length > 0 && !n.match(/^(data:)/i) ? !0 : !1
        }
        ;
        t.prototype.urlIsNew = function(n) {
            return this.foundUrls.indexOf(n) == -1 ? !0 : !1
        }
        ;
        t.prototype.destroyContainers = function() {
            this.destroyed = !0;
            this.preloadContainer.container.remove();
            this.overlayLoader.container.remove()
        }
        ;
        t.prototype.endLoader = function() {
            this.destroyed = !0;
            this.onLoadComplete()
        }
        ;
        t.prototype.onLoadComplete = function() {
            if (this.options.completeAnimation == "grow")
                this.overlayLoader.loadbar[0].parent = this,
                    this.overlayLoader.loadbar.stop().animate({
                        height: "100"
                    }, 500, function() {
                        n(this).animate({
                            top: "0%",
                            width: "100%",
                            height: "100%"
                        }, 500, function() {
                            this.parent.overlayLoader.container[0].parent = this.parent;
                            this.parent.overlayLoader.container.fadeOut(500, function() {
                                this.parent.destroyContainers();
                                this.parent.options.onComplete()
                            })
                        })
                    });
            else
                this.overlayLoader.container[0].parent = this,
                    this.overlayLoader.container.fadeOut(500, function() {
                        this.parent.destroyContainers();
                        this.parent.options.onComplete()
                    })
        }
        ;
        Array.prototype.indexOf || (Array.prototype.indexOf = function(n) {
                var i = this.length >>> 0
                    , t = Number(arguments[1]) || 0;
                for (t = t < 0 ? Math.ceil(t) : Math.floor(t),
                     t < 0 && (t += i); t < i; t++)
                    if (t in this && this[t] === n)
                        return t;
                return -1
            }
        );
        n.fn.queryLoader2 = function(n) {
            return this.each(function() {
                new t(this,n)
            })
        }
    }(jQuery),
    function(n, t) {
        var i = function(n, t, i) {
            var r;
            return function() {
                function e() {
                    i || n.apply(u, f);
                    r = null
                }
                var u = this
                    , f = arguments;
                r ? clearTimeout(r) : i && n.apply(u, f);
                r = setTimeout(e, t || 150)
            }
        };
        jQuery.fn[t] = function(n) {
            return n ? this.bind("resize", i(n)) : this.trigger(t)
        }
    }(jQuery, "smartresize"),
    function(n) {
        n.Gal = function(t, i) {
            this.element = n(i);
            this._init(t)
        }
        ;
        n.Gal.settings = {
            selector: ".item",
            width: 225,
            gutter: 20,
            animate: !1,
            animationOptions: {
                speed: 200,
                duration: 300,
                effect: "fadeInOnAppear",
                queue: !0,
                complete: function() {}
            }
        };
        n.Gal.prototype = {
            _init: function(t) {
                var i = this;
                this.name = this._setName(5);
                this.gridArr = [];
                this.gridArrAppend = [];
                this.gridArrPrepend = [];
                this.setArr = !1;
                this.setGrid = !1;
                this.setOptions;
                this.cols = 0;
                this.itemCount = 0;
                this.prependCount = 0;
                this.isPrepending = !1;
                this.appendCount = 0;
                this.resetCount = !0;
                this.ifCallback = !0;
                this.box = this.element;
                this.options = n.extend(!0, {}, n.Gal.settings, t);
                this.gridArr = n.makeArray(this.box.find(this.options.selector));
                this.isResizing = !1;
                this.w = 0;
                this.boxArr = [];
                this._setCols();
                this._renderGrid("append");
                n(this.box).addClass("gridalicious");
                n(window).smartresize(function() {
                    i.resize()
                })
            },
            _setName: function(n, t) {
                return t = t ? t : "",
                    n ? this._setName(--n, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 60)) + t) : t
            },
            _setCols: function() {
                var t, i, r;
                for (this.cols = Math.floor(this.box.width() / this.options.width),
                         diff = (this.box.width() - this.cols * this.options.width - this.options.gutter) / this.cols,
                         w = (this.options.width + diff) / this.box.width() * 100,
                         this.w = w,
                         t = 0; t < this.cols; t++)
                    i = n("<div><\/div>").addClass("galcolumn").attr("id", "item" + t + this.name).css({
                        width: w + "%",
                        paddingLeft: this.options.gutter,
                        paddingBottom: this.options.gutter,
                        float: "left",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "-o-box-sizing": "border-box",
                        "box-sizing": "border-box"
                    }),
                        this.box.append(i);
                this.box.find(n("#clear" + this.name)).remove();
                r = n("<div><\/div>").css({
                    clear: "both",
                    height: "0",
                    width: "0",
                    display: "block"
                }).attr("id", "clear" + this.name);
                this.box.append(r)
            },
            _renderGrid: function(t, i, r) {
                var s = []
                    , o = []
                    , u = 0
                    , l = this.prependCount
                    , f = this.appendCount
                    , c = this.options.gutter
                    , e = this.cols
                    , h = this.name
                    , a = n(".galcolumn").width();
                i ? (o = i,
                    t == "append" && (f += r,
                        u = this.appendCount),
                    t == "prepend" && (this.isPrepending = !0,
                        u = Math.round(r % e),
                    u <= 0 && (u = e)),
                    t == "renderAfterPrepend" && (f += r,
                        u = r)) : (o = this.gridArr,
                        f = n(this.gridArr).size());
                n.each(o, function(i, r) {
                    var o = n(r)
                        , l = "100%";
                    o.hasClass("not-responsive") && (l = "auto");
                    o.css({
                        marginBottom: c,
                        zoom: "1",
                        filter: "alpha(opacity=0)",
                        opacity: "0"
                    }).find("img, object, embed, iframe").css({
                        width: l,
                        height: "auto",
                        display: "block",
                        "margin-left": "auto",
                        "margin-right": "auto"
                    });
                    t == "prepend" ? (u--,
                            n("#item" + u + h).prepend(o),
                            s.push(o),
                        u == 0 && (u = e)) : (n("#item" + u + h).append(o),
                            s.push(o),
                            u++,
                        u >= e && (u = 0),
                        f >= e && (f = f - e))
                });
                this.appendCount = f;
                this.itemCount = u;
                t == "append" || t == "prepend" ? (t == "prepend" && this._updateAfterPrepend(this.gridArr, o),
                        this._renderItem(s),
                        this.isPrepending = !1) : this._renderItem(this.gridArr)
            },
            _collectItems: function() {
                var t = [];
                return n(this.box).find(this.options.selector).each(function() {
                    t.push(n(this))
                }),
                    t
            },
            _renderItem: function(t) {
                var s = this.options.animationOptions.speed
                    , u = this.options.animationOptions.effect
                    , e = this.options.animationOptions.duration
                    , f = this.options.animationOptions.queue
                    , h = this.options.animate
                    , r = this.options.animationOptions.complete
                    , o = 0
                    , i = 0;
                h !== !0 || this.isResizing ? (n.each(t, function(t, i) {
                        n(i).css({
                            opacity: "1",
                            filter: "alpha(opacity=100)"
                        })
                    }),
                    this.ifCallback && r.call(t)) : (f === !0 && u == "fadeInOnAppear" ? (this.isPrepending && t.reverse(),
                            n.each(t, function(u, f) {
                                setTimeout(function() {
                                    n(f).animate({
                                        opacity: "1.0"
                                    }, e);
                                    i++;
                                    i == t.length && r.call(undefined, t)
                                }, o * s);
                                o++
                            })) : f === !1 && u == "fadeInOnAppear" && (this.isPrepending && t.reverse(),
                            n.each(t, function(u, f) {
                                n(f).animate({
                                    opacity: "1.0"
                                }, e);
                                i++;
                                i == t.length && this.ifCallback && r.call(undefined, t)
                            })),
                    f !== !0 || u || n.each(t, function(u, f) {
                        n(f).css({
                            opacity: "1",
                            filter: "alpha(opacity=100)"
                        });
                        i++;
                        i == t.length && this.ifCallback && r.call(undefined, t)
                    }))
            },
            _updateAfterPrepend: function(t, i) {
                var r = this.gridArr;
                n.each(i, function(n, t) {
                    r.unshift(t)
                });
                this.gridArr = r
            },
            resize: function() {
                this.box.find(n(".galcolumn")).remove();
                this._setCols();
                this.ifCallback = !1;
                this.isResizing = !0;
                this._renderGrid("append");
                this.ifCallback = !0;
                this.isResizing = !1
            },
            append: function(t) {
                var i = this.gridArr
                    , r = this.gridArrPrepend;
                n.each(t, function(n, t) {
                    i.push(t);
                    r.push(t)
                });
                this._renderGrid("append", t, n(t).size())
            },
            prepend: function(t) {
                this.ifCallback = !1;
                this._renderGrid("prepend", t, n(t).size());
                this.ifCallback = !0
            }
        };
        n.fn.gridalicious = function(t, i) {
            return typeof t == "string" ? this.each(function() {
                    var r = n.data(this, "gridalicious");
                    r[t].apply(r, [i])
                }) : this.each(function() {
                    n.data(this, "gridalicious", new n.Gal(t,this))
                }),
                this
        }
    }(jQuery),
    function() {
        "use strict";
        (function() {
            function et() {
                var t = !1;
                t && ht("keydown", nt);
                n.keyboardSupport && !t && o("keydown", nt)
            }
            function d() {
                var u;
                if (document.body) {
                    var t = document.body
                        , i = document.documentElement
                        , r = window.innerHeight
                        , o = t.scrollHeight;
                    f = document.compatMode.indexOf("CSS") >= 0 ? i : t;
                    e = t;
                    et();
                    k = !0;
                    top != self ? b = !0 : o > r && (t.offsetHeight <= r || i.offsetHeight <= r) && (i.style.height = "auto",
                        f.offsetHeight <= r && (u = document.createElement("div"),
                            u.style.clear = "both",
                            t.appendChild(u)));
                    n.fixedBackground || ft || (t.style.backgroundAttachment = "scroll",
                        i.style.backgroundAttachment = "scroll")
                }
            }
            function g(t, i, u, f) {
                var l, o, e, a, c;
                (f || (f = 1e3),
                    ct(i, u),
                n.accelerationMax != 1 && (l = +new Date,
                    o = l - h,
                o < n.accelerationDelta && (e = (1 + 30 / o) / 2,
                e > 1 && (e = Math.min(e, n.accelerationMax),
                    i *= e,
                    u *= e)),
                    h = +new Date),
                    r.push({
                        x: i,
                        y: u,
                        lastX: i < 0 ? .99 : -.99,
                        lastY: u < 0 ? .99 : -.99,
                        start: +new Date
                    }),
                    s) || (a = t === document.body,
                    c = function() {
                        for (var d = +new Date, h = 0, l = 0, y, w, o = 0; o < r.length; o++) {
                            var e = r[o]
                                , b = d - e.start
                                , k = b >= n.animationTime
                                , v = k ? 1 : b / n.animationTime;
                            n.pulseAlgorithm && (v = vt(v));
                            y = e.x * v - e.lastX >> 0;
                            w = e.y * v - e.lastY >> 0;
                            h += y;
                            l += w;
                            e.lastX += y;
                            e.lastY += w;
                            k && (r.splice(o, 1),
                                o--)
                        }
                        a ? window.scrollBy(h, l) : (h && (t.scrollLeft += h),
                            l && (t.scrollTop += l));
                        i || u || (r = []);
                        r.length ? p(c, t, f / n.frameRate + 1) : s = !1
                    }
                    ,
                    p(c, t, 0),
                    s = !0)
            }
            function ot(t) {
                var u, f, r, i;
                if ((k || d(),
                        u = t.target,
                        f = tt(u),
                    !f || t.defaultPrevented || v(e, "embed") || v(u, "embed") && /\.pdf/i.test(u.src)) || (r = t.wheelDeltaX || 0,
                        i = t.wheelDeltaY || 0,
                    r || i || (i = t.wheelDelta || 0),
                    !n.touchpadSupport && at(i)))
                    return !0;
                Math.abs(r) > 1.2 && (r *= n.stepSize / 120);
                Math.abs(i) > 1.2 && (i *= n.stepSize / 120);
                g(f, -r, -i);
                t.preventDefault()
            }
            function nt(i) {
                var o = i.target, l = i.ctrlKey || i.altKey || i.metaKey || i.shiftKey && i.keyCode !== t.spacebar, h;
                if (/input|textarea|select|embed/i.test(o.nodeName) || o.isContentEditable || i.defaultPrevented || l || v(o, "button") && i.keyCode === t.spacebar)
                    return !0;
                var c, s = 0, r = 0, u = tt(e), f = u.clientHeight;
                u == document.body && (f = window.innerHeight);
                switch (i.keyCode) {
                    case t.up:
                        r = -n.arrowScroll;
                        break;
                    case t.down:
                        r = n.arrowScroll;
                        break;
                    case t.spacebar:
                        c = i.shiftKey ? 1 : -1;
                        r = -c * f * .9;
                        break;
                    case t.pageup:
                        r = -f * .9;
                        break;
                    case t.pagedown:
                        r = f * .9;
                        break;
                    case t.home:
                        r = -u.scrollTop;
                        break;
                    case t.end:
                        h = u.scrollHeight - u.scrollTop - f;
                        r = h > 0 ? h + 10 : 0;
                        break;
                    case t.left:
                        s = -n.arrowScroll;
                        break;
                    case t.right:
                        s = n.arrowScroll;
                        break;
                    default:
                        return !0
                }
                g(u, s, r);
                i.preventDefault()
            }
            function st(n) {
                e = n.target
            }
            function a(n, t) {
                for (var i = n.length; i--; )
                    c[l(n[i])] = t;
                return t
            }
            function tt(n) {
                var t = [], i = null, u = f.scrollHeight, r;
                do {
                    if (r = c[l(n)],
                            r)
                        return a(t, r);
                    if (t.push(n),
                        u === n.scrollHeight) {
                        if (!b || f.clientHeight + 10 < u)
                            return a(t, document.body)
                    } else if (n.clientHeight + 10 < n.scrollHeight && getComputedStyle(n, "").getPropertyValue("overflow-y") && (i = getComputedStyle(n, "").getPropertyValue("overflow-y"),
                        i === "scroll" || i === "auto"))
                        return a(t, n)
                } while (n = n.parentNode)
            }
            function o(n, t, i) {
                window.addEventListener(n, t, i || !1)
            }
            function ht(n, t, i) {
                window.removeEventListener(n, t, i || !1)
            }
            function v(n, t) {
                return (n.nodeName || "").toLowerCase() === t.toLowerCase()
            }
            function ct(n, t) {
                n = n > 0 ? 1 : -1;
                t = t > 0 ? 1 : -1;
                (u.x !== n || u.y !== t) && (u.x = n,
                    u.y = t,
                    r = [],
                    h = 0)
            }
            function at(n) {
                if (n) {
                    n = Math.abs(n);
                    i.push(n);
                    i.shift();
                    clearTimeout(lt);
                    var t = i[0] == i[1] && i[1] == i[2]
                        , r = y(i[0], 120) && y(i[1], 120) && y(i[2], 120);
                    return !(t || r)
                }
            }
            function y(n, t) {
                return Math.floor(n / t) == n / t
            }
            function it(t) {
                var i, r, u;
                return t = t * n.pulseScale,
                    t < 1 ? i = t - (1 - Math.exp(-t)) : (r = Math.exp(-1),
                            t -= 1,
                            u = 1 - Math.exp(-t),
                            i = r + u * (1 - r)),
                i * n.pulseNormalize
            }
            function vt(t) {
                return t >= 1 ? 1 : t <= 0 ? 0 : (n.pulseNormalize == 1 && (n.pulseNormalize /= it(1)),
                            it(t))
            }
            var w = {
                frameRate: 150,
                animationTime: 1800,
                stepSize: 85,
                pulseAlgorithm: !0,
                pulseScale: 8,
                pulseNormalize: 1,
                accelerationDelta: 20,
                accelerationMax: 1,
                keyboardSupport: !0,
                arrowScroll: 50,
                touchpadSupport: !0,
                fixedBackground: !0,
                excluded: ""
            }, n = w, ft = !1, b = !1, u = {
                x: 0,
                y: 0
            }, k = !1, f = document.documentElement, e, i = [120, 120, 120], t = {
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                spacebar: 32,
                pageup: 33,
                pagedown: 34,
                end: 35,
                home: 36
            }, n = w, r = [], s = !1, h = +new Date, c = {}, l, lt, p, rt, ut;
            setInterval(function() {
                c = {}
            }, 1e4);
            l = function() {
                var n = 0;
                return function(t) {
                    return t.uniqueID || (t.uniqueID = n++)
                }
            }();
            p = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(n, t, i) {
                        window.setTimeout(n, i || 1e3 / 60)
                    }
            }();
            rt = /chrome/i.test(window.navigator.userAgent);
            ut = "onmousewheel"in document;
            ut && rt && (o("mousedown", st),
                o("mousewheel", ot),
                o("load", d))
        })()
    }(jQuery);
$(function() {
    if (centerBlock($(".banner .hd ul")),
            hover(),
            $(".header #nav ul li.cur").find("a").addClass("cur"),
            $("body").queryLoader2({
                backgroundColor: "rgba(0,0,0,0)",
                completeAnimation: "fade",
                percentage: !1,
                deepSearch: !0,
                onComplete: function() {
                    $(".header #nav ul li.cur").find("a").removeClass("cur");
                    $(".nav_line").css("visibility", "visible")
                }
            }),
            $(".foot3").click(function() {
                $(this).hasClass("cur") ? ($(this).removeClass("cur"),
                        $(".foot3 span").fadeOut(300)) : ($(this).addClass("cur"),
                        $(this).find("span").fadeIn(300))
            }),
        $(window).width() >= 1024) {
        $(window).scroll(function() {
            var n = $(window).scrollTop();
            n > 200 ? $(".backTop").fadeIn(200) : $(".backTop").fadeOut(200)
        });
        $(".backTop").click(function() {
            $("html,body").animate({
                scrollTop: 0
            }, 700)
        });

        $(".foot3, .top3").hover(function() {
            $(this).find("span").fadeIn(300)
        }, function() {
            $(this).find("span").fadeOut(300)
        })
    } else if (510 < $(window).width() < 1024) {
        var n = $("#nav")
            , t = n.find(".nav_line")
            , i = n.find(".cur").width() - 0 + "px"
            , r = n.find(".cur").position().left + 0 + "px";
        t.css({
            left: r,
            width: i
        });
        n.find("li").hover(function() {
            var i = $(this).index()
                , r = n.find("li").eq(i).width() - 0 + "px"
                , u = $(this).position().left + 0 + "px";
            t.stop().animate({
                left: u,
                width: r
            }, 300)
        }, function() {
            t.stop().animate({
                left: r,
                width: i
            }, 300)
        });
        $("#nav li").each(function() {
            $(this).mouseover(function() {
                $(this).find("div").show()
            });
            $(this).mouseleave(function() {
                $(this).find("div").hide()
            })
        })
    } else
        $(window).scroll(function() {
            var n = $(window).scrollTop();
            n > 50 ? $(".backTop").fadeIn(200) : $(".backTop").fadeOut(200)
        }),
            $(".backTop").click(function() {
                $("html,body").animate({
                    scrollTop: 0
                }, 700)
            }),
            $(".foot3").click(function() {
                $(this).hasClass("cur") ? ($(this).removeClass("cur"),
                        $(".foot3 span").fadeOut(300)) : ($(this).addClass("cur"),
                        $(this).find("span").fadeIn(300))
            });
    $(".alertBox a").click(function() {
        $(".alertBox").fadeOut(200)
    });
    $(".popBox .close").click(function() {
        $(".popBox").fadeOut(200)
    });
    $(".apply").click(function() {
        $(".popBox").fadeIn(200)
    });
    $(".list li").each(function() {
        var n = $(this).find("p a");
        letterLimited(n, 120)
    })
});
$(function() {
    $(".exe2 li").each(function() {
        $(this).click(function() {
            if ($(this).addClass("cur").siblings().removeClass("cur"),
                $(window).width() < 510) {
                var n = $(".title_h2").offset().top;
                $("html,body").animate({
                    scrollTop: n
                }, 300)
            }
        })
    })
});
$(function() {
    $(".cityBox > em").click(function() {
        $(this).hasClass("cur") ? ($(this).next().slideUp(200),
                $(this).removeClass("cur")) : ($(this).addClass("cur"),
                $(this).next().slideDown(200))
    });
    $(".optionBox span").each(function() {
        $(this).click(function() {
            var n = $(this).text();
            $(".cityBox > em").html(n);
            $(this).parent().prev().removeClass("cur");
            $(this).parent().slideUp(200)
        })
    })
});
"placeholder"in document.createElement("input") || $("input[placeholder],textarea[placeholder]").each(function() {
    var n = $(this)
        , t = n.attr("placeholder");
    n.val() === "" && n.val(t).addClass("placeholder");
    n.focus(function() {
        n.val() === t && n.val("").removeClass("placeholder")
    }).blur(function() {
        n.val() === "" && n.val(t).addClass("placeholder")
    }).closest("form").submit(function() {
        n.val() === t && n.val("")
    })
});
$(function() {
    $(".ham > img").click(function() {
        $(".hamBox").slideDown(300)
    });
    $(".ham .closeBtn").click(function() {
        $(".hamBox").slideUp(300)
    });
    $(".hamBox li").click(function() {
        $(this).children().is("div") && ($(this).hasClass("cur") ? ($(this).removeClass("cur"),
                $(this).find("div").slideUp(300)) : ($(".hamBox li div").slideUp(300),
                $(".hamBox li").removeClass("cur"),
                $(this).addClass("cur"),
                $(this).find("div").slideDown(300)))
    })
})

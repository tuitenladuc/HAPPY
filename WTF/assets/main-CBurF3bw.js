import {
    f as bn,
    R as me,
    h as Hn,
    D as O,
    C as Gn,
    i as ot,
    j as pe,
    k as Se,
    l as rt,
    F as Un,
    m as Xn,
    n as Yn,
    o as Wn,
    H as Xe,
    q as Kn,
    r as qn,
    s as st,
    t as Zn,
    u as Dt,
    L as Ot,
    e as Jn,
    O as Qn,
    v as be,
    w as $t,
    p as Bt,
    x as ea
} from "./config-Bb1R82Qk.js";
import {
    r as h,
    j as g,
    u as Ae,
    a as ke,
    T as ta,
    b as na,
    C as aa,
    A as oa,
    O as ra,
    c as sa
} from "./fiber-C9CpB_0h.js";
import {
    r as re,
    c as B,
    ad as Ee,
    ae as Ye,
    u as Vt,
    aa as We,
    ab as te,
    a3 as wn,
    af as kt,
    ag as Le,
    t as ia,
    D as Ke,
    ah as xn,
    F as Ct,
    ai as vn,
    x as bt,
    aj as ca,
    ak as la,
    al as xe,
    am as it,
    a7 as Ht,
    an as $e,
    ao as ua,
    ap as Gt,
    p as Ut,
    h as Xt
} from "./three-YEApjGS9.js";
import {
    E as fa,
    B as ha
} from "./post-UaYqWOfJ.js";
const Je = "./assets/intro/",
    da = "http://www.w3.org/2000/svg",
    F = (e, t, n) => {
        const a = document.createElementNS(da, e);
        for (const o in t) a.setAttribute(o, t[o]);
        return n && n.appendChild(a), a
    },
    oe = (e, t) => e + Math.random() * (t - e),
    ma = e => Array.isArray(e) ? oe(e[0], e[1]) : e;

function pa() {
    const e = new Set;
    return {
        cancelled: !1,
        after(t, n) {
            if (this.cancelled) return 0;
            const a = setTimeout(() => {
                e.delete(a), this.cancelled || t()
            }, n);
            return e.add(a), a
        },
        clear() {
            this.cancelled = !0;
            for (const t of e) clearTimeout(t);
            e.clear()
        }
    }
}

function ve(e) {
    const t = e.placement;
    if (t.mode === "box") return t.boxPx;
    const n = t.targetContentBoxPx,
        a = e.asset,
        o = a.alphaContentRectPx;
    if (t.mode === "alpha-content-box-stretch") {
        const s = n.width / o.width,
            i = n.height / o.height;
        return {
            x: n.x - o.x * s,
            y: n.y - o.y * i,
            width: a.width * s,
            height: a.height * i
        }
    }
    const r = Math.min(n.width / o.width, n.height / o.height);
    return {
        x: n.x + (n.width - o.width * r) / 2 - o.x * r,
        y: n.y + (n.height - o.height * r) / 2 - o.y * r,
        width: a.width * r,
        height: a.height * r
    }
}

function wt(e, t) {
    return F("image", {
        href: Je + e.file,
        x: t.x,
        y: t.y,
        width: t.width,
        height: t.height,
        preserveAspectRatio: "none",
        "data-layer": e.id
    })
}

function Yt(e, t, n) {
    if (n) return;
    const a = t.animation || {},
        o = ve(t);
    if (a.transformOrigin) {
        const [c, p] = a.transformOrigin.split(" ").map(parseFloat);
        e.style.transformOrigin = `${o.x+o.width*c/100}px ${o.y+o.height*p/100}px`
    } else e.style.transformOrigin = `${o.x+o.width/2}px ${o.y+o.height/2}px`;
    const r = ma(a.durationSeconds || 6) * 1e3,
        s = (a.delaySeconds || 0) * 1e3,
        i = {
            duration: r,
            iterations: 1 / 0,
            direction: "alternate",
            easing: "ease-in-out",
            delay: s
        },
        f = () => a.translateXPx ? a.translateXPx : a.translateXPercent ? [o.width * a.translateXPercent[0] / 100, o.width * a.translateXPercent[1] / 100] : [0, 0];
    switch (a.preset) {
        case "lantern-float": {
            const [c, p] = a.translateYPx, [l, u] = a.rotateDegrees;
            e.animate([{
                transform: `translateY(${c}px) rotate(${l}deg)`
            }, {
                transform: `translateY(${p}px) rotate(${u}deg)`
            }], i);
            break
        }
        case "glow-pulse":
            e.animate([{
                transform: `scale(${a.scale[0]})`,
                opacity: a.opacity[0]
            }, {
                transform: `scale(${a.scale[1]})`,
                opacity: a.opacity[1]
            }], i);
            break;
        case "twinkle":
            e.animate([{
                opacity: a.opacity[1]
            }, {
                opacity: a.opacity[0]
            }], {
                ...i,
                duration: 3e3
            });
            break;
        case "slow-drift":
        case "parallax-x":
        case "cloud-drift": {
            const [c, p] = f();
            e.animate([{
                transform: `translateX(${c}px)`
            }, {
                transform: `translateX(${p}px)`
            }], i);
            break
        }
        case "branch-sway": {
            const [c, p] = a.rotateDegrees;
            e.animate([{
                transform: `rotate(${c}deg)`
            }, {
                transform: `rotate(${p}deg)`
            }], i);
            break
        }
        case "rabbit-breathe": {
            const [c, p] = a.translateYPx, [l, u] = a.scale;
            e.animate([{
                transform: `translateY(${c}px) scale(${l})`
            }, {
                transform: `translateY(${p}px) scale(${u})`
            }], i);
            break
        }
    }
}

function ga(e, t, n, {
    reduced: a,
    timers: o
}) {
    const r = e.repeat,
        s = ve(e),
        i = s.x + s.width / 2,
        f = s.y + s.height / 2,
        c = /flower/.test(e.id),
        p = n.bloomSpots || [],
        l = n.fallFloor || n.scene.referenceCanvas.height,
        u = n.scene.referenceCanvas.width / 551,
        m = d => {
            if (o.cancelled || !d.isConnected) return;
            const y = p[Math.floor(Math.random() * p.length)],
                w = y.x + oe(-14, 14) * u,
                x = y.y + oe(-6, 10) * u,
                M = oe(r.randomScale[0], r.randomScale[1]),
                C = oe(0, 360),
                b = Math.min(oe(150, 300) * u, l - x),
                _ = oe(-40, 40) * u,
                T = oe(8, 22) * u * (Math.random() < .5 ? -1 : 1),
                S = oe(90, 260) * (Math.random() < .5 ? -1 : 1),
                P = oe(c ? 6500 : 5500, c ? 10500 : 9500);
            d.style.transformOrigin = `${i}px ${f}px`;
            const R = (k, z) => {
                    const N = w - i + _ * k + T * Math.sin(z),
                        he = x - f + b * (k * k * .35 + k * .65);
                    return `translate(${N}px, ${he}px) scale(${M}) rotate(${C+S*k}deg)`
                },
                E = [],
                D = 8;
            for (let k = 0; k <= D; k++) {
                const z = k / D,
                    N = z < .12 ? z / .12 : z > .72 ? Math.max(0, 1 - (z - .72) / .28) : 1;
                E.push({
                    transform: R(z, z * Math.PI * 2.2),
                    opacity: N * .95,
                    offset: z
                })
            }
            d.animate(E, {
                duration: P,
                easing: "linear",
                fill: "forwards"
            }).finished.then(() => {
                o.cancelled || !d.isConnected || o.after(() => m(d), oe(300, 4500))
            }).catch(() => {})
        };
    for (let d = 0; d < r.recommendedCount; d++) {
        const y = F("g", {}, t);
        y.appendChild(wt(e, s)), y.style.opacity = "0", !(a || !p.length) && o.after(() => m(y), oe(0, 6e3))
    }
}
const ct = new Map;

function ya(e) {
    const t = Je + e.file;
    if (ct.has(t)) return ct.get(t);
    const n = new Promise((a, o) => {
        const r = new Image;
        r.onload = () => {
            try {
                const s = r.naturalWidth,
                    i = r.naturalHeight,
                    f = document.createElement("canvas");
                f.width = s, f.height = i;
                const c = f.getContext("2d");
                c.drawImage(r, 0, 0);
                const p = c.getImageData(0, 0, s, i).data,
                    l = e.asset.alphaContentRectPx,
                    u = l.x + l.width / 2,
                    m = l.y + l.height / 2,
                    d = 360,
                    y = 3,
                    w = [];
                let x = 1e9,
                    M = 1e9,
                    C = -1e9,
                    b = -1e9;
                for (let T = 0; T < d; T++) {
                    const S = T / d * Math.PI * 2,
                        P = Math.cos(S),
                        R = Math.sin(S);
                    let E = 0;
                    for (; E < s; E++) {
                        const z = Math.round(u + P * E),
                            N = Math.round(m + R * E);
                        if (z < 0 || N < 0 || z >= s || N >= i || p[(N * s + z) * 4 + 3] > 40) break
                    }
                    const D = Math.max(0, E - y),
                        A = u + P * D,
                        k = m + R * D;
                    w.push([A, k]), A < x && (x = A), A > C && (C = A), k < M && (M = k), k > b && (b = k)
                }
                const _ = w.map(([T, S], P) => (P ? "L" : "M") + T.toFixed(1) + " " + S.toFixed(1)).join(" ") + " Z";
                a({
                    d: _,
                    bbox: {
                        x,
                        y: M,
                        width: C - x,
                        height: b - M
                    }
                })
            } catch (s) {
                o(s)
            }
        }, r.onerror = () => o(new Error("Không đọc được ảnh khung")), r.src = t
    });
    return ct.set(t, n), n
}
async function ba({
    root: e,
    layout: t,
    kind: n,
    flags: a,
    timers: o,
    reg: r,
    isCancelled: s,
    onStart: i,
    onHide: f,
    markDone: c
}) {
    const {
        reduced: p,
        skyBlue: l,
        hiddenLayers: u
    } = a, m = t.scene.referenceCanvas, d = t.layers.find(v => v.id === "window-frame");
    let y = null;
    try {
        y = await ya(d)
    } catch (v) {
        console.warn("Dùng đường cắt trong layout vì không suy được từ ảnh khung:", v)
    }
    if (s()) return;
    const w = n === "desktop";
    e.classList.toggle("desktop", w), e.style.backgroundColor = t.scene.backgroundColor || "#050a14";
    const x = F("svg", {
        class: "poster " + n,
        viewBox: m.viewBox,
        role: "img",
        "aria-label": "Thiệp Trung thu",
        preserveAspectRatio: w ? "xMidYMid slice" : "xMidYMid meet"
    }, e);
    let M = null,
        C = null,
        b = {
            x: 0,
            y: 0,
            width: m.width,
            height: m.height
        };
    const _ = () => {
        if (w) return;
        const v = Math.min(innerWidth / m.width, innerHeight / m.height),
            L = innerWidth / v,
            I = innerHeight / v;
        let le = (t.scene.portraitFocusY || m.height / 2) - I / 2;
        I >= m.height && (le = Math.max(m.height - I, Math.min(0, le))), b = {
            x: (m.width - L) / 2,
            y: le,
            width: L,
            height: I
        }, x.setAttribute("viewBox", `${b.x} ${b.y} ${L} ${I}`);
        const H = t.scene.moonHint;
        C && H && (C.setAttribute("x", b.x + L / 2), C.setAttribute("y", b.y + I - (H.screenBottomPx || 38) / v), C.setAttribute("font-size", (H.screenFontPx || 14) / v)), M && (M.setAttribute("x", b.x), M.setAttribute("y", b.y), M.setAttribute("width", b.width), M.setAttribute("height", b.height))
    };
    _(), window.addEventListener("resize", _), r(() => window.removeEventListener("resize", _));
    const T = F("defs", {}, x),
        S = F("clipPath", {
            id: "window-aperture",
            clipPathUnits: "userSpaceOnUse"
        }, T);
    let P;
    if (y) {
        const v = ve(d),
            L = v.width / d.asset.width,
            I = v.height / d.asset.height;
        S.setAttribute("transform", `translate(${v.x} ${v.y}) scale(${L} ${I})`), F("path", {
            d: y.d
        }, S), P = {
            x: v.x + y.bbox.x * L,
            y: v.y + y.bbox.y * I,
            width: y.bbox.width * L,
            height: y.bbox.height * I
        }
    } else {
        const L = F("path", {
            d: t.clipPaths["window-aperture"].d
        }, S).getBBox();
        P = {
            x: L.x,
            y: L.y,
            width: L.width,
            height: L.height
        }
    }
    const R = F("radialGradient", {
        id: "moon-halo-gradient"
    }, T);
    F("stop", {
        offset: "0%",
        "stop-color": "#fff6d6",
        "stop-opacity": "0.9"
    }, R), F("stop", {
        offset: "35%",
        "stop-color": "#ffe7a8",
        "stop-opacity": "0.45"
    }, R), F("stop", {
        offset: "70%",
        "stop-color": "#ffd98a",
        "stop-opacity": "0.12"
    }, R), F("stop", {
        offset: "100%",
        "stop-color": "#ffd98a",
        "stop-opacity": "0"
    }, R);
    const E = F("filter", {
        id: "moon-soft",
        x: "-50%",
        y: "-50%",
        width: "200%",
        height: "200%"
    }, T);
    F("feGaussianBlur", {
        stdDeviation: String(6 * m.width / 551)
    }, E);
    const D = F("radialGradient", {
        id: "dark-sky-gradient",
        cx: "32%",
        cy: "28%",
        r: "85%"
    }, T);
    F("stop", {
        offset: "0%",
        "stop-color": "#171326"
    }, D), F("stop", {
        offset: "45%",
        "stop-color": "#08070f"
    }, D), F("stop", {
        offset: "100%",
        "stop-color": "#000000"
    }, D);
    const A = [...t.layers].sort((v, L) => v.zIndex - L.zIndex),
        k = A.find(v => v.id === "full-moon"),
        z = k.placement.targetContentBoxPx,
        N = {
            cx: z.x + z.width / 2,
            cy: z.y + z.height / 2,
            r: Math.min(z.width, z.height) / 2
        },
        he = k.interactive && k.interactive.hitSlopPx || 14,
        ge = k.interactive && k.interactive.holdDurationMs || 1500,
        V = P,
        K = {
            cx: V.x + V.width / 2,
            cy: V.y + V.height / 2,
            w: V.width,
            h: V.height
        },
        G = {},
        j = F("g", {
            id: "window-group"
        }),
        U = F("g", {
            "clip-path": "url(#window-aperture)"
        }, j);
    let X = !1;
    for (const v of A) {
        if (u.has(v.id)) continue;
        if (v.group === "particles") {
            const I = F("g", {
                id: "g-" + v.id
            }, x);
            G[v.id] = I, ga(v, I, t, {
                reduced: p,
                timers: o
            });
            continue
        }
        const L = F("g", {
            id: "g-" + v.id
        });
        if (!w && v.placement.mode === "box" && v.zIndex === 0) {
            M = F("image", {
                href: Je + v.file,
                x: b.x,
                y: b.y,
                width: b.width,
                height: b.height,
                preserveAspectRatio: "xMidYMid slice"
            }), L.appendChild(M), G[v.id] = L, x.appendChild(L);
            continue
        }
        if (v.id === "night-sky" && !l) {
            const I = ve(v);
            F("rect", {
                x: I.x - I.width,
                y: I.y - I.height,
                width: I.width * 3,
                height: I.height * 3,
                fill: "url(#dark-sky-gradient)"
            }, L)
        } else L.appendChild(wt(v, ve(v)));
        if (G[v.id] = L, v.group === "window-content") {
            U.appendChild(L);
            continue
        }
        if (v.id === "window-frame") {
            j.appendChild(L), x.appendChild(j), X = !0;
            continue
        }
        x.appendChild(L), Yt(L, v, p)
    }
    for (const v of A) v.group === "window-content" && G[v.id] && Yt(G[v.id], v, p);
    X || x.appendChild(j);
    const W = Math.max(m.width, m.height) * 4,
        q = F("rect", {
            id: "intro-dim",
            x: -W,
            y: -W,
            width: W * 2 + m.width,
            height: W * 2 + m.height,
            fill: "#1a0208",
            opacity: "0",
            "pointer-events": "none"
        }, x),
        Y = F("g", {
            id: "moon-ui"
        }, x),
        Z = F("circle", {
            class: "moon-hit",
            cx: N.cx,
            cy: N.cy,
            r: N.r + he,
            tabindex: "0",
            role: "button",
            "aria-label": k.interactive && k.interactive.ariaLabel || "Ấn và giữ mặt trăng để mở thiệp"
        }, Y),
        J = F("circle", {
            class: "moon-halo",
            cx: N.cx,
            cy: N.cy,
            r: N.r * 1.9,
            filter: "url(#moon-soft)",
            "pointer-events": "none"
        }, Y);
    J.style.transformOrigin = `${N.cx}px ${N.cy}px`, p || J.animate([{
        opacity: .32,
        transform: "scale(1)"
    }, {
        opacity: .55,
        transform: "scale(1.06)"
    }], {
        duration: 3200,
        iterations: 1 / 0,
        direction: "alternate",
        easing: "ease-in-out"
    });
    const Ne = F("g", {
        "clip-path": "url(#window-aperture)",
        opacity: "0",
        "pointer-events": "none"
    }, Y);
    Ne.appendChild(wt(k, ve(k))), Ne.style.transformOrigin = `${N.cx}px ${N.cy}px`;
    const It = G["full-moon"];
    It.style.transformOrigin = `${N.cx}px ${N.cy}px`;
    const ce = t.scene.moonHint;
    let De = null;
    ce && ce.text && (De = F("g", {
            class: "moon-hint",
            "pointer-events": "none"
        }, Y), C = F("text", {
            x: ce.centerX != null ? ce.centerX : N.cx,
            y: ce.baselineY != null ? ce.baselineY : 0,
            "font-size": ce.fontSizePx != null ? ce.fontSizePx : 16,
            "text-anchor": "middle"
        }, De), C.textContent = ce.text, p || C.animate([{
            opacity: .62
        }, {
            opacity: 1
        }], {
            duration: 2200,
            iterations: 1 / 0,
            direction: "alternate",
            easing: "ease-in-out"
        }), _()),
        function() {
            if (p) return;
            const L = m.height / 100,
                I = "cubic-bezier(.2,.75,.25,1)",
                ee = (H, se, ie, Oe, ue) => {
                    if (!H || !H.parentNode) return;
                    const je = F("g", {
                        class: "intro-enter"
                    });
                    H.parentNode.insertBefore(je, H), je.appendChild(H), je.animate([{
                        opacity: 0,
                        transform: `translate(${se}px, ${ie}px)`
                    }, {
                        opacity: 1,
                        transform: "translate(0px, 0px)"
                    }], {
                        duration: ue,
                        delay: Oe,
                        easing: I,
                        fill: "backwards"
                    })
                },
                le = A.find(H => H.zIndex === 0);
            le && ee(G[le.id], 0, 0, 0, 850), ee(j, 0, -2.2 * L, 120, 950);
            for (const H of A) {
                const se = G[H.id];
                if (!se || H.zIndex === 0 || H.id === "window-frame" || H.group === "window-content") continue;
                const ie = H.id;
                ie.startsWith("lantern") ? ee(se, 0, 5.5 * L, 430, 1050) : ie.startsWith("cloud") ? ee(se, (ie.includes("left") ? -4 : 4) * L, 0, 330, 1050) : ie.includes("branch") ? ee(se, 0, 4.5 * L, 520, 1050) : ie === "jade-rabbit" ? ee(se, 0, 2.8 * L, 700, 950) : H.group === "particles" ? ee(se, 0, 0, 950, 800) : ee(se, 0, 0, 500, 900)
            }
            ee(Y, 0, 0, 1020, 850)
        }();
    let de = !1,
        Ce = !1,
        ne = 0,
        Ft = 0,
        we = 0;
    const Dn = () => {
            ne > 0 ? (J.getAnimations().forEach(v => v.cancel()), J.style.opacity = String(.4 + .6 * ne), J.style.transform = `scale(${1+.9*ne})`) : (J.style.opacity = "", J.style.transform = ""), q.setAttribute("opacity", String(.6 * ne)), Ne.setAttribute("opacity", String(ne)), Z.style.transform = It.style.transform = Ne.style.transform = `scale(${1+.06*ne})`, De && De.setAttribute("opacity", String(1 - ne))
        },
        tt = v => {
            if (!Ce) {
                if (ne = de ? Math.min(1, (v - Ft) / ge) : Math.max(0, ne - .04), Dn(), de && ne >= 1) return On();
                (de || ne > 0) && (we = requestAnimationFrame(tt))
            }
        },
        nt = v => {
            Ce || de || (v && v.preventDefault && v.preventDefault(), de = !0, Ft = performance.now() - ne * ge, e.classList.add("holding"), cancelAnimationFrame(we), we = requestAnimationFrame(tt))
        },
        ye = () => {
            Ce || !de || (de = !1, e.classList.remove("holding"), cancelAnimationFrame(we), we = requestAnimationFrame(tt))
        },
        _t = v => v.preventDefault(),
        zt = v => {
            (v.code === "Space" || v.code === "Enter") && !v.repeat && nt(v)
        },
        Nt = v => {
            (v.code === "Space" || v.code === "Enter") && ye()
        };
    Z.addEventListener("pointerdown", nt), window.addEventListener("pointerup", ye), window.addEventListener("pointercancel", ye), window.addEventListener("blur", ye), Z.addEventListener("contextmenu", _t), Z.addEventListener("keydown", zt), Z.addEventListener("keyup", Nt), r(() => {
        Ce = !0, cancelAnimationFrame(we), window.removeEventListener("pointerup", ye), window.removeEventListener("pointercancel", ye), window.removeEventListener("blur", ye), Z.removeEventListener("pointerdown", nt), Z.removeEventListener("contextmenu", _t), Z.removeEventListener("keydown", zt), Z.removeEventListener("keyup", Nt)
    });

    function On() {
        Ce = !0, de = !1, c(), e.classList.remove("holding"), e.classList.add("done"), Y.animate([{
            opacity: 1
        }, {
            opacity: 0
        }], {
            duration: 500,
            fill: "forwards"
        }), q.animate([{
            opacity: .6
        }, {
            opacity: 0
        }], {
            duration: 700,
            fill: "forwards"
        });
        const v = "cubic-bezier(.4,0,.2,1)",
            L = m.width / 551,
            I = (ue, je, $n, Bn) => {
                const at = G[ue];
                at && (at.getAnimations().forEach(Vn => Vn.cancel()), at.animate([{
                    transform: "translateY(0px)",
                    opacity: 1
                }, {
                    transform: `translateY(${je*L}px)`,
                    opacity: 0
                }], {
                    duration: $n,
                    delay: Bn,
                    easing: v,
                    fill: "forwards"
                }))
            };
        I("lantern-large-over-frame", -260, 1500, 0), I("lantern-medium-center", -220, 1400, 80), I("lantern-medium", -220, 1400, 80), I("lantern-small-right", -180, 1300, 160), I("lantern-distant", -140, 1200, 220), I("osmanthus-branch", 120, 1100, 0), I("osmanthus-branch-desktop", 120, 1100, 0), I("jade-rabbit", 120, 1100, 0);
        for (const ue of ["cloud-left", "cloud-right", "cloud-left-desktop", "cloud-right-desktop"]) I(ue, 0, 700, 0);
        for (const ue of A) ue.group === "particles" && G[ue.id] && G[ue.id].animate([{
            opacity: 1
        }, {
            opacity: 0
        }], {
            duration: 600,
            fill: "forwards"
        });
        const ee = G["red-background"] || G["desktop-background"];
        ee && ee.animate([{
            opacity: 1
        }, {
            opacity: 0
        }], {
            duration: 900,
            delay: 700,
            fill: "forwards"
        }), e.animate([{
            backgroundColor: e.style.backgroundColor
        }, {
            backgroundColor: "#000"
        }], {
            duration: 1200,
            delay: 500,
            fill: "forwards"
        }), e.animate([{
            opacity: 1
        }, {
            opacity: 1,
            offset: .42
        }, {
            opacity: 0
        }], {
            duration: 3e3,
            easing: "linear",
            fill: "forwards"
        });
        const le = x.getScreenCTM(),
            H = le.a,
            se = Math.max(innerWidth / (K.w * H), innerHeight / (K.h * H)) * 1.25,
            ie = x.createSVGPoint();
        ie.x = innerWidth / 2, ie.y = innerHeight / 2;
        const Oe = ie.matrixTransform(le.inverse());
        j.style.transformOrigin = `${K.cx}px ${K.cy}px`, j.animate([{
            transform: "translate(0px, 0px) scale(1)"
        }, {
            transform: `translate(${Oe.x-K.cx}px, ${Oe.y-K.cy}px) scale(${se})`
        }], {
            duration: 2e3,
            delay: 350,
            easing: "cubic-bezier(.55,0,.3,1)",
            fill: "forwards"
        }), G["window-frame"].animate([{
            opacity: 1
        }, {
            opacity: 0
        }], {
            duration: 900,
            delay: 900,
            fill: "forwards"
        }), U.animate([{
            opacity: 1
        }, {
            opacity: 1,
            offset: .55
        }, {
            opacity: 0
        }], {
            duration: 2e3,
            delay: 900,
            fill: "forwards"
        }), o.after(i, 1e3), o.after(f, 3100)
    }
}

function wa({
    rootRef: e,
    enabled: t,
    onStart: n,
    onHide: a
}) {
    const o = h.useMemo(() => {
            const u = new URLSearchParams(location.search);
            return {
                force: u.get("layout"),
                skyBlue: u.get("sky") === "blue",
                hiddenLayers: new Set(u.get("mountains") === "1" ? [] : ["mountains"]),
                reduced: bn()
            }
        }, []),
        r = h.useMemo(() => window.matchMedia("(min-width: 900px) and (min-aspect-ratio: 4/3)"), []),
        s = () => o.force === "desktop" ? "desktop" : o.force === "mobile" ? "mobile" : r.matches ? "desktop" : "mobile",
        [i, f] = h.useState(s),
        c = h.useRef(!1),
        p = h.useRef(n),
        l = h.useRef(a);
    p.current = n, l.current = a, h.useEffect(() => {
        if (o.force) return;
        const u = () => {
            c.current || f(s())
        };
        return r.addEventListener("change", u), () => r.removeEventListener("change", u)
    }, [r, o.force]), h.useEffect(() => {
        const u = e.current;
        if (!t || !u) return;
        let m = !1;
        const d = () => m,
            y = pa(),
            w = [],
            x = b => w.push(b),
            M = new AbortController;
        return fetch(Je + (i === "desktop" ? "layout.desktop.json" : "layout.json"), {
            signal: M.signal
        }).then(b => b.json()).then(b => {
            if (!m) return ba({
                root: u,
                layout: b,
                kind: i,
                flags: o,
                timers: y,
                reg: x,
                isCancelled: d,
                onStart: () => p.current && p.current(),
                onHide: () => l.current && l.current(),
                markDone: () => {
                    c.current = !0
                }
            })
        }).catch(b => {
            m || b.name === "AbortError" || (console.error("Không dựng được màn mở đầu:", b), c.current = !0, p.current && p.current(), l.current && l.current())
        }), () => {
            m = !0, M.abort(), y.clear();
            for (const b of w) try {
                b()
            } catch {}
            u.getAnimations && u.getAnimations().forEach(b => b.cancel()), u.replaceChildren(), u.classList.remove("desktop", "holding", "done"), u.style.backgroundColor = "", u.style.opacity = ""
        }
    }, [i, t])
}

function xa({
    onStart: e,
    skip: t = !1
}) {
    const n = h.useRef(null),
        [a, o] = h.useState(!0),
        r = h.useRef(!1),
        s = h.useRef(e);
    s.current = e;
    const i = h.useCallback(() => {
            r.current || (r.current = !0, s.current && s.current())
        }, []),
        f = h.useCallback(() => o(!1), []),
        [c] = h.useState(() => t || new URLSearchParams(location.search).get("autostart") === "1");
    return h.useEffect(() => {
        c && (i(), o(!1))
    }, [c, i]), wa({
        rootRef: n,
        enabled: a && !c,
        onStart: i,
        onHide: f
    }), !a || c ? null : g.jsx("div", {
        className: "intro",
        ref: n
    })
}
const jt = {
        paragraphs: ["Gửi bạn,", "Trung thu năm nay lại về rồi 🌕 Ngoài kia đèn lồng đã treo kín phố, mùi bánh nướng thơm len qua từng con ngõ nhỏ.","Chúc bạn một mùa Trung thu thật bình yên ✨ Mong những điều dịu dàng nhất luôn tìm được đường đến với bạn."]
    },
    Be = {
        speedMs: 42,
        minSpeedMs: 28,
        maxTotalMs: 22e3
    },
    lt = "./assets/nguyet-thu",
    va = 620,
    Ma = 300;

function Ta(e) {
    try {
        if (typeof Intl < "u" && Intl.Segmenter) return Array.from(new Intl.Segmenter("vi", {
            granularity: "grapheme"
        }).segment(e), t => t.segment)
    } catch {}
    return Array.from(e)
}

function Mn(e) {
    const t = ((e == null ? void 0 : e.text) ?? jt.paragraphs.join(`
`)).replace(/\r\n?/g, `
`).trim(),
        n = Ta(t),
        a = n.length ? Math.max(Be.minSpeedMs, Math.min(Be.speedMs, Be.maxTotalMs / n.length)) : Be.speedMs;
    return {
        fullText: t,
        graphemes: n,
        msPerChar: a
    }
}
const Tn = Mn({
        text: jt.paragraphs.join(`
`)
    }),
    Wt = /https?:\/\/[^\s<>"']+/g;

function Sa(e, t) {
    e.textContent = "";
    let n = 0,
        a;
    for (Wt.lastIndex = 0;
        (a = Wt.exec(t)) !== null;) {
        let o = a[0],
            r = "";
        const s = o.match(/[.,;:!?)\]]+$/);
        if (s && (r = s[0], o = o.slice(0, -r.length)), !o) continue;
        a.index > n && e.appendChild(document.createTextNode(t.slice(n, a.index)));
        const i = document.createElement("a");
        i.href = o, i.textContent = o, i.target = "_blank", i.rel = "noopener noreferrer", e.appendChild(i), r && e.appendChild(document.createTextNode(r)), n = a.index + a[0].length
    }
    n < t.length && e.appendChild(document.createTextNode(t.slice(n)))
}

function Aa({
    active: e,
    runId: t,
    typedRef: n,
    cursorRef: a,
    boxRef: o,
    onDone: r,
    noiDung: s
}) {
    const i = h.useRef(null);
    return h.useEffect(() => {
        let f = !1;
        if (!e) return;
        const {
            fullText: c,
            graphemes: p,
            msPerChar: l
        } = s || Tn, u = n.current, m = a.current, d = o.current;
        if (!u || !d) return;
        let y = null,
            w = 0,
            x = 0,
            M = 0,
            C = 0;

        function b() {
            u.textContent = "", y = document.createTextNode(""), u.appendChild(y), w = 0, d.scrollTop = 0, m && (m.hidden = !1)
        }

        function _(E) {
            !y || E <= w || (y.appendData(p.slice(w, E).join("")), w = E, d.scrollTop = 1e9)
        }

        function T(E) {
            if (_(p.length), Sa(u, c), y = null, m && (m.hidden = !0), f || (f = !0, r == null || r()), !E) {
                d.scrollTop = 0;
                return
            }
            d.scrollTop = 1e9, M = requestAnimationFrame(() => {
                M = 0, d.scrollTop = d.scrollHeight
            })
        }

        function S() {
            x && (cancelAnimationFrame(x), x = 0), C && (clearTimeout(C), C = 0)
        }

        function P() {
            S(), !(!y && w >= p.length) && T(!1)
        }

        function R() {
            const E = performance.now(),
                D = () => {
                    x = 0;
                    const A = Math.min(p.length, Math.floor((performance.now() - E) / l));
                    if (_(A), w >= p.length) {
                        T(!0);
                        return
                    }
                    x = requestAnimationFrame(D)
                };
            x = requestAnimationFrame(D)
        }
        return i.current = P, b(), C = setTimeout(() => {
            C = 0, R()
        }, va), () => {
            S(), M && (cancelAnimationFrame(M), M = 0), i.current = null
        }
    }, [e, t, n, a, o, r, s]), h.useCallback(() => {
        i.current && i.current()
    }, [])
}

function ka({
    open: e,
    onClose: t,
    onOpenHeart: n,
    showHeart: a = !0,
    noiDung: o = Tn
}) {
    const [r, s] = h.useState(!1), [i, f] = h.useState(!1), [c, p] = h.useState(0), l = h.useRef(!1), u = h.useRef(null), m = h.useRef(null), d = h.useRef(null), y = h.useRef(null), w = h.useRef(null), [x, M] = h.useState(!1), C = h.useRef(null), b = r && !i && x, [_, T] = h.useState(!1), S = h.useCallback(() => T(!0), []), P = Aa({
        active: b,
        runId: c,
        typedRef: d,
        cursorRef: y,
        boxRef: m,
        onDone: S,
        noiDung: o
    });
    h.useEffect(() => {
        if (e) {
            l.current = !0, u.current = document.activeElement, s(!0), f(!1), p(k => k + 1), T(!1), M(!1);
            return
        }
        if (!l.current) return;
        f(!0);
        const A = setTimeout(() => {
            s(!1), f(!1)
        }, Ma);
        return () => clearTimeout(A)
    }, [e]), h.useEffect(() => {
        if (r) return;
        const A = u.current;
        A && typeof A.focus == "function" && A.focus(), u.current = null
    }, [r]), h.useEffect(() => {
        b && w.current && w.current.focus()
    }, [b, c]), h.useEffect(() => {
        if (!b) return;
        const A = k => {
            k.key === "Escape" && t()
        };
        return window.addEventListener("keydown", A), () => window.removeEventListener("keydown", A)
    }, [b, t]), h.useEffect(() => {
        if (!r || x) return;
        const A = C.current;
        if (!A) return;
        const k = () => M(!0);
        if (A.complete && A.naturalWidth > 0) {
            k();
            return
        }
        A.addEventListener("load", k), A.addEventListener("error", k);
        const z = setTimeout(k, 6e3);
        return () => {
            A.removeEventListener("load", k), A.removeEventListener("error", k), clearTimeout(z)
        }
    }, [r, x, c]);
    const R = h.useCallback(A => {
            A.target === A.currentTarget && t()
        }, [t]),
        E = h.useCallback(A => {
            A.target.closest(".nt-close") || A.target.closest(".nt-toheart") || A.target.closest("a") || P()
        }, [P]),
        D = h.useCallback(() => {
            t(), n == null || n()
        }, [t, n]);
    return r ? g.jsx("div", {
        className: i ? "nt-backdrop nt-closing" : "nt-backdrop",
        onMouseDown: R,
        children: g.jsxs("section", {
            className: x ? "nt-dialog nt-san" : "nt-dialog",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Lá thư",
            onClick: E,
            children: [g.jsxs("picture", {
                className: "nt-sheet",
                "aria-hidden": "true",
                children: [g.jsx("source", {
                    media: "(max-width: 767px)",
                    srcSet: `${lt}/paper-straight.webp`
                }), g.jsx("img", {
                    ref: C,
                    src: `${lt}/paper.webp`,
                    alt: ""
                })]
            }), g.jsx("button", {
                ref: w,
                className: "nt-close",
                type: "button",
                "aria-label": "Đóng lá thư",
                onClick: t,
                children: g.jsx("svg", {
                    viewBox: "0 0 24 24",
                    "aria-hidden": "true",
                    focusable: "false",
                    children: g.jsx("path", {
                        d: "M8.4 8.4 15.6 15.6M15.6 8.4 8.4 15.6"
                    })
                })
            }), g.jsx("div", {
                className: "nt-letter",
                ref: m,
                "aria-live": "polite",
                children: g.jsx("div", {
                    className: "nt-letter-inner",
                    children: g.jsxs("p", {
                        className: "nt-copy",
                        children: [g.jsx("span", {
                            className: "nt-typed",
                            ref: d
                        }), g.jsx("b", {
                            className: "nt-cursor",
                            ref: y,
                            "aria-hidden": "true"
                        })]
                    })
                })
            }), g.jsx("img", {
                className: "nt-rabbit",
                src: `${lt}/rabbit-cloud.webp`,
                alt: "Thỏ ngọc trên mây"
            }), a && _ ? g.jsx("button", {
                type: "button",
                className: "nt-toheart",
                onClick: D,
                title: "Mở trái tim",
                "aria-label": "Mở trái tim",
                children: g.jsx("img", {
                    src: "./assets/ui/btn-heart.webp",
                    alt: "",
                    draggable: !1
                })
            }) : null]
        })
    }, c) : null
}
const Qe = {
    started: O.autostart
};

function Ca() {
    Qe.started = !0
}
const xt = new re(me.hong.a),
    vt = new re(me.hong.b);

function Sn(e) {
    const t = me[e] || me.hong;
    xt.set(t.a), vt.set(t.b)
}
let qe = "hong";

function ja(e) {
    qe = me[e] ? e : "hong", Sn(qe)
}

function Pa(e) {
    qe = me[e] ? e : "hong", Sn(qe)
}
try {
    localStorage.removeItem(Hn)
} catch {}
const Me = {
    open: !1,
    since: 0
};

function Kt(e) {
    Me.open = !!e, Me.since = performance.now()
}

function Ra() {
    if (!Me.open && !Me.since) return 1;
    const e = Math.min(1, (performance.now() - Me.since) / 1e3 / Gn),
        t = e * e * (3 - 2 * e);
    return Me.open ? 1 - (1 - ot) * t : ot + (1 - ot) * t
}
const Ie = {
    startedAt: -1
};

function La() {
    return Ie.startedAt >= 0 ? !1 : (Ie.startedAt = performance.now(), !0)
}

function Ea() {
    Ie.startedAt = -1
}

function An() {
    return Ie.startedAt < 0 ? 0 : Math.min(1, (performance.now() - Ie.startedAt) / 1e3 / O.flySecs)
}
const Ze = e => Math.min(Number.isFinite(e) && e > 0 ? e : 1 / 60, 1 / 30),
    Mt = e => e < 0 ? 0 : e > 1 ? 1 : e,
    kn = e => {
        const t = Mt(e);
        return t * t * (3 - 2 * t)
    };

function Ia(e, t, n) {
    let a = e + rt * t * n;
    return (rt > 0 ? a > Se : a < pe) && (a = rt > 0 ? pe : Se), a
}

function ut(e) {
    const t = Mt((e - pe) / (Un - pe)),
        n = Mt((Se - e) / (Se - Xn));
    return kn(t * n)
}
const ft = (e, t, n) => Math.sin(e * .55 + n) * t,
    Pt = () => pe + Math.random() * (Se - pe);

function Fa({
    onDone: e
}) {
    const t = Ae(a => a.camera),
        n = h.useRef({
            t: 0,
            done: !1,
            from: new B(...Wn),
            to: new B(...Yn)
        });
    return h.useEffect(() => {
        n.current.done || t.position.copy(n.current.from)
    }, [t]), ke((a, o) => {
        const r = n.current;
        if (r.done) return;
        if (!Qe.started) {
            t.position.copy(r.from);
            return
        }
        r.t += Ze(o);
        const s = Math.min(1, r.t / qn),
            i = 1 - Math.pow(1 - s, 3);
        t.position.lerpVectors(r.from, r.to, i), s >= 1 && (r.done = !0, e == null || e())
    }, -2), null
}

function _a({
    onDone: e
}) {
    const t = Ae(a => a.camera),
        n = h.useRef({
            done: !1,
            from: null,
            to: new B(...Kn),
            lookFrom: new B(0, 0, 0),
            lookTo: new B(...Xe),
            look: new B
        });
    return ke(() => {
        const a = n.current;
        if (a.done) return;
        a.from || (a.from = t.position.clone());
        const o = An(),
            r = o * o * o * (o * (o * 6 - 15) + 10);
        t.position.lerpVectors(a.from, a.to, r), a.look.lerpVectors(a.lookFrom, a.lookTo, r), t.lookAt(a.look), o >= 1 && (a.done = !0, t.position.copy(a.to), t.lookAt(a.lookTo), e == null || e())
    }, -2), null
}
const qt = 12,
    za = 7,
    Na = 26,
    Zt = .55,
    Jt = .12,
    Qt = e => e * 180 / Math.PI,
    en = (e, t) => t * Math.tanh(e / t);

function Da({
    imgRef: e,
    active: t
}) {
    const n = Ae(i => i.camera),
        a = h.useMemo(() => new B(...Xe), []),
        o = h.useMemo(() => new B, []),
        r = h.useRef(null),
        s = h.useRef({
            yaw: 0,
            pitch: 0
        });
    return ke(() => {
        const i = e == null ? void 0 : e.current;
        if (!i) return;
        if (!t) {
            r.current && (r.current = null, i.style.transform = "");
            return
        }
        o.subVectors(n.position, a);
        const f = o.length() || 1,
            c = Math.atan2(o.x, o.z),
            p = Math.asin(Ee.clamp(o.y / f, -1, 1));
        r.current || (r.current = {
            az: c,
            el: p
        });
        let l = c - r.current.az;
        for (; l > Math.PI;) l -= Math.PI * 2;
        for (; l < -Math.PI;) l += Math.PI * 2;
        const u = p - r.current.el,
            m = en(-Qt(l) * Zt, qt),
            d = en(Qt(u) * Zt, za);
        s.current.yaw += (m - s.current.yaw) * Jt, s.current.pitch += (d - s.current.pitch) * Jt;
        const y = s.current.yaw / qt * Na;
        i.style.transform = `translateX(${y.toFixed(2)}px) rotateY(${s.current.yaw.toFixed(2)}deg) rotateX(${s.current.pitch.toFixed(2)}deg)`
    }), null
}
const Fe = {
    seed: 20260915,
    shape: {
        width: 21,
        aspect: 1.25,
        thicknessRatio: .32,
        notch: .15,
        lobe: .72
    },
    particles: {
        countDesktop: 22e3,
        countMobile: 1e4,
        innerRatio: .02,
        baseSize: .36,
        sizeJitter: .5,
        sparkRatio: .015,
        sparkSize: 1.8,
        maxPixelSize: 9,
        opacity: 1,
        gain: 1.7,
        densityNoise: {
            freq: .18,
            min: .55
        },
        brightJitter: .18
    },
    colors: {
        champagne: "#FFD58A",
        amber: "#FFB454",
        coral: "#FF756D",
        warmRed: "#D94B58",
        rim: "#FFE7B0",
        hueJitter: .025,
        coralBoost: 1.32
    },
    lighting: {
        keyDir: [-.6, .72, .45],
        fillDir: [.75, -.1, .55],
        ambient: .42,
        key: .7,
        fill: .22,
        backDim: .3,
        rim: .35,
        rimPower: 3,
        innerDim: .4
    },
    motion: {
        breathAmp: .015,
        breathSpeed: 1.25,
        wobbleAmp: .05,
        twinkleSpeed: 2.6,
        swayDeg: 8,
        swaySpeed: .18
    },
    orbit: {
        radiusX: .92,
        radiusZ: .4,
        tiltDeg: 26,
        rollDeg: -6,
        dustCount: {
            desktop: 3200,
            mobile: 1600
        },
        dustSize: .46,
        dustColor: "#FFD98A",
        dustOpacity: .8,
        sparkRatio: .03,
        speed: .09,
        thickness: .09,
        radialSpread: .16,
        yOffset: -.36
    }
};

function Cn(e) {
    let t = e >>> 0;
    return function() {
        t = t + 1831565813 >>> 0;
        let n = t;
        return n = Math.imul(n ^ n >>> 15, n | 1), n ^= n + Math.imul(n ^ n >>> 7, n | 61), ((n ^ n >>> 14) >>> 0) / 4294967296
    }
}

function jn() {
    const t = new URLSearchParams(location.search).get("quality");
    if (t === "low" || t === "high") return t === "low" ? "mobile" : "desktop";
    const n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        a = Math.min(innerWidth, innerHeight) < 700,
        o = (navigator.hardwareConcurrency || 8) <= 4;
    return n || a || o ? "mobile" : "desktop"
}

function Oa(e) {
    const t = (a, o, r) => {
            let s = Math.imul(a, 374761393) + Math.imul(o, 668265263) + Math.imul(r, 1274126177) + Math.imul(e | 0, 97) | 0;
            return s = Math.imul(s ^ s >>> 13, 1103515245), s = (s ^ s >>> 16) >>> 0, s / 4294967296
        },
        n = a => a * a * (3 - 2 * a);
    return (a, o, r) => {
        const s = Math.floor(a),
            i = Math.floor(o),
            f = Math.floor(r),
            c = n(a - s),
            p = n(o - i),
            l = n(r - f);
        let u = 0;
        for (let m = 0; m <= 1; m++)
            for (let d = 0; d <= 1; d++)
                for (let y = 0; y <= 1; y++) u += (y ? c : 1 - c) * (d ? p : 1 - p) * (m ? l : 1 - l) * t(s + y, i + d, f + m);
        return u
    }
}

function $a(e, t, n, a = .22, o = 1) {
    if (a > 0 && n > 0) {
        const i = Math.min(1, n / .7);
        n += a * Math.exp(-(e * e) / (.42 * .42)) * i * i
    }
    const r = e * e + 2.25 * t * t + n * n - 1;
    return r * r * r - o * (e * e + .1125 * t * t) * n * n * n
}

function* Ba(e, t = Fe) {
    const n = t.shape,
        a = t.particles,
        o = Cn(t.seed),
        r = n.notch ?? .22,
        s = n.lobe ?? 1,
        i = Oa(t.seed),
        f = a.densityNoise || {
            freq: 0,
            min: 1
        },
        c = 1.3,
        p = -1.15,
        l = 1.3,
        u = .75,
        m = .001,
        d = .035,
        y = (j, U, X) => $a(j, U, X, r, s),
        w = new B,
        x = (j, U, X, W) => (w.set((y(j + m, U, X) - W) / m, (y(j, U + m, X) - W) / m, (y(j, U, X + m) - W) / m), w),
        M = Math.round(e * a.innerRatio),
        C = e - M,
        b = new Float32Array(e * 3),
        _ = new Float32Array(e * 3),
        T = new Float32Array(e);
    let S = 0,
        P = 0;
    for (; S < C && P < C * 400;) {
        P++, P & 255 || (yield);
        let j = (o() * 2 - 1) * c,
            U = (o() * 2 - 1) * u,
            X = p + o() * (l - p),
            W = y(j, U, X),
            q = x(j, U, X, W),
            Y = q.length() + 1e-6;
        if (!(Math.abs(W / Y) > d)) {
            for (let Z = 0; Z < 3; Z++) {
                const J = W / (Y * Y);
                j -= J * q.x, U -= J * q.y, X -= J * q.z, W = y(j, U, X), q = x(j, U, X, W), Y = q.length() + 1e-6
            }
            if (!(Math.abs(W / Y) > .005)) {
                if (f.freq > 0) {
                    const Z = i(j * f.freq * 10 + 7.1, X * f.freq * 10 + 3.3, U * f.freq * 10 + 5.7);
                    if (o() > f.min + (1 - f.min) * Z) continue
                }
                b.set([j, X, U], S * 3), _.set([q.x / Y, q.z / Y, q.y / Y], S * 3), S++
            }
        }
    }
    const R = S;
    let E = 0;
    for (P = 0; E < M && P < M * 400;) {
        P++, P & 255 || (yield);
        const j = (o() * 2 - 1) * c,
            U = (o() * 2 - 1) * u,
            X = p + o() * (l - p),
            W = y(j, U, X);
        if (W >= 0) continue;
        const q = x(j, U, X, W),
            Y = q.length() + 1e-6;
        if (W / Y > -.05) continue;
        const J = R + E;
        b.set([j, X, U], J * 3), _.set([q.x / Y, q.z / Y, q.y / Y], J * 3), T[J] = 1, E++
    }
    const D = R + E,
        A = new Vt,
        k = new B;
    for (let j = 0; j < R; j++) A.expandByPoint(k.fromArray(b, j * 3));
    const z = new B,
        N = new B;
    A.getSize(z), A.getCenter(N);
    const he = n.width / z.x,
        ge = n.width / n.aspect / z.y,
        V = n.width * n.thicknessRatio / z.z,
        K = new B;
    for (let j = 0; j < D; j++) b[j * 3] = (b[j * 3] - N.x) * he, b[j * 3 + 1] = (b[j * 3 + 1] - N.y) * ge, b[j * 3 + 2] = (b[j * 3 + 2] - N.z) * V, K.fromArray(_, j * 3), K.set(K.x / he, K.y / ge, K.z / V).normalize(), _.set([K.x, K.y, K.z], j * 3);
    const G = new Vt(new B(-n.width / 2, -(n.width / n.aspect) / 2, -(n.width * n.thicknessRatio) / 2), new B(n.width / 2, n.width / n.aspect / 2, n.width * n.thicknessRatio / 2));
    return {
        count: D,
        positions: b.subarray(0, D * 3),
        normals: _.subarray(0, D * 3),
        inner: T.subarray(0, D),
        rng: o,
        box: G
    }
}
const Va = `
  attribute float aSize;
  attribute float aPhase;
  attribute float aSpark;
  attribute float aInner;
  attribute vec3 aColor;
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uSizeScale;
  uniform float uMaxSize;
  uniform float uBreathAmp;
  uniform float uBreathSpeed;
  uniform float uWobble;
  uniform float uPulse;
  varying vec3 vColor;
  varying vec3 vNormalV;
  varying vec3 vViewDir;
  varying float vSpark;
  varying float vPhase;
  varying float vInner;
  void main() {
    float breath = 1.0 + uBreathAmp * sin(uTime * uBreathSpeed) + uPulse;
    vec3 p = position * breath;
    p += normal * (uWobble * sin(uTime * 1.7 + aPhase * 6.2831));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    float sizePx = aSize * uSizeScale * uPixelRatio * (320.0 / -mv.z);
    gl_PointSize = clamp(sizePx, 1.2, uMaxSize * uPixelRatio);
    vColor = aColor;
    vNormalV = normalize(normalMatrix * normal);
    vViewDir = normalize(-mv.xyz);
    vSpark = aSpark;
    vPhase = aPhase;
    vInner = aInner;
  }
`,
    Ha = `
  uniform float uTime;
  uniform vec3 uLightDir;
  uniform vec3 uFillDir;
  uniform float uAmbient;
  uniform float uKey;
  uniform float uFill;
  uniform float uBackDim;
  uniform float uRim;
  uniform float uRimPower;
  uniform vec3 uRimColor;
  uniform float uInnerDim;
  uniform float uOpacity;
  uniform float uGain;
  uniform float uTwinkleSpeed;
  uniform float uPulse;
  varying vec3 vColor;
  varying vec3 vNormalV;
  varying vec3 vViewDir;
  varying float vSpark;
  varying float vPhase;
  varying float vInner;
  void main() {
    vec2 uv = gl_PointCoord * 2.0 - 1.0;
    float d2 = dot(uv, uv);
    if (d2 > 1.0) discard;
    float r = sqrt(d2);
    float core = exp(-d2 * 10.0);
    float halo = pow(1.0 - r, 3.0);
    float shapeA = core * 0.9 + halo * 0.3;

    vec3 N = normalize(vNormalV);
    vec3 L = normalize(uLightDir);
    vec3 V = normalize(vViewDir);
    float ndl = dot(N, L);
    float wrap = clamp((ndl + 0.4) / 1.4, 0.0, 1.0);
    float fill = clamp(dot(N, normalize(uFillDir)), 0.0, 1.0);
    float diffuse = uAmbient + uKey * wrap + uFill * fill;
    float facing = dot(N, V);
    float back = mix(uBackDim, 1.0, smoothstep(-0.5, 0.3, facing));
    float fres = pow(1.0 - clamp(facing, 0.0, 1.0), uRimPower);
    float rim = fres * uRim * (0.45 + 0.55 * wrap);
    vec3 H = normalize(L + V);
    float specular = pow(max(dot(N, H), 0.0), 28.0) * (0.12 + vSpark * 0.25) * wrap;

    vec3 col = vColor * diffuse * back + uRimColor * (rim + specular);
    col *= mix(1.0, uInnerDim, vInner);
    float tw = 1.0 + vSpark * (0.35 * sin(uTime * uTwinkleSpeed + vPhase * 6.2831) + 0.2);
    col *= tw;
    col *= uGain;
    col *= 1.0 + uPulse * 6.0;

    float alpha = shapeA * uOpacity * (1.0 + vSpark * 0.25);
    gl_FragColor = vec4(col, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

function Ga() {
    return new Promise(e => {
        let t = !1;
        const n = () => {
            t || (t = !0, e())
        };
        requestAnimationFrame(n), setTimeout(n, 50)
    })
}
async function Ua(e, t = Fe, n = 4) {
    const a = Ba(e, t);
    let o = a.next(),
        r = 0;
    for (; !o.done;) {
        const s = performance.now();
        for (; !o.done && performance.now() - s < n;) o = a.next();
        o.done || (r++, await Ga())
    }
    return {
        ...o.value,
        soLo: r
    }
}

function Xa(e, t = Fe, n = 1) {
    const {
        count: a,
        positions: o,
        normals: r,
        inner: s,
        rng: i,
        box: f
    } = e, c = f.max.x - f.min.x, p = f.max.y - f.min.y, l = t.colors, u = new re(l.champagne), m = new re(l.amber), d = new re(l.coral), y = new re(l.warmRed), w = new re, x = {
        h: 0,
        s: 0,
        l: 0
    }, M = Ee.clamp, C = new Float32Array(a * 3), b = new Float32Array(a), _ = new Float32Array(a), T = new Float32Array(a), S = t.particles;
    for (let k = 0; k < a; k++) {
        const z = o[k * 3],
            N = o[k * 3 + 1],
            he = M((z - f.min.x) / c, 0, 1),
            ge = M((N - f.min.y) / p, 0, 1);
        let V = M(.58 * he + .42 * (1 - ge), 0, 1);
        V = V * V * (3 - 2 * V), V < .32 ? w.copy(u).lerp(m, V / .32) : V < .64 ? w.copy(m).lerp(d, (V - .32) / .32) : w.copy(d).lerp(y, (V - .64) / .36 * .7);
        const K = l.coralBoost || 1;
        V > .45 && w.multiplyScalar(1 + (K - 1) * Math.min(1, (V - .45) / .3)), w.getHSL(x), w.setHSL(x.h + (i() - .5) * l.hueJitter, x.s, M(x.l + (i() - .5) * .06, 0, 1));
        const G = 1 + (i() - .5) * 2 * (S.brightJitter || 0);
        C.set([w.r * G, w.g * G, w.b * G], k * 3);
        const j = i() < S.sparkRatio ? 1 : 0;
        T[k] = j, b[k] = S.baseSize * (1 + (i() * 2 - 1) * S.sizeJitter) * (j ? S.sparkSize : 1), _[k] = i()
    }
    const P = new We;
    P.setAttribute("position", new te(o, 3)), P.setAttribute("normal", new te(r, 3)), P.setAttribute("aColor", new te(C, 3)), P.setAttribute("aSize", new te(b, 1)), P.setAttribute("aPhase", new te(_, 1)), P.setAttribute("aSpark", new te(T, 1)), P.setAttribute("aInner", new te(s, 1)), P.boundingBox = f.clone(), P.computeBoundingSphere();
    const R = t.lighting,
        E = t.motion,
        D = new wn({
            vertexShader: Va,
            fragmentShader: Ha,
            transparent: !0,
            depthTest: !0,
            depthWrite: !1,
            blending: kt,
            uniforms: {
                uTime: {
                    value: 0
                },
                uPixelRatio: {
                    value: n
                },
                uSizeScale: {
                    value: 1
                },
                uMaxSize: {
                    value: S.maxPixelSize
                },
                uBreathAmp: {
                    value: E.breathAmp
                },
                uBreathSpeed: {
                    value: E.breathSpeed
                },
                uWobble: {
                    value: E.wobbleAmp
                },
                uPulse: {
                    value: 0
                },
                uLightDir: {
                    value: new B(...R.keyDir).normalize()
                },
                uFillDir: {
                    value: new B(...R.fillDir).normalize()
                },
                uAmbient: {
                    value: R.ambient
                },
                uKey: {
                    value: R.key
                },
                uFill: {
                    value: R.fill ?? 0
                },
                uBackDim: {
                    value: R.backDim
                },
                uRim: {
                    value: R.rim
                },
                uRimPower: {
                    value: R.rimPower
                },
                uRimColor: {
                    value: new re(l.rim)
                },
                uInnerDim: {
                    value: R.innerDim
                },
                uOpacity: {
                    value: 0
                },
                uGain: {
                    value: S.gain ?? 1
                },
                uTwinkleSpeed: {
                    value: E.twinkleSpeed
                }
            }
        }),
        A = new Le(P, D);
    return A.frustumCulled = !1, A.name = "heartParticles", A
}
const Ya = `
  attribute float aAngle;
  attribute float aRadial;
  attribute float aLift;
  attribute float aSize;
  attribute float aPhase;
  uniform float uTime;
  uniform float uSpeed;
  uniform float uRx;
  uniform float uRz;
  uniform float uPixelRatio;
  uniform float uSizeScale;
  varying float vFade;
  void main() {
    float ang = aAngle + uTime * uSpeed;
    vec3 p = vec3(cos(ang) * uRx * aRadial, aLift, sin(ang) * uRz * aRadial);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(aSize * uSizeScale * uPixelRatio * (320.0 / -mv.z), 1.0, 10.0 * uPixelRatio);
    float spark = step(2.0, aPhase);
    vFade = mix(0.5 + 0.35 * sin(uTime * 1.3 + aPhase * 6.2831), 1.3 + 0.3 * sin(uTime * 2.1 + aPhase * 6.2831), spark);
  }
`,
    Wa = `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFade;
  void main() {
    vec2 uv = gl_PointCoord * 2.0 - 1.0;
    float d2 = dot(uv, uv);
    if (d2 > 1.0) discard;
    float a = pow(1.0 - sqrt(d2), 2.0) * uOpacity * vFade;
    gl_FragColor = vec4(uColor, a);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

function Ka(e, t, n = Fe, a = 1) {
    const o = n.orbit,
        r = Cn(n.seed ^ 1540483477),
        s = t === "mobile" ? o.dustCount.mobile : o.dustCount.desktop,
        i = new Float32Array(s),
        f = new Float32Array(s),
        c = new Float32Array(s),
        p = new Float32Array(s),
        l = new Float32Array(s),
        u = new Float32Array(s * 3),
        m = o.thickness * e;
    for (let b = 0; b < s; b++) {
        i[b] = r() * Math.PI * 2, f[b] = 1 + (r() - .5) * (o.radialSpread || .1), c[b] = (r() - .5) * m;
        const _ = r() < (o.sparkRatio || 0);
        p[b] = o.dustSize * (.45 + r() * .9) * (_ ? 2.2 : 1), l[b] = _ ? 2 + r() : r()
    }
    const d = new We;
    d.setAttribute("position", new te(u, 3)), d.setAttribute("aAngle", new te(i, 1)), d.setAttribute("aRadial", new te(f, 1)), d.setAttribute("aLift", new te(c, 1)), d.setAttribute("aSize", new te(p, 1)), d.setAttribute("aPhase", new te(l, 1));
    const y = o.radiusX * e,
        w = o.radiusZ * e;
    d.boundingSphere = new ia(new B, Math.max(y, w) * 1.2);
    const x = new wn({
            vertexShader: Ya,
            fragmentShader: Wa,
            transparent: !0,
            depthWrite: !1,
            depthTest: !0,
            blending: kt,
            uniforms: {
                uTime: {
                    value: 0
                },
                uSpeed: {
                    value: o.speed
                },
                uRx: {
                    value: y
                },
                uRz: {
                    value: w
                },
                uPixelRatio: {
                    value: a
                },
                uSizeScale: {
                    value: 1
                },
                uColor: {
                    value: new re(o.dustColor)
                },
                uOpacity: {
                    value: 0
                }
            }
        }),
        M = new Le(d, x);
    M.frustumCulled = !1, M.name = "orbitDust";
    const C = new Ye;
    return C.name = "orbit", C.rotation.x = Ee.degToRad(o.tiltDeg), C.rotation.z = Ee.degToRad(o.rollDeg), C.position.y = o.yOffset * e, C.add(M), C.userData.dust = M, C
}

function qa(e, t, n, a, o) {
    const r = Xa(e, a, n),
        s = a.shape.width,
        i = Ka(s, t, a, n),
        f = new Ye;
    f.name = "heartGroup", f.add(r);
    const c = new Ye;
    c.name = "heartGalaxy", c.add(f, i);
    const p = Ee.degToRad(a.motion.swayDeg),
        l = r.material.uniforms,
        u = i.userData.dust.material.uniforms;
    return console.log(`Trái tim: ${e.count} hạt, chất lượng ${t}, dựng trong ${(performance.now()-o).toFixed(0)} ms` + (e.soLo ? ` chia thành ${e.soLo} lô` : " một hơi")), {
        group: c,
        heartPoints: r,
        orbit: i,
        heartWidth: s,
        quality: t,
        update(m, d = 1, y = 0, w) {
            w && (l.uPixelRatio.value = w, u.uPixelRatio.value = w), l.uTime.value = m, l.uPulse.value = y, l.uOpacity.value = a.particles.opacity * d, f.rotation.y = Math.sin(m * a.motion.swaySpeed) * p, u.uTime.value = m, u.uOpacity.value = a.orbit.dustOpacity * d
        },
        dispose() {
            c.traverse(m => {
                var d, y, w, x;
                (y = (d = m.geometry) == null ? void 0 : d.dispose) == null || y.call(d), (x = (w = m.material) == null ? void 0 : w.dispose) == null || x.call(w)
            })
        }
    }
}

function Za(e, t) {
    return e === "mobile" ? t.particles.countMobile : t.particles.countDesktop
}
async function Ja({
    quality: e = jn(),
    pixelRatio: t = 1,
    cfg: n = Fe
} = {}) {
    const a = performance.now(),
        o = await Ua(Za(e, n), n);
    return qa(o, e, t, n, a)
}
let Ue = null,
    Ve = null;

function Pn(e) {
    return Ue ? Promise.resolve(Ue) : (Ve || (Ve = Ja({
        quality: jn(),
        pixelRatio: e || 1
    }).then(t => (Ue = t, t)).catch(t => (console.error("Không dựng được trái tim:", t), Ve = null, null))), Ve)
}

function Qa() {
    const e = Math.min(window.devicePixelRatio || 1, 2),
        t = () => Pn(e);
    setTimeout(() => {
        typeof requestIdleCallback == "function" ? requestIdleCallback(t, {
            timeout: 2e3
        }) : t()
    }, 1500)
}

function eo() {
    const e = Ae(o => o.gl),
        [t, n] = h.useState(Ue);
    h.useEffect(() => {
        if (t) return;
        let o = !0;
        return Pn(e.getPixelRatio()).then(r => {
            o && r && n(r)
        }), () => {
            o = !1
        }
    }, [t, e]);
    const a = h.useMemo(() => e.getPixelRatio(), [e]);
    return ke(o => {
        if (!t) return;
        const r = kn((An() - Dt) / (1 - Dt));
        t.update(o.clock.elapsedTime, r, 0, a)
    }), t ? g.jsx("primitive", {
        object: t.group,
        position: Zn,
        scale: [st, st, st]
    }) : null
}
const Rn = 0,
    Ln = 1,
    to = 2,
    En = 3,
    tn = 2.5,
    Te = [],
    ht = new re,
    nn = new re;

function et(e) {
    return Te.push(e), () => {
        const t = Te.indexOf(e);
        t >= 0 && Te.splice(t, 1)
    }
}

function no(e, t) {
    if (!Qe.started || Te.length === 0) return;
    const n = Ze(t),
        a = Ra(),
        o = !O.noColorCycle;
    if (o) {
        const r = (Math.sin(e / tn) + 1) / 2;
        nn.lerpColors(xt, vt, r)
    }
    for (let r = 0; r < Te.length; r++) {
        const s = Te[r],
            i = s.ref.current;
        if (i)
            if (s.y = Ia(s.y, s.speed * a, n), i.position.y = s.y, s.kind === Rn) {
                const f = e + s.phase;
                i.position.x = s.startX + ft(f, .45, s.phase * 3.1);
                const c = s.matRef.current;
                if (c && (c.opacity = ut(s.y), o)) {
                    const p = (Math.sin(f / tn) + 1) / 2;
                    ht.lerpColors(xt, vt, p), c.color.set(ht), c.emissive && c.emissive.set(ht)
                }
            } else if (s.kind === Ln) {
            i.position.x = s.startX + ft(e, s.amp, s.phase), i.rotation.z = Math.cos(e * .55 + s.phase) * .04;
            const f = s.matRef.current;
            f && (f.opacity = ut(s.y), o && f.emissive.set(nn))
        } else if (s.kind === En) {
            i.position.x = s.startX + ft(e, s.amp, s.phase), i.rotation.z += s.spin * n;
            const f = s.matRef.current;
            f && (f.opacity = ut(s.y))
        } else s.t += n, i.position.x = s.startX + Math.sin(s.t * .6) * s.amp, i.rotation.z = Math.sin(s.t * .8 + 1) * .12
    }
}
const dt = new Map;

function ao(e) {
    if (dt.has(e.url)) return dt.get(e.url);
    const t = new Promise((n, a) => {
        const o = new Image;
        o.onload = () => {
            const r = e.crop,
                i = Math.min(1, 512 / Math.max(r.w, r.h)),
                f = document.createElement("canvas");
            f.width = Math.round(r.w * i), f.height = Math.round(r.h * i), f.getContext("2d").drawImage(o, r.x, r.y, r.w, r.h, 0, 0, f.width, f.height);
            const c = new xn(f);
            c.colorSpace = Ct, c.generateMipmaps = !0, c.minFilter = vn, c.magFilter = bt, n(c)
        }, o.onerror = () => a(new Error("Không tải được " + e.url)), o.src = e.url
    });
    return dt.set(e.url, t), t
}

function oo({
    def: e,
    startX: t,
    startZ: n,
    speed: a,
    size: o,
    swayAmp: r,
    phase: s
}) {
    const i = h.useRef(),
        [f, c] = h.useState(null);
    h.useEffect(() => {
        let d = !0;
        return ao(e).then(y => {
            d && c(y)
        }).catch(y => console.error(y)), () => {
            d = !1
        }
    }, [e]);
    const p = h.useMemo(() => Pt(), []),
        l = e.crop.w / e.crop.h,
        u = o * l,
        m = o;
    return h.useEffect(() => et({
        kind: to,
        ref: i,
        matRef: {
            current: null
        },
        y: p,
        t: s,
        startX: t,
        speed: a,
        amp: r
    }), [p, s, t, a, r]), f ? g.jsxs("mesh", {
        ref: i,
        position: [t, p, n],
        children: [g.jsx("planeGeometry", {
            args: [u, m]
        }), g.jsx("meshStandardMaterial", {
            map: f,
            emissiveMap: f,
            emissive: e.emissive || "#ffb347",
            emissiveIntensity: e.emissiveIntensity ?? .9,
            toneMapped: !1,
            transparent: !0,
            alphaTest: .05,
            depthWrite: !1,
            side: Ke,
            metalness: 0,
            roughness: .8
        })]
    }) : null
}

function ro() {
    return h.useMemo(() => {
        const t = [];
        for (let n = 0; n < O.lanternCount; n++) {
            const a = Ot[n % Ot.length];
            t.push({
                key: "lantern-" + n,
                def: a,
                startX: -32 + (n + .5) * (64 / O.lanternCount) + (Math.random() - .5) * 6,
                startZ: -12 + Math.random() * 26,
                speed: (3 + Math.random() * 3) * (a.speedMul || 1),
                size: (3.2 + Math.random() * 2.8) * (a.scale || 1),
                swayAmp: .8 + Math.random() * 1.6,
                phase: Math.random() * 20
            })
        }
        return t
    }, []).map(({
        key: t,
        ...n
    }) => g.jsx(oo, {
        ...n
    }, t))
}
const mt = new Map;

function so(e, t, n, a) {
    e.beginPath(), e.moveTo(a, 0), e.lineTo(t - a, 0), e.quadraticCurveTo(t, 0, t, a), e.lineTo(t, n - a), e.quadraticCurveTo(t, n, t - a, n), e.lineTo(a, n), e.quadraticCurveTo(0, n, 0, n - a), e.lineTo(0, a), e.quadraticCurveTo(0, 0, a, 0), e.closePath()
}

function io(e, t) {
    const n = `${e}@${O.imgMax}`;
    if (mt.has(n)) return mt.get(n);
    const a = new Promise((o, r) => {
        const s = new Image;
        s.crossOrigin = "Anonymous", s.onload = () => {
            const i = document.createElement("canvas"),
                f = i.getContext("2d"),
                c = O.imgMax;
            let p = s.width,
                l = s.height;
            (p > c || l > c) && (p > l ? (l = Math.floor(l / p * c), p = c) : (p = Math.floor(p / l * c), l = c)), i.width = p, i.height = l, so(f, p, l, p * .05), f.clip(), f.drawImage(s, 0, 0, p, l);
            const u = new xn(i);
            O.imgFix ? (u.colorSpace = Ct, u.generateMipmaps = !0, u.minFilter = vn, u.magFilter = bt, u.anisotropy = t != null && t.capabilities ? t.capabilities.getMaxAnisotropy() : 1) : (u.generateMipmaps = !1, u.minFilter = bt), o(u)
        }, s.onerror = () => r(new Error("Không tải được ảnh: " + e)), s.src = e
    });
    return mt.set(n, a), a
}

function co({
    imageUrl: e,
    startX: t,
    startZ: n,
    speed: a
}) {
    const o = h.useRef(),
        r = h.useRef(),
        [s, i] = h.useState(null),
        f = Ae(m => m.gl);
    h.useEffect(() => {
        if (!e) return;
        let m = !0;
        return io(e, f).then(d => {
            m && i(d)
        }).catch(d => console.error(d)), () => {
            m = !1
        }
    }, [e, f]);
    const [c, p] = h.useMemo(() => {
        if (s != null && s.image) {
            const m = s.image.width / s.image.height,
                d = 10;
            return m > 1 ? [d, d / m] : [d * m, d]
        }
        return [3, 3]
    }, [s]), l = h.useMemo(() => Pt(), []), u = h.useMemo(() => ({
        phase: Math.random() * Math.PI * 2,
        amp: .8 + Math.random() * .8
    }), []);
    return h.useEffect(() => et({
        kind: Ln,
        ref: o,
        matRef: r,
        y: l,
        startX: t,
        speed: a,
        phase: u.phase,
        amp: u.amp
    }), [l, t, a, u]), s ? g.jsxs("mesh", {
        ref: o,
        position: [t, l, n],
        children: [g.jsx("planeGeometry", {
            args: [c, p]
        }), g.jsx("meshStandardMaterial", {
            ref: r,
            map: s,
            emissiveMap: s,
            emissive: "#EE66A6",
            emissiveIntensity: O.imgGlow,
            toneMapped: !1,
            transparent: !0,
            side: Ke,
            metalness: 0,
            roughness: .7
        })]
    }) : null
}

function lo({
    images: e
}) {
    return h.useMemo(() => {
        if (!Array.isArray(e) || e.length === 0) return [];
        const n = [];
        let a = 0;
        for (let o = 0; o < 4; o++)
            for (let r = 0; r < 4; r++) n.push({
                key: `image-${o}-${r}`,
                imageUrl: e[a % e.length],
                startX: (r - 1.5) * 18,
                startZ: -10 + o * 10,
                speed: 4 + Math.random() * 5
            }), a++;
        return n
    }, [e]).map(({
        key: n,
        ...a
    }) => g.jsx(co, {
        ...a
    }, n))
}

function uo({
    text: e,
    startX: t,
    startY: n,
    startZ: a,
    speed: o,
    phase: r,
    color: s,
    font: i
}) {
    const f = h.useRef(),
        c = h.useRef();
    h.useEffect(() => et({
        kind: Rn,
        ref: f,
        matRef: c,
        y: n,
        startX: t,
        speed: o,
        phase: r
    }), [t, n, o, r]);
    const p = h.useMemo(() => {
        const l = e.split(/(\s+)/);
        let u = 0,
            m = "";
        return l.forEach(d => {
            d.trim().length > 0 && u++, m += d, u >= 8 && d.match(/\s+/) && (m = m.trimEnd() + `
`, u = 0)
        }), m.trim()
    }, [e]);
    return g.jsxs(ta, {
        ref: f,
        font: i,
        fontSize: 1.5,
        letterSpacing: -.1,
        position: [t, n, a],
        anchorX: "center",
        anchorY: "middle",
        textAlign: "center",
        children: [p, O.textMaterial === "basic" ? g.jsx("meshBasicMaterial", {
            ref: c,
            color: s,
            toneMapped: !1,
            transparent: !0,
            side: Ke
        }) : g.jsx("meshStandardMaterial", {
            ref: c,
            color: s,
            emissive: s,
            emissiveIntensity: 1.5,
            toneMapped: !1,
            transparent: !0,
            side: Ke
        })]
    })
}

function fo({
    messages: e,
    color: t,
    fontName: n
}) {
    return h.useMemo(() => {
        const o = (Array.isArray(e) ? e : []).map(Jn).filter(Boolean);
        if (o.length === 0) return [];
        const r = [];
        let s = 0;
        for (let i = 0; i < O.rows; i++)
            for (let f = 0; f < O.cols; f++) {
                const c = o[s % o.length],
                    l = c.length > 20 ? 6 : 3;
                r.push({
                    key: `text-${i}-${f}`,
                    text: c,
                    startX: (f - (O.cols - 1) / 2) * l,
                    startY: pe + Math.random() * (Se - pe),
                    startZ: -10 + i * l * 1.5,
                    speed: 7 + Math.random() * 2,
                    phase: Math.random() * 2,
                    color: t ?? "#EE66A6",
                    font: "./assets/font/NotoSans-Regular.ttf"
                }), s++
            }
        return r
    }, [e, t, n]).map(({
        key: o,
        ...r
    }) => g.jsx(uo, {
        ...r
    }, o))
}
const ho = /^[og]\s*(.+)?/,
    mo = /^mtllib /,
    po = /^usemtl /,
    go = /^usemap /,
    an = /\s+/,
    on = new B,
    pt = new B,
    rn = new B,
    sn = new B,
    ae = new B,
    He = new re;

function yo() {
    const e = {
        objects: [],
        object: {},
        vertices: [],
        normals: [],
        colors: [],
        uvs: [],
        materials: {},
        materialLibraries: [],
        startObject: function(t, n) {
            if (this.object && this.object.fromDeclaration === !1) {
                this.object.name = t, this.object.fromDeclaration = n !== !1;
                return
            }
            const a = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
            if (this.object && typeof this.object._finalize == "function" && this.object._finalize(!0), this.object = {
                    name: t || "",
                    fromDeclaration: n !== !1,
                    geometry: {
                        vertices: [],
                        normals: [],
                        colors: [],
                        uvs: [],
                        hasUVIndices: !1
                    },
                    materials: [],
                    smooth: !0,
                    startMaterial: function(o, r) {
                        const s = this._finalize(!1);
                        s && (s.inherited || s.groupCount <= 0) && this.materials.splice(s.index, 1);
                        const i = {
                            index: this.materials.length,
                            name: o || "",
                            mtllib: Array.isArray(r) && r.length > 0 ? r[r.length - 1] : "",
                            smooth: s !== void 0 ? s.smooth : this.smooth,
                            groupStart: s !== void 0 ? s.groupEnd : 0,
                            groupEnd: -1,
                            groupCount: -1,
                            inherited: !1,
                            clone: function(f) {
                                const c = {
                                    index: typeof f == "number" ? f : this.index,
                                    name: this.name,
                                    mtllib: this.mtllib,
                                    smooth: this.smooth,
                                    groupStart: 0,
                                    groupEnd: -1,
                                    groupCount: -1,
                                    inherited: !1
                                };
                                return c.clone = this.clone.bind(c), c
                            }
                        };
                        return this.materials.push(i), i
                    },
                    currentMaterial: function() {
                        if (this.materials.length > 0) return this.materials[this.materials.length - 1]
                    },
                    _finalize: function(o) {
                        const r = this.currentMaterial();
                        if (r && r.groupEnd === -1 && (r.groupEnd = this.geometry.vertices.length / 3, r.groupCount = r.groupEnd - r.groupStart, r.inherited = !1), o && this.materials.length > 1)
                            for (let s = this.materials.length - 1; s >= 0; s--) this.materials[s].groupCount <= 0 && this.materials.splice(s, 1);
                        return o && this.materials.length === 0 && this.materials.push({
                            name: "",
                            smooth: this.smooth
                        }), r
                    }
                }, a && a.name && typeof a.clone == "function") {
                const o = a.clone(0);
                o.inherited = !0, this.object.materials.push(o)
            }
            this.objects.push(this.object)
        },
        finalize: function() {
            this.object && typeof this.object._finalize == "function" && this.object._finalize(!0)
        },
        parseVertexIndex: function(t, n) {
            const a = parseInt(t, 10);
            return (a >= 0 ? a - 1 : a + n / 3) * 3
        },
        parseNormalIndex: function(t, n) {
            const a = parseInt(t, 10);
            return (a >= 0 ? a - 1 : a + n / 3) * 3
        },
        parseUVIndex: function(t, n) {
            const a = parseInt(t, 10);
            return (a >= 0 ? a - 1 : a + n / 2) * 2
        },
        addVertex: function(t, n, a) {
            const o = this.vertices,
                r = this.object.geometry.vertices;
            r.push(o[t + 0], o[t + 1], o[t + 2]), r.push(o[n + 0], o[n + 1], o[n + 2]), r.push(o[a + 0], o[a + 1], o[a + 2])
        },
        addVertexPoint: function(t) {
            const n = this.vertices;
            this.object.geometry.vertices.push(n[t + 0], n[t + 1], n[t + 2])
        },
        addVertexLine: function(t) {
            const n = this.vertices;
            this.object.geometry.vertices.push(n[t + 0], n[t + 1], n[t + 2])
        },
        addNormal: function(t, n, a) {
            const o = this.normals,
                r = this.object.geometry.normals;
            r.push(o[t + 0], o[t + 1], o[t + 2]), r.push(o[n + 0], o[n + 1], o[n + 2]), r.push(o[a + 0], o[a + 1], o[a + 2])
        },
        addFaceNormal: function(t, n, a) {
            const o = this.vertices,
                r = this.object.geometry.normals;
            on.fromArray(o, t), pt.fromArray(o, n), rn.fromArray(o, a), ae.subVectors(rn, pt), sn.subVectors(on, pt), ae.cross(sn), ae.normalize(), r.push(ae.x, ae.y, ae.z), r.push(ae.x, ae.y, ae.z), r.push(ae.x, ae.y, ae.z)
        },
        addColor: function(t, n, a) {
            const o = this.colors,
                r = this.object.geometry.colors;
            o[t] !== void 0 && r.push(o[t + 0], o[t + 1], o[t + 2]), o[n] !== void 0 && r.push(o[n + 0], o[n + 1], o[n + 2]), o[a] !== void 0 && r.push(o[a + 0], o[a + 1], o[a + 2])
        },
        addUV: function(t, n, a) {
            const o = this.uvs,
                r = this.object.geometry.uvs;
            r.push(o[t + 0], o[t + 1]), r.push(o[n + 0], o[n + 1]), r.push(o[a + 0], o[a + 1])
        },
        addDefaultUV: function() {
            const t = this.object.geometry.uvs;
            t.push(0, 0), t.push(0, 0), t.push(0, 0)
        },
        addUVLine: function(t) {
            const n = this.uvs;
            this.object.geometry.uvs.push(n[t + 0], n[t + 1])
        },
        addFace: function(t, n, a, o, r, s, i, f, c) {
            const p = this.vertices.length;
            let l = this.parseVertexIndex(t, p),
                u = this.parseVertexIndex(n, p),
                m = this.parseVertexIndex(a, p);
            if (this.addVertex(l, u, m), this.addColor(l, u, m), i !== void 0 && i !== "") {
                const d = this.normals.length;
                l = this.parseNormalIndex(i, d), u = this.parseNormalIndex(f, d), m = this.parseNormalIndex(c, d), this.addNormal(l, u, m)
            } else this.addFaceNormal(l, u, m);
            if (o !== void 0 && o !== "") {
                const d = this.uvs.length;
                l = this.parseUVIndex(o, d), u = this.parseUVIndex(r, d), m = this.parseUVIndex(s, d), this.addUV(l, u, m), this.object.geometry.hasUVIndices = !0
            } else this.addDefaultUV()
        },
        addPointGeometry: function(t) {
            this.object.geometry.type = "Points";
            const n = this.vertices.length;
            for (let a = 0, o = t.length; a < o; a++) {
                const r = this.parseVertexIndex(t[a], n);
                this.addVertexPoint(r), this.addColor(r)
            }
        },
        addLineGeometry: function(t, n) {
            this.object.geometry.type = "Line";
            const a = this.vertices.length,
                o = this.uvs.length;
            for (let r = 0, s = t.length; r < s; r++) this.addVertexLine(this.parseVertexIndex(t[r], a));
            for (let r = 0, s = n.length; r < s; r++) this.addUVLine(this.parseUVIndex(n[r], o))
        }
    };
    return e.startObject("", !1), e
}
class bo extends ca {
    constructor(t) {
        super(t), this.materials = null
    }
    load(t, n, a, o) {
        const r = this,
            s = new la(this.manager);
        s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t, function(i) {
            try {
                n(r.parse(i))
            } catch (f) {
                o ? o(f) : console.error(f), r.manager.itemError(t)
            }
        }, a, o)
    }
    setMaterials(t) {
        return this.materials = t, this
    }
    parse(t) {
        const n = new yo;
        t.indexOf(`\r
`) !== -1 && (t = t.replace(/\r\n/g, `
`)), t.indexOf(`\\
`) !== -1 && (t = t.replace(/\\\n/g, ""));
        const a = t.split(`
`);
        let o = [];
        for (let i = 0, f = a.length; i < f; i++) {
            const c = a[i].trimStart();
            if (c.length === 0) continue;
            const p = c.charAt(0);
            if (p !== "#")
                if (p === "v") {
                    const l = c.split(an);
                    switch (l[0]) {
                        case "v":
                            n.vertices.push(parseFloat(l[1]), parseFloat(l[2]), parseFloat(l[3])), l.length >= 7 ? (He.setRGB(parseFloat(l[4]), parseFloat(l[5]), parseFloat(l[6]), Ct), n.colors.push(He.r, He.g, He.b)) : n.colors.push(void 0, void 0, void 0);
                            break;
                        case "vn":
                            n.normals.push(parseFloat(l[1]), parseFloat(l[2]), parseFloat(l[3]));
                            break;
                        case "vt":
                            n.uvs.push(parseFloat(l[1]), parseFloat(l[2]));
                            break
                    }
                } else if (p === "f") {
                const u = c.slice(1).trim().split(an),
                    m = [];
                for (let y = 0, w = u.length; y < w; y++) {
                    const x = u[y];
                    if (x.length > 0) {
                        const M = x.split("/");
                        m.push(M)
                    }
                }
                const d = m[0];
                for (let y = 1, w = m.length - 1; y < w; y++) {
                    const x = m[y],
                        M = m[y + 1];
                    n.addFace(d[0], x[0], M[0], d[1], x[1], M[1], d[2], x[2], M[2])
                }
            } else if (p === "l") {
                const l = c.substring(1).trim().split(" ");
                let u = [];
                const m = [];
                if (c.indexOf("/") === -1) u = l;
                else
                    for (let d = 0, y = l.length; d < y; d++) {
                        const w = l[d].split("/");
                        w[0] !== "" && u.push(w[0]), w[1] !== "" && m.push(w[1])
                    }
                n.addLineGeometry(u, m)
            } else if (p === "p") {
                const u = c.slice(1).trim().split(" ");
                n.addPointGeometry(u)
            } else if ((o = ho.exec(c)) !== null) {
                const l = (" " + o[0].slice(1).trim()).slice(1);
                n.startObject(l)
            } else if (po.test(c)) n.object.startMaterial(c.substring(7).trim(), n.materialLibraries);
            else if (mo.test(c)) n.materialLibraries.push(c.substring(7).trim());
            else if (go.test(c)) console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
            else if (p === "s") {
                if (o = c.split(" "), o.length > 1) {
                    const u = o[1].trim().toLowerCase();
                    n.object.smooth = u !== "0" && u !== "off"
                } else n.object.smooth = !0;
                const l = n.object.currentMaterial();
                l && (l.smooth = n.object.smooth)
            } else {
                if (c === "\0") continue;
                console.warn('THREE.OBJLoader: Unexpected line: "' + c + '"')
            }
        }
        n.finalize();
        const r = new Ye;
        if (r.materialLibraries = [].concat(n.materialLibraries), !(n.objects.length === 1 && n.objects[0].geometry.vertices.length === 0) === !0)
            for (let i = 0, f = n.objects.length; i < f; i++) {
                const c = n.objects[i],
                    p = c.geometry,
                    l = c.materials,
                    u = p.type === "Line",
                    m = p.type === "Points";
                let d = !1;
                if (p.vertices.length === 0) continue;
                const y = new We;
                y.setAttribute("position", new xe(p.vertices, 3)), p.normals.length > 0 && y.setAttribute("normal", new xe(p.normals, 3)), p.colors.length > 0 && (d = !0, y.setAttribute("color", new xe(p.colors, 3))), p.hasUVIndices === !0 && y.setAttribute("uv", new xe(p.uvs, 2));
                const w = [];
                for (let M = 0, C = l.length; M < C; M++) {
                    const b = l[M],
                        _ = b.name + "_" + b.smooth + "_" + d;
                    let T = n.materials[_];
                    if (this.materials !== null) {
                        if (T = this.materials.create(b.name), u && T && !(T instanceof it)) {
                            const S = new it;
                            Ht.prototype.copy.call(S, T), S.color.copy(T.color), T = S
                        } else if (m && T && !(T instanceof $e)) {
                            const S = new $e({
                                size: 10,
                                sizeAttenuation: !1
                            });
                            Ht.prototype.copy.call(S, T), S.color.copy(T.color), S.map = T.map, T = S
                        }
                    }
                    T === void 0 && (u ? T = new it : m ? T = new $e({
                        size: 1,
                        sizeAttenuation: !1
                    }) : T = new ua, T.name = b.name, T.flatShading = !b.smooth, T.vertexColors = d, n.materials[_] = T), w.push(T)
                }
                let x;
                if (w.length > 1) {
                    for (let M = 0, C = l.length; M < C; M++) {
                        const b = l[M];
                        y.addGroup(b.groupStart, b.groupCount, M)
                    }
                    u ? x = new Gt(y, w) : m ? x = new Le(y, w) : x = new Ut(y, w)
                } else u ? x = new Gt(y, w[0]) : m ? x = new Le(y, w[0]) : x = new Ut(y, w[0]);
                x.name = c.name, r.add(x)
            } else if (n.vertices.length > 0) {
                const i = new $e({
                        size: 1,
                        sizeAttenuation: !1
                    }),
                    f = new We;
                f.setAttribute("position", new xe(n.vertices, 3)), n.colors.length > 0 && n.colors[0] !== void 0 && (f.setAttribute("color", new xe(n.colors, 3)), i.vertexColors = !0);
                const c = new Le(f, i);
                r.add(c)
            } return r
    }
}
const cn = "#e62e00";

function wo({
    geometry: e,
    startX: t,
    startZ: n,
    speed: a
}) {
    const o = h.useRef(),
        r = h.useRef(),
        s = h.useMemo(() => Pt(), []),
        i = h.useMemo(() => ({
            phase: Math.random() * Math.PI * 2,
            amp: .6 + Math.random() * .8,
            spin: .4 + Math.random() * .5
        }), []);
    return h.useEffect(() => et({
        kind: En,
        ref: o,
        matRef: r,
        y: s,
        startX: t,
        speed: a,
        phase: i.phase,
        amp: i.amp,
        spin: i.spin
    }), [s, t, a, i]), g.jsx("mesh", {
        ref: o,
        geometry: e,
        position: [t, s, n],
        scale: .15,
        rotation: [-Math.PI / 2, 0, 0],
        children: g.jsx("meshStandardMaterial", {
            ref: r,
            color: cn,
            emissive: cn,
            emissiveIntensity: 1.3,
            transparent: !0,
            toneMapped: !1
        })
    })
}

function xo() {
    const e = na(bo, "/models/heart.obj"),
        t = h.useMemo(() => {
            let a = null;
            return e.traverse(o => {
                !a && o.isMesh && (a = o.geometry)
            }), a
        }, [e]),
        n = h.useMemo(() => {
            const a = [];
            for (let o = 0; o < 4; o++)
                for (let r = 0; r < 7; r++) a.push({
                    key: `tim-${o}-${r}`,
                    startX: (r - 3) * 7 + (Math.random() - .5) * 3,
                    startZ: -12 + o * 9 + (Math.random() - .5) * 3,
                    speed: 5 + Math.random() * 9
                });
            return a
        }, []);
    return t ? n.map(a => g.jsx(wo, {
        geometry: t,
        ...a
    }, a.key)) : null
}

function vo() {
    return ke((e, t) => no(e.clock.elapsedTime, t), -1), null
}
const Mo = `
attribute float aSize;
attribute float aPhase;
attribute float aSpeed;
attribute vec3 aColor;
uniform float uTime;
uniform float uPixelRatio;
varying vec3 vColor;
varying float vTwinkle;
varying float vSize;
void main() {
    vColor = aColor;
    // Lấp lánh: hai sóng sin lệch pha, nâng bậc để đa số sao dịu, thi thoảng bừng sáng.
    float w = 0.5 + 0.5 * sin(uTime * aSpeed + aPhase);
    float w2 = 0.5 + 0.5 * sin(uTime * aSpeed * 1.7 + aPhase * 2.3);
    vTwinkle = 0.45 + 0.75 * pow(w * 0.7 + w2 * 0.3, 2.0);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float att = 260.0 / max(1.0, -mv.z);
    float size = aSize * uPixelRatio * (0.75 + 0.25 * vTwinkle) * att;
    vSize = size;
    gl_PointSize = clamp(size, 1.2 * uPixelRatio, 26.0 * uPixelRatio);
    gl_Position = projectionMatrix * mv;
}`,
    To = `
varying vec3 vColor;
varying float vTwinkle;
varying float vSize;
void main() {
    vec2 p = gl_PointCoord - 0.5;
    float d = length(p);
    if (d > 0.5) discard;
    // Lõi sáng + quầng mờ
    float core = smoothstep(0.5, 0.0, d);
    core = core * core;
    float halo = exp(-d * d * 18.0) * 0.55;
    // Tia chữ thập nhẹ cho các sao lớn
    float cross = exp(-abs(p.x) * 40.0) * exp(-abs(p.y) * 6.0) + exp(-abs(p.y) * 40.0) * exp(-abs(p.x) * 6.0);
    cross *= smoothstep(6.0, 14.0, vSize) * 0.35;
    float a = (core + halo + cross) * vTwinkle;
    // Lõi ngả trắng ấm để sao vàng trông rực chứ không bệt
    vec3 col = mix(vColor, vec3(1.0, 0.98, 0.9), core * 0.5);
    gl_FragColor = vec4(col * a, a);
}`,
    ln = [
        [1, .84, .25],
        [1, .9, .45],
        [1, .95, .7],
        [1, .78, .2],
        [1, .93, .6],
        [1, .72, .3]
    ];

function So() {
    const e = h.useRef(),
        t = h.useRef(),
        n = Ae(s => s.gl),
        a = h.useMemo(() => {
            const s = O.starCount,
                i = new Float32Array(s * 3),
                f = new Float32Array(s * 3),
                c = new Float32Array(s),
                p = new Float32Array(s),
                l = new Float32Array(s);
            for (let u = 0; u < s; u++) {
                const m = Math.random() * 2 - 1,
                    d = Math.random() * Math.PI * 2,
                    y = 70 + Math.pow(Math.random(), .6) * 150,
                    w = Math.sqrt(1 - m * m);
                i[u * 3] = y * w * Math.cos(d), i[u * 3 + 1] = y * m, i[u * 3 + 2] = y * w * Math.sin(d);
                const x = ln[Math.floor(Math.random() * ln.length)];
                f[u * 3] = x[0], f[u * 3 + 1] = x[1], f[u * 3 + 2] = x[2];
                const M = Math.random();
                c[u] = M < .75 ? 1.2 + Math.random() * 1.3 : M < .94 ? 2.6 + Math.random() * 1.8 : 4.4 + Math.random() * 2.6, p[u] = Math.random() * Math.PI * 2, l[u] = .6 + Math.random() * 2.2
            }
            return {
                pos: i,
                col: f,
                size: c,
                phase: p,
                speed: l
            }
        }, []),
        o = h.useMemo(() => ({
            uTime: {
                value: 0
            },
            uPixelRatio: {
                value: Math.min(n ? n.getPixelRatio() : 1, 2)
            }
        }), [n]);
    ke((s, i) => {
        t.current && (t.current.uniforms.uTime.value = s.clock.elapsedTime), e.current && (e.current.position.copy(s.camera.position), e.current.rotation.y += Ze(i) * .006, e.current.rotation.x += Ze(i) * .0015)
    });
    const r = O.starCount;
    return g.jsx("group", {
        ref: e,
        position: [-10, 0, 30],
        children: g.jsxs("points", {
            frustumCulled: !1,
            children: [g.jsxs("bufferGeometry", {
                children: [g.jsx("bufferAttribute", {
                    attach: "attributes-position",
                    array: a.pos,
                    count: r,
                    itemSize: 3
                }), g.jsx("bufferAttribute", {
                    attach: "attributes-aColor",
                    array: a.col,
                    count: r,
                    itemSize: 3
                }), g.jsx("bufferAttribute", {
                    attach: "attributes-aSize",
                    array: a.size,
                    count: r,
                    itemSize: 1
                }), g.jsx("bufferAttribute", {
                    attach: "attributes-aPhase",
                    array: a.phase,
                    count: r,
                    itemSize: 1
                }), g.jsx("bufferAttribute", {
                    attach: "attributes-aSpeed",
                    array: a.speed,
                    count: r,
                    itemSize: 1
                })]
            }), g.jsx("shaderMaterial", {
                ref: t,
                uniforms: o,
                vertexShader: Mo,
                fragmentShader: To,
                transparent: !0,
                depthWrite: !1,
                depthTest: !0,
                blending: kt,
                toneMapped: !1
            })]
        })
    })
}

function Ao({
    content: e,
    started: t,
    goHeartRef: n,
    onHeartBegin: a,
    coupleImgRef: o
}) {
    const [r, s] = h.useState(t ? "run" : "wait"), [i, f] = h.useState(!1), [c, p] = h.useState(!0), l = h.useRef();
    h.useEffect(() => {
        Ea()
    }, []);
    const u = h.useCallback(() => {
        if (!La()) return;
        a == null || a(), s("exit");
        const d = setTimeout(() => p(!1), O.flySecs * Qn * 1e3),
            y = setTimeout(() => s("heart"), O.flySecs * 1e3 + 150);
        return () => {
            clearTimeout(d), clearTimeout(y)
        }
    }, [a]);
    h.useEffect(() => {
        n && (n.current = u)
    }, [u, n]), h.useEffect(() => {
        !t || r !== "wait" || (Qe.started = !0, s("intro"))
    }, [t, r]);
    const m = r === "run" || r === "heart" && i;
    return g.jsxs(aa, {
        style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "black"
        },
        camera: {
            position: [-10, 0, 30],
            fov: 100
        },
        dpr: O.dpr || [1, O.dprMax],
        gl: {
            antialias: O.antialias,
            powerPreference: "high-performance"
        },
        performance: {
            min: .6,
            max: 1,
            debounce: 250
        },
        children: [g.jsx(oa, {
            pixelated: !1
        }), g.jsx("color", {
            attach: "background",
            args: ["#000"]
        }), g.jsx("ambientLight", {
            intensity: 1
        }), g.jsx("pointLight", {
            position: [10, 10, 0],
            color: "#ff00ff",
            intensity: .5,
            distance: 20
        }), g.jsx(Fa, {
            onDone: () => s("run")
        }), (r === "exit" || r === "heart") && !i ? g.jsx(_a, {
            onDone: () => {
                var y;
                const d = l.current;
                d != null && d.target && (d.target.set(...Xe), (y = d.update) == null || y.call(d)), f(!0)
            }
        }) : null, g.jsx(vo, {}), be.has("particles") ? null : g.jsx(So, {}), g.jsx(Da, {
            imgRef: o,
            active: r === "heart" && i
        }), be.has("controls") ? null : g.jsx(ra, {
            ref: l,
            enabled: m,
            target: r === "run" || r === "wait" || r === "intro" ? [0, 0, 0] : Xe,
            enableZoom: !0,
            enableRotate: !0,
            enablePan: !1,
            touches: {
                ONE: Xt.ROTATE,
                TWO: Xt.DOLLY_ROTATE
            },
            enableDamping: !0,
            dampingFactor: .06,
            zoomSpeed: .35,
            rotateSpeed: .7,
            minDistance: 10,
            maxDistance: 50
        }), g.jsxs("group", {
            children: [c && !be.has("images") ? g.jsx(lo, {
                images: e.images
            }) : null, c && !be.has("text") ? g.jsx(fo, {
                messages: e.messages,
                color: e.color,
                fontName: e.fontName
            }) : null, c && !be.has("lanterns") ? g.jsx(ro, {}) : null, c && e.flyingHearts && !be.has("hearts") ? g.jsx(xo, {}) : null, r === "exit" || r === "heart" ? g.jsx(eo, {}, "heart-scene") : null]
        }), be.has("bloom") ? null : g.jsx(fa, {
            multisampling: O.multisampling,
            children: g.jsx(ha, {
                mipmapBlur: !1,
                intensity: O.bloomIntensity,
                luminanceThreshold: O.bloomThreshold,
                luminanceSmoothing: .5,
                height: O.bloomHeight,
                kernelSize: 4
            })
        })]
    })
}
const In = "./assets/music/bongtrang.mp3",
    Fn = .55,
    _n = 3e3,
    ko = 700;
let fe = In,
    $ = null,
    Ge = 0;
const Tt = new Set;
let Q = null,
    Pe = "";

function zn(e) {
    typeof fetch != "function" || typeof URL > "u" || !URL.createObjectURL || Pe === e || Q && Q.nguon === e || (Pe = e, fetch(e, {
        mode: "cors",
        credentials: "omit"
    }).then(t => t.ok ? t.blob() : Promise.reject(new Error("HTTP " + t.status))).then(t => {
        if (Pe !== e) return;
        const n = Q;
        if (Q = {
                nguon: e,
                url: URL.createObjectURL(t)
            }, n) try {
            URL.revokeObjectURL(n.url)
        } catch {}
        Rt()
    }).catch(() => {}).finally(() => {
        Pe === e && (Pe = "")
    }))
}

function Rt() {
    !$ || !Q || Q.nguon !== fe || $.src !== Q.url && (!$.paused || Re || ze || ($.src = Q.url, $.load()))
}

function St() {
    for (const e of Tt) e(Lt())
}

function _e() {
    return $ || ($ = new Audio(Q && Q.nguon === fe ? Q.url : fe), $.loop = !0, $.preload = "auto", $.volume = 0, $.addEventListener("play", St), $.addEventListener("pause", St), $)
}

function Co(e) {
    var a;
    const t = e && String(e).trim() || In;
    if (t === fe || (fe = t, zn(fe), !$)) return;
    const n = !$.paused;
    $.src = Q && Q.nguon === fe ? Q.url : fe, $.load(), n && ((a = $.play()) == null || a.catch(() => {}))
}

function jo() {
    zn(fe), _e()
}
let un = !1,
    Re = !1,
    ze = !1;

function fn() {
    if (un || Re) return;
    const e = _e();
    Rt(), Re = !0, e.volume = 0;
    const t = () => {
            ze || (e.pause(), e.currentTime = 0), un = !0, Re = !1
        },
        n = e.play();
    n && typeof n.then == "function" ? n.then(t).catch(() => {
        Re = !1
    }) : t()
}

function Lt() {
    return !!$ && !$.paused
}

function Po(e) {
    return Tt.add(e), () => Tt.delete(e)
}
const Ro = 40;

function Et(e, t, n) {
    const a = _e();
    clearInterval(Ge);
    const o = performance.now(),
        r = a.volume;
    Ge = setInterval(() => {
        const s = Math.min(1, (performance.now() - o) / t),
            i = s * s * (3 - 2 * s);
        a.volume = r + (e - r) * i, s >= 1 && (clearInterval(Ge), Ge = 0, n == null || n())
    }, Ro)
}

function At() {
    var t;
    const e = _e();
    e.paused && (Rt(), ze = !0, e.volume = 0, (t = e.play()) == null || t.catch(() => Nn()), Et(Fn, _n))
}
let gt = !1;

function Nn() {
    if (gt || typeof window > "u") return;
    gt = !0;
    const e = () => {
            var a;
            if (t(), !ze) return;
            const n = _e();
            n.paused && (n.volume = 0, (a = n.play()) == null || a.then(() => Et(Fn, _n)).catch(() => Nn()))
        },
        t = () => {
            gt = !1;
            for (const n of ["touchend", "click", "pointerup", "keydown"]) window.removeEventListener(n, e, !0)
        };
    for (const n of ["touchend", "click", "pointerup", "keydown"]) window.addEventListener(n, e, !0)
}

function Lo() {
    $ && (ze = !1, Et(0, ko, () => {
        $.pause(), St()
    }))
}

function Eo() {
    Lt() ? Lo() : At()
}

function Io({
    visible: e,
    onOpenHeart: t,
    onOpenLetter: n,
    showHeart: a,
    showLetter: o
}) {
    const [r, s] = h.useState(Lt);
    h.useEffect(() => Po(s), []);
    const [i, f] = h.useState(!1);
    return h.useEffect(() => {
        if (!e) {
            f(!1);
            return
        }
        const c = setTimeout(() => f(!0), 5e3);
        return () => clearTimeout(c)
    }, [e]), e ? g.jsxs("div", {
        className: "topbar",
        children: [a && i ? g.jsx("button", {
            type: "button",
            className: "topbar-btn topbar-heart",
            onClick: t,
            title: "Mở trái tim",
            "aria-label": "Mở trái tim",
            children: g.jsx("img", {
                src: "./assets/ui/btn-heart.webp",
                alt: "",
                draggable: !1
            })
        }) : null, o && i ? g.jsx("button", {
            type: "button",
            className: "topbar-btn topbar-letter",
            onClick: n,
            title: "Mở lá thư",
            "aria-label": "Mở lá thư",
            children: g.jsx("img", {
                src: "./assets/nguyet-thu/btn-letter.webp",
                alt: "",
                draggable: !1
            })
        }) : null, g.jsx("button", {
            type: "button",
            className: "topbar-btn topbar-music",
            onClick: Eo,
            title: r ? "Tắt nhạc" : "Bật nhạc",
            "aria-label": "Bật hoặc tắt nhạc",
            children: g.jsxs("svg", {
                viewBox: "0 0 24 24",
                width: "26",
                height: "26",
                fill: "none",
                stroke: "#fff",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [g.jsx("path", {
                    d: "M11 5 6 9H2v6h4l5 4z"
                }), r ? g.jsxs(g.Fragment, {
                    children: [g.jsx("path", {
                        d: "M15.5 8.5a5 5 0 0 1 0 7"
                    }), g.jsx("path", {
                        d: "M18.5 5.5a9 9 0 0 1 0 13"
                    })]
                }) : g.jsxs(g.Fragment, {
                    children: [g.jsx("path", {
                        d: "m17 9 5 6"
                    }), g.jsx("path", {
                        d: "m22 9-5 6"
                    })]
                })]
            })
        })]
    }) : null
}
const hn = {
    dangTai: {
        icon: "🌕",
        tieuDe: "Đang mở thiệp…",
        mo: "Chờ một chút, trăng đang lên."
    },
    expired: {
        icon: "🍂",
        tieuDe: "Thiệp này đã hết hạn",
        mo: "Người gửi có thể gia hạn để mở lại."
    },
    payment_required: {
        icon: "🏮",
        tieuDe: "Thiệp chưa được kích hoạt",
        mo: "Đơn hàng của thiệp này chưa hoàn tất thanh toán."
    },
    not_found: {
        icon: "🐰",
        tieuDe: "Không tìm thấy thiệp",
        mo: "Đường dẫn có thể đã sai hoặc thiệp đã bị gỡ."
    },
    loi: {
        icon: "☁️",
        tieuDe: "Không tải được thiệp",
        mo: "Kiểm tra kết nối rồi thử lại."
    }
};

function dn({
    loai: e,
    thongDiep: t,
    onThuLai: n,
    linkTao: a
}) {
    const o = hn[e] || hn.loi,
        r = e === "dangTai";
    return g.jsx("div", {
        className: r ? "mtb mtb-tai" : "mtb",
        role: r ? "status" : "alert",
        children: g.jsxs("div", {
            className: "mtb-hop",
            children: [g.jsx("div", {
                className: "mtb-icon",
                "aria-hidden": "true",
                children: o.icon
            }), g.jsx("h1", {
                className: "mtb-tieude",
                children: o.tieuDe
            }), g.jsx("p", {
                className: "mtb-mo",
                children: t || o.mo
            }), r ? null : g.jsxs("div", {
                className: "mtb-nut",
                children: [n ? g.jsx("button", {
                    type: "button",
                    className: "mtb-btn",
                    onClick: n,
                    children: "Thử lại"
                }) : null, a ? g.jsx("a", {
                    className: "mtb-btn mtb-btn-phu",
                    href: a,
                    children: "Tạo thiệp của bạn"
                }) : null]
            })]
        })
    })
}
const mn = {
        messages: ["Trung Thu vui vẻ", "Trăng sáng đoàn viên", "Trung Thu an lành", "Đêm trăng hạnh phúc", "Trăng rằm sum vầy", "25/09/2026", "Happy Mid-Autumn Festival"],
        images: []
    },
    Fo = 20,
    _o = 10;

function yt(e, t = "") {
    return typeof e == "string" ? e : t
}

function pn(e, t) {
    return Array.isArray(e) ? e.filter(n => typeof n == "string" && n.trim()).map(n => n.trim()).slice(0, t) : []
}

function zo() {
    return {
        enableLetter: !0,
        enableHeart: !0,
        flyingTexts: mn.messages.slice(),
        flyingImages: [],
        couplePhoto: "./assets/couple/couple.webp",
        letter: {
            text: jt.paragraphs.join(`
`)
        },
        bgMusic: "./assets/music/bongtrang.mp3",
        palette: "hong",
        showWatermark: !1
    }
}

function gn(e) {
    var c;
    const t = e && typeof e == "object" ? e : {},
        n = me[t.palette] ? t.palette : "hong",
        a = pn(t.flyingTexts, Fo),
        o = pn(t.flyingImages, _o).map($t),
        r = $t(yt(t.couplePhoto)),
        s = yt((c = t.letter) == null ? void 0 : c.text).trim(),
        i = (t.enableLetter ?? !1) === !0 && s.length > 0,
        f = (t.enableHeart ?? !1) === !0 && r.length > 0;
    return {
        enableLetter: i,
        enableHeart: f,
        flyingTexts: a.length ? a : ["Trung thu vui vẻ"],
        flyingImages: o,
        couplePhoto: r,
        letter: {
            text: s
        },
        musicUrl: Bt(t.bgMusic) || Bt("musics/bongtrang.mp3"),
        palette: n,
        color: me[n].a,
        flyingHearts: t.flyingHearts === !0,
        showWatermark: t.showWatermark === !0,
        websiteId: yt(t.websiteId),
        expiresAt: t.expiresAt ?? null
    }
}
const No = 800,
    Do = 3300,
    yn = "/config.html",
    Oo = O.autostart || new URLSearchParams(location.search).get("demo") === "1";

function $o() {
    const [e, t] = h.useState({
        trangThai: "dangTai"
    }), [n, a] = h.useState(0);
    return h.useEffect(() => {
        let o = !0;
        return t({
            trangThai: "dangTai"
        }), ea().then(r => {
            if (o) {
                if (r.trangThai === "trong") {
                    if (!Oo) {
                        location.replace(yn);
                        return
                    }
                    t({
                        trangThai: "ok",
                        cauHinh: gn(zo()),
                        diaChi: r.diaChi,
                        mau: !0
                    });
                    return
                }
                if (r.trangThai === "ok" || r.trangThai === "preview") {
                    t({
                        trangThai: "ok",
                        cauHinh: gn(r.config && Object.keys(r.config).length ? r.config : zo()),
                        diaChi: r.diaChi,
                        preview: r.trangThai === "preview"
                    });
                    return
                }
                t({
                    trangThai: r.trangThai,
                    thongDiep: r.thongDiep,
                    diaChi: r.diaChi
                })
            }
        }), () => {
            o = !1
        }
    }, [n]), e.trangThai === "dangTai" ? g.jsx(dn, {
        loai: "dangTai"
    }) : e.trangThai !== "ok" ? g.jsx(dn, {
        loai: e.trangThai,
        thongDiep: e.thongDiep,
        onThuLai: e.trangThai === "loi" ? () => a(o => o + 1) : null,
        linkTao: yn
    }) : g.jsx(Bo, {
        cauHinh: e.cauHinh,
        diaChi: e.diaChi,
        preview: !!e.preview
    })
}

function Bo({
    cauHinh: e,
    diaChi: t,
    preview: n
}) {
    const a = n && (t == null ? void 0 : t.scene) || "",
        o = O.autostart || !!a,
        [r, s] = h.useState(o),
        [i, f] = h.useState(!1),
        [c, p] = h.useState(!1),
        l = h.useRef(null),
        u = h.useRef(null);
    h.useMemo(() => {
        ja(e.palette), Co(e.musicUrl)
    }, [e]);
    const [m, d] = h.useState(null), y = h.useMemo(() => ({
        fontName: "",
        color: e.color,
        messages: e.flyingTexts,
        flyingHearts: m ?? e.flyingHearts,
        images: e.flyingImages
    }), [e, m]), w = h.useMemo(() => Mn(e.letter), [e]);
    h.useEffect(() => {
        jo();
        let T = 0;
        const S = () => {
                T && (clearTimeout(T), T = 0)
            },
            P = E => {
                var D, A;
                fn(), (A = (D = E.target) == null ? void 0 : D.closest) != null && A.call(D, ".moon-hit") && (S(), T = setTimeout(() => {
                    T = 0, At()
                }, No))
            },
            R = () => fn();
        return window.addEventListener("pointerdown", P, !0), window.addEventListener("pointerup", S, !0), window.addEventListener("pointercancel", S, !0), window.addEventListener("touchend", R, !0), window.addEventListener("click", R, !0), () => {
            S(), window.removeEventListener("pointerdown", P, !0), window.removeEventListener("pointerup", S, !0), window.removeEventListener("pointercancel", S, !0), window.removeEventListener("touchend", R, !0), window.removeEventListener("click", R, !0)
        }
    }, []);
    const x = h.useCallback(() => {
        Ca(), s(!0), At(), e.enableHeart && Qa()
    }, [e.enableHeart]);
    h.useEffect(() => {
        if (!r) return;
        const T = window.matchMedia("(max-width: 767px)").matches,
            S = [];
        e.enableLetter && (S.push(T ? "./assets/nguyet-thu/paper-straight.webp" : "./assets/nguyet-thu/paper.webp"), S.push("./assets/nguyet-thu/rabbit-cloud.webp")), e.enableHeart && S.push("./assets/ui/btn-heart.webp", e.couplePhoto), S.filter(Boolean).forEach(P => {
            const R = new Image;
            R.src = P
        })
    }, [r, e]);
    const M = h.useCallback(() => {
            f(!0), Kt(!0)
        }, []),
        C = h.useCallback(() => {
            f(!1), Kt(!1)
        }, []),
        b = h.useCallback(() => {
            var T;
            (T = l.current) == null || T.call(l), p(!0)
        }, []);
    h.useEffect(() => {
        if (!r || !a) return;
        const T = setTimeout(() => {
            a === "letter" && e.enableLetter ? M() : a === "heart" && e.enableHeart && b()
        }, Do);
        return () => clearTimeout(T)
    }, [r, a, e, M, b]), h.useEffect(() => {
        if (!n) return;
        const T = S => {
            S.origin === window.location.origin && S.data && (S.data.type === "loverain:doi-mau" && Pa(S.data.palette), S.data.type === "loverain:tim-bay" && d(!!S.data.on))
        };
        return window.addEventListener("message", T), () => window.removeEventListener("message", T)
    }, [n]), h.useEffect(() => {
        if (!(!n || window.parent === window)) try {
            window.parent.postMessage({
                type: "loverain:canh",
                chuBay: r && !c
            }, window.location.origin)
        } catch {}
    }, [n, r, c]);
    const _ = !!(t != null && t.embed);
    return g.jsxs(g.Fragment, {
        children: [g.jsx(Ao, {
            content: y,
            started: r,
            goHeartRef: l,
            coupleImgRef: u
        }), e.enableHeart ? g.jsx("div", {
            id: "couple-wrap",
            className: c ? "on" : void 0,
            children: g.jsx("img", {
                id: "couple",
                ref: u,
                src: e.couplePhoto,
                alt: "",
                "aria-hidden": "true",
                draggable: !1
            })
        }) : null, g.jsx(Io, {
            visible: r,
            showHeart: e.enableHeart && !c,
            showLetter: e.enableLetter,
            onOpenHeart: b,
            onOpenLetter: M
        }), e.enableLetter ? g.jsx(ka, {
            open: i,
            onClose: C,
            onOpenHeart: b,
            showHeart: e.enableHeart && !c,
            noiDung: w
        }) : null, n && !_ ? g.jsx("div", {
            className: "nhan-xemthu",
            children: "Chế độ xem thử"
        }) : null, e.showWatermark && !1 ? g.jsxs("a", {
            className: "dau-dlove",
            href: "#",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Tạo món quà của bạn tại DLove.vn",
            children: [g.jsx("img", {
                src: "./assets/ui/logo-dlove.png",
                alt: "",
                width: "22",
                height: "24",
                draggable: !1
            }), g.jsx("span", {
                children: "DLove.vn"
            })]
        }) : null, g.jsx(xa, {
            onStart: x,
            skip: o
        })]
    })
}
bn() && document.documentElement.classList.add("giam-chuyen-dong");
sa(document.getElementById("root")).render(g.jsx(h.StrictMode, {
    children: g.jsx($o, {})
}));
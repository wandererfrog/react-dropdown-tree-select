!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react')))
    : 'function' == typeof define && define.amd
    ? define('ReactDropdownTreeSelect', ['react'], t)
    : 'object' == typeof exports
    ? (exports.ReactDropdownTreeSelect = t(require('react')))
    : (e.ReactDropdownTreeSelect = t(e.React))
})(this, function(e) {
  return (function(e) {
    var t = {}
    function n(o) {
      if (t[o]) return t[o].exports
      var r = (t[o] = { i: o, l: !1, exports: {} })
      return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o })
      }),
      (n.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var o = Object.create(null)
        if ((n.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var r in e)
            n.d(
              o,
              r,
              function(t) {
                return e[t]
              }.bind(null, r)
            )
        return o
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return n.d(t, 'a', t), t
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (n.p = ''),
      n((n.s = 11))
    )
  })([
    function(e, t, n) {
      e.exports = n(5)()
    },
    function(t, n) {
      t.exports = e
    },
    function(e, t, n) {
      var o
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      !(function() {
        'use strict'
        var n = {}.hasOwnProperty
        function r() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var o = arguments[t]
            if (o) {
              var a = typeof o
              if ('string' === a || 'number' === a) e.push(o)
              else if (Array.isArray(o) && o.length) {
                var i = r.apply(null, o)
                i && e.push(i)
              } else if ('object' === a) for (var l in o) n.call(o, l) && o[l] && e.push(l)
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (o = function() {
                return r
              }.apply(t, [])) || (e.exports = o)
      })()
    },
    function(e, t, n) {
      var o
      ;(o = function(e) {
        return (function(e) {
          var t = {}
          function n(o) {
            if (t[o]) return t[o].exports
            var r = (t[o] = { exports: {}, id: o, loaded: !1 })
            return e[o].call(r.exports, r, r.exports, n), (r.loaded = !0), r.exports
          }
          return (n.m = e), (n.c = t), (n.p = ''), n(0)
        })([
          function(e, t, n) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 })
            var o =
                Object.assign ||
                function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t]
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                  }
                  return e
                },
              r = (function() {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n]
                    ;(o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      'value' in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o)
                  }
                }
                return function(t, n, o) {
                  return n && e(t.prototype, n), o && e(t, o), t
                }
              })(),
              a = function(e, t, n) {
                for (var o = !0; o; ) {
                  var r = e,
                    a = t,
                    i = n
                  ;(o = !1), null === r && (r = Function.prototype)
                  var l = Object.getOwnPropertyDescriptor(r, a)
                  if (void 0 !== l) {
                    if ('value' in l) return l.value
                    var s = l.get
                    if (void 0 === s) return
                    return s.call(i)
                  }
                  var c = Object.getPrototypeOf(r)
                  if (null === c) return
                  ;(e = c), (t = a), (n = i), (o = !0), (l = c = void 0)
                }
              }
            function i(e) {
              return e && e.__esModule ? e : { default: e }
            }
            var l = n(8),
              s = i(l),
              c = i(n(6)),
              u = i(n(2)),
              d = n(1),
              h = (function(e) {
                function t(e) {
                  !(function(e, t) {
                    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
                  })(this, t),
                    a(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this),
                    (this.state = {
                      showLoader: !1,
                      lastScrollTop: 0,
                      actionTriggered: !1,
                      pullToRefreshThresholdBreached: !1,
                    }),
                    (this.startY = 0),
                    (this.currentY = 0),
                    (this.dragging = !1),
                    (this.maxPullDownDistance = 0),
                    (this.onScrollListener = this.onScrollListener.bind(this)),
                    (this.throttledOnScrollListener = (0, u.default)(this.onScrollListener, 150).bind(this)),
                    (this.onStart = this.onStart.bind(this)),
                    (this.onMove = this.onMove.bind(this)),
                    (this.onEnd = this.onEnd.bind(this)),
                    (this.getScrollableTarget = this.getScrollableTarget.bind(this))
                }
                return (
                  (function(e, t) {
                    if ('function' != typeof t && null !== t)
                      throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
                    ;(e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                    })),
                      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
                  })(t, l.Component),
                  r(t, [
                    {
                      key: 'componentDidMount',
                      value: function() {
                        if (
                          ((this._scrollableNode = this.getScrollableTarget()),
                          (this.el = this.props.height ? this._infScroll : this._scrollableNode || window),
                          this.el.addEventListener('scroll', this.throttledOnScrollListener),
                          'number' == typeof this.props.initialScrollY &&
                            this.el.scrollHeight > this.props.initialScrollY &&
                            this.el.scrollTo(0, this.props.initialScrollY),
                          this.props.pullDownToRefresh &&
                            (this.el.addEventListener('touchstart', this.onStart),
                            this.el.addEventListener('touchmove', this.onMove),
                            this.el.addEventListener('touchend', this.onEnd),
                            this.el.addEventListener('mousedown', this.onStart),
                            this.el.addEventListener('mousemove', this.onMove),
                            this.el.addEventListener('mouseup', this.onEnd),
                            (this.maxPullDownDistance = this._pullDown.firstChild.getBoundingClientRect().height),
                            this.forceUpdate(),
                            'function' != typeof this.props.refreshFunction))
                        )
                          throw new Error(
                            'Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\''
                          )
                      },
                    },
                    {
                      key: 'componentWillUnmount',
                      value: function() {
                        this.el.removeEventListener('scroll', this.throttledOnScrollListener),
                          this.props.pullDownToRefresh &&
                            (this.el.removeEventListener('touchstart', this.onStart),
                            this.el.removeEventListener('touchmove', this.onMove),
                            this.el.removeEventListener('touchend', this.onEnd),
                            this.el.removeEventListener('mousedown', this.onStart),
                            this.el.removeEventListener('mousemove', this.onMove),
                            this.el.removeEventListener('mouseup', this.onEnd))
                      },
                    },
                    {
                      key: 'componentWillReceiveProps',
                      value: function(e) {
                        ;(this.props.key === e.key && this.props.dataLength === e.dataLength) ||
                          this.setState({ showLoader: !1, actionTriggered: !1, pullToRefreshThresholdBreached: !1 })
                      },
                    },
                    {
                      key: 'getScrollableTarget',
                      value: function() {
                        return this.props.scrollableTarget instanceof HTMLElement
                          ? this.props.scrollableTarget
                          : 'string' == typeof this.props.scrollableTarget
                          ? document.getElementById(this.props.scrollableTarget)
                          : (null === this.props.scrollableTarget &&
                              console.warn(
                                'You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '
                              ),
                            null)
                      },
                    },
                    {
                      key: 'onStart',
                      value: function(e) {
                        this.state.lastScrollTop ||
                          ((this.dragging = !0),
                          (this.startY = e.pageY || e.touches[0].pageY),
                          (this.currentY = this.startY),
                          (this._infScroll.style.willChange = 'transform'),
                          (this._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'))
                      },
                    },
                    {
                      key: 'onMove',
                      value: function(e) {
                        this.dragging &&
                          ((this.currentY = e.pageY || e.touches[0].pageY),
                          this.currentY < this.startY ||
                            (this.currentY - this.startY >= this.props.pullDownToRefreshThreshold &&
                              this.setState({ pullToRefreshThresholdBreached: !0 }),
                            this.currentY - this.startY > 1.5 * this.maxPullDownDistance ||
                              ((this._infScroll.style.overflow = 'visible'),
                              (this._infScroll.style.transform =
                                'translate3d(0px, ' + (this.currentY - this.startY) + 'px, 0px)'))))
                      },
                    },
                    {
                      key: 'onEnd',
                      value: function(e) {
                        var t = this
                        ;(this.startY = 0),
                          (this.currentY = 0),
                          (this.dragging = !1),
                          this.state.pullToRefreshThresholdBreached &&
                            this.props.refreshFunction &&
                            this.props.refreshFunction(),
                          requestAnimationFrame(function() {
                            t._infScroll &&
                              ((t._infScroll.style.overflow = 'auto'),
                              (t._infScroll.style.transform = 'none'),
                              (t._infScroll.style.willChange = 'none'))
                          })
                      },
                    },
                    {
                      key: 'isElementAtBottom',
                      value: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? 0.8 : arguments[1],
                          n =
                            e === document.body || e === document.documentElement
                              ? window.screen.availHeight
                              : e.clientHeight,
                          o = (0, d.parseThreshold)(t)
                        return o.unit === d.ThresholdUnits.Pixel
                          ? e.scrollTop + n >= e.scrollHeight - o.value
                          : e.scrollTop + n >= (o.value / 100) * e.scrollHeight
                      },
                    },
                    {
                      key: 'onScrollListener',
                      value: function(e) {
                        var t = this
                        'function' == typeof this.props.onScroll &&
                          setTimeout(function() {
                            return t.props.onScroll(e)
                          }, 0)
                        var n =
                          this.props.height || this._scrollableNode
                            ? e.target
                            : document.documentElement.scrollTop
                            ? document.documentElement
                            : document.body
                        this.state.actionTriggered ||
                          (this.isElementAtBottom(n, this.props.scrollThreshold) &&
                            this.props.hasMore &&
                            (this.setState({ actionTriggered: !0, showLoader: !0 }), this.props.next()),
                          this.setState({ lastScrollTop: n.scrollTop }))
                      },
                    },
                    {
                      key: 'render',
                      value: function() {
                        var e = this,
                          t = o(
                            { height: this.props.height || 'auto', overflow: 'auto', WebkitOverflowScrolling: 'touch' },
                            this.props.style
                          ),
                          n = this.props.hasChildren || !(!this.props.children || !this.props.children.length),
                          r = this.props.pullDownToRefresh && this.props.height ? { overflow: 'auto' } : {}
                        return s.default.createElement(
                          'div',
                          { style: r },
                          s.default.createElement(
                            'div',
                            {
                              className: 'infinite-scroll-component ' + (this.props.className || ''),
                              ref: function(t) {
                                return (e._infScroll = t)
                              },
                              style: t,
                            },
                            this.props.pullDownToRefresh &&
                              s.default.createElement(
                                'div',
                                {
                                  style: { position: 'relative' },
                                  ref: function(t) {
                                    return (e._pullDown = t)
                                  },
                                },
                                s.default.createElement(
                                  'div',
                                  {
                                    style: {
                                      position: 'absolute',
                                      left: 0,
                                      right: 0,
                                      top: -1 * this.maxPullDownDistance,
                                    },
                                  },
                                  !this.state.pullToRefreshThresholdBreached && this.props.pullDownToRefreshContent,
                                  this.state.pullToRefreshThresholdBreached && this.props.releaseToRefreshContent
                                )
                              ),
                            this.props.children,
                            !this.state.showLoader && !n && this.props.hasMore && this.props.loader,
                            this.state.showLoader && this.props.hasMore && this.props.loader,
                            !this.props.hasMore && this.props.endMessage
                          )
                        )
                      },
                    },
                  ]),
                  t
                )
              })()
            ;(t.default = h),
              (h.defaultProps = {
                pullDownToRefreshContent: s.default.createElement('h3', null, 'Pull down to refresh'),
                releaseToRefreshContent: s.default.createElement('h3', null, 'Release to refresh'),
                pullDownToRefreshThreshold: 100,
                disableBrowserPullToRefresh: !0,
              }),
              (h.propTypes = {
                next: c.default.func,
                hasMore: c.default.bool,
                children: c.default.node,
                loader: c.default.node.isRequired,
                scrollThreshold: c.default.oneOfType([c.default.number, c.default.string]),
                endMessage: c.default.node,
                style: c.default.object,
                height: c.default.number,
                scrollableTarget: c.default.node,
                hasChildren: c.default.bool,
                pullDownToRefresh: c.default.bool,
                pullDownToRefreshContent: c.default.node,
                releaseToRefreshContent: c.default.node,
                pullDownToRefreshThreshold: c.default.number,
                refreshFunction: c.default.func,
                onScroll: c.default.func,
                dataLength: c.default.number.isRequired,
                key: c.default.string,
              }),
              (e.exports = t.default)
          },
          function(e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.parseThreshold = function(e) {
                if ('number' == typeof e) return { unit: n.Percent, value: 100 * e }
                if ('string' == typeof e)
                  return e.match(/^(\d*(\.\d+)?)px$/)
                    ? { unit: n.Pixel, value: parseFloat(e) }
                    : e.match(/^(\d*(\.\d+)?)%$/)
                    ? { unit: n.Percent, value: parseFloat(e) }
                    : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), o)
                return console.warn('scrollThreshold should be string or number'), o
              })
            var n = { Pixel: 'Pixel', Percent: 'Percent' }
            t.ThresholdUnits = n
            var o = { unit: n.Percent, value: 0.8 }
          },
          function(e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function(e, t, n) {
                var o, r
                return (
                  t || (t = 250),
                  function() {
                    var a = n || this,
                      i = +new Date(),
                      l = arguments
                    o && i < o + t
                      ? (clearTimeout(r),
                        (r = setTimeout(function() {
                          ;(o = i), e.apply(a, l)
                        }, t)))
                      : ((o = i), e.apply(a, l))
                  }
                )
              }),
              (e.exports = t.default)
          },
          function(e, t) {
            'use strict'
            function n(e) {
              return function() {
                return e
              }
            }
            var o = function() {}
            ;(o.thatReturns = n),
              (o.thatReturnsFalse = n(!1)),
              (o.thatReturnsTrue = n(!0)),
              (o.thatReturnsNull = n(null)),
              (o.thatReturnsThis = function() {
                return this
              }),
              (o.thatReturnsArgument = function(e) {
                return e
              }),
              (e.exports = o)
          },
          function(e, t, n) {
            'use strict'
            var o = function(e) {}
            e.exports = function(e, t, n, r, a, i, l, s) {
              if ((o(t), !e)) {
                var c
                if (void 0 === t)
                  c = new Error(
                    'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
                  )
                else {
                  var u = [n, r, a, i, l, s],
                    d = 0
                  ;(c = new Error(
                    t.replace(/%s/g, function() {
                      return u[d++]
                    })
                  )).name = 'Invariant Violation'
                }
                throw ((c.framesToPop = 1), c)
              }
            }
          },
          function(e, t, n) {
            'use strict'
            var o = n(3),
              r = n(4),
              a = n(7)
            e.exports = function() {
              function e(e, t, n, o, i, l) {
                l !== a &&
                  r(
                    !1,
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                  )
              }
              function t() {
                return e
              }
              e.isRequired = e
              var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
              }
              return (n.checkPropTypes = o), (n.PropTypes = n), n
            }
          },
          function(e, t, n) {
            e.exports = n(5)()
          },
          function(e, t) {
            'use strict'
            e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
          },
          function(t, n) {
            t.exports = e
          },
        ])
      }),
        (e.exports = o(n(1)))
    },
    function(e, t, n) {
      'use strict'
      e.exports = function(e, t) {
        var n = e.filter(t)
        return 0 !== n.length && n.length !== e.length
      }
    },
    function(e, t, n) {
      'use strict'
      var o = n(6)
      function r() {}
      function a() {}
      ;(a.resetWarningCache = r),
        (e.exports = function() {
          function e(e, t, n, r, a, i) {
            if (i !== o) {
              var l = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              )
              throw ((l.name = 'Invariant Violation'), l)
            }
          }
          function t() {
            return e
          }
          e.isRequired = e
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: r,
          }
          return (n.PropTypes = n), n
        })
    },
    function(e, t, n) {
      'use strict'
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
    },
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {
      'use strict'
      n.r(t)
      var o = n(0),
        r = n.n(o),
        a = n(1),
        i = n.n(a),
        l = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object.keys(e).reduce(function(t, n) {
            var o
            return (t['data-' + ((o = n), o.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase())] = e[n]), t
          }, {})
        },
        s = ((function() {})(),
        function(e) {
          return !e || (Array.isArray(e) && !e.length)
        }),
        c = function(e, t) {
          return (
            e instanceof Event &&
            !(function(e) {
              if (e.path) return e.path
              for (var t = e.target, n = [t]; t.parentElement; ) (t = t.parentElement), n.unshift(t)
              return n
            })(e).some(function(e) {
              return e === t
            })
          )
        },
        u = function(e, t) {
          var n = void 0
          return function() {
            for (var o = arguments.length, r = Array(o), a = 0; a < o; a++) r[a] = arguments[a]
            var i = !n
            clearTimeout(n),
              (n = setTimeout(function() {
                ;(n = null), e.apply(void 0, r)
              }, t)),
              i && e.apply(void 0, r)
          }
        },
        d = (function(e) {
          var t = 1,
            n = new WeakMap()
          return {
            get: function(o) {
              return n.has(o) || n.set(o, t++), '' + e + n.get(o)
            },
            reset: function() {
              ;(n = new WeakMap()), (t = 1)
            },
          }
        })('rdts')
      function h(e, t) {
        var n = (function(e) {
          if (!e) return {}
          if ('#' === e[0]) return { 'aria-labelledby': e.substring(1).replace(/ #/g, ' ') }
          return { 'aria-label': e }
        })(e)
        return t && (n['aria-labelledby'] = ((n['aria-labelledby'] || '') + ' ' + t).trim()), n
      }
      var p =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          },
        f = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
          }
        })()
      var g = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var n = (function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
          return (
            (n.handleInputChange = function(e) {
              e.persist(), n.delayedCallback(e)
            }),
            (n.delayedCallback = u(function(e) {
              return n.props.onInputChange(e.target.value)
            }, 300)),
            n
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, a['PureComponent']),
          f(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.inputRef,
                  n = e.texts,
                  o = void 0 === n ? {} : n,
                  r = e.onFocus,
                  a = e.onBlur,
                  l = e.disabled,
                  s = e.readOnly,
                  c = e.onKeyDown,
                  u = e.activeDescendant
                return i.a.createElement(
                  'input',
                  p(
                    {
                      type: 'text',
                      disabled: l,
                      ref: t,
                      className: 'search',
                      placeholder: o.placeholder || 'Choose...',
                      onKeyDown: c,
                      onChange: this.handleInputChange,
                      onFocus: r,
                      onBlur: a,
                      readOnly: s,
                      'aria-activedescendant': u,
                      'aria-autocomplete': c ? 'list' : void 0,
                    },
                    h(o.label)
                  )
                )
              },
            },
          ]),
          t
        )
      })()
      g.propTypes = {
        tags: r.a.array,
        texts: r.a.object,
        onInputChange: r.a.func,
        onFocus: r.a.func,
        onBlur: r.a.func,
        onTagRemove: r.a.func,
        onKeyDown: r.a.func,
        inputRef: r.a.func,
        disabled: r.a.bool,
        readOnly: r.a.bool,
        activeDescendant: r.a.string,
        inlineSearchInput: r.a.bool,
      }
      var v = g,
        m = (n(7),
        (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
          }
        })())
      function b(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var y = function(e) {
          return e + '_tag'
        },
        w = (function(e) {
          function t() {
            var e, n, o
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            for (var r = arguments.length, a = Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (n = o = b(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
              (o.handleClick = function(e) {
                var t = o.props,
                  n = t.id,
                  r = t.onDelete
                e.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), r(n, void 0 !== (e.key || e.keyCode))
              }),
              (o.onKeyDown = function(e) {
                'Backspace' === e.key && (o.handleClick(e), e.preventDefault())
              }),
              (o.onKeyUp = function(e) {
                ;(32 === e.keyCode || ['Delete', 'Enter'].indexOf(e.key) > -1) && (o.handleClick(e), e.preventDefault())
              }),
              b(o, n)
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, a['PureComponent']),
            m(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.id,
                    n = e.label,
                    o = e.labelRemove,
                    r = void 0 === o ? 'Remove' : o,
                    a = e.readOnly,
                    l = e.disabled,
                    s = y(t),
                    c = t + '_button',
                    u = ['tag-remove', a && 'readOnly', l && 'disabled'].filter(Boolean).join(' '),
                    d = a || l
                  return i.a.createElement(
                    'span',
                    { className: 'tag', id: s, 'aria-label': n },
                    n,
                    i.a.createElement(
                      'button',
                      {
                        id: c,
                        onClick: d ? void 0 : this.handleClick,
                        onKeyDown: d ? void 0 : this.onKeyDown,
                        onKeyUp: d ? void 0 : this.onKeyUp,
                        className: u,
                        type: 'button',
                        'aria-label': r,
                        'aria-labelledby': c + ' ' + s,
                        'aria-disabled': d,
                      },
                      'x'
                    )
                  )
                },
              },
            ]),
            t
          )
        })()
      w.propTypes = {
        id: r.a.string.isRequired,
        label: r.a.string.isRequired,
        onDelete: r.a.func,
        readOnly: r.a.bool,
        disabled: r.a.bool,
        labelRemove: r.a.string,
      }
      var O = w
      /**!
       * Sortable 1.10.1
       * @author	RubaXa   <trash@rubaxa.org>
       * @author	owenm    <owen23355@gmail.com>
       * @license MIT
       */ function _(e) {
        return (_ =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function S(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function T() {
        return (T =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          }).apply(this, arguments)
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n)
          'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              })
            )),
            o.forEach(function(t) {
              S(e, t, n[t])
            })
        }
        return e
      }
      function C(e, t) {
        if (null == e) return {}
        var n,
          o,
          r = (function(e, t) {
            if (null == e) return {}
            var n,
              o,
              r = {},
              a = Object.keys(e)
            for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (o = 0; o < a.length; o++)
            (n = a[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]))
        }
        return r
      }
      function k(e) {
        if ('undefined' != typeof window && window.navigator) return !!navigator.userAgent.match(e)
      }
      var P = k(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
        x = k(/Edge/i),
        D = k(/firefox/i),
        N = k(/safari/i) && !k(/chrome/i) && !k(/android/i),
        I = k(/iP(ad|od|hone)/i),
        j = k(/chrome/i) && k(/android/i),
        M = { capture: !1, passive: !1 }
      function R(e, t, n) {
        e.addEventListener(t, n, !P && M)
      }
      function A(e, t, n) {
        e.removeEventListener(t, n, !P && M)
      }
      function F(e, t) {
        if (t) {
          if (('>' === t[0] && (t = t.substring(1)), e))
            try {
              if (e.matches) return e.matches(t)
              if (e.msMatchesSelector) return e.msMatchesSelector(t)
              if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t)
            } catch (e) {
              return !1
            }
          return !1
        }
      }
      function L(e) {
        return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode
      }
      function B(e, t, n, o) {
        if (e) {
          n = n || document
          do {
            if ((null != t && ('>' === t[0] ? e.parentNode === n && F(e, t) : F(e, t))) || (o && e === n)) return e
            if (e === n) break
          } while ((e = L(e)))
        }
        return null
      }
      var Y,
        H = /\s+/g
      function X(e, t, n) {
        if (e && t)
          if (e.classList) e.classList[n ? 'add' : 'remove'](t)
          else {
            var o = (' ' + e.className + ' ').replace(H, ' ').replace(' ' + t + ' ', ' ')
            e.className = (o + (n ? ' ' + t : '')).replace(H, ' ')
          }
      }
      function V(e, t, n) {
        var o = e && e.style
        if (o) {
          if (void 0 === n)
            return (
              document.defaultView && document.defaultView.getComputedStyle
                ? (n = document.defaultView.getComputedStyle(e, ''))
                : e.currentStyle && (n = e.currentStyle),
              void 0 === t ? n : n[t]
            )
          t in o || -1 !== t.indexOf('webkit') || (t = '-webkit-' + t), (o[t] = n + ('string' == typeof n ? '' : 'px'))
        }
      }
      function W(e, t) {
        var n = ''
        if ('string' == typeof e) n = e
        else
          do {
            var o = V(e, 'transform')
            o && 'none' !== o && (n = o + ' ' + n)
          } while (!t && (e = e.parentNode))
        var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix
        return r && new r(n)
      }
      function K(e, t, n) {
        if (e) {
          var o = e.getElementsByTagName(t),
            r = 0,
            a = o.length
          if (n) for (; r < a; r++) n(o[r], r)
          return o
        }
        return []
      }
      function U() {
        return P ? document.documentElement : document.scrollingElement
      }
      function z(e, t, n, o, r) {
        if (e.getBoundingClientRect || e === window) {
          var a, i, l, s, c, u, d
          if (
            (e !== window && e !== U()
              ? ((i = (a = e.getBoundingClientRect()).top),
                (l = a.left),
                (s = a.bottom),
                (c = a.right),
                (u = a.height),
                (d = a.width))
              : ((i = 0),
                (l = 0),
                (s = window.innerHeight),
                (c = window.innerWidth),
                (u = window.innerHeight),
                (d = window.innerWidth)),
            (t || n) && e !== window && ((r = r || e.parentNode), !P))
          )
            do {
              if (
                r &&
                r.getBoundingClientRect &&
                ('none' !== V(r, 'transform') || (n && 'static' !== V(r, 'position')))
              ) {
                var h = r.getBoundingClientRect()
                ;(i -= h.top + parseInt(V(r, 'border-top-width'))),
                  (l -= h.left + parseInt(V(r, 'border-left-width'))),
                  (s = i + a.height),
                  (c = l + a.width)
                break
              }
            } while ((r = r.parentNode))
          if (o && e !== window) {
            var p = W(r || e),
              f = p && p.a,
              g = p && p.d
            p && ((s = (i /= g) + (u /= g)), (c = (l /= f) + (d /= f)))
          }
          return { top: i, left: l, bottom: s, right: c, width: d, height: u }
        }
      }
      function q(e, t, n) {
        for (var o = Q(e, !0), r = z(e)[t]; o; ) {
          var a = z(o)[n]
          if (!('top' === n || 'left' === n ? r >= a : r <= a)) return o
          if (o === U()) break
          o = Q(o, !1)
        }
        return !1
      }
      function G(e, t, n) {
        for (var o = 0, r = 0, a = e.children; r < a.length; ) {
          if (
            'none' !== a[r].style.display &&
            a[r] !== nt.ghost &&
            a[r] !== nt.dragged &&
            B(a[r], n.draggable, e, !1)
          ) {
            if (o === t) return a[r]
            o++
          }
          r++
        }
        return null
      }
      function $(e, t) {
        for (var n = e.lastElementChild; n && (n === nt.ghost || 'none' === V(n, 'display') || (t && !F(n, t))); )
          n = n.previousElementSibling
        return n || null
      }
      function J(e, t) {
        var n = 0
        if (!e || !e.parentNode) return -1
        for (; (e = e.previousElementSibling); )
          'TEMPLATE' === e.nodeName.toUpperCase() || e === nt.clone || (t && !F(e, t)) || n++
        return n
      }
      function Z(e) {
        var t = 0,
          n = 0,
          o = U()
        if (e)
          do {
            var r = W(e),
              a = r.a,
              i = r.d
            ;(t += e.scrollLeft * a), (n += e.scrollTop * i)
          } while (e !== o && (e = e.parentNode))
        return [t, n]
      }
      function Q(e, t) {
        if (!e || !e.getBoundingClientRect) return U()
        var n = e,
          o = !1
        do {
          if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            var r = V(n)
            if (
              (n.clientWidth < n.scrollWidth && ('auto' == r.overflowX || 'scroll' == r.overflowX)) ||
              (n.clientHeight < n.scrollHeight && ('auto' == r.overflowY || 'scroll' == r.overflowY))
            ) {
              if (!n.getBoundingClientRect || n === document.body) return U()
              if (o || t) return n
              o = !0
            }
          }
        } while ((n = n.parentNode))
        return U()
      }
      function ee(e, t) {
        return (
          Math.round(e.top) === Math.round(t.top) &&
          Math.round(e.left) === Math.round(t.left) &&
          Math.round(e.height) === Math.round(t.height) &&
          Math.round(e.width) === Math.round(t.width)
        )
      }
      function te(e, t) {
        return function() {
          if (!Y) {
            var n = arguments
            1 === n.length ? e.call(this, n[0]) : e.apply(this, n),
              (Y = setTimeout(function() {
                Y = void 0
              }, t))
          }
        }
      }
      function ne(e, t, n) {
        ;(e.scrollLeft += t), (e.scrollTop += n)
      }
      function oe(e) {
        var t = window.Polymer,
          n = window.jQuery || window.Zepto
        return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0)
      }
      var re = 'Sortable' + new Date().getTime()
      function ae() {
        var e,
          t = []
        return {
          captureAnimationState: function() {
            ;((t = []), this.options.animation) &&
              [].slice.call(this.el.children).forEach(function(e) {
                if ('none' !== V(e, 'display') && e !== nt.ghost) {
                  t.push({ target: e, rect: z(e) })
                  var n = E({}, t[t.length - 1].rect)
                  if (e.thisAnimationDuration) {
                    var o = W(e, !0)
                    o && ((n.top -= o.f), (n.left -= o.e))
                  }
                  e.fromRect = n
                }
              })
          },
          addAnimationState: function(e) {
            t.push(e)
          },
          removeAnimationState: function(e) {
            t.splice(
              (function(e, t) {
                for (var n in e)
                  if (e.hasOwnProperty(n))
                    for (var o in t) if (t.hasOwnProperty(o) && t[o] === e[n][o]) return Number(n)
                return -1
              })(t, { target: e }),
              1
            )
          },
          animateAll: function(n) {
            var o = this
            if (!this.options.animation) return clearTimeout(e), void ('function' == typeof n && n())
            var r = !1,
              a = 0
            t.forEach(function(e) {
              var t = 0,
                n = e.target,
                i = n.fromRect,
                l = z(n),
                s = n.prevFromRect,
                c = n.prevToRect,
                u = e.rect,
                d = W(n, !0)
              d && ((l.top -= d.f), (l.left -= d.e)),
                (n.toRect = l),
                n.thisAnimationDuration &&
                  ee(s, l) &&
                  !ee(i, l) &&
                  (u.top - l.top) / (u.left - l.left) == (i.top - l.top) / (i.left - l.left) &&
                  (t = (function(e, t, n, o) {
                    return (
                      (Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) /
                        Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2))) *
                      o.animation
                    )
                  })(u, s, c, o.options)),
                ee(l, i) ||
                  ((n.prevFromRect = i), (n.prevToRect = l), t || (t = o.options.animation), o.animate(n, u, l, t)),
                t &&
                  ((r = !0),
                  (a = Math.max(a, t)),
                  clearTimeout(n.animationResetTimer),
                  (n.animationResetTimer = setTimeout(function() {
                    ;(n.animationTime = 0),
                      (n.prevFromRect = null),
                      (n.fromRect = null),
                      (n.prevToRect = null),
                      (n.thisAnimationDuration = null)
                  }, t)),
                  (n.thisAnimationDuration = t))
            }),
              clearTimeout(e),
              r
                ? (e = setTimeout(function() {
                    'function' == typeof n && n()
                  }, a))
                : 'function' == typeof n && n(),
              (t = [])
          },
          animate: function(e, t, n, o) {
            if (o) {
              V(e, 'transition', ''), V(e, 'transform', '')
              var r = W(this.el),
                a = r && r.a,
                i = r && r.d,
                l = (t.left - n.left) / (a || 1),
                s = (t.top - n.top) / (i || 1)
              ;(e.animatingX = !!l),
                (e.animatingY = !!s),
                V(e, 'transform', 'translate3d(' + l + 'px,' + s + 'px,0)'),
                (function(e) {
                  e.offsetWidth
                })(e),
                V(e, 'transition', 'transform ' + o + 'ms' + (this.options.easing ? ' ' + this.options.easing : '')),
                V(e, 'transform', 'translate3d(0,0,0)'),
                'number' == typeof e.animated && clearTimeout(e.animated),
                (e.animated = setTimeout(function() {
                  V(e, 'transition', ''),
                    V(e, 'transform', ''),
                    (e.animated = !1),
                    (e.animatingX = !1),
                    (e.animatingY = !1)
                }, o))
            }
          },
        }
      }
      var ie = [],
        le = { initializeByDefault: !0 },
        se = {
          mount: function(e) {
            for (var t in le) !le.hasOwnProperty(t) || t in e || (e[t] = le[t])
            ie.push(e)
          },
          pluginEvent: function(e, t, n) {
            var o = this
            ;(this.eventCanceled = !1),
              (n.cancel = function() {
                o.eventCanceled = !0
              })
            var r = e + 'Global'
            ie.forEach(function(o) {
              t[o.pluginName] &&
                (t[o.pluginName][r] && t[o.pluginName][r](E({ sortable: t }, n)),
                t.options[o.pluginName] && t[o.pluginName][e] && t[o.pluginName][e](E({ sortable: t }, n)))
            })
          },
          initializePlugins: function(e, t, n, o) {
            for (var r in (ie.forEach(function(o) {
              var r = o.pluginName
              if (e.options[r] || o.initializeByDefault) {
                var a = new o(e, t, e.options)
                ;(a.sortable = e), (a.options = e.options), (e[r] = a), T(n, a.defaults)
              }
            }),
            e.options))
              if (e.options.hasOwnProperty(r)) {
                var a = this.modifyOption(e, r, e.options[r])
                void 0 !== a && (e.options[r] = a)
              }
          },
          getEventProperties: function(e, t) {
            var n = {}
            return (
              ie.forEach(function(o) {
                'function' == typeof o.eventProperties && T(n, o.eventProperties.call(t[o.pluginName], e))
              }),
              n
            )
          },
          modifyOption: function(e, t, n) {
            var o
            return (
              ie.forEach(function(r) {
                e[r.pluginName] &&
                  r.optionListeners &&
                  'function' == typeof r.optionListeners[t] &&
                  (o = r.optionListeners[t].call(e[r.pluginName], n))
              }),
              o
            )
          },
        }
      function ce(e) {
        var t = e.sortable,
          n = e.rootEl,
          o = e.name,
          r = e.targetEl,
          a = e.cloneEl,
          i = e.toEl,
          l = e.fromEl,
          s = e.oldIndex,
          c = e.newIndex,
          u = e.oldDraggableIndex,
          d = e.newDraggableIndex,
          h = e.originalEvent,
          p = e.putSortable,
          f = e.extraEventProperties
        if ((t = t || (n && n[re]))) {
          var g,
            v = t.options,
            m = 'on' + o.charAt(0).toUpperCase() + o.substr(1)
          !window.CustomEvent || P || x
            ? (g = document.createEvent('Event')).initEvent(o, !0, !0)
            : (g = new CustomEvent(o, { bubbles: !0, cancelable: !0 })),
            (g.to = i || n),
            (g.from = l || n),
            (g.item = r || n),
            (g.clone = a),
            (g.oldIndex = s),
            (g.newIndex = c),
            (g.oldDraggableIndex = u),
            (g.newDraggableIndex = d),
            (g.originalEvent = h),
            (g.pullMode = p ? p.lastPutMode : void 0)
          var b = E({}, f, se.getEventProperties(o, t))
          for (var y in b) g[y] = b[y]
          n && n.dispatchEvent(g), v[m] && v[m].call(t, g)
        }
      }
      var ue = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = n.evt,
          r = C(n, ['evt'])
        se.pluginEvent.bind(nt)(
          e,
          t,
          E(
            {
              dragEl: he,
              parentEl: pe,
              ghostEl: fe,
              rootEl: ge,
              nextEl: ve,
              lastDownEl: me,
              cloneEl: be,
              cloneHidden: ye,
              dragStarted: Ie,
              putSortable: Ee,
              activeSortable: nt.active,
              originalEvent: o,
              oldIndex: we,
              oldDraggableIndex: _e,
              newIndex: Oe,
              newDraggableIndex: Se,
              hideGhostForTarget: Ze,
              unhideGhostForTarget: Qe,
              cloneNowHidden: function() {
                ye = !0
              },
              cloneNowShown: function() {
                ye = !1
              },
              dispatchSortableEvent: function(e) {
                de({ sortable: t, name: e, originalEvent: o })
              },
            },
            r
          )
        )
      }
      function de(e) {
        ce(
          E(
            {
              putSortable: Ee,
              cloneEl: be,
              targetEl: he,
              rootEl: ge,
              oldIndex: we,
              oldDraggableIndex: _e,
              newIndex: Oe,
              newDraggableIndex: Se,
            },
            e
          )
        )
      }
      var he,
        pe,
        fe,
        ge,
        ve,
        me,
        be,
        ye,
        we,
        Oe,
        _e,
        Se,
        Te,
        Ee,
        Ce,
        ke,
        Pe,
        xe,
        De,
        Ne,
        Ie,
        je,
        Me,
        Re,
        Ae,
        Fe = !1,
        Le = !1,
        Be = [],
        Ye = !1,
        He = !1,
        Xe = [],
        Ve = !1,
        We = [],
        Ke = 'undefined' != typeof document,
        Ue = I,
        ze = x || P ? 'cssFloat' : 'float',
        qe = Ke && !j && !I && 'draggable' in document.createElement('div'),
        Ge = (function() {
          if (Ke) {
            if (P) return !1
            var e = document.createElement('x')
            return (e.style.cssText = 'pointer-events:auto'), 'auto' === e.style.pointerEvents
          }
        })(),
        $e = function(e, t) {
          var n = V(e),
            o =
              parseInt(n.width) -
              parseInt(n.paddingLeft) -
              parseInt(n.paddingRight) -
              parseInt(n.borderLeftWidth) -
              parseInt(n.borderRightWidth),
            r = G(e, 0, t),
            a = G(e, 1, t),
            i = r && V(r),
            l = a && V(a),
            s = i && parseInt(i.marginLeft) + parseInt(i.marginRight) + z(r).width,
            c = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + z(a).width
          if ('flex' === n.display)
            return 'column' === n.flexDirection || 'column-reverse' === n.flexDirection ? 'vertical' : 'horizontal'
          if ('grid' === n.display) return n.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal'
          if (r && i.float && 'none' !== i.float) {
            var u = 'left' === i.float ? 'left' : 'right'
            return !a || ('both' !== l.clear && l.clear !== u) ? 'horizontal' : 'vertical'
          }
          return r &&
            ('block' === i.display ||
              'flex' === i.display ||
              'table' === i.display ||
              'grid' === i.display ||
              (s >= o && 'none' === n[ze]) ||
              (a && 'none' === n[ze] && s + c > o))
            ? 'vertical'
            : 'horizontal'
        },
        Je = function(e) {
          function t(e, n) {
            return function(o, r, a, i) {
              var l = o.options.group.name && r.options.group.name && o.options.group.name === r.options.group.name
              if (null == e && (n || l)) return !0
              if (null == e || !1 === e) return !1
              if (n && 'clone' === e) return e
              if ('function' == typeof e) return t(e(o, r, a, i), n)(o, r, a, i)
              var s = (n ? o : r).options.group.name
              return !0 === e || ('string' == typeof e && e === s) || (e.join && e.indexOf(s) > -1)
            }
          }
          var n = {},
            o = e.group
          ;(o && 'object' == _(o)) || (o = { name: o }),
            (n.name = o.name),
            (n.checkPull = t(o.pull, !0)),
            (n.checkPut = t(o.put)),
            (n.revertClone = o.revertClone),
            (e.group = n)
        },
        Ze = function() {
          !Ge && fe && V(fe, 'display', 'none')
        },
        Qe = function() {
          !Ge && fe && V(fe, 'display', '')
        }
      Ke &&
        document.addEventListener(
          'click',
          function(e) {
            if (Le)
              return (
                e.preventDefault(),
                e.stopPropagation && e.stopPropagation(),
                e.stopImmediatePropagation && e.stopImmediatePropagation(),
                (Le = !1),
                !1
              )
          },
          !0
        )
      var et = function(e) {
          if (he) {
            e = e.touches ? e.touches[0] : e
            var t = ((r = e.clientX),
            (a = e.clientY),
            Be.some(function(e) {
              if (!$(e)) {
                var t = z(e),
                  n = e[re].options.emptyInsertThreshold,
                  o = r >= t.left - n && r <= t.right + n,
                  l = a >= t.top - n && a <= t.bottom + n
                return n && o && l ? (i = e) : void 0
              }
            }),
            i)
            if (t) {
              var n = {}
              for (var o in e) e.hasOwnProperty(o) && (n[o] = e[o])
              ;(n.target = n.rootEl = t),
                (n.preventDefault = void 0),
                (n.stopPropagation = void 0),
                t[re]._onDragOver(n)
            }
          }
          var r, a, i
        },
        tt = function(e) {
          he && he.parentNode[re]._isOutsideThisEl(e.target)
        }
      function nt(e, t) {
        if (!e || !e.nodeType || 1 !== e.nodeType)
          throw 'Sortable: `el` must be an HTMLElement, not '.concat({}.toString.call(e))
        ;(this.el = e), (this.options = t = T({}, t)), (e[re] = this)
        var n = {
          group: null,
          sort: !0,
          disabled: !1,
          store: null,
          handle: null,
          draggable: /^[uo]l$/i.test(e.nodeName) ? '>li' : '>*',
          swapThreshold: 1,
          invertSwap: !1,
          invertedSwapThreshold: null,
          removeCloneOnHide: !0,
          direction: function() {
            return $e(e, this.options)
          },
          ghostClass: 'sortable-ghost',
          chosenClass: 'sortable-chosen',
          dragClass: 'sortable-drag',
          ignore: 'a, img',
          filter: null,
          preventOnFilter: !0,
          animation: 0,
          easing: null,
          setData: function(e, t) {
            e.setData('Text', t.textContent)
          },
          dropBubble: !1,
          dragoverBubble: !1,
          dataIdAttr: 'data-id',
          delay: 0,
          delayOnTouchOnly: !1,
          touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
          forceFallback: !1,
          fallbackClass: 'sortable-fallback',
          fallbackOnBody: !1,
          fallbackTolerance: 0,
          fallbackOffset: { x: 0, y: 0 },
          supportPointer: !1 !== nt.supportPointer && 'PointerEvent' in window,
          emptyInsertThreshold: 5,
        }
        for (var o in (se.initializePlugins(this, e, n), n)) !(o in t) && (t[o] = n[o])
        for (var r in (Je(t), this))
          '_' === r.charAt(0) && 'function' == typeof this[r] && (this[r] = this[r].bind(this))
        ;(this.nativeDraggable = !t.forceFallback && qe),
          this.nativeDraggable && (this.options.touchStartThreshold = 1),
          t.supportPointer
            ? R(e, 'pointerdown', this._onTapStart)
            : (R(e, 'mousedown', this._onTapStart), R(e, 'touchstart', this._onTapStart)),
          this.nativeDraggable && (R(e, 'dragover', this), R(e, 'dragenter', this)),
          Be.push(this.el),
          t.store && t.store.get && this.sort(t.store.get(this) || []),
          T(this, ae())
      }
      function ot(e, t, n, o, r, a, i, l) {
        var s,
          c,
          u = e[re],
          d = u.options.onMove
        return (
          !window.CustomEvent || P || x
            ? (s = document.createEvent('Event')).initEvent('move', !0, !0)
            : (s = new CustomEvent('move', { bubbles: !0, cancelable: !0 })),
          (s.to = t),
          (s.from = e),
          (s.dragged = n),
          (s.draggedRect = o),
          (s.related = r || t),
          (s.relatedRect = a || z(t)),
          (s.willInsertAfter = l),
          (s.originalEvent = i),
          e.dispatchEvent(s),
          d && (c = d.call(u, s, i)),
          c
        )
      }
      function rt(e) {
        e.draggable = !1
      }
      function at() {
        Ve = !1
      }
      function it(e) {
        for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, o = 0; n--; )
          o += t.charCodeAt(n)
        return o.toString(36)
      }
      function lt(e) {
        return setTimeout(e, 0)
      }
      function st(e) {
        return clearTimeout(e)
      }
      ;(nt.prototype = {
        constructor: nt,
        _isOutsideThisEl: function(e) {
          this.el.contains(e) || e === this.el || (je = null)
        },
        _getDirection: function(e, t) {
          return 'function' == typeof this.options.direction
            ? this.options.direction.call(this, e, t, he)
            : this.options.direction
        },
        _onTapStart: function(e) {
          if (e.cancelable) {
            var t = this,
              n = this.el,
              o = this.options,
              r = o.preventOnFilter,
              a = e.type,
              i = (e.touches && e.touches[0]) || (e.pointerType && 'touch' === e.pointerType && e),
              l = (i || e).target,
              s = (e.target.shadowRoot && ((e.path && e.path[0]) || (e.composedPath && e.composedPath()[0]))) || l,
              c = o.filter
            if (
              ((function(e) {
                We.length = 0
                var t = e.getElementsByTagName('input'),
                  n = t.length
                for (; n--; ) {
                  var o = t[n]
                  o.checked && We.push(o)
                }
              })(n),
              !he &&
                !(
                  (/mousedown|pointerdown/.test(a) && 0 !== e.button) ||
                  o.disabled ||
                  s.isContentEditable ||
                  ((l = B(l, o.draggable, n, !1)) && l.animated) ||
                  me === l
                ))
            ) {
              if (((we = J(l)), (_e = J(l, o.draggable)), 'function' == typeof c)) {
                if (c.call(this, e, l, this))
                  return (
                    de({ sortable: t, rootEl: s, name: 'filter', targetEl: l, toEl: n, fromEl: n }),
                    ue('filter', t, { evt: e }),
                    void (r && e.cancelable && e.preventDefault())
                  )
              } else if (
                c &&
                (c = c.split(',').some(function(o) {
                  if ((o = B(s, o.trim(), n, !1)))
                    return (
                      de({ sortable: t, rootEl: o, name: 'filter', targetEl: l, fromEl: n, toEl: n }),
                      ue('filter', t, { evt: e }),
                      !0
                    )
                }))
              )
                return void (r && e.cancelable && e.preventDefault())
              ;(o.handle && !B(s, o.handle, n, !1)) || this._prepareDragStart(e, i, l)
            }
          }
        },
        _prepareDragStart: function(e, t, n) {
          var o,
            r = this,
            a = r.el,
            i = r.options,
            l = a.ownerDocument
          if (n && !he && n.parentNode === a) {
            var s = z(n)
            if (
              ((ge = a),
              (pe = (he = n).parentNode),
              (ve = he.nextSibling),
              (me = n),
              (Te = i.group),
              (nt.dragged = he),
              (Ce = { target: he, clientX: (t || e).clientX, clientY: (t || e).clientY }),
              (De = Ce.clientX - s.left),
              (Ne = Ce.clientY - s.top),
              (this._lastX = (t || e).clientX),
              (this._lastY = (t || e).clientY),
              (he.style['will-change'] = 'all'),
              (o = function() {
                ue('delayEnded', r, { evt: e }),
                  nt.eventCanceled
                    ? r._onDrop()
                    : (r._disableDelayedDragEvents(),
                      !D && r.nativeDraggable && (he.draggable = !0),
                      r._triggerDragStart(e, t),
                      de({ sortable: r, name: 'choose', originalEvent: e }),
                      X(he, i.chosenClass, !0))
              }),
              i.ignore.split(',').forEach(function(e) {
                K(he, e.trim(), rt)
              }),
              R(l, 'dragover', et),
              R(l, 'mousemove', et),
              R(l, 'touchmove', et),
              R(l, 'mouseup', r._onDrop),
              R(l, 'touchend', r._onDrop),
              R(l, 'touchcancel', r._onDrop),
              D && this.nativeDraggable && ((this.options.touchStartThreshold = 4), (he.draggable = !0)),
              ue('delayStart', this, { evt: e }),
              !i.delay || (i.delayOnTouchOnly && !t) || (this.nativeDraggable && (x || P)))
            )
              o()
            else {
              if (nt.eventCanceled) return void this._onDrop()
              R(l, 'mouseup', r._disableDelayedDrag),
                R(l, 'touchend', r._disableDelayedDrag),
                R(l, 'touchcancel', r._disableDelayedDrag),
                R(l, 'mousemove', r._delayedDragTouchMoveHandler),
                R(l, 'touchmove', r._delayedDragTouchMoveHandler),
                i.supportPointer && R(l, 'pointermove', r._delayedDragTouchMoveHandler),
                (r._dragStartTimer = setTimeout(o, i.delay))
            }
          }
        },
        _delayedDragTouchMoveHandler: function(e) {
          var t = e.touches ? e.touches[0] : e
          Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >=
            Math.floor(this.options.touchStartThreshold / ((this.nativeDraggable && window.devicePixelRatio) || 1)) &&
            this._disableDelayedDrag()
        },
        _disableDelayedDrag: function() {
          he && rt(he), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
        },
        _disableDelayedDragEvents: function() {
          var e = this.el.ownerDocument
          A(e, 'mouseup', this._disableDelayedDrag),
            A(e, 'touchend', this._disableDelayedDrag),
            A(e, 'touchcancel', this._disableDelayedDrag),
            A(e, 'mousemove', this._delayedDragTouchMoveHandler),
            A(e, 'touchmove', this._delayedDragTouchMoveHandler),
            A(e, 'pointermove', this._delayedDragTouchMoveHandler)
        },
        _triggerDragStart: function(e, t) {
          ;(t = t || ('touch' == e.pointerType && e)),
            !this.nativeDraggable || t
              ? this.options.supportPointer
                ? R(document, 'pointermove', this._onTouchMove)
                : R(document, t ? 'touchmove' : 'mousemove', this._onTouchMove)
              : (R(he, 'dragend', this), R(ge, 'dragstart', this._onDragStart))
          try {
            document.selection
              ? lt(function() {
                  document.selection.empty()
                })
              : window.getSelection().removeAllRanges()
          } catch (e) {}
        },
        _dragStarted: function(e, t) {
          if (((Fe = !1), ge && he)) {
            ue('dragStarted', this, { evt: t }), this.nativeDraggable && R(document, 'dragover', tt)
            var n = this.options
            !e && X(he, n.dragClass, !1),
              X(he, n.ghostClass, !0),
              (nt.active = this),
              e && this._appendGhost(),
              de({ sortable: this, name: 'start', originalEvent: t })
          } else this._nulling()
        },
        _emulateDragOver: function() {
          if (ke) {
            ;(this._lastX = ke.clientX), (this._lastY = ke.clientY), Ze()
            for (
              var e = document.elementFromPoint(ke.clientX, ke.clientY), t = e;
              e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(ke.clientX, ke.clientY)) !== t;

            )
              t = e
            if ((he.parentNode[re]._isOutsideThisEl(e), t))
              do {
                if (t[re]) {
                  if (
                    t[re]._onDragOver({ clientX: ke.clientX, clientY: ke.clientY, target: e, rootEl: t }) &&
                    !this.options.dragoverBubble
                  )
                    break
                }
                e = t
              } while ((t = t.parentNode))
            Qe()
          }
        },
        _onTouchMove: function(e) {
          if (Ce) {
            var t = this.options,
              n = t.fallbackTolerance,
              o = t.fallbackOffset,
              r = e.touches ? e.touches[0] : e,
              a = fe && W(fe),
              i = fe && a && a.a,
              l = fe && a && a.d,
              s = Ue && Ae && Z(Ae),
              c = (r.clientX - Ce.clientX + o.x) / (i || 1) + (s ? s[0] - Xe[0] : 0) / (i || 1),
              u = (r.clientY - Ce.clientY + o.y) / (l || 1) + (s ? s[1] - Xe[1] : 0) / (l || 1)
            if (!nt.active && !Fe) {
              if (n && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < n) return
              this._onDragStart(e, !0)
            }
            if (fe) {
              a ? ((a.e += c - (Pe || 0)), (a.f += u - (xe || 0))) : (a = { a: 1, b: 0, c: 0, d: 1, e: c, f: u })
              var d = 'matrix('
                .concat(a.a, ',')
                .concat(a.b, ',')
                .concat(a.c, ',')
                .concat(a.d, ',')
                .concat(a.e, ',')
                .concat(a.f, ')')
              V(fe, 'webkitTransform', d),
                V(fe, 'mozTransform', d),
                V(fe, 'msTransform', d),
                V(fe, 'transform', d),
                (Pe = c),
                (xe = u),
                (ke = r)
            }
            e.cancelable && e.preventDefault()
          }
        },
        _appendGhost: function() {
          if (!fe) {
            var e = this.options.fallbackOnBody ? document.body : ge,
              t = z(he, !0, Ue, !0, e),
              n = this.options
            if (Ue) {
              for (Ae = e; 'static' === V(Ae, 'position') && 'none' === V(Ae, 'transform') && Ae !== document; )
                Ae = Ae.parentNode
              Ae !== document.body && Ae !== document.documentElement
                ? (Ae === document && (Ae = U()), (t.top += Ae.scrollTop), (t.left += Ae.scrollLeft))
                : (Ae = U()),
                (Xe = Z(Ae))
            }
            X((fe = he.cloneNode(!0)), n.ghostClass, !1),
              X(fe, n.fallbackClass, !0),
              X(fe, n.dragClass, !0),
              V(fe, 'transition', ''),
              V(fe, 'transform', ''),
              V(fe, 'box-sizing', 'border-box'),
              V(fe, 'margin', 0),
              V(fe, 'top', t.top),
              V(fe, 'left', t.left),
              V(fe, 'width', t.width),
              V(fe, 'height', t.height),
              V(fe, 'opacity', '0.8'),
              V(fe, 'position', Ue ? 'absolute' : 'fixed'),
              V(fe, 'zIndex', '100000'),
              V(fe, 'pointerEvents', 'none'),
              (nt.ghost = fe),
              e.appendChild(fe),
              V(
                fe,
                'transform-origin',
                (De / parseInt(fe.style.width)) * 100 + '% ' + (Ne / parseInt(fe.style.height)) * 100 + '%'
              )
          }
        },
        _onDragStart: function(e, t) {
          var n = this,
            o = e.dataTransfer,
            r = n.options
          ue('dragStart', this, { evt: e }),
            nt.eventCanceled
              ? this._onDrop()
              : (ue('setupClone', this),
                nt.eventCanceled ||
                  (((be = oe(he)).draggable = !1),
                  (be.style['will-change'] = ''),
                  this._hideClone(),
                  X(be, this.options.chosenClass, !1),
                  (nt.clone = be)),
                (n.cloneId = lt(function() {
                  ue('clone', n),
                    nt.eventCanceled ||
                      (n.options.removeCloneOnHide || ge.insertBefore(be, he),
                      n._hideClone(),
                      de({ sortable: n, name: 'clone' }))
                })),
                !t && X(he, r.dragClass, !0),
                t
                  ? ((Le = !0), (n._loopId = setInterval(n._emulateDragOver, 50)))
                  : (A(document, 'mouseup', n._onDrop),
                    A(document, 'touchend', n._onDrop),
                    A(document, 'touchcancel', n._onDrop),
                    o && ((o.effectAllowed = 'move'), r.setData && r.setData.call(n, o, he)),
                    R(document, 'drop', n),
                    V(he, 'transform', 'translateZ(0)')),
                (Fe = !0),
                (n._dragStartId = lt(n._dragStarted.bind(n, t, e))),
                R(document, 'selectstart', n),
                (Ie = !0),
                N && V(document.body, 'user-select', 'none'))
        },
        _onDragOver: function(e) {
          var t,
            n,
            o,
            r,
            a = this.el,
            i = e.target,
            l = this.options,
            s = l.group,
            c = nt.active,
            u = Te === s,
            d = l.sort,
            h = Ee || c,
            p = this,
            f = !1
          if (!Ve) {
            if (
              (void 0 !== e.preventDefault && e.cancelable && e.preventDefault(),
              (i = B(i, l.draggable, a, !0)),
              x('dragOver'),
              nt.eventCanceled)
            )
              return f
            if (he.contains(e.target) || (i.animated && i.animatingX && i.animatingY) || p._ignoreWhileAnimating === i)
              return N(!1)
            if (
              ((Le = !1),
              c &&
                !l.disabled &&
                (u
                  ? d || (o = !ge.contains(he))
                  : Ee === this || ((this.lastPutMode = Te.checkPull(this, c, he, e)) && s.checkPut(this, c, he, e))))
            ) {
              if (((r = 'vertical' === this._getDirection(e, i)), (t = z(he)), x('dragOverValid'), nt.eventCanceled))
                return f
              if (o)
                return (
                  (pe = ge),
                  D(),
                  this._hideClone(),
                  x('revert'),
                  nt.eventCanceled || (ve ? ge.insertBefore(he, ve) : ge.appendChild(he)),
                  N(!0)
                )
              var g = $(a, l.draggable)
              if (
                !g ||
                ((function(e, t, n) {
                  var o = z($(n.el, n.options.draggable))
                  return t
                    ? e.clientX > o.right + 10 || (e.clientX <= o.right && e.clientY > o.bottom && e.clientX >= o.left)
                    : (e.clientX > o.right && e.clientY > o.top) || (e.clientX <= o.right && e.clientY > o.bottom + 10)
                })(e, r, this) &&
                  !g.animated)
              ) {
                if (g === he) return N(!1)
                if ((g && a === e.target && (i = g), i && (n = z(i)), !1 !== ot(ge, a, he, t, i, n, e, !!i)))
                  return D(), a.appendChild(he), (pe = a), I(), N(!0)
              } else if (i.parentNode === a) {
                n = z(i)
                var v,
                  m,
                  b,
                  y = he.parentNode !== a,
                  w = !(function(e, t, n) {
                    var o = n ? e.left : e.top,
                      r = n ? e.right : e.bottom,
                      a = n ? e.width : e.height,
                      i = n ? t.left : t.top,
                      l = n ? t.right : t.bottom,
                      s = n ? t.width : t.height
                    return o === i || r === l || o + a / 2 === i + s / 2
                  })((he.animated && he.toRect) || t, (i.animated && i.toRect) || n, r),
                  O = r ? 'top' : 'left',
                  _ = q(i, 'top', 'top') || q(he, 'top', 'top'),
                  S = _ ? _.scrollTop : void 0
                if (
                  (je !== i && ((m = n[O]), (Ye = !1), (He = (!w && l.invertSwap) || y)),
                  0 !==
                    (v = (function(e, t, n, o, r, a, i, l) {
                      var s = o ? e.clientY : e.clientX,
                        c = o ? n.height : n.width,
                        u = o ? n.top : n.left,
                        d = o ? n.bottom : n.right,
                        h = !1
                      if (!i)
                        if (l && Re < c * r) {
                          if ((!Ye && (1 === Me ? s > u + (c * a) / 2 : s < d - (c * a) / 2) && (Ye = !0), Ye)) h = !0
                          else if (1 === Me ? s < u + Re : s > d - Re) return -Me
                        } else if (s > u + (c * (1 - r)) / 2 && s < d - (c * (1 - r)) / 2)
                          return (function(e) {
                            return J(he) < J(e) ? 1 : -1
                          })(t)
                      if ((h = h || i) && (s < u + (c * a) / 2 || s > d - (c * a) / 2)) return s > u + c / 2 ? 1 : -1
                      return 0
                    })(
                      e,
                      i,
                      n,
                      r,
                      w ? 1 : l.swapThreshold,
                      null == l.invertedSwapThreshold ? l.swapThreshold : l.invertedSwapThreshold,
                      He,
                      je === i
                    )))
                ) {
                  var T = J(he)
                  do {
                    ;(T -= v), (b = pe.children[T])
                  } while (b && ('none' === V(b, 'display') || b === fe))
                }
                if (0 === v || b === i) return N(!1)
                ;(je = i), (Me = v)
                var C = i.nextElementSibling,
                  k = !1,
                  P = ot(ge, a, he, t, i, n, e, (k = 1 === v))
                if (!1 !== P)
                  return (
                    (1 !== P && -1 !== P) || (k = 1 === P),
                    (Ve = !0),
                    setTimeout(at, 30),
                    D(),
                    k && !C ? a.appendChild(he) : i.parentNode.insertBefore(he, k ? C : i),
                    _ && ne(_, 0, S - _.scrollTop),
                    (pe = he.parentNode),
                    void 0 === m || He || (Re = Math.abs(m - z(i)[O])),
                    I(),
                    N(!0)
                  )
              }
              if (a.contains(he)) return N(!1)
            }
            return !1
          }
          function x(l, s) {
            ue(
              l,
              p,
              E(
                {
                  evt: e,
                  isOwner: u,
                  axis: r ? 'vertical' : 'horizontal',
                  revert: o,
                  dragRect: t,
                  targetRect: n,
                  canSort: d,
                  fromSortable: h,
                  target: i,
                  completed: N,
                  onMove: function(n, o) {
                    return ot(ge, a, he, t, n, z(n), e, o)
                  },
                  changed: I,
                },
                s
              )
            )
          }
          function D() {
            x('dragOverAnimationCapture'), p.captureAnimationState(), p !== h && h.captureAnimationState()
          }
          function N(t) {
            return (
              x('dragOverCompleted', { insertion: t }),
              t &&
                (u ? c._hideClone() : c._showClone(p),
                p !== h && (X(he, Ee ? Ee.options.ghostClass : c.options.ghostClass, !1), X(he, l.ghostClass, !0)),
                Ee !== p && p !== nt.active ? (Ee = p) : p === nt.active && Ee && (Ee = null),
                h === p && (p._ignoreWhileAnimating = i),
                p.animateAll(function() {
                  x('dragOverAnimationComplete'), (p._ignoreWhileAnimating = null)
                }),
                p !== h && (h.animateAll(), (h._ignoreWhileAnimating = null))),
              ((i === he && !he.animated) || (i === a && !i.animated)) && (je = null),
              l.dragoverBubble ||
                e.rootEl ||
                i === document ||
                (he.parentNode[re]._isOutsideThisEl(e.target), !t && et(e)),
              !l.dragoverBubble && e.stopPropagation && e.stopPropagation(),
              (f = !0)
            )
          }
          function I() {
            ;(Oe = J(he)),
              (Se = J(he, l.draggable)),
              de({ sortable: p, name: 'change', toEl: a, newIndex: Oe, newDraggableIndex: Se, originalEvent: e })
          }
        },
        _ignoreWhileAnimating: null,
        _offMoveEvents: function() {
          A(document, 'mousemove', this._onTouchMove),
            A(document, 'touchmove', this._onTouchMove),
            A(document, 'pointermove', this._onTouchMove),
            A(document, 'dragover', et),
            A(document, 'mousemove', et),
            A(document, 'touchmove', et)
        },
        _offUpEvents: function() {
          var e = this.el.ownerDocument
          A(e, 'mouseup', this._onDrop),
            A(e, 'touchend', this._onDrop),
            A(e, 'pointerup', this._onDrop),
            A(e, 'touchcancel', this._onDrop),
            A(document, 'selectstart', this)
        },
        _onDrop: function(e) {
          var t = this.el,
            n = this.options
          ;(Oe = J(he)),
            (Se = J(he, n.draggable)),
            ue('drop', this, { evt: e }),
            (pe = he && he.parentNode),
            (Oe = J(he)),
            (Se = J(he, n.draggable)),
            nt.eventCanceled
              ? this._nulling()
              : ((Fe = !1),
                (He = !1),
                (Ye = !1),
                clearInterval(this._loopId),
                clearTimeout(this._dragStartTimer),
                st(this.cloneId),
                st(this._dragStartId),
                this.nativeDraggable && (A(document, 'drop', this), A(t, 'dragstart', this._onDragStart)),
                this._offMoveEvents(),
                this._offUpEvents(),
                N && V(document.body, 'user-select', ''),
                e &&
                  (Ie && (e.cancelable && e.preventDefault(), !n.dropBubble && e.stopPropagation()),
                  fe && fe.parentNode && fe.parentNode.removeChild(fe),
                  (ge === pe || (Ee && 'clone' !== Ee.lastPutMode)) &&
                    be &&
                    be.parentNode &&
                    be.parentNode.removeChild(be),
                  he &&
                    (this.nativeDraggable && A(he, 'dragend', this),
                    rt(he),
                    (he.style['will-change'] = ''),
                    Ie && !Fe && X(he, Ee ? Ee.options.ghostClass : this.options.ghostClass, !1),
                    X(he, this.options.chosenClass, !1),
                    de({
                      sortable: this,
                      name: 'unchoose',
                      toEl: pe,
                      newIndex: null,
                      newDraggableIndex: null,
                      originalEvent: e,
                    }),
                    ge !== pe
                      ? (Oe >= 0 &&
                          (de({ rootEl: pe, name: 'add', toEl: pe, fromEl: ge, originalEvent: e }),
                          de({ sortable: this, name: 'remove', toEl: pe, originalEvent: e }),
                          de({ rootEl: pe, name: 'sort', toEl: pe, fromEl: ge, originalEvent: e }),
                          de({ sortable: this, name: 'sort', toEl: pe, originalEvent: e })),
                        Ee && Ee.save())
                      : Oe !== we &&
                        Oe >= 0 &&
                        (de({ sortable: this, name: 'update', toEl: pe, originalEvent: e }),
                        de({ sortable: this, name: 'sort', toEl: pe, originalEvent: e })),
                    nt.active &&
                      ((null != Oe && -1 !== Oe) || ((Oe = we), (Se = _e)),
                      de({ sortable: this, name: 'end', toEl: pe, originalEvent: e }),
                      this.save()))),
                this._nulling())
        },
        _nulling: function() {
          ue('nulling', this),
            (ge = he = pe = fe = ve = be = me = ye = Ce = ke = Ie = Oe = Se = we = _e = je = Me = Ee = Te = nt.dragged = nt.ghost = nt.clone = nt.active = null),
            We.forEach(function(e) {
              e.checked = !0
            }),
            (We.length = Pe = xe = 0)
        },
        handleEvent: function(e) {
          switch (e.type) {
            case 'drop':
            case 'dragend':
              this._onDrop(e)
              break
            case 'dragenter':
            case 'dragover':
              he &&
                (this._onDragOver(e),
                (function(e) {
                  e.dataTransfer && (e.dataTransfer.dropEffect = 'move')
                  e.cancelable && e.preventDefault()
                })(e))
              break
            case 'selectstart':
              e.preventDefault()
          }
        },
        toArray: function() {
          for (var e, t = [], n = this.el.children, o = 0, r = n.length, a = this.options; o < r; o++)
            B((e = n[o]), a.draggable, this.el, !1) && t.push(e.getAttribute(a.dataIdAttr) || it(e))
          return t
        },
        sort: function(e) {
          var t = {},
            n = this.el
          this.toArray().forEach(function(e, o) {
            var r = n.children[o]
            B(r, this.options.draggable, n, !1) && (t[e] = r)
          }, this),
            e.forEach(function(e) {
              t[e] && (n.removeChild(t[e]), n.appendChild(t[e]))
            })
        },
        save: function() {
          var e = this.options.store
          e && e.set && e.set(this)
        },
        closest: function(e, t) {
          return B(e, t || this.options.draggable, this.el, !1)
        },
        option: function(e, t) {
          var n = this.options
          if (void 0 === t) return n[e]
          var o = se.modifyOption(this, e, t)
          ;(n[e] = void 0 !== o ? o : t), 'group' === e && Je(n)
        },
        destroy: function() {
          ue('destroy', this)
          var e = this.el
          ;(e[re] = null),
            A(e, 'mousedown', this._onTapStart),
            A(e, 'touchstart', this._onTapStart),
            A(e, 'pointerdown', this._onTapStart),
            this.nativeDraggable && (A(e, 'dragover', this), A(e, 'dragenter', this)),
            Array.prototype.forEach.call(e.querySelectorAll('[draggable]'), function(e) {
              e.removeAttribute('draggable')
            }),
            this._onDrop(),
            Be.splice(Be.indexOf(this.el), 1),
            (this.el = e = null)
        },
        _hideClone: function() {
          if (!ye) {
            if ((ue('hideClone', this), nt.eventCanceled)) return
            V(be, 'display', 'none'),
              this.options.removeCloneOnHide && be.parentNode && be.parentNode.removeChild(be),
              (ye = !0)
          }
        },
        _showClone: function(e) {
          if ('clone' === e.lastPutMode) {
            if (ye) {
              if ((ue('showClone', this), nt.eventCanceled)) return
              ge.contains(he) && !this.options.group.revertClone
                ? ge.insertBefore(be, he)
                : ve
                ? ge.insertBefore(be, ve)
                : ge.appendChild(be),
                this.options.group.revertClone && this.animate(he, be),
                V(be, 'display', ''),
                (ye = !1)
            }
          } else this._hideClone()
        },
      }),
        Ke &&
          R(document, 'touchmove', function(e) {
            ;(nt.active || Fe) && e.cancelable && e.preventDefault()
          }),
        (nt.utils = {
          on: R,
          off: A,
          css: V,
          find: K,
          is: function(e, t) {
            return !!B(e, t, e, !1)
          },
          extend: function(e, t) {
            if (e && t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            return e
          },
          throttle: te,
          closest: B,
          toggleClass: X,
          clone: oe,
          index: J,
          nextTick: lt,
          cancelNextTick: st,
          detectDirection: $e,
          getChild: G,
        }),
        (nt.get = function(e) {
          return e[re]
        }),
        (nt.mount = function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
          t[0].constructor === Array && (t = t[0]),
            t.forEach(function(e) {
              if (!e.prototype || !e.prototype.constructor)
                throw 'Sortable: Mounted plugin must be a constructor function, not '.concat({}.toString.call(e))
              e.utils && (nt.utils = E({}, nt.utils, e.utils)), se.mount(e)
            })
        }),
        (nt.create = function(e, t) {
          return new nt(e, t)
        }),
        (nt.version = '1.10.1')
      var ct,
        ut,
        dt,
        ht,
        pt,
        ft,
        gt = [],
        vt = !1
      function mt() {
        gt.forEach(function(e) {
          clearInterval(e.pid)
        }),
          (gt = [])
      }
      function bt() {
        clearInterval(ft)
      }
      var yt = te(function(e, t, n, o) {
          if (t.scroll) {
            var r,
              a = (e.touches ? e.touches[0] : e).clientX,
              i = (e.touches ? e.touches[0] : e).clientY,
              l = t.scrollSensitivity,
              s = t.scrollSpeed,
              c = U(),
              u = !1
            ut !== n && ((ut = n), mt(), (ct = t.scroll), (r = t.scrollFn), !0 === ct && (ct = Q(n, !0)))
            var d = 0,
              h = ct
            do {
              var p = h,
                f = z(p),
                g = f.top,
                v = f.bottom,
                m = f.left,
                b = f.right,
                y = f.width,
                w = f.height,
                O = void 0,
                _ = void 0,
                S = p.scrollWidth,
                T = p.scrollHeight,
                E = V(p),
                C = p.scrollLeft,
                k = p.scrollTop
              p === c
                ? ((O = y < S && ('auto' === E.overflowX || 'scroll' === E.overflowX || 'visible' === E.overflowX)),
                  (_ = w < T && ('auto' === E.overflowY || 'scroll' === E.overflowY || 'visible' === E.overflowY)))
                : ((O = y < S && ('auto' === E.overflowX || 'scroll' === E.overflowX)),
                  (_ = w < T && ('auto' === E.overflowY || 'scroll' === E.overflowY)))
              var P = O && (Math.abs(b - a) <= l && C + y < S) - (Math.abs(m - a) <= l && !!C),
                x = _ && (Math.abs(v - i) <= l && k + w < T) - (Math.abs(g - i) <= l && !!k)
              if (!gt[d]) for (var D = 0; D <= d; D++) gt[D] || (gt[D] = {})
              ;(gt[d].vx == P && gt[d].vy == x && gt[d].el === p) ||
                ((gt[d].el = p),
                (gt[d].vx = P),
                (gt[d].vy = x),
                clearInterval(gt[d].pid),
                (0 == P && 0 == x) ||
                  ((u = !0),
                  (gt[d].pid = setInterval(
                    function() {
                      o && 0 === this.layer && nt.active._onTouchMove(pt)
                      var t = gt[this.layer].vy ? gt[this.layer].vy * s : 0,
                        n = gt[this.layer].vx ? gt[this.layer].vx * s : 0
                      ;('function' == typeof r &&
                        'continue' !== r.call(nt.dragged.parentNode[re], n, t, e, pt, gt[this.layer].el)) ||
                        ne(gt[this.layer].el, n, t)
                    }.bind({ layer: d }),
                    24
                  )))),
                d++
            } while (t.bubbleScroll && h !== c && (h = Q(h, !1)))
            vt = u
          }
        }, 30),
        wt = function(e) {
          var t = e.originalEvent,
            n = e.putSortable,
            o = e.dragEl,
            r = e.activeSortable,
            a = e.dispatchSortableEvent,
            i = e.hideGhostForTarget,
            l = e.unhideGhostForTarget
          if (t) {
            var s = n || r
            i()
            var c = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t,
              u = document.elementFromPoint(c.clientX, c.clientY)
            l(), s && !s.el.contains(u) && (a('spill'), this.onSpill({ dragEl: o, putSortable: n }))
          }
        }
      function Ot() {}
      function _t() {}
      ;(Ot.prototype = {
        startIndex: null,
        dragStart: function(e) {
          var t = e.oldDraggableIndex
          this.startIndex = t
        },
        onSpill: function(e) {
          var t = e.dragEl,
            n = e.putSortable
          this.sortable.captureAnimationState(), n && n.captureAnimationState()
          var o = G(this.sortable.el, this.startIndex, this.options)
          o ? this.sortable.el.insertBefore(t, o) : this.sortable.el.appendChild(t),
            this.sortable.animateAll(),
            n && n.animateAll()
        },
        drop: wt,
      }),
        T(Ot, { pluginName: 'revertOnSpill' }),
        (_t.prototype = {
          onSpill: function(e) {
            var t = e.dragEl,
              n = e.putSortable || this.sortable
            n.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), n.animateAll()
          },
          drop: wt,
        }),
        T(_t, { pluginName: 'removeOnSpill' })
      nt.mount(
        new function() {
          function e() {
            for (var e in ((this.defaults = { scroll: !0, scrollSensitivity: 30, scrollSpeed: 10, bubbleScroll: !0 }),
            this))
              '_' === e.charAt(0) && 'function' == typeof this[e] && (this[e] = this[e].bind(this))
          }
          return (
            (e.prototype = {
              dragStarted: function(e) {
                var t = e.originalEvent
                this.sortable.nativeDraggable
                  ? R(document, 'dragover', this._handleAutoScroll)
                  : this.options.supportPointer
                  ? R(document, 'pointermove', this._handleFallbackAutoScroll)
                  : t.touches
                  ? R(document, 'touchmove', this._handleFallbackAutoScroll)
                  : R(document, 'mousemove', this._handleFallbackAutoScroll)
              },
              dragOverCompleted: function(e) {
                var t = e.originalEvent
                this.options.dragOverBubble || t.rootEl || this._handleAutoScroll(t)
              },
              drop: function() {
                this.sortable.nativeDraggable
                  ? A(document, 'dragover', this._handleAutoScroll)
                  : (A(document, 'pointermove', this._handleFallbackAutoScroll),
                    A(document, 'touchmove', this._handleFallbackAutoScroll),
                    A(document, 'mousemove', this._handleFallbackAutoScroll)),
                  bt(),
                  mt(),
                  clearTimeout(Y),
                  (Y = void 0)
              },
              nulling: function() {
                ;(pt = ut = ct = vt = ft = dt = ht = null), (gt.length = 0)
              },
              _handleFallbackAutoScroll: function(e) {
                this._handleAutoScroll(e, !0)
              },
              _handleAutoScroll: function(e, t) {
                var n = this,
                  o = (e.touches ? e.touches[0] : e).clientX,
                  r = (e.touches ? e.touches[0] : e).clientY,
                  a = document.elementFromPoint(o, r)
                if (((pt = e), t || x || P || N)) {
                  yt(e, this.options, a, t)
                  var i = Q(a, !0)
                  !vt ||
                    (ft && o === dt && r === ht) ||
                    (ft && bt(),
                    (ft = setInterval(function() {
                      var a = Q(document.elementFromPoint(o, r), !0)
                      a !== i && ((i = a), mt()), yt(e, n.options, a, t)
                    }, 10)),
                    (dt = o),
                    (ht = r))
                } else {
                  if (!this.options.bubbleScroll || Q(a, !0) === U()) return void mt()
                  yt(e, this.options, Q(a, !1), !1)
                }
              },
            }),
            T(e, { pluginName: 'scroll', initializeByDefault: !0 })
          )
        }()
      ),
        nt.mount(_t, Ot)
      var St = nt,
        Tt = n(2),
        Et = n.n(Tt),
        Ct = !0,
        kt = 'Invariant failed'
      var Pt = function(e, t) {
          if (!e) {
            if (Ct) throw new Error(kt)
            throw new Error(kt + ': ' + (t || ''))
          }
        },
        xt = function(e, t) {
          return (xt =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(e, t) {
                e.__proto__ = t
              }) ||
            function(e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var Dt = function() {
        return (Dt =
          Object.assign ||
          function(e) {
            for (var t, n = 1, o = arguments.length; n < o; n++)
              for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            return e
          }).apply(this, arguments)
      }
      function Nt(e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator]
        if (!n) return e
        var o,
          r,
          a = n.call(e),
          i = []
        try {
          for (; (void 0 === t || t-- > 0) && !(o = a.next()).done; ) i.push(o.value)
        } catch (e) {
          r = { error: e }
        } finally {
          try {
            o && !o.done && (n = a.return) && n.call(a)
          } finally {
            if (r) throw r.error
          }
        }
        return i
      }
      function It() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Nt(arguments[t]))
        return e
      }
      function jt(e) {
        null !== e.parentElement && e.parentElement.removeChild(e)
      }
      function Mt(e) {
        e.forEach(function(e) {
          return jt(e.element)
        })
      }
      function Rt(e) {
        e.forEach(function(e) {
          var t, n, o, r
          ;(t = e.parentElement), (n = e.element), (o = e.oldIndex), (r = t.children[o] || null), t.insertBefore(n, r)
        })
      }
      function At(e, t) {
        var n = Bt(e),
          o = { parentElement: e.from },
          r = []
        switch (n) {
          case 'normal':
            r = [{ element: e.item, newIndex: e.newIndex, oldIndex: e.oldIndex, parentElement: e.from }]
            break
          case 'swap':
            r = [
              Dt({ element: e.item, oldIndex: e.oldIndex, newIndex: e.newIndex }, o),
              Dt({ element: e.swapItem, oldIndex: e.newIndex, newIndex: e.oldIndex }, o),
            ]
            break
          case 'multidrag':
            r = e.oldIndicies.map(function(t, n) {
              return Dt({ element: t.multiDragElement, oldIndex: t.index, newIndex: e.newIndicies[n].index }, o)
            })
        }
        return (function(e, t) {
          return e
            .map(function(e) {
              return Dt(Dt({}, e), { item: t[e.oldIndex] })
            })
            .sort(function(e, t) {
              return e.oldIndex - t.oldIndex
            })
        })(r, t)
      }
      function Ft(e, t) {
        var n = It(t)
        return (
          e
            .concat()
            .reverse()
            .forEach(function(e) {
              return n.splice(e.oldIndex, 1)
            }),
          n
        )
      }
      function Lt(e, t) {
        var n = It(t)
        return (
          e.forEach(function(e) {
            return n.splice(e.newIndex, 0, e.item)
          }),
          n
        )
      }
      function Bt(e) {
        return e.oldIndicies && e.oldIndicies.length > 0 ? 'multidrag' : e.swapItem ? 'swap' : 'normal'
      }
      function Yt(e) {
        e.list,
          e.setList,
          e.children,
          e.tag,
          e.style,
          e.className,
          e.clone,
          e.onAdd,
          e.onChange,
          e.onChoose,
          e.onClone,
          e.onEnd,
          e.onFilter,
          e.onRemove,
          e.onSort,
          e.onStart,
          e.onUnchoose,
          e.onUpdate,
          e.onMove,
          e.onSpill,
          e.onSelect,
          e.onDeselect
        return (function(e, t) {
          var n = {}
          for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o])
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]])
          }
          return n
        })(e, [
          'list',
          'setList',
          'children',
          'tag',
          'style',
          'className',
          'clone',
          'onAdd',
          'onChange',
          'onChoose',
          'onClone',
          'onEnd',
          'onFilter',
          'onRemove',
          'onSort',
          'onStart',
          'onUnchoose',
          'onUpdate',
          'onMove',
          'onSpill',
          'onSelect',
          'onDeselect',
        ])
      }
      var Ht = { dragging: null },
        Xt = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this
            n.ref = Object(a.createRef)()
            var o = It(t.list).map(function(e) {
              return Dt(Dt({}, e), { chosen: !1, selected: !1 })
            })
            return (
              t.setList(o, n.sortable, Ht),
              Pt(
                !t.plugins,
                '\nPlugins prop is no longer supported.\nInstead, mount it with "Sortable.mount(new MultiDrag())"\nPlease read the updated README.md at https://github.com/SortableJS/react-sortablejs.\n      '
              ),
              n
            )
          }
          return (
            (function(e, t) {
              function n() {
                this.constructor = e
              }
              xt(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
            })(t, e),
            (t.prototype.componentDidMount = function() {
              if (null !== this.ref.current) {
                var e = this.makeOptions()
                St.create(this.ref.current, e)
              }
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.tag,
                n = { style: e.style, className: e.className, id: e.id },
                o = t && null !== t ? t : 'div'
              return Object(a.createElement)(o, Dt({ ref: this.ref }, n), this.getChildren())
            }),
            (t.prototype.getChildren = function() {
              var e = this.props,
                t = e.children,
                n = e.dataIdAttr,
                o = e.selectedClass,
                r = void 0 === o ? 'sortable-selected' : o,
                i = e.chosenClass,
                l = void 0 === i ? 'sortable-chosen' : i,
                s = (e.dragClass, e.fallbackClass, e.ghostClass, e.swapClass, e.filter),
                c = void 0 === s ? 'sortable-filter' : s,
                u = e.list
              if (!t || null == t) return null
              var d = n || 'data-id'
              return a.Children.map(t, function(e, t) {
                var n,
                  o,
                  i,
                  s = u[t],
                  h = e.props.className,
                  p = 'string' == typeof c && (((n = {})[c.replace('.', '')] = !!s.filtered), n),
                  f = Et()(h, Dt((((o = {})[r] = s.selected), (o[l] = s.chosen), o), p))
                return Object(a.cloneElement)(e, (((i = {})[d] = e.key), (i.className = f), i))
              })
            }),
            Object.defineProperty(t.prototype, 'sortable', {
              get: function() {
                var e = this.ref.current
                if (null === e) return null
                var t = Object.keys(e).find(function(e) {
                  return e.includes('Sortable')
                })
                return t ? e[t] : null
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.makeOptions = function() {
              var e = this,
                t = Yt(this.props)
              ;[
                'onAdd',
                'onChoose',
                'onDeselect',
                'onEnd',
                'onRemove',
                'onSelect',
                'onSpill',
                'onStart',
                'onUnchoose',
                'onUpdate',
              ].forEach(function(n) {
                return (t[n] = e.prepareOnHandlerPropAndDOM(n))
              }),
                ['onChange', 'onClone', 'onFilter', 'onSort'].forEach(function(n) {
                  return (t[n] = e.prepareOnHandlerProp(n))
                })
              return Dt(Dt({}, t), {
                onMove: function(t, n) {
                  var o = e.props.onMove,
                    r = t.willInsertAfter || -1
                  if (!o) return r
                  var a = o(t, n, e.sortable, Ht)
                  return void 0 !== a && a
                },
              })
            }),
            (t.prototype.prepareOnHandlerPropAndDOM = function(e) {
              var t = this
              return function(n) {
                t.callOnHandlerProp(n, e), t[e](n)
              }
            }),
            (t.prototype.prepareOnHandlerProp = function(e) {
              var t = this
              return function(n) {
                t.callOnHandlerProp(n, e)
              }
            }),
            (t.prototype.callOnHandlerProp = function(e, t) {
              var n = this.props[t]
              n && n(e, this.sortable, Ht)
            }),
            (t.prototype.onAdd = function(e) {
              var t = this.props,
                n = t.list,
                o = t.setList,
                r = At(e, It(Ht.dragging.props.list))
              Mt(r), o(Lt(r, n), this.sortable, Ht)
            }),
            (t.prototype.onRemove = function(e) {
              var t = this,
                n = this.props,
                o = n.list,
                r = n.setList,
                a = Bt(e),
                i = At(e, o)
              Rt(i)
              var l = It(o)
              if ('clone' !== e.pullMode) l = Ft(i, l)
              else {
                var s = i
                switch (a) {
                  case 'multidrag':
                    s = i.map(function(t, n) {
                      return Dt(Dt({}, t), { element: e.clones[n] })
                    })
                    break
                  case 'normal':
                    s = i.map(function(t, n) {
                      return Dt(Dt({}, t), { element: e.clone })
                    })
                    break
                  case 'swap':
                  default:
                    Pt(
                      !0,
                      'mode "' +
                        a +
                        '" cannot clone. Please remove "props.clone" from <ReactSortable/> when using the "' +
                        a +
                        '" plugin'
                    )
                }
                Mt(s),
                  i.forEach(function(n) {
                    var o = n.oldIndex,
                      r = t.props.clone(n.item, e)
                    l.splice(o, 1, r)
                  })
              }
              r(
                (l = l.map(function(e) {
                  return Dt(Dt({}, e), { selected: !1 })
                })),
                this.sortable,
                Ht
              )
            }),
            (t.prototype.onUpdate = function(e) {
              var t = this.props,
                n = t.list,
                o = t.setList,
                r = At(e, n)
              return (
                Mt(r),
                Rt(r),
                o(
                  (function(e, t) {
                    return Lt(e, Ft(e, t))
                  })(r, n),
                  this.sortable,
                  Ht
                )
              )
            }),
            (t.prototype.onStart = function(e) {
              Ht.dragging = this
            }),
            (t.prototype.onEnd = function(e) {
              Ht.dragging = null
            }),
            (t.prototype.onChoose = function(e) {
              var t = this.props,
                n = t.list,
                o = t.setList,
                r = It(n)
              ;(r[e.oldIndex].chosen = !0), o(r, this.sortable, Ht)
            }),
            (t.prototype.onUnchoose = function(e) {
              var t = this.props,
                n = t.list,
                o = t.setList,
                r = It(n)
              ;(r[e.oldIndex].chosen = !1), o(r, this.sortable, Ht)
            }),
            (t.prototype.onSpill = function(e) {
              var t = this.props,
                n = t.removeOnSpill,
                o = t.revertOnSpill
              n && !o && jt(e.item)
            }),
            (t.prototype.onSelect = function(e) {
              var t = this.props,
                n = t.list,
                o = t.setList,
                r = It(n).map(function(e) {
                  return Dt(Dt({}, e), { selected: !1 })
                })
              e.newIndicies.forEach(function(t) {
                var n = t.index
                if (-1 === n)
                  return (
                    console.log(
                      '"' +
                        e.type +
                        '" had indice of "' +
                        t.index +
                        '", which is probably -1 and doesn\'t usually happen here.'
                    ),
                    void console.log(e)
                  )
                r[n].selected = !0
              }),
                o(r, this.sortable, Ht)
            }),
            (t.prototype.onDeselect = function(e) {
              var t = this.props,
                n = t.list,
                o = t.setList,
                r = It(n).map(function(e) {
                  return Dt(Dt({}, e), { selected: !1 })
                })
              e.newIndicies.forEach(function(e) {
                var t = e.index
                ;-1 !== t && (r[t].selected = !0)
              }),
                o(r, this.sortable, Ht)
            }),
            (t.defaultProps = {
              clone: function(e) {
                return e
              },
            }),
            t
          )
        })(a.Component),
        Vt = (n(8),
        (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
          }
        })()),
        Wt =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          }
      var Kt = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments[1],
            n = arguments[2],
            o = arguments[3],
            r = arguments[4]
          return e.map(function(e) {
            var a = e._id,
              s = e.label,
              c = e.tagClassName,
              u = e.dataset
            return i.a.createElement(
              'li',
              Wt({ className: ['tag-item', c].filter(Boolean).join(' '), key: 'tag-item-' + a }, l(u)),
              i.a.createElement(O, { label: s, id: a, onDelete: t, readOnly: n, disabled: o, labelRemove: r })
            )
          })
        },
        Ut = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, t),
              (function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
              })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, a['PureComponent']),
            Vt(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.tags,
                    n = e.onTagRemove,
                    o = e.texts,
                    r = void 0 === o ? {} : o,
                    a = e.disabled,
                    l = e.readOnly,
                    s = e.sortable,
                    c = void 0 !== s && s,
                    u = e.onReorderList,
                    d =
                      e.children ||
                      i.a.createElement('span', { className: 'placeholder' }, r.placeholder || 'Choose...')
                  return i.a.createElement(
                    'ul',
                    { className: 'tag-list' },
                    c
                      ? i.a.createElement(
                          Xt,
                          {
                            list: t,
                            setList: function(e) {
                              return u(e)
                            },
                          },
                          Kt(t, n, l, a, r.labelRemove)
                        )
                      : Kt(t, n, l, a, r.labelRemove),
                    i.a.createElement('li', { className: 'tag-item' }, d)
                  )
                },
              },
            ]),
            t
          )
        })()
      Ut.propTypes = {
        tags: r.a.array,
        onTagRemove: r.a.func,
        readOnly: r.a.bool,
        sortable: r.a.bool,
        onReorderList: r.a.func,
        disabled: r.a.bool,
        texts: r.a.object,
        children: r.a.node,
      }
      var zt = Ut,
        qt =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          },
        Gt = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
          }
        })()
      function $t(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var Jt = (function(e) {
        function t() {
          var e, n, o
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var r = arguments.length, a = Array(r), i = 0; i < r; i++) a[i] = arguments[i]
          return (
            (n = o = $t(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (o.getAriaAttributes = function() {
              var e = o.props,
                t = e.mode,
                n = e.texts,
                r = void 0 === n ? {} : n,
                a = e.showDropdown,
                i = e.clientId,
                l = e.tags,
                s = i + '_trigger',
                c = [],
                u = h(r.label)
              return (
                l &&
                  l.length &&
                  (u['aria-label'] && c.push(s),
                  l.forEach(function(e) {
                    c.push(y(e._id))
                  }),
                  (u = h(r.label, c.join(' ')))),
                qt(
                  {
                    id: s,
                    role: 'button',
                    tabIndex: 0,
                    'aria-haspopup': 'simpleSelect' === t ? 'listbox' : 'tree',
                    'aria-expanded': a ? 'true' : 'false',
                  },
                  u
                )
              )
            }),
            (o.handleTrigger = function(e) {
              ;(e.key && 13 !== e.keyCode && 32 !== e.keyCode && 40 !== e.keyCode) ||
                (e.key && o.triggerNode && o.triggerNode !== document.activeElement) ||
                (o.props.showDropdown || 32 !== e.keyCode || e.preventDefault(), o.props.onTrigger(e))
            }),
            $t(o, n)
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, a['PureComponent']),
          Gt(t, [
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props,
                  n = t.disabled,
                  o = t.readOnly,
                  r = t.showDropdown,
                  a = ['dropdown-trigger', 'arrow', n && 'disabled', o && 'readOnly', r && 'top', !r && 'bottom']
                    .filter(Boolean)
                    .join(' ')
                return i.a.createElement(
                  'a',
                  qt(
                    {
                      ref: function(t) {
                        e.triggerNode = t
                      },
                      className: a,
                      onClick: n ? void 0 : this.handleTrigger,
                      onKeyDown: n ? void 0 : this.handleTrigger,
                    },
                    this.getAriaAttributes()
                  ),
                  this.props.children
                )
              },
            },
          ]),
          t
        )
      })()
      Jt.propTypes = {
        onTrigger: r.a.func,
        disabled: r.a.bool,
        readOnly: r.a.bool,
        showDropdown: r.a.bool,
        mode: r.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        texts: r.a.object,
        clientId: r.a.string,
        tags: r.a.array,
      }
      var Zt = Jt,
        Qt = n(3),
        en = n.n(Qt),
        tn = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
          }
        })()
      function nn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var on = (function(e) {
        function t() {
          var e, n, o
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var r = arguments.length, a = Array(r), i = 0; i < r; i++) a[i] = arguments[i]
          return (
            (n = o = nn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (o.handleClick = function() {
              var e = o.props,
                t = e.onAction,
                n = e.actionData
              t && t(n.nodeId, n.action)
            }),
            nn(o, n)
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, a['PureComponent']),
          tn(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.title,
                  n = e.className,
                  o = e.text,
                  r = e.readOnly
                return i.a.createElement('i', { title: t, className: n, onClick: r ? void 0 : this.handleClick }, o)
              },
            },
          ]),
          t
        )
      })()
      ;(on.propTypes = {
        title: r.a.string,
        text: r.a.string,
        className: r.a.string,
        actionData: r.a.object,
        onAction: r.a.func,
        readOnly: r.a.bool,
      }),
        (on.defaultProps = { onAction: function() {} })
      var rn = on,
        an =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          },
        ln = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
          }
        })()
      var sn = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t),
            (function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, a['PureComponent']),
          ln(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.actions,
                  n = e.id,
                  o = (function(e, t) {
                    var n = {}
                    for (var o in e) t.indexOf(o) >= 0 || (Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]))
                    return n
                  })(e, ['actions', 'id'])
                return s(t)
                  ? null
                  : t.map(function(e, t) {
                      var r = e.id || 'action-' + t
                      return i.a.createElement(
                        rn,
                        an({ key: r }, o, e, { actionData: { action: an({}, e, { id: r }), nodeId: n } })
                      )
                    })
              },
            },
          ]),
          t
        )
      })()
      sn.propTypes = { id: r.a.string.isRequired, actions: r.a.array }
      var cn = sn,
        un =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          },
        dn = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
          }
        })()
      var hn = function(e) {
          var t = e.checked,
            n = e.indeterminate
          return function(e) {
            e && ((e.checked = t), (e.indeterminate = n))
          }
        },
        pn = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, t),
              (function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
              })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, a['PureComponent']),
            dn(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.checked,
                    n = e.indeterminate,
                    o = void 0 !== n && n,
                    r = e.onChange,
                    a = e.disabled,
                    l = e.readOnly,
                    s = (function(e, t) {
                      var n = {}
                      for (var o in e)
                        t.indexOf(o) >= 0 || (Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]))
                      return n
                    })(e, ['checked', 'indeterminate', 'onChange', 'disabled', 'readOnly']),
                    c = a || l
                  return i.a.createElement(
                    'input',
                    un({ type: 'checkbox', ref: hn({ checked: t, indeterminate: o }), onChange: r, disabled: c }, s)
                  )
                },
              },
            ]),
            t
          )
        })()
      pn.propTypes = {
        checked: r.a.bool,
        indeterminate: r.a.bool,
        onChange: r.a.func,
        disabled: r.a.bool,
        readOnly: r.a.bool,
      }
      var fn = pn,
        gn =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          },
        vn = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
          }
        })()
      var mn = function(e) {
          var t = e.checked
          return function(e) {
            e && (e.checked = t)
          }
        },
        bn = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, t),
              (function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
              })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, a['PureComponent']),
            vn(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.name,
                    n = e.checked,
                    o = e.onChange,
                    r = e.disabled,
                    a = e.readOnly,
                    l = (function(e, t) {
                      var n = {}
                      for (var o in e)
                        t.indexOf(o) >= 0 || (Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]))
                      return n
                    })(e, ['name', 'checked', 'onChange', 'disabled', 'readOnly']),
                    s = r || a
                  return i.a.createElement(
                    'input',
                    gn({ type: 'radio', name: t, ref: mn({ checked: n }), onChange: o, disabled: s }, l)
                  )
                },
              },
            ]),
            t
          )
        })()
      bn.propTypes = {
        name: r.a.string.isRequired,
        checked: r.a.bool,
        onChange: r.a.func,
        disabled: r.a.bool,
        readOnly: r.a.bool,
      }
      var yn = bn,
        wn =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          },
        On = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
          }
        })()
      function _n(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var Sn = (function(e) {
        function t() {
          var e, n, o
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var r = arguments.length, a = Array(r), i = 0; i < r; i++) a[i] = arguments[i]
          return (
            (n = o = _n(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (o.handleCheckboxChange = function(e) {
              var t = o.props,
                n = t.mode,
                r = t.id,
                a = t.onCheckboxChange
              'simpleSelect' === n || 'radioSelect' === n ? a(r, !0) : a(r, e.target.checked)
              e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
            }),
            _n(o, n)
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, a['PureComponent']),
          On(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.mode,
                  n = e.title,
                  o = e.label,
                  r = e.id,
                  a = e.partial,
                  l = e.checked,
                  s = this.props,
                  c = s.value,
                  u = s.disabled,
                  d = s.showPartiallySelected,
                  h = s.readOnly,
                  p = s.clientId,
                  f = { className: 'node-label' }
                'simpleSelect' === t && !h && !u && (f.onClick = this.handleCheckboxChange)
                var g = { id: r, value: c, checked: l, disabled: u, readOnly: h, tabIndex: -1 },
                  v = ['checkbox-item', 'simpleSelect' === t && 'simple-select'].filter(Boolean).join(' ')
                return i.a.createElement(
                  'label',
                  { title: n || o, htmlFor: r },
                  'radioSelect' === t
                    ? i.a.createElement(
                        yn,
                        wn({ name: p, className: 'radio-item', onChange: this.handleCheckboxChange }, g)
                      )
                    : i.a.createElement(
                        fn,
                        wn({ name: r, className: v, indeterminate: d && a, onChange: this.handleCheckboxChange }, g)
                      ),
                  i.a.createElement('span', f, o)
                )
              },
            },
          ]),
          t
        )
      })()
      Sn.propTypes = {
        id: r.a.string.isRequired,
        actions: r.a.array,
        title: r.a.string,
        label: r.a.string.isRequired,
        value: r.a.string.isRequired,
        checked: r.a.bool,
        partial: r.a.bool,
        disabled: r.a.bool,
        dataset: r.a.object,
        mode: r.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: r.a.bool,
        onCheckboxChange: r.a.func,
        readOnly: r.a.bool,
        clientId: r.a.string,
      }
      var Tn = Sn,
        En = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
          }
        })()
      function Cn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var kn = (function(e) {
        function t() {
          var e, n, o
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var r = arguments.length, a = Array(r), i = 0; i < r; i++) a[i] = arguments[i]
          return (
            (n = o = Cn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (o.onToggle = function(e) {
              e.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), o.props.onNodeToggle(o.props.id)
            }),
            (o.onKeyDown = function(e) {
              ;('Enter' !== e.key && 32 !== e.keyCode) || (o.props.onNodeToggle(o.props.id), e.preventDefault())
            }),
            Cn(o, n)
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, a['PureComponent']),
          En(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.expanded
                if (e.isLeaf) return null
                var n = ['toggle', t && 'expanded', !t && 'collapsed'].filter(Boolean).join(' ')
                return i.a.createElement('i', {
                  role: 'button',
                  tabIndex: -1,
                  className: n,
                  onClick: this.onToggle,
                  onKeyDown: this.onKeyDown,
                  'aria-hidden': !0,
                })
              },
            },
          ]),
          t
        )
      })()
      kn.propTypes = { expanded: r.a.bool, isLeaf: r.a.bool, onNodeToggle: r.a.func, id: r.a.string }
      var Pn = kn,
        xn = (n(9),
        Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          }),
        Dn = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
          }
        })()
      function Nn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var In = function(e) {
          return s(e)
        },
        jn = (function(e) {
          function t() {
            var e, n, o
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            for (var r = arguments.length, a = Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (n = o = Nn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
              (o.getAriaAttributes = function() {
                var e = o.props,
                  t = e._children,
                  n = e._depth,
                  r = e.checked,
                  a = e.disabled,
                  i = e.expanded,
                  l = e.readOnly,
                  s = e.mode,
                  c = e.partial,
                  u = {}
                return (
                  (u.role = 'simpleSelect' === s ? 'option' : 'treeitem'),
                  (u['aria-disabled'] = a || l),
                  (u['aria-selected'] = r),
                  'simpleSelect' !== s &&
                    ((u['aria-checked'] = c ? 'mixed' : r),
                    (u['aria-level'] = (n || 0) + 1),
                    (u['aria-expanded'] = t && (i ? 'true' : 'false'))),
                  u
                )
              }),
              Nn(o, n)
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, a['PureComponent']),
            Dn(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.mode,
                    n = e.keepTreeOnSearch,
                    o = e._id,
                    r = e._children,
                    a = e.dataset,
                    s = e._depth,
                    c = e.expanded,
                    u = e.title,
                    d = e.label,
                    h = e.partial,
                    p = e.checked,
                    f = e.value,
                    g = e.disabled,
                    v = e.actions,
                    m = e.onAction,
                    b = e.searchModeOn,
                    y = e.onNodeToggle,
                    w = e.onCheckboxChange,
                    O = e.showPartiallySelected,
                    _ = e.readOnly,
                    S = e.clientId,
                    T = (function(e) {
                      var t = e.keepTreeOnSearch,
                        n = e.keepChildrenOnSearch,
                        o = e._children,
                        r = e.matchInChildren,
                        a = e.matchInParent,
                        i = e.disabled,
                        l = e.partial,
                        s = e.hide,
                        c = e.className,
                        u = e.showPartiallySelected,
                        d = e.readOnly,
                        h = e.checked,
                        p = e._focused
                      return [
                        'node',
                        In(o) && 'leaf',
                        !In(o) && 'tree',
                        i && 'disabled',
                        s && 'hide',
                        t && r && 'match-in-children',
                        t && n && a && 'match-in-parent',
                        u && l && 'partial',
                        d && 'readOnly',
                        h && 'checked',
                        p && 'focused',
                        c,
                      ]
                        .filter(Boolean)
                        .join(' ')
                    })(this.props),
                    E = n || !b ? { paddingLeft: 20 * (s || 0) + 'px' } : {},
                    C = o + '_li'
                  return i.a.createElement(
                    'li',
                    xn({ className: T, style: E, id: C }, l(a), this.getAriaAttributes()),
                    i.a.createElement(Pn, { isLeaf: In(r), expanded: c, id: o, onNodeToggle: y }),
                    i.a.createElement(Tn, {
                      title: u,
                      label: d,
                      id: o,
                      partial: h,
                      checked: p,
                      value: f,
                      disabled: g,
                      mode: t,
                      onCheckboxChange: w,
                      showPartiallySelected: O,
                      readOnly: _,
                      clientId: S,
                    }),
                    i.a.createElement(cn, { actions: v, onAction: m, id: o, readOnly: _ })
                  )
                },
              },
            ]),
            t
          )
        })()
      jn.propTypes = {
        _id: r.a.string.isRequired,
        _depth: r.a.number,
        _children: r.a.array,
        actions: r.a.array,
        className: r.a.string,
        title: r.a.string,
        label: r.a.string.isRequired,
        value: r.a.string.isRequired,
        checked: r.a.bool,
        expanded: r.a.bool,
        disabled: r.a.bool,
        partial: r.a.bool,
        dataset: r.a.object,
        keepTreeOnSearch: r.a.bool,
        keepChildrenOnSearch: r.a.bool,
        searchModeOn: r.a.bool,
        onNodeToggle: r.a.func,
        onAction: r.a.func,
        onCheckboxChange: r.a.func,
        mode: r.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: r.a.bool,
        readOnly: r.a.bool,
        clientId: r.a.string,
      }
      var Mn = jn,
        Rn =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          },
        An = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
          }
        })()
      var Fn = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var n = (function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
          return (
            Ln.call(n),
            (n.currentPage = 1),
            n.computeInstanceProps(e, !0),
            (n.state = { items: n.allVisibleNodes.slice(0, n.props.pageSize) }),
            n
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, a['Component']),
          An(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props.searchModeOn
                return i.a.createElement(
                  'ul',
                  Rn(
                    { className: 'root ' + (e ? 'searchModeOn' : ''), ref: this.setNodeRef },
                    this.getAriaAttributes()
                  ),
                  this.state.scrollableTarget &&
                    i.a.createElement(
                      en.a,
                      {
                        dataLength: this.state.items.length,
                        next: this.loadMore,
                        hasMore: this.hasMore(),
                        loader: i.a.createElement('span', { className: 'searchLoader' }, 'Loading...'),
                        scrollableTarget: this.state.scrollableTarget,
                      },
                      this.state.items
                    )
                )
              },
            },
          ]),
          t
        )
      })()
      ;(Fn.propTypes = {
        data: r.a.object,
        keepTreeOnSearch: r.a.bool,
        keepChildrenOnSearch: r.a.bool,
        searchModeOn: r.a.bool,
        onChange: r.a.func,
        onNodeToggle: r.a.func,
        onAction: r.a.func,
        onCheckboxChange: r.a.func,
        mode: r.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: r.a.bool,
        pageSize: r.a.number,
        readOnly: r.a.bool,
        clientId: r.a.string,
        activeDescendant: r.a.string,
      }),
        (Fn.defaultProps = { pageSize: 100 })
      var Ln = function() {
          var e = this
          ;(this.componentWillReceiveProps = function(t) {
            var n = t.activeDescendant,
              o = n === e.props.activeDescendant
            e.computeInstanceProps(t, !o),
              e.setState({ items: e.allVisibleNodes.slice(0, e.currentPage * e.props.pageSize) }, function() {
                if (!o) {
                  var t = e.state.scrollableTarget,
                    r = n && document && document.getElementById(n)
                  r && t && (t.scrollTop = r.offsetTop - (t.clientHeight - r.clientHeight) / 2)
                }
              })
          }),
            (this.componentDidMount = function() {
              e.setState({ scrollableTarget: e.node.parentNode })
            }),
            (this.computeInstanceProps = function(t, n) {
              if (
                ((e.allVisibleNodes = e.getNodes(t)),
                (e.totalPages = Math.ceil(e.allVisibleNodes.length / e.props.pageSize)),
                n && t.activeDescendant)
              ) {
                var o = t.activeDescendant.replace(/_li$/, ''),
                  r =
                    e.allVisibleNodes.findIndex(function(e) {
                      return e.key === o
                    }) + 1
                e.currentPage = r > 0 ? Math.ceil(r / e.props.pageSize) : 1
              }
            }),
            (this.getNodes = function(e) {
              var t = e.data,
                n = e.keepTreeOnSearch,
                o = e.keepChildrenOnSearch,
                r = e.searchModeOn,
                a = e.mode,
                l = e.showPartiallySelected,
                s = e.readOnly,
                c = e.onAction,
                u = e.onChange,
                d = e.onCheckboxChange,
                h = e.onNodeToggle,
                p = e.activeDescendant,
                f = e.clientId,
                g = []
              return (
                t.forEach(function(e) {
                  ;(function(e, t, n) {
                    if (t || e.expanded) return !0
                    var o = e._parent && n.get(e._parent)
                    return !o || o.expanded
                  })(e, r, t) &&
                    g.push(
                      i.a.createElement(
                        Mn,
                        Rn({ keepTreeOnSearch: n, keepChildrenOnSearch: o, key: e._id }, e, {
                          searchModeOn: r,
                          onChange: u,
                          onCheckboxChange: d,
                          onNodeToggle: h,
                          onAction: c,
                          mode: a,
                          showPartiallySelected: l,
                          readOnly: s,
                          clientId: f,
                          activeDescendant: p,
                        })
                      )
                    )
                }),
                g
              )
            }),
            (this.hasMore = function() {
              return e.currentPage < e.totalPages
            }),
            (this.loadMore = function() {
              e.currentPage = e.currentPage + 1
              var t = e.allVisibleNodes.slice(0, e.currentPage * e.props.pageSize)
              e.setState({ items: t })
            }),
            (this.setNodeRef = function(t) {
              e.node = t
            }),
            (this.getAriaAttributes = function() {
              var t = e.props.mode
              return {
                role: 'simpleSelect' === t ? 'listbox' : 'tree',
                'aria-multiselectable': /multiSelect|hierarchical/.test(t),
              }
            })
        },
        Bn = Fn,
        Yn = n(4),
        Hn = n.n(Yn),
        Xn = function(e) {
          return e
        },
        Vn = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'children',
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xn
          return (
            Hn()(e[t], function(e) {
              return n(e).checked
            }) ||
            e[t].some(function(e) {
              return n(e).partial
            })
          )
        }
      var Wn = function(e) {
          var t = e.tree,
            n = e.simple,
            o = e.radio,
            r = e.showPartialState,
            a = e.hierarchical,
            i = e.rootPrefixId
          return (function e(t) {
            var n = t.nodes,
              o = t.parent,
              r = t.depth,
              a = void 0 === r ? 0 : r,
              i = t.simple,
              l = t.radio,
              c = t.showPartialState,
              u = t.hierarchical,
              d = t.rootPrefixId,
              h = t._rv,
              p = void 0 === h ? { list: new Map(), defaultValues: [], singleSelectedNode: null } : h,
              f = i || l
            return (
              n.forEach(function(t, n) {
                ;(t._depth = a),
                  o
                    ? ((t._id = t.id || o._id + '-' + n), (t._parent = o._id), o._children.push(t._id))
                    : (t._id = t.id || '' + (d ? d + '-' + n : n)),
                  f && t.checked && (p.singleSelectedNode ? (t.checked = !1) : (p.singleSelectedNode = t)),
                  f &&
                    t.isDefaultValue &&
                    p.singleSelectedNode &&
                    !p.singleSelectedNode.isDefaultValue &&
                    ((p.singleSelectedNode.checked = !1), (p.singleSelectedNode = null)),
                  !t.isDefaultValue ||
                    (f && 0 !== p.defaultValues.length) ||
                    (p.defaultValues.push(t._id), (t.checked = !0), f && (p.singleSelectedNode = t)),
                  (u && !l) ||
                    (function(e) {
                      for (
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                          n =
                            arguments.length > 2 && void 0 !== arguments[2] && !arguments[2]
                              ? ['disabled']
                              : ['checked', 'disabled'],
                          o = 0;
                        o < n.length;
                        o++
                      ) {
                        var r = n[o]
                        void 0 === e[r] && void 0 !== t[r] && (e[r] = t[r])
                      }
                    })(t, o, !l),
                  p.list.set(t._id, t),
                  !i &&
                    t.children &&
                    ((t._children = []),
                    e({
                      nodes: t.children,
                      parent: t,
                      depth: a + 1,
                      radio: l,
                      showPartialState: c,
                      hierarchical: u,
                      _rv: p,
                    }),
                    c &&
                      !t.checked &&
                      ((t.partial = Vn(t)),
                      f ||
                        s(t.children) ||
                        !t.children.every(function(e) {
                          return e.checked
                        }) ||
                        (t.checked = !0)),
                    (t.children = void 0))
              }),
              p
            )
          })({
            nodes: Array.isArray(t) ? t : [t],
            simple: n,
            radio: o,
            showPartialState: r,
            hierarchical: a,
            rootPrefixId: i,
          })
        },
        Kn = function e(t, n, o) {
          ;(n[t._id] = !0),
            s(t._children) ||
              t._children.forEach(function(t) {
                return e(o(t), n, o)
              })
        },
        Un = function(e, t) {
          var n = [],
            o = {}
          return (
            e.forEach(function(e, r) {
              o[r] || (t(e, r, o) && n.push(e), (o[r] = !0))
            }),
            n
          )
        },
        zn = {
          getNodesMatching: Un,
          getVisibleNodes: function(e, t, n) {
            return Un(e, function(e, o, r) {
              return n && e._children && e._children.length && !0 !== e.expanded && Kn(e, r, t), !e.hide
            })
          },
          markSubTreeVisited: Kn,
        },
        qn = (function() {
          return function(e, t) {
            if (Array.isArray(e)) return e
            if (Symbol.iterator in Object(e))
              return (function(e, t) {
                var n = [],
                  o = !0,
                  r = !1,
                  a = void 0
                try {
                  for (
                    var i, l = e[Symbol.iterator]();
                    !(o = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t);
                    o = !0
                  );
                } catch (e) {
                  ;(r = !0), (a = e)
                } finally {
                  try {
                    !o && l.return && l.return()
                  } finally {
                    if (r) throw a
                  }
                }
                return n
              })(e, t)
            throw new TypeError('Invalid attempt to destructure non-iterable instance')
          }
        })(),
        Gn = 'ArrowUp',
        $n = 'ArrowDown',
        Jn = 'ArrowLeft',
        Zn = 'ArrowRight',
        Qn = 'Enter',
        eo = 'Home',
        to = 'PageUp',
        no = 'End',
        oo = 'PageDown',
        ro = {
          None: 'None',
          FocusPrevious: 'FocusPrevious',
          FocusNext: 'FocusNext',
          FocusParent: 'FocusParent',
          FocusFirst: 'FocusFirst',
          FocusLast: 'FocusLast',
          ToggleExpanded: 'ToggleExpanded',
          ToggleChecked: 'ToggleChecked',
        },
        ao = new Set([ro.FocusPrevious, ro.FocusNext, ro.FocusParent, ro.FocusFirst, ro.FocusLast]),
        io = [Gn, $n, eo, to, no, oo],
        lo = io.concat([Jn, Zn, Qn]),
        so = function(e, t, n, o) {
          return t.indexOf(e) > -1 || (!n && e === o)
        },
        co = function(e, t, n) {
          if (!e || 0 === e.length) return t
          var o = t
          ;(function(e) {
            return so(e, [ro.FocusFirst, ro.FocusLast], !0)
          })(n)
            ? (o = qn(e, 1)[0])
            : [ro.FocusPrevious, ro.FocusNext].indexOf(n) > -1 &&
              (o = (function(e, t) {
                var n = e.indexOf(t) + 1
                return n % e.length == 0 ? e[0] : e[n]
              })(e, t))
          return o
        },
        uo = {
          isValidKey: function(e, t) {
            return (t ? lo : io).indexOf(e) > -1
          },
          getAction: function(e, t) {
            return t === Jn
              ? (function(e, t) {
                  return e && t === Jn
                    ? !0 === e.expanded
                      ? ro.ToggleExpanded
                      : e._parent
                      ? ro.FocusParent
                      : ro.None
                    : ro.None
                })(e, t)
              : t === Zn
              ? (function(e, t) {
                  return e && e._children && t === Zn ? (!0 !== e.expanded ? ro.ToggleExpanded : ro.FocusNext) : ro.None
                })(e, t)
              : (function(e, t) {
                  return so(e, [eo, to], t, $n)
                })(t, e)
              ? ro.FocusFirst
              : (function(e, t) {
                  return so(e, [no, oo], t, Gn)
                })(t, e)
              ? ro.FocusLast
              : (function(e, t) {
                  if (!e) return ro.None
                  switch (t) {
                    case Gn:
                      return ro.FocusPrevious
                    case $n:
                      return ro.FocusNext
                    case Qn:
                      return ro.ToggleChecked
                    default:
                      return ro.None
                  }
                })(e, t)
          },
          getNextFocus: function(e, t, n, o, r) {
            if (n === ro.FocusParent)
              return (function(e, t) {
                return e && e._parent ? t(e._parent) : e
              })(t, o)
            if (!ao.has(n)) return t
            var a = zn.getVisibleNodes(e, o, r)
            return (
              (function(e) {
                return so(e, [ro.FocusPrevious, ro.FocusLast], !0)
              })(n) && (a = a.reverse()),
              co(a, t, n)
            )
          },
          getNextFocusAfterTagDelete: function(e, t, n, o) {
            var r =
              t &&
              t.findIndex(function(t) {
                return t._id === e
              })
            if (r < 0 || !n.length) return o
            var a = n[(r = n.length > r ? r : n.length - 1)]._id,
              i = document.getElementById(y(a))
            return (i && i.firstElementChild) || o
          },
          handleFocusNavigationkey: function(e, t, n, o, r) {
            var a = uo.getNextFocus(e, n, t, o, r)
            return n && a && n._id !== a._id && (n._focused = !1), a ? ((a._focused = !0), a._id) : n && n._id
          },
          handleToggleNavigationkey: function(e, t, n, o, r) {
            return (
              e !== ro.ToggleChecked || n || t.readOnly || t.disabled
                ? e === ro.ToggleExpanded && r(t._id)
                : o(t._id, !0 !== t.checked),
              t && t._id
            )
          },
        },
        ho = uo,
        po = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
          }
        })()
      var fo = (function() {
          function e(t) {
            var n = t.data,
              o = t.mode,
              r = t.showPartiallySelected,
              a = t.rootPrefixId,
              i = t.searchPredicate
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, e),
              (this._src = n),
              (this.simpleSelect = 'simpleSelect' === o),
              (this.radioSelect = 'radioSelect' === o),
              (this.hierarchical = 'hierarchical' === o),
              (this.searchPredicate = i)
            var l = Wn({
                tree: JSON.parse(JSON.stringify(n)),
                simple: this.simpleSelect,
                radio: this.radioSelect,
                showPartialState: r,
                hierarchical: this.hierarchical,
                rootPrefixId: a,
              }),
              s = l.list,
              c = l.defaultValues,
              u = l.singleSelectedNode
            ;(this.tree = s),
              (this.defaultValues = c),
              (this.showPartialState = !this.hierarchical && r),
              (this.searchMaps = new Map()),
              (this.simpleSelect || this.radioSelect) && u && (this.currentChecked = u._id)
          }
          return (
            po(e, [
              {
                key: 'getNodeById',
                value: function(e) {
                  return this.tree.get(e)
                },
              },
              {
                key: 'getMatches',
                value: function(e) {
                  var t = this
                  if (this.searchMaps.has(e)) return this.searchMaps.get(e)
                  var n = -1,
                    o = e
                  this.searchMaps.forEach(function(t, r) {
                    e.startsWith(r) && r.length > n && ((n = r.length), (o = r))
                  })
                  var r = [],
                    a = this._getAddOnMatch(r, e)
                  o !== e
                    ? this.searchMaps.get(o).forEach(function(e) {
                        return a(t.getNodeById(e))
                      })
                    : this.tree.forEach(a)
                  return this.searchMaps.set(e, r), r
                },
              },
              {
                key: 'addParentsToTree',
                value: function(e, t) {
                  if (void 0 !== e) {
                    var n = this.getNodeById(e)
                    this.addParentsToTree(n._parent, t),
                      (n.hide = !n._isMatch || n.hide),
                      (n.matchInChildren = !0),
                      t.set(e, n)
                  }
                },
              },
              {
                key: 'addChildrenToTree',
                value: function(e, t, n) {
                  var o = this
                  void 0 !== e &&
                    e.forEach(function(e) {
                      if (!n || !n.includes(e)) {
                        var r = o.getNodeById(e)
                        ;(r.matchInParent = !0), t.set(e, r), o.addChildrenToTree(r._children, t)
                      }
                    })
                },
              },
              {
                key: 'filterTree',
                value: function(e, t, n) {
                  var o = this,
                    r = this.getMatches(e.toLowerCase()),
                    a = new Map()
                  r.forEach(function(e) {
                    var i = o.getNodeById(e)
                    ;(i.hide = !1),
                      (i._isMatch = !0),
                      t && o.addParentsToTree(i._parent, a),
                      a.set(e, i),
                      t && n && o.addChildrenToTree(i._children, a, r)
                  })
                  var i = 0 === r.length
                  return (this.matchTree = a), { allNodesHidden: i, tree: a }
                },
              },
              {
                key: 'restoreNodes',
                value: function() {
                  return (
                    this.tree.forEach(function(e) {
                      e.hide = !1
                    }),
                    this.tree
                  )
                },
              },
              {
                key: 'restoreDefaultValues',
                value: function() {
                  var e = this
                  return (
                    this.defaultValues.forEach(function(t) {
                      e.setNodeCheckedState(t, !0)
                    }),
                    this.tree
                  )
                },
              },
              {
                key: 'togglePreviousChecked',
                value: function(e, t) {
                  var n = this.currentChecked
                  n && n !== e && (this.getNodeById(n).checked = !1), (this.currentChecked = t ? e : null)
                },
              },
              {
                key: 'setNodeCheckedState',
                value: function(e, t) {
                  var n = this.getNodeById(e)
                  ;(n.checked = t),
                    this.showPartialState && (n.partial = !1),
                    this.simpleSelect
                      ? this.togglePreviousChecked(e, t)
                      : this.radioSelect
                      ? (this.togglePreviousChecked(e, t),
                        this.showPartialState && this.partialCheckParents(n),
                        t || this.unCheckParents(n))
                      : (this.hierarchical || this.toggleChildren(e, t),
                        this.showPartialState && this.partialCheckParents(n),
                        this.hierarchical || t || this.unCheckParents(n))
                },
              },
              {
                key: 'unCheckParents',
                value: function(e) {
                  for (var t = e._parent; t; ) {
                    var n = this.getNodeById(t)
                    ;(n.checked = !1), (n.partial = Vn(n, '_children', this.getNodeById.bind(this))), (t = n._parent)
                  }
                },
              },
              {
                key: 'partialCheckParents',
                value: function(e) {
                  for (var t = this, n = e._parent; n; ) {
                    var o = this.getNodeById(n)
                    ;(o.checked = o._children.every(function(e) {
                      return t.getNodeById(e).checked
                    })),
                      (o.partial = Vn(o, '_children', this.getNodeById.bind(this))),
                      (n = o._parent)
                  }
                },
              },
              {
                key: 'toggleChildren',
                value: function(e, t) {
                  var n = this,
                    o = this.getNodeById(e)
                  ;(o.checked = t),
                    this.showPartialState && (o.partial = !1),
                    s(o._children) ||
                      o._children.forEach(function(e) {
                        return n.toggleChildren(e, t)
                      })
                },
              },
              {
                key: 'toggleNodeExpandState',
                value: function(e) {
                  var t = this.getNodeById(e)
                  return (t.expanded = !t.expanded), t.expanded || this.collapseChildren(t), this.tree
                },
              },
              {
                key: 'collapseChildren',
                value: function(e) {
                  var t = this
                  ;(e.expanded = !1),
                    s(e._children) ||
                      e._children.forEach(function(e) {
                        return t.collapseChildren(t.getNodeById(e))
                      })
                },
              },
              {
                key: 'getTreeAndTags',
                value: function() {
                  return { tree: this.tree, tags: this.tags }
                },
              },
              {
                key: 'handleNavigationKey',
                value: function(e, t, n, o, r, a, i) {
                  var l = this,
                    s = e && this.getNodeById(e),
                    c = ho.getAction(s, n)
                  return ao.has(c)
                    ? ho.handleFocusNavigationkey(
                        t,
                        c,
                        s,
                        function(e) {
                          return l.getNodeById(e)
                        },
                        r
                      )
                    : s && t.has(s._id)
                    ? ho.handleToggleNavigationkey(c, s, o, a, i)
                    : e
                },
              },
              {
                key: '_getAddOnMatch',
                value: function(e, t) {
                  var n = function(e, t) {
                    return e.label.toLowerCase().indexOf(t) >= 0
                  }
                  return (
                    'function' == typeof this.searchPredicate && (n = this.searchPredicate),
                    function(o) {
                      n(o, t) && e.push(o._id)
                    }
                  )
                },
              },
              {
                key: 'tags',
                get: function() {
                  var e = this
                  return this.radioSelect || this.simpleSelect
                    ? this.currentChecked
                      ? [this.getNodeById(this.currentChecked)]
                      : []
                    : zn.getNodesMatching(this.tree, function(t, n, o) {
                        return (
                          t.checked &&
                            !e.hierarchical &&
                            zn.markSubTreeVisited(t, o, function(t) {
                              return e.getNodeById(t)
                            }),
                          t.checked
                        )
                      })
                },
              },
            ]),
            e
          )
        })(),
        go = (n(10),
        Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          }),
        vo = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
          }
        })()
      /*!
       * React Dropdown Tree Select
       * A lightweight, fast and highly customizable tree select component.
       * Hrusikesh Panda <hrusikesh.panda@dowjones.com>
       * Copyright (c) 2017 Dow Jones, Inc. <support@dowjones.com> (http://dowjones.com)
       * license MIT
       * see https://github.com/dowjones/react-dropdown-tree-select
       */
      var mo = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var n = (function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
          return (
            (n.initNewProps = function(e) {
              var t = e.data,
                o = e.mode,
                r = e.showDropdown,
                a = e.showPartiallySelected,
                i = e.searchPredicate
              n.treeManager = new fo({
                data: t,
                mode: o,
                showPartiallySelected: a,
                rootPrefixId: n.clientId,
                searchPredicate: i,
              })
              var l = n.state.currentFocus && n.treeManager.getNodeById(n.state.currentFocus)
              l && (l._focused = !0),
                n.setState(function(e) {
                  return go(
                    { showDropdown: /initial|always/.test(r) || !0 === e.showDropdown },
                    n.treeManager.getTreeAndTags()
                  )
                })
            }),
            (n.resetSearchState = function() {
              return (
                n.props.inlineSearchInput || (n.searchInput.value = ''),
                { tree: n.treeManager.restoreNodes(), searchModeOn: !1, allNodesHidden: !1 }
              )
            }),
            (n.handleClick = function(e, t) {
              n.setState(function(e) {
                var t = 'always' === n.props.showDropdown || n.keepDropdownActive || !e.showDropdown
                return (
                  t !== e.showDropdown &&
                    (t
                      ? document.addEventListener('click', n.handleOutsideClick, !1)
                      : document.removeEventListener('click', n.handleOutsideClick, !1)),
                  t ? n.props.onFocus() : n.props.onBlur(),
                  t ? { showDropdown: t } : go({ showDropdown: t }, n.resetSearchState())
                )
              }, t)
            }),
            (n.handleOutsideClick = function(e) {
              'always' !== n.props.showDropdown && c(e, n.node) && n.handleClick()
            }),
            (n.onInputChange = function(e) {
              var t = n.treeManager.filterTree(e, n.props.keepTreeOnSearch, n.props.keepChildrenOnSearch),
                o = t.allNodesHidden,
                r = t.tree,
                a = e.length > 0
              n.setState({ tree: r, searchModeOn: a, allNodesHidden: o })
            }),
            (n.onTagRemove = function(e, t) {
              var o = n.state.tags
              n.onCheckboxChange(e, !1, function(r) {
                t && ho.getNextFocusAfterTagDelete(e, o, r, n.searchInput).focus()
              })
            }),
            (n.onNodeToggle = function(e) {
              n.treeManager.toggleNodeExpandState(e)
              var t = n.state.searchModeOn ? n.treeManager.matchTree : n.treeManager.tree
              n.setState({ tree: t }),
                'function' == typeof n.props.onNodeToggle && n.props.onNodeToggle(n.treeManager.getNodeById(e))
            }),
            (n.onCheckboxChange = function(e, t, o) {
              var r = n.props,
                a = r.mode,
                i = r.keepOpenOnSelect
              n.treeManager.setNodeCheckedState(e, t)
              var l = n.treeManager.tags,
                s = ['simpleSelect', 'radioSelect'].indexOf(a) > -1,
                c = !(s && !i) && n.state.showDropdown
              l.length || (n.treeManager.restoreDefaultValues(), (l = n.treeManager.tags))
              var u = {
                tree: n.state.searchModeOn ? n.treeManager.matchTree : n.treeManager.tree,
                tags: l,
                showDropdown: c,
              }
              ;((s && !c) || n.props.clearSearchOnChange) && Object.assign(u, n.resetSearchState()),
                s && !c && document.removeEventListener('click', n.handleOutsideClick, !1),
                n.setState(u, function() {
                  o && o(l)
                }),
                n.props.onChange(n.treeManager.getNodeById(e), l)
            }),
            (n.onAction = function(e, t) {
              n.props.onAction(n.treeManager.getNodeById(e), t)
            }),
            (n.onInputFocus = function() {
              n.keepDropdownActive = !0
            }),
            (n.onInputBlur = function() {
              n.keepDropdownActive = !1
            }),
            (n.onTrigger = function(e) {
              n.handleClick(e, function() {
                n.state.showDropdown && n.searchInput.focus()
              })
            }),
            (n.onKeyboardKeyDown = function(e) {
              var t = n.props,
                o = t.readOnly,
                r = t.mode,
                a = n.state,
                i = a.showDropdown,
                l = a.tags,
                s = a.searchModeOn,
                c = a.currentFocus,
                u = n.treeManager,
                d = s ? u.matchTree : u.tree
              if (i || (!ho.isValidKey(e.key, !1) && !/^\w$/i.test(e.key)))
                if (i && ho.isValidKey(e.key, !0)) {
                  var h = u.handleNavigationKey(c, d, e.key, o, !s, n.onCheckboxChange, n.onNodeToggle)
                  h !== c && n.setState({ currentFocus: h })
                } else {
                  if (i && ['Escape', 'Tab'].indexOf(e.key) > -1)
                    return void ('simpleSelect' === r && d.has(c)
                      ? n.onCheckboxChange(c, !0)
                      : ((n.keepDropdownActive = !1), n.handleClick()))
                  if ('Backspace' !== e.key || !l.length || 0 !== n.searchInput.value.length) return
                  var p = l.pop()
                  n.onCheckboxChange(p._id, !1)
                }
              else if (
                (e.persist(),
                n.handleClick(null, function() {
                  return n.onKeyboardKeyDown(e)
                }),
                /\w/i.test(e.key))
              )
                return
              e.preventDefault()
            }),
            (n.onReorderList = function(e) {
              n.setState({ tags: e }, function() {
                n.props.onChange(e)
              })
            }),
            (n.getAriaAttributes = function() {
              var e = n.props,
                t = e.mode,
                o = e.texts
              return 'radioSelect' !== t ? {} : go({ role: 'radiogroup' }, h(o.label))
            }),
            (n.state = { searchModeOn: !1, currentFocus: void 0 }),
            (n.clientId = e.id || d.get(n)),
            n
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, a['Component']),
          vo(t, [
            {
              key: 'componentWillMount',
              value: function() {
                this.initNewProps(this.props)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                document.removeEventListener('click', this.handleOutsideClick, !1)
              },
            },
            {
              key: 'componentWillReceiveProps',
              value: function(e) {
                this.initNewProps(e)
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props,
                  n = t.disabled,
                  o = t.readOnly,
                  r = t.mode,
                  a = t.texts,
                  l = t.inlineSearchInput,
                  s = (t.sortable, this.state),
                  c = s.showDropdown,
                  u = s.currentFocus,
                  d = s.tags,
                  h = {
                    disabled: n,
                    readOnly: o,
                    activeDescendant: u ? u + '_li' : void 0,
                    texts: a,
                    mode: r,
                    clientId: this.clientId,
                  },
                  p = i.a.createElement(
                    v,
                    go(
                      {
                        inputRef: function(t) {
                          e.searchInput = t
                        },
                        onInputChange: this.onInputChange,
                        onFocus: this.onInputFocus,
                        onBlur: this.onInputBlur,
                        onKeyDown: this.onKeyboardKeyDown,
                      },
                      h
                    )
                  )
                return i.a.createElement(
                  'div',
                  {
                    id: this.clientId,
                    className: [this.props.className && this.props.className, 'react-dropdown-tree-select']
                      .filter(Boolean)
                      .join(' '),
                    ref: function(t) {
                      e.node = t
                    },
                  },
                  i.a.createElement(
                    'div',
                    {
                      className: [
                        'dropdown',
                        'simpleSelect' === r && 'simple-select',
                        'radioSelect' === r && 'radio-select',
                      ]
                        .filter(Boolean)
                        .join(' '),
                    },
                    i.a.createElement(
                      Zt,
                      go({ onTrigger: this.onTrigger, showDropdown: c }, h, { tags: d }),
                      i.a.createElement(
                        zt,
                        go(
                          { tags: d, onTagRemove: this.onTagRemove, onReorderList: this.onReorderList, sortable: !0 },
                          h
                        ),
                        !l && p
                      )
                    ),
                    c &&
                      i.a.createElement(
                        'div',
                        go({ className: 'dropdown-content' }, this.getAriaAttributes()),
                        l && p,
                        this.state.allNodesHidden
                          ? i.a.createElement('span', { className: 'no-matches' }, a.noMatches || 'No matches found')
                          : i.a.createElement(
                              Bn,
                              go(
                                {
                                  data: this.state.tree,
                                  keepTreeOnSearch: this.props.keepTreeOnSearch,
                                  keepChildrenOnSearch: this.props.keepChildrenOnSearch,
                                  searchModeOn: this.state.searchModeOn,
                                  onAction: this.onAction,
                                  onCheckboxChange: this.onCheckboxChange,
                                  onNodeToggle: this.onNodeToggle,
                                  mode: r,
                                  showPartiallySelected: this.props.showPartiallySelected,
                                },
                                h
                              )
                            )
                      )
                  )
                )
              },
            },
          ]),
          t
        )
      })()
      ;(mo.propTypes = {
        data: r.a.oneOfType([r.a.object, r.a.array]).isRequired,
        clearSearchOnChange: r.a.bool,
        keepTreeOnSearch: r.a.bool,
        keepChildrenOnSearch: r.a.bool,
        keepOpenOnSelect: r.a.bool,
        texts: r.a.shape({
          placeholder: r.a.string,
          noMatches: r.a.string,
          label: r.a.string,
          labelRemove: r.a.string,
        }),
        showDropdown: r.a.oneOf(['default', 'initial', 'always']),
        className: r.a.string,
        onChange: r.a.func,
        onAction: r.a.func,
        onNodeToggle: r.a.func,
        onFocus: r.a.func,
        onBlur: r.a.func,
        mode: r.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: r.a.bool,
        disabled: r.a.bool,
        readOnly: r.a.bool,
        id: r.a.string,
        searchPredicate: r.a.func,
        inlineSearchInput: r.a.bool,
      }),
        (mo.defaultProps = {
          onFocus: function() {},
          onBlur: function() {},
          onChange: function() {},
          texts: {},
          showDropdown: 'default',
          inlineSearchInput: !1,
        })
      t.default = mo
    },
  ])
})
//# sourceMappingURL=react-dropdown-tree-select.js.map

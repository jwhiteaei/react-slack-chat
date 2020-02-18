!(function(e, t) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = t(require('react'), require('prop-types'));
  else if ('function' == typeof define && define.amd)
    define(['react', 'prop-types'], t);
  else {
    var n =
      'object' == typeof exports
        ? t(require('react'), require('prop-types'))
        : t(e.react, e['prop-types']);
    for (var a in n) ('object' == typeof exports ? exports : e)[a] = n[a];
  }
})(window, function(e, t) {
  return (function(e) {
    var t = {};
    function n(a) {
      if (t[a]) return t[a].exports;
      var r = (t[a] = { i: a, l: !1, exports: {} });
      return e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
      }),
      (n.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (
          (n.r(a),
          Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var r in e)
            n.d(
              a,
              r,
              function(t) {
                return e[t];
              }.bind(null, r)
            );
        return a;
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = '/'),
      n((n.s = 165))
    );
  })([
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t, n) {
          var o = r.default.stringify(t),
            i = 'https://slack.com/api/' + e + '?' + o;
          a.default.get(i, function(e, t) {
            if (e) n(e);
            else if (t.body.error) n(Error(t.body.error));
            else if (
              'string' == typeof t.body &&
              t.body.includes(
                'You are sending too many requests. Please relax.'
              )
            )
              n(Error('rate_limit'));
            else {
              var a = JSON.parse(t.body);
              a.ok ? (delete a.ok, n(null, a)) : n(Error(a.error));
            }
          });
        });
      var a = o(n(129)),
        r = o(n(135));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = o.default[e]
              .filter(function(e) {
                return 'Required' === e.required;
              })
              .filter(function(e) {
                return void 0 === t[e.name];
              }),
            a = !1;
          if (n.length) {
            var r = n.map(function(e) {
                return '- ' + e.name + ' ... ' + e.description;
              }),
              i = e + ' missing params:\n' + r.join('\n');
            a = Error(i);
          }
          return a;
        });
      var a,
        r = n(138),
        o = (a = r) && a.__esModule ? a : { default: a };
      e.exports = t.default;
    },
    function(e, t, n) {
      var a = n(161);
      'string' == typeof a && (a = [[e.i, a, '']]);
      var r = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(163)(a, r);
      a.locals && (e.exports = a.locals);
    },
    function(t, n) {
      t.exports = e;
    },
    function(e, t, n) {
      var a;
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
        'use strict';
        var n = {}.hasOwnProperty;
        function r() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var a = arguments[t];
            if (a) {
              var o = typeof a;
              if ('string' === o || 'number' === o) e.push(a);
              else if (Array.isArray(a) && a.length) {
                var i = r.apply(null, a);
                i && e.push(i);
              } else if ('object' === o)
                for (var s in a) n.call(a, s) && a[s] && e.push(s);
            }
          }
          return e.join(' ');
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (a = function() {
                return r;
              }.apply(t, [])) || (e.exports = a);
      })();
    },
    function(e, n) {
      e.exports = t;
    },
    function(e, t, n) {
      let a = n(11),
        r = n(13),
        o = n(118);
      e.exports = a(o, r);
    },
    function(e, t) {
      e.exports = function() {
        for (var e = {}, t = 0; t < arguments.length; t++) {
          var n = arguments[t];
          for (var a in n) n.hasOwnProperty(a) && (e[a] = n[a]);
        }
        return e;
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'rtm.start',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      var a, r, o;
      (r = []),
        void 0 ===
          (o = 'function' == typeof (a = function() {}) ? a.apply(t, r) : a) ||
          (e.exports = o),
        (r = [t]),
        void 0 ===
          (o =
            'function' ==
            typeof (a = function(e) {
              'use strict';
              Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.find = function(e) {
                  return e.match(n) || [];
                }),
                (e.load = function() {
                  return new Promise(function(e) {
                    return a
                      ? e(a)
                      : r(t)
                          .then(function(e) {
                            return e.json();
                          })
                          .then(function(t) {
                            e((a = t));
                          });
                  });
                }),
                (e.all = o),
                (e.exist = i),
                (e.getUrl = s),
                (e.parse = function(e) {
                  var t =
                      arguments.length <= 1 || void 0 === arguments[1]
                        ? {}
                        : arguments[1],
                    a = '',
                    r = t.classNames ? t.classNames.trim().split(/\s+/) : '';
                  return (a += e.replace(n, function(e) {
                    var t = e.replace(/:/g, ''),
                      n = ['gh-emoji', 'gh-emoji-' + t];
                    return i(t)
                      ? (r &&
                          n.push.apply(
                            n,
                            (function(e) {
                              if (Array.isArray(e)) {
                                for (
                                  var t = 0, n = Array(e.length);
                                  t < e.length;
                                  t++
                                )
                                  n[t] = e[t];
                                return n;
                              }
                              return Array.from(e);
                            })(r)
                          ),
                        '<img src="' +
                          s(t) +
                          '" class="' +
                          n.join(' ') +
                          '" alt="' +
                          t +
                          '" />')
                      : e;
                  }));
                });
              var t = 'https://api.github.com/emojis',
                n = /(\:[\w\-\+]+\:)/g,
                a = null,
                r =
                  window.fetch ||
                  function(e) {
                    return new Promise(function(t, n) {
                      var a = new XMLHttpRequest();
                      (a.onreadystatechange = function() {
                        if (a.readyState === XMLHttpRequest.DONE)
                          return 200 !== a.status
                            ? n(a.responseText)
                            : t({
                                json: function() {
                                  return JSON.parse(a.responseText);
                                }
                              });
                      }),
                        a.open('GET', e, !0),
                        a.send();
                    });
                  };
              function o() {
                return a;
              }
              function i(e) {
                var t = o();
                return null != t && !!t[e];
              }
              function s(e) {
                var t = o();
                return null == t ? null : t[e];
              }
            })
              ? a.apply(t, r)
              : a) || (e.exports = o);
    },
    function(e, t) {
      e.exports =
        '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 508 508" style="enable-background:new 0 0 508 508;" xml:space="preserve"><circle style="fill:#84DBFF;" cx="254" cy="254" r="254"></circle><path style="fill:#F1543F;" d="M441.2,190.8c0,3.2-0.8,6-2.8,8.8c-8.8-4.8-19.2-7.2-30-7.2c-11.2,0-21.6,2-30,7.2 c-1.6-2.8-2.8-5.6-2.8-8.8c0-12,14.8-22,32.8-22C426.4,168.8,441.2,178.8,441.2,190.8z"></path><path style="fill:#FF7058;" d="M464.8,254.4c0,12.4-2,25.2-5.2,37.6H357.2c-0.8-3.6-1.6-6.8-2.4-10.4c9.6-17.2,20-45.6,14.8-76 c10-9.2,23.6-13.2,38.4-13.2C439.6,192.4,464.8,209.6,464.8,254.4z"></path><path style="fill:#F9B54C;" d="M444.8,328c0,0,2.8,16-15.6,32.4l-57.6-28c0.4-4.4,1.6-8.4,3.2-12c8.8,16,20.8,26.8,34,26.8 s25.2-11.2,34-26.8C443.6,322.8,444.4,325.2,444.8,328L444.8,328z"></path><path style="fill:#4CDBC4;" d="M485.6,358.4c-8.8,20-20.4,38.4-34,55.2l-3.2-10.4c2-6,9.6-39.6,4.8-60.8L485.6,358.4z"></path><g><path style="fill:#FFFFFF;" d="M448.4,403.2l-12.8-40l-6.4-3.2c18.4-16.4,15.6-32.4,15.6-32.4C462.8,341.6,450.8,395.2,448.4,403.2 z"></path><path style="fill:#FFFFFF;" d="M372,328c-0.4,1.2-0.4,2.8-0.8,4.4l-2.4-1.2C369.6,330,370.8,328.8,372,328z"></path></g><path style="fill:#FFD05B;" d="M462.8,296.8c-3.6,7.2-9.6,10.4-13.6,8c-9.2,23.6-24,42-41.2,42s-32-18.4-41.2-42 c-4,2.4-10-1.2-13.6-8c-1.6-3.2-2.4-6.4-2.8-9.2c2-2.8,4-6.4,6-10.4c0.8,0,1.6,0,2.8,0.4l0,0l0.4,0.4l0,0c0-0.4-1.6-15.2,37.6-31.2 c14-5.6,22.8-12,28-18c2,8.8,6.8,21.2,19.6,26c0,0,12,2.8,10.8,22.8l0,0c2-0.8,4-0.8,5.6,0.4C466.4,281.2,466.8,289.6,462.8,296.8z"></path><path style="fill:#E6E9EE;" d="M342.8,395.2L342.8,395.2c-0.8,5.6-2,11.6-2.8,18l-14-42.4C332.8,376.4,339.2,384,342.8,395.2z"></path><path style="fill:#F9B54C;" d="M338.8,304c0,0,4.8,26.4-33.6,49.2L261.6,332c-11.6-15.2-9.2-28-9.2-28s0,0-0.4,0 c0-0.4,0-0.8,0.4-1.6c12,14.8,26.8,24.4,43.2,24.4s31.2-9.6,43.2-24.4C338.8,303.2,339.2,303.6,338.8,304 C339.2,304,339.2,304,338.8,304z"></path><path style="fill:#2B3B4E;" d="M451.6,413.6c-24,29.6-54.4,53.6-89.2,70l-22.8-70.4c1.2-6,2-12,2.8-18c0.4,0.8,12.8-45.6,6-73.6 l86.4,41.6L451.6,413.6z"></path><g><path style="fill:#FFFFFF;" d="M342.8,395.2c-3.6-11.2-10-19.2-16.8-24.4l-2.8-8.8l-17.6-8.4c38.4-22.8,33.6-49.2,33.6-49.2 C362.8,322,343.2,396.4,342.8,395.2z"></path><path style="fill:#FFFFFF;" d="M261.6,332l-19.2-9.2c1.6-8,4.8-14.8,10-18.8C252.4,304,250,316.8,261.6,332z"></path></g><path style="fill:#FFD05B;" d="M350.8,269.2c-5.6,17.6-8,27.2-8,28.4l0,0c-12.8,17.2-29.2,29.2-46.8,29.2c-16.8,0-32.4-10.4-44.8-26 c0,0,0.4,0,0.4,0.4c-12-14.8-14.8-35.6-14.4-53.6l0,0c4.4-10.4,7.6-22.8,9.6-36c16,12,52.8,12.8,52.8,12.8 c-18.8-3.2-21.6-18-21.6-18c3.2,9.2,44.8,14.8,44.8,14.8C365.2,227.2,350.8,269.2,350.8,269.2z"></path><g><path style="fill:#2B3B4E;" d="M251.2,301.2c0,0-14-11.2-25.6-30.8c3.6-6,7.6-14,11.2-22.8C236.4,265.6,239.2,286.4,251.2,301.2z"></path><path style="fill:#2B3B4E;" d="M342.8,298c0,0,2-10,8-28.4c0,0,14.4-42-28.8-48.4c0,0-41.6-5.6-44.8-14.8c0,0,3.2,15.2,21.6,18 c0,0-36.8-0.8-52.8-12.8c2.4-20,0.8-42-9.6-64c8.4-4.4,19.2-6,34-2c0,0,58.4-23.2,88.4,29.6C390.8,231.6,350.8,292.8,342.8,298z"></path></g><path style="fill:#324A5E;" d="M334.4,239.2H314h-2h-32.4h-1.2h-21.6c-6.4,0-11.6,5.2-11.6,11.6v9.6c0,6.4,5.2,11.6,11.6,11.6h22.4 c2.8,0,5.6-1.2,7.6-2.8c0.8-0.4,1.2-0.8,1.6-1.6c1.6-3.6,4.4-5.6,7.2-5.6c2.8,0,5.6,2,7.2,5.6c0.4,0.8,0.8,1.2,1.6,1.6 c2,2,4.8,2.8,7.6,2.8h22.4c6.4,0,11.6-5.2,11.6-11.6v-9.6C346,244.4,340.8,239.2,334.4,239.2z M256.8,266.4c-3.2,0-6-2.8-6-6v-9.6 c0-3.2,2.8-6,6-6h21.6h1.2c3.2,0,6,2.8,6,6v9.6c0,0.8,0,1.6-0.4,2.4c-0.4,0.4-0.4,0.8-0.8,1.2c-1.2,1.6-2.8,2.4-4.8,2.4H256.8z M295.6,256c-1.6,0-3.2,0.4-4.8,1.2v-6.8c0-2.4-0.8-4.4-1.6-6h13.2c-1.2,1.6-1.6,4-1.6,6v6.8C298.8,256.4,297.2,256,295.6,256z M340.4,260.4c0,3.2-2.8,6-6,6H312c-2,0-3.6-0.8-4.8-2.4c-0.4-0.4-0.4-0.8-0.8-1.2c-0.4-0.8-0.4-1.6-0.4-2.4v-9.6c0-3.2,2.8-6,6-6h2 h20.4c3.2,0,6,2.8,6,6V260.4z"></path><g><path style="fill:#E6E9EE;" d="M77.6,436.4c0.4,0.8,1.2,1.2,1.6,1.6C78.8,437.6,78,437.2,77.6,436.4L77.6,436.4z"></path><path style="fill:#E6E9EE;" d="M160,355.6c-0.4,0-0.8,0.4-1.2,0.4s-0.8-0.4-1.2-0.4H160z"></path><path style="fill:#E6E9EE;" d="M214,399.6c-4.4,29.2-11.6,63.2-23.6,100.4c-26-6.8-50.8-17.6-72.8-31.6c-6.8-24.8-11.2-48-14-68.8 c12.8-40,55.2-43.6,55.2-43.6S201.6,359.6,214,399.6z"></path></g><path style="fill:#F9B54C;" d="M209.6,292c0,0,6.4,36-50.8,64h-0.4c-57.2-28-50.8-64-50.8-64s0,0-0.4,0c0-0.4,0.4-1.2,0.4-1.6 c14,17.2,31.6,28.4,50.8,28.4s36.4-11.2,50.8-28.4C209.6,291.2,210,291.6,209.6,292C210,292.4,210,292,209.6,292z"></path><g><path style="fill:#54C0EB;" d="M159.2,356C159.2,356,158.8,356,159.2,356c-0.4,0-0.4,0-0.4,0H159.2z"></path><path style="fill:#54C0EB;" d="M179.2,361.6l-6.8,19.6h-26.8l-6.8-19.6c11.2-4.8,20-5.6,20-5.6S168,356.8,179.2,361.6z"></path></g><path style="fill:#84DBFF;" d="M189.2,499.6l-16.8-118.4h-26.8L132,476.8C149.6,486.4,168.8,494.4,189.2,499.6z"></path><path style="fill:#324A5E;" d="M117.6,468.4c-44-28-78.8-69.2-98.8-118l77.6-37.2c-8,33.6,6.8,88,7.2,86.8 C106.4,420.4,111.2,443.2,117.6,468.4z"></path><g><path style="fill:#FFFFFF;" d="M209.6,292c0,0,6.4,36-50.8,64c0,0,42.8,3.2,55.2,43.6C214.8,400.8,238,313.6,209.6,292z"></path><path style="fill:#FFFFFF;" d="M108,292c-28,21.2-4.8,108.8-4.4,107.2c12.8-40,55.2-43.6,55.2-43.6C101.6,328.4,108,292,108,292z"></path></g><path style="fill:#FFD05B;" d="M223.6,251.2c-7.2,22-9.6,33.6-9.6,33.6c-14.8,20.4-34,34-55.2,34c-20,0-38-12.4-52.8-30.8l0.4,0.4 c-31.2-38.4-9.6-109.2-9.6-109.2c15.6,17.6,66,18.8,66,18.8c-22-3.6-25.6-21.2-25.6-21.2c3.6,10.8,52.4,17.2,52.4,17.2 C240.4,202,223.6,251.2,223.6,251.2z"></path><g><path style="fill:#324A5E;" d="M129.6,105.6c0,0,68.8-27.6,103.6,34.8c37.6,66.4-9.6,138.8-19.2,144.4c0,0,2.4-11.6,9.6-33.6 c0,0,16.8-49.2-33.6-56.8c0,0-49.2-6.4-52.4-17.2c0,0,3.6,17.6,25.6,21.2c0,0-50.4-1.2-66-18.8c0,0-21.6,70.8,10,109.2 c0,0-54-43.2-47.6-110C59.2,178.8,56.4,87.2,129.6,105.6z"></path><path style="fill:#324A5E;" d="M362.4,483.6C329.6,499.2,292.8,508,254,508c-22,0-43.2-2.8-63.2-8c12-37.2,19.2-71.2,23.6-100.4 l0,0c0.8,0,14.8-53.6,7.2-86.8L323.2,362L362.4,483.6z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
    },
    function(e, t, n) {
      var a = n(12);
      e.exports = function(e, t) {
        return (
          Object.keys(a).forEach(n => {
            var a = n.split('.'),
              r = a.shift();
            void 0 === e[r] && (e[r] = {}),
              (function e(r) {
                var o = a.shift();
                0 === a.length
                  ? (r[o] = t.bind({}, n))
                  : (void 0 === r[o] && (r[o] = {}), e(r[o]));
              })(e[r]);
          }),
          e
        );
      };
    },
    function(e) {
      e.exports = {
        'api.test': [],
        'apps.permissions.info': ['token'],
        'apps.permissions.request': ['token', 'scopes', 'trigger_id'],
        'apps.permissions.resources.list': ['token'],
        'apps.permissions.scopes.list': ['token'],
        'apps.permissions.users.list': ['token'],
        'apps.permissions.users.request': [
          'token',
          'scopes',
          'trigger_id',
          'user'
        ],
        'apps.uninstall': ['token', 'client_id', 'client_secret'],
        'auth.revoke': ['token'],
        'auth.test': ['token'],
        'bots.info': ['token'],
        'channels.archive': ['token', 'channel'],
        'channels.create': ['token', 'name'],
        'channels.history': ['token', 'channel'],
        'channels.info': ['token', 'channel'],
        'channels.invite': ['token', 'channel', 'user'],
        'channels.join': ['token', 'name'],
        'channels.kick': ['token', 'channel', 'user'],
        'channels.leave': ['token', 'channel'],
        'channels.list': ['token'],
        'channels.mark': ['token', 'channel', 'ts'],
        'channels.rename': ['token', 'channel', 'name'],
        'channels.replies': ['token', 'channel', 'thread_ts'],
        'channels.setPurpose': ['token', 'channel', 'purpose'],
        'channels.setTopic': ['token', 'channel', 'topic'],
        'channels.unarchive': ['token', 'channel'],
        'chat.delete': ['token', 'channel', 'ts'],
        'chat.getPermalink': ['token', 'channel', 'message_ts'],
        'chat.meMessage': ['token', 'channel', 'text'],
        'chat.postEphemeral': ['token', 'channel', 'text', 'user'],
        'chat.postMessage': ['token', 'channel', 'text'],
        'chat.unfurl': ['token', 'channel', 'ts', 'unfurls'],
        'chat.update': ['token', 'channel', 'text', 'ts'],
        'conversations.archive': ['token', 'channel'],
        'conversations.close': ['token', 'channel'],
        'conversations.create': ['token', 'name'],
        'conversations.history': ['token', 'channel'],
        'conversations.info': ['token', 'channel'],
        'conversations.invite': ['token', 'channel', 'users'],
        'conversations.join': ['token', 'channel'],
        'conversations.kick': ['token', 'channel', 'user'],
        'conversations.leave': ['token', 'channel'],
        'conversations.list': ['token'],
        'conversations.members': ['token', 'channel'],
        'conversations.open': ['token'],
        'conversations.rename': ['token', 'channel', 'name'],
        'conversations.replies': ['token', 'channel', 'ts'],
        'conversations.setPurpose': ['token', 'channel', 'purpose'],
        'conversations.setTopic': ['token', 'channel', 'topic'],
        'conversations.unarchive': ['token', 'channel'],
        'dialog.open': ['token', 'dialog', 'trigger_id'],
        'dnd.endDnd': ['token'],
        'dnd.endSnooze': ['token'],
        'dnd.info': ['token'],
        'dnd.setSnooze': ['token', 'num_minutes'],
        'dnd.teamInfo': ['token'],
        'emoji.list': ['token'],
        'files.comments.add': ['token', 'comment', 'file'],
        'files.comments.delete': ['token', 'file', 'id'],
        'files.comments.edit': ['token', 'comment', 'file', 'id'],
        'files.delete': ['token', 'file'],
        'files.info': ['token', 'file'],
        'files.list': ['token'],
        'files.revokePublicURL': ['token', 'file'],
        'files.sharedPublicURL': ['token', 'file'],
        'files.upload': ['token'],
        'groups.archive': ['token', 'channel'],
        'groups.create': ['token', 'name'],
        'groups.createChild': ['token', 'channel'],
        'groups.history': ['token', 'channel'],
        'groups.info': ['token', 'channel'],
        'groups.invite': ['token', 'channel', 'user'],
        'groups.kick': ['token', 'channel', 'user'],
        'groups.leave': ['token', 'channel'],
        'groups.list': ['token'],
        'groups.mark': ['token', 'channel', 'ts'],
        'groups.open': ['token', 'channel'],
        'groups.rename': ['token', 'channel', 'name'],
        'groups.replies': ['token', 'channel', 'thread_ts'],
        'groups.setPurpose': ['token', 'channel', 'purpose'],
        'groups.setTopic': ['token', 'channel', 'topic'],
        'groups.unarchive': ['token', 'channel'],
        'im.close': ['token', 'channel'],
        'im.history': ['token', 'channel'],
        'im.list': ['token'],
        'im.mark': ['token', 'channel', 'ts'],
        'im.open': ['token', 'user'],
        'im.replies': ['token', 'channel', 'thread_ts'],
        'migration.exchange': ['token', 'users'],
        'mpim.close': ['token', 'channel'],
        'mpim.history': ['token', 'channel'],
        'mpim.list': ['token'],
        'mpim.mark': ['token', 'channel', 'ts'],
        'mpim.open': ['token', 'users'],
        'mpim.replies': ['token', 'channel', 'thread_ts'],
        'oauth.access': ['client_id', 'client_secret', 'code'],
        'oauth.token': ['client_id', 'client_secret', 'code'],
        'pins.add': ['token', 'channel'],
        'pins.list': ['token', 'channel'],
        'pins.remove': ['token', 'channel'],
        'reactions.add': ['token', 'name'],
        'reactions.get': ['token'],
        'reactions.list': ['token'],
        'reactions.remove': ['token', 'name'],
        'reminders.add': ['token', 'text', 'time'],
        'reminders.complete': ['token', 'reminder'],
        'reminders.delete': ['token', 'reminder'],
        'reminders.info': ['token', 'reminder'],
        'reminders.list': ['token'],
        'rtm.connect': ['token'],
        'rtm.start': ['token'],
        'search.all': ['token', 'query'],
        'search.files': ['token', 'query'],
        'search.messages': ['token', 'query'],
        'stars.add': ['token'],
        'stars.list': ['token'],
        'stars.remove': ['token'],
        'team.accessLogs': ['token'],
        'team.billableInfo': ['token'],
        'team.info': ['token'],
        'team.integrationLogs': ['token'],
        'team.profile.get': ['token'],
        'usergroups.create': ['token', 'name'],
        'usergroups.disable': ['token', 'usergroup'],
        'usergroups.enable': ['token', 'usergroup'],
        'usergroups.list': ['token'],
        'usergroups.update': ['token', 'usergroup'],
        'usergroups.users.list': ['token', 'usergroup'],
        'usergroups.users.update': ['token', 'usergroup', 'users'],
        'users.conversations': ['token'],
        'users.deletePhoto': ['token'],
        'users.getPresence': ['token', 'user'],
        'users.identity': ['token'],
        'users.info': ['token', 'user'],
        'users.list': ['token'],
        'users.lookupByEmail': ['token', 'email'],
        'users.setActive': ['token'],
        'users.setPhoto': ['token', 'image'],
        'users.setPresence': ['token', 'presence'],
        'users.profile.get': ['token'],
        'users.profile.set': ['token']
      };
    },
    function(e, t, n) {
      let a = n(14),
        r = n(15),
        o = encodeURIComponent,
        i = e =>
          Object.keys(e)
            .map(t => o(t) + '=' + o(e[t]))
            .join('&'),
        s = e => {
          let t = new FormData();
          return (
            Object.keys(e).forEach(n => {
              t.append(n, e[n]);
            }),
            t
          );
        };
      async function g(e, t, n) {
        try {
          var o = a(e, t);
          if (o) throw o;
          var g = /files.upload/.test(e),
            A = { method: 'POST', body: g ? s(t) : i(t) };
          g ||
            (A.headers = new Headers({
              'Content-Type': 'application/x-www-form-urlencoded'
            }));
          var u = await fetch(`${r}/api/${e}`, A),
            C = await u.json();
          if (C.error) {
            var l = Error(C.error);
            C.response_metadata &&
              C.response_metadata.messages &&
              (l.messages = C.response_metadata.messages),
              n(l);
          } else if (429 === u.status) {
            ((l = Error('ratelimited')).retry = u.headers.get('retry-after')),
              n(l);
          } else n(null, C);
        } catch (l) {
          n(l);
        }
      }
      e.exports = function(e, t, n) {
        var a = new Error();
        if (!n)
          return new Promise(function(n, r) {
            g(e, t, function(e, t) {
              e
                ? ((e.stack = a.stack.replace(/^Error/, 'Error: ' + e.message)),
                  r(e))
                : n(t);
            });
          });
        g(e, t, function(e, t) {
          e && (e.stack = a.stack.replace(/^Error/, 'Error: ' + e.message)),
            n(e, t);
        });
      };
    },
    function(e, t, n) {
      var a = n(12);
      e.exports = function(e, t) {
        let n = a[e].filter(e => void 0 === t[e]);
        return !!n.length && Error(`${e} missing params: ${n.join(', ')}`);
      };
    },
    function(e, t) {
      var n = 'https://slack.com';
      Object({ NODE_ENV: 'production', SYSTEM_HOOKS: !1 }).STENO_URL &&
        (n = Object({ NODE_ENV: 'production', SYSTEM_HOOKS: !1 }).STENO_URL),
        (e.exports = n);
    },
    function(e, t, n) {
      'use strict';
      (t.decode = t.parse = n(120)), (t.encode = t.stringify = n(121));
    },
    function(e, t, n) {
      'use strict';
      var a = n(18),
        r = n(19);
      function o(e) {
        (this.request = e.request),
          (this.xhr = e.xhr),
          (this.headers = e.headers || {}),
          (this.status = e.status || 0),
          (this.text = e.text),
          (this.body = e.body),
          (this.contentType = e.contentType),
          (this.isHttpError = e.status >= 400);
      }
      (o.prototype.header = a.prototype.header),
        (o.fromRequest = function(e) {
          return new o(r(e));
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      'use strict';
      function a(e) {
        var t = 'string' == typeof e ? { url: e } : e || {};
        (this.method = t.method ? t.method.toUpperCase() : 'GET'),
          (this.url = t.url),
          (this.headers = t.headers || {}),
          (this.body = t.body),
          (this.timeout = t.timeout || 0),
          (this.errorOn404 = null == t.errorOn404 || t.errorOn404),
          (this.onload = t.onload),
          (this.onerror = t.onerror);
      }
      (a.prototype.abort = function() {
        if (!this.aborted) return (this.aborted = !0), this.xhr.abort(), this;
      }),
        (a.prototype.header = function(e, t) {
          var n;
          for (n in this.headers)
            if (
              this.headers.hasOwnProperty(n) &&
              e.toLowerCase() === n.toLowerCase()
            ) {
              if (1 === arguments.length) return this.headers[n];
              delete this.headers[n];
              break;
            }
          if (null != t) return (this.headers[e] = t), t;
        }),
        (e.exports = a);
    },
    function(e, t, n) {
      'use strict';
      var a = n(7);
      e.exports = function(e) {
        var t = e.xhr,
          n = { request: e, xhr: t };
        try {
          var r,
            o,
            i,
            s = {};
          if (t.getAllResponseHeaders)
            for (
              r = t.getAllResponseHeaders().split('\n'), o = 0;
              o < r.length;
              o++
            )
              (i = r[o].match(/\s*([^\s]+):\s+([^\s]+)/)) && (s[i[1]] = i[2]);
          n = a(n, {
            status: t.status,
            contentType:
              t.contentType ||
              (t.getResponseHeader && t.getResponseHeader('Content-Type')),
            headers: s,
            text: t.responseText,
            body: t.response || t.responseText
          });
        } catch (e) {}
        return n;
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'auth.test',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'bots.info',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'channels.archive',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'channels.create',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'channels.history',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'channels.info',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'channels.invite',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'channels.join',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'channels.kick',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'channels.leave',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'channels.list',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'channels.mark',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'channels.rename',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'channels.setPurpose',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'channels.setTopic',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'channels.unarchive',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'chat.delete',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'chat.meMessage',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'chat.postMessage',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'chat.update',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'dnd.endDnd',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'dnd.endSnooze',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'dnd.info',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'dnd.setSnooze',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'dnd.teamInfo',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'emoji.list',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'files.comments.add',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'files.comments.delete',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'files.comments.edit',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'files.delete',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'files.info',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'files.list',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'files.revokePublicURL',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'files.sharedPublicURL',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'files.upload',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'groups.archive',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'groups.close',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'groups.create',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'groups.createChild',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'groups.history',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'groups.info',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'groups.invite',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'groups.kick',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'groups.leave',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'groups.list',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'groups.mark',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'groups.open',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'groups.rename',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'groups.setPurpose',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'groups.setTopic',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'groups.unarchive',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'im.close',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'im.history',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'im.list',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'im.mark',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'im.open',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'mpim.close',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'mpim.history',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'mpim.list',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'mpim.mark',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'mpim.open',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'pins.add',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'pins.list',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'pins.remove',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'reactions.add',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'reactions.get',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'reactions.list',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'reactions.remove',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'reminders.add',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'reminders.complete',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'reminders.delete',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'reminders.info',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'reminders.list',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'search.all',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'search.files',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'search.messages',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'stars.add',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'stars.list',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'stars.remove',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'team.accessLogs',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'team.billableInfo',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'team.info',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'team.integrationLogs',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'team.profile.get',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'usergroups.create',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'usergroups.disable',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'usergroups.enable',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'usergroups.list',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'usergroups.update',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'usergroups.users.list',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'usergroups.users.update',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'users.getPresence',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'users.identity',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'users.info',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'users.list',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'users.setActive',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'users.setPresence',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = q(n(128)),
        r = q(n(139)),
        o = q(n(142)),
        i = q(n(20)),
        s = q(n(143)),
        g = q(n(144)),
        A = q(n(145)),
        u = q(n(45)),
        C = q(n(146)),
        l = q(n(147)),
        c = q(n(148)),
        I = q(n(149)),
        d = q(n(150)),
        p = q(n(151)),
        f = q(n(152)),
        x = q(n(153)),
        h = q(n(154)),
        m = q(n(8)),
        _ = q(n(156)),
        v = q(n(157)),
        k = q(n(158)),
        b = q(n(159)),
        y = q(n(160));
      function q(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = {
        describe:
          '\n  slack\n    api.client(token)\n    api.test(params, (err, data)=>)\n    auth.test(token, (err, data)=>)\n    bots.info\n    channels.archive({token, channel}, (err, data)=>)\n    channels.create({token, name}, (err, data)=>)\n    channels.history({token, channel}, (err, data)=>)\n    channels.info\n    channels.invite\n    channels.join\n    channels.kick\n    channels.leave\n    channels.list({token, exclude_archived}, (err, data)=>)\n    channels.mark\n    channels.rename\n    channels.setPurpose\n    channels.setTopic\n    channels.unarchive\n    chat.delete\n    chat.postMessage({token, text, channel}, (err, data)=>)\n    chat.update\n    emoji.list\n    files.delete\n    files.info\n    files.list\n    files.upload\n    groups.archive\n    groups.close\n    groups.create\n    groups.createChild\n    groups.history\n    groups.info\n    groups.invite\n    groups.kick\n    groups.leave\n    groups.list\n    groups.mark\n    groups.open\n    groups.rename\n    groups.setPurpose\n    groups.setTopic\n    groups.unarchive\n    im.close\n    im.history\n    im.list\n    im.mark\n    im.open\n    mpim.close\n    mpim.history\n    mpim.list\n    mpim.mark\n    mpim.open\n    oauth.access({client_id, client_secret, code}, (err, data)=>)\n    pins.add\n    pins.list\n    pins.remove\n    reactions.add\n    reactions.get\n    reactions.list\n    reactions.remove\n    reminders.add\n    reminders.complete\n    reminders.delete\n    reminders.info\n    reminders.list\n    rtm.client()\n    rtm.start({token}, (err, data)=>)\n    search.all\n    search.files\n    search.messages\n    stars.add\n    stars.list\n    stars.remove\n    team.acccessLogs\n    team.billableInfo\n    team.info(token, (err, data)=>)\n    team.integrationLogs\n    team.profile.get\n    usergroups.create\n    usergroups.disable\n    usergroups.enable\n    usergroups.list\n    usergroups.update\n    usergroups.users.list\n    usergroups.users.update\n    users.getPresence\n    users.identity\n    users.info\n    users.list(token, (err, data)=>)\n    users.setActive\n    users.setPresence\n',
        api: { test: a.default, client: r.default },
        auth: { test: i.default },
        bots: o.default,
        channels: s.default,
        chat: g.default,
        dnd: A.default,
        emoji: { list: u.default },
        files: C.default,
        groups: l.default,
        im: c.default,
        mpim: I.default,
        oauth: { access: d.default },
        reactions: p.default,
        reminders: f.default,
        pins: x.default,
        rtm: { client: h.default, start: m.default },
        search: _.default,
        stars: v.default,
        team: k.default,
        usergroups: b.default,
        users: y.default
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      var a = n(11),
        r = n(13),
        o = n(119);
      e.exports = function(e) {
        e || (e = {}), e.useElectronNet && (r = o(e));
        return new (class {
          constructor() {
            a(this, function(t, n = {}, a) {
              return (n.token = (n && n.token) || e.token), r(t, n, a);
            });
          }
        })();
      };
    },
    function(e, t, n) {
      var a = n(16),
        r = n(122),
        o = n(14),
        i = n(127),
        s = n(15);
      function g(e, t) {
        var n = r.parse(e.url);
        (n.method = 'POST'),
          (n.rejectUnauthorized = !1),
          (n.headers = e.headers || {}),
          (n.headers['User-Agent'] = 'tiny-http');
        var o = e.useElectronNet.request(n),
          i = [];
        o.on('response', function(n) {
          n.on('abort', t),
            n.on('error', t),
            n.on('login', function(t, n) {
              e.login ? e.login(t, n) : n(e.username, e.password);
            }),
            n.on('end', function() {
              var e = JSON.parse(i.join(''));
              t(null, { body: e });
            }),
            n.on('data', e => i.push(e));
        }),
          o.write(a.stringify(e.data)),
          o.end();
      }
      e.exports = function(e) {
        var t = new Error(),
          n = (function(e) {
            return function(t, n, a) {
              var r = o(t, n);
              if (r) a(r);
              else {
                Object.keys(n).forEach(function(e) {
                  'object' == typeof n[e] && (n[e] = JSON.stringify(n[e]));
                });
                var i = {
                  url: `${s}/api/${t}`,
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  data: n
                };
                e && (i = Object.assign({}, i, e)),
                  g(i, function(e, t) {
                    if (e) a(e);
                    else if (429 === t.statusCode) {
                      var n = Error('ratelimited');
                      (n.retry = t.headers['retry-after']), a(n);
                    } else if (t.body && t.body.error) {
                      var n = Error(t.body.error);
                      t.body.response_metadata &&
                        t.body.response_metadata.messages &&
                        (n.messages = t.body.response_metadata.messages),
                        a(n);
                    } else a(null, t.body);
                  });
              }
            };
          })(e);
        return function(e, a, r) {
          if (!r)
            return i(n)(e, a).catch(function(e) {
              throw ((e.stack = t.stack.replace(
                /^Error/,
                'Error: ' + e.message
              )),
              e);
            });
          n(e, a, function(e, n) {
            e && (e.stack = t.stack.replace(/^Error/, 'Error: ' + e.message)),
              r(e, n);
          });
        };
      };
    },
    function(e, t, n) {
      'use strict';
      function a(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      e.exports = function(e, t, n, o) {
        (t = t || '&'), (n = n || '=');
        var i = {};
        if ('string' != typeof e || 0 === e.length) return i;
        var s = /\+/g;
        e = e.split(t);
        var g = 1e3;
        o && 'number' == typeof o.maxKeys && (g = o.maxKeys);
        var A = e.length;
        g > 0 && A > g && (A = g);
        for (var u = 0; u < A; ++u) {
          var C,
            l,
            c,
            I,
            d = e[u].replace(s, '%20'),
            p = d.indexOf(n);
          p >= 0
            ? ((C = d.substr(0, p)), (l = d.substr(p + 1)))
            : ((C = d), (l = '')),
            (c = decodeURIComponent(C)),
            (I = decodeURIComponent(l)),
            a(i, c)
              ? r(i[c])
                ? i[c].push(I)
                : (i[c] = [i[c], I])
              : (i[c] = I);
        }
        return i;
      };
      var r =
        Array.isArray ||
        function(e) {
          return '[object Array]' === Object.prototype.toString.call(e);
        };
    },
    function(e, t, n) {
      'use strict';
      var a = function(e) {
        switch (typeof e) {
          case 'string':
            return e;
          case 'boolean':
            return e ? 'true' : 'false';
          case 'number':
            return isFinite(e) ? e : '';
          default:
            return '';
        }
      };
      e.exports = function(e, t, n, s) {
        return (
          (t = t || '&'),
          (n = n || '='),
          null === e && (e = void 0),
          'object' == typeof e
            ? o(i(e), function(i) {
                var s = encodeURIComponent(a(i)) + n;
                return r(e[i])
                  ? o(e[i], function(e) {
                      return s + encodeURIComponent(a(e));
                    }).join(t)
                  : s + encodeURIComponent(a(e[i]));
              }).join(t)
            : s
            ? encodeURIComponent(a(s)) + n + encodeURIComponent(a(e))
            : ''
        );
      };
      var r =
        Array.isArray ||
        function(e) {
          return '[object Array]' === Object.prototype.toString.call(e);
        };
      function o(e, t) {
        if (e.map) return e.map(t);
        for (var n = [], a = 0; a < e.length; a++) n.push(t(e[a], a));
        return n;
      }
      var i =
        Object.keys ||
        function(e) {
          var t = [];
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
          return t;
        };
    },
    function(e, t, n) {
      'use strict';
      var a = n(123),
        r = n(126);
      function o() {
        (this.protocol = null),
          (this.slashes = null),
          (this.auth = null),
          (this.host = null),
          (this.port = null),
          (this.hostname = null),
          (this.hash = null),
          (this.search = null),
          (this.query = null),
          (this.pathname = null),
          (this.path = null),
          (this.href = null);
      }
      (t.parse = h),
        (t.resolve = function(e, t) {
          return h(e, !1, !0).resolve(t);
        }),
        (t.resolveObject = function(e, t) {
          return e ? h(e, !1, !0).resolveObject(t) : t;
        }),
        (t.format = function(e) {
          r.isString(e) && (e = h(e));
          return e instanceof o ? e.format() : o.prototype.format.call(e);
        }),
        (t.Url = o);
      var i = /^([a-z0-9.+-]+:)/i,
        s = /:[0-9]*$/,
        g = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        A = ['{', '}', '|', '\\', '^', '`'].concat([
          '<',
          '>',
          '"',
          '`',
          ' ',
          '\r',
          '\n',
          '\t'
        ]),
        u = ["'"].concat(A),
        C = ['%', '/', '?', ';', '#'].concat(u),
        l = ['/', '?', '#'],
        c = /^[+a-z0-9A-Z_-]{0,63}$/,
        I = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        d = { javascript: !0, 'javascript:': !0 },
        p = { javascript: !0, 'javascript:': !0 },
        f = {
          http: !0,
          https: !0,
          ftp: !0,
          gopher: !0,
          file: !0,
          'http:': !0,
          'https:': !0,
          'ftp:': !0,
          'gopher:': !0,
          'file:': !0
        },
        x = n(16);
      function h(e, t, n) {
        if (e && r.isObject(e) && e instanceof o) return e;
        var a = new o();
        return a.parse(e, t, n), a;
      }
      (o.prototype.parse = function(e, t, n) {
        if (!r.isString(e))
          throw new TypeError(
            "Parameter 'url' must be a string, not " + typeof e
          );
        var o = e.indexOf('?'),
          s = -1 !== o && o < e.indexOf('#') ? '?' : '#',
          A = e.split(s);
        A[0] = A[0].replace(/\\/g, '/');
        var h = (e = A.join(s));
        if (((h = h.trim()), !n && 1 === e.split('#').length)) {
          var m = g.exec(h);
          if (m)
            return (
              (this.path = h),
              (this.href = h),
              (this.pathname = m[1]),
              m[2]
                ? ((this.search = m[2]),
                  (this.query = t
                    ? x.parse(this.search.substr(1))
                    : this.search.substr(1)))
                : t && ((this.search = ''), (this.query = {})),
              this
            );
        }
        var _ = i.exec(h);
        if (_) {
          var v = (_ = _[0]).toLowerCase();
          (this.protocol = v), (h = h.substr(_.length));
        }
        if (n || _ || h.match(/^\/\/[^@\/]+@[^@\/]+/)) {
          var k = '//' === h.substr(0, 2);
          !k || (_ && p[_]) || ((h = h.substr(2)), (this.slashes = !0));
        }
        if (!p[_] && (k || (_ && !f[_]))) {
          for (var b, y, q = -1, R = 0; R < l.length; R++) {
            -1 !== (M = h.indexOf(l[R])) && (-1 === q || M < q) && (q = M);
          }
          -1 !== (y = -1 === q ? h.lastIndexOf('@') : h.lastIndexOf('@', q)) &&
            ((b = h.slice(0, y)),
            (h = h.slice(y + 1)),
            (this.auth = decodeURIComponent(b))),
            (q = -1);
          for (R = 0; R < C.length; R++) {
            var M;
            -1 !== (M = h.indexOf(C[R])) && (-1 === q || M < q) && (q = M);
          }
          -1 === q && (q = h.length),
            (this.host = h.slice(0, q)),
            (h = h.slice(q)),
            this.parseHost(),
            (this.hostname = this.hostname || '');
          var w =
            '[' === this.hostname[0] &&
            ']' === this.hostname[this.hostname.length - 1];
          if (!w)
            for (
              var O = this.hostname.split(/\./), j = ((R = 0), O.length);
              R < j;
              R++
            ) {
              var P = O[R];
              if (P && !P.match(c)) {
                for (var S = '', T = 0, E = P.length; T < E; T++)
                  P.charCodeAt(T) > 127 ? (S += 'x') : (S += P[T]);
                if (!S.match(c)) {
                  var N = O.slice(0, R),
                    U = O.slice(R + 1),
                    F = P.match(I);
                  F && (N.push(F[1]), U.unshift(F[2])),
                    U.length && (h = '/' + U.join('.') + h),
                    (this.hostname = N.join('.'));
                  break;
                }
              }
            }
          this.hostname.length > 255
            ? (this.hostname = '')
            : (this.hostname = this.hostname.toLowerCase()),
            w || (this.hostname = a.toASCII(this.hostname));
          var z = this.port ? ':' + this.port : '',
            D = this.hostname || '';
          (this.host = D + z),
            (this.href += this.host),
            w &&
              ((this.hostname = this.hostname.substr(
                1,
                this.hostname.length - 2
              )),
              '/' !== h[0] && (h = '/' + h));
        }
        if (!d[v])
          for (R = 0, j = u.length; R < j; R++) {
            var G = u[R];
            if (-1 !== h.indexOf(G)) {
              var L = encodeURIComponent(G);
              L === G && (L = escape(G)), (h = h.split(G).join(L));
            }
          }
        var Z = h.indexOf('#');
        -1 !== Z && ((this.hash = h.substr(Z)), (h = h.slice(0, Z)));
        var B = h.indexOf('?');
        if (
          (-1 !== B
            ? ((this.search = h.substr(B)),
              (this.query = h.substr(B + 1)),
              t && (this.query = x.parse(this.query)),
              (h = h.slice(0, B)))
            : t && ((this.search = ''), (this.query = {})),
          h && (this.pathname = h),
          f[v] && this.hostname && !this.pathname && (this.pathname = '/'),
          this.pathname || this.search)
        ) {
          z = this.pathname || '';
          var H = this.search || '';
          this.path = z + H;
        }
        return (this.href = this.format()), this;
      }),
        (o.prototype.format = function() {
          var e = this.auth || '';
          e &&
            ((e = (e = encodeURIComponent(e)).replace(/%3A/i, ':')),
            (e += '@'));
          var t = this.protocol || '',
            n = this.pathname || '',
            a = this.hash || '',
            o = !1,
            i = '';
          this.host
            ? (o = e + this.host)
            : this.hostname &&
              ((o =
                e +
                (-1 === this.hostname.indexOf(':')
                  ? this.hostname
                  : '[' + this.hostname + ']')),
              this.port && (o += ':' + this.port)),
            this.query &&
              r.isObject(this.query) &&
              Object.keys(this.query).length &&
              (i = x.stringify(this.query));
          var s = this.search || (i && '?' + i) || '';
          return (
            t && ':' !== t.substr(-1) && (t += ':'),
            this.slashes || ((!t || f[t]) && !1 !== o)
              ? ((o = '//' + (o || '')),
                n && '/' !== n.charAt(0) && (n = '/' + n))
              : o || (o = ''),
            a && '#' !== a.charAt(0) && (a = '#' + a),
            s && '?' !== s.charAt(0) && (s = '?' + s),
            t +
              o +
              (n = n.replace(/[?#]/g, function(e) {
                return encodeURIComponent(e);
              })) +
              (s = s.replace('#', '%23')) +
              a
          );
        }),
        (o.prototype.resolve = function(e) {
          return this.resolveObject(h(e, !1, !0)).format();
        }),
        (o.prototype.resolveObject = function(e) {
          if (r.isString(e)) {
            var t = new o();
            t.parse(e, !1, !0), (e = t);
          }
          for (
            var n = new o(), a = Object.keys(this), i = 0;
            i < a.length;
            i++
          ) {
            var s = a[i];
            n[s] = this[s];
          }
          if (((n.hash = e.hash), '' === e.href))
            return (n.href = n.format()), n;
          if (e.slashes && !e.protocol) {
            for (var g = Object.keys(e), A = 0; A < g.length; A++) {
              var u = g[A];
              'protocol' !== u && (n[u] = e[u]);
            }
            return (
              f[n.protocol] &&
                n.hostname &&
                !n.pathname &&
                (n.path = n.pathname = '/'),
              (n.href = n.format()),
              n
            );
          }
          if (e.protocol && e.protocol !== n.protocol) {
            if (!f[e.protocol]) {
              for (var C = Object.keys(e), l = 0; l < C.length; l++) {
                var c = C[l];
                n[c] = e[c];
              }
              return (n.href = n.format()), n;
            }
            if (((n.protocol = e.protocol), e.host || p[e.protocol]))
              n.pathname = e.pathname;
            else {
              for (
                var I = (e.pathname || '').split('/');
                I.length && !(e.host = I.shift());

              );
              e.host || (e.host = ''),
                e.hostname || (e.hostname = ''),
                '' !== I[0] && I.unshift(''),
                I.length < 2 && I.unshift(''),
                (n.pathname = I.join('/'));
            }
            if (
              ((n.search = e.search),
              (n.query = e.query),
              (n.host = e.host || ''),
              (n.auth = e.auth),
              (n.hostname = e.hostname || e.host),
              (n.port = e.port),
              n.pathname || n.search)
            ) {
              var d = n.pathname || '',
                x = n.search || '';
              n.path = d + x;
            }
            return (
              (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n
            );
          }
          var h = n.pathname && '/' === n.pathname.charAt(0),
            m = e.host || (e.pathname && '/' === e.pathname.charAt(0)),
            _ = m || h || (n.host && e.pathname),
            v = _,
            k = (n.pathname && n.pathname.split('/')) || [],
            b =
              ((I = (e.pathname && e.pathname.split('/')) || []),
              n.protocol && !f[n.protocol]);
          if (
            (b &&
              ((n.hostname = ''),
              (n.port = null),
              n.host && ('' === k[0] ? (k[0] = n.host) : k.unshift(n.host)),
              (n.host = ''),
              e.protocol &&
                ((e.hostname = null),
                (e.port = null),
                e.host && ('' === I[0] ? (I[0] = e.host) : I.unshift(e.host)),
                (e.host = null)),
              (_ = _ && ('' === I[0] || '' === k[0]))),
            m)
          )
            (n.host = e.host || '' === e.host ? e.host : n.host),
              (n.hostname =
                e.hostname || '' === e.hostname ? e.hostname : n.hostname),
              (n.search = e.search),
              (n.query = e.query),
              (k = I);
          else if (I.length)
            k || (k = []),
              k.pop(),
              (k = k.concat(I)),
              (n.search = e.search),
              (n.query = e.query);
          else if (!r.isNullOrUndefined(e.search)) {
            if (b)
              (n.hostname = n.host = k.shift()),
                (w =
                  !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@')) &&
                  ((n.auth = w.shift()), (n.host = n.hostname = w.shift()));
            return (
              (n.search = e.search),
              (n.query = e.query),
              (r.isNull(n.pathname) && r.isNull(n.search)) ||
                (n.path =
                  (n.pathname ? n.pathname : '') + (n.search ? n.search : '')),
              (n.href = n.format()),
              n
            );
          }
          if (!k.length)
            return (
              (n.pathname = null),
              n.search ? (n.path = '/' + n.search) : (n.path = null),
              (n.href = n.format()),
              n
            );
          for (
            var y = k.slice(-1)[0],
              q =
                ((n.host || e.host || k.length > 1) &&
                  ('.' === y || '..' === y)) ||
                '' === y,
              R = 0,
              M = k.length;
            M >= 0;
            M--
          )
            '.' === (y = k[M])
              ? k.splice(M, 1)
              : '..' === y
              ? (k.splice(M, 1), R++)
              : R && (k.splice(M, 1), R--);
          if (!_ && !v) for (; R--; R) k.unshift('..');
          !_ ||
            '' === k[0] ||
            (k[0] && '/' === k[0].charAt(0)) ||
            k.unshift(''),
            q && '/' !== k.join('/').substr(-1) && k.push('');
          var w,
            O = '' === k[0] || (k[0] && '/' === k[0].charAt(0));
          b &&
            ((n.hostname = n.host = O ? '' : k.length ? k.shift() : ''),
            (w = !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@')) &&
              ((n.auth = w.shift()), (n.host = n.hostname = w.shift())));
          return (
            (_ = _ || (n.host && k.length)) && !O && k.unshift(''),
            k.length
              ? (n.pathname = k.join('/'))
              : ((n.pathname = null), (n.path = null)),
            (r.isNull(n.pathname) && r.isNull(n.search)) ||
              (n.path =
                (n.pathname ? n.pathname : '') + (n.search ? n.search : '')),
            (n.auth = e.auth || n.auth),
            (n.slashes = n.slashes || e.slashes),
            (n.href = n.format()),
            n
          );
        }),
        (o.prototype.parseHost = function() {
          var e = this.host,
            t = s.exec(e);
          t &&
            (':' !== (t = t[0]) && (this.port = t.substr(1)),
            (e = e.substr(0, e.length - t.length))),
            e && (this.hostname = e);
        });
    },
    function(e, t, n) {
      (function(e, a) {
        var r;
        /*! https://mths.be/punycode v1.4.1 by @mathias */ !(function(o) {
          t && t.nodeType, e && e.nodeType;
          var i = 'object' == typeof a && a;
          i.global !== i && i.window !== i && i.self;
          var s,
            g = 2147483647,
            A = 36,
            u = 1,
            C = 26,
            l = 38,
            c = 700,
            I = 72,
            d = 128,
            p = '-',
            f = /^xn--/,
            x = /[^\x20-\x7E]/,
            h = /[\x2E\u3002\uFF0E\uFF61]/g,
            m = {
              overflow: 'Overflow: input needs wider integers to process',
              'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
              'invalid-input': 'Invalid input'
            },
            _ = A - u,
            v = Math.floor,
            k = String.fromCharCode;
          function b(e) {
            throw new RangeError(m[e]);
          }
          function y(e, t) {
            for (var n = e.length, a = []; n--; ) a[n] = t(e[n]);
            return a;
          }
          function q(e, t) {
            var n = e.split('@'),
              a = '';
            return (
              n.length > 1 && ((a = n[0] + '@'), (e = n[1])),
              a + y((e = e.replace(h, '.')).split('.'), t).join('.')
            );
          }
          function R(e) {
            for (var t, n, a = [], r = 0, o = e.length; r < o; )
              (t = e.charCodeAt(r++)) >= 55296 && t <= 56319 && r < o
                ? 56320 == (64512 & (n = e.charCodeAt(r++)))
                  ? a.push(((1023 & t) << 10) + (1023 & n) + 65536)
                  : (a.push(t), r--)
                : a.push(t);
            return a;
          }
          function M(e) {
            return y(e, function(e) {
              var t = '';
              return (
                e > 65535 &&
                  ((t += k((((e -= 65536) >>> 10) & 1023) | 55296)),
                  (e = 56320 | (1023 & e))),
                (t += k(e))
              );
            }).join('');
          }
          function w(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
          }
          function O(e, t, n) {
            var a = 0;
            for (
              e = n ? v(e / c) : e >> 1, e += v(e / t);
              e > (_ * C) >> 1;
              a += A
            )
              e = v(e / _);
            return v(a + ((_ + 1) * e) / (e + l));
          }
          function j(e) {
            var t,
              n,
              a,
              r,
              o,
              i,
              s,
              l,
              c,
              f,
              x,
              h = [],
              m = e.length,
              _ = 0,
              k = d,
              y = I;
            for ((n = e.lastIndexOf(p)) < 0 && (n = 0), a = 0; a < n; ++a)
              e.charCodeAt(a) >= 128 && b('not-basic'), h.push(e.charCodeAt(a));
            for (r = n > 0 ? n + 1 : 0; r < m; ) {
              for (
                o = _, i = 1, s = A;
                r >= m && b('invalid-input'),
                  ((l =
                    (x = e.charCodeAt(r++)) - 48 < 10
                      ? x - 22
                      : x - 65 < 26
                      ? x - 65
                      : x - 97 < 26
                      ? x - 97
                      : A) >= A ||
                    l > v((g - _) / i)) &&
                    b('overflow'),
                  (_ += l * i),
                  !(l < (c = s <= y ? u : s >= y + C ? C : s - y));
                s += A
              )
                i > v(g / (f = A - c)) && b('overflow'), (i *= f);
              (y = O(_ - o, (t = h.length + 1), 0 == o)),
                v(_ / t) > g - k && b('overflow'),
                (k += v(_ / t)),
                (_ %= t),
                h.splice(_++, 0, k);
            }
            return M(h);
          }
          function P(e) {
            var t,
              n,
              a,
              r,
              o,
              i,
              s,
              l,
              c,
              f,
              x,
              h,
              m,
              _,
              y,
              q = [];
            for (h = (e = R(e)).length, t = d, n = 0, o = I, i = 0; i < h; ++i)
              (x = e[i]) < 128 && q.push(k(x));
            for (a = r = q.length, r && q.push(p); a < h; ) {
              for (s = g, i = 0; i < h; ++i)
                (x = e[i]) >= t && x < s && (s = x);
              for (
                s - t > v((g - n) / (m = a + 1)) && b('overflow'),
                  n += (s - t) * m,
                  t = s,
                  i = 0;
                i < h;
                ++i
              )
                if (((x = e[i]) < t && ++n > g && b('overflow'), x == t)) {
                  for (
                    l = n, c = A;
                    !(l < (f = c <= o ? u : c >= o + C ? C : c - o));
                    c += A
                  )
                    (y = l - f),
                      (_ = A - f),
                      q.push(k(w(f + (y % _), 0))),
                      (l = v(y / _));
                  q.push(k(w(l, 0))), (o = O(n, m, a == r)), (n = 0), ++a;
                }
              ++n, ++t;
            }
            return q.join('');
          }
          (s = {
            version: '1.4.1',
            ucs2: { decode: R, encode: M },
            decode: j,
            encode: P,
            toASCII: function(e) {
              return q(e, function(e) {
                return x.test(e) ? 'xn--' + P(e) : e;
              });
            },
            toUnicode: function(e) {
              return q(e, function(e) {
                return f.test(e) ? j(e.slice(4).toLowerCase()) : e;
              });
            }
          }),
            void 0 ===
              (r = function() {
                return s;
              }.call(t, n, t, e)) || (e.exports = r);
        })();
      }.call(this, n(124)(e), n(125)));
    },
    function(e, t) {
      e.exports = function(e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function() {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function() {
                return e.l;
              }
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function() {
                return e.i;
              }
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function(e, t) {
      var n;
      n = (function() {
        return this;
      })();
      try {
        n = n || new Function('return this')();
      } catch (e) {
        'object' == typeof window && (n = window);
      }
      e.exports = n;
    },
    function(e, t, n) {
      'use strict';
      e.exports = {
        isString: function(e) {
          return 'string' == typeof e;
        },
        isObject: function(e) {
          return 'object' == typeof e && null !== e;
        },
        isNull: function(e) {
          return null === e;
        },
        isNullOrUndefined: function(e) {
          return null == e;
        }
      };
    },
    function(e, t) {
      e.exports = function(e) {
        return function(...t) {
          return new Promise(function(n, a) {
            t.push(function(e, t) {
              e ? a(e) : n(t);
            }),
              e.apply({}, t);
          });
        };
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'api.test',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      var a,
        r = n(130),
        o = n(131),
        i = n(132),
        s = n(133),
        g = n(17),
        A = n(18),
        u = n(7),
        C = n(134),
        l = s.create;
      e.exports = (function e(t, n) {
        function r(e, r) {
          var s, c, I, d, p, f;
          for (e = new A(u(t, e)), a = 0; a < n.length; a++)
            (c = n[a]).processRequest && c.processRequest(e);
          for (a = 0; a < n.length; a++)
            if ((c = n[a]).createXHR) {
              s = c.createXHR(e);
              break;
            }
          for (d in ((s = s || new o()),
          (e.xhr = s),
          (I = C(
            i(function(t) {
              clearTimeout(p),
                (s.onload = s.onerror = s.onabort = s.onreadystatechange = s.ontimeout = s.onprogress = null);
              var o = (function(e, t) {
                  if (e.aborted)
                    return l('Request aborted', e, { name: 'Abort' });
                  if (e.timedOut)
                    return l('Request timeout', e, { name: 'Timeout' });
                  var n,
                    a = e.xhr;
                  switch (Math.floor(a.status / 100)) {
                    case 0:
                    case 2:
                      if (!t) return;
                      return l(t.message, e);
                    case 4:
                      if (404 === a.status && !e.errorOn404) return;
                      n = 'Client';
                      break;
                    case 5:
                      n = 'Server';
                      break;
                    default:
                      n = 'HTTP';
                  }
                  var r =
                    n +
                    ' Error: The server returned a status of ' +
                    a.status +
                    ' for the request "' +
                    e.method.toUpperCase() +
                    ' ' +
                    e.url +
                    '"';
                  return l(r, e);
                })(e, t),
                i = o || g.fromRequest(e);
              for (a = 0; a < n.length; a++)
                (c = n[a]).processResponse && c.processResponse(i);
              o && e.onerror && e.onerror(o),
                !o && e.onload && e.onload(i),
                r && r(o, o ? void 0 : i);
            })
          )),
          (f = 'onload' in s && 'onerror' in s),
          (s.onload = function() {
            I();
          }),
          (s.onerror = I),
          (s.onabort = function() {
            I();
          }),
          (s.onreadystatechange = function() {
            if (4 === s.readyState) {
              if (e.aborted) return I();
              if (!f) {
                var t;
                try {
                  t = s.status;
                } catch (n) {}
                var n = 0 === t ? new Error('Internal XHR Error') : null;
                return I(n);
              }
            }
          }),
          (s.ontimeout = function() {}),
          (s.onprogress = function() {}),
          s.open(e.method, e.url),
          e.timeout &&
            (p = setTimeout(function() {
              (e.timedOut = !0), I();
              try {
                s.abort();
              } catch (e) {}
            }, e.timeout)),
          e.headers))
            e.headers.hasOwnProperty(d) && s.setRequestHeader(d, e.headers[d]);
          return s.send(e.body), e;
        }
        (t = t || {}), (n = n || []);
        var c,
          I = ['get', 'post', 'put', 'head', 'patch', 'delete'],
          d = function(e) {
            return function(t, n) {
              return ((t = new A(t)).method = e), r(t, n);
            };
          };
        for (a = 0; a < I.length; a++) r[(c = I[a])] = d(c);
        return (
          (r.plugins = function() {
            return n;
          }),
          (r.defaults = function(a) {
            return a ? e(u(t, a), n) : t;
          }),
          (r.use = function() {
            var a = Array.prototype.slice.call(arguments, 0);
            return e(t, n.concat(a));
          }),
          (r.bare = function() {
            return e();
          }),
          (r.Request = A),
          (r.Response = g),
          (r.RequestError = s),
          r
        );
      })({}, [r]);
    },
    function(e, t, n) {
      'use strict';
      e.exports = {
        processRequest: function(e) {
          e.url = e.url.replace(/[^%]+/g, function(e) {
            return encodeURI(e);
          });
        }
      };
    },
    function(e, t) {
      e.exports = window.XMLHttpRequest;
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        return function() {
          var t = Array.prototype.slice.call(arguments, 0);
          setTimeout(function() {
            return e.apply(null, t);
          }, 0);
        };
      };
    },
    function(e, t, n) {
      'use strict';
      var a = n(17),
        r = n(19),
        o = n(7);
      function i(e, t) {
        var n = new Error(e);
        for (var a in ((n.name = 'RequestError'),
        (this.name = n.name),
        (this.message = n.message),
        n.stack && (this.stack = n.stack),
        (this.toString = function() {
          return this.message;
        }),
        t))
          t.hasOwnProperty(a) && (this[a] = t[a]);
      }
      (i.prototype = o(Error.prototype)),
        (i.prototype.constructor = i),
        (i.create = function(e, t, n) {
          var o = new i(e, n);
          return a.call(o, r(t)), o;
        }),
        (e.exports = i);
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        var t,
          n = !1;
        return function() {
          return n || ((n = !0), (t = e.apply(this, arguments))), t;
        };
      };
    },
    function(e, t, n) {
      'use strict';
      var a = n(136),
        r = n(137);
      function o(e, t) {
        return t.encode ? (t.strict ? a(e) : encodeURIComponent(e)) : e;
      }
      (t.extract = function(e) {
        return e.split('?')[1] || '';
      }),
        (t.parse = function(e, t) {
          var n = (function(e) {
              var t;
              switch (e.arrayFormat) {
                case 'index':
                  return function(e, n, a) {
                    (t = /\[(\d*)\]$/.exec(e)),
                      (e = e.replace(/\[\d*\]$/, '')),
                      t
                        ? (void 0 === a[e] && (a[e] = {}), (a[e][t[1]] = n))
                        : (a[e] = n);
                  };
                case 'bracket':
                  return function(e, n, a) {
                    (t = /(\[\])$/.exec(e)),
                      (e = e.replace(/\[\]$/, '')),
                      t
                        ? void 0 !== a[e]
                          ? (a[e] = [].concat(a[e], n))
                          : (a[e] = [n])
                        : (a[e] = n);
                  };
                default:
                  return function(e, t, n) {
                    void 0 !== n[e] ? (n[e] = [].concat(n[e], t)) : (n[e] = t);
                  };
              }
            })((t = r({ arrayFormat: 'none' }, t))),
            a = Object.create(null);
          return 'string' != typeof e
            ? a
            : (e = e.trim().replace(/^(\?|#|&)/, ''))
            ? (e.split('&').forEach(function(e) {
                var t = e.replace(/\+/g, ' ').split('='),
                  r = t.shift(),
                  o = t.length > 0 ? t.join('=') : void 0;
                (o = void 0 === o ? null : decodeURIComponent(o)),
                  n(decodeURIComponent(r), o, a);
              }),
              Object.keys(a)
                .sort()
                .reduce(function(e, t) {
                  var n = a[t];
                  return (
                    Boolean(n) && 'object' == typeof n && !Array.isArray(n)
                      ? (e[t] = (function e(t) {
                          return Array.isArray(t)
                            ? t.sort()
                            : 'object' == typeof t
                            ? e(Object.keys(t))
                                .sort(function(e, t) {
                                  return Number(e) - Number(t);
                                })
                                .map(function(e) {
                                  return t[e];
                                })
                            : t;
                        })(n))
                      : (e[t] = n),
                    e
                  );
                }, Object.create(null)))
            : a;
        }),
        (t.stringify = function(e, t) {
          var n = (function(e) {
            switch (e.arrayFormat) {
              case 'index':
                return function(t, n, a) {
                  return null === n
                    ? [o(t, e), '[', a, ']'].join('')
                    : [o(t, e), '[', o(a, e), ']=', o(n, e)].join('');
                };
              case 'bracket':
                return function(t, n) {
                  return null === n
                    ? o(t, e)
                    : [o(t, e), '[]=', o(n, e)].join('');
                };
              default:
                return function(t, n) {
                  return null === n
                    ? o(t, e)
                    : [o(t, e), '=', o(n, e)].join('');
                };
            }
          })((t = r({ encode: !0, strict: !0, arrayFormat: 'none' }, t)));
          return e
            ? Object.keys(e)
                .sort()
                .map(function(a) {
                  var r = e[a];
                  if (void 0 === r) return '';
                  if (null === r) return o(a, t);
                  if (Array.isArray(r)) {
                    var i = [];
                    return (
                      r.slice().forEach(function(e) {
                        void 0 !== e && i.push(n(a, e, i.length));
                      }),
                      i.join('&')
                    );
                  }
                  return o(a, t) + '=' + o(r, t);
                })
                .filter(function(e) {
                  return e.length > 0;
                })
                .join('&')
            : '';
        });
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
          return (
            '%' +
            e
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
          );
        });
      };
    },
    function(e, t, n) {
      'use strict';
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var a =
          Object.getOwnPropertySymbols,
        r = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
      e.exports = (function() {
        try {
          if (!Object.assign) return !1;
          var e = new String('abc');
          if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t['_' + String.fromCharCode(n)] = n;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(t)
              .map(function(e) {
                return t[e];
              })
              .join('')
          )
            return !1;
          var a = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function(e) {
              a[e] = e;
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, a)).join('')
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Object.assign
        : function(e, t) {
            for (
              var n,
                i,
                s = (function(e) {
                  if (null == e)
                    throw new TypeError(
                      'Object.assign cannot be called with null or undefined'
                    );
                  return Object(e);
                })(e),
                g = 1;
              g < arguments.length;
              g++
            ) {
              for (var A in (n = Object(arguments[g])))
                r.call(n, A) && (s[A] = n[A]);
              if (a) {
                i = a(n);
                for (var u = 0; u < i.length; u++)
                  o.call(n, i[u]) && (s[i[u]] = n[i[u]]);
              }
            }
            return s;
          };
    },
    function(e) {
      e.exports = {
        'api.test': [
          {
            name: 'error',
            example: 'my_error',
            required: 'Optional',
            description: 'Error response to return\n'
          },
          {
            name: 'foo',
            example: 'bar',
            required: 'Optional',
            description: 'example property to return\n'
          }
        ],
        'auth.revoke': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Optional',
            description: 'Authentication token\n'
          },
          {
            name: 'test',
            example: 'true',
            required: 'Optional',
            description:
              'Setting this parameter to 1 triggers a testing mode where the specified token will not actually be revoked.\n'
          }
        ],
        'auth.test': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: identify)\n'
          }
        ],
        'bots.info': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: users:read)\n'
          },
          {
            name: 'bot',
            example: 'B12345678',
            required: 'Optional',
            description: 'Bot user to get info on\n'
          }
        ],
        'channels.archive': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to archive\n'
          }
        ],
        'channels.create': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'name',
            example: 'mychannel',
            required: 'Required',
            description: 'Name of channel to create\n'
          }
        ],
        'channels.history': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:history)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to fetch history for.\n'
          },
          {
            name: 'latest',
            example: '1234567890.123456',
            required: 'Optional, default=now',
            description:
              'End of time range of messages to include in results.\n'
          },
          {
            name: 'oldest',
            example: '1234567890.123456',
            required: 'Optional, default=0',
            description:
              'Start of time range of messages to include in results.\n'
          },
          {
            name: 'inclusive',
            example: '1',
            required: 'Optional, default=0',
            description:
              'Include messages with latest or oldest timestamp in results.\n'
          },
          {
            name: 'count',
            example: '100',
            required: 'Optional, default=100',
            description: 'Number of messages to return, between 1 and 1000.\n'
          },
          {
            name: 'unreads',
            example: '1',
            required: 'Optional, default=0',
            description: 'Include unread_count_display in the output?\n'
          }
        ],
        'channels.info': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:read)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to get info on\n'
          }
        ],
        'channels.invite': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to invite user to.\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Required',
            description: 'User to invite to channel.\n'
          }
        ],
        'channels.join': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'name',
            example: ' ',
            required: 'Required',
            description: 'Name of channel to join\n'
          }
        ],
        'channels.kick': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to remove user from.\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Required',
            description: 'User to remove from channel.\n'
          }
        ],
        'channels.leave': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to leave\n'
          }
        ],
        'channels.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:read)\n'
          },
          {
            name: 'exclude_archived',
            example: '1',
            required: 'Optional, default=0',
            description: "Don't return archived channels.\n"
          }
        ],
        'channels.mark': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to set reading cursor in.\n'
          },
          {
            name: 'ts',
            example: '1234567890.123456',
            required: 'Required',
            description: 'Timestamp of the most recently seen message.\n'
          }
        ],
        'channels.rename': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to rename\n'
          },
          {
            name: 'name',
            example: ' ',
            required: 'Required',
            description: 'New name for channel.\n'
          }
        ],
        'channels.setPurpose': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to set the purpose of\n'
          },
          {
            name: 'purpose',
            example: 'My Purpose',
            required: 'Required',
            description: 'The new purpose\n'
          }
        ],
        'channels.setTopic': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to set the topic of\n'
          },
          {
            name: 'topic',
            example: 'My Topic',
            required: 'Required',
            description: 'The new topic\n'
          }
        ],
        'channels.unarchive': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: channels:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to unarchive\n'
          }
        ],
        'chat.delete': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: chat:write:bot or chat:write:user)\n'
          },
          {
            name: 'ts',
            example: '1405894322.002768',
            required: 'Required',
            description: 'Timestamp of the message to be deleted.\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel containing the message to be deleted.\n'
          },
          {
            name: 'as_user',
            example: 'true',
            required: 'Optional',
            description:
              'Pass true to delete the message as the authed user. Bot users in this context are considered authed users.\n'
          }
        ],
        'chat.meMessage': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: chat:write:user)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description:
              'Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name.\n'
          },
          {
            name: 'text',
            example: 'Hello world',
            required: 'Required',
            description: 'Text of the message to send.\n'
          }
        ],
        'chat.postMessage': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: chat:write:bot or chat:write:user)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description:
              'Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See below for more details.\n'
          },
          {
            name: 'text',
            example: 'Hello world',
            required: 'Required',
            description:
              "Text of the message to send. See below for an explanation of formatting. This field is usually required, unless you're providing only attachments instead.\n"
          },
          {
            name: 'parse',
            example: 'full',
            required: 'Optional',
            description:
              'Change how messages are treated. Defaults to none. See below.\n'
          },
          {
            name: 'link_names',
            example: '1',
            required: 'Optional',
            description: 'Find and link channel names and usernames.\n'
          },
          {
            name: 'attachments',
            example: '[{"pretext": "pre-hello", "text": "text-world"}]',
            required: 'Optional',
            description: 'Structured message attachments.\n'
          },
          {
            name: 'unfurl_links',
            example: 'true',
            required: 'Optional',
            description:
              'Pass true to enable unfurling of primarily text-based content.\n'
          },
          {
            name: 'unfurl_media',
            example: 'false',
            required: 'Optional',
            description: 'Pass false to disable unfurling of media content.\n'
          },
          {
            name: 'username',
            example: 'My Bot',
            required: 'Optional',
            description:
              "Set your bot's user name. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.\n"
          },
          {
            name: 'as_user',
            example: 'true',
            required: 'Optional',
            description:
              'Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See authorship below.\n'
          },
          {
            name: 'icon_url',
            example: 'http://lorempixel.com/48/48',
            required: 'Optional',
            description:
              'URL to an image to use as the icon for this message. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.\n'
          },
          {
            name: 'icon_emoji',
            example: ':chart_with_upwards_trend:',
            required: 'Optional',
            description:
              'emoji to use as the icon for this message. Overrides icon_url. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.\n'
          }
        ],
        'chat.update': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: chat:write:bot or chat:write:user)\n'
          },
          {
            name: 'ts',
            example: '1405894322.002768',
            required: 'Required',
            description: 'Timestamp of the message to be updated.\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel containing the message to be updated.\n'
          },
          {
            name: 'text',
            example: 'Hello world',
            required: 'Required',
            description:
              'New text for the message, using the default formatting rules.\n'
          },
          {
            name: 'attachments',
            example: '[{"pretext": "pre-hello", "text": "text-world"}]',
            required: 'Optional',
            description: 'Structured message attachments.\n'
          },
          {
            name: 'parse',
            example: 'none',
            required: 'Optional',
            description:
              'Change how messages are treated. Defaults to client, unlike chat.postMessage. See below.\n'
          },
          {
            name: 'link_names',
            example: '1',
            required: 'Optional',
            description:
              'Find and link channel names and usernames. Defaults to none. This parameter should be used in conjunction with parse. To set link_names to 1, specify a parse mode of full.\n'
          },
          {
            name: 'as_user',
            example: 'true',
            required: 'Optional',
            description:
              'Pass true to update the message as the authed user. Bot users in this context are considered authed users.\n'
          }
        ],
        'dnd.endDnd': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: dnd:write)\n'
          }
        ],
        'dnd.endSnooze': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: dnd:write)\n'
          }
        ],
        'dnd.info': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: dnd:read)\n'
          },
          {
            name: 'user',
            example: 'U1234',
            required: 'Optional',
            description: 'User to fetch status for (defaults to current user)\n'
          }
        ],
        'dnd.setSnooze': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: dnd:write)\n'
          },
          {
            name: 'num_minutes',
            example: '60',
            required: 'Required',
            description: 'Number of minutes, from now, to snooze until.\n'
          }
        ],
        'dnd.teamInfo': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: dnd:read)\n'
          },
          {
            name: 'users',
            example: 'U1234,U4567',
            required: 'Optional',
            description:
              'Comma-separated list of users to fetch Do Not Disturb status for\n'
          }
        ],
        'emoji.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: emoji:read)\n'
          }
        ],
        'files.comments.add': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: files:write:user)\n'
          },
          {
            name: 'file',
            example: 'F1234467890',
            required: 'Required',
            description: 'File to add a comment to.\n'
          },
          {
            name: 'comment',
            example: 'Everyone should take a moment to read this file.',
            required: 'Required',
            description: 'Text of the comment to add.\n'
          },
          {
            name: 'channel',
            example: 'C1234467890',
            required: 'Optional',
            description:
              'Channel id (encoded) of which location to associate with the new comment.\n'
          }
        ],
        'files.comments.delete': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: files:write:user)\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Required',
            description: 'File to delete a comment from.\n'
          },
          {
            name: 'id',
            example: 'Fc1234567890',
            required: 'Required',
            description: 'The comment to delete.\n'
          }
        ],
        'files.comments.edit': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: files:write:user)\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Required',
            description: 'File containing the comment to edit.\n'
          },
          {
            name: 'id',
            example: 'Fc1234567890',
            required: 'Required',
            description: 'The comment to edit.\n'
          },
          {
            name: 'comment',
            example:
              'Everyone should take a moment to read this file, seriously.',
            required: 'Required',
            description: 'Text of the comment to edit.\n'
          }
        ],
        'files.delete': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: files:write:user)\n'
          },
          {
            name: 'file',
            example: ' ',
            required: 'Required',
            description: 'ID of file to delete.\n'
          }
        ],
        'files.info': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: files:read)\n'
          },
          {
            name: 'file',
            example: 'F2147483862',
            required: 'Required',
            description: 'Specify a file by providing its ID.\n'
          },
          {
            name: 'count',
            example: '20',
            required: 'Optional, default=100',
            description: 'Number of items to return per page.\n'
          },
          {
            name: 'page',
            example: '2',
            required: 'Optional, default=1',
            description: 'Page number of results to return.\n'
          }
        ],
        'files.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: files:read)\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Optional',
            description: 'Filter files created by a single user.\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Optional',
            description:
              'Filter files appearing in a specific channel, indicated by its ID.\n'
          },
          {
            name: 'ts_from',
            example: '123456789',
            required: 'Optional, default=0',
            description:
              'Filter files created after this timestamp (inclusive).\n'
          },
          {
            name: 'ts_to',
            example: '123456789',
            required: 'Optional, default=now',
            description:
              'Filter files created before this timestamp (inclusive).\n'
          },
          {
            name: 'types',
            example: 'images',
            required: 'Optional, default=all',
            description:
              'Filter files by type:\n\n\nall - All files\nspaces - Posts\nsnippets - Snippets\nimages - Image files\ngdocs - Google docs\nzips - Zip files\npdfs - PDF files\n\n\nYou can pass multiple values in the types argument, like types=spaces,snippets.The default value is all, which does not filter the list.\n'
          },
          {
            name: 'count',
            example: '20',
            required: 'Optional, default=100',
            description: 'Number of items to return per page.\n'
          },
          {
            name: 'page',
            example: '2',
            required: 'Optional, default=1',
            description: 'Page number of results to return.\n'
          }
        ],
        'files.revokePublicURL': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: files:write:user)\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Required',
            description: 'File to revoke\n'
          }
        ],
        'files.sharedPublicURL': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: files:write:user)\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Required',
            description: 'File to share\n'
          }
        ],
        'files.upload': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: files:write:user)\n'
          },
          {
            name: 'file',
            example: '...',
            required: 'Optional',
            description:
              'File contents via multipart/form-data. If omitting this parameter, you must submit content.\n'
          },
          {
            name: 'content',
            example: '...',
            required: 'Optional',
            description:
              'File contents via a POST variable. If omitting this parameter, you must provide a file.\n'
          },
          {
            name: 'filetype',
            example: 'php',
            required: 'Optional',
            description: 'A file type identifier.\n'
          },
          {
            name: 'filename',
            example: 'foo.txt',
            required: 'Required',
            description: 'Filename of file.\n'
          },
          {
            name: 'title',
            example: 'My File',
            required: 'Optional',
            description: 'Title of file.\n'
          },
          {
            name: 'initial_comment',
            example: 'Best!',
            required: 'Optional',
            description: 'Initial comment to add to file.\n'
          },
          {
            name: 'channels',
            example: 'C1234567890',
            required: 'Optional',
            description:
              'Comma-separated list of channel names or IDs where the file will be shared.\n'
          }
        ],
        'groups.archive': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to archive\n'
          }
        ],
        'groups.close': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to close.\n'
          }
        ],
        'groups.create': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'name',
            example: ' ',
            required: 'Required',
            description: 'Name of private channel to create\n'
          }
        ],
        'groups.createChild': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to clone and archive.\n'
          }
        ],
        'groups.history': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: groups:history)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to fetch history for.\n'
          },
          {
            name: 'latest',
            example: '1234567890.123456',
            required: 'Optional, default=now',
            description:
              'End of time range of messages to include in results.\n'
          },
          {
            name: 'oldest',
            example: '1234567890.123456',
            required: 'Optional, default=0',
            description:
              'Start of time range of messages to include in results.\n'
          },
          {
            name: 'inclusive',
            example: '1',
            required: 'Optional, default=0',
            description:
              'Include messages with latest or oldest timestamp in results.\n'
          },
          {
            name: 'count',
            example: '100',
            required: 'Optional, default=100',
            description: 'Number of messages to return, between 1 and 1000.\n'
          },
          {
            name: 'unreads',
            example: '1',
            required: 'Optional, default=0',
            description: 'Include unread_count_display in the output?\n'
          }
        ],
        'groups.info': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:read)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Private channel to get info on\n'
          }
        ],
        'groups.invite': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to invite user to.\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Required',
            description: 'User to invite.\n'
          }
        ],
        'groups.kick': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to remove user from.\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Required',
            description: 'User to remove from private channel.\n'
          }
        ],
        'groups.leave': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to leave\n'
          }
        ],
        'groups.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:read)\n'
          },
          {
            name: 'exclude_archived',
            example: '1',
            required: 'Optional, default=0',
            description: "Don't return archived private channels.\n"
          }
        ],
        'groups.mark': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to set reading cursor in.\n'
          },
          {
            name: 'ts',
            example: '1234567890.123456',
            required: 'Required',
            description: 'Timestamp of the most recently seen message.\n'
          }
        ],
        'groups.open': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to open.\n'
          }
        ],
        'groups.rename': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Private channel to rename\n'
          },
          {
            name: 'name',
            example: ' ',
            required: 'Required',
            description: 'New name for private channel.\n'
          }
        ],
        'groups.setPurpose': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Private channel to set the purpose of\n'
          },
          {
            name: 'purpose',
            example: 'My Purpose',
            required: 'Required',
            description: 'The new purpose\n'
          }
        ],
        'groups.setTopic': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Private channel to set the topic of\n'
          },
          {
            name: 'topic',
            example: 'My Topic',
            required: 'Required',
            description: 'The new topic\n'
          }
        ],
        'groups.unarchive': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: groups:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Private channel to unarchive\n'
          }
        ],
        'im.close': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: im:write)\n'
          },
          {
            name: 'channel',
            example: 'D1234567890',
            required: 'Required',
            description: 'Direct message channel to close.\n'
          }
        ],
        'im.history': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: im:history)\n'
          },
          {
            name: 'channel',
            example: 'D1234567890',
            required: 'Required',
            description: 'Direct message channel to fetch history for.\n'
          },
          {
            name: 'latest',
            example: '1234567890.123456',
            required: 'Optional, default=now',
            description:
              'End of time range of messages to include in results.\n'
          },
          {
            name: 'oldest',
            example: '1234567890.123456',
            required: 'Optional, default=0',
            description:
              'Start of time range of messages to include in results.\n'
          },
          {
            name: 'inclusive',
            example: '1',
            required: 'Optional, default=0',
            description:
              'Include messages with latest or oldest timestamp in results.\n'
          },
          {
            name: 'count',
            example: '100',
            required: 'Optional, default=100',
            description: 'Number of messages to return, between 1 and 1000.\n'
          },
          {
            name: 'unreads',
            example: '1',
            required: 'Optional, default=0',
            description: 'Include unread_count_display in the output?\n'
          }
        ],
        'im.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: im:read)\n'
          }
        ],
        'im.mark': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: im:write)\n'
          },
          {
            name: 'channel',
            example: 'D1234567890',
            required: 'Required',
            description: 'Direct message channel to set reading cursor in.\n'
          },
          {
            name: 'ts',
            example: '1234567890.123456',
            required: 'Required',
            description: 'Timestamp of the most recently seen message.\n'
          }
        ],
        'im.open': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: im:write)\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Required',
            description: 'User to open a direct message channel with.\n'
          },
          {
            name: 'return_im',
            example: ' ',
            required: 'Optional',
            description:
              'Boolean, indicates you want the full IM channel definition in the response.\n'
          }
        ],
        'mpim.close': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: mpim:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'MPIM to close.\n'
          }
        ],
        'mpim.history': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: mpim:history)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description: 'Multiparty direct message to fetch history for.\n'
          },
          {
            name: 'latest',
            example: '1234567890.123456',
            required: 'Optional, default=now',
            description:
              'End of time range of messages to include in results.\n'
          },
          {
            name: 'oldest',
            example: '1234567890.123456',
            required: 'Optional, default=0',
            description:
              'Start of time range of messages to include in results.\n'
          },
          {
            name: 'inclusive',
            example: '1',
            required: 'Optional, default=0',
            description:
              'Include messages with latest or oldest timestamp in results.\n'
          },
          {
            name: 'count',
            example: '100',
            required: 'Optional, default=100',
            description: 'Number of messages to return, between 1 and 1000.\n'
          },
          {
            name: 'unreads',
            example: '1',
            required: 'Optional, default=0',
            description: 'Include unread_count_display in the output?\n'
          }
        ],
        'mpim.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: mpim:read)\n'
          }
        ],
        'mpim.mark': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: mpim:write)\n'
          },
          {
            name: 'channel',
            example: 'G1234567890',
            required: 'Required',
            description:
              'multiparty direct message channel to set reading cursor in.\n'
          },
          {
            name: 'ts',
            example: '1234567890.123456',
            required: 'Required',
            description: 'Timestamp of the most recently seen message.\n'
          }
        ],
        'mpim.open': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: mpim:write)\n'
          },
          {
            name: 'users',
            example: 'U1234567890,U2345678901,U3456789012',
            required: 'Required',
            description:
              'Comma separated lists of users.  The ordering of the users is preserved whenever a MPIM group is returned.\n'
          }
        ],
        'oauth.access': [
          {
            name: 'client_id',
            example: '4b39e9-752c4',
            required: 'Required',
            description: 'Issued when you created your application.\n'
          },
          {
            name: 'client_secret',
            example: '33fea0113f5b1',
            required: 'Required',
            description: 'Issued when you created your application.\n'
          },
          {
            name: 'code',
            example: 'ccdaa72ad',
            required: 'Required',
            description: 'The code param returned via the OAuth callback.\n'
          },
          {
            name: 'redirect_uri',
            example: 'http://example.com',
            required: 'Optional',
            description:
              'This must match the originally submitted URI (if one was sent).\n'
          }
        ],
        'pins.add': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: pins:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to pin the item in.\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Optional',
            description: 'File to pin.\n'
          },
          {
            name: 'file_comment',
            example: 'Fc1234567890',
            required: 'Optional',
            description: 'File comment to pin.\n'
          },
          {
            name: 'timestamp',
            example: '1234567890.123456',
            required: 'Optional',
            description: 'Timestamp of the message to pin.\n'
          }
        ],
        'pins.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: pins:read)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel to get pinned items for.\n'
          }
        ],
        'pins.remove': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: pins:write)\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Required',
            description: 'Channel where the item is pinned to.\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Optional',
            description: 'File to un-pin.\n'
          },
          {
            name: 'file_comment',
            example: 'Fc1234567890',
            required: 'Optional',
            description: 'File comment to un-pin.\n'
          },
          {
            name: 'timestamp',
            example: '1234567890.123456',
            required: 'Optional',
            description: 'Timestamp of the message to un-pin.\n'
          }
        ],
        'reactions.add': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: reactions:write)\n'
          },
          {
            name: 'name',
            example: 'thumbsup',
            required: 'Required',
            description: 'Reaction (emoji) name.\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Optional',
            description: 'File to add reaction to.\n'
          },
          {
            name: 'file_comment',
            example: 'Fc1234567890',
            required: 'Optional',
            description: 'File comment to add reaction to.\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Optional',
            description:
              'Channel where the message to add reaction to was posted.\n'
          },
          {
            name: 'timestamp',
            example: '1234567890.123456',
            required: 'Optional',
            description: 'Timestamp of the message to add reaction to.\n'
          }
        ],
        'reactions.get': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: reactions:read)\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Optional',
            description: 'File to get reactions for.\n'
          },
          {
            name: 'file_comment',
            example: 'Fc1234567890',
            required: 'Optional',
            description: 'File comment to get reactions for.\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Optional',
            description:
              'Channel where the message to get reactions for was posted.\n'
          },
          {
            name: 'timestamp',
            example: '1234567890.123456',
            required: 'Optional',
            description: 'Timestamp of the message to get reactions for.\n'
          },
          {
            name: 'full',
            example: ' ',
            required: 'Optional',
            description: 'If true always return the complete reaction list.\n'
          }
        ],
        'reactions.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: reactions:read)\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Optional',
            description:
              'Show reactions made by this user. Defaults to the authed user.\n'
          },
          {
            name: 'full',
            example: ' ',
            required: 'Optional',
            description: 'If true always return the complete reaction list.\n'
          },
          {
            name: 'count',
            example: '20',
            required: 'Optional, default=100',
            description: 'Number of items to return per page.\n'
          },
          {
            name: 'page',
            example: '2',
            required: 'Optional, default=1',
            description: 'Page number of results to return.\n'
          }
        ],
        'reactions.remove': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: reactions:write)\n'
          },
          {
            name: 'name',
            example: 'thumbsup',
            required: 'Required',
            description: 'Reaction (emoji) name.\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Optional',
            description: 'File to remove reaction from.\n'
          },
          {
            name: 'file_comment',
            example: 'Fc1234567890',
            required: 'Optional',
            description: 'File comment to remove reaction from.\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Optional',
            description:
              'Channel where the message to remove reaction from was posted.\n'
          },
          {
            name: 'timestamp',
            example: '1234567890.123456',
            required: 'Optional',
            description: 'Timestamp of the message to remove reaction from.\n'
          }
        ],
        'reminders.add': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: reminders:write)\n'
          },
          {
            name: 'text',
            example: 'eat a banana',
            required: 'Required',
            description: 'The content of the reminder\n'
          },
          {
            name: 'time',
            example: '1602288000',
            required: 'Required',
            description:
              'When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. "in 15 minutes," or "every Thursday")\n'
          },
          {
            name: 'user',
            example: 'U18888888',
            required: 'Optional',
            description:
              'The user who will receive the reminder. If no user is specified, the reminder will go to user who created it.\n'
          }
        ],
        'reminders.complete': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: reminders:write)\n'
          },
          {
            name: 'reminder',
            example: 'Rm12345678',
            required: 'Required',
            description: 'The ID of the reminder to be marked as complete\n'
          }
        ],
        'reminders.delete': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: reminders:write)\n'
          },
          {
            name: 'reminder',
            example: 'Rm12345678',
            required: 'Required',
            description: 'The ID of the reminder\n'
          }
        ],
        'reminders.info': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: reminders:read)\n'
          },
          {
            name: 'reminder',
            example: 'Rm23456789',
            required: 'Required',
            description: 'The ID of the reminder\n'
          }
        ],
        'reminders.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: reminders:read)\n'
          }
        ],
        'rtm.start': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: client)\n'
          },
          {
            name: 'simple_latest',
            example: ' ',
            required: 'Optional',
            description:
              'Return timestamp only for latest message object of each channel (improves performance).\n'
          },
          {
            name: 'no_unreads',
            example: ' ',
            required: 'Optional',
            description:
              'Skip unread counts for each channel (improves performance).\n'
          },
          {
            name: 'mpim_aware',
            example: ' ',
            required: 'Optional',
            description: 'Returns MPIMs to the client in the API response.\n'
          }
        ],
        'search.all': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: search:read)\n'
          },
          {
            name: 'query',
            example: 'pickleface',
            required: 'Required',
            description: 'Search query. May contains booleans, etc.\n'
          },
          {
            name: 'sort',
            example: 'timestamp',
            required: 'Optional, default=score',
            description: 'Return matches sorted by either score or timestamp.\n'
          },
          {
            name: 'sort_dir',
            example: 'asc',
            required: 'Optional, default=desc',
            description:
              'Change sort direction to ascending (asc) or descending (desc).\n'
          },
          {
            name: 'highlight',
            example: '1',
            required: 'Optional',
            description:
              'Pass a value of 1 to enable query highlight markers (see below).\n'
          },
          {
            name: 'count',
            example: '20',
            required: 'Optional, default=20',
            description: 'Number of items to return per page.\n'
          },
          {
            name: 'page',
            example: '2',
            required: 'Optional, default=1',
            description: 'Page number of results to return.\n'
          }
        ],
        'search.files': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: search:read)\n'
          },
          {
            name: 'query',
            example: 'pickleface',
            required: 'Required',
            description: 'Search query. May contain booleans, etc.\n'
          },
          {
            name: 'sort',
            example: 'timestamp',
            required: 'Optional, default=score',
            description: 'Return matches sorted by either score or timestamp.\n'
          },
          {
            name: 'sort_dir',
            example: 'asc',
            required: 'Optional, default=desc',
            description:
              'Change sort direction to ascending (asc) or descending (desc).\n'
          },
          {
            name: 'highlight',
            example: '1',
            required: 'Optional',
            description:
              'Pass a value of 1 to enable query highlight markers (see below).\n'
          },
          {
            name: 'count',
            example: '20',
            required: 'Optional, default=20',
            description: 'Number of items to return per page.\n'
          },
          {
            name: 'page',
            example: '2',
            required: 'Optional, default=1',
            description: 'Page number of results to return.\n'
          }
        ],
        'search.messages': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: search:read)\n'
          },
          {
            name: 'query',
            example: 'pickleface',
            required: 'Required',
            description: 'Search query. May contains booleans, etc.\n'
          },
          {
            name: 'sort',
            example: 'timestamp',
            required: 'Optional, default=score',
            description: 'Return matches sorted by either score or timestamp.\n'
          },
          {
            name: 'sort_dir',
            example: 'asc',
            required: 'Optional, default=desc',
            description:
              'Change sort direction to ascending (asc) or descending (desc).\n'
          },
          {
            name: 'highlight',
            example: '1',
            required: 'Optional',
            description:
              'Pass a value of 1 to enable query highlight markers (see below).\n'
          },
          {
            name: 'count',
            example: '20',
            required: 'Optional, default=20',
            description: 'Number of items to return per page.\n'
          },
          {
            name: 'page',
            example: '2',
            required: 'Optional, default=1',
            description: 'Page number of results to return.\n'
          }
        ],
        'stars.add': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: stars:write)\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Optional',
            description: 'File to add star to.\n'
          },
          {
            name: 'file_comment',
            example: 'Fc1234567890',
            required: 'Optional',
            description: 'File comment to add star to.\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Optional',
            description:
              'Channel to add star to, or channel where the message to add star to was posted (used with timestamp).\n'
          },
          {
            name: 'timestamp',
            example: '1234567890.123456',
            required: 'Optional',
            description: 'Timestamp of the message to add star to.\n'
          }
        ],
        'stars.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: stars:read)\n'
          },
          {
            name: 'count',
            example: '20',
            required: 'Optional, default=100',
            description: 'Number of items to return per page.\n'
          },
          {
            name: 'page',
            example: '2',
            required: 'Optional, default=1',
            description: 'Page number of results to return.\n'
          }
        ],
        'stars.remove': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: stars:write)\n'
          },
          {
            name: 'file',
            example: 'F1234567890',
            required: 'Optional',
            description: 'File to remove star from.\n'
          },
          {
            name: 'file_comment',
            example: 'Fc1234567890',
            required: 'Optional',
            description: 'File comment to remove star from.\n'
          },
          {
            name: 'channel',
            example: 'C1234567890',
            required: 'Optional',
            description:
              'Channel to remove star from, or channel where the message to remove star from was posted (used with timestamp).\n'
          },
          {
            name: 'timestamp',
            example: '1234567890.123456',
            required: 'Optional',
            description: 'Timestamp of the message to remove star from.\n'
          }
        ],
        'team.accessLogs': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: admin)\n'
          },
          {
            name: 'count',
            example: '20',
            required: 'Optional, default=100',
            description: 'Number of items to return per page.\n'
          },
          {
            name: 'page',
            example: '2',
            required: 'Optional, default=1',
            description: 'Page number of results to return.\n'
          }
        ],
        'team.billableInfo': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: admin)\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Optional',
            description:
              'A user to retrieve the billable information for. Defaults to all users.\n'
          }
        ],
        'team.info': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: team:read)\n'
          }
        ],
        'team.integrationLogs': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: admin)\n'
          },
          {
            name: 'service_id',
            example: ' ',
            required: 'Optional',
            description: 'Filter logs to this service. Defaults to all logs.\n'
          },
          {
            name: 'app_id',
            example: ' ',
            required: 'Optional',
            description:
              'Filter logs to this Slack app. Defaults to all logs.\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Optional',
            description:
              'Filter logs generated by this user’s actions. Defaults to all logs.\n'
          },
          {
            name: 'change_type',
            example: 'added',
            required: 'Optional',
            description:
              'Filter logs with this change type. Defaults to all logs.\n'
          },
          {
            name: 'count',
            example: '20',
            required: 'Optional, default=100',
            description: 'Number of items to return per page.\n'
          },
          {
            name: 'page',
            example: '2',
            required: 'Optional, default=1',
            description: 'Page number of results to return.\n'
          }
        ],
        'team.profile.get': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: users.profile:read)\n'
          },
          {
            name: 'visibility',
            example: 'all',
            required: 'Optional',
            description: 'Filter by visibility.\n'
          }
        ],
        'usergroups.create': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: usergroups:write)\n'
          },
          {
            name: 'name',
            example: 'My Test Team',
            required: 'Required',
            description:
              'A name for the User Group. Must be unique among User Groups.\n'
          },
          {
            name: 'handle',
            example: ' ',
            required: 'Optional',
            description:
              'A mention handle. Must be unique among channels, users and User Groups.\n'
          },
          {
            name: 'description',
            example: ' ',
            required: 'Optional',
            description: 'A short description of the User Group.\n'
          },
          {
            name: 'channels',
            example: ' ',
            required: 'Optional',
            description:
              'A comma separated string of encoded channel IDs for which the User Group uses as a default.\n'
          },
          {
            name: 'include_count',
            example: '1',
            required: 'Optional',
            description: 'Include the number of users in each User Group.\n'
          }
        ],
        'usergroups.disable': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: usergroups:write)\n'
          },
          {
            name: 'usergroup',
            example: 'S0604QSJC',
            required: 'Required',
            description: 'The encoded ID of the User Group to disable.\n'
          },
          {
            name: 'include_count',
            example: '1',
            required: 'Optional',
            description: 'Include the number of users in the User Group.\n'
          }
        ],
        'usergroups.enable': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: usergroups:write)\n'
          },
          {
            name: 'usergroup',
            example: 'S0604QSJC',
            required: 'Required',
            description: 'The encoded ID of the User Group to enable.\n'
          },
          {
            name: 'include_count',
            example: '1',
            required: 'Optional',
            description: 'Include the number of users in the User Group.\n'
          }
        ],
        'usergroups.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: usergroups:read)\n'
          },
          {
            name: 'include_disabled',
            example: '1',
            required: 'Optional',
            description: 'Include disabled User Groups.\n'
          },
          {
            name: 'include_count',
            example: '1',
            required: 'Optional',
            description: 'Include the number of users in each User Group.\n'
          },
          {
            name: 'include_users',
            example: '1',
            required: 'Optional',
            description: 'Include the list of users for each User Group.\n'
          }
        ],
        'usergroups.update': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: usergroups:write)\n'
          },
          {
            name: 'usergroup',
            example: 'S0604QSJC',
            required: 'Required',
            description: 'The encoded ID of the User Group to update.\n'
          },
          {
            name: 'name',
            example: 'My Test Team',
            required: 'Optional',
            description:
              'A name for the User Group. Must be unique among User Groups.\n'
          },
          {
            name: 'handle',
            example: ' ',
            required: 'Optional',
            description:
              'A mention handle. Must be unique among channels, users and User Groups.\n'
          },
          {
            name: 'description',
            example: ' ',
            required: 'Optional',
            description: 'A short description of the User Group.\n'
          },
          {
            name: 'channels',
            example: ' ',
            required: 'Optional',
            description:
              'A comma separated string of encoded channel IDs for which the User Group uses as a default.\n'
          },
          {
            name: 'include_count',
            example: '1',
            required: 'Optional',
            description: 'Include the number of users in the User Group.\n'
          }
        ],
        'usergroups.users.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: usergroups:read)\n'
          },
          {
            name: 'usergroup',
            example: 'S0604QSJC',
            required: 'Required',
            description: 'The encoded ID of the User Group to update.\n'
          },
          {
            name: 'include_disabled',
            example: '1',
            required: 'Optional',
            description: 'Allow results that involve disabled User Groups.\n'
          }
        ],
        'usergroups.users.update': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: usergroups:write)\n'
          },
          {
            name: 'usergroup',
            example: 'S0604QSJC',
            required: 'Required',
            description: 'The encoded ID of the User Group to update.\n'
          },
          {
            name: 'users',
            example: 'U060R4BJ4,U060RNRCZ',
            required: 'Required',
            description:
              'A comma separated string of encoded user IDs that represent the entire list of users for the User Group.\n'
          },
          {
            name: 'include_count',
            example: '1',
            required: 'Optional',
            description: 'Include the number of users in the User Group.\n'
          }
        ],
        'users.getPresence': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: users:read)\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Required',
            description:
              'User to get presence info on. Defaults to the authed user.\n'
          }
        ],
        'users.identity': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: identity.basic)\n'
          }
        ],
        'users.info': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: users:read)\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Required',
            description: 'User to get info on\n'
          }
        ],
        'users.list': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: users:read)\n'
          },
          {
            name: 'presence',
            example: '1',
            required: 'Optional',
            description: 'Whether to include presence data in the output\n'
          }
        ],
        'users.setActive': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: users:write)\n'
          }
        ],
        'users.setPresence': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description: 'Authentication token (Requires scope: users:write)\n'
          },
          {
            name: 'presence',
            example: 'away',
            required: 'Required',
            description: 'Either auto or away\n'
          }
        ],
        'users.profile.get': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: users.profile:read)\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Optional',
            description: 'User to retrieve profile info for\n'
          },
          {
            name: 'include_labels',
            example: '1',
            required: 'Optional, default=0',
            description: 'Include labels for each ID in custom profile fields\n'
          }
        ],
        'users.profile.set': [
          {
            name: 'token',
            example: 'xxxx-xxxxxxxxx-xxxx',
            required: 'Required',
            description:
              'Authentication token (Requires scope: users.profile:write)\n'
          },
          {
            name: 'user',
            example: 'U1234567890',
            required: 'Optional',
            description:
              'ID of user to change. This argument may only be specified by team admins.\n'
          },
          {
            name: 'profile',
            example: '{ first_name: "John", ... }',
            required: 'Optional',
            description:
              'Collection of key:value pairs presented as a URL-encoded JSON hash.\n'
          },
          {
            name: 'name',
            example: 'first_name',
            required: 'Optional',
            description:
              'Name of a single key to set. Usable only if profile is not passed.\n'
          },
          {
            name: 'value',
            example: 'John',
            required: 'Optional',
            description:
              'Value to set a single key to. Usable only if profile is not passed.\n'
          }
        ]
      };
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          var t = {
            auth: {},
            bots: {},
            channels: {},
            chat: {},
            dnd: {},
            emoji: {}
          };
          return (
            (t.files.comments = {}),
            (t.files = {}),
            (t.groups = {}),
            (t.im = {}),
            (t.mpim = {}),
            (t.pins = {}),
            (t.reactions = {}),
            (t.reminders = {}),
            (t.rtm = {}),
            (t.search = {}),
            (t.stars = {}),
            (t.team = {}),
            (t.team.profile = {}),
            (t.usergroups = {}),
            (t.usergroups.users = {}),
            (t.users = {}),
            (t.users.profile = {}),
            (t.auth.test = function(t, a) {
              (t.token = e), n(20).call({}, t, a);
            }),
            (t.bots.info = function(t, a) {
              (t.token = e), n(21).call({}, t, a);
            }),
            (t.channels.archive = function(t, a) {
              (t.token = e), n(22).call({}, t, a);
            }),
            (t.channels.create = function(t, a) {
              (t.token = e), n(23).call({}, t, a);
            }),
            (t.channels.history = function(t, a) {
              (t.token = e), n(24).call({}, t, a);
            }),
            (t.channels.info = function(t, a) {
              (t.token = e), n(25).call({}, t, a);
            }),
            (t.channels.invite = function(t, a) {
              (t.token = e), n(26).call({}, t, a);
            }),
            (t.channels.join = function(t, a) {
              (t.token = e), n(27).call({}, t, a);
            }),
            (t.channels.kick = function(t, a) {
              (t.token = e), n(28).call({}, t, a);
            }),
            (t.channels.leave = function(t, a) {
              (t.token = e), n(29).call({}, t, a);
            }),
            (t.channels.list = function(t, a) {
              (t.token = e), n(30).call({}, t, a);
            }),
            (t.channels.mark = function(t, a) {
              (t.token = e), n(31).call({}, t, a);
            }),
            (t.channels.rename = function(t, a) {
              (t.token = e), n(32).call({}, t, a);
            }),
            (t.channels.setPurpose = function(t, a) {
              (t.token = e), n(33).call({}, t, a);
            }),
            (t.channels.setTopic = function(t, a) {
              (t.token = e), n(34).call({}, t, a);
            }),
            (t.channels.unarchive = function(t, a) {
              (t.token = e), n(35).call({}, t, a);
            }),
            (t.chat.delete = function(t, a) {
              (t.token = e), n(36).call({}, t, a);
            }),
            (t.chat.meMessage = function(t, a) {
              (t.token = e), n(37).call({}, t, a);
            }),
            (t.chat.postMessage = function(t, a) {
              (t.token = e), n(38).call({}, t, a);
            }),
            (t.chat.update = function(t, a) {
              (t.token = e), n(39).call({}, t, a);
            }),
            (t.dnd.endDnd = function(t, a) {
              (t.token = e), n(40).call({}, t, a);
            }),
            (t.dnd.endSnooze = function(t, a) {
              (t.token = e), n(41).call({}, t, a);
            }),
            (t.dnd.info = function(t, a) {
              (t.token = e), n(42).call({}, t, a);
            }),
            (t.dnd.setSnooze = function(t, a) {
              (t.token = e), n(43).call({}, t, a);
            }),
            (t.dnd.teamInfo = function(t, a) {
              (t.token = e), n(44).call({}, t, a);
            }),
            (t.emoji.list = function(t, a) {
              (t.token = e), n(45).call({}, t, a);
            }),
            (t.files.comments.add = function(t, a) {
              (t.token = e), n(46).call({}, t, a);
            }),
            (t.files.comments.delete = function(t, a) {
              (t.token = e), n(47).call({}, t, a);
            }),
            (t.files.comments.edit = function(t, a) {
              (t.token = e), n(48).call({}, t, a);
            }),
            (t.files.delete = function(t, a) {
              (t.token = e), n(49).call({}, t, a);
            }),
            (t.files.info = function(t, a) {
              (t.token = e), n(50).call({}, t, a);
            }),
            (t.files.list = function(t, a) {
              (t.token = e), n(51).call({}, t, a);
            }),
            (t.files.revokePublicURL = function(t, a) {
              (t.token = e), n(52).call({}, t, a);
            }),
            (t.files.sharedPublicURL = function(t, a) {
              (t.token = e), n(53).call({}, t, a);
            }),
            (t.files.upload = function(t, a) {
              (t.token = e), n(54).call({}, t, a);
            }),
            (t.groups.archive = function(t, a) {
              (t.token = e), n(55).call({}, t, a);
            }),
            (t.groups.close = function(t, a) {
              (t.token = e), n(56).call({}, t, a);
            }),
            (t.groups.create = function(t, a) {
              (t.token = e), n(57).call({}, t, a);
            }),
            (t.groups.createChild = function(t, a) {
              (t.token = e), n(58).call({}, t, a);
            }),
            (t.groups.history = function(t, a) {
              (t.token = e), n(59).call({}, t, a);
            }),
            (t.groups.info = function(t, a) {
              (t.token = e), n(60).call({}, t, a);
            }),
            (t.groups.invite = function(t, a) {
              (t.token = e), n(61).call({}, t, a);
            }),
            (t.groups.kick = function(t, a) {
              (t.token = e), n(62).call({}, t, a);
            }),
            (t.groups.leave = function(t, a) {
              (t.token = e), n(63).call({}, t, a);
            }),
            (t.groups.list = function(t, a) {
              (t.token = e), n(64).call({}, t, a);
            }),
            (t.groups.mark = function(t, a) {
              (t.token = e), n(65).call({}, t, a);
            }),
            (t.groups.open = function(t, a) {
              (t.token = e), n(66).call({}, t, a);
            }),
            (t.groups.rename = function(t, a) {
              (t.token = e), n(67).call({}, t, a);
            }),
            (t.groups.setPurpose = function(t, a) {
              (t.token = e), n(68).call({}, t, a);
            }),
            (t.groups.setTopic = function(t, a) {
              (t.token = e), n(69).call({}, t, a);
            }),
            (t.groups.unarchive = function(t, a) {
              (t.token = e), n(70).call({}, t, a);
            }),
            (t.im.close = function(t, a) {
              (t.token = e), n(71).call({}, t, a);
            }),
            (t.im.history = function(t, a) {
              (t.token = e), n(72).call({}, t, a);
            }),
            (t.im.list = function(t, a) {
              (t.token = e), n(73).call({}, t, a);
            }),
            (t.im.mark = function(t, a) {
              (t.token = e), n(74).call({}, t, a);
            }),
            (t.im.open = function(t, a) {
              (t.token = e), n(75).call({}, t, a);
            }),
            (t.mpim.close = function(t, a) {
              (t.token = e), n(76).call({}, t, a);
            }),
            (t.mpim.history = function(t, a) {
              (t.token = e), n(77).call({}, t, a);
            }),
            (t.mpim.list = function(t, a) {
              (t.token = e), n(78).call({}, t, a);
            }),
            (t.mpim.mark = function(t, a) {
              (t.token = e), n(79).call({}, t, a);
            }),
            (t.mpim.open = function(t, a) {
              (t.token = e), n(80).call({}, t, a);
            }),
            (t.pins.add = function(t, a) {
              (t.token = e), n(81).call({}, t, a);
            }),
            (t.pins.list = function(t, a) {
              (t.token = e), n(82).call({}, t, a);
            }),
            (t.pins.remove = function(t, a) {
              (t.token = e), n(83).call({}, t, a);
            }),
            (t.reactions.add = function(t, a) {
              (t.token = e), n(84).call({}, t, a);
            }),
            (t.reactions.get = function(t, a) {
              (t.token = e), n(85).call({}, t, a);
            }),
            (t.reactions.list = function(t, a) {
              (t.token = e), n(86).call({}, t, a);
            }),
            (t.reactions.remove = function(t, a) {
              (t.token = e), n(87).call({}, t, a);
            }),
            (t.reminders.add = function(t, a) {
              (t.token = e), n(88).call({}, t, a);
            }),
            (t.reminders.complete = function(t, a) {
              (t.token = e), n(89).call({}, t, a);
            }),
            (t.reminders.delete = function(t, a) {
              (t.token = e), n(90).call({}, t, a);
            }),
            (t.reminders.info = function(t, a) {
              (t.token = e), n(91).call({}, t, a);
            }),
            (t.reminders.list = function(t, a) {
              (t.token = e), n(92).call({}, t, a);
            }),
            (t.rtm.start = function(t, a) {
              (t.token = e), n(8).call({}, t, a);
            }),
            (t.search.all = function(t, a) {
              (t.token = e), n(93).call({}, t, a);
            }),
            (t.search.files = function(t, a) {
              (t.token = e), n(94).call({}, t, a);
            }),
            (t.search.messages = function(t, a) {
              (t.token = e), n(95).call({}, t, a);
            }),
            (t.stars.add = function(t, a) {
              (t.token = e), n(96).call({}, t, a);
            }),
            (t.stars.list = function(t, a) {
              (t.token = e), n(97).call({}, t, a);
            }),
            (t.stars.remove = function(t, a) {
              (t.token = e), n(98).call({}, t, a);
            }),
            (t.team.accessLogs = function(t, a) {
              (t.token = e), n(99).call({}, t, a);
            }),
            (t.team.billableInfo = function(t, a) {
              (t.token = e), n(100).call({}, t, a);
            }),
            (t.team.info = function(t, a) {
              (t.token = e), n(101).call({}, t, a);
            }),
            (t.team.integrationLogs = function(t, a) {
              (t.token = e), n(102).call({}, t, a);
            }),
            (t.team.profile.get = function(t, a) {
              (t.token = e), n(103).call({}, t, a);
            }),
            (t.usergroups.create = function(t, a) {
              (t.token = e), n(104).call({}, t, a);
            }),
            (t.usergroups.disable = function(t, a) {
              (t.token = e), n(105).call({}, t, a);
            }),
            (t.usergroups.enable = function(t, a) {
              (t.token = e), n(106).call({}, t, a);
            }),
            (t.usergroups.list = function(t, a) {
              (t.token = e), n(107).call({}, t, a);
            }),
            (t.usergroups.update = function(t, a) {
              (t.token = e), n(108).call({}, t, a);
            }),
            (t.usergroups.users.list = function(t, a) {
              (t.token = e), n(109).call({}, t, a);
            }),
            (t.usergroups.users.update = function(t, a) {
              (t.token = e), n(110).call({}, t, a);
            }),
            (t.users.getPresence = function(t, a) {
              (t.token = e), n(111).call({}, t, a);
            }),
            (t.users.identity = function(t, a) {
              (t.token = e), n(112).call({}, t, a);
            }),
            (t.users.info = function(t, a) {
              (t.token = e), n(113).call({}, t, a);
            }),
            (t.users.list = function(t, a) {
              (t.token = e), n(114).call({}, t, a);
            }),
            (t.users.profile.get = function(t, a) {
              (t.token = e), n(140).call({}, t, a);
            }),
            (t.users.profile.set = function(t, a) {
              (t.token = e), n(141).call({}, t, a);
            }),
            (t.users.setActive = function(t, a) {
              (t.token = e), n(115).call({}, t, a);
            }),
            (t.users.setPresence = function(t, a) {
              (t.token = e), n(116).call({}, t, a);
            }),
            t
          );
        }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'users.profile.get',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'users.profile.set',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a,
        r = n(21),
        o = (a = r) && a.__esModule ? a : { default: a };
      (t.default = { info: o.default }), (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = f(n(22)),
        r = f(n(23)),
        o = f(n(24)),
        i = f(n(25)),
        s = f(n(26)),
        g = f(n(27)),
        A = f(n(28)),
        u = f(n(29)),
        C = f(n(30)),
        l = f(n(31)),
        c = f(n(32)),
        I = f(n(33)),
        d = f(n(34)),
        p = f(n(35));
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = {
        archive: a.default,
        create: r.default,
        history: o.default,
        info: i.default,
        invite: s.default,
        join: g.default,
        kick: A.default,
        leave: u.default,
        list: C.default,
        mark: l.default,
        rename: c.default,
        setPurpose: I.default,
        setTopic: d.default,
        unarchive: p.default
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = s(n(36)),
        r = s(n(38)),
        o = s(n(39)),
        i = s(n(37));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = {
        postMessage: r.default,
        delete: a.default,
        update: o.default,
        meMessage: i.default
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = g(n(42)),
        r = g(n(40)),
        o = g(n(41)),
        i = g(n(43)),
        s = g(n(44));
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = {
        info: a.default,
        endDnd: r.default,
        endSnooze: o.default,
        setSnooze: i.default,
        teamInfo: s.default
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = l(n(49)),
        r = l(n(50)),
        o = l(n(51)),
        i = l(n(54)),
        s = l(n(46)),
        g = l(n(47)),
        A = l(n(48)),
        u = l(n(52)),
        C = l(n(53));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = {
        delete: a.default,
        info: r.default,
        list: o.default,
        upload: i.default,
        comments: { add: s.default, delete: g.default, edit: A.default },
        revokePublicURL: u.default,
        sharedPublicURL: C.default
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = h(n(55)),
        r = h(n(56)),
        o = h(n(57)),
        i = h(n(58)),
        s = h(n(59)),
        g = h(n(60)),
        A = h(n(61)),
        u = h(n(62)),
        C = h(n(63)),
        l = h(n(64)),
        c = h(n(65)),
        I = h(n(66)),
        d = h(n(67)),
        p = h(n(68)),
        f = h(n(69)),
        x = h(n(70));
      function h(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = {
        archive: a.default,
        close: r.default,
        create: o.default,
        createChild: i.default,
        history: s.default,
        info: g.default,
        invite: A.default,
        kick: u.default,
        leave: C.default,
        list: l.default,
        mark: c.default,
        open: I.default,
        rename: d.default,
        setPurpose: p.default,
        setTopic: f.default,
        unarchive: x.default
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = g(n(71)),
        r = g(n(72)),
        o = g(n(73)),
        i = g(n(74)),
        s = g(n(75));
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = {
        close: a.default,
        history: r.default,
        list: o.default,
        mark: i.default,
        open: s.default
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = g(n(76)),
        r = g(n(77)),
        o = g(n(78)),
        i = g(n(79)),
        s = g(n(80));
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = {
        close: a.default,
        history: r.default,
        list: o.default,
        mark: i.default,
        open: s.default
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          var n = 'oauth.access',
            o = (0, r.default)(n, e);
          o ? t(o) : (0, a.default)(n, e, t);
        });
      var a = o(n(0)),
        r = o(n(1));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = s(n(84)),
        r = s(n(85)),
        o = s(n(86)),
        i = s(n(87));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = {
        add: a.default,
        get: r.default,
        list: o.default,
        remove: i.default
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = g(n(88)),
        r = g(n(89)),
        o = g(n(90)),
        i = g(n(91)),
        s = g(n(92));
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = {
        add: a.default,
        complete: r.default,
        delete: o.default,
        info: i.default,
        list: s.default
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = i(n(81)),
        r = i(n(82)),
        o = i(n(83));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = { add: a.default, list: r.default, remove: o.default }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function() {
          var e = { handlers: { started: [] } };
          return (
            r.default.push('pong'),
            r.default.forEach(function(t) {
              (e.handlers[t] = []),
                (e[t] = function(n) {
                  e.handlers[t].push(n);
                });
            }),
            (e.started = function(t) {
              e.handlers.started.push(t);
            }),
            (e.listen = function(t, n) {
              (0, a.default)(t, function(t, a) {
                if (t) {
                  if (!n) throw t;
                  n(t);
                } else
                  (e.ws = new WebSocket(a.url)),
                    (e.ws.onmessage = function(t) {
                      var n = JSON.parse(t.data);
                      e.handlers[n.type].forEach(function(e) {
                        return e.call({}, n);
                      });
                    }),
                    e.handlers.started.forEach(function(e) {
                      return e.call({}, a);
                    }),
                    n && n(null, a);
              });
            }),
            (e.close = function() {
              e.ws.close();
            }),
            e
          );
        });
      var a = o(n(8)),
        r = o(n(155));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      (t.default = [
        'accounts_changed',
        'bot_added',
        'bot_changed',
        'channel_archive',
        'channel_created',
        'channel_deleted',
        'channel_history_changed',
        'channel_joined',
        'channel_left',
        'channel_marked',
        'channel_rename',
        'channel_unarchive',
        'commands_changed',
        'dnd_updated',
        'dnd_updated_user',
        'email_domain_changed',
        'emoji_changed',
        'file_change',
        'file_comment_added',
        'file_comment_deleted',
        'file_comment_edited',
        'file_created',
        'file_deleted',
        'file_public',
        'file_shared',
        'file_unshared',
        'group_archive',
        'group_close',
        'group_history_changed',
        'group_joined',
        'group_left',
        'group_marked',
        'group_open',
        'group_rename',
        'group_unarchive',
        'hello',
        'im_close',
        'im_created',
        'im_history_changed',
        'im_marked',
        'im_open',
        'manual_presence_change',
        'message',
        'message.channels',
        'message.groups',
        'message.im',
        'message.mpim',
        'pin_added',
        'pin_removed',
        'pong',
        'pref_change',
        'presence_change',
        'reaction_added',
        'reaction_removed',
        'reconnect_url',
        'star_added',
        'star_removed',
        'subteam_created',
        'subteam_self_added',
        'subteam_self_removed',
        'subteam_updated',
        'team_domain_change',
        'team_join',
        'team_migration_started',
        'team_plan_change',
        'team_pref_change',
        'team_profile_change',
        'team_profile_delete',
        'team_profile_reorder',
        'team_rename',
        'url_verification',
        'user_change',
        'user_typing'
      ]),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = i(n(93)),
        r = i(n(94)),
        o = i(n(95));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = { all: a.default, files: r.default, messages: o.default }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = i(n(96)),
        r = i(n(97)),
        o = i(n(98));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = { add: a.default, list: r.default, remove: o.default }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = g(n(99)),
        r = g(n(100)),
        o = g(n(101)),
        i = g(n(102)),
        s = g(n(103));
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = {
        accessLogs: a.default,
        billableInfo: r.default,
        info: o.default,
        integrationLogs: i.default,
        profile: { get: s.default }
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = u(n(104)),
        r = u(n(105)),
        o = u(n(106)),
        i = u(n(107)),
        s = u(n(108)),
        g = u(n(109)),
        A = u(n(110));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = {
        create: a.default,
        disable: r.default,
        enable: o.default,
        list: i.default,
        update: s.default,
        users: { list: g.default, update: A.default }
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = A(n(111)),
        r = A(n(112)),
        o = A(n(113)),
        i = A(n(114)),
        s = A(n(115)),
        g = A(n(116));
      function A(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = {
        getPresence: a.default,
        identity: r.default,
        info: o.default,
        list: i.default,
        setActive: s.default,
        setPresence: g.default
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      (t = e.exports = n(162)(!1)).push([
        e.i,
        '@import url(https://fonts.googleapis.com/css?family=Raleway:400,200);',
        ''
      ]),
        t.push([
          e.i,
          '.ReactSlackChat__transition___9M_ac{transition:0.8s cubic-bezier(0.3, 0, 0, 1.3)}.ReactSlackChat__card___3w9UW{background-color:#fff;box-shadow:0 0 10px 2px rgba(0,0,0,0.3);height:60px;position:fixed;right:40px;bottom:0;width:340px;cursor:pointer}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX{cursor:default;height:500px;width:340px;z-index:99999}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX .ReactSlackChat__card_circle___2IssD{background-size:cover;border-radius:0}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX h2{color:#fff}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX h2 small{color:#fff}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX.ReactSlackChat__chatActive___2pqMg .ReactSlackChat__helpHeader___1zfWG{visibility:hidden;opacity:0;transition:visibility 0s, opacity 0.5s linear}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX.ReactSlackChat__chatActive___2pqMg .ReactSlackChat__channels___1kZGS{visibility:hidden;opacity:0;transition:visibility 0s, opacity 0.5s linear}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX.ReactSlackChat__chatActive___2pqMg .ReactSlackChat__chat___1XmdD{visibility:visible;opacity:1;transition:visibility 0s, opacity 0.5s linear}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX .ReactSlackChat__subText___1hXWw{visibility:visible;transition:visibility 0s, opacity 0.5s linear;opacity:1}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX p{margin-top:300px}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX .ReactSlackChat__channelActive___3_EXm.ReactSlackChat__channels___1kZGS{overflow-y:auto;visibility:visible;transition:visibility 0s, opacity 0.5s linear;opacity:1;overflow-x:hidden}.ReactSlackChat__card___3w9UW.ReactSlackChat__active___1osoX.ReactSlackChat__channelActive___3_EXm .ReactSlackChat__helpHeader___1zfWG{visibility:visible;opacity:1;transition:visibility 0s, opacity 0.5s linear}.ReactSlackChat__card___3w9UW .ReactSlackChat__channels___1kZGS{visibility:hidden;opacity:0;transition:visibility 0s, opacity 0.5s linear}.ReactSlackChat__card___3w9UW .ReactSlackChat__chat___1XmdD{visibility:hidden;opacity:0;transition:visibility 0s, opacity 0.5s linear}.ReactSlackChat__card___3w9UW .ReactSlackChat__subText___1hXWw{visibility:hidden;transition:visibility 0s, opacity 0.5s linear;opacity:0}.ReactSlackChat__card___3w9UW h2{color:#fff;font-family:Raleway,sans-serif;font-size:24px;font-weight:200;margin-top:0;text-align:center;width:100%;z-index:9999}.ReactSlackChat__contact___2WatO{position:relative;width:95%;height:50px;margin-top:10px;padding-left:1rem;display:flex;align-items:center;cursor:pointer;overflow:hidden}.ReactSlackChat__contact__photo___3tBwT{border-radius:50%;margin-right:1.5rem;height:50px;width:50px;float:right}.ReactSlackChat__contact__photo___3tBwT svg{height:42px}.ReactSlackChat__user__contact__photo___2XFGH{float:left;margin-top:2px;padding-bottom:1px;height:42px;border-radius:50%;margin-right:10px}.ReactSlackChat__user__contact__generated__image___2QFTN{float:right;margin-top:2px;font-size:2.2em;color:#fff;padding-right:12px;padding-left:12px;padding-bottom:1px;padding-top:1px;text-align:center;background:#2e7eea;height:42px;min-width:30px;border-radius:50%}.ReactSlackChat__chat__name___1VEkG{top:15px;right:12px;position:relative}.ReactSlackChat__chat__contact__photo___39wb1{border-radius:50%;height:42px;float:right}.ReactSlackChat__channel__header__photo___1ya40{border-radius:50%;height:48px;float:right;position:relative;right:1.5rem;top:1.5rem}.ReactSlackChat__channel__header__photo___1ya40 svg{height:48px}.ReactSlackChat__channel__close__button___IDR14{position:absolute;top:0;right:0;color:#ccc;background:none;font-weight:bold;font-size:1.4em;border:none;cursor:pointer}.ReactSlackChat__contact__name___vJEfC{font-family:Raleway,Helvetica,Arial,sans-serif}.ReactSlackChat__contact__status___3ZHRm{position:absolute;top:20px;right:15px;width:8px;height:8px;border:2px solid #00b570;border-radius:50%;opacity:0;transition:opacity 0.3s}.ReactSlackChat__contact__status___3ZHRm.ReactSlackChat__online___2H97b{opacity:1}.ReactSlackChat__chatHeader___3Tlfe{position:absolute;top:0px;z-index:9999;left:0rem;width:100%;height:6rem;background:#2e7eea}.ReactSlackChat__chat__back___xUDcG:before{content:"";position:absolute;display:block;cursor:pointer;top:2.4rem;left:1.6rem;width:1.5rem;height:1.5rem;border:2px solid #ccc;border-right:none;border-bottom:none;transform:rotate(-45deg);transition:transform 0.3s}.ReactSlackChat__chat__back___xUDcG:hover:before{transform:translateX(-0.3rem) rotate(-45deg)}.ReactSlackChat__chat__status___1NTQA{position:relative;left:40px;font-family:Raleway,Helvetica,Arial,sans-serif;text-transform:uppercase;color:#fff}.ReactSlackChat__chat__person___2u9ec{display:inline-block;position:absolute;top:2rem;left:3rem;font-family:Raleway,Helvetica,Arial,sans-serif;color:#fff}.ReactSlackChat__chat__online___2ZWMl{position:absolute;left:20px;top:5px;width:8px;height:8px;border:2px solid #43dea3;border-radius:50%;opacity:0;transition:opacity 0.3s}.ReactSlackChat__chat__online___2ZWMl.ReactSlackChat__active___1osoX{opacity:1}.ReactSlackChat__chat__messages___1kJlp{position:absolute;top:60px;height:68%;width:96%;padding-top:35px;padding-right:10px;padding-left:10px;overflow-y:auto}.ReactSlackChat__chat__msgRow___3j1tU{margin-bottom:0.5rem}.ReactSlackChat__chat__msgRow___3j1tU:after{content:"";display:table;clear:both}.ReactSlackChat__chat__msgRow___3j1tU.ReactSlackChat__mine___217x2{text-align:left}.ReactSlackChat__chat__msgRow___3j1tU.ReactSlackChat__notMine___tnTQI{text-align:right}.ReactSlackChat__chat__msgRow___3j1tU.ReactSlackChat__notMine___tnTQI .ReactSlackChat__chat__message___18STE.ReactSlackChat__mentioned___3TGpt{background:#43b2f3 url(data:image/png;base64,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) no-repeat -2px -2px !important;color:#fff !important}.ReactSlackChat__chat__message___18STE{display:inline-block;max-width:60%;word-wrap:break-word;margin-right:10px;padding:0.8rem;font-family:Raleway,Helvetica,Arial,sans-serif}.ReactSlackChat__system__message___3Cs0L{max-width:100%;color:#2e7eea}.ReactSlackChat__attachmentIcon___2DWqQ{position:absolute;bottom:15px;left:15px;width:25px;height:25px;z-index:9999;cursor:pointer;background:url(data:image/png;base64,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LmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxNi0xMC0xN1QxMzoyOTowMy0wNzowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTYtMTAtMTdUMTM6Mjk6MDMtMDc6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE2LTEwLTE3VDEzOjI5OjAzLTA3OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDoyZTQ1OTY4YS0xMDQwLTRlN2ItYTIzMS01YTE1YzRmMjQwMTg8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiOGE0NTcwNy1jY2JkLTExNzktOWY3Ny04MTA4MjJiYzhkODg8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDpkMzBlMzEzOS1iZTU4LTQwNzAtOWEzOC1lZTkxMWIzZTBmZjk8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6ZDMwZTMxMzktYmU1OC00MDcwLTlhMzgtZWU5MTFiM2UwZmY5PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTEwLTE3VDEzOjI5OjAzLTA3OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MmU0NTk2OGEtMTA0MC00ZTdiLWEyMzEtNWExNWM0ZjI0MDE4PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTEwLTE3VDEzOjI5OjAzLTA3OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU+RGlzcGxheTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjY1NTM1PC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4zMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4zMjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+9mylZAAAACBjSFJNAABuJwAAc68AAPwDAACEPgAAbxoAAORyAAAw3QAAGDHVrX3tAAAK7UlEQVR42mL8//8/AzJgYWBgYLj98CHD5n37/1vo6zMyMTAwMGzdt/+/irx8lQA/XzDj////Ge4+fMTw+9/f8A8fP64EAAAA//9ixDDj9dv3DB+/fmY4d+WqyLNXr18zMTIyMly5dbv+6YsXr11srKRZVmzd8t/WxITx/79/+hysrM8AAAAA//9i/P//P8Prt+8ZPnz5xPD//38GNlZWhg179v430dZmP3358k+4gk/fvjBs3rPvv7yMdMPff//+PXn+vMnfxRnizsWbNv5/8eo1Aycnx+/7jx83KEpJXVGUlVnz9+9fBsb///8zfPj8WXr5ps13mVlZvgnw8R+REhHxY2FhZhARFGQAAAAA///C8Ac6YGFgYGC49eABA8P//wyMjEwMdx8/nvXz589XP37+dA339jJnQVZ95+HD2Rzs7Jf4eXgmf/vx4w8DAwMDE0zy7qNHc1lYWI5euH590v///7N//folC1dw99HjeSJCQgev3Lo1X0tZOe/7z59KV27fToK74c/f37wv37zRVJKVrfv775/ujVu3Ug01NRnhCuQlpVvZ2NkuPHn2nPvKrVtfNFRVGGGeY2FgYGDYc/z4eUF+/stfPn/WVVVSgnidEaIAIHg4vH77nuH9548MjIyMDP///WNgYGRkYGRgZGBhYWZgZGRiuHH37uRbDx7kMDMzM/z9+5fB39XFVl5S8ggTvkBkYmRkuH733uQNu3f/5+fluaelosKoq6bG6GZtzbhl3/7DKMGEopGJieHuo0dzNu7d+5+Hi+u8qoJCzYFTp/v4uLkE/vz9W7Dz6NH/agryszAMYGRkZLj78NHcTfv2/+fi5DwkIynRePbKlbnfvn//Z6illXP0/IX3375/U/Kys+UREhRMR42ox4/qth04+J+Dnf2Io6WFx9nLVxaysrD+MtPXzXn84kUbCzOzmrOlRfDtBw9zz1+7Pp+fmxsRygwMDAznrl5ttDc1FRHg43srxM/PfZiZmeHh06etHOxsLb4OjsFbDx5YKyEmKmNlZMj46fNX1MTGwMDA8PffP4az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) no-repeat;background-size:22px}.ReactSlackChat__attachmentIcon___2DWqQ .ReactSlackChat__chat__upload___PAQM-{display:none !important}.ReactSlackChat__chat__file__uploading___bCpsW{position:absolute;color:#fff;background:#22a2e4;bottom:0;left:0;width:84%;height:1.5rem;padding:1rem 1rem 1rem 2rem}@keyframes ReactSlackChat__dots___A0O3t{0%{color:rgba(0,0,0,0);text-shadow:0.25em 0 0 rgba(0,0,0,0),0.5em 0 0 rgba(0,0,0,0)}20%{color:rgba(0,0,0,0);text-shadow:0.25em 0 0 rgba(0,0,0,0),0.5em 0 0 rgba(0,0,0,0)}40%{color:#fff;text-shadow:0.25em 0 0 rgba(0,0,0,0),0.5em 0 0 rgba(0,0,0,0)}60%{text-shadow:0.25em 0 0 #fff,0.5em 0 0 rgba(0,0,0,0)}80%{text-shadow:0.25em 0 0 #fff,0.5em 0 0 #fff}100%{text-shadow:0.25em 0 0 #fff,0.5em 0 0 #fff}}.ReactSlackChat__chat__input___1-Hr1{position:absolute;bottom:0;left:0;width:80%;height:45px;padding:0.5rem 1rem 0.5rem 4rem;background-repeat:no-repeat;background-position:1rem 1rem;background-color:#e9eaf3;font-size:1em;color:#2b2342;font-family:Raleway,Helvetica,Arial,sans-serif}.ReactSlackChat__helpHeader___1zfWG{background:#2e7eea;position:relative;padding:20px}.ReactSlackChat__chat-header___2vQpD{position:absolute;top:0;z-index:9999;left:0;width:100%;height:6rem;background:#2e7eea}.ReactSlackChat__gh-emoji___3QKg6{height:24px}.ReactSlackChat__mine___217x2 .ReactSlackChat__chat__message___18STE{color:#2b2342;border:1px solid #dfdfdf;position:relative}.ReactSlackChat__unreadNotificationsBadge___2AH4O{padding:25px;background:white;border-radius:500px;font-family:Raleway, sans-serif;display:inline-block;min-width:10px;font-size:12px;font-weight:700;line-height:1;color:#5c5c5c;white-space:nowrap;vertical-align:middle;background-color:#fefefe;position:absolute;left:300px;bottom:135px;text-align:center;box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);transition:all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)}.ReactSlackChat__unreadNotificationsBadge___2AH4O:hover{box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22)}.ReactSlackChat__notMine___tnTQI .ReactSlackChat__chat__message___18STE{color:#23244e;background:#e9eaf3}.ReactSlackChat__loading___MG1np:after{content:\' .\';animation:ReactSlackChat__dots___A0O3t 1s steps(5, end) infinite}\n',
          ''
        ]),
        (t.locals = {
          transition: 'ReactSlackChat__transition___9M_ac',
          card: 'ReactSlackChat__card___3w9UW',
          active: 'ReactSlackChat__active___1osoX',
          card_circle: 'ReactSlackChat__card_circle___2IssD',
          chatActive: 'ReactSlackChat__chatActive___2pqMg',
          helpHeader: 'ReactSlackChat__helpHeader___1zfWG',
          channels: 'ReactSlackChat__channels___1kZGS',
          chat: 'ReactSlackChat__chat___1XmdD',
          subText: 'ReactSlackChat__subText___1hXWw',
          channelActive: 'ReactSlackChat__channelActive___3_EXm',
          contact: 'ReactSlackChat__contact___2WatO',
          contact__photo: 'ReactSlackChat__contact__photo___3tBwT',
          user__contact__photo: 'ReactSlackChat__user__contact__photo___2XFGH',
          user__contact__generated__image:
            'ReactSlackChat__user__contact__generated__image___2QFTN',
          chat__name: 'ReactSlackChat__chat__name___1VEkG',
          chat__contact__photo: 'ReactSlackChat__chat__contact__photo___39wb1',
          channel__header__photo:
            'ReactSlackChat__channel__header__photo___1ya40',
          channel__close__button:
            'ReactSlackChat__channel__close__button___IDR14',
          contact__name: 'ReactSlackChat__contact__name___vJEfC',
          contact__status: 'ReactSlackChat__contact__status___3ZHRm',
          online: 'ReactSlackChat__online___2H97b',
          chatHeader: 'ReactSlackChat__chatHeader___3Tlfe',
          chat__back: 'ReactSlackChat__chat__back___xUDcG',
          chat__status: 'ReactSlackChat__chat__status___1NTQA',
          chat__person: 'ReactSlackChat__chat__person___2u9ec',
          chat__online: 'ReactSlackChat__chat__online___2ZWMl',
          chat__messages: 'ReactSlackChat__chat__messages___1kJlp',
          chat__msgRow: 'ReactSlackChat__chat__msgRow___3j1tU',
          mine: 'ReactSlackChat__mine___217x2',
          notMine: 'ReactSlackChat__notMine___tnTQI',
          chat__message: 'ReactSlackChat__chat__message___18STE',
          mentioned: 'ReactSlackChat__mentioned___3TGpt',
          system__message: 'ReactSlackChat__system__message___3Cs0L',
          attachmentIcon: 'ReactSlackChat__attachmentIcon___2DWqQ',
          chat__upload: 'ReactSlackChat__chat__upload___PAQM-',
          chat__file__uploading:
            'ReactSlackChat__chat__file__uploading___bCpsW',
          chat__input: 'ReactSlackChat__chat__input___1-Hr1',
          'chat-header': 'ReactSlackChat__chat-header___2vQpD',
          'gh-emoji': 'ReactSlackChat__gh-emoji___3QKg6',
          unreadNotificationsBadge:
            'ReactSlackChat__unreadNotificationsBadge___2AH4O',
          loading: 'ReactSlackChat__loading___MG1np',
          dots: 'ReactSlackChat__dots___A0O3t'
        });
    },
    function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        var t = [];
        return (
          (t.toString = function() {
            return this.map(function(t) {
              var n = (function(e, t) {
                var n = e[1] || '',
                  a = e[3];
                if (!a) return n;
                if (t && 'function' == typeof btoa) {
                  var r =
                      ((i = a),
                      '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                        btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
                        ' */'),
                    o = a.sources.map(function(e) {
                      return '/*# sourceURL=' + a.sourceRoot + e + ' */';
                    });
                  return [n]
                    .concat(o)
                    .concat([r])
                    .join('\n');
                }
                var i;
                return [n].join('\n');
              })(t, e);
              return t[2] ? '@media ' + t[2] + '{' + n + '}' : n;
            }).join('');
          }),
          (t.i = function(e, n) {
            'string' == typeof e && (e = [[null, e, '']]);
            for (var a = {}, r = 0; r < this.length; r++) {
              var o = this[r][0];
              null != o && (a[o] = !0);
            }
            for (r = 0; r < e.length; r++) {
              var i = e[r];
              (null != i[0] && a[i[0]]) ||
                (n && !i[2]
                  ? (i[2] = n)
                  : n && (i[2] = '(' + i[2] + ') and (' + n + ')'),
                t.push(i));
            }
          }),
          t
        );
      };
    },
    function(e, t, n) {
      var a,
        r,
        o = {},
        i =
          ((a = function() {
            return window && document && document.all && !window.atob;
          }),
          function() {
            return void 0 === r && (r = a.apply(this, arguments)), r;
          }),
        s = (function(e) {
          var t = {};
          return function(e, n) {
            if ('function' == typeof e) return e();
            if (void 0 === t[e]) {
              var a = function(e, t) {
                return t ? t.querySelector(e) : document.querySelector(e);
              }.call(this, e, n);
              if (
                window.HTMLIFrameElement &&
                a instanceof window.HTMLIFrameElement
              )
                try {
                  a = a.contentDocument.head;
                } catch (e) {
                  a = null;
                }
              t[e] = a;
            }
            return t[e];
          };
        })(),
        g = null,
        A = 0,
        u = [],
        C = n(164);
      function l(e, t) {
        for (var n = 0; n < e.length; n++) {
          var a = e[n],
            r = o[a.id];
          if (r) {
            r.refs++;
            for (var i = 0; i < r.parts.length; i++) r.parts[i](a.parts[i]);
            for (; i < a.parts.length; i++) r.parts.push(x(a.parts[i], t));
          } else {
            var s = [];
            for (i = 0; i < a.parts.length; i++) s.push(x(a.parts[i], t));
            o[a.id] = { id: a.id, refs: 1, parts: s };
          }
        }
      }
      function c(e, t) {
        for (var n = [], a = {}, r = 0; r < e.length; r++) {
          var o = e[r],
            i = t.base ? o[0] + t.base : o[0],
            s = { css: o[1], media: o[2], sourceMap: o[3] };
          a[i] ? a[i].parts.push(s) : n.push((a[i] = { id: i, parts: [s] }));
        }
        return n;
      }
      function I(e, t) {
        var n = s(e.insertInto);
        if (!n)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
          );
        var a = u[u.length - 1];
        if ('top' === e.insertAt)
          a
            ? a.nextSibling
              ? n.insertBefore(t, a.nextSibling)
              : n.appendChild(t)
            : n.insertBefore(t, n.firstChild),
            u.push(t);
        else if ('bottom' === e.insertAt) n.appendChild(t);
        else {
          if ('object' != typeof e.insertAt || !e.insertAt.before)
            throw new Error(
              "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
            );
          var r = s(e.insertAt.before, n);
          n.insertBefore(t, r);
        }
      }
      function d(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = u.indexOf(e);
        t >= 0 && u.splice(t, 1);
      }
      function p(e) {
        var t = document.createElement('style');
        if (
          (void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
          void 0 === e.attrs.nonce)
        ) {
          var a = (function() {
            0;
            return n.nc;
          })();
          a && (e.attrs.nonce = a);
        }
        return f(t, e.attrs), I(e, t), t;
      }
      function f(e, t) {
        Object.keys(t).forEach(function(n) {
          e.setAttribute(n, t[n]);
        });
      }
      function x(e, t) {
        var n, a, r, o;
        if (t.transform && e.css) {
          if (
            !(o =
              'function' == typeof t.transform
                ? t.transform(e.css)
                : t.transform.default(e.css))
          )
            return function() {};
          e.css = o;
        }
        if (t.singleton) {
          var i = A++;
          (n = g || (g = p(t))),
            (a = _.bind(null, n, i, !1)),
            (r = _.bind(null, n, i, !0));
        } else
          e.sourceMap &&
          'function' == typeof URL &&
          'function' == typeof URL.createObjectURL &&
          'function' == typeof URL.revokeObjectURL &&
          'function' == typeof Blob &&
          'function' == typeof btoa
            ? ((n = (function(e) {
                var t = document.createElement('link');
                return (
                  void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
                  (e.attrs.rel = 'stylesheet'),
                  f(t, e.attrs),
                  I(e, t),
                  t
                );
              })(t)),
              (a = function(e, t, n) {
                var a = n.css,
                  r = n.sourceMap,
                  o = void 0 === t.convertToAbsoluteUrls && r;
                (t.convertToAbsoluteUrls || o) && (a = C(a));
                r &&
                  (a +=
                    '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                    ' */');
                var i = new Blob([a], { type: 'text/css' }),
                  s = e.href;
                (e.href = URL.createObjectURL(i)), s && URL.revokeObjectURL(s);
              }.bind(null, n, t)),
              (r = function() {
                d(n), n.href && URL.revokeObjectURL(n.href);
              }))
            : ((n = p(t)),
              (a = function(e, t) {
                var n = t.css,
                  a = t.media;
                a && e.setAttribute('media', a);
                if (e.styleSheet) e.styleSheet.cssText = n;
                else {
                  for (; e.firstChild; ) e.removeChild(e.firstChild);
                  e.appendChild(document.createTextNode(n));
                }
              }.bind(null, n)),
              (r = function() {
                d(n);
              }));
        return (
          a(e),
          function(t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              a((e = t));
            } else r();
          }
        );
      }
      e.exports = function(e, t) {
        if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
          throw new Error(
            'The style-loader cannot be used in a non-browser environment'
          );
        ((t = t || {}).attrs = 'object' == typeof t.attrs ? t.attrs : {}),
          t.singleton || 'boolean' == typeof t.singleton || (t.singleton = i()),
          t.insertInto || (t.insertInto = 'head'),
          t.insertAt || (t.insertAt = 'bottom');
        var n = c(e, t);
        return (
          l(n, t),
          function(e) {
            for (var a = [], r = 0; r < n.length; r++) {
              var i = n[r];
              (s = o[i.id]).refs--, a.push(s);
            }
            e && l(c(e, t), t);
            for (r = 0; r < a.length; r++) {
              var s;
              if (0 === (s = a[r]).refs) {
                for (var g = 0; g < s.parts.length; g++) s.parts[g]();
                delete o[s.id];
              }
            }
          }
        );
      };
      var h,
        m =
          ((h = []),
          function(e, t) {
            return (h[e] = t), h.filter(Boolean).join('\n');
          });
      function _(e, t, n, a) {
        var r = n ? '' : a.css;
        if (e.styleSheet) e.styleSheet.cssText = m(t, r);
        else {
          var o = document.createTextNode(r),
            i = e.childNodes;
          i[t] && e.removeChild(i[t]),
            i.length ? e.insertBefore(o, i[t]) : e.appendChild(o);
        }
      }
    },
    function(e, t) {
      e.exports = function(e) {
        var t = 'undefined' != typeof window && window.location;
        if (!t) throw new Error('fixUrls requires window.location');
        if (!e || 'string' != typeof e) return e;
        var n = t.protocol + '//' + t.host,
          a = n + t.pathname.replace(/\/[^\/]*$/, '/');
        return e.replace(
          /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
          function(e, t) {
            var r,
              o = t
                .trim()
                .replace(/^"(.*)"$/, function(e, t) {
                  return t;
                })
                .replace(/^'(.*)'$/, function(e, t) {
                  return t;
                });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)
              ? e
              : ((r =
                  0 === o.indexOf('//')
                    ? o
                    : 0 === o.indexOf('/')
                    ? n + o
                    : a + o.replace(/^\.\//, '')),
                'url(' + JSON.stringify(r) + ')');
          }
        );
      };
    },
    function(e, t, n) {
      'use strict';
      n.r(t);
      var a = {};
      n.r(a),
        n.d(a, 'debugLog', function() {
          return m;
        }),
        n.d(a, 'arraysIdentical', function() {
          return _;
        });
      var r = {};
      n.r(r),
        n.d(r, 'isHookMessage', function() {
          return R;
        }),
        n.d(r, 'execHooksIfFound', function() {
          return M;
        });
      var o = {};
      n.r(o),
        n.d(o, 'changeColorRecursive', function() {
          return O;
        });
      var i = n(3),
        s = n.n(i),
        g = n(5),
        A = n.n(g),
        u = n(4),
        C = n.n(u),
        l = n(6),
        c = n(117),
        I = n(9);
      var d = function e(t) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            (this.name = t.name),
            (this.color = t.color),
            (this.id = t.id),
            (this.real_name = t.real_name || t.name),
            (this.image = t.profile.image_48);
        },
        p = n(2),
        f = n.n(p),
        x = n(10),
        h = n.n(x),
        m = function() {},
        _ = function(e, t) {
          return JSON.stringify(e) === JSON.stringify(t);
        },
        v = function(e) {
          var t = e.text,
            n = e.lastThreadTs,
            a = e.apiToken,
            r = e.channel,
            o = e.username;
          return new Promise(function(e, i) {
            if ('' !== t)
              return l.chat.postMessage(
                { token: a, thread_ts: n, channel: r, text: t, username: o },
                function(t, n) {
                  return t ? i(t) : e(n);
                }
              );
          });
        },
        k = function(e) {
          return /<@.[^|]*[|].*>/.test(e.text) && e.text.indexOf(e.user) > -1;
        },
        b = function(e) {
          return void 0 !== e.user;
        },
        y = function(e, t) {
          return !(e.username === t) && e.text.indexOf('@'.concat(t)) > -1;
        },
        q = function(e) {
          var t = document.createElement('textarea');
          return (t.innerHTML = e), t.value;
        },
        R = function(e) {
          return /\$=>(@.*.):(.*)/.exec(e);
        },
        M = function(e) {
          var t = e.message,
            n = e.customHooks,
            a = e.apiToken,
            r = e.channel,
            o = e.username,
            i = q(t.text),
            s = R(i);
          s &&
            y(t, o) &&
            b(t) &&
            s[2] &&
            n.map(function(e) {
              e.id === s[2] &&
                w({ hook: e, apiToken: a, channel: r, username: o });
            });
        },
        w = function(e) {
          var t = e.hook,
            n = e.apiToken,
            a = e.channel,
            r = e.username;
          return (
            m('Hook trigger found', t.id),
            t
              .action({ apiToken: n, channel: a, username: r })
              .then(function(e) {
                return (
                  m('Action executed. Posting response.'),
                  v({
                    text: '$=>@['.concat(t.id, ']:').concat(e),
                    apiToken: n,
                    channel: a,
                    username: r
                  })
                );
              })
          );
        },
        O = function e(t, n, a) {
          if (t.style) {
            var r = window.getComputedStyle(t).backgroundColor;
            r && j(r) === n && (t.style.backgroundColor = a);
          }
          if (t.childNodes)
            for (var o = 0; o < t.childNodes.length; o++)
              e(t.childNodes[o], n, a);
        },
        j = function(e) {
          return (e = e.match(
            /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
          )) && 4 === e.length
            ? '#' +
                ('0' + parseInt(e[1], 10).toString(16)).slice(-2) +
                ('0' + parseInt(e[2], 10).toString(16)).slice(-2) +
                ('0' + parseInt(e[3], 10).toString(16)).slice(-2)
            : '';
        };
      function P(e) {
        return (P =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function S() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          );
        })(['Could not connect to Slack Server. Reason: ', '']);
        return (
          (S = function() {
            return e;
          }),
          e
        );
      }
      function T(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function E(e) {
        return (E = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function N(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function U(e, t) {
        return (U =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var F = a.debugLog,
        z = a.arraysIdentical,
        D = r.isHookMessage,
        G = r.execHooksIfFound,
        L = o.changeColorRecursive,
        Z = (function(e) {
          function t(e) {
            var n, a, r;
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
              (a = this),
              (r = E(t).call(this, e)),
              ((n =
                !r || ('object' !== P(r) && 'function' != typeof r)
                  ? N(a)
                  : r).bot = c.rtm.client()),
              (n.state = {
                failed: !1,
                helpText: n.props.helpText,
                onlineUsers: [],
                channels: [],
                messages: [],
                userThreadTss: [],
                postMyMessage: '',
                postMyFile: '',
                chatbox: {
                  active: !1,
                  channelActiveView: !1,
                  chatActiveView: !1
                },
                currentChannel: null
              }),
              (n.apiToken = atob(n.props.apiToken)),
              (n.refreshTime = 3e4),
              (n.chatInitiatedTs = ''),
              (n.activeChannel = []),
              (n.activeChannelInterval = null),
              (n.messageFormatter = { emoji: !1 }),
              (n.fileUploadTitle = 'Posted by '.concat(n.props.botName)),
              (n.themeDefaultColor = '#2e7eea'),
              (n.loadMessages = n.loadMessages.bind(N(n))),
              (n.postMyMessage = n.postMyMessage.bind(N(n))),
              (n.gotNewMessages = n.gotNewMessages.bind(N(n))),
              (n.getUserImg = n.getUserImg.bind(N(n))),
              (n.handleChange = n.handleChange.bind(N(n))),
              (n.handleFileChange = n.handleFileChange.bind(N(n))),
              (n.openChatBox = n.openChatBox.bind(N(n))),
              (n.closeChatBox = n.closeChatBox.bind(N(n))),
              (n.goToChatView = n.goToChatView.bind(N(n))),
              (n.goToChannelView = n.goToChannelView.bind(N(n))),
              (n.displayFormattedMessage = n.displayFormattedMessage.bind(
                N(n)
              )),
              Object(I.load)()
                .then(function() {
                  n.messageFormatter = { emoji: !0 };
                })
                .catch(function(e) {
                  return F('Cant initiate emoji library '.concat(e));
                }),
              n
                .connectBot(N(n))
                .then(function(e) {
                  F('CONNECTED!', 'got data', e),
                    n.props.defaultChannel &&
                      (n.activeChannel = e.channels.filter(function(e) {
                        return e.name === n.props.defaultChannel;
                      })[0]),
                    n.setState({
                      onlineUsers: e.onlineUsers,
                      channels: e.channels
                    });
                })
                .catch(function(e) {
                  F('could not intialize slack bot', e),
                    n.setState({ failed: !0 });
                }),
              n
            );
          }
          var n, a, r;
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && U(e, t);
            })(t, i['Component']),
            (n = t),
            (a = [
              {
                key: 'gotNewMessages',
                value: function(e) {
                  var t = this.state.newMessageNotification + e.length;
                  this.setState({ newMessageNotification: t });
                }
              },
              {
                key: 'displayFormattedMessage',
                value: function(e) {
                  var t = q(e.text),
                    n = e.username === this.props.botName;
                  if (k(e)) {
                    var a = e.text.match(
                      /uploaded a file: <(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&\/\/=]*))/
                    );
                    if (a && a[0] && a[1]) {
                      var r = e.text.indexOf(this.fileUploadTitle) > -1,
                        o = a[1].split('/');
                      return s.a.createElement(
                        'div',
                        {
                          className: C()(
                            f.a.chat__msgRow,
                            r ? f.a.mine : f.a.notMine
                          ),
                          key: e.ts
                        },
                        r
                          ? s.a.createElement('img', {
                              src: this.props.userImage,
                              className: f.a.user__contact__photo,
                              alt: 'userIcon'
                            })
                          : null,
                        s.a.createElement(
                          'div',
                          {
                            className: C()(
                              f.a.chat__message,
                              r ? f.a.mine : f.a.notMine
                            )
                          },
                          s.a.createElement(
                            'strong',
                            null,
                            'Sent an Attachment: '
                          ),
                          s.a.createElement('span', null, o[o.length - 1]),
                          s.a.createElement('hr', null),
                          s.a.createElement(
                            'a',
                            { href: a[1], target: '_blank' },
                            s.a.createElement('span', null, 'Click to Download')
                          )
                        ),
                        r ? null : this.getUserImg(e)
                      );
                    }
                    return s.a.createElement(
                      'div',
                      { className: C()(f.a.chat__msgRow), key: e.ts },
                      s.a.createElement('div', {
                        className: C()(f.a.chat__message, f.a.system__message),
                        dangerouslySetInnerHTML: { __html: t }
                      })
                    );
                  }
                  if (D(t)) return null;
                  var i = y(e, this.props.botName),
                    g = (function(e) {
                      return /(:[:a-zA-Z\/_]*:)/.test(e);
                    })(t);
                  return (
                    this.messageFormatter.emoji &&
                      g &&
                      (t = Object(I.parse)(t)),
                    s.a.createElement(
                      'div',
                      {
                        className: C()(
                          f.a.chat__msgRow,
                          n ? f.a.mine : f.a.notMine
                        ),
                        key: e.ts
                      },
                      n
                        ? s.a.createElement('img', {
                            src: this.props.userImage,
                            className: f.a.user__contact__photo,
                            alt: 'userIcon'
                          })
                        : null,
                      g
                        ? s.a.createElement('div', {
                            className: C()(
                              f.a.chat__message,
                              i ? f.a.mentioned : ''
                            ),
                            dangerouslySetInnerHTML: { __html: t }
                          })
                        : s.a.createElement(
                            'div',
                            {
                              className: C()(
                                f.a.chat__message,
                                i ? f.a.mentioned : ''
                              )
                            },
                            t
                          ),
                      n ? null : this.getUserImg(e)
                    )
                  );
                }
              },
              {
                key: 'isValidOnlineUser',
                value: function(e) {
                  return !e.is_bot;
                }
              },
              {
                key: 'connectBot',
                value: function() {
                  var e = this;
                  return new Promise(function(t, n) {
                    try {
                      e.bot.started(function(n) {
                        F(n);
                        var a = [];
                        n.users.map(function(t) {
                          return e.isValidOnlineUser(t)
                            ? a.push(new d(t))
                            : null;
                        });
                        var r = [];
                        return (
                          n.channels.map(function(t) {
                            e.props.channels.forEach(function(n) {
                              (n.name !== t.name && n.id !== t.id) ||
                                (e.props.defaultChannel === t.name &&
                                  (e.activeChannel = n),
                                (t.icon = n.icon),
                                r.push(t));
                            });
                          }),
                          t({ channels: r, onlineUsers: a })
                        );
                      }),
                        e.bot.listen({ token: e.apiToken }, function(t) {
                          t &&
                            (F(S(), JSON.stringify(t)),
                            e.setState({
                              helpText: 'Slack Connection Error!'
                            }));
                        });
                    } catch (e) {
                      return n(e);
                    }
                  });
                }
              },
              {
                key: 'postMyMessage',
                value: function() {
                  var e = this;
                  return v({
                    text: this.state.postMyMessage,
                    lastThreadTs: this.state.userThreadTss[
                      this.state.userThreadTss.length - 1
                    ],
                    apiToken: this.apiToken,
                    channel: this.activeChannel.id,
                    username: this.props.botName
                  })
                    .then(function(t) {
                      return (
                        e.setState(
                          { postMyMessage: '', sendingLoader: !1 },
                          function() {
                            setTimeout(function() {
                              var e = document.getElementById(
                                'widget-reactSlakChatMessages'
                              );
                              e.scrollTop = e.scrollHeight;
                            }, e.refreshTime);
                          }
                        ),
                        e.loadMessages(e.state.currentChannel),
                        e.forceUpdate()
                      );
                    })
                    .catch(function(e) {
                      return e ? F('failed to post. Err:', e) : null;
                    });
                }
              },
              {
                key: 'loadMessages',
                value: function(e) {
                  var t = this;
                  console.log('CHANNEL', e),
                    console.log('token', this.apiToken),
                    console.log('channel.id', e.id),
                    console.log(l.channels),
                    console.log(l.conversations);
                  var n = this;
                  this.chatInitiatedTs ||
                    (this.chatInitiatedTs = Date.now() / 1e3);
                  var a = function() {
                    var a = n.state.messages.length;
                    l.channels.history(
                      { token: t.apiToken, channel: e.id },
                      function(r, o) {
                        if (r)
                          return (
                            F(
                              'There was an error loading messages for '
                                .concat(e.name, '. ')
                                .concat(r)
                            ),
                            t.setState({ failed: !0 })
                          );
                        if (
                          (F('got data', o),
                          !z(t.state.messages, o.messages.reverse()))
                        ) {
                          if (0 !== t.state.messages.length) {
                            var i =
                              ((s = t.state.messages),
                              (g = o.messages),
                              (A = t.props.botName),
                              (u = JSON.stringify(s)),
                              g.filter(function(e) {
                                if (
                                  -1 === u.indexOf(JSON.stringify(e)) &&
                                  e.username !== A
                                )
                                  return e;
                              }));
                            t.gotNewMessages(i),
                              i &&
                                i.map(function(e) {
                                  return G({
                                    message: e,
                                    username: t.props.botName,
                                    customHooks: t.props.hooks,
                                    apiToken: t.apiToken,
                                    channel: t.activeChannel.id
                                  });
                                });
                          }
                          return (
                            (n.messages = o.messages),
                            t.props.singleUserMode &&
                              (n.messages.length > 0
                                ? (n.messages = n.messages.filter(function(e) {
                                    return e.username === n.props.botName
                                      ? (e.thread_ts &&
                                          -1 ===
                                            t.state.userThreadTss.indexOf(
                                              e.thread_ts
                                            ) &&
                                          t.state.userThreadTss.push(
                                            e.thread_ts
                                          ),
                                        !0)
                                      : -1 !==
                                          t.state.userThreadTss.indexOf(
                                            e.thread_ts
                                          );
                                  }))
                                : (n.messages = [])),
                            t.props.defaultMessage &&
                              n.messages.unshift({
                                text: t.props.defaultMessage,
                                ts: t.chatInitiatedTs
                              }),
                            t.setState({ messages: n.messages }, function() {
                              var e = document.getElementById(
                                'widget-reactSlakChatMessages'
                              );
                              console.log('refreshing'),
                                (e.scrollTop =
                                  e.scrollHeight < e.scrollTop + 600 || 0 === a
                                    ? e.scrollHeight
                                    : e.scrollTop);
                            })
                          );
                        }
                        var s, g, A, u;
                      }
                    );
                  };
                  a(),
                    (this.activeChannelInterval = setInterval(
                      a,
                      this.refreshTime
                    ));
                }
              },
              {
                key: 'getUserImg',
                value: function(e) {
                  var t,
                    n = e.user || e.username;
                  return (
                    this.state.onlineUsers.map(function(e) {
                      e.id === n && (t = e.image);
                    }),
                    t
                      ? s.a.createElement('img', {
                          src: t,
                          className: f.a.chat__contact__photo,
                          alt: 'mentionedUserImg'
                        })
                      : b(e)
                      ? s.a.createElement('img', {
                          src: 'https://robohash.org/'.concat(n, '?set=set2'),
                          className: f.a.chat__contact__photo,
                          alt: n
                        })
                      : k(e)
                      ? s.a.createElement('img', {
                          src: 'https://robohash.org/'.concat(n, '?set=set3'),
                          className: f.a.chat__contact__photo,
                          alt: n
                        })
                      : s.a.createElement('img', {
                          src: 'https://robohash.org/'.concat(n),
                          className: f.a.chat__contact__photo,
                          alt: n
                        })
                  );
                }
              },
              {
                key: 'handleChange',
                value: function(e) {
                  this.setState({ postMyMessage: e.target.value });
                }
              },
              {
                key: 'handleFileChange',
                value: function(e) {
                  var t = this;
                  F('Going to upload', e.target.value, e.target);
                  var n = document.getElementById('chat__upload').files[0];
                  return this.setState(
                    { postMyFile: e.target.value, fileUploadLoader: !0 },
                    function() {
                      return ((e = {
                        file: n,
                        title: t.fileUploadTitle,
                        apiToken: t.apiToken,
                        channel: t.activeChannel.id
                      }),
                      (a = e.file),
                      (r = e.title),
                      (o = e.apiToken),
                      (i = e.channel),
                      new Promise(function(e, t) {
                        m('UPLOADING', a);
                        var n = {
                            token: o,
                            title: r,
                            filename: a.name,
                            filetype: 'auto',
                            channels: i
                          },
                          s = new FormData();
                        s.append('token', n.token),
                          s.append('filename', n.filename),
                          s.append('title', n.title),
                          s.append('filetype', n.filetype),
                          s.append('channels', n.channels),
                          s.append('file', new Blob([a]));
                        var g = new XMLHttpRequest();
                        g.open('POST', 'https://slack.com/api/files.upload'),
                          g.send(s),
                          (g.onload = function() {
                            if (200 !== g.status) {
                              var n = new Error(
                                'There was an error uploading the file. Response:',
                                g.status,
                                g.responseText
                              );
                              return t(n);
                            }
                            return e();
                          });
                      }))
                        .then(function() {
                          return t.setState({
                            postMyFile: '',
                            fileUploadLoader: !1
                          });
                        })
                        .catch(function(e) {
                          F('Could not post file', e);
                        });
                      var e, a, r, o, i;
                    }
                  );
                }
              },
              {
                key: 'goToChannelView',
                value: function(e) {
                  return (
                    e.stopPropagation(),
                    this.state.chatbox.active &&
                      (this.setState({
                        chatbox: {
                          active: !0,
                          channelActiveView: !0,
                          chatActiveView: !1
                        },
                        messages: []
                      }),
                      (this.activeChannel = []),
                      this.activeChannelInterval &&
                        (clearInterval(this.activeChannelInterval),
                        (this.activeChannelInterval = null))),
                    !1
                  );
                }
              },
              {
                key: 'saveChannelToState',
                value: function(e) {
                  this.setState({ currentChannel: e });
                }
              },
              {
                key: 'goToChatView',
                value: function(e, t) {
                  var n = this;
                  return (
                    e.stopPropagation(),
                    this.state.chatbox.active &&
                      ((this.activeChannel = t),
                      this.setState(
                        {
                          chatbox: {
                            active: !0,
                            channelActiveView: !1,
                            chatActiveView: !0
                          }
                        },
                        function() {
                          n.activeChannelInterval &&
                            clearInterval(n.activeChannelInterval),
                            document
                              .getElementById('chat__input__text')
                              .focus(),
                            n.loadMessages(t),
                            n.saveChannelToState(t);
                        }
                      )),
                    !1
                  );
                }
              },
              {
                key: 'openChatBox',
                value: function(e) {
                  var t = this;
                  return (
                    e.stopPropagation(),
                    e.persist(),
                    this.state.chatbox.active ||
                      this.setState(
                        {
                          chatbox: {
                            active: !0,
                            channelActiveView: !0,
                            chatActiveView: !1
                          },
                          newMessageNotification: 0
                        },
                        function() {
                          Object.keys(t.activeChannel).length > 0 &&
                            t.goToChatView(e, t.activeChannel);
                        }
                      ),
                    !1
                  );
                }
              },
              {
                key: 'closeChatBox',
                value: function(e) {
                  return (
                    e.stopPropagation(),
                    this.state.chatbox.active &&
                      this.setState({
                        chatbox: {
                          active: !1,
                          channelActiveView: !1,
                          chatActiveView: !1
                        }
                      }),
                    !1
                  );
                }
              },
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this;
                  this.props.themeColor &&
                    L(
                      document.body,
                      this.themeDefaultColor,
                      this.props.themeColor
                    ),
                    addEventListener('click', function(t) {
                      return e.state.chatbox.active ? e.closeChatBox(t) : null;
                    });
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this;
                  if (this.state.failed) return !1;
                  var t = s.a.createElement(
                    'div',
                    null,
                    s.a.createElement(
                      'div',
                      {
                        className: C()(
                          f.a.card,
                          f.a.transition,
                          this.state.chatbox.active ? f.a.active : '',
                          this.state.chatbox.chatActiveView
                            ? f.a.chatActive
                            : ''
                        ),
                        onClick: this.openChatBox
                      },
                      s.a.createElement(
                        'div',
                        { className: f.a.helpHeader },
                        this.state.newMessageNotification > 0 &&
                          s.a.createElement(
                            'span',
                            { className: f.a.unreadNotificationsBadge },
                            this.state.newMessageNotification
                          ),
                        s.a.createElement(
                          'h2',
                          { className: f.a.transition },
                          this.state.helpText || 'Help?'
                        ),
                        s.a.createElement(
                          'h2',
                          { className: f.a.subText },
                          'Click on a chat group to interact'
                        )
                      ),
                      s.a.createElement('div', {
                        className: C()(f.a.card_circle, f.a.transition)
                      }),
                      s.a.createElement(
                        'div',
                        {
                          className: C()(
                            f.a.channels,
                            f.a.transition,
                            this.state.chatbox.channelActiveView
                              ? f.a.channelActive
                              : ''
                          )
                        },
                        this.state.channels.map(function(t) {
                          return s.a.createElement(
                            'div',
                            {
                              className: f.a.contact,
                              key: t.id,
                              onClick: function(n) {
                                return e.goToChatView(n, t);
                              }
                            },
                            t.icon
                              ? s.a.createElement('img', {
                                  src: t.icon,
                                  className: f.a.contact__photo
                                })
                              : s.a.createElement('div', {
                                  dangerouslySetInnerHTML: { __html: h.a },
                                  className: f.a.contact__photo
                                }),
                            s.a.createElement(
                              'span',
                              { className: f.a.contact__name },
                              t.name
                            ),
                            s.a.createElement('span', {
                              className: C()(f.a.contact__status, f.a.online)
                            })
                          );
                        })
                      ),
                      s.a.createElement(
                        'div',
                        { className: C()(f.a.chat) },
                        s.a.createElement(
                          'div',
                          { className: C()(f.a.chatHeader) },
                          s.a.createElement('span', {
                            className: f.a.chat__back,
                            onClick: this.goToChannelView
                          }),
                          s.a.createElement(
                            'div',
                            { className: f.a.chat__person },
                            s.a.createElement(
                              'span',
                              { className: f.a.chat__status },
                              'status'
                            ),
                            s.a.createElement('span', {
                              className: C()(f.a.chat__online, f.a.active)
                            }),
                            s.a.createElement(
                              'span',
                              { className: f.a.chat__name },
                              this.activeChannel.name
                            )
                          ),
                          this.activeChannel.icon
                            ? s.a.createElement('img', {
                                src: this.activeChannel.icon,
                                className: f.a.channel__header__photo
                              })
                            : s.a.createElement('div', {
                                dangerouslySetInnerHTML: { __html: h.a },
                                className: f.a.channel__header__photo
                              }),
                          this.props.closeChatButton
                            ? s.a.createElement(
                                'button',
                                {
                                  className: f.a.channel__close__button,
                                  onClick: this.closeChatBox
                                },
                                '×'
                              )
                            : null
                        ),
                        s.a.createElement(
                          'div',
                          {
                            className: f.a.chat__messages,
                            id: 'widget-reactSlakChatMessages'
                          },
                          this.state.messages.map(function(t) {
                            return e.displayFormattedMessage(t);
                          })
                        ),
                        s.a.createElement(
                          'div',
                          null,
                          this.state.fileUploadLoader
                            ? s.a.createElement(
                                'div',
                                { className: f.a.chat__file__uploading },
                                s.a.createElement(
                                  'span',
                                  { className: f.a.loading },
                                  'Uploading'
                                )
                              )
                            : null,
                          this.state.fileUploadLoader
                            ? null
                            : s.a.createElement(
                                'div',
                                null,
                                s.a.createElement(
                                  'div',
                                  { className: f.a.attachment },
                                  s.a.createElement(
                                    'label',
                                    {
                                      htmlFor: 'chat__upload',
                                      className: f.a.attachmentIcon
                                    },
                                    s.a.createElement('input', {
                                      type: 'file',
                                      id: 'chat__upload',
                                      className: f.a.chat__upload,
                                      value: this.state.postMyFile,
                                      onChange: function(t) {
                                        return e.handleFileChange(t);
                                      }
                                    })
                                  )
                                ),
                                s.a.createElement('input', {
                                  type: 'text',
                                  id: 'chat__input__text',
                                  className: f.a.chat__input,
                                  value: this.state.postMyMessage,
                                  placeholder: 'Enter your message...',
                                  onKeyPress: function(t) {
                                    return 'Enter' === t.key
                                      ? e.postMyMessage()
                                      : null;
                                  },
                                  onChange: function(t) {
                                    return e.handleChange(t);
                                  }
                                })
                              )
                        )
                      )
                    )
                  );
                  return s.a.createElement('div', null, t);
                }
              }
            ]) && T(n.prototype, a),
            r && T(n, r),
            t
          );
        })();
      Z.propTypes = {
        apiToken: A.a.string.isRequired,
        channels: A.a.array.isRequired,
        botName: A.a.string,
        helpText: A.a.string,
        defaultChannel: A.a.string,
        defaultMessage: A.a.string,
        singleUserMode: A.a.bool,
        closeChatButton: A.a.bool,
        themeColor: A.a.string,
        userImage: A.a.string,
        hooks: A.a.array,
        debugMode: A.a.bool
      };
      var B = Z;
      n.d(t, 'ReactSlackChat', function() {
        return B;
      });
    }
  ]);
});

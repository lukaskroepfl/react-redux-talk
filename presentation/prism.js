/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript+c+csharp+cpp+diff+json+markdown+python+jsx */
var _self =
    'undefined' != typeof window
      ? window
      : 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope
        ? self
        : {},
  Prism = (function() {
    var e = /\blang(?:uage)?-(\w+)\b/i,
      t = 0,
      n = (_self.Prism = {
        util: {
          encode: function(e) {
            return e instanceof a
              ? new a(e.type, n.util.encode(e.content), e.alias)
              : 'Array' === n.util.type(e)
                ? e.map(n.util.encode)
                : e
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/\u00a0/g, ' ');
          },
          type: function(e) {
            return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
          },
          objId: function(e) {
            return e.__id || Object.defineProperty(e, '__id', {value: ++t}), e.__id;
          },
          clone: function(e) {
            var t = n.util.type(e);
            switch (t) {
              case 'Object':
                var a = {};
                for (var r in e) e.hasOwnProperty(r) && (a[r] = n.util.clone(e[r]));
                return a;
              case 'Array':
                return (
                  e.map &&
                  e.map(function(e) {
                    return n.util.clone(e);
                  })
                );
            }
            return e;
          }
        },
        languages: {
          extend: function(e, t) {
            var a = n.util.clone(n.languages[e]);
            for (var r in t) a[r] = t[r];
            return a;
          },
          insertBefore: function(e, t, a, r) {
            r = r || n.languages;
            var i = r[e];
            if (2 == arguments.length) {
              a = arguments[1];
              for (var l in a) a.hasOwnProperty(l) && (i[l] = a[l]);
              return i;
            }
            var o = {};
            for (var s in i)
              if (i.hasOwnProperty(s)) {
                if (s == t) for (var l in a) a.hasOwnProperty(l) && (o[l] = a[l]);
                o[s] = i[s];
              }
            return (
              n.languages.DFS(n.languages, function(t, n) {
                n === r[e] && t != e && (this[t] = o);
              }),
              (r[e] = o)
            );
          },
          DFS: function(e, t, a, r) {
            r = r || {};
            for (var i in e)
              e.hasOwnProperty(i) &&
                (t.call(e, i, e[i], a || i),
                'Object' !== n.util.type(e[i]) || r[n.util.objId(e[i])]
                  ? 'Array' !== n.util.type(e[i]) ||
                    r[n.util.objId(e[i])] ||
                    ((r[n.util.objId(e[i])] = !0), n.languages.DFS(e[i], t, i, r))
                  : ((r[n.util.objId(e[i])] = !0), n.languages.DFS(e[i], t, null, r)));
          }
        },
        plugins: {},
        highlightAll: function(e, t) {
          var a = {
            callback: t,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          n.hooks.run('before-highlightall', a);
          for (var r, i = a.elements || document.querySelectorAll(a.selector), l = 0; (r = i[l++]); )
            n.highlightElement(r, e === !0, a.callback);
        },
        highlightElement: function(t, a, r) {
          for (var i, l, o = t; o && !e.test(o.className); ) o = o.parentNode;
          o && ((i = (o.className.match(e) || [, ''])[1].toLowerCase()), (l = n.languages[i])),
            (t.className = t.className.replace(e, '').replace(/\s+/g, ' ') + ' language-' + i),
            (o = t.parentNode),
            /pre/i.test(o.nodeName) &&
              (o.className = o.className.replace(e, '').replace(/\s+/g, ' ') + ' language-' + i);
          var s = t.textContent,
            u = {element: t, language: i, grammar: l, code: s};
          if ((n.hooks.run('before-sanity-check', u), !u.code || !u.grammar)) return n.hooks.run('complete', u), void 0;
          if ((n.hooks.run('before-highlight', u), a && _self.Worker)) {
            var g = new Worker(n.filename);
            (g.onmessage = function(e) {
              (u.highlightedCode = e.data),
                n.hooks.run('before-insert', u),
                (u.element.innerHTML = u.highlightedCode),
                r && r.call(u.element),
                n.hooks.run('after-highlight', u),
                n.hooks.run('complete', u);
            }),
              g.postMessage(JSON.stringify({language: u.language, code: u.code, immediateClose: !0}));
          } else
            (u.highlightedCode = n.highlight(u.code, u.grammar, u.language)),
              n.hooks.run('before-insert', u),
              (u.element.innerHTML = u.highlightedCode),
              r && r.call(t),
              n.hooks.run('after-highlight', u),
              n.hooks.run('complete', u);
        },
        highlight: function(e, t, r) {
          var i = n.tokenize(e, t);
          return a.stringify(n.util.encode(i), r);
        },
        tokenize: function(e, t) {
          var a = n.Token,
            r = [e],
            i = t.rest;
          if (i) {
            for (var l in i) t[l] = i[l];
            delete t.rest;
          }
          e: for (var l in t)
            if (t.hasOwnProperty(l) && t[l]) {
              var o = t[l];
              o = 'Array' === n.util.type(o) ? o : [o];
              for (var s = 0; s < o.length; ++s) {
                var u = o[s],
                  g = u.inside,
                  c = !!u.lookbehind,
                  h = !!u.greedy,
                  f = 0,
                  d = u.alias;
                if (h && !u.pattern.global) {
                  var p = u.pattern.toString().match(/[imuy]*$/)[0];
                  u.pattern = RegExp(u.pattern.source, p + 'g');
                }
                u = u.pattern || u;
                for (var m = 0, y = 0; m < r.length; y += r[m].length, ++m) {
                  var v = r[m];
                  if (r.length > e.length) break e;
                  if (!(v instanceof a)) {
                    u.lastIndex = 0;
                    var b = u.exec(v),
                      k = 1;
                    if (!b && h && m != r.length - 1) {
                      if (((u.lastIndex = y), (b = u.exec(e)), !b)) break;
                      for (
                        var w = b.index + (c ? b[1].length : 0), _ = b.index + b[0].length, A = m, P = y, j = r.length;
                        j > A && _ > P;
                        ++A
                      )
                        (P += r[A].length), w >= P && (++m, (y = P));
                      if (r[m] instanceof a || r[A - 1].greedy) continue;
                      (k = A - m), (v = e.slice(y, P)), (b.index -= y);
                    }
                    if (b) {
                      c && (f = b[1].length);
                      var w = b.index + f,
                        b = b[0].slice(f),
                        _ = w + b.length,
                        O = v.slice(0, w),
                        x = v.slice(_),
                        S = [m, k];
                      O && S.push(O);
                      var N = new a(l, g ? n.tokenize(b, g) : b, d, b, h);
                      S.push(N), x && S.push(x), Array.prototype.splice.apply(r, S);
                    }
                  }
                }
              }
            }
          return r;
        },
        hooks: {
          all: {},
          add: function(e, t) {
            var a = n.hooks.all;
            (a[e] = a[e] || []), a[e].push(t);
          },
          run: function(e, t) {
            var a = n.hooks.all[e];
            if (a && a.length) for (var r, i = 0; (r = a[i++]); ) r(t);
          }
        }
      }),
      a = (n.Token = function(e, t, n, a, r) {
        (this.type = e),
          (this.content = t),
          (this.alias = n),
          (this.length = 0 | (a || '').length),
          (this.greedy = !!r);
      });
    if (
      ((a.stringify = function(e, t, r) {
        if ('string' == typeof e) return e;
        if ('Array' === n.util.type(e))
          return e
            .map(function(n) {
              return a.stringify(n, t, e);
            })
            .join('');
        var i = {
          type: e.type,
          content: a.stringify(e.content, t, r),
          tag: 'span',
          classes: ['token', e.type],
          attributes: {},
          language: t,
          parent: r
        };
        if (('comment' == i.type && (i.attributes.spellcheck = 'true'), e.alias)) {
          var l = 'Array' === n.util.type(e.alias) ? e.alias : [e.alias];
          Array.prototype.push.apply(i.classes, l);
        }
        n.hooks.run('wrap', i);
        var o = Object.keys(i.attributes)
          .map(function(e) {
            return e + '="' + (i.attributes[e] || '').replace(/"/g, '&quot;') + '"';
          })
          .join(' ');
        return (
          '<' +
          i.tag +
          ' class="' +
          i.classes.join(' ') +
          '"' +
          (o ? ' ' + o : '') +
          '>' +
          i.content +
          '</' +
          i.tag +
          '>'
        );
      }),
      !_self.document)
    )
      return _self.addEventListener
        ? (_self.addEventListener(
            'message',
            function(e) {
              var t = JSON.parse(e.data),
                a = t.language,
                r = t.code,
                i = t.immediateClose;
              _self.postMessage(n.highlight(r, n.languages[a], a)), i && _self.close();
            },
            !1
          ),
          _self.Prism)
        : _self.Prism;
    var r = document.currentScript || [].slice.call(document.getElementsByTagName('script')).pop();
    return (
      r &&
        ((n.filename = r.src),
        document.addEventListener &&
          !r.hasAttribute('data-manual') &&
          ('loading' !== document.readyState
            ? window.requestAnimationFrame
              ? window.requestAnimationFrame(n.highlightAll)
              : window.setTimeout(n.highlightAll, 16)
            : document.addEventListener('DOMContentLoaded', n.highlightAll))),
      _self.Prism
    );
  })();
'undefined' != typeof module && module.exports && (module.exports = Prism),
  'undefined' != typeof global && (global.Prism = Prism);
(Prism.languages.markup = {
  comment: /<!--[\w\W]*?-->/,
  prolog: /<\?[\w\W]+?\?>/,
  doctype: /<!DOCTYPE[\w\W]+?>/i,
  cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
    inside: {
      tag: {pattern: /^<\/?[^\s>\/]+/i, inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}},
      'attr-value': {pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i, inside: {punctuation: /[=>"']/}},
      punctuation: /\/?>/,
      'attr-name': {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}
    }
  },
  entity: /&#?[\da-z]{1,8};/i
}),
  Prism.hooks.add('wrap', function(a) {
    'entity' === a.type && (a.attributes.title = a.content.replace(/&amp;/, '&'));
  }),
  (Prism.languages.xml = Prism.languages.markup),
  (Prism.languages.html = Prism.languages.markup),
  (Prism.languages.mathml = Prism.languages.markup),
  (Prism.languages.svg = Prism.languages.markup);
(Prism.languages.css = {
  comment: /\/\*[\w\W]*?\*\//,
  atrule: {pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i, inside: {rule: /@[\w-]+/}},
  url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
  selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
  string: {pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
  property: /(\b|\B)[\w-]+(?=\s*:)/i,
  important: /\B!important\b/i,
  function: /[-a-z0-9]+(?=\()/i,
  punctuation: /[(){};:]/
}),
  (Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css)),
  Prism.languages.markup &&
    (Prism.languages.insertBefore('markup', 'tag', {
      style: {
        pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: Prism.languages.css,
        alias: 'language-css'
      }
    }),
    Prism.languages.insertBefore(
      'inside',
      'attr-value',
      {
        'style-attr': {
          pattern: /\s*style=("|').*?\1/i,
          inside: {
            'attr-name': {pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside},
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            'attr-value': {pattern: /.+/i, inside: Prism.languages.css}
          },
          alias: 'language-css'
        }
      },
      Prism.languages.markup.tag
    ));
Prism.languages.clike = {
  comment: [{pattern: /(^|[^\\])\/\*[\w\W]*?\*\//, lookbehind: !0}, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0}],
  string: {pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
  'class-name': {
    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
    lookbehind: !0,
    inside: {punctuation: /(\.|\\)/}
  },
  keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(true|false)\b/,
  function: /[a-z0-9_]+(?=\()/i,
  number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/
};
(Prism.languages.javascript = Prism.languages.extend('clike', {
  keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
  number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
  function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
})),
  Prism.languages.insertBefore('javascript', 'keyword', {
    regex: {
      pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
      lookbehind: !0,
      greedy: !0
    }
  }),
  Prism.languages.insertBefore('javascript', 'string', {
    'template-string': {
      pattern: /`(?:\\\\|\\?[^\\])*?`/,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /\$\{[^}]+\}/,
          inside: {
            'interpolation-punctuation': {pattern: /^\$\{|\}$/, alias: 'punctuation'},
            rest: Prism.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    }
  }),
  Prism.languages.markup &&
    Prism.languages.insertBefore('markup', 'tag', {
      script: {
        pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
        alias: 'language-javascript'
      }
    }),
  (Prism.languages.js = Prism.languages.javascript);
(Prism.languages.c = Prism.languages.extend('clike', {
  keyword: /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
  operator: /\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,
  number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i
})),
  Prism.languages.insertBefore('c', 'string', {
    macro: {
      pattern: /(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,
      lookbehind: !0,
      alias: 'property',
      inside: {
        string: {pattern: /(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/, lookbehind: !0},
        directive: {
          pattern: /(#\s*)\b(define|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
          lookbehind: !0,
          alias: 'keyword'
        }
      }
    },
    constant: /\b(__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|stdin|stdout|stderr)\b/
  }),
  delete Prism.languages.c['class-name'],
  delete Prism.languages.c['boolean'];
(Prism.languages.csharp = Prism.languages.extend('clike', {
  keyword: /\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,
  string: [/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/, /("|')(\\?.)*?\1/],
  number: /\b-?(0x[\da-f]+|\d*\.?\d+f?)\b/i
})),
  Prism.languages.insertBefore('csharp', 'keyword', {
    'generic-method': {
      pattern: /[a-z0-9_]+\s*<[^>\r\n]+?>\s*(?=\()/i,
      alias: 'function',
      inside: {keyword: Prism.languages.csharp.keyword, punctuation: /[<>(),.:]/}
    },
    preprocessor: {
      pattern: /(^\s*)#.*/m,
      lookbehind: !0,
      alias: 'property',
      inside: {
        directive: {
          pattern: /(\s*#)\b(define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
          lookbehind: !0,
          alias: 'keyword'
        }
      }
    }
  });
(Prism.languages.cpp = Prism.languages.extend('c', {
  keyword: /\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
  boolean: /\b(true|false)\b/,
  operator: /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/
})),
  Prism.languages.insertBefore('cpp', 'keyword', {'class-name': {pattern: /(class\s+)[a-z0-9_]+/i, lookbehind: !0}});
Prism.languages.diff = {
  coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m],
  deleted: /^[-<].*$/m,
  inserted: /^[+>].*$/m,
  diff: {pattern: /^!(?!!).+$/m, alias: 'important'}
};
(Prism.languages.json = {
  property: /"(?:\\.|[^|"])*"(?=\s*:)/gi,
  string: /"(?!:)(?:\\.|[^|"])*"(?!:)/g,
  number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,
  punctuation: /[{}[\]);,]/g,
  operator: /:/g,
  boolean: /\b(true|false)\b/gi,
  null: /\bnull\b/gi
}),
  (Prism.languages.jsonp = Prism.languages.json);
(Prism.languages.markdown = Prism.languages.extend('markup', {})),
  Prism.languages.insertBefore('markdown', 'prolog', {
    blockquote: {pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation'},
    code: [{pattern: /^(?: {4}|\t).+/m, alias: 'keyword'}, {pattern: /``.+?``|`[^`\n]+`/, alias: 'keyword'}],
    title: [
      {pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/, alias: 'important', inside: {punctuation: /==+$|--+$/}},
      {pattern: /(^\s*)#+.+/m, lookbehind: !0, alias: 'important', inside: {punctuation: /^#+|#+$/}}
    ],
    hr: {pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: 'punctuation'},
    list: {pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: 'punctuation'},
    'url-reference': {
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        variable: {pattern: /^(!?\[)[^\]]+/, lookbehind: !0},
        string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        punctuation: /^[\[\]!:]|[<>]/
      },
      alias: 'url'
    },
    bold: {
      pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
      lookbehind: !0,
      inside: {punctuation: /^\*\*|^__|\*\*$|__$/}
    },
    italic: {
      pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
      lookbehind: !0,
      inside: {punctuation: /^[*_]|[*_]$/}
    },
    url: {
      pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
      inside: {
        variable: {pattern: /(!?\[)[^\]]+(?=\]$)/, lookbehind: !0},
        string: {pattern: /"(?:\\.|[^"\\])*"(?=\)$)/}
      }
    }
  }),
  (Prism.languages.markdown.bold.inside.url = Prism.util.clone(Prism.languages.markdown.url)),
  (Prism.languages.markdown.italic.inside.url = Prism.util.clone(Prism.languages.markdown.url)),
  (Prism.languages.markdown.bold.inside.italic = Prism.util.clone(Prism.languages.markdown.italic)),
  (Prism.languages.markdown.italic.inside.bold = Prism.util.clone(Prism.languages.markdown.bold));
Prism.languages.python = {
  'triple-quoted-string': {pattern: /"""[\s\S]+?"""|'''[\s\S]+?'''/, alias: 'string'},
  comment: {pattern: /(^|[^\\])#.*/, lookbehind: !0},
  string: {pattern: /("|')(?:\\\\|\\?[^\\\r\n])*?\1/, greedy: !0},
  function: {pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g, lookbehind: !0},
  'class-name': {pattern: /(\bclass\s+)[a-z0-9_]+/i, lookbehind: !0},
  keyword: /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,
  boolean: /\b(?:True|False)\b/,
  number: /\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
  operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
  punctuation: /[{}[\];(),.:]/
};
!(function(a) {
  var e = a.util.clone(a.languages.javascript);
  (a.languages.jsx = a.languages.extend('markup', e)),
    (a.languages.jsx.tag.pattern = /<\/?[\w\.:-]+\s*(?:\s+[\w\.:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i),
    (a.languages.jsx.tag.inside['attr-value'].pattern = /=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i);
  var s = a.util.clone(a.languages.jsx);
  delete s.punctuation,
    (s = a.languages.insertBefore('jsx', 'operator', {punctuation: /=(?={)|[{}[\];(),.:]/}, {jsx: s})),
    a.languages.insertBefore(
      'inside',
      'attr-value',
      {script: {pattern: /=(\{(?:\{[^}]*\}|[^}])+\})/i, inside: s, alias: 'language-javascript'}},
      a.languages.jsx.tag
    );
})(Prism);

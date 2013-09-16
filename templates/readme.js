module.exports = function anonymous(obj) {

  function escape(html) {
    return String(html)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  };

  function section(obj, prop, negate, str) {
    var val = obj[prop];
    if ('function' == typeof val) return val.call(obj, str);
    if (negate) val = !val;
    if (val) return str;
    return '';
  };

  return "\n# " + escape(obj.name) + "\n\n  " + escape(obj.desc) + "\n\n## Installation\n\n  Install with [spin(1)](http://github.com/spinly/spin):\n\n    $ spin install " + escape(obj.repo) + "\n\n"
}

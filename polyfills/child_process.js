function spawn(exe, args, options) {
  return {
    stdout: {
      on: function(e, cb) {},
      setEncoding: function(e) {},
    },
    stderr: {
      on: function(e, cb) {},
      setEncoding: function(e) {},
    },
    on: function(e, cb) {}
  }
}


var browser$1 = {
  spawn: spawn,
};

export default browser$1;
export { spawn };

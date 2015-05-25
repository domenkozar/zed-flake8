/* global _ */
var fs = require("zed/fs");

module.exports = function(info) {
    var code = info.inputs.text;

    return fs.run(["flake8", "-"], code).then(function(results) {
        var lines = results.split("\n"),
            annos = [];
        _.each(lines, function(line) {
            if (!line) {
                return;
            }
            var m = line.split(':', 4);

            if (m.length === 4) {
                annos.push({
                    row: m[1],
                    text: '[Flake8] ' + m[3].trim(),
                    type: 'warning'
                });
            } else {
                console.error("Invalid output from Flake8:", line);
            }
        });
        return annos;
    });
};

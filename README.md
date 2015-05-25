Flake8 support for Python files in Zed, only works in the standalone version or in Zedd projects.

Based on https://github.com/zefhemel/zed-pep8.

## Install

`zed-flake8` addon calls an external script, make sure you're using standalone Zed or [zedd](http://zedapp.org/zedd/).

1. In Zed editor open command completion (CTRL-.)
2. Search for `Tools:Zpm:Install` command
3. Enter `gh:domenkozar/zed-flake8`
4. (optional) In case your python files don't show flake8 warnings, restart Zed
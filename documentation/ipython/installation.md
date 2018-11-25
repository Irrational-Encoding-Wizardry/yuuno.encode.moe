---
prev: false
next: ./getting-started
---
# Installation

Yuuno can be installated in multiple ways. Choose the one that suits you best.

As a normal user, you most likely want to use
the installation via PIP.

## Installation using PIP (easier)

Installing Yuuno from PIP is the preferred way to install Yuuno for normal users.
It is easy to use and does not require any special tools except a running Python 3.6+ installation
on your system.

<multi-column>
<div>
On Linux and Mac

<render-markdown>
``` bash 
pip install yuuno
yuuno jupyter install
```
</render-markdown>
</div>
<div>
On Windows

<render-markdown>
``` bat
py -3 -m pip install yuuno
py -3 -m yuuno.console_scripts jupyter install
```
</render-markdown>
</div>
</multi-column>


## Installation from Source (for developers)

If you want to contribute to yuuno, this is the preferred way of installation.
You are cloning the repository and manually compile the JavaScript that is part of this package.

You need to have `npm` installed on your system. If the installer can find `yarn`
it will use `yarn` instead.

``` bash
git clone https://github.com/irrational-encoding-wizardry/yuuno
cd yuuno
pip install .
yuuno jupyter install
```

### Developing

When changing the JavaScript, you can use the commands

``` bash
python setup.py build_npm
yuuno jupyter install
```

to update the compiled javascript files inside Jupyter Notebook.
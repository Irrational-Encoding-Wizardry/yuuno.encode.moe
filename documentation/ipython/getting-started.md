---
prev: ./installation
next: ./reference
---

# Getting started

## What is Yuuno?

Yuuno is an extension for [IPython](https://ipython.org) and provides formatting and automatic namespace inclusions for the IPython Shell as well as the [Jupyter IPython Kernel](https://jupyter.org) so that video-clips provided by frame-servers such as [VapourSynth](https://www.vapoursynth.com) can be introspected inside the shell.

## So, how do I start Jupyter?

Run the correct command for your operating system and/or environment.

---

<multi-column>
<div>
On Linux and Mac

<render-markdown>
``` bash 
jupyter notebook
```
</render-markdown>
</div>
<div>
On Windows

<render-markdown>
``` bat
py -3 -m notebook
```
</render-markdown>
</div>
</multi-column>

---

Your browser should open and a list of files in your current directory should be shown.  
You can choose an existing notebook-file ending with `.ipynb` or create a new one by clicking
on "New" and then selecting "Python 3"

A new tab will open and you will be able to enter new code to execute. Press `Shift+Enter` to execute code.


## How do I use Yuuno?
Before you can enjoy Yuuno, you need to explicitely enable it inside your Notebook.

<jupyter-cell cellno="1">
<render-markdown>
``` python
%load_ext yuuno
```
</render-markdown>
</jupyter-cell>

After executing this command, `vs` and `core` will automatically be imported for you. This will make it easier
for you to use Yuuno with VapourSynth.

---

Let's open a preview for a simple black clip:

<jupyter-cell cellno="2">
<render-markdown>
``` python
clip = core.std.BlankClip(length=10000)
%preview clip
```
</render-markdown>
<render-markdown slot="output">
<img :src="$withBase('../assets/preview.png')" />
</render-markdown>
</jupyter-cell>

By modifiying and adding stuff to your cell, you can create an encode script which you can then preview.

---

In the unlikely case you are ever satisfied with your result, you can then use 
`%encode` to encode your clip. You will see an output of your script here.


<jupyter-cell cellno="3">
<render-markdown>
``` python
%encode clip x264 - --demuxer y4m -o test.mkv
```
</render-markdown>
<render-markdown slot="output">
<img :src="$withBase('../assets/encode.png')" />
</render-markdown>
</jupyter-cell>
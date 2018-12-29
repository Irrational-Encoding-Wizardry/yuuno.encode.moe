---
prev: ./installation
next: ./reference
title: Getting started
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

Yuuno can be used 

---

Let's open a preview for a simple black clip:

<jupyter-cell cellno="2">
<render-markdown>
``` python
%%vspreview
clip = core.ffms2.Source("sintel-4k.mkv")
clip.set_output()
```
</render-markdown>
<render-markdown slot="output">
<img :src="$withBase('../assets/vspreview.png')" />
</render-markdown>
</jupyter-cell>

`%%vspreview` tells Yuuno that you want to preview the output of the script. Unlike vsedit however
you need to pass additional parameters to tell Yuuno to actually isolate your script from other scripts.

Use this line isolate your script from other scripts:  

<jupyter-cell cellno="3">
<render-markdown>
```python 
%%vspreview --reset-core --isolate-variables
clip = core.ffms2.Source("sintel-4k.mkv")
clip.set_output()
```
</render-markdown>
</jupyter-cell>

In some cases you will want to compare two clips, you can do that too. You will see the comparison-clip
when you mouse-over the preview-area.


<jupyter-cell cellno="4">
<render-markdown>
```python 
%%vspreview --reset-core --isolate-variables --diff
clip = core.ffms2.Source("sintel-4k.mkv")
clip.set_output()
sobel = clip.std.Sobel(scale=2, planes=0)
sobel.set_output(1)
```
</render-markdown>
<mouse-over slot="output">
    <img :src="$withBase('/assets/vspreview-diff2-main.png')" slot="primary" />
    <img :src="$withBase('/assets/vspreview-diff2-comparison.jpg')" slot="secondary" />
</mouse-over>
</jupyter-cell>

---

In the unlikely case you are ever satisfied with your result, you can then use 
`%%vspipe` to encode your clip.

Unlike the name suggsests, Yuuno does not use the underlying vspipe-binary and instead uses the [VideoNode.output](http://www.vapoursynth.com/doc/pythonreference.html?highlight=output#VideoNode.output)-method.

<jupyter-cell cellno="5">
<render-markdown>
``` python
%%vspipe --y4m | x264 - --demuxer y4m -o test.mkv
clip = core.ffms2.Source("sintel-4k.mkv")
clip.set_output()
```
</render-markdown>
<render-markdown slot="output">
<img :src="$withBase('../assets/vspipe.png')" />
</render-markdown>
</jupyter-cell>
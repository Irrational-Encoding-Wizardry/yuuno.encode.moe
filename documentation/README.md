---
home: true
actionText: Get Started →
actionLink: /ipython/installation
features:
- title: Runs in your browser
  details: Yuuno provides lossless remote script editing and previewing through your browser.
- title: Jupyter powered
  details: Yuuno provides a stable environment that does not lose your data when VapourSynth crashes.
- title: Configurable
  details: Configure everything about your experience. From YUV to RGB conversions up to compression ratios.
---
# Have an example

## Load Yuuno

<jupyter-cell cellno="1">
<render-markdown>
``` python
%load_ext yuuno
```
</render-markdown>
</jupyter-cell>

## Edit and run a script

<jupyter-cell cellno="2">
<render-markdown>
``` python
%vspreview
clip = core.ffms2.Source("sintel-4k.mkv")
clip.set_output()
```
</render-markdown>
<render-markdown slot="output">
<img :src="$withBase('./assets/vspreview.png')" />
</render-markdown>
</jupyter-cell>


## Compare two clips

<jupyter-cell cellno="3">
<render-markdown>
``` python
%vspreview --diff
clip = core.ffms2.Source("sintel-4k.mkv")
clip.set_output()
sobel = clip.resize.Spline36(format=vs.GRAY8)
sobel = sobel.std.Sobel(scale=2)
sobel = sobel.std.Binarize(64)
sobel.set_output(1)
```
</render-markdown>
<render-markdown slot="output">
<mouse-over>
    <img :src="$withBase('./assets/vspreview-diff-main.png')" slot="primary" />
    <img :src="$withBase('./assets/vspreview-diff-comparison.png')" slot="secondary" />
</mouse-over>
</render-markdown>
</jupyter-cell>

## Encode it when you're done!

<jupyter-cell cellno="4">
<render-markdown>
``` python
%%vspipe --y4m | x264.exe --demuxer y4m -o test.mkv -
clip = core.ffms2.Source("sintel-4k.mkv")
clip.set_output()
```
</render-markdown>
<render-markdown slot="output">
<img :src="$withBase('./assets/vspipe.png')" />
</render-markdown>
</jupyter-cell>
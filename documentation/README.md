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
footer: FDL Licensed | Copyright (c) 2018 StuxCrystal <stuxcrystal@encode.moe>
---
### Have an example

**Load a script!**

<jupyter-cell cellno="1">
<render-markdown>
``` python
%load_ext yuuno
clip = core.std.BlankClip(length=100000)
```
</render-markdown>
</jupyter-cell>

**Play with it's output!**

<jupyter-cell cellno="2">
<render-markdown>
``` python
%preview clip
```
</render-markdown>
<render-markdown slot="output">
<img :src="$withBase('./assets/preview.png')" />
</render-markdown>
</jupyter-cell>

**Encode it when you're done!**

<jupyter-cell cellno="3">
<render-markdown>
``` python
%encode clip --y4m x264.exe --demuxer y4m - --frames {len(clip)} --output test.mkv
```
</render-markdown>
<render-markdown slot="output">
<img :src="$withBase('./assets/encode.png')" />
</render-markdown>
</jupyter-cell>
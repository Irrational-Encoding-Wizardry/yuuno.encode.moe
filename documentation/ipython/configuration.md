---
title: Configuration
prev: ./reference
next: false
sidebarDepth: 2
---

# Configuration Locations

## Ad-Hoc configuration

Jupyter provides a `%config` magic which you can use to configure Jupyter.
Yuuno hooks into it so you can configure Yuuno using the same command.

`%config` will show you a list of config-sections.  
`%config <SECTION>` shows you a list of configuration options for that section.  
`%config <SECTION>.<CONFIG>` shows you the current value.  
`%config <SECTION>.<CONFIG>=<VALUE>` allows you to change the value.

Here is a small list of potentially useful configuration values.

## Persistent configuration

Yuuno for IPython uses the configuration system provided by IPython. This means, the full
configuration of Yuuno is exposed by the configuration system of IPython.

A more detailed explanation is given at the [IPython Configuration](https://ipython.readthedocs.io/en/stable/config/intro.html#python-config-files) documentation page.

You can use the configuration file to automatically load Yuuno at startup by adding the following at the bottom of the IPython config file:

```python
c.InteractiveShellApp.extensions.append("yuuno")
```

Additionally, all configuration for Yuuno is located inside the Yuuno-namespace. For example, you can configure Yuuno to use a Point-resizer
instead of Spline36 to convert your clips to rgb by appending this to the IPython config file.

```python
c.Yuuno.VapourSynth.resizer = "resize.Point"
```

# Configuration values

## YuunoIPythonEnvironment

This section allows you to configure how Yuuno integrates into Jupyter.

### `use_vsscript`
Default: `True`  
<Badge text="Startup Only" type="info" vertical="middle" /> <Badge text="VapourSynth >= R44" vertical="middle" />  

This setting configures if Yuuno can manage multiple cores. This allows Yuuno to behave more like VSEdit.

### `no_env_wrap`
Default: `True`  
<Badge text="Debug" type="warn" vertical="middle" /> <Badge text="Startup Only" type="info" vertical="middle" /> <Badge text="VapourSynth >= R44" vertical="middle" />  
This setting configures whether Yuuno-Clips are wrapped into their respective environment before showing. Depending on your Yuuno version, this configuration
might cause errors when displaying any clips.


## VapourSynth

This section allows you to configure how VapourSynth and Yuuno work with each other.

### `core_accept_lowercase`
Default: `False`  
<Badge text="VapourSynth <= R44" type="error" vertical="middle" />  

All plugin names are case-insensitive.  
This option is ignored on VapourSynth R45 and onwards.

### `core_add_cache`
Default: `True`  

Add a cache to all new VapourSynth-clips. It is never a good idea to set this to `False`

### `core_max_cache_size`
Default: `Not set`  

Configures how large the inline caches should be.

### `core_num_threads`
Default: `Not set`  

Configures how many worker-threads VapourSynth will use.

### `merge_bands`
Default: `None`  
<Badge text="Debug" type="warn" vertical="middle" />  

Configures how the RGB-planes are extracted by Yuuno.

### `resizer`
Default: `'resize.Spline36'`

Configures which resizer is to be used for converting from the frame-colorspace to
RGB24

### `post_processor`
Default: `None`

Set this to a function that takes an `RGB24`-clip and returns an `RGB24`-clip. This will be the
last function called when converting your clip from your color-space to RGB.

### `prefer_props`
Default: `True`

When set to true, Yuuno will try to determine the correct YUV-Matrix by using the frame-props of
the frame to display.

### `yuv_matrix`
Default: `'709'`

If Yuuno couldn't determine the correct YUV-Matrix from the frame-props, this value will be used
as fallback.

## YuunoImageOutput

### `icc_profile`
Default: `'sRGB'`

When outputting `.png`, Yuuno will insert a color-profile to ensure all browsers display the image
the same way.

If it is set to `sRGB` it will use sRGB. Otherwise specifiy the path to an ICC Color-Profile.

### `zlib_compression`
Default: `6`

Defines how good the `.png`-file will be compressed.
  
* `0` means no compression,  
* `1` is the fastest compression  
* and `9` the slowest.
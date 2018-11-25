# Reference

## `%load_ext yuuno`
This command enables Yuuno.
When you correctly install yuuno, the variables `vs` and `core` will be added to your local environment.

## Magics for clip introspection

### `%diff <clipA>, <clipB>` <Badge text="deprecated" type="error" />
This commands allows to compare two clips. Clip-B is shown when you put your mouse over the image.

This functionality will be merged into `%preview` starting with Yuuno 1.2.

---

### `%preview <clip>`
This commands shows a preview of the clip.

---

### `%encode` and `%%encode`
`%encode <clip> [--y4m] [--multi] <COMMAND> ...`  
`%%encode [--y4m] [--multi] <COMMAND> ...`

The line-magic (`%encode`) will take the given expression and tries to encode the clip.  
The cell-magic (`%%encode`) will take the contents of the cell and will encode the last expression
that the cell returns.

The `--y4m`-flag tells Yuuno to output Y4M into the processes' stdin. By default it will just return
raw frames.

By default, you can only have one encode running at a time. Use `--multi` to disable it.

See `%reattach` for viewing a list of current encodes.

---

### `%reattach [<id>]` <Badge text="1.1+" />
This command allows you to reattach to **running** encodes.
If you have only one encode running, it will directly attach to to the encode.

Otherwise it will show you a list of `id` and some information about the encode.
Use the ID given by its output to attach to a specific encode.

## Configuring Yuuno

Jupyter provides a `%config` magic which you can use to configure Jupyter.
Yuuno hooks into it so you can configure Yuuno using the same command.

`%config` will show you a list of config-sections.  
`%config <SECTION>` shows you a list of configuration options for that section.  
`%config <SECTION>.<CONFIG>` shows you the current value.  
`%config <SECTION>.<CONFIG>=<VALUE>` allows you to change the value.

Here is a small list of potentially useful configuration values.

### VapourSynth

This section allows you to configure how VapourSynth and Yuuno work with each other.

* `core_accept_lowercase` (Default: `False`) <Badge text="VapourSynth <= R44" type="error" vertical="middle" />  
  All plugin names are case-insensitive.  
  This option is ignored on VapourSynth R45 and onwards.

* `core_add_cache` (Default: `True`)  
  Add a cache to all new VapourSynth-clips. It is never a good idea to set this to `False`

* `core_max_cache_size` (Default: `None`)  
  Configures how large the inline caches should be.

* `core_num_threads` (Default: `num_processors`)  
  Configures how many worker-threads VapourSynth will use.

* `merge_bands` (Default: `None`) <Badge text="Debug" type="warn" vertical="middle" />  
  Configures how the RGB-planes are extracted by Yuuno.

* `resizer` (Default: `'resize.Spline36'`)
  Configures which resizer is to be used for converting from the frame-colorspace to
  RGB24

* `post_processor` (Default: `None`)  
  Set this to a function that takes an `RGB24`-clip and returns an `RGB24`-clip. This will be the
  last function called when converting your clip from your color-space to RGB.

* `prefer_props` (Default: `True`)  
  When set to true, Yuuno will try to determine the correct YUV-Matrix by using the frame-props of
  the frame to display.

* `yuv_matrix` (Default: `'709'`)  
  If Yuuno couldn't determine the correct YUV-Matrix from the frame-props, this value will be used
  as fallback.

### YuunoImageOutput

* `icc_profile` (Default: `'sRGB'`)
  When outputting `.png`, Yuuno will insert a color-profile to ensure all browsers display the image
  the same way.

  If it is set to `sRGB` it will use sRGB. Otherwise specifiy the path to an ICC Color-Profile.

* `zlib_compression` (Default: `6`)  
  Defines how good the `.png`-file will be compressed. `0` means no compression, `1` is the fastest expression
  and `9` the slowest.
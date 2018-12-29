---
prev: ./getting-started
next: ./configuration
title: Reference
sidebarDepth: 2
---

# Reference

## `%load_ext yuuno`
This command enables Yuuno.
When you correctly install yuuno, the variables `vs` and `core` will be added to your local environment.

## Magics for previewing and encoding

The magics for previewing and encoding work like if they were actual console commands.

### vspreview <Badge text="1.2+" />

The `%%vspreview`-magic shows a preview. It will remeber which frame was shown in the last run of this command.

You can only use one `%%vspreview`-instance per Notebook.

Command:
* `%%vspreview [--main <OUTPUT-ID>] [--diff [<OUTPUT-ID>]] [--reset-core] [--isolate-variables]`

Options:
* `--main <OUTPUT-ID>` - This setting defines which output-index is to previewed.
* `--diff [<OUTPUT-ID>]` - This setting defines which output-index you want to compare the preview with.
* `--reset-core` - Create a new `vs.Core`-object before executing the script.
* `--isolate-variables` - Make sure that changes to variables do not affect the entire console.

### vspipe <Badge text="1.2+" />

The `%%vspipe`-magic is a helper for `%encode` below. It behaves like `%%vspreview` but instead of previewing,
the magic will encode the video.

Command:
* `%%vspipe [--outputindex <OUTPUT-ID>] [OPTIONS] | [<COMMAND>...]`

Options:
* `--outputindex <OUTPUT-ID>` - Which output-index should be encoded.
* `--y4m` - Add YUV4MPEG headers to output
* `--start N` - Set the output frame range (first frame)
* `--end N` - Set the output frame range (last frame)
* `--requests N` - Set the number of concurrent frame requests.
* `--reset-core` - Create a new `vs.Core`-object before executing the script.
* `--isolate-core` - Create a new `vs.Core`-object that is only running during the encode. Do not use with `--reset-core`
* `--isolate-variables` - Make sure that changes to variables do not affect the entire console.


## Lower-Level Magics for Previewing and Encoding

### `%preview` and `%diff`

Commands:
* `%preview <clip>, [diff=<clipB>]`
* `%diff <clipA>, <clipB>` <Badge text="deprecated" type="error" />

This commands shows a preview of the clip.
Whenn using `%diff` or the `diff`-parameter is given, the comparison-mode is activated.

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

### `%reattach` <Badge text="1.1+" />
Command: `%reattach [<ID>]`

This command allows you to reattach to **running** encodes.
If you have only one encode running, it will directly attach to to the encode.

Otherwise it will show you a list of `id` and some information about the encode.
Use the ID given by its output to attach to a specific encode.

## Controlling your VapourSynth-Environment

Yuuno allows extensive control of your VapourSynth environment.

### `%reset_core`

By using `%reset_core` you tell Yuuno to enable a new vapoursynth-core dismissing the old one.

### `%%isolated_core`

This command creates an isolated core that only exists during the cell the command is executed.
This is mostly useless unless you combine it with an encode command.

## Running Scripts

Yuuno is capable of running existing vapoursynth scripts from Jupyter.

To do that, you can run `%runvpy`. It will execute the script and return a dict with its outputs while making sure that
your previous outputs remain untouched.

If you use `%%vspreview` or `%%vspipe`, a far more useful command is the lower-level `%execvpy`-magic which will not reset your
outputs after a run. This allows you to run and encode any VapourSynth-Script as if it were a cell in Yuuno.

### `%execvpy
Command: `%execpvy [<COMMAND>...]`

Executes a VapourSynth script inside Jupyter (but not inside your global namespace.

### `%runvpy`
Command: `%runvpy [<COMMAND>...]`

Executes a VapourSynth script inside Jupyter (but not inside your global namespace.)

It will restore your outputs before script execution and 

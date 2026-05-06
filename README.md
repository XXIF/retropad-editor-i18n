# RetroPad Editor

Online tool to create and edit onscreen gamepads for RetroArch.

https://valent-in.github.io/retropad-editor/

## 多语言支持 (i18n)

本分支在原版基础上添加了完整的多语言支持。

- **English** — 默认语言
- **中文** — 简体中文

顶部栏右侧有语言选择下拉框，切换后即时生效，偏好保存在浏览器本地存储中，下次访问自动沿用。

## 仓库地址

- 原版仓库: https://github.com/valent-in/retropad-editor
- 多语言版本: https://github.com/XXIF/retropad-editor-i18n

## Features

- Create, move, resize buttons of virtual gamepad.
- Multiple layers; auto switch orientation for portrait overlays.
- Fix overlay aspect ratio.
- Import image resources in addition to 'flat' image set.
- Scale viewport for comfortable editing on small screens.
- Display sensitivity range for analog sticks.
- Old format support (auto normalize integer overlays).
- Non-fullscreen overlays support.

Config file and images must be stored in same folder.
On most Android devices RetroArch will open config only from internal memory even access to sdcard is granted.
- This editor can load but NOT save configs with image paths (img/A.png will be saved as A.png)
---
Libretro Docs: https://docs.libretro.com/development/retroarch/input/overlay/

Used media resources from https://github.com/libretro/common-overlays (button images) and https://github.com/libretro/RetroArch (icon).

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY.

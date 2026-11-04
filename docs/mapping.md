# How to Create Maps for GGC Maps

Use this guide to create an SVG floor plan in **Inkscape**, organize its layers and groups, refine it with AI assistance, and add it to the application. The drawing instructions assume you are new to Inkscape.

The workflow described by the map creator began with the initial layout and organization of folders, layers, and groups. AI then helped refine the drawing, including making lines straighter. The layer names, sample building, and prompt below are suggested examples, not a record of the exact tools or prompt used.

Related resources: [Project README](./README.md) · [Installation guide](./Installation.md)

## Required tools and files

1. **Inkscape:** Install it from the [official Inkscape website](https://inkscape.org/). This is the editor used in this walkthrough. If using another SVG editor, follow the alternative-editor requirements below.
2. **A building reference:** Have the floor plan or source drawing available, including actual floor names and room numbers.
3. **The project and a text editor:** Open the project folder in a code editor so you can update the building data and inspect SVG attributes.
4. **Node.js and npm:** Follow the [installation guide](./Installation.md) before running the application.
5. **An AI tool that can work with SVG files or SVG markup:** You need this only if following the AI refinement step. The output must remain an editable SVG.

Choose a building code before naming your files. These instructions use **Windows and Inkscape's default keyboard shortcuts**. If a shortcut differs in your installation, use the named menu command or check **Edit > Preferences > Interface > Keyboard**. Return focus to the canvas before using drawing shortcuts; while typing a label, letter keys enter text.

For an existing example, inspect [Convocation Center Level 1](../public/BuildingMaps/CC/L1.svg). In the instructions below, Building X is a hypothetical new building; replace it with your building's information.

### Shortcut reference

| Action | Windows shortcut |
| --- | --- |
| New / Open | `Ctrl+N` / `Ctrl+O` |
| Import a reference | `Ctrl+I` |
| Save / Save As | `Ctrl+S` / `Ctrl+Shift+S` |
| Undo | `Ctrl+Z` |
| Select / Edit nodes | `F1` / `F2` |
| Rectangle / Pen / Text | `F4` / `B` / `F8` |
| Layers and Objects | `Ctrl+Shift+L` |
| Add Layer | `Ctrl+Shift+N` |
| Select two objects | Click the first, then `Shift+click` the second |
| Group / Ungroup | `Ctrl+G` / `Ctrl+Shift+G` |
| Fill and Stroke | `Ctrl+Shift+F` |
| Align and Distribute | `Ctrl+Shift+A` |
| Object Properties | `Ctrl+Shift+O` |
| XML Editor | `Ctrl+Shift+X` |
| Document Properties | `Ctrl+Shift+D` |

Source: [Inkscape keyboard and mouse reference](https://inkscape.org/sl/doc/keys.html). Use the step-by-step instructions below to learn when each shortcut applies.

### If you use another SVG editor

You must use an editor that can save editable SVG shapes and groups. Use its equivalents of layers, grouping, alignment, and SVG saving; the Inkscape shortcuts above do not apply to other programs. Keep an editable source file and inspect the final SVG in a text editor if the drawing application cannot edit `id` and `class` attributes. Confirm that export preserves the room groups, IDs, classes, styles, and `viewBox` required by this guide. A PNG or JPEG export cannot replace the interactive SVG.

## 1. Start the layout

### Set up the drawing

1. Open Inkscape. Choose **File > New** (`Ctrl+N`) for a new drawing, or **File > Open** (`Ctrl+O`) to continue an existing SVG.
2. Choose **File > Save As** (`Ctrl+Shift+S`). Save an **Inkscape SVG** working file outside `public/BuildingMaps/`, for example `X-L1-working.svg` in your own drafts folder. Save progress with `Ctrl+S`.
3. Open **Layers and Objects** (`Ctrl+Shift+L`). Use **Layer > Add Layer** (`Ctrl+Shift+N`) to create a layer named `Reference`.
4. With `Reference` active, choose **File > Import** (`Ctrl+I`) and select your reference image. For a bitmap reference, choose **Embed** so moving the working file does not break its image link. See the [Inkscape import guide](https://inkscape-manuals.readthedocs.io/en/latest/import-pictures.html).
5. Position the reference, then use its layer's lock control in Layers and Objects. Locking it prevents accidental movement while you draw. Create a separate drawing layer above it and select that layer before drawing.

### Draw rooms and walls

1. Select the **Rectangle tool** (`F4`) and drag to draw a rectangular room. For an irregular room, use the **Pen tool** (`B`), click each corner, and click the starting point to close the outline.
2. For a straight wall segment, use the Pen tool and click its endpoints without dragging. Right-click to finish an open path. In the Pen toolbar, the **paraxial** mode constrains segments to horizontal and vertical directions; use it only where the reference has right angles. See the [Pen tool guide](https://inkscape-manuals.readthedocs.io/en/latest/pen-tool.html).
3. Open **Object > Fill and Stroke** (`Ctrl+Shift+F`) to set room fill colors, wall stroke colors, and stroke widths. A wall drawn as an open path needs a visible stroke; use no fill for that wall path.
4. Use the **Text tool** (`F8`), click inside a room, and type its number. Switch to the **Selector** (`F1`) to position objects. Add doors, stairs, and other features to match the reference.
5. To adjust a path's corners, use the **Node tool** (`F2`). To align selected objects, use **Object > Align and Distribute** (`Ctrl+Shift+A`), choose the intended **Relative to** target, and apply the appropriate alignment. Align only objects that should line up in the real floor plan. See the [alignment guide](https://inkscape-manuals.readthedocs.io/en/latest/align-and-distribute.html).

If an edit moves the wrong object or changes the layout, use **Edit > Undo** (`Ctrl+Z`). You can make straight geometry directly in Inkscape; AI refinement is an additional step you can review afterward.

Prioritize the correct layout and room relationships. Keep intentional curves and angled walls; straightening the drawing should not change the building's structure.

**Screenshot to add:** Your initial layout before AI refinement.

## 2. Organize layers and groups

Layers help you find and edit parts of the drawing. Groups keep related objects together. One possible arrangement is:

```text
Floor plan
├── Reference (locked while drawing; excluded from the final export)
├── Walls and hallways
├── Rooms
│   ├── Room 1001 (shape and label grouped together)
│   └── Room 1002 (shape and label grouped together)
└── Icons and general labels
```

Use names that describe each layer's purpose. Group each interactive room's shape and label together. Put general labels, such as a building title, outside room groups.

### Create a room group in Inkscape

1. Open **Layers and Objects** (`Ctrl+Shift+L`) and add the remaining layers with `Ctrl+Shift+N`. Select `Rooms` before drawing room shapes and their labels so they start on the same layer.
2. With the **Selector** (`F1`), click the first object, such as a room shape. Hold `Shift` and click the second object, such as its label. Both objects are now selected. You can keep holding `Shift` and click additional objects to add them to the selection.
3. Release `Shift`, then choose **Object > Group** (`Ctrl+G`). Selecting two objects does not group them until you run this command. The shape and label now move together. Expand the group in Layers and Objects to check its contents.
4. If you grouped the wrong objects, select the group and use **Object > Ungroup** (`Ctrl+Shift+G`), then select the intended objects and group again. Avoid ungrouping finished rooms after assigning their app attributes.
5. To select a shape inside an existing group, hold `Ctrl` while clicking the shape. This lets you edit it without removing the group.

Source: [Inkscape grouping guide](https://inkscape-manuals.readthedocs.io/en/latest/grouping.html).

The app reads SVG attributes, not just the names shown in the editor's layers panel. Check the exported markup to confirm these attributes survived:

| Element | Attribute | Purpose |
| --- | --- | --- |
| Room group | `class="room-group"` | Identifies the interactive room group |
| Room group | `id="1001"` | Identifies that room |
| Room shape | `class="room"` | Lets the extractor find it and the app style it |
| Room label | `class="label"` | Lets the app identify and style the label |

### Set the attributes in Inkscape

Select an object or room group and open **Object > Object Properties** (`Ctrl+Shift+O`) to inspect its properties, including its ID. Use this when checking which object or group you selected. The **ID** identifies the SVG element; a descriptive **Label** helps you recognize it in the editor. Keep the actual room ID separate from any friendly label. **Document Properties** (`Ctrl+Shift+D`) controls the page, while **XML Editor** (`Ctrl+Shift+X`) lets you inspect and edit the SVG attributes used below.

1. Select the room group, then open **Edit > XML Editor** (`Ctrl+Shift+X`). Confirm you are editing the group's `svg:g` element, not the entire layer.
2. In the attribute list, change the group's `id` value to the actual room number, such as `1001`. Add a `class` attribute with value `room-group` and confirm the edit using the dialog's apply/set control. If a class already exists, append the new class with a space instead of deleting needed classes.
3. Expand that group in the XML tree. Select its shape (`svg:rect`, `svg:path`, or `svg:polygon`) and add `room` to its `class` attribute.
4. Select the label's `svg:text` element and add `label` to its `class` attribute. Preserve any existing child text elements.
5. Save, then inspect the SVG in your code editor. Confirm the structure matches the example below. A friendly name in Layers and Objects is not a substitute for these attributes.

XML Editor button labels can vary by version. If needed, save the SVG and edit its attributes in your code editor, then reopen that saved file in Inkscape before continuing.

A simplified room looks like this:

```xml
<g id="1001" class="room-group">
  <rect class="room" x="50" y="50" width="100" height="80"
        fill="#ffffff" stroke="#000000" />
  <text class="label" x="100" y="95" text-anchor="middle"
        fill="#000000">1001</text>
</g>
```

Actual room shapes can use paths or polygons. Use unique IDs throughout each SVG, and avoid reusing room IDs across floors of the same building: the generated room list combines the building code and room ID, without a separate floor field. Keep IDs consistent in spelling and capitalization wherever they are referenced.

**Screenshot to add:** Your layers panel with one room group expanded.

## 3. Refine the drawing with AI

Keep the initial version and provide a copy of the SVG to your AI tool. Describe specific changes you want, such as straightening uneven wall segments, aligning edges, or making line widths consistent.

Suggested prompt:

> Help refine this SVG floor plan. Straighten lines that are intended to be horizontal or vertical and improve alignment and line consistency. Preserve intentional angles and curves, room positions, doors, openings, labels, IDs, classes, and groups. Do not invent rooms or change the layout. Return an editable SVG and explain the changes. If a detail is unclear, identify it for review.

This is an example prompt. If documenting your own process, include your actual prompt or clearly label a reconstruction.

Save the AI result under a new filename. Open it in Inkscape with **File > Open** (`Ctrl+O`) and compare it with the original reference. Check room boundaries, openings, label placement, groups, and IDs. Use **Layers and Objects** (`Ctrl+Shift+L`) and **XML Editor** (`Ctrl+Shift+X`) to inspect the structure. Correct any changes that do not match the reference. Save the reviewed result as an SVG with editable vector shapes.

For attribution, describe your contribution directly: you prepared the layout and organization, then used AI to help refine the drawing. Name the tool and describe its actual changes when that information is available.

**Screenshot to add:** Before and after, with specific changes identified.

## 4. Save and organize the final SVG files

1. Save your working file first (`Ctrl+S`). Use **File > Save As** (`Ctrl+Shift+S`) to create a separate final `.svg` file. Keep **Inkscape SVG** as the format for this walkthrough, which retains Inkscape editing information. Plain SVG is another option, but recheck its exported structure if you use it. See the [saving guide](https://inkscape-manuals.readthedocs.io/en/latest/saving.html).
2. In the final copy, remove the imported reference layer if it is only a tracing aid. Keep it in your working file. Confirm the map still has all its actual walls, rooms, and labels.
3. Open **File > Document Properties** (`Ctrl+Shift+D`) and check the page bounds. Adjust the page to include the full map and labels without excessive empty space, then save again.
4. Confirm the final file ends in `.svg`. For this workflow, use **Save As** to save SVG; exporting a screenshot or PNG does not preserve the required room elements.

Save one SVG per floor in the building's folder:

```text
public/
└── BuildingMaps/
    └── X/
        ├── L1.svg
        └── L2.svg
```

Use the project's floor naming pattern: `L1` for Level 1, `L2` for Level 2, and `GL` where a ground level is needed. Confirm these match the building's floor list.

Keep drafts and backups outside `public/BuildingMaps/`, because room extraction scans every SVG under that directory.

Check that the exported SVG has a `viewBox` matching the drawing's coordinate bounds, that labels fit inside those bounds, and that IDs and classes are preserved. Retain the styles needed for hover and selected-room highlighting, following a working map in the project. A vector outline should stay sharp when scaled; an embedded screenshot remains a raster image even inside an SVG.

## 5. Register the building and floors

Open [data/buildings.json](../data/buildings.json). For a new building, add an object to the existing array. For an existing building, update its current object rather than adding a duplicate.

Example object:

```json
{
  "id": "X",
  "name": "Building X",
  "floors": [
    { "id": "L1", "label": "Level 1", "file": "/BuildingMaps/X/L1.svg" },
    { "id": "L2", "label": "Level 2", "file": "/BuildingMaps/X/L2.svg" }
  ]
}
```

Separate objects with commas and preserve valid JSON. List floors from lowest to highest, since the floor arrows follow this order. The file URLs omit `public/`. Use matching capitalization for folder and file names.

The sidebar and building/floor routes use this data. A standard building does not require a separate page component for every floor.

## 6. Connect the campus map

To make the building clickable on the campus map, edit [Campus.svg](../public/BuildingMaps/(Campus)/Campus.svg). Add or update the building at its correct location, following the existing building artwork and styling.

- Put its artwork in a group with `class="building-group"`.
- Give that group the lowercase building code, such as `id="x"`.
- Give its building shape `class="building"`.
- Avoid creating another group with an ID already in use.

Campus-map selection converts the code to uppercase to match `X` in the building data. Sidebar hover uses the lowercase code to find the SVG artwork. Registering a building in JSON does not draw its campus footprint automatically.

## 7. Generate room data and run the app

From the project root, run:

```bash
npm run dev
```

The `predev` command automatically extracts room data before starting the development server. Open the local address printed by the terminal.

To refresh room data separately, run:

```bash
npm run extract-rooms
```

The [extraction script](../scripts/extract-room-data.js) finds `.room-group` elements with IDs and a `.room` descendant. It regenerates [data/rooms.json](../data/rooms.json), adding current rooms and removing entries no longer found. For Building X, room `1001` becomes `X-1001`. Update the source SVG rather than manually maintaining this generated list.

### Room search and floor numbering

Room extraction alone does not guarantee that search can navigate to the correct floor. The current [search utilities](../lib/searchUtils.js) normally infer the floor from the first digit of a numeric room number. For example, `X-1001` points to `L1`.

The project has special rules for CC and W. CC uses the second digit (`11xx`, `12xx`, and `13xx` for Levels 1–3), while W maps first digits 1, 2, and 3 to `GL`, `L1`, and `L2`. Other numbering patterns need corresponding search support. Named rooms may need aliases in [components/Find.js](../components/Find.js).

Preserve actual room numbers and adapt search when needed; do not rename real rooms just to fit a convention.

## 8. Check the completed map

- [ ] The building appears in the sidebar.
- [ ] Each listed floor opens the correct SVG.
- [ ] Floor arrows follow the correct order.
- [ ] Clicking the campus building opens its page, and sidebar hover highlights it.
- [ ] Room shapes and labels select the intended room.
- [ ] Hover and selection highlights are visible.
- [ ] Searching a room reaches the correct floor and room.
- [ ] Zooming and panning work, and labels are readable and not clipped.
- [ ] The refined map still matches the building reference.

If a floor is blank, check its path and exported SVG. If a room is missing from the generated list, check its group ID and classes. If search opens the wrong floor, check the floor-resolution rules.

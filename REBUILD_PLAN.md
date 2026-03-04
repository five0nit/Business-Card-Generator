# REBUILD_PLAN.md

## Objective
Rebuild this fresh fork into a consumer-ready **3D printable business-card webapp** with a **mono-PLA-aware template system**, interactive 3D-style preview, and a clean API path toward STL export.

---

## 1) Current Stack (Observed)
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **UI:** React 18 + TailwindCSS
- **State of repo:** mostly fresh `create-next-app` scaffold

Implication: this is a strong base for App Router-first architecture with colocated routes and API handlers.

---

## 2) Target Architecture

### Frontend layers
1. **Route pages**
   - `/designer` – primary product flow
   - `/templates` – browse/select mono-PLA-safe templates
   - `/switching-card` – mode for multi-variant/swappable card designs
2. **Domain components**
   - `components/designer/*` for control panels, 3D preview, and future text/icon editors
3. **Data model + template catalog**
   - `lib/templates.ts` + typed interfaces for print-safe defaults
4. **Render adapters (future)**
   - SVG/Canvas composition abstraction for 2D source geometry

### Backend/API layers (App Router route handlers)
- `GET /api/templates`
  - Returns mono-PLA-aware templates + print profile constraints
- `POST /api/render`
  - Accepts design state and returns normalized geometry payload (intermediate)
- `POST /api/export/stl`
  - Accepts normalized geometry payload and returns STL (or async job token in phase 2)

### Data flow (planned)
1. User selects template
2. User tweaks controls (camera angle/depth/text scale/icon scale + content)
3. Frontend builds **DesignState**
4. `POST /api/render` converts state -> print geometry DTO
5. `POST /api/export/stl` converts DTO -> binary STL for download

---

## 3) Mono-PLA-Aware Template System

### Why mono-PLA constraints matter
Single-color PLA printing needs strong geometric readability instead of color cues.

### Template-level constraints
Each template stores:
- `recommendedNozzleMm`
- `minFeatureMm`
- `minTextHeightMm`
- `safeDepthRangeMm`
- `preferredTextScale`
- `preferredIconScale`
- high-contrast style cues (emboss/deboss + spacing)

### Rules to enforce in UI/API
- Clamp user depth to template-safe range
- Prevent text/icon scale combinations that violate min feature sizes
- Surface warnings before STL export (hard fail for impossible geometry)

---

## 4) Renderer Plan

### Phase 1 (scaffold/prototyping)
- Visual pseudo-3D preview (angled card scene)
- Display controls and computed values
- Keep rendering deterministic from typed state

### Phase 2 (geometry-backed renderer)
- Build geometry as 2.5D primitives:
  - base card slab
  - raised/debossed text paths
  - icon vector outlines
- Suggested pipeline:
  1. text/icon vector path generation
  2. polygon offset + simplification
  3. extrusion by depth profile
  4. mesh merge + watertight validation

### Candidate libs (integration path)
- `three`/`@react-three/fiber` for richer live preview
- `opentype.js` for font path extraction
- triangulation/CSG toolchain (e.g., earcut + CSG utilities)
- STL export utility (`three-stdlib` exporter or dedicated mesh-to-stl package)

---

## 5) STL Pipeline Integration Path

### Intermediate DTO
Define a strict `RenderOutput` format shared between `/api/render` and `/api/export/stl`:
- card dimensions
- base thickness
- text/icon path groups
- per-group extrusion/deboss depth
- metadata and validation flags

### Export modes
- **Sync mode (early):** generate STL immediately for small designs
- **Async mode (later):** background job for larger designs, return job ID + polling endpoint

### Validation gates before export
- non-manifold check
- minimum wall/feature checks
- disconnected island detection
- final bounds check against printable card dimensions

---

## 6) Route & Component Scaffold (implemented in this run)

### Pages
- `/` lightweight launchpad
- `/designer` primary editor shell
- `/templates` template browser (mono-PLA focus)
- `/switching-card` switching-card mode scaffold

### Components
- `DesignerShell` with editable control state
- `PreviewCanvas3D` angled card scene stub with on-screen metrics

### API stubs
- `/api/templates`
- `/api/render`
- `/api/export/stl`

These are intentionally scaffolded with clear response contracts for incremental implementation.

---

## 7) Next Build Milestones
1. Add content editing (name/title/contact/icon upload or icon library)
2. Introduce robust template validator and warning panel
3. Implement real geometry renderer + deterministic snapshots
4. Implement STL exporter and downloadable artifacts
5. Add regression fixtures (golden geometry tests)
6. Add print profile presets (0.2/0.4 nozzle + layer-height assumptions)
7. Add onboarding + one-click “print-safe auto-fix”

---

## 8) Definition of Done for consumer-ready v1
- Users can choose a template, edit card content, and preview live
- Exported STL passes printability checks for mono-PLA defaults
- UI communicates constraints clearly before checkout/export
- Common printer/nozzle profiles produce reliable first-print success

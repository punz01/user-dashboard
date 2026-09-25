User Management Dashboard

A front-end recreation of the "User Management – Edit Users" screen, built with HTML, CSS, Bootstrap 5, and vanilla JavaScript. No backend or database — all data is mock and held in memory.

How to Run the Project
Download index.html, styles.css, and script.js and keep them together in the same folder.
Open index.html directly in a browser, or serve the folder with any static server (e.g. VS Code's "Live Server" extension, or python3 -m http.server) and visit it in your browser.
No build step, package install, or server-side setup is required — Bootstrap 5, Bootstrap Icons, and the Inter font are loaded from CDNs, so an internet connection is needed for styling/icons to load.

A single-file version (dashboard.html, everything inlined) is also available if you just want to double-click and open one file.

Approach
Structure first: matched the reference layout — top navbar, dark left sidebar with an expandable "User Management" section, and a main content panel with toolbar, table, and pagination.
Data layer: a plain JavaScript array of mock user objects acts as the "database." All table rendering, filtering, and pagination read from and write to this array, so the UI stays in sync with a single source of truth.
Rendering: the table body, filter dropdowns, and pagination controls are all rendered dynamically from the data array rather than hard-coded in HTML, so add/edit/delete operations just re-run the same render function.
Bootstrap 5 handles layout primitives (grid, forms, buttons) and components (modals, toasts, offcanvas-style sidebar on mobile), while custom CSS layers on the specific look (navy sidebar, status badges, table styling) to match the reference.
Assumptions
The reference screenshot didn't show a visible Status column, but a "Status" filter was listed above the table — so a Status column (Active / Inactive / Pending) with colored badges was added to make that filter meaningful and visible.
Exact field values (groups like "Forward"/"Derivative"/"Peculiar", regions, divisions) are illustrative mock data, not tied to any real business meaning.
"User actions should be functional" was interpreted as: Add and Edit open a validated form modal that updates the in-memory data, and Delete opens a confirmation modal — since there's no backend, changes reset on page reload.
Search was assumed to match against first name, last name, and email/username, since that covers the most common lookup patterns for a user list.
"Module #" nav items in the reference (unlabeled/placeholder tabs) were kept as generic "Module 1" / "Module 2" labels.
UI/UX Changes Made
Added a Status column with color-coded badges (green/red/amber) so filtering by status is visually clear, rather than requiring the user to open the edit modal to see it.
Added a results count ("N users found") and a "Showing X to Y of Z entries" label so users always have feedback on how filtering/pagination affected the list.
Added a Clear Filters action to reset search and all dropdowns in one click.
Collapsed the Filters row behind a toggle button by default, to keep the toolbar compact until the user needs it.
Made the sidebar collapse into a slide-in drawer with a backdrop on tablet/mobile widths, since the fixed sidebar in the reference wouldn't work on small screens.
Replaced static action icons with working Edit (opens a pre-filled form) and Delete (opens a confirmation dialog) buttons, plus toast notifications confirming each action, so the user always gets feedback after an action.
Made the table horizontally scrollable on narrow viewports instead of squeezing or wrapping columns, to keep data legible on mobile.

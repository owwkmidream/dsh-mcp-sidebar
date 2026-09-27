/**
 * Client plugin body: mounts the `mcp` remote namespace, registers the
 * `setting-mcp` locale dictionaries, then registers the MCP manager as a
 * first-class sidebar panel beside **Plugins** (the `sidebar.panellist`
 * entry) opening its own `main` column panel.
 *
 * @module @owwkmidream/dsh-mcp-sidebar
 */
import { en, zh } from "./locales.js";
import { McpPanel } from "./McpPanel.js";
import { McpPanelIcon } from "./McpPanelIcon.js";
import { injectStyles } from "./styles.js";
import { TYPERT_REMOTE } from "./typert-remote.js";
/** Dictionary namespace owned by this plugin (panel copy). */
const NS = "setting-mcp";
/** The id shared by the sidebar entry and the main panel it opens. */
export const PANEL_ID = "mcp";
/** Services required before this plugin mounts. */
export const inject = ["slots", "remote", "locale", "layout"];
/** Mount the browser half. */
export async function apply(ctx) {
    injectStyles();
    ctx.effect(() => ctx.locale.register(NS, { zh, en }), "setting-mcp: dictionaries");
    await ctx.remote.$mount(TYPERT_REMOTE);
    // Stable per-namespace translate; reads the active locale at call time, so
    // the label thunk below follows language switches without re-registration.
    const t = ctx.locale.bind(NS);
    // The manager is a global panel: it belongs to the profile, not to a
    // Session, and the sidebar entry selects it.
    ctx.slots.inject("main", () => ctx.slots.register({
        name: "main",
        key: PANEL_ID,
        locale: NS,
        inject: () => ({
            mcp: ctx.get("remote.mcp"),
        }),
    }, McpPanel));
    // The sidebar row, ordered after the shipped Plugins entry (order 0).
    ctx.slots.inject("sidebar.panellist", () => ctx.slots.register({
        name: "sidebar.panellist",
        id: PANEL_ID,
        order: 10,
        label: () => t("nav"),
        locale: NS,
    }, McpPanelIcon));
}

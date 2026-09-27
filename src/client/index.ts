/**
 * Client plugin body: mounts the `mcp` remote namespace, registers the
 * `setting-mcp` locale dictionaries, then registers the MCP manager as a
 * first-class sidebar panel beside **Plugins** (the `sidebar.panellist`
 * entry) opening its own `main` column panel.
 *
 * @module @owwkmidream/dsh-mcp-sidebar
 */

import type { Context as ClientContext } from "@deepseek-ai/cordis";
// Loads the ctx.remote Context merge (module augmentation for ctx.remote).
import type {} from "@deepseek-ai/dsh-api-remotes/client";
// Load the locale service declarations (module augmentation for Context.locale).
import type {} from "@deepseek-ai/dsh-client-locale/client";
// Load the layout/panel contracts (module augmentation for ctx.layout and the
// `main` keyed slot this panel registers into).
import type {} from "@deepseek-ai/dsh-client-ui-layout/client";
// Loads the renderer slot contract (module augmentation for ctx.slots).
import type {} from "@deepseek-ai/dsh-client-ui-renderer/client";
// Load the sidebar slot contract (`sidebar.panellist`), declared by ui-sidebar.
import type {} from "@deepseek-ai/dsh-client-ui-sidebar/client";
import { en, type SettingMcpKey, zh } from "./locales.js";
import { McpPanel } from "./McpPanel.js";
import { McpPanelIcon } from "./McpPanelIcon.js";
import type { McpRemote } from "./remote.js";
import { injectStyles } from "./styles.js";
import { TYPERT_REMOTE } from "./typert-remote.js";

/** Dictionary namespace owned by this plugin (panel copy). */
const NS = "setting-mcp";

/** The id shared by the sidebar entry and the main panel it opens. */
export const PANEL_ID = "mcp";

declare module "@deepseek-ai/dsh-client-ui-slots" {
	interface LocaleNamespaceMap {
		/** MCP panel copy. */
		"setting-mcp": SettingMcpKey;
	}
}

/** Services required before this plugin mounts. */
export const inject = ["slots", "remote", "locale", "layout"];

/** Mount the browser half. */
export async function apply(ctx: ClientContext) {
	injectStyles();
	ctx.effect(() => ctx.locale.register(NS, { zh, en }), "setting-mcp: dictionaries");
	await ctx.remote.$mount(TYPERT_REMOTE);
	// Stable per-namespace translate; reads the active locale at call time, so
	// the label thunk below follows language switches without re-registration.
	const t = ctx.locale.bind(NS);

	// The manager is a global panel: it belongs to the profile, not to a
	// Session, and the sidebar entry selects it.
	ctx.slots.inject("main", () =>
		ctx.slots.register(
			{
				name: "main",
				key: PANEL_ID,
				locale: NS,
				inject: (): { mcp: McpRemote } => ({
					mcp: ctx.get("remote.mcp") as McpRemote,
				}),
			},
			McpPanel,
		),
	);
	// The sidebar row, ordered after the shipped Plugins entry (order 0).
	ctx.slots.inject("sidebar.panellist", () =>
		ctx.slots.register(
			{
				name: "sidebar.panellist",
				id: PANEL_ID,
				order: 10,
				label: () => t("nav"),
				locale: NS,
			},
			McpPanelIcon,
		),
	);
}

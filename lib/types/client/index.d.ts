/**
 * Client plugin body: mounts the `mcp` remote namespace, registers the
 * `setting-mcp` locale dictionaries, then registers the MCP manager as a
 * first-class sidebar panel beside **Plugins** (the `sidebar.panellist`
 * entry) opening its own `main` column panel.
 *
 * @module @owwkmidream/dsh-mcp-sidebar
 */
import type { Context as ClientContext } from "@deepseek-ai/cordis";
import { type SettingMcpKey } from "./locales.js";
/** The id shared by the sidebar entry and the main panel it opens. */
export declare const PANEL_ID = "mcp";
declare module "@deepseek-ai/dsh-client-ui-slots" {
    interface LocaleNamespaceMap {
        /** MCP panel copy. */
        "setting-mcp": SettingMcpKey;
    }
}
/** Services required before this plugin mounts. */
export declare const inject: string[];
/** Mount the browser half. */
export declare function apply(ctx: ClientContext): Promise<void>;

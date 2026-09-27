/**
 * MCP manager panel. Mounted into the `main` keyed slot under {@link PANEL_ID}
 * and selected from the sidebar; lists the managed MCP servers with live
 * status, stages edits locally (add / edit / remove / enable-disable), and
 * commits them through `remote.mcp.save` — the host reconciles the loader tree
 * and each change hot-reloads the affected `dsh-mcp-client` entry.
 *
 * Styling uses the DSH design tokens (`--dsw-alias-*`); the stylesheet is
 * injected once by the client plugin body.
 *
 * @module @owwkmidream/dsh-mcp-sidebar
 */
import type { TranslateNS } from "@deepseek-ai/dsh-client-ui-slots";
import type { McpRemote } from "./remote.js";
/** The translate seat of this plugin's `setting-mcp` locale namespace. */
export type PanelTranslate = TranslateNS<"setting-mcp">;
/** Injected face for the panel entry. */
export interface McpPanelProps {
    /** Injected `remote.mcp` handle. */
    mcp: McpRemote;
    /** Framework-injected translate seat (namespace `setting-mcp`). */
    t: PanelTranslate;
}
export declare function McpPanel({ mcp, t }: McpPanelProps): import("react").JSX.Element;

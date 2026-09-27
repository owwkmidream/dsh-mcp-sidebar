/**
 * The sidebar's MCP-panel entry icon; the sidebar owns the button, label, and
 * selected state around it. Mirrors the Plugins entry's icon shape so the two
 * panel entries sit in the same sidebar row.
 *
 * @module @owwkmidream/dsh-mcp-sidebar
 */
import type { PropsRuntime } from "@deepseek-ai/dsh-client-ui-slots";
import type { ReactNode } from "react";
/**
 * Render the MCP glyph at the size the sidebar asks for.
 * @param props - the sidebar's icon share: the requested edge in pixels.
 * @returns the icon element.
 */
export declare function McpPanelIcon({ size }: PropsRuntime<"sidebar.panellist">): ReactNode;

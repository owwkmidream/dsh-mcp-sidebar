/**
 * The sidebar's MCP-panel entry icon; the sidebar owns the button, label, and
 * selected state around it. Mirrors the Plugins entry's icon shape so the two
 * panel entries sit in the same sidebar row.
 *
 * @module @owwkmidream/dsh-plugin-setting-mcp
 */

import type {} from "@deepseek-ai/dsh-client-ui-sidebar/client";
import type { PropsRuntime } from "@deepseek-ai/dsh-client-ui-slots";
import type { ReactNode } from "react";

/**
 * Render the MCP glyph at the size the sidebar asks for.
 * @param props - the sidebar's icon share: the requested edge in pixels.
 * @returns the icon element.
 */
export function McpPanelIcon({ size }: PropsRuntime<"sidebar.panellist">): ReactNode {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<rect x="3" y="4" width="7" height="7" rx="1.5" />
			<rect x="14" y="4" width="7" height="7" rx="1.5" />
			<rect x="3" y="14" width="7" height="7" rx="1.5" />
			<rect x="14" y="14" width="7" height="7" rx="1.5" />
		</svg>
	);
}

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Render the MCP glyph at the size the sidebar asks for.
 * @param props - the sidebar's icon share: the requested edge in pixels.
 * @returns the icon element.
 */
export function McpPanelIcon({ size }) {
    return (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [_jsx("rect", { x: "3", y: "4", width: "7", height: "7", rx: "1.5" }), _jsx("rect", { x: "14", y: "4", width: "7", height: "7", rx: "1.5" }), _jsx("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1.5" }), _jsx("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1.5" })] }));
}

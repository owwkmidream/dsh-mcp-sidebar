/**
 * Stable user-facing failures surfaced through the `mcp` typert remote. The
 * typert gateway folds a thrown error carrying a `code` property into the
 * `{ ok: false, error: { code, message, details } }` result branch.
 *
 * @module @owwkmidream/dsh-mcp-sidebar
 */
/** Validation failure with a stable code, surfaced to the settings UI. */
export declare class McpInputError extends Error {
    readonly code: string;
    constructor(code: string, message: string);
}

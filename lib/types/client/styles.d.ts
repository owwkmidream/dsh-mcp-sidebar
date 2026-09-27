/**
 * Theme-aware stylesheet for the MCP manager panel.
 *
 * Mirrors the shipped Plugins page (`ui-plugin-manager`) so the panel reads as
 * part of DSH rather than a bolt-on: a centred column capped at 960px, the same
 * 28px head inset, 13px body type, 32px buttons on `--dsw-radius-md`, and flat
 * bordered rows instead of boxed cards. All colors come from the `--dsw-alias-*`
 * design tokens, so the page follows the active light/dark theme.
 *
 * The CSS is injected once by the client plugin body (`injectStyles`) using the
 * same `data-plugin-css` mechanism the official client bundles use.
 *
 * @module @owwkmidream/dsh-mcp-sidebar
 */
/** Scoped class names referenced by the page components. */
export declare const C: {
    readonly wrap: "dshmcp-wrap";
    readonly head: "dshmcp-head";
    readonly title: "dshmcp-title";
    readonly desc: "dshmcp-desc";
    readonly toolbar: "dshmcp-toolbar";
    readonly list: "dshmcp-list";
    readonly row: "dshmcp-row";
    readonly rowMain: "dshmcp-row-main";
    readonly name: "dshmcp-name";
    readonly meta: "dshmcp-meta";
    readonly badge: "dshmcp-badge";
    readonly badgeOk: "dshmcp-badge-ok";
    readonly badgeOff: "dshmcp-badge-off";
    readonly badgeError: "dshmcp-badge-error";
    readonly badgeInfo: "dshmcp-badge-info";
    readonly btn: "dshmcp-btn";
    readonly btnPrimary: "dshmcp-btn-primary";
    readonly btnDanger: "dshmcp-btn-danger";
    readonly rowActions: "dshmcp-row-actions";
    readonly field: "dshmcp-field";
    readonly label: "dshmcp-label";
    readonly hint: "dshmcp-hint";
    readonly input: "dshmcp-input";
    readonly select: "dshmcp-select";
    readonly textarea: "dshmcp-textarea";
    readonly checkbox: "dshmcp-checkbox";
    readonly error: "dshmcp-error";
    readonly empty: "dshmcp-empty";
    readonly editorDialog: "dshmcp-editor-dialog";
    readonly editorDialogContent: "dshmcp-editor-dialog-content";
    readonly editorBody: "dshmcp-editor-body";
    readonly footer: "dshmcp-footer";
    readonly notice: "dshmcp-notice";
};
/** Inject the stylesheet once (idempotent), mirroring the official CSS-module mechanism. */
export declare function injectStyles(): void;

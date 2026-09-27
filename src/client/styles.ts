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
 * @module @owwkmidream/dsh-plugin-setting-mcp
 */

/** Scoped class names referenced by the page components. */
export const C = {
	wrap: "dshmcp-wrap",
	head: "dshmcp-head",
	title: "dshmcp-title",
	desc: "dshmcp-desc",
	toolbar: "dshmcp-toolbar",
	list: "dshmcp-list",
	row: "dshmcp-row",
	rowMain: "dshmcp-row-main",
	name: "dshmcp-name",
	meta: "dshmcp-meta",
	badge: "dshmcp-badge",
	badgeOk: "dshmcp-badge-ok",
	badgeOff: "dshmcp-badge-off",
	badgeError: "dshmcp-badge-error",
	badgeInfo: "dshmcp-badge-info",
	btn: "dshmcp-btn",
	btnPrimary: "dshmcp-btn-primary",
	btnDanger: "dshmcp-btn-danger",
	rowActions: "dshmcp-row-actions",
	field: "dshmcp-field",
	label: "dshmcp-label",
	hint: "dshmcp-hint",
	input: "dshmcp-input",
	select: "dshmcp-select",
	textarea: "dshmcp-textarea",
	checkbox: "dshmcp-checkbox",
	error: "dshmcp-error",
	empty: "dshmcp-empty",
	editorDialog: "dshmcp-editor-dialog",
	editorDialogContent: "dshmcp-editor-dialog-content",
	editorBody: "dshmcp-editor-body",
	footer: "dshmcp-footer",
	notice: "dshmcp-notice",
} as const;

const css = `
.dshmcp-wrap{display:flex;flex-direction:column;align-items:center;gap:24px;box-sizing:border-box;height:100%;overflow:auto;padding:0 clamp(24px,4vw,48px) 48px;color:var(--dsw-alias-label-primary)}
.dshmcp-wrap>*{width:100%;max-width:960px}

.dshmcp-head{display:flex;flex-direction:column;gap:4px;box-sizing:border-box;padding-top:28px}
.dshmcp-title{margin:0;font-size:20px;font-weight:500;line-height:28px}
.dshmcp-desc{margin:0;font-size:13px;line-height:20px;color:var(--dsw-alias-label-secondary)}

.dshmcp-toolbar{display:flex;align-items:center;gap:12px}
.dshmcp-list{display:flex;flex-direction:column;gap:8px}

.dshmcp-row{display:flex;align-items:center;gap:12px;box-sizing:border-box;padding:12px 16px;border-radius:var(--dsw-radius-xl);border:1px solid var(--dsw-alias-border-l3);background:var(--dsw-alias-bg-base)}
.dshmcp-row-main{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.dshmcp-name{font-size:14px;font-weight:400;line-height:20px;color:var(--dsw-alias-label-primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dshmcp-meta{font-size:12px;line-height:18px;color:var(--dsw-alias-label-tertiary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}

.dshmcp-badge{display:inline-flex;flex:none;align-items:center;height:20px;padding:0 6px;border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-button-ghost-active-fill);color:var(--dsw-alias-label-caption);font-size:11px;line-height:20px}
.dshmcp-badge-ok{background:var(--dsw-alias-state-success-tertiary);color:var(--dsw-alias-state-success-primary)}
.dshmcp-badge-off{background:var(--dsw-alias-button-ghost-active-fill);color:var(--dsw-alias-label-caption)}
.dshmcp-badge-error{background:var(--dsw-alias-interactive-bg-hover-danger);color:var(--dsw-alias-state-error-primary)}
.dshmcp-badge-info{background:var(--dsw-alias-button-ghost-active-fill);color:var(--dsw-alias-label-secondary)}

.dshmcp-btn{display:inline-flex;flex:none;align-items:center;height:32px;padding:0 12px;border:1px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-md);background:transparent;color:var(--dsw-alias-label-secondary);font-family:inherit;font-size:13px;line-height:20px;cursor:pointer;transition:background .12s ease}
.dshmcp-btn:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}
.dshmcp-btn:disabled{opacity:.4;cursor:default}
.dshmcp-btn-primary{border-color:transparent;background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-button-primary-dimmed)}
.dshmcp-btn-primary:hover:not(:disabled){background:var(--dsw-alias-button-primary-hover)}
.dshmcp-btn-danger{color:var(--dsw-alias-state-error-primary);border-color:color-mix(in srgb,var(--dsw-alias-state-error-primary) 30%,transparent);--dsw-alias-interactive-bg-hover:color-mix(in srgb,var(--dsw-alias-state-error-primary) 8%,transparent)}
.dshmcp-row-actions{display:flex;flex:none;align-items:center;gap:8px}

.dshmcp-field{display:flex;flex-direction:column;gap:6px}
.dshmcp-label{font-size:13px;line-height:20px;color:var(--dsw-alias-label-secondary)}
.dshmcp-hint{font-size:12px;line-height:18px;color:var(--dsw-alias-label-tertiary)}
.dshmcp-input,.dshmcp-select,.dshmcp-textarea{box-sizing:border-box;width:100%;padding:0 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-md);background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font:inherit;font-size:13px;line-height:20px}
.dshmcp-input,.dshmcp-select{height:32px}
.dshmcp-textarea{min-height:72px;padding:6px 10px;resize:vertical;font-family:var(--dsh-font-mono,monospace);font-size:12px;line-height:18px}
.dshmcp-checkbox{display:flex;align-items:center;gap:8px;font-size:13px;line-height:20px;color:var(--dsw-alias-label-secondary)}
.dshmcp-checkbox input{accent-color:var(--dsw-alias-button-primary-fill)}

.dshmcp-error{box-sizing:border-box;padding:8px 12px;border-radius:var(--dsw-radius-md);background:var(--dsw-alias-interactive-bg-hover-danger);color:var(--dsw-alias-state-error-primary);font-size:13px;line-height:20px}
.dshmcp-empty{display:flex;flex-direction:column;align-items:center;gap:6px;padding:40px 16px;color:var(--dsw-alias-label-tertiary);font-size:13px;line-height:20px;text-align:center}

/* The editor dialog. The shipped Modal caps itself at min(380px, 100%), which
   is too narrow for a server form, and its card does not scroll. Widen it and
   make the content region the scroller (through Modal's own contentClassName
   seat), so a long form never pushes its save button off-screen. */
.dshmcp-editor-dialog{width:min(560px,100%);max-height:calc(100vh - 96px)}
.dshmcp-editor-dialog-content{flex:1;min-height:0;overflow:auto}
.dshmcp-editor-body{display:flex;flex-direction:column;gap:14px}

.dshmcp-footer{display:flex;align-items:center;gap:12px}
.dshmcp-notice{flex:1;font-size:13px;line-height:20px;color:var(--dsw-alias-state-success-primary)}
`;

/** Inject the stylesheet once (idempotent), mirroring the official CSS-module mechanism. */
export function injectStyles(): void {
	if (typeof document === "undefined") return;
	const tagId = "@owwkmidream/dsh-plugin-setting-mcp/panel.css";
	if (document.querySelector(`style[data-plugin-css=${JSON.stringify(tagId)}]`) !== null) return;
	const tag = document.createElement("style");
	tag.dataset.plugin = "@owwkmidream/dsh-plugin-setting-mcp";
	tag.dataset.pluginCss = tagId;
	tag.textContent = css;
	document.head.appendChild(tag);
}

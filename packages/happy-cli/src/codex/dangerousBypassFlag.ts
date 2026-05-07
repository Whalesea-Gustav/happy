export const CODEX_DANGEROUS_BYPASS_FLAGS = new Set([
    '--dangerously-bypass-approvals-and-sandbox',
    '--dangerously-skip-permissions',
]);

export function hasCodexDangerousBypassFlag(args: string[]): boolean {
    return args.some((arg) => CODEX_DANGEROUS_BYPASS_FLAGS.has(arg));
}

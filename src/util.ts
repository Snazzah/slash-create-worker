// Dev guild stuff lives here so syncing doesn't cause TS errors
declare const COMMANDS_DEV_GUILD: string | undefined;
export const devGuild = typeof COMMANDS_DEV_GUILD !== 'undefined' ? [COMMANDS_DEV_GUILD] : undefined;

export function cutoffText(text: string, limit = 2000) {
  return text.length > limit ? text.slice(0, limit - 1) + '…' : text;
}

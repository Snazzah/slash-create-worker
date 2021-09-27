import path from 'path';
import { SlashCreator } from 'slash-create';
import fs from 'fs';

const envFile = path.join(__dirname, '..', `${process.argv[2] || ''}.env`);
if (!fs.existsSync(envFile)) {
  console.error(`The ${process.argv[2] || ''}.env file does not exist. Create one before syncing.`);
  process.exit(1);
}

require('dotenv').config({ path: envFile });
// @ts-ignore put this to global so it works normally
global.COMMANDS_DEV_GUILD = process.env.COMMANDS_DEV_GUILD as string;
import { commands } from '../src/commands';

export const creator = new SlashCreator({
  applicationID: process.env.DISCORD_APP_ID as string,
  publicKey: process.env.DISCORD_PUBLIC_KEY as string,
  token: process.env.DISCORD_BOT_TOKEN as string
})
  .registerCommands(commands)
  .syncCommands();

creator.on('error', (error) => console.error(error));
creator.on('debug', (message) => console.log(message));
creator.on('synced', () => console.info('Synced commands.'));

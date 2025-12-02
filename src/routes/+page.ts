import { open } from '@tauri-apps/plugin-dialog';

export const _src = await open({
  multiple: false,
  directory: false,
  filters: [{ name: 'Images', extensions: ['png', 'jpg', 'jpeg'] }]
});
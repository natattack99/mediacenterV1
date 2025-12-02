import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { open } from '@tauri-apps/plugin-dialog';

const src = await open({
  multiple: false,
  directory: false,
  filters: [{ name: 'Images', extensions: ['png', 'jpg', 'jpeg'] }]
});

export const load: PageLoad = ({ params }) => {
  
  return { src };

  error(0, "I don't know what to put as an error message");
}
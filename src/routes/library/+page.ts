import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { _src as src } from '../+page';

export const load: PageLoad = ({ params }) => {
  
  return { src };

  error(404, "Not found");
}
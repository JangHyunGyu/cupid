import manifest from '../config/public-images.json';
import { serveImage } from './_lib/public-images.js';
export const onRequest = context => serveImage(context, manifest);

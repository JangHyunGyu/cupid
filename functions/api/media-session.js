import { createMediaSession } from '../_lib/media-session.js';

export async function onRequestPost({ request, env }) {
  return createMediaSession(request, env);
}

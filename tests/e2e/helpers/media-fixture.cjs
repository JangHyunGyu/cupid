'use strict';

// Protected art needs a media session and acknowledged unlock grants. Specs that stub every
// POST must let these two endpoints reach tests/static-server.cjs, which emulates them.
const MEDIA_FIXTURE_PATHS = new Set(['/api/media-session', '/api/gallery/unlocks']);

function isMediaFixtureRequest(request) {
    return MEDIA_FIXTURE_PATHS.has(new URL(request.url()).pathname);
}

module.exports = { isMediaFixtureRequest };

import { createBucketClient } from '@cosmicjs/sdk';

if (!process.env.COSMIC_BUCKET_SLUG) {
    throw new Error("Missing COSMIC_BUCKET_SLUG environment variable");
}
if (!process.env.COSMIC_READ_KEY) {
    throw new Error("Missing COSMIC_READ_KEY environment variable");
}
if (!process.env.COSMIC_WRITE_KEY) {
    throw new Error("Missing COSMIC_WRITE_KEY environment variable");
}

export const cosmic = createBucketClient({
    bucketSlug: process.env.COSMIC_BUCKET_SLUG,
    readKey: process.env.COSMIC_READ_KEY,
    writeKey: process.env.COSMIC_WRITE_KEY
});

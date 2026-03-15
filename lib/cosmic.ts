import Cosmic from 'cosmicjs';

if (!process.env.COSMIC_BUCKET_SLUG) {
    throw new Error("Missing COSMIC_BUCKET_SLUG environment variable")
}

const client = Cosmic();

export const cosmic = client.bucket({
    slug: process.env.COSMIC_BUCKET_SLUG,
    read_key: process.env.COSMIC_READ_KEY,
});
import Cosmic from 'cosmicjs';
import 'dotenv/config';

if (!process.env.COSMIC_BUCKET_SLUG) {
    throw new Error("Missing COSMIC_BUCKET_SLUG environment variable")
}

export const cosmic = Cosmic({
    bucket: process.env.COSMIC_BUCKET_SLUG,
    read_key: process.env.COSMIC_READ_KEY,
    write_key: process.env.COSMIC_WRITE_KEY
})

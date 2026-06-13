import { createBucketClient } from '@cosmicjs/sdk';

const requiredCosmicEnv = ["COSMIC_BUCKET_SLUG", "COSMIC_READ_KEY"] as const;

export const getMissingCosmicEnv = () =>
  requiredCosmicEnv.filter((key) => !process.env[key]);

export const assertCosmicReadEnv = () => {
  const missing = getMissingCosmicEnv();

  if (missing.length > 0) {
    throw new Error(`Missing Cosmic environment variable(s): ${missing.join(", ")}`);
  }
};

const createCosmicClient = () => {
  assertCosmicReadEnv();

  return createBucketClient({
    bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
    readKey: process.env.COSMIC_READ_KEY as string,
    writeKey: process.env.COSMIC_WRITE_KEY,
  });
};

export const cosmic = new Proxy({} as ReturnType<typeof createBucketClient>, {
  get(_target, prop, receiver) {
    return Reflect.get(createCosmicClient(), prop, receiver);
  },
});

export const hasCosmicWriteKey = () => Boolean(process.env.COSMIC_WRITE_KEY);

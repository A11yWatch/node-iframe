import { fetchFrame } from "../src/iframe";
import { WEBSITE_NOT_FOUND_TEMPLATE } from "../src/templates";

const url = process.env.API_URL || "https://www.drake.com";

test("iframe renders properly", async () => {
  const res = await fetchFrame({ url });

  return expect(res).not.toBe(WEBSITE_NOT_FOUND_TEMPLATE);
});

test("error page renders properly", async () => {
  const res = await fetchFrame({ url: `/iframe?url=${url}` });

  return expect(res).toBe(WEBSITE_NOT_FOUND_TEMPLATE);
});
import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '60a508d9251860908af2e11917fbbe35e11f2ae1', queries });
export default client;
  
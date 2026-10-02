#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "weworkremotely",
  boardId: "weworkremotely-official",
  domain: "weworkremotely.com",
  npmName: "zc-weworkremotely-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});

#!/bin/bash

# Restore nuxt.config.ts to its NUXT_ORIGINal state
echo "Restoring nuxt.config.ts to its NUXT_ORIGINal state"

mv -f nuxt.config.ts.bak nuxt.config.ts

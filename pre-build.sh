#!/bin/bash

echo "Running pre-build.sh"

# Check if .dev.vars file exists
if [ -f .dev.vars ]; then
  # Load environment variables from .dev.vars file
  echo "Loading environment variables from .dev.vars"
  source .dev.vars
fi

# Save a backup of nuxt.config.ts
echo "Saving a backup of nuxt.config.ts"
cp nuxt.config.ts nuxt.config.ts.bak

# Replace environment variables in nuxt.config.ts
echo "Replacing environment variables in nuxt.config.ts"
echo ${NUXT_SECRET}
echo ${NUXT_GITHUB_CLIENT_ID}
echo ${NUXT_GITHUB_CLIENT_SECRET}
echo ${NUXT_ORIGIN}

sed -i "s|process.env.NUXT_SECRET|\"${NUXT_SECRET}\"|g" nuxt.config.ts
sed -i "s|process.env.NUXT_GITHUB_CLIENT_ID|\"${NUXT_GITHUB_CLIENT_ID}\"|g" nuxt.config.ts
sed -i "s|process.env.NUXT_GITHUB_CLIENT_SECRET|\"${NUXT_GITHUB_CLIENT_SECRET}\"|g" nuxt.config.ts
sed -i "s|process.env.CF_PAGES_URL|\"${CF_PAGES_URL}\"|g" nuxt.config.ts
sed -i "s|process.env.NUXT_ORIGIN|\"${NUXT_ORIGIN}\"|g" nuxt.config.ts

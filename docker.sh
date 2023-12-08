#!/bin/bash

docker build --rm \
    --build-arg NODE_ENV=development \
    --build-arg NEXT_PUBLIC_API_HOST=https://dev.kartonah.com/api/v2/ \
    --build-arg NEXT_PUBLIC_UPLOAD_HOST=https://dev.kartonah.com/uploads \
    --build-arg NEXT_PUBLIC_GOOGLE_ANALYTICS=UA-165590944-2 \
    -f packages/web/.docker/Dockerfile \
    -t kartonah-website:latest .

docker run -it --rm \
    -p 3000:3000 \
    --name kartonah-website \
    kartonah-website

exit 0

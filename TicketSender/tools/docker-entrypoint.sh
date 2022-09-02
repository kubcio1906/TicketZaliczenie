#!/bin/sh

# Abort on any error (including if wait-for-it fails).
set -e

# Wait for the container to be up.
if [ -n "$CHECK_HOST" ]; then
  /app/wait-for-it.sh "$CHECK_HOST:$CHECK_PORT"
fi

# Run the main container command.
exec "$@"
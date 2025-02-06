#!/bin/bash

# Find and kill the existing process
pid=$(ps aux | grep "php artisan inertia:start-ssr" | grep -v grep | awk '{print $2}')
if [ ! -z "$pid" ]; then
    kill -9 $pid
    echo "Stopped inertia:start-ssr process with PID $pid"
fi

# Start the process again
nohup php artisan inertia:start-ssr > /dev/null 2>&1 &
echo "Started inertia:start-ssr process"

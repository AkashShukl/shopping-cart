import React, { lazy } from 'react'

export function lazyLoadRoutes(LazyElement: any) {
  const lazy = (React as any).lazy
  const Suspense = (React as any).Suspense
  return (
    <Suspense fallback="Loading...">
      <LazyElement />
    </Suspense>
  )
}

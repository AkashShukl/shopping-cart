import React, { lazy } from 'react'

export function lazyLoadRoutes(LazyElement: any) {
    const lazy = (React as any).lazy
    const Suspense = (React as any).Suspense
    // const LazyElement = lazy(() => import(`../pages/${componentName}.tsx`))

    return (
        <Suspense fallback="Loading...">
            <LazyElement />
        </Suspense>
    )
}

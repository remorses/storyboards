import React from 'react'
import * as exported from '@/../example-package/src/anotherStory copy.vitro'
import { default as GlobalWrapper } from '@/../@vitro/ui/src/default_wrapper'
import experimentsMap from '@/experimentsMap'
import { StoryPage } from '@vitro/ui/src'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/anotherStory copy.vitro.tsx'

export default function Page() {
    return (
        <StoryPage
            experimentsMap={experimentsMap}
            GlobalWrapper={GlobalWrapper}
            absolutePath={absolutePath}
            storyExports={exported}
        />
    )
}
# next-image-with-state

This solution helps in improving the UX by extending the Nextjs' Image component and further handling cases when an image

1. is loading (displays a skeleton loader when loading)
2. throws an error (when browser fails to load the image)

## Usage

You can use <ImageWithState /> the same way as you use Next's <Image /> component

This package further adds 2 props

1. fallback (string/required) - Pass path of the fallback image
2. debug (boolean/optional) - Makes it easy to see how the SkeletonLoader is positioned and styled

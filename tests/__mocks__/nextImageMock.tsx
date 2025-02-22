import * as React from 'react'

const NextImageMock = React.forwardRef(({
  src,
  alt,
  className,
}: {
  src?: string
  alt?: string
  className?: string
}) => {
  return <img src={src} alt={alt} className={className} />
})

NextImageMock.displayName = 'NextImageMock'

export default NextImageMock
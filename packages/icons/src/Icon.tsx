import type { CSSProperties, SVGAttributes } from 'react'
import type { IconName } from './types'

interface IconProps extends SVGAttributes<SVGSVGElement> {
  /** Icon name — must match the filename (without .svg) in packages/icons/src/svg/ */
  name: IconName
  /** Width and height in px, or any CSS size string (e.g. "1.5em"). Default: 24 */
  size?: number | string
  style?: CSSProperties
  /** Accessible label. When omitted the icon is aria-hidden (decorative). */
  title?: string
}

/**
 * Renders a custom brand icon via SVG <use>.
 * Requires <SpriteSheet /> to be rendered once in the layout.
 *
 * Color is controlled by `fill="currentColor"` in the source SVG —
 * use Tailwind text-color classes (e.g. className="text-primary").
 *
 * @example
 * <Icon name="logo" size={40} className="text-primary" />
 * <Icon name="tooth" size={24} title="Dental care" />
 */
export function Icon({
  name,
  size = 24,
  className,
  style,
  title,
  ...rest
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      style={style}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      {...rest}
    >
      {title && <title>{title}</title>}
      <use href={`#icon-${name}`} />
    </svg>
  )
}

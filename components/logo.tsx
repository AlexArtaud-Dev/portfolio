/** Project logo served from public/logos/<name>.svg */
export function Logo({ name, size = 48, className }: { name: string; size?: number; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export, local SVGs: next/image adds nothing here
    <img
      src={`/logos/${name}.svg`}
      alt=""
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size }}
      loading="lazy"
    />
  );
}

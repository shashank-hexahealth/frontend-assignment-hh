import Link from "next/link";

export default function LinkButton({
  navigateTo = "#",
  className = "",
  label,
}) {
  return (
    <Link href={navigateTo} className={`link-cls ${className}`}>
      {label}
    </Link>
  );
}

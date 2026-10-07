import Link from "next/link";

export default function NotFound() {
  return (
    <section className="site-width missing-page">
      <p className="eyebrow">404 / A missing panel</p>
      <h1>This page wandered off.</h1>
      <p>Let’s get you back to the story.</p>
      <Link href="/" className="ink-button">
        Back to the homepage
      </Link>
    </section>
  );
}

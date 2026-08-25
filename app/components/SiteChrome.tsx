import Link from "next/link";

export function SiteHeader() {
  return <header className="site-header"><Link className="brand" href="/" aria-label="JHK Properties home"><span className="brand-mark">JHK</span><span>PROPERTIES</span></Link><nav aria-label="Main navigation"><Link href="/property-management">Property management</Link><Link href="/tenants">Tenants</Link></nav><a className="header-action" href="mailto:admin@jhkproperties.com">Contact us <span>↗</span></a></header>;
}

export function SiteFooter() {
  return <footer><div className="brand footer-brand"><span className="brand-mark">JHK</span><span>PROPERTIES</span></div><p>Thoughtful homes. Dependable management.</p><div><address>JHK Properties<br />16 Middle Neck Rd, #752<br />Great Neck, NY 11021</address><a href="tel:+15165643889">(516) 564-3889</a><a href="mailto:admin@jhkproperties.com">admin@jhkproperties.com</a><span>© {new Date().getFullYear()} JHK Properties</span></div></footer>;
}

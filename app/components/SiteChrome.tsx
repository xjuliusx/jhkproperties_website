import Link from "next/link";

export function SiteHeader() {
  return <header className="site-header"><Link className="brand" href="/" aria-label="JHK Properties home" data-goatcounter-click="brand-home"><span className="brand-mark">JHK</span><span>PROPERTIES</span></Link><nav aria-label="Main navigation"><Link href="/" data-goatcounter-click="nav-home">Home</Link><Link href="/property-management" data-goatcounter-click="nav-property-management">Property management</Link><Link href="/tenants" data-goatcounter-click="nav-tenants">Tenants</Link></nav><a className="header-action" href="mailto:management@jhkproperties.com" data-goatcounter-click="contact-header-email">Contact us <span>↗</span></a></header>;
}

export function SiteFooter() {
  return <footer><div className="footer-identity"><div className="brand footer-brand"><span className="brand-mark">JHK</span><span>PROPERTIES</span></div><span className="copyright">© {new Date().getFullYear()} JHK Properties</span></div><p>Thoughtful homes. Dependable management.</p><div><address>JHK Properties<br />16 Middle Neck Rd, #752<br />Great Neck, NY 11021</address><a href="tel:+15165643889" data-goatcounter-click="contact-footer-phone">(516) 564-3889</a><a href="mailto:management@jhkproperties.com" data-goatcounter-click="contact-footer-email">management@jhkproperties.com</a></div></footer>;
}

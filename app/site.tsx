"use client";

import Link from "next/link";
import { useState } from "react";

const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

const links = [
  ["/", "Inicio"],
  ["/nosotros", "Nosotros"],
  ["/servicios", "Servicios"],
  ["/ubicacion", "Ubicación"],
  ["/contacto", "Contacto"],
] as const;

const hours = [
  ["Lunes", "8:00–12:00 · 16:00–20:00"],
  ["Martes", "8:00–12:00 · 16:00–20:00"],
  ["Miércoles", "8:00–12:00 · 16:00–20:00"],
  ["Jueves", "8:00–12:00 · 16:00–20:00"],
  ["Viernes", "8:00–12:00 · 16:00–20:00"],
  ["Sábado", "8:00–12:00"],
  ["Domingo", "Cerrado"],
] as const;

type Page = "inicio" | "nosotros" | "servicios" | "ubicacion" | "contacto";

function Icon({ children }: { children: React.ReactNode }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

function Header({ page }: { page: Page }) {
  const [open, setOpen] = useState(false);
  const active = page === "inicio" ? "/" : `/${page}`;
  return (
    <header className="header">
      <div className="nav-wrap">
        <Link href="/" className="brand" aria-label="Farmacia Mascardi, inicio">
          <img src={asset("/images/logo.png")} alt="Farmacia Mascardi" />
        </Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-menu">
          <span /><span /><span /><b className="sr-only">Abrir menú</b>
        </button>
        <nav id="main-menu" className={open ? "nav open" : "nav"} aria-label="Navegación principal">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className={active === href ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <a className="nav-wa" href="https://api.whatsapp.com/send?phone=542325564035" target="_blank" rel="noreferrer">Escribinos</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div><img src={asset("/images/logo.png")} alt="Farmacia Mascardi" className="footer-logo" /><p>Atención profesional y cercana para cuidar tu salud todos los días.</p></div>
        <div><h3>Encontranos</h3><p>Urquiza 1073<br />San Andrés de Giles, Buenos Aires</p><a href="https://maps.app.goo.gl/UE5x18pAqbF9UB287" target="_blank" rel="noreferrer">Abrir en Google Maps ↗</a></div>
        <div><h3>Contacto</h3><a href="tel:+542325564035">+54 9 2325 56-4035</a><div className="socials"><a href="https://www.instagram.com/mascardi.farmacia/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.facebook.com/profile.php?id=100094534669076" target="_blank" rel="noreferrer">Facebook</a></div></div>
      </div>
      <div className="legal">© {new Date().getFullYear()} Farmacia Mascardi · La información del sitio no reemplaza la consulta con un profesional de la salud.</div>
    </footer>
  );
}

function WhatsApp() {
  return <a className="wa-float" href="https://api.whatsapp.com/send?phone=542325564035" target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><svg viewBox="0 0 32 32"><path d="M16 3a13 13 0 0 0-11.1 19.8L3 29l6.4-1.7A13 13 0 1 0 16 3Zm0 23.6c-2.1 0-4.1-.6-5.8-1.7l-.4-.2-3.8 1 1-3.7-.3-.4a10.5 10.5 0 1 1 9.3 5Zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.5 8.5 0 0 1-4.2-3.7c-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2 2.2.9 3.1 1 4.2.8.7-.1 1.9-.8 2.2-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.3-.6-.4Z" /></svg></a>;
}

function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-hero"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>;
}

function Home() {
  return <>
    <section className="home-hero">
      <img src={asset("/images/fachada.jpg")} alt="Fachada de Farmacia Mascardi en Urquiza 1073" />
      <div className="hero-shade" />
      <div className="hero-content"><span className="eyebrow light">Tu farmacia de confianza</span><h1>Profesionales cerca.<br /><em>Siempre.</em></h1><p>Atención responsable, calidez humana y el compromiso de un equipo que conoce y acompaña a su comunidad.</p><div className="actions"><a className="button primary" href="https://api.whatsapp.com/send?phone=542325564035" target="_blank" rel="noreferrer">Consultar por WhatsApp</a><Link className="button ghost" href="/ubicacion">Cómo llegar</Link></div></div>
      <div className="hero-info"><span><b>Hoy</b> Consultá nuestros horarios</span><span><b>Dirección</b> Urquiza 1073</span><span><b>Teléfono</b> +54 9 2325 56-4035</span></div>
    </section>
    <section className="intro section"><div><span className="eyebrow">Salud y bienestar</span><h2>Una farmacia actual,<br />con atención de siempre.</h2></div><div><p>En Farmacia Mascardi combinamos experiencia, conocimiento y una atención personalizada. Queremos que cada persona se sienta escuchada y bien orientada.</p><Link className="text-link" href="/nosotros">Conocé nuestro equipo <span>→</span></Link></div></section>
    <section className="service-preview section"><article><Icon>01</Icon><h3>Atención farmacéutica</h3><p>Orientación clara y responsable para acompañarte en el cuidado de tu salud.</p></article><article><Icon>02</Icon><h3>Cuidado integral</h3><p>Medicamentos, dermocosmética, perfumería y productos de cuidado personal.</p></article><article><Icon>03</Icon><h3>Compromiso local</h3><p>Un equipo estable y experimentado, presente en San Andrés de Giles.</p></article></section>
    <section className="image-band"><img src={asset("/images/interior-principal.jpg")} alt="Interior amplio y luminoso de Farmacia Mascardi" /><div><span className="eyebrow light">Estamos para ayudarte</span><h2>Calidad profesional.<br />Trato humano.</h2><Link className="button white" href="/servicios">Ver servicios</Link></div></section>
  </>;
}

function Nosotros() {
  return <><PageHero eyebrow="Sobre nosotros" title="La confianza se construye todos los días." text="Una farmacia de cercanía respaldada por experiencia, actualización y un equipo que conoce a su comunidad." />
    <section className="split section"><div><img src={asset("/images/interior-1.jpg")} alt="Sector de atención de Farmacia Mascardi" /></div><div className="copy"><span className="eyebrow">Nuestra forma de trabajar</span><h2>Experiencia que se siente en cada atención.</h2><p>Farmacia Mascardi está dirigida por Edgardo Tomás Mascardi, junto a un equipo profesional con amplia experiencia y una trayectoria compartida dentro de la farmacia.</p><p>Trabajamos con responsabilidad, escucha y actualización permanente para brindar una atención confiable, ágil y cercana.</p><div className="quote">“Cuidar también es escuchar, orientar y estar presentes.”</div></div></section>
    <section className="values section"><div><span>01</span><h3>Profesionalismo</h3><p>Conocimiento y criterio en cada consulta.</p></div><div><span>02</span><h3>Cercanía</h3><p>Un trato amable, humano y personalizado.</p></div><div><span>03</span><h3>Compromiso</h3><p>Constancia y cumplimiento al servicio de la comunidad.</p></div></section></>;
}

function Servicios() {
  return <><PageHero eyebrow="Nuestros servicios" title="Todo lo que necesitás, con asesoramiento profesional." text="Una propuesta integral para la salud, el bienestar y el cuidado diario." />
    <section className="service-grid section"><article><span>01</span><h2>Atención farmacéutica</h2><p>Orientación personalizada, acompañamiento y respuestas claras para el uso responsable de medicamentos.</p></article><article><span>02</span><h2>Medicamentos</h2><p>Atención de recetas y una amplia variedad de medicamentos de venta libre y bajo receta.</p></article><article><span>03</span><h2>Dermocosmética</h2><p>Productos seleccionados para el cuidado de la piel, con asesoramiento según tus necesidades.</p></article><article><span>04</span><h2>Perfumería</h2><p>Fragancias, higiene personal y opciones para regalar y disfrutar.</p></article><article><span>05</span><h2>Cuidado personal</h2><p>Accesorios, protección solar, higiene y productos para acompañar cada etapa.</p></article><article className="photo-card"><img src={asset("/images/interior-2.jpg")} alt="Sector de perfumería de Farmacia Mascardi" /></article></section>
    <section className="notice section"><div><h2>¿Buscás un producto?</h2><p>Escribinos por WhatsApp y consultá disponibilidad antes de acercarte.</p></div><a className="button primary" href="https://api.whatsapp.com/send?phone=542325564035" target="_blank" rel="noreferrer">Hacer una consulta</a></section></>;
}

function Ubicacion() {
  return <><PageHero eyebrow="Ubicación y horarios" title="Siempre cerca, en San Andrés de Giles." text="Te esperamos en Urquiza 1073. Consultá nuestros horarios y encontrá la mejor ruta para llegar." />
    <section className="location section"><div className="location-photo"><img src={asset("/images/fachada.jpg")} alt="Fachada de Farmacia Mascardi" /><div className="pin">+</div></div><div className="location-data"><span className="eyebrow">Dónde estamos</span><h2>Urquiza 1073</h2><p>San Andrés de Giles<br />Buenos Aires, Argentina</p><a className="button primary" href="https://maps.app.goo.gl/UE5x18pAqbF9UB287" target="_blank" rel="noreferrer">Abrir en Google Maps</a><small>Si el marcador compartido no se muestra con precisión, buscá “Farmacia Mascardi” en Google Maps.</small></div></section>
    <section className="hours section"><div><span className="eyebrow">Horarios de atención</span><h2>Estamos cuando<br />nos necesitás.</h2><p>Para feriados o cambios excepcionales, revisá nuestras redes sociales o escribinos.</p></div><div className="hours-list">{hours.map(([day, time]) => <div key={day}><b>{day}</b><span>{time}</span></div>)}</div></section></>;
}

function Contacto() {
  return <><PageHero eyebrow="Contacto" title="Hablemos." text="Estamos para responder tus consultas y acompañarte con atención profesional." />
    <section className="contact-cards section"><a href="https://api.whatsapp.com/send?phone=542325564035" target="_blank" rel="noreferrer"><Icon>↗</Icon><span>WhatsApp</span><h2>+54 9 2325<br />56-4035</h2><p>Consultas y disponibilidad</p></a><a href="tel:+542325564035"><Icon>⌕</Icon><span>Teléfono</span><h2>2325 56-4035</h2><p>Llamanos en horario de atención</p></a><a href="https://maps.app.goo.gl/UE5x18pAqbF9UB287" target="_blank" rel="noreferrer"><Icon>⌖</Icon><span>Dirección</span><h2>Urquiza 1073</h2><p>San Andrés de Giles</p></a></section>
    <section className="social-section section"><div><span className="eyebrow">Seguinos</span><h2>Novedades, información y horarios especiales.</h2></div><div><a href="https://www.instagram.com/mascardi.farmacia/" target="_blank" rel="noreferrer">Instagram <span>↗</span></a><a href="https://www.facebook.com/profile.php?id=100094534669076" target="_blank" rel="noreferrer">Facebook <span>↗</span></a></div></section>
    <section className="contact-image"><img src={asset("/images/interior-3.jpg")} alt="Mostrador de atención de Farmacia Mascardi" /></section></>;
}

export default function Site({ page }: { page: Page }) {
  const content = page === "inicio" ? <Home /> : page === "nosotros" ? <Nosotros /> : page === "servicios" ? <Servicios /> : page === "ubicacion" ? <Ubicacion /> : <Contacto />;
  return <><Header page={page} /><main>{content}</main><Footer /><WhatsApp /></>;
}

import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { useInView } from "../hooks/useInView";

const ContactSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">Contact</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h3>
        <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
          Open to opportunities in power electronics, EV systems and embedded testing. Feel free to reach out!
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          {[
            { icon: Mail, label: "Email", value: "mail@pranitha.de", href: "mailto:mail@pranitha.de" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/pranithamv", href: "https://linkedin.com/in/pranithamv" },
            { icon: Phone, label: "Phone", value: "0176 27831930", href: "tel:017627831930" },
            { icon: MapPin, label: "Location", value: "Stuttgart, Germany", href: "#" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:glow-border transition-all duration-300 text-left group"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{item.label}</p>
                <p className="text-sm text-foreground">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

  );
};

export default ContactSection;

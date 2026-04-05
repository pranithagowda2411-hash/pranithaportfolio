const CircuitBackground = () => {
  const traceColor = "hsl(190, 57%, 37%)";
  const traceOpacity = 0.30;
  const faintOpacity = 0.20;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ===== LEFT SIDE CIRCUIT CLUSTER ===== */}
        {/* Trace with bends */}
        <polyline
          points="0,140 40,140 40,80 100,80 100,180 160,180"
          fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1"
        />
        {/* Via pad at bend */}
        <circle cx="40" cy="80" r="3" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
        <circle cx="100" cy="180" r="3" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />

        {/* IC chip - left top */}
        <rect x="20" y="280" width="60" height="40" rx="2" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
        {/* Chip pins left */}
        <line x1="20" y1="290" x2="8" y2="290" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
        <line x1="20" y1="300" x2="0" y2="300" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
        <line x1="20" y1="310" x2="8" y2="310" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
        {/* Chip pins right */}
        <line x1="80" y1="290" x2="120" y2="290" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
        <line x1="80" y1="300" x2="130" y2="300" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
        <line x1="80" y1="310" x2="110" y2="310" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
        {/* Trace from chip going down with bend */}
        <polyline points="130,300 130,370 60,370 60,420" fill="none" stroke={traceColor} strokeOpacity={faintOpacity} strokeWidth="1" />
        <circle cx="130" cy="300" r="2.5" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />

        {/* Resistor symbol on left */}
        <polyline points="0,500 20,500 24,492 32,508 40,492 48,508 56,492 60,500 90,500" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
        {/* Trace continues down from resistor */}
        <polyline points="90,500 90,560 40,560 40,620 0,620" fill="none" stroke={traceColor} strokeOpacity={faintOpacity} strokeWidth="1" />
        <circle cx="90" cy="500" r="2.5" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />

        {/* Capacitor symbol lower left */}
        <line x1="30" y1="700" x2="30" y2="720" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
        <line x1="18" y1="720" x2="42" y2="720" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1.5" />
        <line x1="18" y1="726" x2="42" y2="726" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1.5" />
        <line x1="30" y1="726" x2="30" y2="746" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
        {/* Traces from capacitor */}
        <polyline points="30,700 30,680 80,680" fill="none" stroke={traceColor} strokeOpacity={faintOpacity} strokeWidth="1" />
        <polyline points="30,746 30,780 0,780" fill="none" stroke={traceColor} strokeOpacity={faintOpacity} strokeWidth="1" />

        {/* Long vertical bus trace left */}
        <line x1="120" y1="420" x2="120" y2="900" stroke={traceColor} strokeOpacity={faintOpacity} strokeWidth="1" />
        {/* Horizontal taps off the bus */}
        <line x1="120" y1="520" x2="70" y2="520" stroke={traceColor} strokeOpacity={faintOpacity} strokeWidth="1" />
        <line x1="120" y1="650" x2="50" y2="650" stroke={traceColor} strokeOpacity={faintOpacity} strokeWidth="1" />
        <line x1="120" y1="800" x2="80" y2="800" stroke={traceColor} strokeOpacity={faintOpacity} strokeWidth="1" />
        {/* Via pads on bus */}
        <circle cx="120" cy="520" r="2.5" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
        <circle cx="120" cy="650" r="2.5" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />

        {/* ===== RIGHT SIDE CIRCUIT CLUSTER ===== */}
        {/* IC chip - right side */}
        <g transform="translate(-80, 0)">
          <rect x="100%" y="160" width="70" height="45" rx="2" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
        </g>
        {/* Using percentage-friendly approach with a right-anchored group */}
        <g>
          {/* Traces coming from right edge */}
          <polyline points="100%,100 96%,100 96%,160 94%,160" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
          <polyline points="100%,180 95%,180 95%,220 93%,220 93%,300" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
          <circle cx="95%" cy="220" r="2.5" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />

          {/* IC chip right */}
          <rect x="88%" y="300" width="60" height="35" rx="2" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
          {/* Pins */}
          <line x1="88%" y1="310" x2="86%" y2="310" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
          <line x1="88%" y1="320" x2="85%" y2="320" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
          <line x1="88%" y1="325" x2="86%" y2="325" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />

          {/* Trace from chip down */}
          <polyline points="93%,335 93%,400 96%,400 96%,480 100%,480" fill="none" stroke={traceColor} strokeOpacity={faintOpacity} strokeWidth="1" />
          <circle cx="96%" cy="400" r="2.5" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />

          {/* Resistor on right side */}
          <polyline points="100%,550 96%,550 95.5%,542 94.5%,558 93.5%,542 92.5%,558 91.5%,542 91%,550 88%,550" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
          <polyline points="88%,550 88%,600 92%,600 92%,680" fill="none" stroke={traceColor} strokeOpacity={faintOpacity} strokeWidth="1" />
          <circle cx="88%" cy="550" r="2.5" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />

          {/* Capacitor right side */}
          <line x1="94%" y1="680" x2="94%" y2="700" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
          <line x1="92.5%" y1="700" x2="95.5%" y2="700" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1.5" />
          <line x1="92.5%" y1="706" x2="95.5%" y2="706" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1.5" />
          <line x1="94%" y1="706" x2="94%" y2="730" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
          <polyline points="94%,730 94%,760 100%,760" fill="none" stroke={traceColor} strokeOpacity={faintOpacity} strokeWidth="1" />
          <polyline points="94%,680 94%,660 100%,660" fill="none" stroke={traceColor} strokeOpacity={faintOpacity} strokeWidth="1" />

          {/* Vertical bus right */}
          <line x1="90%" y1="400" x2="90%" y2="850" stroke={traceColor} strokeOpacity={faintOpacity} strokeWidth="1" />
          <line x1="90%" y1="500" x2="94%" y2="500" stroke={traceColor} strokeOpacity={faintOpacity} strokeWidth="1" />
          <line x1="90%" y1="620" x2="95%" y2="620" stroke={traceColor} strokeOpacity={faintOpacity} strokeWidth="1" />
          <circle cx="90%" cy="500" r="2.5" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
          <circle cx="90%" cy="620" r="2.5" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />

          {/* Diode symbol bottom right */}
          <line x1="100%" y1="850" x2="92%" y2="850" stroke={traceColor} strokeOpacity={faintOpacity} strokeWidth="1" />
          <polygon points="92%,850 89%,842 89%,858" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
          <line x1="89%" y1="842" x2="89%" y2="858" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
          <line x1="89%" y1="850" x2="84%" y2="850" stroke={traceColor} strokeOpacity={faintOpacity} strokeWidth="1" />
        </g>

        {/* ===== BOTTOM AREA ===== */}
        <polyline points="200,900 200,860 300,860 300,820 400,820" fill="none" stroke={traceColor} strokeOpacity={faintOpacity} strokeWidth="1" />
        <circle cx="300" cy="860" r="2.5" fill="none" stroke={traceColor} strokeOpacity={traceOpacity} strokeWidth="1" />
      </svg>
    </div>
  );
};

export default CircuitBackground;

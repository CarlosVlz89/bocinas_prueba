import React, { useState, useEffect } from 'react';
import { 
  Routes, 
  Route, 
  Link, 
  NavLink, 
  useNavigate, 
  useLocation,
  useParams,
  useSearchParams,
  Outlet
} from 'react-router-dom';
import { 
  Menu, 
  X, 
  Volume2, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Search, 
  Sliders, 
  Mic, 
  Tv, 
  Zap, 
  CheckCircle, 
  Send, 
  ArrowRight, 
  Lock, 
  ShieldCheck, 
  FileText, 
  Check, 
  Award,
  Headphones
} from 'lucide-react';

// Shared variables for easy modification
const BRAND_NAME = "LEDS Y BOCINAS MADRIGAL";
const LEGAL_NAME = "LEDS Y BOCINAS MADRIGAL";
const ADDRESS = "Av. Convento Santa Mónica, Edificio 79, Piso 2, Interior 30 1-A, Col. Jardines de Santa Mónica, C.P. 54050, Tlalnepantla de Baz, Estado de México, México";
const SUPPORT_EMAIL = "ledsybocinasmadrigal26@gmail.com";

const SITE_DATA = {
  brandName: BRAND_NAME,
  legalName: LEGAL_NAME,
  phone: "(55) 90 65 01 22",
  phoneFormatted: "(55) 90 65 01 22",
  email: "ledsybocinasmadrigal26@gmail.com",
  supportEmail: SUPPORT_EMAIL,
  address: ADDRESS,
  googleMapsUrl: "https://maps.google.com/?q=Av.+Convento+Santa+Mónica,+Edificio+79,+Jardines+de+Santa+Mónica,+54050+Tlalnepantla+de+Baz",
  navigation: [
    { label: "Inicio", href: "/" },
    { label: "Catálogo", href: "/productos" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" }
  ],
  brands: [
    {
      id: "madrigalpro",
      name: "MADRIGAL PRO",
      logoColor: "#e31b23",
      logoText: "Madrigal Pro",
      description: "MADRIGAL PRO es nuestra línea de gama alta dirigida a audiófilos y profesionales del sonido. Sus soluciones abarcan bocinas line-array de alta potencia, luces LED de alta densidad DMX y audífonos de monitoreo de estudio con respuesta de frecuencia plana y altos estándares de seguridad eléctrica."
    },
    {
      id: "tianlai",
      name: "TIANLAI",
      logoColor: "#10b981",
      logoText: "tianlai",
      description: "Tianlai se especializa tanto en soluciones acústicas de gran relación costo-beneficio como en sistemas de iluminación LED residenciales y solares. Sus productos abarcan bafles de estantería en madera, audífonos deportivos de conducción ósea y una completa línea de plafones, reflectores de emergencia y mangueras LED."
    },
    {
      id: "megaluz",
      name: "MEGALUZ CONCERT",
      logoColor: "#f59e0b",
      logoText: "megaluz",
      description: "Megaluz es la división líder en luminarias LED inteligentes. Sus reflectores RGB de alta potencia y tiras LED programables proporcionan efectos de luz espectaculares y eficientes, ideales para escenarios, exteriores y fachadas comerciales."
    },
    {
      id: "goneo",
      name: "GONEO",
      logoColor: "#3b82f6",
      logoText: "goneo",
      description: "Goneo es líder global en el suministro de placas de interruptores de pared premium, contactos inteligentes y soluciones de tomacorrientes comerciales. Sus equipos proporcionan una base segura, robusta y automatizada para el control de redes de iluminación y distribución eléctrica en oficinas y salas de exhibición."
    }
  ],
      products: [
    {
      id: "madrigalpro-linearray",
      brand: "madrigalpro",
      name: "Altavoz Line Array Concert-12",
      category: "bocina",
      type: "speaker",
      imageUrl: "/images/bocina_linearray.jpg",
      shortDesc: "Bafle activo para line-array profesional con suspensión y DSP",
      price: "Cotizar precio",
      specs: [
        "Potencia: 800W RMS Clase D",
        "Respuesta de frecuencia: 55Hz - 18kHz",
        "Ángulo de dispersión: H 100° x V 15°",
        "Entrada: XLR Balanceada con bypass link"
      ]
    },
    {
      id: "madrigalpro-headphone",
      brand: "madrigalpro",
      name: "Audífonos de Estudio Studio-Max",
      category: "audifonos",
      type: "speaker",
      imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop",
      shortDesc: "Audífonos circumaurales de monitoreo profesional con respuesta plana",
      price: "Cotizar precio",
      specs: [
        "Respuesta de frecuencia: 5Hz - 40kHz",
        "Impedancia: 250 ohms para estudio",
        "Aislamiento pasivo de ruido: 32 dB",
        "Cable espiral desmontable y adaptador de rosca"
      ]
    },
    {
      id: "madrigalpro-led",
      brand: "madrigalpro",
      name: "Reflector Pro DMX 200W COB",
      category: "luces-led",
      type: "led-strip",
      imageUrl: "/images/reflector_dmx.jpg",
      shortDesc: "Reflector LED profesional de escenario con mezcla de color fluida",
      price: "Cotizar precio",
      specs: [
        "Potencia: 200W COB RGBW LED",
        "Control: DMX512, audiorítmico y automático",
        "Grado de protección: IP65 para intemperie",
        "Ángulo de haz: 60 grados de cobertura"
      ]
    },
    {
      id: "tianlai-bafle-8",
      brand: "tianlai",
      name: "Bafle Acústico Tianlai 8\"",
      category: "bocina",
      type: "speaker",
      imageUrl: "/images/bafle_madera.jpg",
      shortDesc: "Bafle de estantería en madera acústica con Bluetooth",
      price: "Cotizar precio",
      specs: [
        "Potencia: 120W RMS",
        "Gabinete de madera para resonancia profunda",
        "Controles: Graves y agudos independientes",
        "Entradas: RCA, Óptica y Auxiliar"
      ]
    },
    {
      id: "tianlai-headphones",
      brand: "tianlai",
      name: "Audífonos Deportivos Run-Free",
      category: "audifonos",
      type: "microphone",
      imageUrl: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=600&auto=format&fit=crop",
      shortDesc: "Audífonos de conducción ósea ideales para entrenamiento activo",
      price: "Cotizar precio",
      specs: [
        "Tecnología: Conducción ósea inalámbrica",
        "Autonomía: Hasta 8 horas continuas de audio",
        "Resistencia: Certificación IPX7 sumergible",
        "Diseño de titanio ultraligero de 26 gramos"
      ]
    },
    {
      id: "tianlai-2721",
      brand: "tianlai",
      name: "Lámpara Solar de Pared IP44",
      category: "luces-led",
      type: "led-strip",
      imageUrl: "https://megaluz.mx/upload/import/product/20260317/04746.png",
      shortDesc: "Lámpara de pared solar con sensor de movimiento para exteriores e iluminación ecológica.",
      price: "Cotizar precio",
      specs: [
        "Alimentación: Celda solar integrada de silicio monocristalino",
        "Batería: Litio recargable integrada de 800 mAh",
        "Protección: Grado IP44 resistente a la intemperie",
        "Instalación: Inalámbrica, ideal para fachadas y pasillos"
      ]
    },
    {
      id: "tianlai-2724",
      brand: "tianlai",
      name: "Reflector LED de Emergencia Portátil 50W",
      category: "luces-led",
      type: "led-strip",
      imageUrl: "https://megaluz.mx/upload/import/product/20260317/002414.png",
      shortDesc: "Reflector portátil recargable con soporte ajustable y cambio de temperatura de color.",
      price: "Cotizar precio",
      specs: [
        "Potencia: 50W de alta intensidad con chip LED COB",
        "Batería: Litio de larga duración de 3600 mAh recargable",
        "Temperatura de color: Ajustable en 3 tonos (3000K / 4000K / 6500K)",
        "Aplicación: Iluminación de rescate, campamentos o talleres"
      ]
    },
    {
      id: "tianlai-2726",
      brand: "tianlai",
      name: "Proyector Sub-Solar Metálico 30W",
      category: "luces-led",
      type: "led-strip",
      imageUrl: "https://megaluz.mx/upload/import/product/20260317/003025.png",
      shortDesc: "Proyector solar con chasis de hierro estampado para alta durabilidad en exteriores.",
      price: "Cotizar precio",
      specs: [
        "Potencia lumínica: LED eficiente de 30W de intensidad",
        "Batería: Celda de litio de alta capacidad con 3000 mAh",
        "Material: Gabinete de hierro estampado para resistir corrosión",
        "Control: Encendido inteligente automático con fotocelda"
      ]
    },
    {
      id: "tianlai-2733",
      brand: "tianlai",
      name: "Plafón de Techo LED Circular 17W",
      category: "luces-led",
      type: "led-strip",
      imageUrl: "https://megaluz.mx/upload/import/product/20260317/001816.png",
      shortDesc: "Lámpara de techo circular ultrafina de bajo perfil para iluminación residencial y oficinas.",
      price: "Cotizar precio",
      specs: [
        "Potencia: 17W LED de bajo consumo de energía",
        "Diámetro: Perfil circular compacto de 180 mm",
        "Temperatura: Tonos configurables cálido y frío (3000K / 6500K)",
        "Montaje: Sobreponer en losas o plafones falsos"
      ]
    },
    {
      id: "tianlai-2750",
      brand: "tianlai",
      name: "Manguera Neón Flex LED Flexible 5m",
      category: "luces-led",
      type: "led-strip",
      imageUrl: "https://megaluz.mx/upload/import/product/20260317/001784.png",
      shortDesc: "Tira de luz neón flexible de 5 metros resistente a la intemperie para decoración exterior y comercial.",
      price: "Cotizar precio",
      specs: [
        "Longitud: Rollo continuo de 5 metros flexible",
        "Tecnología: Tira LED de silicio de emisión de luz uniforme",
        "Protección: Grado de impermeabilidad IP65 para exteriores",
        "Alimentación: Conexión de 12V con adaptador de voltaje incluido"
      ]
    },
    {
      id: "megaluz-tira-5m",
      brand: "megaluz",
      name: "Tira LED RGBIC Direccionable 5m",
      category: "luces-led",
      type: "led-strip",
      imageUrl: "/images/tira_led.jpg",
      shortDesc: "Cinta LED programable inteligente compatible con App y asistentes",
      price: "Cotizar precio",
      specs: [
        "Chip: WS2812B direccionable individualmente",
        "Protección: IP65 con recubrimiento de silicona",
        "Conectividad: Wi-Fi y Bluetooth integrados",
        "Control por voz: Alexa y Google Home"
      ]
    },
    {
      id: "megaluz-2717",
      brand: "megaluz",
      name: "Plafón LED Empotrable Circular 6W",
      category: "luces-led",
      type: "led-strip",
      imageUrl: "https://megaluz.mx/upload/import/product/20260317/003350.png",
      shortDesc: "Panel LED circular empotrable de bajo consumo para iluminación interior.",
      price: "Cotizar precio",
      specs: [
        "Potencia: 6W LED con excelente flujo de lúmenes",
        "Instalación: Clips de empotrar en tablaroca o plafón",
        "Driver: Balastro electrónico externo independiente",
        "Color de luz: Blanco frío de alta visibilidad"
      ]
    },
    {
      id: "megaluz-2718",
      brand: "megaluz",
      name: "Plafón LED Empotrable Circular 12W",
      category: "luces-led",
      type: "led-strip",
      imageUrl: "https://megaluz.mx/upload/import/product/20260317/003352.png",
      shortDesc: "Lámpara de panel empotrable circular de alto rendimiento para oficinas o recámaras.",
      price: "Cotizar precio",
      specs: [
        "Potencia: 12W LED de distribución uniforme",
        "Diseño: Perfil ultradelgado con disipador de calor de aluminio",
        "Apertura: Haz de luz amplio de 120 grados",
        "Conexión: Driver directo a corriente comercial"
      ]
    },
    {
      id: "megaluz-2719",
      brand: "megaluz",
      name: "Plafón LED Empotrable Circular 18W",
      category: "luces-led",
      type: "led-strip",
      imageUrl: "https://megaluz.mx/upload/import/product/20260317/003353.png",
      shortDesc: "Lámpara de panel empotrable circular de gran poder lumínico para techos interiores.",
      price: "Cotizar precio",
      specs: [
        "Potencia: 18W para espacios amplios e iluminación general",
        "Eficiencia: Larga vida útil con un consumo mínimo",
        "Montaje: Empotrable con resortes metálicos de alta presión",
        " Driver: Incluye balastro electrónico auto-voltaje"
      ]
    },
    {
      id: "megaluz-2816",
      brand: "megaluz",
      name: "Máquina de Humo 800W BOMB800",
      category: "luces-led",
      type: "led-strip",
      imageUrl: "https://megaluz.mx/upload/import/product/20260317/003822.png",
      shortDesc: "Máquina de humo profesional de 800W para efectos escénicos y fiestas medianas.",
      price: "Cotizar precio",
      specs: [
        "Potencia: Calefactor de 800W de rápida recuperación",
        "Operación: Control remoto alámbrico e inalámbrico incluidos",
        "Capacidad: Depósito de líquido con indicador de nivel trasero",
        "Aplicación: Ideal para salones de fiesta, DJs y bares"
      ]
    },
    {
      id: "megaluz-2822",
      brand: "megaluz",
      name: "Reflector Par LED Exterior Deco-150",
      category: "luces-led",
      type: "led-strip",
      imageUrl: "https://megaluz.mx/upload/import/product/20260317/003814.jpg",
      shortDesc: "Reflector LED exterior impermeable para iluminación arquitectónica y escenarios.",
      price: "Cotizar precio",
      specs: [
        "Protección: Certificación IP65 para exteriores",
        "Mezcla de color: LEDs RGBW de alta potencia y transición fluida",
        "Control: Protocolo DMX512 y modos automáticos",
        "Diseño: Soporte de horquilla doble para suelo o estructura"
      ]
    },
    {
      id: "goneo-switch",
      brand: "goneo",
      name: "Apagador de Pared Inteligente Goneo",
      category: "luces-led",
      type: "light",
      imageUrl: "/images/goneo_placa.jpg",
      shortDesc: "Placa de apagadores táctiles inteligentes con Wi-Fi y panel de cristal templado",
      price: "Cotizar precio",
      specs: [
        "Control: Táctil capacitivo y aplicación remota Wi-Fi",
        "Compatibilidad: Redes de iluminación comercial y residencial",
        "Diseño: Panel de cristal templado minimalista de alta resistencia",
        "Seguridad: Protección contra sobrecargas y cortocircuitos"
      ]
    },
    {
      id: "goneo-outlet",
      brand: "goneo",
      name: "Contacto Dúplex Inteligente Goneo",
      category: "luces-led",
      type: "light",
      imageUrl: "/images/goneo_contacto.jpg",
      shortDesc: "Tomacorriente de pared inteligente con Wi-Fi y puertos de carga rápida",
      price: "Cotizar precio",
      specs: [
        "Conectividad: Wi-Fi para control por voz y automatización",
        "Puertos adicionales: 2 puertos USB de carga rápida inteligente",
        "Monitoreo: Sensor de consumo eléctrico en tiempo real",
        "Material: Retardante de llama de alta calidad y estándar de seguridad"
      ]
    }
  ],
  legal: {
    privacy: {
      title: "Aviso de Privacidad Integral",
      content: `${BRAND_NAME}, con nombre legal "${LEGAL_NAME}", con domicilio en ${ADDRESS}, es responsable del tratamiento de sus datos personales. Sus datos personales serán utilizados para proveer los servicios y productos requeridos, dar cumplimiento a obligaciones contraídas con nuestros clientes, enviar cotizaciones de proyectos, evaluar la calidad del servicio, y enviarle información técnica u ofertas comerciales relacionadas con nuestro portafolio de audio e iluminación.
      
      Los datos recopilados (Nombre, Correo Electrónico y Teléfono) son tratados bajo estrictas medidas de seguridad administrativas, técnicas y físicas, garantizando su confidencialidad. Para ejercer sus derechos ARCO (Acceso, Rectificación, Cancelación u Oposición) al tratamiento de sus datos, o revocar el consentimiento que nos ha otorgado, puede enviar una solicitud por escrito a nuestro correo de soporte técnico: ${SUPPORT_EMAIL}.
      
      Cualquier modificación a este aviso de privacidad estará disponible a través de este sitio web.`
    },
    terms: {
      title: "Términos y Condiciones de Uso y Venta",
      content: `El presente contrato regula los términos y condiciones de uso del sitio web y los términos comerciales aplicables a la cotización y adquisición de equipos de audio y sistemas de iluminación provistos por ${BRAND_NAME}.

      1. Cotizaciones: Todas las cotizaciones emitidas a través de nuestro sitio web o por correo oficial tienen una vigencia de 15 días naturales y están sugeras a disponibilidad de stock.
      2. Garantías: Todos nuestros productos cuentan con una garantía limitada de 1 año contra defectos de fabricación. La garantía no cubre daños causados por variaciones de voltaje, negligencia de instalación o uso inapropiado.
      3. Envíos y Entregas: Realizamos entregas seguras en toda la República Mexicana. Los costos de envío son calculados en la cotización formal de acuerdo al volumen y peso de los equipos.
      4. Métodos de Pago: Aceptamos transferencias bancarias SPEI, tarjetas de crédito/debito en terminales autorizadas y depósitos validados. Todos los precios están en Moneda Nacional (MXN).
      5. Ley Aplicable: Para la resolución de cualquier controversia legal, las partes se someten a la jurisdicción de los tribunales competentes de la Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles.`
    }
  }
};

// SVG Product Visualizers Component to give premium look in light theme
function ProductVisualizer({ type }) {
  switch (type) {
    case 'speaker':
      return (
        <svg className="w-full h-44 bg-slate-100 rounded-lg p-4 border border-slate-200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="speakerGlowLight" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e31b23" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#e31b23" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect x="60" y="20" width="80" height="160" rx="8" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
          <rect x="66" y="26" width="68" height="148" rx="4" fill="#0f172a" />
          
          <circle cx="100" cy="115" r="40" fill="url(#speakerGlowLight)" />
          
          {/* Tweeter */}
          <circle cx="100" cy="55" r="16" fill="#334155" />
          <circle cx="100" cy="55" r="6" fill="#0f172a" stroke="#e31b23" strokeWidth="2" />
          
          {/* Woofer */}
          <circle cx="100" cy="115" r="30" fill="#334155" stroke="#475569" strokeWidth="1" />
          <circle cx="100" cy="115" r="18" fill="#0f172a" stroke="#e31b23" strokeWidth="2" />
          <circle cx="100" cy="115" r="6" fill="#e31b23" />
        </svg>
      );
    case 'microphone':
      return (
        <svg className="w-full h-44 bg-slate-100 rounded-lg p-4 border border-slate-200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="micGlowLight" cx="50%" cy="40%" r="40%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="70" r="45" fill="url(#micGlowLight)" />
          <line x1="100" y1="110" x2="100" y2="170" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
          <path d="M 80 170 L 120 170" stroke="#475569" strokeWidth="7" strokeLinecap="round" />
          <circle cx="100" cy="100" r="18" stroke="#10b981" strokeWidth="2.5" />
          <rect x="92" y="75" width="16" height="40" rx="2" fill="#1e293b" />
          <rect x="88" y="42" width="24" height="35" rx="12" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="92" y1="52" x2="108" y2="52" stroke="#64748b" strokeWidth="1" />
          <line x1="90" y1="60" x2="110" y2="60" stroke="#64748b" strokeWidth="1" />
          <rect x="88" y="72" width="24" height="3" fill="#10b981" />
        </svg>
      );
    case 'led-strip':
      return (
        <svg className="w-full h-44 bg-slate-100 rounded-lg p-4 border border-slate-200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="neonPathLight" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <path d="M 25 140 Q 65 40 105 120 T 175 60" fill="none" stroke="url(#neonPathLight)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 25 140 Q 65 40 105 120 T 175 60" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
          <circle cx="46" cy="98" r="4.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
          <circle cx="82" cy="78" r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
          <circle cx="114" cy="115" r="4.5" fill="#10b981" stroke="#ffffff" strokeWidth="1" />
          <circle cx="140" cy="98" r="4.5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1" />
        </svg>
      );
    case 'screen':
      return (
        <svg className="w-full h-44 bg-slate-100 rounded-lg p-4 border border-slate-200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="35" width="150" height="100" rx="3" fill="#0f172a" stroke="#475569" strokeWidth="2" />
          <rect x="30" y="40" width="140" height="90" fill="#1e293b" />
          <line x1="76" y1="40" x2="76" y2="130" stroke="#0f172a" strokeWidth="1" opacity="0.4" />
          <line x1="124" y1="40" x2="124" y2="130" stroke="#0f172a" strokeWidth="1" opacity="0.4" />
          <line x1="30" y1="85" x2="170" y2="85" stroke="#0f172a" strokeWidth="1" opacity="0.4" />
          <path d="M 40 115 L 50 90 L 60 105 L 70 70 L 80 95 L 90 50 L 100 120 L 110 80 L 120 95 L 130 45 L 140 110 L 150 75 L 160 115" 
                fill="none" stroke="#e31b23" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 80 135 L 120 135 L 125 165 L 75 165 Z" fill="#475569" />
          <rect x="93" y="135" width="14" height="15" fill="#1e293b" />
        </svg>
      );
    case 'controller':
      return (
        <svg className="w-full h-44 bg-slate-100 rounded-lg p-4 border border-slate-200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="35" width="150" height="130" rx="6" fill="#334155" stroke="#1e293b" strokeWidth="2" />
          <rect x="32" y="42" width="136" height="116" rx="2" fill="#0f172a" />
          <rect x="42" y="50" width="40" height="20" rx="1" fill="#1e293b" stroke="#e31b23" strokeWidth="1" />
          <circle cx="105" cy="60" r="6" fill="#475569" />
          <line x1="105" y1="60" x2="108" y2="55" stroke="#e31b23" strokeWidth="1.5" />
          <circle cx="130" cy="60" r="6" fill="#475569" />
          <line x1="130" y1="60" x2="127" y2="55" stroke="#3b82f6" strokeWidth="1.5" />
          <rect x="45" y="85" width="5" height="55" rx="2.5" fill="#1e293b" />
          <rect x="75" y="85" width="5" height="55" rx="2.5" fill="#1e293b" />
          <rect x="105" y="85" width="5" height="55" rx="2.5" fill="#1e293b" />
          <rect x="135" y="85" width="5" height="55" rx="2.5" fill="#1e293b" />
          <rect x="42" y="105" width="11" height="7" rx="1" fill="#e31b23" />
          <rect x="72" y="125" width="11" height="7" rx="1" fill="#3b82f6" />
          <rect x="102" y="95" width="11" height="7" rx="1" fill="#ffffff" />
          <rect x="132" y="115" width="11" height="7" rx="1" fill="#e31b23" />
        </svg>
      );
    default:
      return (
        <div className="w-full h-44 bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200">
          <Volume2 className="w-12 h-12 text-slate-300" />
        </div>
      );
  }
}

// Scroll to Top component on route changes
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Master Layout Component
function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased selection:bg-brand-red selection:text-white font-sans">
      
      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-slate-50 p-1">
              <svg className="w-9 h-9" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="10" fill="#e31b23" />
                <circle cx="50" cy="22" r="5.5" fill="#ff007f" />
                <circle cx="68" cy="28" r="5.5" fill="#a855f7" />
                <circle cx="78" cy="45" r="5.5" fill="#3b82f6" />
                <circle cx="74" cy="66" r="5.5" fill="#06b6d4" />
                <circle cx="59" cy="78" r="5.5" fill="#10b981" />
                <circle cx="41" cy="78" r="5.5" fill="#84cc16" />
                <circle cx="26" cy="66" r="5.5" fill="#eab308" />
                <circle cx="22" cy="45" r="5.5" fill="#f97316" />
                <circle cx="32" cy="28" r="5.5" fill="#ef4444" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-slate-900 font-display leading-tight">
                MADRIGAL
              </span>
              <span className="text-[9px] font-black tracking-widest text-[#e31b23] -mt-1 block">
                LEDS Y BOCINAS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with react-router NavLink */}
          <nav className="hidden md:flex items-center gap-8">
            {SITE_DATA.navigation.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.href}
                className={({ isActive }) => 
                  `text-sm font-semibold transition-all duration-200 ${
                    isActive ? 'text-brand-red border-b-2 border-brand-red pb-1' : 'text-slate-600 hover:text-brand-red'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Header actions */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase text-white bg-brand-red rounded hover:bg-red-700 transition-all duration-300 shadow-sm"
            >
              Solicitar Cotización
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 py-6 px-4 space-y-4 shadow-lg animate-fadeIn z-50">
            <div className="flex flex-col gap-4">
              {SITE_DATA.navigation.map((item, idx) => (
                <NavLink
                  key={idx}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `text-base font-semibold px-2 py-1.5 rounded-md transition-all ${
                      isActive ? 'bg-red-50 text-brand-red' : 'text-slate-700 hover:text-brand-red hover:bg-slate-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#e31b23] text-white font-bold rounded hover:bg-red-700 transition-all"
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Outlet */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Dark Footer */}
      <footer className="bg-[#0b0f19] text-slate-400 border-t border-slate-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
            
            {/* Col 1: Brand Info */}
            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="10" fill="#e31b23" />
                  <circle cx="50" cy="22" r="5.5" fill="#ff007f" />
                  <circle cx="68" cy="28" r="5.5" fill="#a855f7" />
                  <circle cx="78" cy="45" r="5.5" fill="#3b82f6" />
                  <circle cx="74" cy="66" r="5.5" fill="#06b6d4" />
                  <circle cx="59" cy="78" r="5.5" fill="#10b981" />
                  <circle cx="41" cy="78" r="5.5" fill="#84cc16" />
                  <circle cx="26" cy="66" r="5.5" fill="#eab308" />
                  <circle cx="22" cy="45" r="5.5" fill="#f97316" />
                  <circle cx="32" cy="28" r="5.5" fill="#ef4444" />
                </svg>
                <span className="text-base font-black text-white tracking-wider font-display uppercase">{SITE_DATA.brandName}</span>
              </div>
              <p className="text-[11px] text-slate-500 max-w-xs leading-relaxed text-justify">
                Grupo comercial importador de sistemas de audio, iluminación inteligente, pantallas LED y soportes de televisión. Abasto garantizado para constructoras y comercios en todo el país.
              </p>
              <div className="flex items-center gap-3 pt-2 text-[10px] text-slate-500 font-bold uppercase">
                <ShieldCheck className="w-4 h-4 text-brand-red" /> Importación Formal y Directa
              </div>
            </div>

            {/* Col 2: Marcas */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Marcas</h4>
              <ul className="space-y-1.5 text-xs">
                <li><Link to="/productos?marca=madrigalpro" className="hover:text-brand-red transition-all">MADRIGAL PRO</Link></li>
                <li><Link to="/productos?marca=tianlai" className="hover:text-brand-red transition-all">TIANLAI</Link></li>
                <li><Link to="/productos?marca=megaluz" className="hover:text-brand-red transition-all">MEGALUZ CONCERT</Link></li>
                <li><Link to="/productos?marca=goneo" className="hover:text-brand-red transition-all">GONEO</Link></li>
              </ul>
            </div>

            {/* Col 3: Servicio */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Servicio</h4>
              <ul className="space-y-1.5 text-[11px]">
                <li><Link to="/contacto" className="hover:text-brand-red transition-all">Servicio Postventa</Link></li>
                <li><Link to="/contacto" className="hover:text-brand-red transition-all">Cotizaciones</Link></li>
              </ul>
            </div>

            {/* Col 4: Nosotros */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Nosotros</h4>
              <ul className="space-y-1.5 text-[11px]">
                <li><Link to="/nosotros" className="hover:text-brand-red transition-all">Perfil de la Empresa</Link></li>
                <li><Link to="/nosotros" className="hover:text-brand-red transition-all">Introducción de Marca</Link></li>
                <li><Link to="/aviso-privacidad" className="hover:text-brand-red transition-all text-left">Aviso de Privacidad</Link></li>
                <li><Link to="/terminos-condiciones" className="hover:text-brand-red transition-all text-left">Términos y Condiciones</Link></li>
              </ul>
            </div>

          </div>

          {/* Copyright details */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 gap-4 text-center md:text-left">
            <div>
              <p>© {new Date().getFullYear()} {SITE_DATA.brandName}. Todos los derechos reservados.</p>
              <p className="mt-1 text-[10px] text-slate-600">{SITE_DATA.legalName}</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
              <Link to="/aviso-privacidad" className="hover:text-white hover:underline transition-all">Aviso de Privacidad</Link>
              <span>|</span>
              <Link to="/terminos-condiciones" className="hover:text-white hover:underline transition-all">Términos y Condiciones</Link>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

// Helper to prefix local image URLs with Vite's BASE_URL for GitHub Pages support
const formatImageUrl = (url) => {
  if (!url) return '';
  if (url.startsWith('/')) {
    return `${import.meta.env.BASE_URL}${url.slice(1)}`;
  }
  return url;
};

// 1. HOME VIEW
function HomeView() {
  const navigate = useNavigate();

  return (
    <div className="animate-fadeIn">
      {/* Cinematic dark theme hero */}
      <section 
        className="relative overflow-hidden border-b border-slate-900 py-20 lg:py-32 bg-slate-950 text-white"
        style={{
          backgroundImage: `url("${import.meta.env.BASE_URL}images/hero_showcase.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay: deep dark gradient from left to transparent on the right, plus base ambient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-black/30 lg:bg-transparent z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl lg:max-w-3xl space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-900/35 bg-red-950/40 text-red-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" /> Equipamiento de Alta Fidelidad e Iluminación Inteligente
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none font-display">
              <span className="block text-slate-400 text-xl sm:text-2xl font-semibold tracking-normal mb-2 uppercase">
                {SITE_DATA.brandName}
              </span>
              PURE SOUND.<br />
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-[#e31b23] bg-clip-text text-transparent">
                VIBRANT LIGHT.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-justify lg:text-left max-w-xl">
              Distribuidora e importadora corporativa líder en México. Suministramos sistemas acústicos profesionales, iluminación comercial avanzada, pantallas LED y soportes bajo pedimentos y normativas de importación aplicables.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:justify-start gap-4 pt-2">
              <Link
                to="/productos"
                className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-bold rounded shadow-md transition-all duration-300 text-center flex items-center justify-center gap-2 group"
              >
                Explorar Catálogo <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contacto"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300 text-center"
              >
                Solicitar Cotización Formal
              </Link>
            </div>
            
            {/* Quick stats with glassmorphic cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 max-w-xl">
              {[
                { value: "Importación", label: "Directa y Legal" },
                { value: "SAT CFDI", label: "Facturación Autorizada" },
                { value: "1 Año", label: "Garantía de Fábrica" },
                { value: "0% Interés", label: "Cotización Libre" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded text-center">
                  <p className="text-sm font-bold text-white font-display">{stat.value}</p>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* Solutions highlights grid */}
      <section className="py-20 bg-slate-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 uppercase tracking-wide">Líneas de Solución Corporativa</h2>
          <p className="text-xs text-slate-500 mt-2">Suministro tecnológico de grado comercial para corporativos y constructoras.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Bocinas */}
          <div className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm space-y-4 hover:border-brand-red/30 transition-all">
            <div className="w-10 h-10 rounded bg-red-50 flex items-center justify-center text-brand-red">
              <Volume2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 uppercase">Audio y Bocinas</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Equipamiento acústico que abarca bafles pasivos para instalaciones, altavoces activos recargables para exteriores e interiores, y sistemas profesionales Line Array de alta potencia.
            </p>
            <Link to="/productos?categoria=bocina" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:underline">
              Ver bocinas y bafles <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Luces LED */}
          <div className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm space-y-4 hover:border-brand-red/30 transition-all">
            <div className="w-10 h-10 rounded bg-red-50 flex items-center justify-center text-brand-red">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 uppercase">Luces LED e Iluminación</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Soluciones avanzadas en tiras LED direccionables de alta densidad RGBIC, bombillas inteligentes y reflectores exteriores de alta potencia resistentes a la intemperie (IP65/IP66).
            </p>
            <Link to="/productos?categoria=luces-led" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:underline">
              Ver iluminación LED <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Audífonos */}
          <div className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm space-y-4 hover:border-brand-red/30 transition-all">
            <div className="w-10 h-10 rounded bg-red-50 flex items-center justify-center text-brand-red">
              <Headphones className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 uppercase">Audífonos y Monitoreo</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Audífonos Over-Ear premium con cancelación activa de ruido (ANC) híbrida, audífonos in-ear deportivos resistentes al sudor y cascos circumaurales de monitoreo de estudio.
            </p>
            <Link to="/productos?categoria=audifonos" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:underline">
              Ver audífonos y auriculares <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// 2. CATALOG VIEW
function CatalogView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("categoria") || "all";
  const brandParam = searchParams.get("marca");

  const [activeBrand, setActiveBrand] = useState(brandParam || "madrigalpro");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const navigate = useNavigate();

  // Sync active brand with URL parameter when it changes
  useEffect(() => {
    if (brandParam) {
      setActiveBrand(brandParam);
    }
  }, [brandParam]);

  // Keep selectedCategory in sync with URL parameter
  useEffect(() => {
    setSelectedCategory(categoryParam);
    if (categoryParam !== "all") {
      // If the currently selected brand has no products for this category, 
      // auto-switch to a brand that has at least one matching product.
      const currentBrandHasCategory = SITE_DATA.products.some(
        p => p.brand === activeBrand && p.category === categoryParam
      );
      if (!currentBrandHasCategory) {
        const matchingBrand = SITE_DATA.brands.find(b =>
          SITE_DATA.products.some(p => p.brand === b.id && p.category === categoryParam)
        );
        if (matchingBrand) {
          setActiveBrand(matchingBrand.id);
        }
      }
    }
  }, [categoryParam, activeBrand]);

  const currentBrandData = SITE_DATA.brands.find(b => b.id === activeBrand) || SITE_DATA.brands[0];

  const filteredProducts = SITE_DATA.products.filter(product => {
    const matchBrand = product.brand === activeBrand;
    const matchCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchBrand && matchCategory && matchSearch;
  });

  const handleQuoteClick = (name) => {
    navigate(`/contacto?producto=${encodeURIComponent(name)}`);
  };

  return (
    <div className="animate-fadeIn">
      {/* Top Header Banner */}
      <div 
        className="relative h-64 bg-cover bg-center flex items-center" 
        style={{ backgroundImage: `url("${import.meta.env.BASE_URL}images/catalog_banner.jpg")` }}
      >
        <div className="absolute inset-0 bg-slate-950/75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl font-extrabold text-white font-display uppercase tracking-wider">
            Catálogo Corporativo
          </h1>
          <p className="text-xs text-slate-300 mt-2 uppercase tracking-widest">
            Explora nuestras líneas premium de audio e iluminación
          </p>
        </div>
      </div>

      {/* Breadcrumb below banner */}
      <div className="bg-slate-100 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-brand-red">Inicio</Link>
          <span>/</span>
          <span className="font-bold text-slate-800">Catálogo de Productos</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Brand Tabs */}
      <div className="mb-6 border-b border-slate-200 pb-2">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Filtrar por Línea de Marca</h2>
        <div className="flex flex-wrap gap-2">
          {SITE_DATA.brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => {
                setActiveBrand(brand.id);
                // Clear category param to let them browse full brand catalog
                searchParams.delete("categoria");
                setSearchParams(searchParams);
                setSearchQuery("");
              }}
              className={`px-5 py-2.5 text-xs font-extrabold uppercase rounded border transition-all duration-200 ${activeBrand === brand.id ? 'bg-slate-400 text-white border-slate-400 shadow-sm' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'}`}
            >
              {brand.name}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Brand Info Box */}
      <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8 flex flex-col md:flex-row items-start gap-6 shadow-sm">
        <div className="flex flex-col items-center md:items-start shrink-0">
          <div 
            className="px-5 py-3.5 rounded font-black text-lg tracking-widest uppercase border border-slate-200 shadow-inner flex items-center justify-center min-w-[130px] text-center"
            style={{ color: currentBrandData.logoColor, borderColor: `${currentBrandData.logoColor}20`, backgroundColor: `${currentBrandData.logoColor}05` }}
          >
            {currentBrandData.logoText}
          </div>
          <span className="text-[9px] text-slate-400 font-bold uppercase mt-1.5">Marca Registrada</span>
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-900 mb-1.5 uppercase tracking-wide">
            Descripción Técnica de {currentBrandData.name}
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed text-justify">
            {currentBrandData.description}
          </p>
        </div>
      </div>

      {/* Grid Layout (Sidebar + Products) */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Sidebar */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-slate-400" /> Filtrar por Modelo
            </h4>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar modelo..."
                className="w-full text-xs pl-8 pr-3 py-2 rounded border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-red text-slate-800 focus:outline-none transition-all placeholder-slate-400"
              />
              <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">Categorías</h4>
            <div className="space-y-1.5">
              {[
                { id: "all", label: "Todas las categorías" },
                { id: "bocina", label: "Bocinas y Bafles" },
                { id: "luces-led", label: "Luces LED e Iluminación" },
                { id: "audifonos", label: "Audífonos y Monitoreo" }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    if (cat.id === "all") {
                      searchParams.delete("categoria");
                    } else {
                      searchParams.set("categoria", cat.id);
                    }
                    setSearchParams(searchParams);
                  }}
                  className={`w-full text-left text-xs py-2 px-2 rounded flex items-center justify-between transition-all ${selectedCategory === cat.id ? 'bg-slate-100 text-brand-red font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                  <span>{cat.label}</span>
                  {selectedCategory === cat.id && <Check className="w-3.5 h-3.5 text-brand-red" />}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm text-xs text-slate-500 leading-relaxed text-justify space-y-2">
            <h4 className="font-bold text-slate-800 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-red" /> Cotizador Corporativo
            </h4>
            <p>
              El sitio web es de carácter **informativo**. No integramos pasarela de pagos ni cobros electrónicos en línea. Seleccione sus equipos y genere su requisición formal de cotización en el formulario de la pestaña de Contacto.
            </p>
          </div>
        </aside>

        {/* Products Grid */}
        <section className="lg:col-span-9 space-y-6">
          <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm flex items-center justify-between text-xs text-slate-500">
            <span>
              Catálogo contiene <strong className="text-slate-800">{filteredProducts.length}</strong> productos disponibles para la marca <strong className="text-slate-800 uppercase">{currentBrandData.name}</strong>
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-lg border border-slate-200 p-16 text-center shadow-sm">
              <Sliders className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h4 className="text-xs font-bold text-slate-800 mb-1">Sin resultados</h4>
              <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
                No hay productos en esta categoría o marca que coincidan con tu búsqueda.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link 
                  key={product.id}
                  to={`/producto/${product.id}`}
                  className="group bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col hover:border-slate-400 hover:shadow-md transition-all duration-200 text-left"
                >
                  <div className="h-44 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                    <img 
                      src={formatImageUrl(product.imageUrl)} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-4 right-4 bg-white/90 border border-slate-200 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded text-slate-500">
                      {product.category}
                    </span>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <h4 className="text-sm font-bold text-slate-900 mb-1.5 line-clamp-1 group-hover:text-brand-red transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>

                    <div className="bg-slate-50 rounded border border-slate-100 p-3 mb-5">
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Especificaciones</p>
                      <ul className="space-y-1">
                        {product.specs.slice(0, 3).map((spec, idx) => (
                          <li key={idx} className="text-[10px] text-slate-600 flex items-start gap-1">
                            <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0 mt-1.5"></span>
                            <span className="line-clamp-1">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <p className="text-[9px] text-slate-400 uppercase tracking-widest font-semibold">Precio de lista (Est.)</p>
                        <p className="text-xs font-black text-slate-800">{product.price}</p>
                      </div>
                      <span className="px-3.5 py-1.5 text-[10px] font-bold uppercase rounded bg-slate-900 text-white group-hover:bg-brand-red transition-all">
                        Ver Detalle
                      </span>
                    </div>

                  </div>
                </Link>
              ))}
            </div>
          )}

          
        </section>

      </div>
      </div>
    </div>
  );
}

// 3. ABOUT VIEW
function AboutView() {
  return (
    <div className="animate-fadeIn">
      {/* Top Header Banner */}
      <div 
        className="relative h-64 bg-cover bg-center flex items-center" 
        style={{ backgroundImage: `url("${import.meta.env.BASE_URL}images/about_banner.jpg")` }}
      >
        <div className="absolute inset-0 bg-slate-950/75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl font-extrabold text-white font-display uppercase tracking-wider">
            Nosotros
          </h1>
          <p className="text-xs text-slate-300 mt-2 uppercase tracking-widest">
            Conoce nuestra historia y estándares de importación corporativa
          </p>
        </div>
      </div>

      {/* Breadcrumb below banner */}
      <div className="bg-slate-100 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-brand-red">Inicio</Link>
          <span>/</span>
          <span className="font-bold text-slate-800">Nosotros</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        <div className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 border-b pb-4 flex items-center gap-2">
            <Award className="w-8 h-8 text-brand-red" /> Nosotros e Infraestructura
          </h2>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed text-justify">
            {SITE_DATA.brandName} (bajo la razón social *{SITE_DATA.legalName}*) es un corporativo de capital mexicano encargado de la importación directa y distribución mayorista de soluciones tecnológicas de sonido profesional e iluminación inteligente. Proveemos un canal transparente y seguro para constructoras, contratistas del gobierno y distribuidores minoristas en el territorio nacional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Garantía de Origen", desc: "Equipos 100% legalizados mediante pedimentos de importación formales en aduanas mexicanas." },
            { title: "Estándares Eléctricos", desc: "Inspección rigurosa y cumplimiento de estándares de seguridad eléctrica para todos los equipos importados." },
            { title: "Soporte Técnico Especializado", desc: "Atención postventa, pólizas de garantía de 1 año y refacciones originales para proyectos comerciales." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-slate-200 p-6 space-y-3 shadow-sm">
              <CheckCircle className="w-8 h-8 text-brand-red" />
              <h4 className="text-sm font-bold text-slate-900 uppercase">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-950 uppercase">Validación Fiscal y de Activos</h3>
            <p className="text-xs text-slate-500 leading-relaxed text-justify">
              Entendemos los requerimientos de las instituciones financieras y auditorías administrativas. Por ello, {SITE_DATA.brandName} proporciona de manera transparente toda la documentación corporativa de soporte a nuestros clientes: constancia de situación fiscal del SAT, opinión de cumplimiento positiva en sentido fiscal, cuentas de banco validadas de la persona moral, e identificaciones aduanales de procedencia de equipos.
            </p>
          </div>
          <div className="space-y-4 bg-slate-50 p-6 rounded border border-slate-200 text-xs text-slate-500">
            <h4 className="font-bold text-slate-800 flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-brand-red" /> Transacciones Corporativas
            </h4>
            <p>
              Las cotizaciones se gestionan directamente a nivel administrativo mediante transferencias electrónicas a la cuenta de la persona moral *{SITE_DATA.legalName}*. No se reciben cobros electrónicos con tarjetas en este portal.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

// 4. CONTACT VIEW
function ContactView() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialProduct = queryParams.get('producto') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    state: '',
    company: '',
    productInterest: initialProduct,
    message: initialProduct 
      ? `Hola ${SITE_DATA.brandName}, me interesa solicitar una cotización e información sobre el producto: ${initialProduct}. Quedo a la espera de su contacto.`
      : ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({
        ...prev,
        productInterest: initialProduct,
        message: `Hola ${SITE_DATA.brandName}, me interesa solicitar una cotización e información sobre el producto: ${initialProduct}. Quedo a la espera de su contacto.`
      }));
    }
  }, [initialProduct]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', email: '', state: '', company: '', productInterest: '', message: '' });
    }, 4000);
  };

  return (
    <div className="animate-fadeIn">
      {/* Top Header Banner */}
      <div 
        className="relative h-64 bg-cover bg-center flex items-center" 
        style={{ backgroundImage: `url("${import.meta.env.BASE_URL}images/contact_banner.jpg")` }}
      >
        <div className="absolute inset-0 bg-slate-950/75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl font-extrabold text-white font-display uppercase tracking-wider">
            Contáctanos
          </h1>
          <p className="text-xs text-slate-300 mt-2 uppercase tracking-widest">
            Estamos listos para atender tu cotización y requerimientos aduanales
          </p>
        </div>
      </div>

      {/* Breadcrumb below banner */}
      <div className="bg-slate-100 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-brand-red">Inicio</Link>
          <span>/</span>
          <span className="font-bold text-slate-800">Contáctanos</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Contact Info Cards */}
        <div>
          <h2 className="text-xl font-bold text-center text-slate-900 mb-6 uppercase tracking-wider">Información de contacto</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            
            {/* Teléfono */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 text-center space-y-3 shadow-sm flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-brand-red shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Teléfono</span>
              <a href="tel:+525590650122" className="text-sm font-bold text-slate-800 hover:text-brand-red transition-all">
                {SITE_DATA.phone}
              </a>
            </div>

            {/* Buzón */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 text-center space-y-3 shadow-sm flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-brand-red shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Buzón</span>
              <a href={`mailto:${SITE_DATA.supportEmail}`} className="text-sm font-bold text-slate-800 hover:text-brand-red transition-all break-all">
                {SITE_DATA.supportEmail}
              </a>
            </div>

            {/* Dirección */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 text-center space-y-3 shadow-sm flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-brand-red shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Dirección</span>
              <p className="text-xs font-bold text-slate-800 leading-normal">
                {SITE_DATA.address}
              </p>
            </div>
          </div>
        </div>

        {/* Distributor recruitment Form */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 md:p-8 shadow-sm max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center text-slate-900 mb-2 uppercase tracking-wide">
            ¿Te interesa formar parte de nuestros distribuidores?
          </h2>
          <p className="text-xs text-slate-500 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            Conviértete en uno de nuestros socios comerciales y accede a beneficios exclusivos desde el inicio. Ofrecemos productos de alta rotación, marcas reconocidas y soporte especializado para ayudarte a hacer crecer tu negocio. Déjanos tus datos y muy pronto nos pondremos en contacto contigo.
          </p>

          {formSubmitted ? (
            <div className="py-12 text-center">
              <div className="w-12 h-12 rounded-full bg-red-50 text-brand-red flex items-center justify-center mx-auto mb-4 border border-red-200">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-800 mb-1">¡Mensaje Enviado Correctamente!</h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                Su solicitud ha sido registrada en el sistema de distribución de {SITE_DATA.brandName}. Un asesor comercial se pondrá en contacto con usted a la brevedad.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nombre Completo *"
                    className="w-full px-3 py-2.5 text-xs rounded border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-red focus:outline-none transition-all text-slate-800 placeholder-slate-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Teléfono *"
                    className="w-full px-3 py-2.5 text-xs rounded border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-red focus:outline-none transition-all text-slate-800 placeholder-slate-400"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Correo Electrónico *"
                    className="w-full px-3 py-2.5 text-xs rounded border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-red focus:outline-none transition-all text-slate-800 placeholder-slate-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="Estado / Ciudad"
                    className="w-full px-3 py-2.5 text-xs rounded border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-red focus:outline-none transition-all text-slate-800 placeholder-slate-400"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Nombre de la empresa"
                    className="w-full px-3 py-2.5 text-xs rounded border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-red focus:outline-none transition-all text-slate-800 placeholder-slate-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleInputChange}
                    placeholder="Productos de interés"
                    className="w-full px-3 py-2.5 text-xs rounded border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-red focus:outline-none transition-all text-slate-800 placeholder-slate-400"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  required
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Detalles de su proyecto / Comentarios adicionales..."
                  className="w-full px-3 py-2.5 text-xs rounded border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-red focus:outline-none transition-all resize-none text-slate-800 placeholder-slate-400"
                ></textarea>
              </div>

              <div className="flex justify-start">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#e31b23] hover:bg-red-700 font-bold uppercase tracking-wider text-white rounded-full text-xs transition-all flex items-center justify-between gap-3 shadow-sm group"
                >
                  <span>Enviar Mensaje</span>
                  <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-brand-red font-bold text-xs group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

// 5. PRODUCT DETAIL VIEW
function ProductDetailView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = SITE_DATA.products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center animate-fadeIn">
        <h2 className="text-xl font-bold text-slate-800">Producto no encontrado</h2>
        <Link to="/productos" className="text-brand-red hover:underline mt-4 inline-block font-semibold">Volver al catálogo</Link>
      </div>
    );
  }

  const getDetailedDesc = () => {
    if (product.category === 'bocina') {
      return `${product.name} diseñado para ofrecer un audio claro y de alto impacto. Cuenta con batería de litio recargable mediante USB, optimización de frecuencias para interiores y exteriores, entrada de audio auxiliar para diversos dispositivos y una construcción altamente resistente y duradera ideal para uso continuo.`;
    } else if (product.category === 'luces-led') {
      return `${product.name} proporciona una iluminación LED de alta eficiencia y estabilidad. Diseñado con disipación térmica optimizada para prolongar la vida útil del equipo, ideal para proyectos comerciales y residenciales con bajo consumo de energía y alta potencia lumínica.`;
    } else {
      return `${product.name} ofrece una experiencia acústica inmersiva y de alta definición. Cuenta con un diseño ergonómico ultraligero para máximo confort, emparejamiento inalámbrico rápido y una excelente atenuación de ruido ambiental para sonido profesional en movimiento.`;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      {/* Breadcrumb matching Megaluz details */}
      <div className="text-xs text-slate-500 mb-6 flex flex-wrap items-center gap-1.5">
        <Link to="/" className="hover:text-brand-red">Inicio</Link>
        <span>/</span>
        <Link to="/productos" className="hover:text-brand-red">Catálogo</Link>
        <span>/</span>
        <span className="text-slate-400 capitalize">{product.category === 'bocina' ? 'Bocina' : product.category === 'luces-led' ? 'Luces LED' : 'Audífonos'}</span>
        <span>/</span>
        <span className="font-bold text-slate-800 uppercase">{product.brand}</span>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-lg border border-slate-200 p-6 md:p-8 shadow-sm">
        
        {/* Left Column: Image with Thumbnails */}
        <div className="lg:col-span-6 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
          {/* Thumbnails strip */}
          <div className="flex sm:flex-col gap-2 shrink-0">
            <div className="w-12 h-12 rounded border-2 border-brand-red overflow-hidden p-0.5 bg-white cursor-pointer shadow-sm">
              <img src={formatImageUrl(product.imageUrl)} alt="Thumbnail 1" className="w-full h-full object-contain" />
            </div>
            <div className="w-12 h-12 rounded border border-slate-200 overflow-hidden p-0.5 bg-white opacity-40 cursor-not-allowed shadow-sm">
              <img src={formatImageUrl(product.imageUrl)} alt="Thumbnail 2" className="w-full h-full object-contain" />
            </div>
            <div className="w-12 h-12 rounded border border-slate-200 overflow-hidden p-0.5 bg-white opacity-40 cursor-not-allowed shadow-sm">
              <img src={formatImageUrl(product.imageUrl)} alt="Thumbnail 3" className="w-full h-full object-contain" />
            </div>
          </div>
          
          {/* Main big image view */}
          <div className="flex-grow w-full bg-slate-50 rounded border border-slate-200 p-6 flex items-center justify-center min-h-[300px]">
            <img 
              src={formatImageUrl(product.imageUrl)} 
              alt={product.name} 
              className="max-h-[300px] object-contain" 
            />
          </div>
        </div>

        {/* Right Column: Title and Details */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-center">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
              {product.name}
            </h1>
          </div>

          <p className="text-xs md:text-sm text-slate-500 leading-relaxed text-justify">
            {getDetailedDesc()}
          </p>

          {/* Action buttons */}
          <div className="pt-4 flex flex-col sm:flex-row flex-wrap gap-4 items-center">
            
            {/* Contáctanos button */}
            <button 
              onClick={() => navigate(`/contacto?producto=${encodeURIComponent(product.name)}`)}
              className="bg-[#e31b23] hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold text-xs uppercase flex items-center justify-between gap-3 shadow-md group transition-all"
            >
              <span>Contáctanos para Cotizar</span>
              <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#e31b23] text-[9px] group-hover:translate-x-0.5 transition-transform font-black">
                ▶
              </span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

// 6. PRIVACY POLICY VIEW
function PrivacyView() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 animate-fadeIn">
      <div className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
        <h1 className="text-2xl font-bold mb-6 text-slate-900 border-b pb-4 flex items-center gap-2">
          <ShieldCheck className="w-7 h-7 text-brand-red" /> {SITE_DATA.legal.privacy.title}
        </h1>
        <div className="text-xs text-slate-600 space-y-4 leading-relaxed whitespace-pre-line text-justify">
          {SITE_DATA.legal.privacy.content}
        </div>
      </div>
    </div>
  );
}

// 7. TERMS & CONDITIONS VIEW
function TermsView() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 animate-fadeIn">
      <div className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
        <h1 className="text-2xl font-bold mb-6 text-slate-900 border-b pb-4 flex items-center gap-2">
          <FileText className="w-7 h-7 text-brand-red" /> {SITE_DATA.legal.terms.title}
        </h1>
        <div className="text-xs text-slate-600 space-y-4 leading-relaxed whitespace-pre-line text-justify">
          {SITE_DATA.legal.terms.content}
        </div>
      </div>
    </div>
  );
}

// 8. ROUTING SETUP IN APP COMPONENT
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="productos" element={<CatalogView />} />
          <Route path="producto/:id" element={<ProductDetailView />} />
          <Route path="nosotros" element={<AboutView />} />
          <Route path="contacto" element={<ContactView />} />
          <Route path="aviso-privacidad" element={<PrivacyView />} />
          <Route path="terminos-condiciones" element={<TermsView />} />
        </Route>
      </Routes>
    </>
  );
}

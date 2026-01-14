import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    en: {
        // Navbar
        'nav.home': 'Home',
        'nav.features': 'Features',
        'nav.pricing': 'Pricing',
        'nav.faq': 'FAQ',
        'nav.startTrial': 'Start Free Trial',

        // Hero
        'hero.badge': 'The #1 Platform for High-Growth Performance',
        'hero.title.prefix': 'The only',
        'hero.title.suffix': 'platform for your growth.',
        'hero.subtitle': 'True Pipeline is the ultimate ecosystem designed to help you capture, nurture, and close leads with intelligent AI automation.',
        'hero.cta.start': 'Start Free Trial',
        'hero.cta.voice.connecting': 'Connecting...',
        'hero.cta.voice.end': 'End Voice Call',
        'hero.cta.voice.start': 'Talk to AI Agent',
        'hero.trial': '7-day free trial',
        'hero.cancel': 'Cancel anytime',

        // Workflow
        'workflow.badge': 'The Automated Flow',
        'workflow.title.prefix': 'Watch your business',
        'workflow.title.highlight': 'run itself.',
        'workflow.subtitle': 'True Pipeline replaces your entire stack with one intelligent, automated ecosystem.',

        'workflow.step1.eyebrow': 'Step 01: Capture',
        'workflow.step1.title': 'Omni-Channel Lead Capture',
        'workflow.step1.description': 'Automate lead collection from Facebook, Instagram, LinkedIn, SMS, and Email. Every conversation flows into one unified inbox instantly.',

        'workflow.step2.eyebrow': 'Step 02: Nurture',
        'workflow.step2.title': '24/7 AI-Powered Nurturing',
        'workflow.step2.description': 'Our intelligent AI agents engage leads in natural, human-like conversations. They answer questions and book demos while you sleep.',

        'workflow.step3.eyebrow': 'Step 03: Convert',
        'workflow.step3.title': 'Self-Driving Appointments',
        'workflow.step3.description': 'The platform automatically triggers calendar bookings and sends SMS reminders the moment a lead says yes.',

        'workflow.step4.eyebrow': 'Step 04: Scale',
        'workflow.step4.title': 'Unified Growth Engine',
        'workflow.step4.description': 'One source of truth. Full attribution tracking shows you exactly which campaigns are driving revenue in real-time.',

        // Features
        'features.badge': 'The Complete Stack',
        'features.title.prefix': 'Everything you need.',
        'features.title.suffix': 'No stitches required.',
        'features.subtitle': 'Replace dozens of expensive subscriptions with one unified growth engine. True Pipeline scales with your ambition.',
        // Feature Items (Row 1)
        'features.unifiedInbox': 'Unified Inbox',
        'features.unifiedInbox.desc': 'SMS, Email, FB, IG, and GMB in one feed.',
        'features.aiAutomation': 'AI Automation',
        'features.aiAutomation.desc': 'Intelligent workflows that nurture leads.',
        'features.smartCalendar': 'Smart Calendar',
        'features.smartCalendar.desc': 'Automated bookings with native reminders.',
        'features.websiteBuilder': 'Website Builder',
        'features.websiteBuilder.desc': 'Drag-and-drop high-performance sites.',
        'features.aiVoiceAgents': 'AI Voice Agents',
        'features.aiVoiceAgents.desc': 'Natural human-like voice interaction.',
        'features.aiInboundCalls': 'AI Inbound Calls',
        'features.aiInboundCalls.desc': 'Never miss a call with AI answering.',
        'features.aiOutboundCalls': 'AI Outbound Calls',
        'features.aiOutboundCalls.desc': 'Proactive follow-ups handled by AI.',
        'features.qrCodeEngine': 'QR Code Engine',
        'features.qrCodeEngine.desc': 'Generate smart tracking codes instantly.',
        'features.reputationManager': 'Reputation Manager',
        'features.reputationManager.desc': 'Automate reviews and brand feedback.',
        'features.socialPlanner': 'Social Planner',
        'features.socialPlanner.desc': 'Schedule content across all platforms.',
        // Feature Items (Row 2)
        'features.aiChatWidget': 'AI Chat Widget',
        'features.aiChatWidget.desc': 'Convert site visitors with smart chat.',
        'features.aiLiveCall': 'AI Live Call',
        'features.aiLiveCall.desc': 'Instant voice calls from your website.',
        'features.customDomains': 'Custom Domains',
        'features.customDomains.desc': 'Manage all brand assets in one portal.',
        'features.ecommerceStore': 'E-commerce Store',
        'features.ecommerceStore.desc': 'Sell products with native checkout.',
        'features.paymentGateways': 'Payment Gateways',
        'features.paymentGateways.desc': 'Stripe, Authorize, and NMI native sync.',
        'features.documentAutomation': 'Document Automation',
        'features.documentAutomation.desc': 'AI-powered contracts and proposals.',
        'features.advancedReporting': 'Advanced Reporting',
        'features.advancedReporting.desc': 'Deep attribution and ROI tracking.',
        'features.coursesLMS': 'Courses & LMS',
        'features.coursesLMS.desc': 'Host memberships and video training.',
        'features.conversionFunnels': 'Conversion Funnels',
        'features.conversionFunnels.desc': 'Multi-step funnels built for scale.',
        'features.apiWebhooks': 'API & Webhooks',
        'features.apiWebhooks.desc': 'Infinite connectivity for tech teams.',
        'features.phoneProvisioning': 'Phone Provisioning',
        'features.phoneProvisioning.desc': 'Get local and toll-free numbers.',
        'features.twoWaySMS': '2-Way SMS',
        'features.twoWaySMS.desc': 'Engage prospects via text marketing.',

        // Pricing
        'pricing.badge': 'Pricing Plans',
        'pricing.title': 'Choose Your',
        'pricing.title.highlight': 'Plan.',
        'pricing.monthly': 'Monthly',
        'pricing.annual': 'Annual',
        'pricing.save': 'Save 17%',
        'pricing.popular': 'Most Popular',
        'pricing.bestFor': 'Best for',
        'pricing.perMonth': '/month',
        'pricing.perYear': '/year',
        'pricing.billedAnnually': 'Billed annually — save',
        'pricing.everythingIn': 'Everything in',
        'pricing.plus': ', plus',
        'pricing.addons': 'Optional Add-Ons',
        'pricing.startTrial': 'Start Free Trial',
        'pricing.trialNote': '* All plans include a 7-day free trial.',

        // Plans
        'plan.launch.desc': 'Solo entrepreneurs and new businesses ready to capture and nurture their first leads',
        'plan.amplify.desc': 'Established businesses scaling up with multi-channel marketing and reputation building',
        'plan.true.desc': 'Growing companies building community, courses, and affiliate programs',

        // FAQ
        'faq.badge': 'Questions & Answers',
        'faq.title': 'Scaling Business with',
        'faq.title.highlight': 'Intelligent Growth.',
        'faq.subtitle': 'Everything you need to know about scaling with True Pipeline. If you have other questions, our team is always ready to help.',
        'faq.q1': 'What exactly is True Pipeline, and how is it different from other CRMs?',
        'faq.a1': 'True Pipeline is an all-in-one sales and automation platform built specifically for service-based businesses. Unlike generic CRMs, it combines pipelines, automation, messaging, booking, and AI-ready workflows into a single system designed to turn leads into booked conversations, not just store contacts.',
        'faq.q2': 'Can I use True Pipeline without changing my current tools?',
        'faq.a2': 'Yes. True Pipeline is designed to integrate with your existing stack. You can connect ads, forms, calendars, email, SMS, and third-party tools while gradually consolidating everything into one place. No forced migration, no operational shock.',
        'faq.q3': 'How fast can I get up and running?',
        'faq.a3': 'Most accounts are fully operational within a few days. Core pipelines, automations, calendars, and messaging can be launched quickly, and advanced workflows can be layered in over time. The goal is speed to value, not long onboarding cycles.',
        'faq.q4': 'Is True Pipeline just software, or do you help with setup and strategy?',
        'faq.a4': 'It’s more than software. True Pipeline comes with strategic guidance on pipeline structure, lead flow, and automation logic. The platform is built to support real sales processes, not generic templates that don’t match how businesses actually sell.',
        'faq.q5': 'Who is True Pipeline best suited for?',
        'faq.a5': 'True Pipeline is ideal for agencies, consultants, service providers, and B2B businesses that rely on leads, calls, appointments, and follow-ups to generate revenue. If your growth depends on managing conversations and moving prospects through a sales process, it’s built for you.',

        // Footer
        'footer.platform': 'Platform',
        'footer.legal': 'Legal',
        'footer.contact': 'Contact Us',
        'footer.bookDemo': 'Book Demo',
        'footer.reachOut': 'Reach Out',
        'footer.rights': 'All rights reserved.',
        'footer.p4p': 'A True P4P Product',
        'footer.modal.liveStrategy': 'Live Strategy Session',
        'footer.modal.title': 'Book your',
        'footer.modal.subtitle': 'Growth Demo',
        'footer.modal.desc': 'Select a time for a 1-on-1 walkthrough of the True Pipeline ecosystem and discover how to automate your scale.',
        'footer.modal.benefit1': '30-minute quick-start guide',
        'footer.modal.benefit2': 'Personalized automation audit',
        'footer.modal.benefit3': 'Direct Q&A with our growth team',

        // Dashboard Preview
        'dashboard.title': 'Performance Overview',
        'dashboard.subtitle': 'Real-time pipeline analytics',
        'dashboard.stat.revenue': 'Total Revenue',
        'dashboard.stat.leads': 'New Leads',
        'dashboard.stat.conversion': 'Conversion',
        'dashboard.stat.pipeline': 'Pipeline Value',

        // Feature Carousel
        'carousel.unifiedCRM': 'Unified CRM',
        'carousel.smartScheduling': 'Smart Scheduling',
        'carousel.emailAutomation': 'Email Automation',
        'carousel.realtimeAnalytics': 'Real-time Analytics',
        'carousel.aiAgents': 'AI Agents',
        'carousel.voiceAI': 'Voice AI',
        'carousel.aiOutbound': 'AI Outbound Calls',
        'carousel.aiInbound': 'AI Inbound Calls',
        'carousel.aiBooking': 'AI-Powered Booking',
        'carousel.omniSMS': 'Omni-channel SMS',
        'carousel.salesFunnels': 'Sales Funnels',
        'carousel.securePipelines': 'Secure Pipelines',

        // Chat Widget
        'chat.botTyping': 'Bot is typing...',
        'chat.agentActive': 'AI AGENT ACTIVE',
        'chat.userMessage': 'Hi Sarah! I saw you were interested in our growth plan. Would you like to see a quick demo tomorrow?',
        'chat.botMessage': 'That sounds perfect. How about 2 PM EST?',

        // Trial CTA
        'cta.badge': 'Join the growth engine',
        'cta.title.prefix': 'Ready to supercharge your',
        'cta.title.highlight': 'business?',
        'cta.subtitle': 'Join thousands of agencies and business owners who have switched to True Pipeline for better automation and growth.',
        'cta.button': 'START YOUR 7-DAY FREE TRIAL',
        'cta.card.opportunity': 'Opportunity',

        // Pricing Features (Detailed)
        'pricing.feat.crm': 'Smart CRM that tracks every opportunity',
        'pricing.feat.booking': 'Client booking and calendar sync',
        'pricing.feat.landing': 'Custom landing pages and funnels',
        'pricing.feat.forms': 'Lead capture forms and surveys',
        'pricing.feat.followup': 'Text and email follow-ups (automated)',
        'pricing.feat.campaigns': 'Email campaigns',
        'pricing.feat.missedCall': 'Missed call recovery',
        'pricing.feat.workflows': 'Smart automations and workflows',
        'pricing.feat.dashboards': 'Performance dashboards',
        'pricing.feat.qr': 'QR codes and review links',

        'pricing.feat.fb': 'Google & Facebook message integration',
        'pricing.feat.callTrack': 'Google Business call tracking',
        'pricing.feat.reviews': 'Review and reputation management',
        'pricing.feat.social': 'Social media content planner',
        'pricing.feat.templates': 'Campaign templates and documents',
        'pricing.feat.trigger': 'Smart trigger links',
        'pricing.feat.invoice': 'Invoice and payment requests',
        'pricing.feat.certs': 'Professional certificates',

        'pricing.feat.courses': 'Membership sites and course hosting',
        'pricing.feat.community': 'Private community platform',
        'pricing.feat.blog': 'Blog publishing system',
        'pricing.feat.quizzes': 'Custom quizzes and assessments',
        'pricing.feat.affiliate': 'Affiliate program management',

        'pricing.addon.whatsapp': 'WhatsApp',
        'pricing.addon.wordpress': 'WordPress',
        'pricing.addon.listings': 'Listings',
        'pricing.addon.aiEmployee': 'AI Employee',
        'pricing.addon.adManager': 'Ad Manager',
        // Hero Words
        'hero.word.ai': 'AI-Powered',
        'hero.word.unified': 'Unified',
        'hero.word.allInOne': 'All-in-One',
        'hero.word.automated': 'Automated',

        // Workflow Card Details
        'workflow.card.lead': 'New Lead',
        'workflow.card.dm': 'DM from',
        'workflow.card.inquiry': 'Inquiry',
        'workflow.card.details': 'Pricing details?',
        'workflow.card.connection': 'New Connection',
        'workflow.card.month': 'October 2024',
        'workflow.card.bookingConfirmed': 'Booking Confirmed',
        'workflow.card.totalPipeline': 'Total Pipeline',
        'workflow.card.campaignRoi': 'Campaign ROI',
        'workflow.card.viewReport': 'View Report',

        // Chart
        'chart.mon': 'Mon',
        'chart.tue': 'Tue',
        'chart.wed': 'Wed',
        'chart.thu': 'Thu',
        'chart.fri': 'Fri',
        'chart.sat': 'Sat',
        'chart.sun': 'Sun',
        'chart.leads': 'leads',
        'chart.sales': 'sales',
    },
    es: {
        // Hero Words
        'hero.word.ai': 'Inteligente',
        'hero.word.unified': 'Unificado',
        'hero.word.allInOne': 'Todo en Uno',
        'hero.word.automated': 'Automático',

        // Workflow Card Details
        'workflow.card.lead': 'Nuevo Lead',
        'workflow.card.dm': 'DM de',
        'workflow.card.inquiry': 'Consulta',
        'workflow.card.details': '¿Detalles de precio?',
        'workflow.card.connection': 'Nueva Conexión',
        'workflow.card.month': 'Octubre 2024',
        'workflow.card.bookingConfirmed': 'Reserva Confirmada',
        'workflow.card.totalPipeline': 'Pipeline Total',
        'workflow.card.campaignRoi': 'ROI de Campaña',
        'workflow.card.viewReport': 'Ver Reporte',

        // Chart
        'chart.mon': 'Lun',
        'chart.tue': 'Mar',
        'chart.wed': 'Mié',
        'chart.thu': 'Jue',
        'chart.fri': 'Vie',
        'chart.sat': 'Sáb',
        'chart.sun': 'Dom',
        'chart.leads': 'leads',
        'chart.sales': 'ventas',

        // Navbar
        'nav.home': 'Inicio',
        'nav.features': 'Funcionalidades',
        'nav.pricing': 'Precios',
        'nav.faq': 'Preguntas',
        'nav.startTrial': 'Prueba Gratis',

        // Hero
        'hero.badge': 'La Plataforma #1 de Alto Rendimiento',
        'hero.title.prefix': 'La única plataforma',
        'hero.title.suffix': 'para tu crecimiento.',
        'hero.subtitle': 'True Pipeline es el ecosistema definitivo diseñado para ayudarte a capturar, nutrir y cerrar clientes potenciales con automatización inteligente de IA.',
        'hero.cta.start': 'Empezar Prueba Gratis',
        'hero.cta.voice.connecting': 'Conectando...',
        'hero.cta.voice.end': 'Terminar Llamada',
        'hero.cta.voice.start': 'Hablar con Agente IA',
        'hero.trial': 'Prueba de 7 días',
        'hero.cancel': 'Cancela cuando quieras',

        // Workflow
        'workflow.badge': 'El Flujo Automatizado',
        'workflow.title.prefix': 'Mira tu negocio',
        'workflow.title.highlight': 'funcionar solo.',
        'workflow.subtitle': 'True Pipeline reemplaza todo tu stack con un ecosistema inteligente y automatizado.',

        'workflow.step1.eyebrow': 'Paso 01: Capturar',
        'workflow.step1.title': 'Captura Omnicanal',
        'workflow.step1.description': 'Automatiza la recolección de leads de Facebook, Instagram, LinkedIn, SMS y Email. Cada conversación fluye a una bandeja de entrada unificada al instante.',

        'workflow.step2.eyebrow': 'Paso 02: Nutrir',
        'workflow.step2.title': 'Nutrición IA 24/7',
        'workflow.step2.description': 'Nuestros agentes inteligentes interactúan en conversaciones naturales y humanas. Responden preguntas y agendan demos mientras duermes.',

        'workflow.step3.eyebrow': 'Paso 03: Convertir',
        'workflow.step3.title': 'Citas Automáticas',
        'workflow.step3.description': 'La plataforma activa automáticamente reservas de calendario y envía recordatorios SMS en el momento en que un lead dice sí.',

        'workflow.step4.eyebrow': 'Paso 04: Escalar',
        'workflow.step4.title': 'Motor de Crecimiento',
        'workflow.step4.description': 'Una única fuente de verdad. El seguimiento de atribución completo te muestra exactamente qué campañas están generando ingresos en real-time.',

        // Features
        'features.badge': 'El Stack Completo',
        'features.title.prefix': 'Todo lo que necesitas.',
        'features.title.suffix': 'Sin complicaciones.',
        'features.subtitle': 'Reemplaza docenas de suscripciones costosas con un motor de crecimiento unificado. True Pipeline escala con tu ambición.',
        // Feature Items (Row 1)
        'features.unifiedInbox': 'Bandeja Unificada',
        'features.unifiedInbox.desc': 'SMS, Email, FB, IG y GMB en un solo feed.',
        'features.aiAutomation': 'Automatización IA',
        'features.aiAutomation.desc': 'Flujos inteligentes que nutren leads.',
        'features.smartCalendar': 'Calendario Inteligente',
        'features.smartCalendar.desc': 'Reservas con recordatorios nativos.',
        'features.websiteBuilder': 'Constructor Web',
        'features.websiteBuilder.desc': 'Sitios de alto rendimiento arrastrar y soltar.',
        'features.aiVoiceAgents': 'Agentes de Voz IA',
        'features.aiVoiceAgents.desc': 'Interacción de voz natural y humana.',
        'features.aiInboundCalls': 'Llamadas Entrantes IA',
        'features.aiInboundCalls.desc': 'Nunca pierdas una llamada con IA.',
        'features.aiOutboundCalls': 'Llamadas Salientes IA',
        'features.aiOutboundCalls.desc': 'Seguimientos proactivos manejados por IA.',
        'features.qrCodeEngine': 'Motor Códigos QR',
        'features.qrCodeEngine.desc': 'Genera códigos de rastreo al instante.',
        'features.reputationManager': 'Gestor de Reputación',
        'features.reputationManager.desc': 'Automatiza reseñas y feedback de marca.',
        'features.socialPlanner': 'Planificador Social',
        'features.socialPlanner.desc': 'Programa contenido en todas las plataformas.',
        // Feature Items (Row 2)
        'features.aiChatWidget': 'Widget Chat IA',
        'features.aiChatWidget.desc': 'Convierte visitantes con chat inteligente.',
        'features.aiLiveCall': 'Llamada en Vivo IA',
        'features.aiLiveCall.desc': 'Llamadas instantáneas desde tu sitio web.',
        'features.customDomains': 'Dominios Personalizados',
        'features.customDomains.desc': 'Gestiona activos de marca en un portal.',
        'features.ecommerceStore': 'Tienda E-commerce',
        'features.ecommerceStore.desc': 'Vende productos con checkout nativo.',
        'features.paymentGateways': 'Pasarelas de Pago',
        'features.paymentGateways.desc': 'Sincronización nativa Stripe, Authorize y NMI.',
        'features.documentAutomation': 'Automatización Docs',
        'features.documentAutomation.desc': 'Contratos y propuestas potenciados por IA.',
        'features.advancedReporting': 'Reportes Avanzados',
        'features.advancedReporting.desc': 'Atribución profunda y rastreo de ROI.',
        'features.coursesLMS': 'Cursos y LMS',
        'features.coursesLMS.desc': 'Aloja membresías y entrenamiento en video.',
        'features.conversionFunnels': 'Embudos Conversión',
        'features.conversionFunnels.desc': 'Embudos multipaso construidos para escalar.',
        'features.apiWebhooks': 'API y Webhooks',
        'features.apiWebhooks.desc': 'Conectividad infinita para equipos técnicos.',
        'features.phoneProvisioning': 'Provisión Telefónica',
        'features.phoneProvisioning.desc': 'Obtén números locales y toll-free.',
        'features.twoWaySMS': 'SMS Bidireccional',
        'features.twoWaySMS.desc': 'Involucra prospectos vía marketing de texto.',

        // Pricing
        'pricing.badge': 'Planes de Precios',
        'pricing.title': 'Elige Tu',
        'pricing.title.highlight': 'Plan.',
        'pricing.monthly': 'Mensual',
        'pricing.annual': 'Anual',
        'pricing.save': 'Ahorra 17%',
        'pricing.popular': 'Más Popular',
        'pricing.bestFor': 'Ideal para',
        'pricing.perMonth': '/mes',
        'pricing.perYear': '/año',
        'pricing.billedAnnually': 'Facturado anualmente — ahorra',
        'pricing.everythingIn': 'Todo en',
        'pricing.plus': ', más',
        'pricing.addons': 'Complementos Opcionales',
        'pricing.startTrial': 'Empezar Prueba Gratis',
        'pricing.trialNote': '* Todos los planes incluyen prueba de 7 días.',

        // Plans
        'plan.launch.desc': 'Emprendedores y nuevos negocios listos para capturar y nutrir sus primeros leads',
        'plan.amplify.desc': 'Negocios establecidos escalando con marketing multicanal y construcción de reputación',
        'plan.true.desc': 'Empresas en crecimiento construyendo comunidad, cursos y programas de afiliados',

        // FAQ
        'faq.badge': 'Preguntas y Respuestas',
        'faq.title': 'Escalando Negocios con',
        'faq.title.highlight': 'Crecimiento Inteligente.',
        'faq.subtitle': 'Todo lo que necesitas saber sobre escalar con True Pipeline. Si tienes otras preguntas, nuestro equipo está listo para ayudar.',
        'faq.q1': '¿Qué es exactamente True Pipeline y cómo se diferencia de otros CRMs?',
        'faq.a1': 'True Pipeline es una plataforma todo en uno de ventas y automatización para negocios de servicios. A diferencia de CRMs genéricos, combina pipelines, automatización, mensajería, reservas y flujos IA en un solo sistema diseñado para convertir leads en conversaciones, no solo guardar contactos.',
        'faq.q2': '¿Puedo usar True Pipeline sin cambiar mis herramientas actuales?',
        'faq.a2': 'Sí. True Pipeline está diseñado para integrarse con tu stack actual. Puedes conectar anuncios, formularios, calendarios, email, SMS y herramientas de terceros mientras consolidas todo gradualmente en un solo lugar. Sin migración forzada.',
        'faq.q3': '¿Qué tan rápido puedo empezar?',
        'faq.a3': 'La mayoría de cuentas están operativas en pocos días. Los pipelines principales, automatizaciones y calendarios pueden lanzarse rápidamente, añadiendo flujos avanzados con el tiempo. El objetivo es valor rápido, no ciclos largos de integración.',
        'faq.q4': '¿Es True Pipeline solo software o ayudan con la estrategia?',
        'faq.a4': 'Es más que software. True Pipeline viene con guía estratégica sobre estructura de pipeline, flujo de leads y lógica de automatización. La plataforma soporta procesos de venta reales, no plantillas genéricas.',
        'faq.q5': '¿Para quién es ideal True Pipeline?',
        'faq.a5': 'True Pipeline es ideal para agencias, consultores y proveedores de servicios B2B que dependen de leads y citas para generar ingresos. Si tu crecimiento depende de gestionar conversaciones y mover prospectos por un proceso de ventas, es para ti.',

        // Footer
        'footer.platform': 'Plataforma',
        'footer.legal': 'Legal',
        'footer.contact': 'Contáctanos',
        'footer.bookDemo': 'Agendar Demo',
        'footer.reachOut': 'Contáctanos',
        'footer.rights': 'Todos los derechos reservados.',
        'footer.p4p': 'Un Producto True P4P',
        'footer.modal.liveStrategy': 'Sesión de Estrategia en Vivo',
        'footer.modal.title': 'Agenda tu',
        'footer.modal.subtitle': 'Demo de Crecimiento',
        'footer.modal.desc': 'Selecciona un horario para un recorrido 1 a 1 del ecosistema True Pipeline y descubre cómo automatizar tu escala.',
        'footer.modal.benefit1': 'Guía de inicio rápido de 30 minutos',
        'footer.modal.benefit2': 'Auditoría de automatización personalizada',
        'footer.modal.benefit3': 'Q&A directo con nuestro equipo de crecimiento',

        // Dashboard Preview (Spanish)
        'dashboard.title': 'Vista de Rendimiento',
        'dashboard.subtitle': 'Analítica de pipeline en tiempo real',
        'dashboard.stat.revenue': 'Ingresos Totales',
        'dashboard.stat.leads': 'Nuevos Leads',
        'dashboard.stat.conversion': 'Conversión',
        'dashboard.stat.pipeline': 'Valor Pipeline',

        // Feature Carousel (Spanish)
        'carousel.unifiedCRM': 'CRM Unificado',
        'carousel.smartScheduling': 'Agenda Inteligente',
        'carousel.emailAutomation': 'Automatización Email',
        'carousel.realtimeAnalytics': 'Analítica en Tiempo Real',
        'carousel.aiAgents': 'Agentes IA',
        'carousel.voiceAI': 'Voz IA',
        'carousel.aiOutbound': 'Llamadas Salientes IA',
        'carousel.aiInbound': 'Llamadas Entrantes IA',
        'carousel.aiBooking': 'Reservas con IA',
        'carousel.omniSMS': 'SMS Omnicanal',
        'carousel.salesFunnels': 'Embudos de Venta',
        'carousel.securePipelines': 'Pipelines Seguros',

        // Chat Widget (Spanish)
        'chat.botTyping': 'Bot está escribiendo...',
        'chat.agentActive': 'AGENTE IA ACTIVO',
        'chat.userMessage': '¡Hola Sarah! Vi que estabas interesada en nuestro plan de crecimiento. ¿Te gustaría ver una demo rápida mañana?',
        'chat.botMessage': 'Suena perfecto. ¿Qué tal a las 2 PM EST?',

        // Trial CTA (Spanish)
        'cta.badge': 'Únete al motor de crecimiento',
        'cta.title.prefix': '¿Listo para potenciar tu',
        'cta.title.highlight': 'negocio?',
        'cta.subtitle': 'Únete a miles de agencias y dueños de negocios que se han cambiado a True Pipeline para una mejor automatización y crecimiento.',
        'cta.button': 'EMPIEZA TU PRUEBA DE 7 DÍAS',
        'cta.card.opportunity': 'Oportunidad',

        // Pricing Features (Spanish)
        'pricing.feat.crm': 'CRM inteligente que rastrea cada oportunidad',
        'pricing.feat.booking': 'Sincronización de calendario y reservas',
        'pricing.feat.landing': 'Landing pages y embudos personalizados',
        'pricing.feat.forms': 'Formularios y encuestas de captura',
        'pricing.feat.followup': 'Seguimiento por texto y email (automatizado)',
        'pricing.feat.campaigns': 'Campañas de email',
        'pricing.feat.missedCall': 'Recuperación de llamadas perdidas',
        'pricing.feat.workflows': 'Automatizaciones y flujos inteligentes',
        'pricing.feat.dashboards': 'Tableros de rendimiento',
        'pricing.feat.qr': 'Códigos QR y enlaces de reseñas',

        'pricing.feat.fb': 'Integración de mensajes Google y Facebook',
        'pricing.feat.callTrack': 'Rastreo de llamadas Google Business',
        'pricing.feat.reviews': 'Gestión de reseñas y reputación',
        'pricing.feat.social': 'Planificador de contenido social',
        'pricing.feat.templates': 'Plantillas de campaña y documentos',
        'pricing.feat.trigger': 'Enlaces de disparo inteligentes',
        'pricing.feat.invoice': 'Solicitudes de pago y facturas',
        'pricing.feat.certs': 'Certificados profesionales',

        'pricing.feat.courses': 'Sitios de membresía y alojamiento de cursos',
        'pricing.feat.community': 'Plataforma de comunidad privada',
        'pricing.feat.blog': 'Sistema de publicación de blogs',
        'pricing.feat.quizzes': 'Cuestionarios y evaluaciones personalizadas',
        'pricing.feat.affiliate': 'Gestión de programa de afiliados',

        'pricing.addon.whatsapp': 'WhatsApp',
        'pricing.addon.wordpress': 'WordPress',
        'pricing.addon.listings': 'Listados',
        'pricing.addon.aiEmployee': 'Empleado IA',
        'pricing.addon.adManager': 'Gestor de Anuncios',
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

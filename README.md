# Analytics Pro - Dashboard SaaS

Un dashboard de analytics empresarial moderno, interactivo y profesional construido con las últimas tecnologías web.

## Tecnologías Utilizadas

- **Next.js 15** - Framework React con App Router
- **TypeScript** - Tipado estático para código robusto
- **Tailwind CSS** - Styling utility-first
- **Framer Motion** - Animaciones fluidas y profesionales
- **Recharts** - Gráficos responsivos e interactivos
- **Lucide React** - Iconos modernos

## Características Destacadas

### Diseño y UX
- **Glass Morphism Design** - Diseño moderno con efecto de vidrio
- **Animaciones Suaves** - Todas las interacciones animadas con Framer Motion
- **Micro-interacciones** - Feedback visual en cada interacción
- **Responsive Design** - Perfecto en mobile, tablet y desktop
- **Dark Theme** - Esquema de colores oscuro profesional

### Funcionalidades
- **Dashboard Interactivo** - Estadísticas en tiempo real
- **Gráficos Animados** - Visualización de datos con animaciones
- **Sidebar Colapsable** - Navegación fluida y optimizada
- **Actualizaciones en Tiempo Real** - Simulación de datos dinámicos
- **Búsqueda** - Input de búsqueda con estilos personalizados
- **Filtros** - Selección de rangos de fecha

### Arquitectura
- **Componentes Modulares** - Código reutilizable y mantenible
- **Hooks Personalizados** - Lógica encapsulada y reutilizable
- **TypeScript** - 100% tipado para robustez
- **Optimización de Performance** - Lazy loading y code splitting

## Estructura del Proyecto

```
dashboard-saas/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   └── UserProfile.tsx
│   ├── dashboard/
│   │   ├── StatsCard.tsx
│   │   ├── StatsGrid.tsx
│   │   ├── RevenueChart.tsx
│   │   ├── CategoryPieChart.tsx
│   │   ├── TransactionList.tsx
│   │   ├── TopProducts.tsx
│   │   └── DashboardContent.tsx
│   ├── ui/
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Select.tsx
│   │   └── SearchInput.tsx
│   └── animations/
│       ├── FadeIn.tsx
│       ├── SlideIn.tsx
│       └── ScaleOnHover.tsx
├── hooks/
│   ├── useCurrentTime.ts
│   ├── useSidebar.ts
│   └── useRealTimeData.ts
├── lib/
│   ├── data.ts
│   ├── utils.ts
│   └── animations.ts
└── types/
    └── index.ts
```

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo con Turbopack
- `npm run build` - Crea el build de producción
- `npm start` - Ejecuta el servidor de producción
- `npm run lint` - Ejecuta el linter

## Componentes Principales

### StatsGrid
Grid de 4 tarjetas de estadísticas con:
- Animaciones de entrada escalonadas
- Efectos hover
- Iconos animados
- Indicadores de tendencia

### RevenueChart
Gráfico de área que muestra:
- Ingresos vs Gastos mensuales
- Gradientes personalizados
- Tooltips interactivos
- Animaciones de carga

### CategoryPieChart
Gráfico circular con:
- Distribución por categorías
- Leyenda animada
- Colores personalizados
- Hover effects

### TransactionList
Lista de transacciones con:
- Animaciones de lista
- Estados de transacción
- Avatares personalizados
- Hover effects

### TopProducts
Ranking de productos con:
- Medallas para top 3
- Indicadores de crecimiento
- Animaciones de entrada
- Efectos interactivos

## Hooks Personalizados

### useCurrentTime
Hook para mostrar la hora actual actualizada cada segundo.

### useSidebar
Hook para manejar el estado del sidebar (abrir/cerrar).

### useRealTimeData
Hook que simula actualizaciones de datos en tiempo real cada 5 segundos.

## Personalización

### Colores
Los colores se pueden personalizar en `tailwind.config.ts` y en `app/globals.css`.

### Datos
Los datos simulados están en `lib/data.ts` y se pueden reemplazar con datos reales de una API.

### Animaciones
Las variantes de animación están en `lib/animations.ts` y se pueden ajustar según preferencias.

## Optimizaciones

- ✅ Server Components donde es posible
- ✅ Client Components solo cuando es necesario
- ✅ Lazy loading de componentes pesados
- ✅ Optimización de imágenes con Next.js
- ✅ Code splitting automático
- ✅ Tipado completo con TypeScript
- ✅ CSS optimizado con Tailwind

## Próximas Mejoras

- [ ] Integración con API real
- [ ] Autenticación de usuarios
- [ ] Modo claro/oscuro toggle
- [ ] Más páginas (Analytics, Clientes, etc.)
- [ ] Exportación de datos a PDF/Excel
- [ ] Panel de notificaciones funcional
- [ ] Tests unitarios y de integración

## Licencia

Este proyecto es parte de un portafolio profesional.

## Autor

Desarrollado con ❤️ usando Next.js, Tailwind CSS y Framer Motion

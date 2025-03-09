# Bienvenido a tu aplicación Expo 👋

Este es un proyecto [Expo](https://expo.dev) creado con [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Comenzar

1. Instalar dependencias

   ```bash
   npm install
   ```

2. Iniciar la aplicación

   ```bash
   npx expo start
   ```

En la salida, encontrarás opciones para abrir la aplicación en:

- [Desarrollo](https://docs.expo.dev/develop/development-builds/introduction/)
- [Emulador de Android](https://docs.expo.dev/workflow/android-studio-emulator/)
- [Simulador de iOS](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), un entorno limitado para probar el desarrollo de aplicaciones con Expo

Puedes comenzar a desarrollar editando los archivos dentro del directorio **app**. Este proyecto utiliza [enrutamiento basado en archivos](https://docs.expo.dev/router/introduction).

## Obtener un proyecto nuevo

Cuando estés listo, ejecuta:

```bash
npm run reset-project
```

Este comando moverá el código de inicio al directorio **app-example** y creará un directorio **app** en blanco donde puedes comenzar a desarrollar.

## Estructura del Proyecto

```
AstroLab/
├── .gitignore
├── app.json
├── declarations.d.ts
├── expo-env.d.ts
├── package.json
├── README.md
├── tsconfig.json
├── .expo/
│   ├── devices.json
│   ├── README.md
│   └── types/
├── app/
│   ├── _layout.tsx
│   ├── +not-found.tsx
│   ├── (tabs)/
│   └── ...
├── assets/
│   ├── fonts/
│   └── images/
├── components/
│   ├── Button.tsx
│   ├── card.tsx
│   ├── Collapsible.tsx
│   ├── CustomAlert.tsx
│   ├── ExternalLink.tsx
│   ├── HapticTab.tsx
│   ├── HelloWave.tsx
│   ├── LoadingSpinner.tsx
│   ├── ParallaxScrollView.tsx
│   ├── ThemedText.tsx
│   └── ThemedView.tsx
├── constants/
│   └── ...
├── context/
├── hooks/
├── scripts/
├── styles/
└── utils/
```

## Aprender más

Para aprender más sobre el desarrollo de tu proyecto con Expo, consulta los siguientes recursos:

- [Documentación de Expo](https://docs.expo.dev/): Aprende los fundamentos o profundiza en temas avanzados con nuestras [guías](https://docs.expo.dev/guides).
- [Tutorial de Expo](https://docs.expo.dev/tutorial/introduction/): Sigue un tutorial paso a paso donde crearás un proyecto que se ejecuta en Android, iOS y la web.

## Únete a la comunidad

Únete a nuestra comunidad de desarrolladores creando aplicaciones universales.

- [Expo en GitHub](https://github.com/expo/expo): Ve nuestra plataforma de código abierto y contribuye.
- [Comunidad en Discord](https://chat.expo.dev): Chatea con usuarios de Expo y haz preguntas.

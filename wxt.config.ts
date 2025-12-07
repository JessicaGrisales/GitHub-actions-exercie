import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
// export default defineConfig({
//   modules: ['@wxt-dev/module-react'],
//   manifest: {
//     permissions: ['scripting', 'activeTab'],
//     host_permissions: [
//       '<all_urls>',           // simplest option
//       // or more restrictive:
//       // 'https://*/*',
//       // 'http://*/*',
//     ],
//   },
// })

// wxt.config.ts (Votre fichier de configuration WXT)

// Décommentez la fonction defineConfig et ses options
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  manifest: {
    permissions: ["scripting", "activeTab"],
    host_permissions: ["<all_urls>"],
    // BLOC EN ENTIER AJOUTEE
    browser_specific_settings: {
      gecko: {
        // C'est l'ID unique que web-ext recherche.
        // Remplacez 'votre-extension-id@domaine.com' par l'ID que vous avez choisi.
        id: "addon-background-color@etml.com",
      },
    },
  },
});

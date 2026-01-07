import {
    defineConfig,
    presetIcons,
    presetWind3,
} from "unocss";

import { presetUI } from "@unifydev/preset-ui"
import { flexillaPreset } from "@unifydev/flexilla"


export default defineConfig({
    shortcuts: [
        {
        }
    ],
    theme: {
        borderRadius: {
            'ui': "var(--radius-ui)"
        }
    },
    presets: [
        presetWind3({
            dark: "class"
        }),
        flexillaPreset(),
        presetUI(),
        presetIcons({
            collections: {
                //@ts-ignore
                ph: () =>
                    import("@iconify-json/ph/icons.json").then((i) => i.default),
            },
            extraProperties: {
                display: 'inline-block',
                'vertical-align': 'middle',
            },
        }),
    ],
});
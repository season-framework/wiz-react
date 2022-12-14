import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
const args = process.argv.slice(2);

const pluginCache = new Map();
esbuild.build({
  entryPoints: [`${args[0]}`],
  outfile: `${args[1]}`,
  bundle: true,
  color: true,
  nodePaths: ["builtin_modules", "modules", "apps"],
  loader: {
    ".svg": "dataurl",
    '.png': 'dataurl',
    '.woff': 'dataurl',
    '.woff2': 'dataurl',
    '.eot': 'dataurl',
    '.ttf': 'dataurl',
  },
  plugins: [
    sassPlugin({
      implementation: "node-sass",
      cache: pluginCache,
    }),
  ],
});
